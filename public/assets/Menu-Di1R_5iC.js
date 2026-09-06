import{At as e,Dn as t,E as n,Mt as r,Q as i,Vt as a,_n as o,_t as s,at as c,b as l,ct as u,dt as d,et as f,gn as p,gt as m,hn as h,kn as g,nt as _,pn as v,qt as y,rt as b,st as x,tn as S,ut as C,vn as w,vt as T,w as E,wn as D,x as O,xt as k,yt as A}from"./rue-runtime-HIMg8Lz8.js";import{t as j}from"./Code-DpH7u0gk.js";import{t as M}from"./tabs-C020zIXs.js";import{t as N}from"./badge-ho--XXs0.js";import{t as P}from"./menu-D5HWGoRT.js";import{r as F}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var I=w(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ee=w('<div class="max-w-none prose prose-sm md:prose-base"><h1>Menu 菜单</h1><p class="text-sm mt-3 mb-3">Menu 用于垂直或水平展示导航链接。它同时支持组合静态结构，以及 `items / selectedKeys / openKeys / group / divider / extra` 等数据驱动 API。</p><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 推荐：items 数据驱动导航</h2><p class="mb-3 text-sm text-base-content/70">适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。</p><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 推荐：多选、分组与分割线</h2><p class="mb-3 text-sm text-base-content/70">沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。</p><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 推荐：组合式语义 API</h2><p class="mb-3 text-sm text-base-content/70">如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。</p><!--rue:opaque-hole:4--><!--rue:text-hole:5--></div><div class="my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose">下面的示例全部使用 Rue 当前静态/基础结构写法，用于展示 daisyUI 风格能力与覆盖范围。</div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 导航跳转</h2><!--rue:opaque-hole:6--><!--rue:text-hole:7--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu 通过数据渲染（数组）</h2><!--rue:opaque-hole:8--><!--rue:text-hole:9--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu 通过数据渲染（数组，组件内部）</h2><!--rue:opaque-hole:10--><!--rue:text-hole:11--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu</h2><!--rue:opaque-hole:12--><!--rue:text-hole:13--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 响应式：小屏垂直，大屏水平</h2><!--rue:opaque-hole:14--><!--rue:text-hole:15--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标</h2><!--rue:opaque-hole:16--><!--rue:text-hole:17--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标（水平）</h2><!--rue:opaque-hole:18--><!--rue:text-hole:19--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标（带 tooltip）</h2><!--rue:opaque-hole:20--><!--rue:text-hole:21--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标（水平，tooltip）</h2><!--rue:opaque-hole:22--><!--rue:text-hole:23--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu 尺寸</h2><!--rue:opaque-hole:24--><!--rue:text-hole:25--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 禁用项目</h2><!--rue:opaque-hole:26--><!--rue:text-hole:27--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 带图标</h2><!--rue:opaque-hole:28--><!--rue:text-hole:29--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 带图标与徽章（响应式）</h2><!--rue:opaque-hole:30--><!--rue:text-hole:31--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 去除内边距和圆角</h2><!--rue:opaque-hole:32--><!--rue:text-hole:33--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 带标题</h2><!--rue:opaque-hole:34--><!--rue:text-hole:35--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 标题作为父级</h2><!--rue:opaque-hole:36--><!--rue:text-hole:37--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 子菜单</h2><!--rue:opaque-hole:38--><!--rue:text-hole:39--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 可折叠子菜单</h2><!--rue:opaque-hole:40--><!--rue:text-hole:41--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 通过类名控制展开（JS）</h2><!--rue:opaque-hole:42--><!--rue:text-hole:43--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 文件树</h2><!--rue:opaque-hole:44--><!--rue:text-hole:45--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 激活项</h2><!--rue:opaque-hole:46--><!--rue:text-hole:47--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 水平菜单</h2><!--rue:opaque-hole:48--><!--rue:text-hole:49--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 水平子菜单</h2><!--rue:opaque-hole:50--><!--rue:text-hole:51--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Mega 菜单（响应式）</h2><!--rue:opaque-hole:52--><!--rue:text-hole:53--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 可折叠（响应式）</h2><!--rue:opaque-hole:54--><!--rue:text-hole:55--></div><h2>API</h2><p class="text-sm text-base-content/70">`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。</p><h3>Menu.Item 链接相关</h3><!--rue:opaque-hole:56--></div>'),te=e=>{let n=c(e.rows);return u(a(Object.assign(e=>{let r=I().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=w(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return D(()=>{let e=n.get()||[];c=E(a,i,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return O(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,c=t.childNodes[1].childNodes[0];c.data=``,c.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=o(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}let g=o(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=o(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>l(c)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{n.set(e.rows)}),()=>e)},ne=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],L=()=>{let t=S(`preview`),c=S(`preview`),l=S(`preview`),w=S(`preview`),E=S(`preview`),O=S(`preview`),I=S(`preview`),L=S(`preview`),R=S(`preview`),z=S(`preview`),B=S(`preview`),V=S(`preview`),H=S(`preview`),U=S(`preview`),W=S(`preview`),G=S(`preview`),K=S(`preview`),q=S(`preview`),J=S(`preview`),Y=S(`preview`),X=S(`preview`),Z=S(`preview`),Q=S(`preview`),$=S(`preview`),re=S(`preview`),ie=S(`preview`),ae=S(`preview`),oe=S(`preview`),se=S(`overview`),ce=S([`workspace`]),le=S([`profile`]),ue=S([`settings`]),de=e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},fe=[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],pe=[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}],me=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:a(Object.assign(e=>{let t=p(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-primary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),extra:b(N,()=>({size:`xs`,variant:`info`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return v(t,o(`Live`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:a(Object.assign(e=>{let t=p(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:b(N,()=>({size:`xs`,variant:`warning`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return v(t,o(`12`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:b(N,()=>({size:`xs`,variant:`success`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return v(t,o(`8`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],he=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:b(N,()=>({size:`xs`,variant:`error`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return v(t,o(`3`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))},{key:`reviews`,label:`Code Reviews`,extra:b(N,()=>({size:`xs`,variant:`warning`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return v(t,o(`5`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return y(()=>u((()=>{let u=e(()=>{let u=s(),f=ee().content.cloneNode(!0),y=f.firstChild,S=y.childNodes[2].childNodes[2],F=S.parentNode,ge=y.childNodes[2].childNodes[3],_e=ge.parentNode,ve=y.childNodes[3].childNodes[2],ye=ve.parentNode,be=y.childNodes[3].childNodes[3],xe=be.parentNode,Se=y.childNodes[4].childNodes[2],Ce=Se.parentNode,we=y.childNodes[4].childNodes[3],Te=we.parentNode,Ee=y.childNodes[6].childNodes[1],De=Ee.parentNode,Oe=y.childNodes[6].childNodes[2],ke=Oe.parentNode,Ae=y.childNodes[7].childNodes[1],je=Ae.parentNode,Me=y.childNodes[7].childNodes[2],Ne=Me.parentNode,Pe=y.childNodes[8].childNodes[1],Fe=Pe.parentNode,Ie=y.childNodes[8].childNodes[2],Le=Ie.parentNode,Re=y.childNodes[9].childNodes[1],ze=Re.parentNode,Be=y.childNodes[9].childNodes[2],Ve=Be.parentNode,He=y.childNodes[10].childNodes[1],Ue=He.parentNode,We=y.childNodes[10].childNodes[2],Ge=We.parentNode,Ke=y.childNodes[11].childNodes[1],qe=Ke.parentNode,Je=y.childNodes[11].childNodes[2],Ye=Je.parentNode,Xe=y.childNodes[12].childNodes[1],Ze=Xe.parentNode,Qe=y.childNodes[12].childNodes[2],$e=Qe.parentNode,et=y.childNodes[13].childNodes[1],tt=et.parentNode,nt=y.childNodes[13].childNodes[2],rt=nt.parentNode,it=y.childNodes[14].childNodes[1],at=it.parentNode,ot=y.childNodes[14].childNodes[2],st=ot.parentNode,ct=y.childNodes[15].childNodes[1],lt=ct.parentNode,ut=y.childNodes[15].childNodes[2],dt=ut.parentNode,ft=y.childNodes[16].childNodes[1],pt=ft.parentNode,mt=y.childNodes[16].childNodes[2],ht=mt.parentNode,gt=y.childNodes[17].childNodes[1],_t=gt.parentNode,vt=y.childNodes[17].childNodes[2],yt=vt.parentNode,bt=y.childNodes[18].childNodes[1],xt=bt.parentNode,St=y.childNodes[18].childNodes[2],Ct=St.parentNode,wt=y.childNodes[19].childNodes[1],Tt=wt.parentNode,Et=y.childNodes[19].childNodes[2],Dt=Et.parentNode,Ot=y.childNodes[20].childNodes[1],kt=Ot.parentNode,At=y.childNodes[20].childNodes[2],jt=At.parentNode,Mt=y.childNodes[21].childNodes[1],Nt=Mt.parentNode,Pt=y.childNodes[21].childNodes[2],Ft=Pt.parentNode,It=y.childNodes[22].childNodes[1],Lt=It.parentNode,Rt=y.childNodes[22].childNodes[2],zt=Rt.parentNode,Bt=y.childNodes[23].childNodes[1],Vt=Bt.parentNode,Ht=y.childNodes[23].childNodes[2],Ut=Ht.parentNode,Wt=y.childNodes[24].childNodes[1],Gt=Wt.parentNode,Kt=y.childNodes[24].childNodes[2],qt=Kt.parentNode,Jt=y.childNodes[25].childNodes[1],Yt=Jt.parentNode,Xt=y.childNodes[25].childNodes[2],Zt=Xt.parentNode,Qt=y.childNodes[26].childNodes[1],$t=Qt.parentNode,en=y.childNodes[26].childNodes[2],tn=en.parentNode,nn=y.childNodes[27].childNodes[1],rn=nn.parentNode,an=y.childNodes[27].childNodes[2],on=an.parentNode,sn=y.childNodes[28].childNodes[1],cn=sn.parentNode,ln=y.childNodes[28].childNodes[2],un=ln.parentNode,dn=y.childNodes[29].childNodes[1],fn=dn.parentNode,pn=y.childNodes[29].childNodes[2],mn=pn.parentNode,hn=y.childNodes[30].childNodes[1],gn=hn.parentNode,_n=y.childNodes[30].childNodes[2],vn=_n.parentNode,yn=y.childNodes[34],bn=yn.parentNode;u.appendChild(f);let xn=h(F);x(xn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.value,onChange:e=>t.value=e,className:`mb-3`})),F.insertBefore(xn,S),_(_e,ge,()=>t.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>b(P,()=>({mode:`inline`,className:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,items:me,selectedKeys:[se.value],openKeys:ce.value,onSelect:e=>se.value=String(e.key),onOpenChange:e=>ce.value=e}))}:{__rue_compiled_branch_key:!1,create:()=>b(j,()=>({className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`}))});let Sn=h(ye);x(Sn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:c.value,onChange:e=>c.value=e,className:`mb-3`})),ye.insertBefore(Sn,ve),_(xe,be,()=>c.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>b(P,()=>({className:`bg-base-200 rounded-box w-80`,items:he,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]}))}:{__rue_compiled_branch_key:!1,create:()=>b(j,()=>({className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`}))});let Cn=h(Ce);x(Cn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:l.value,onChange:e=>l.value=e,className:`mb-3`})),Ce.insertBefore(Cn,Se),D(()=>{let e=l.value===`preview`?(()=>{let e=r(P.Item,()=>({eventKey:`profile`,icon:a(Object.assign(e=>{let t=p(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-primary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),children:`Profile`})),t=r(P.Item,()=>({eventKey:`notifications`,extra:b(N,()=>({size:`xs`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return v(t,o(`2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),children:`Notifications`})),i=r(P.ItemGroup,()=>({title:`Account`,children:[e,t]})),c=r(P.Divider,()=>({})),l=r(P.Item,()=>({eventKey:`security`,children:`Security`})),u=r(P.Item,()=>({eventKey:`tokens`,extra:`Beta`,children:`API Tokens`})),d=r(P.SubMenu,()=>({eventKey:`settings`,title:`Settings`,icon:a(Object.assign(e=>{let t=p(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-accent`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),children:[l,u]}));return r(P,()=>({className:`bg-base-200 rounded-box w-80`,selectedKeys:le.value,openKeys:ue.value,onSelect:e=>le.value=e.selectedKeys,onOpenChange:e=>ue.value=e,children:[i,c,d]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`}));g(()=>C(e,Te,we))});let wn=h(De);x(wn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`})),De.insertBefore(wn,Ee),D(()=>{let e=oe.value===`preview`?(()=>{let e=r(P.Item,()=>({to:`/examples/hello-world`,children:`路由跳转到 Hello World`})),t=r(P.Item,()=>({href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`})),n=r(P.Item,()=>({onClick:()=>alert(`clicked`),children:`点击执行逻辑`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`}));g(()=>C(e,ke,Oe))});let Tn=h(je);x(Tn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`})),je.insertBefore(Tn,Ae),D(()=>{let t=ie.value===`preview`?r(P,()=>({className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:fe.map((t,n)=>e(()=>{let n=s(),i=T(`li`,n);d(n,i);let a=m(`rue:component:anchor`);d(i,a);let o=r(P.Item,()=>({children:t.label}));C(o,i,a);let c=m(`rue:component:anchor`);d(i,c);let l=r(P.Submenu,()=>({children:t.children.map((t,n)=>typeof t==`string`?r(P.Item,()=>({key:n,children:t})):e(()=>{let e=s(),n=T(`li`,e);d(e,n);let i=m(`rue:component:anchor`);d(n,i);let a=r(P.Item,()=>({children:t.label}));C(a,n,i);let o=m(`rue:component:anchor`);d(n,o);let c=r(P.Submenu,()=>({children:t.children.map((e,t)=>r(P.Item,()=>({key:t,children:e})))}));return C(c,n,o),e},!0))}));return C(l,i,c),n},!0))})):b(j,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`}));g(()=>C(t,Ne,Me))});let En=h(Fe);x(En,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`})),Fe.insertBefore(En,Pe),_(Le,Ie,()=>ae.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>b(P,()=>({items:pe,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`}))}:{__rue_compiled_branch_key:!1,create:()=>b(j,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`}))});let Dn=h(ze);x(Dn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:w.value,onChange:e=>w.value=e,className:`mb-3`})),ze.insertBefore(Dn,Re),D(()=>{let e=w.value===`preview`?(()=>{let e=r(P.Item,()=>({as:`button`,children:`Item 1`})),t=r(P.Item,()=>({as:`button`,children:`Item 2`})),n=r(P.Item,()=>({as:`button`,children:`Item 3`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}));g(()=>C(e,Ve,Be))});let On=h(Ue);x(On,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`})),Ue.insertBefore(On,He),D(()=>{let e=E.value===`preview`?(()=>{let e=r(P.Item,()=>({as:`button`,children:`Item 1`})),t=r(P.Item,()=>({as:`button`,children:`Item 2`})),n=r(P.Item,()=>({as:`button`,children:`Item 3`}));return r(P,()=>({className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}));g(()=>C(e,Ge,We))});let kn=h(qe);x(kn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`})),qe.insertBefore(kn,Ke),D(()=>{let t=O.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),n=r(P.Item,()=>({as:`button`,children:t})),a=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),o=r(P.Item,()=>({as:`button`,children:a})),c=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),l=r(P.Item,()=>({as:`button`,children:c}));return r(P,()=>({className:`bg-base-200 rounded-box`,children:[n,o,l]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}));g(()=>C(t,Ye,Je))});let An=h(Ze);x(An,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:I.value,onChange:e=>I.value=e,className:`mb-3`})),Ze.insertBefore(An,Xe),D(()=>{let t=I.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),n=r(P.Item,()=>({as:`button`,children:t})),a=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),o=r(P.Item,()=>({as:`button`,children:a})),c=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),l=r(P.Item,()=>({as:`button`,children:c}));return r(P,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box`,children:[n,o,l]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`}));g(()=>C(t,$e,Qe))});let jn=h(tt);x(jn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:L.value,onChange:e=>L.value=e,className:`mb-3`})),tt.insertBefore(jn,et),D(()=>{let t=L.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e}),n=r(P.Item,()=>({as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:t})),a=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),o=r(P.Item,()=>({as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:a})),c=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),l=r(P.Item,()=>({as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:c}));return r(P,()=>({className:`bg-base-200 rounded-box`,children:[n,o,l]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}));g(()=>C(t,rt,nt))});let Mn=h(at);x(Mn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:R.value,onChange:e=>R.value=e,className:`mb-3`})),at.insertBefore(Mn,it),D(()=>{let t=R.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e}),n=r(P.Item,()=>({as:`button`,className:`tooltip`,"data-tip":`Home`,children:t})),a=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),o=r(P.Item,()=>({as:`button`,className:`tooltip`,"data-tip":`Details`,children:a})),c=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e}),l=r(P.Item,()=>({as:`button`,className:`tooltip`,"data-tip":`Stats`,children:c}));return r(P,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:[n,o,l]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`}));g(()=>C(t,st,ot))});let Nn=h(lt);x(Nn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:z.value,onChange:e=>z.value=e,className:`mb-3`})),lt.insertBefore(Nn,ct),D(()=>{let t=z.value===`preview`?e(()=>{let e=s(),t=T(`div`,e);d(e,t),i(t,`grid gap-6`);let n=m(`rue:component:anchor`);d(t,n),D(()=>{let e=r(P.Item,()=>({as:`button`,children:`Xsmall 1`})),i=r(P.Item,()=>({as:`button`,children:`Xsmall 2`})),a=r(P,()=>({size:`xs`,className:`bg-base-200 rounded-box w-56`,children:[e,i]}));g(()=>C(a,t,n))});let a=m(`rue:component:anchor`);d(t,a),D(()=>{let e=r(P.Item,()=>({as:`button`,children:`Small 1`})),n=r(P.Item,()=>({as:`button`,children:`Small 2`})),i=r(P,()=>({size:`sm`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));g(()=>C(i,t,a))});let o=m(`rue:component:anchor`);d(t,o),D(()=>{let e=r(P.Item,()=>({as:`button`,children:`Medium 1`})),n=r(P.Item,()=>({as:`button`,children:`Medium 2`})),i=r(P,()=>({size:`md`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));g(()=>C(i,t,o))});let c=m(`rue:component:anchor`);d(t,c),D(()=>{let e=r(P.Item,()=>({as:`button`,children:`Large 1`})),n=r(P.Item,()=>({as:`button`,children:`Large 2`})),i=r(P,()=>({size:`lg`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));g(()=>C(i,t,c))});let l=m(`rue:component:anchor`);return d(t,l),D(()=>{let e=r(P.Item,()=>({as:`button`,children:`Xlarge 1`})),n=r(P.Item,()=>({as:`button`,children:`Xlarge 2`})),i=r(P,()=>({size:`xl`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));g(()=>C(i,t,l))}),e},!0):b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`}));g(()=>C(t,dt,ut))});let Pn=h(pt);x(Pn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:B.value,onChange:e=>B.value=e,className:`mb-3`})),pt.insertBefore(Pn,ft),D(()=>{let e=B.value===`preview`?(()=>{let e=r(P.Item,()=>({as:`button`,children:`Enabled item`})),t=r(P.Item,()=>({as:`button`,liClassName:`menu-disabled`,children:`disabled item`})),n=r(P.Item,()=>({as:`a`,className:`menu-disabled`,children:`disabled item`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`}));g(()=>C(e,ht,mt))});let Fn=h(_t);x(Fn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:V.value,onChange:e=>V.value=e,className:`mb-3`})),_t.insertBefore(Fn,gt),D(()=>{let t=V.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`Item 2`]})),a=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),o=r(P.Item,()=>({as:`button`,children:[a,`Item 1`]})),c=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),l=r(P.Item,()=>({as:`button`,children:[c,`Item 3`]}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[n,o,l]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}));g(()=>C(t,yt,vt))});let In=h(xt);x(In,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:H.value,onChange:e=>H.value=e,className:`mb-3`})),xt.insertBefore(In,bt),D(()=>{let t=H.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),n=r(N,()=>({size:`xs`,children:`99+`})),a=r(P.Item,()=>({as:`button`,children:[t,`Inbox`,n]})),o=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),i(t,`h-5 w-5`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`stroke`,`currentColor`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`strokeWidth`,`2`),k(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),c=r(N,()=>({size:`xs`,variant:`warning`,children:`NEW`})),l=r(P.Item,()=>({as:`button`,children:[o,`Updates`,` `,c]})),u=r(N,()=>({size:`xs`,variant:`info`})),f=r(P.Item,()=>({as:`button`,children:[`Stats`,u]}));return r(P,()=>({className:`bg-base-200 lg:menu-horizontal rounded-box`,children:[a,l,f]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`}));g(()=>C(t,Ct,St))});let Ln=h(Tt);x(Ln,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:U.value,onChange:e=>U.value=e,className:`mb-3`})),Tt.insertBefore(Ln,wt),D(()=>{let e=U.value===`preview`?(()=>{let e=r(P.Item,()=>({children:`Item 1`})),t=r(P.Item,()=>({children:`Item 2`})),n=r(P.Item,()=>({children:`Item 3`}));return r(P,()=>({className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));g(()=>C(e,Dt,Et))});let Rn=h(kt);x(Rn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:W.value,onChange:e=>W.value=e,className:`mb-3`})),kt.insertBefore(Rn,Ot),D(()=>{let e=W.value===`preview`?(()=>{let e=r(P.Title,()=>({children:`Title`})),t=r(P.Item,()=>({children:`Item 1`})),n=r(P.Item,()=>({children:`Item 2`})),i=r(P.Item,()=>({children:`Item 3`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n,i]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));g(()=>C(e,jt,At))});let zn=h(Nt);x(zn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:G.value,onChange:e=>G.value=e,className:`mb-3`})),Nt.insertBefore(zn,Mt),D(()=>{let t=G.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Title,()=>({as:`h2`,children:`Title`}));C(i,t,n);let a=T(`ul`,t);d(t,a);let o=m(`rue:component:anchor`);d(a,o);let c=r(P.Item,()=>({children:`Item 1`}));C(c,a,o);let l=m(`rue:component:anchor`);d(a,l);let u=r(P.Item,()=>({children:`Item 2`}));C(u,a,l);let f=m(`rue:component:anchor`);d(a,f);let p=r(P.Item,()=>({children:`Item 3`}));return C(p,a,f),e});return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:t}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`}));g(()=>C(t,Ft,Pt))});let Bn=h(Lt);x(Bn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:K.value,onChange:e=>K.value=e,className:`mb-3`})),Lt.insertBefore(Bn,It),D(()=>{let t=K.value===`preview`?(()=>{let t=r(P.Item,()=>({as:`button`,children:`Item 1`})),n=e(()=>{let t=s(),n=T(`li`,t);d(t,n);let i=m(`rue:component:anchor`);d(n,i);let a=r(P.Item,()=>({as:`button`,children:`Parent`}));C(a,n,i);let o=m(`rue:component:anchor`);return d(n,o),D(()=>{let t=r(P.Item,()=>({as:`button`,children:`Submenu 1`})),i=r(P.Item,()=>({as:`button`,children:`Submenu 2`})),a=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Item,()=>({as:`button`,children:`Parent`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({as:`button`,children:`Submenu 1`})),n=r(P.Item,()=>({as:`button`,children:`Submenu 2`})),i=r(P.Submenu,()=>({children:[e,n]}));g(()=>C(i,t,a))}),e}),c=r(P.Submenu,()=>({children:[t,i,a]}));g(()=>C(c,n,o))}),t}),i=r(P.Item,()=>({as:`button`,children:`Item 3`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[t,n,i]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}));g(()=>C(t,zt,Rt))});let Vn=h(Vt);x(Vn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:q.value,onChange:e=>q.value=e,className:`mb-3`})),Vt.insertBefore(Vn,Bt),D(()=>{let t=q.value===`preview`?(()=>{let t=r(P.Item,()=>({as:`button`,children:`Item 1`})),n=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=T(`details`,t);d(t,n);let i=T(`summary`,n);d(n,i),d(i,A(`Parent`));let a=T(`ul`,n);d(n,a);let o=m(`rue:component:anchor`);d(a,o);let c=r(P.Item,()=>({as:`button`,children:`Submenu 1`}));C(c,a,o);let l=m(`rue:component:anchor`);d(a,l);let u=r(P.Item,()=>({as:`button`,children:`Submenu 2`}));C(u,a,l);let f=T(`li`,a);d(a,f);let p=T(`details`,f);d(f,p);let h=T(`summary`,p);d(p,h),d(h,A(`Parent`));let g=T(`ul`,p);d(p,g);let _=m(`rue:component:anchor`);d(g,_);let v=r(P.Item,()=>({as:`button`,children:`Submenu 1`}));C(v,g,_);let y=m(`rue:component:anchor`);d(g,y);let b=r(P.Item,()=>({as:`button`,children:`Submenu 2`}));return C(b,g,y),e}),i=r(P.Item,()=>({as:`button`,children:`Item 3`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[t,n,i]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}));g(()=>C(t,Ut,Ht))});let Hn=h(Gt);x(Hn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:J.value,onChange:e=>J.value=e,className:`mb-3`})),Gt.insertBefore(Hn,Wt),D(()=>{let t=J.value===`preview`?e(()=>{let t=s(),n=T(`div`,t);d(t,n),i(n,`grid gap-6`);let a=m(`rue:component:anchor`);d(n,a),D(()=>{let t=r(P.Item,()=>({children:`Item 1`})),i=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.DropdownToggle,()=>({onClick:de,children:`Parent`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({children:`Submenu 1`})),n=r(P.Item,()=>({children:`Submenu 2`})),i=r(P.Dropdown,()=>({children:[e,n]}));g(()=>C(i,t,a))}),e}),o=r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[t,i]}));g(()=>C(o,n,a))});let o=m(`rue:component:anchor`);return d(n,o),D(()=>{let t=r(P.Item,()=>({children:`Item 1`})),i=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n),D(()=>{let e=r(P.DropdownToggle,()=>({show:!0,onClick:de,children:`Parent`}));g(()=>C(e,t,n))});let i=m(`rue:component:anchor`);return d(t,i),D(()=>{let e=r(P.Item,()=>({children:`Submenu 1`})),n=r(P.Item,()=>({children:`Submenu 2`})),a=r(P.Dropdown,()=>({show:!0,children:[e,n]}));g(()=>C(a,t,i))}),e}),a=r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[t,i]}));g(()=>C(a,n,o))}),t},!0):b(j,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`}));g(()=>C(t,qt,Kt))});let Un=h(Yt);x(Un,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Y.value,onChange:e=>Y.value=e,className:`mb-3`})),Yt.insertBefore(Un,Jt),D(()=>{let t=Y.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`resume.pdf`]})),a=e(()=>{let t=s(),n=T(`li`,t);d(t,n);let a=T(`details`,n);d(n,a);let o=T(`summary`,a);d(a,o);let c=T(`svg`,o);d(o,c),k(c,`xmlns`,`http://www.w3.org/2000/svg`),k(c,`fill`,`none`),k(c,`viewBox`,`0 0 24 24`),k(c,`strokeWidth`,`1.5`),k(c,`stroke`,`currentColor`),i(c,`w-4 h-4`);let l=T(`path`,c);d(c,l),k(l,`strokeLinecap`,`round`),k(l,`strokeLinejoin`,`round`),k(l,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),d(o,A(` My Files`));let u=T(`ul`,a);d(a,u);let f=m(`rue:component:anchor`);d(u,f),D(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`Project-final.psd`]}));g(()=>C(n,u,f))});let p=m(`rue:component:anchor`);d(u,p),D(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`Project-final-2.psd`]}));g(()=>C(n,u,p))});let h=T(`li`,u);d(u,h);let _=T(`details`,h);d(h,_);let v=T(`summary`,_);d(_,v);let y=T(`svg`,v);d(v,y),k(y,`xmlns`,`http://www.w3.org/2000/svg`),k(y,`fill`,`none`),k(y,`viewBox`,`0 0 24 24`),k(y,`strokeWidth`,`1.5`),k(y,`stroke`,`currentColor`),i(y,`w-4 h-4`);let b=T(`path`,y);d(y,b),k(b,`strokeLinecap`,`round`),k(b,`strokeLinejoin`,`round`),k(b,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),d(v,A(` Images`));let x=T(`ul`,_);d(_,x);let S=m(`rue:component:anchor`);d(x,S),D(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`Screenshot1.png`]}));g(()=>C(n,x,S))});let w=m(`rue:component:anchor`);d(x,w),D(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`Screenshot2.png`]}));g(()=>C(n,x,w))});let E=T(`li`,x);d(x,E);let O=T(`details`,E);d(E,O);let j=T(`summary`,O);d(O,j);let M=T(`svg`,j);d(j,M),k(M,`xmlns`,`http://www.w3.org/2000/svg`),k(M,`fill`,`none`),k(M,`viewBox`,`0 0 24 24`),k(M,`strokeWidth`,`1.5`),k(M,`stroke`,`currentColor`),i(M,`w-4 h-4`);let N=T(`path`,M);d(M,N),k(N,`strokeLinecap`,`round`),k(N,`strokeLinejoin`,`round`),k(N,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),d(j,A(` Others`));let F=T(`ul`,O);d(O,F);let I=m(`rue:component:anchor`);return d(F,I),D(()=>{let t=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e}),n=r(P.Item,()=>({as:`button`,children:[t,`Screenshot3.png`]}));g(()=>C(n,F,I))}),t}),o=e(()=>{let e=s(),t=T(`svg`,e);d(e,t),k(t,`xmlns`,`http://www.w3.org/2000/svg`),k(t,`fill`,`none`),k(t,`viewBox`,`0 0 24 24`),k(t,`strokeWidth`,`1.5`),k(t,`stroke`,`currentColor`),i(t,`w-4 h-4`);let n=T(`path`,t);return d(t,n),k(n,`strokeLinecap`,`round`),k(n,`strokeLinejoin`,`round`),k(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),c=r(P.Item,()=>({as:`button`,children:[o,`reports-final-2.pdf`]}));return r(P,()=>({size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,children:[n,a,c]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`}));g(()=>C(t,Zt,Xt))});let Wn=h($t);x(Wn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:X.value,onChange:e=>X.value=e,className:`mb-3`})),$t.insertBefore(Wn,Qt),D(()=>{let e=X.value===`preview`?(()=>{let e=r(P.Item,()=>({children:`Item 1`})),t=r(P.Item,()=>({className:`menu-active`,children:`Item 2`})),n=r(P.Item,()=>({children:`Item 3`}));return r(P,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`}));g(()=>C(e,tn,en))});let Gn=h(rn);x(Gn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Z.value,onChange:e=>Z.value=e,className:`mb-3`})),rn.insertBefore(Gn,nn),D(()=>{let e=Z.value===`preview`?(()=>{let e=r(P.Item,()=>({children:`Item 1`})),t=r(P.Item,()=>({children:`Item 2`})),n=r(P.Item,()=>({children:`Item 3`}));return r(P,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box`,children:[e,t,n]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));g(()=>C(e,on,an))});let Kn=h(cn);x(Kn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Q.value,onChange:e=>Q.value=e,className:`mb-3`})),cn.insertBefore(Kn,sn),D(()=>{let t=Q.value===`preview`?(()=>{let t=r(P.Item,()=>({children:`Item 1`})),n=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Item,()=>({children:`Parent`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({children:`Submenu 1`})),n=r(P.Item,()=>({children:`Submenu 2`})),i=r(P.Submenu,()=>({children:[e,n]}));g(()=>C(i,t,a))}),e}),i=r(P.Item,()=>({children:`Item 3`}));return r(P,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box`,children:[t,n,i]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));g(()=>C(t,un,ln))});let qn=h(fn);x(qn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:$.value,onChange:e=>$.value=e,className:`mb-3`})),fn.insertBefore(qn,dn),D(()=>{let t=$.value===`preview`?(()=>{let t=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Item,()=>({children:`Solutions`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({children:`Design`})),n=r(P.Item,()=>({children:`Development`})),i=r(P.Item,()=>({children:`Hosting`})),o=r(P.Item,()=>({children:`Domain register`})),s=r(P.Submenu,()=>({children:[e,n,i,o]}));g(()=>C(s,t,a))}),e}),n=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Item,()=>({children:`Enterprise`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({children:`CRM software`})),n=r(P.Item,()=>({children:`Marketing management`})),i=r(P.Item,()=>({children:`Security`})),o=r(P.Item,()=>({children:`Consulting`})),s=r(P.Submenu,()=>({children:[e,n,i,o]}));g(()=>C(s,t,a))}),e}),i=e(()=>{let t=s(),n=T(`li`,t);d(t,n);let i=m(`rue:component:anchor`);d(n,i);let a=r(P.Item,()=>({children:`Products`}));C(a,n,i);let o=m(`rue:component:anchor`);return d(n,o),D(()=>{let t=r(P.Item,()=>({children:`UI Kit`})),i=r(P.Item,()=>({children:`WordPress themes`})),a=r(P.Item,()=>({children:`WordPress plugins`})),c=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Item,()=>({children:`Open source`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({children:`Auth management system`})),n=r(P.Item,()=>({children:`VScode theme`})),i=r(P.Item,()=>({children:`Color picker app`})),o=r(P.Submenu,()=>({children:[e,n,i]}));g(()=>C(o,t,a))}),e}),l=r(P.Submenu,()=>({children:[t,i,a,c]}));g(()=>C(l,n,o))}),t}),a=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=m(`rue:component:anchor`);d(t,n);let i=r(P.Item,()=>({children:`Company`}));C(i,t,n);let a=m(`rue:component:anchor`);return d(t,a),D(()=>{let e=r(P.Item,()=>({children:`About us`})),n=r(P.Item,()=>({children:`Contact us`})),i=r(P.Item,()=>({children:`Privacy policy`})),o=r(P.Item,()=>({children:`Press kit`})),s=r(P.Submenu,()=>({children:[e,n,i,o]}));g(()=>C(s,t,a))}),e});return r(P,()=>({className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:[t,n,i,a]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`}));g(()=>C(t,mn,pn))});let Jn=h(gn);x(Jn,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`})),gn.insertBefore(Jn,hn),D(()=>{let t=re.value===`preview`?(()=>{let t=r(P.Item,()=>({as:`button`,children:`Item 1`})),n=e(()=>{let e=s(),t=T(`li`,e);d(e,t);let n=T(`details`,t);d(t,n);let i=T(`summary`,n);d(n,i),d(i,A(`Parent item`));let a=T(`ul`,n);d(n,a);let o=m(`rue:component:anchor`);d(a,o);let c=r(P.Item,()=>({as:`button`,children:`Submenu 1`}));C(c,a,o);let l=m(`rue:component:anchor`);d(a,l);let u=r(P.Item,()=>({as:`button`,children:`Submenu 2`}));C(u,a,l);let f=T(`li`,a);d(a,f);let p=T(`details`,f);d(f,p);let h=T(`summary`,p);d(p,h),d(h,A(`Parent`));let g=T(`ul`,p);d(p,g);let _=m(`rue:component:anchor`);d(g,_);let v=r(P.Item,()=>({as:`button`,children:`item 1`}));C(v,g,_);let y=m(`rue:component:anchor`);d(g,y);let b=r(P.Item,()=>({as:`button`,children:`item 2`}));return C(b,g,y),e}),i=r(P.Item,()=>({as:`button`,children:`Item 3`}));return r(P,()=>({className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:[t,n,i]}))})():b(j,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`}));g(()=>C(t,vn,_n))});let Yn=h(bn);return x(Yn,te,()=>({rows:ne})),bn.insertBefore(Yn,yn),u});return r(F,()=>({children:u}))})(),e=>f(()=>{})))};export{L as default};
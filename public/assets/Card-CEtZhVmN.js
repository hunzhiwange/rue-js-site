import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,st as u,t as d,tt as f,zt as p}from"./vapor-runtime-CXIalONM.js";import{a as m,n as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as g,i as _}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as v}from"./Code-BIscIyEp.js";import{t as y}from"./button-CeShl0h_.js";import{t as b}from"./card-CUf5IzrW.js";import{t as x}from"./tabs-CZWMQq5i.js";import{t as S}from"./badge-yUyMWmRO.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var w=a=>s(u=>{let p=o(`div`,u);c(p,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,p);i(p,m),c(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);i(m,h);let g=o(`h2`,h);i(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,f(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>l(e,g,_))});let y=t(`rue:slot:anchor`);i(h,y),n(()=>{let u=a.summary?s(()=>{let s=e(),u=o(`p`,s);i(s,u),c(u,`m-0 text-sm opacity-70`);let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let e=a.summary;r(()=>l(e,u,d))}),s}):``;r(()=>l(u,h,y))});let b=t(`rue:component:anchor`);i(p,b),n(()=>{let e=d(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>l(e,p,b))});let S=t(`rue:slot:anchor`);return i(p,S),n(()=>{let o=a.tab.value===`preview`?a.preview():s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>l(e,o,s))}),o});r(()=>l(o,p,S))}),p}),T=a=>s(d=>{let p=o(`div`,d);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,p);i(p,m),c(m,`table table-zebra`);let g=o(`thead`,m);i(m,g);let _=o(`tr`,g);i(g,_);let v=o(`th`,_);i(_,v),i(v,f(`属性`));let y=o(`th`,_);i(_,y),i(y,f(`说明`));let b=o(`th`,_);i(_,b),i(b,f(`类型`));let x=o(`th`,_);i(_,x),i(x,f(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=h({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,d,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{u(c,`key`,String(a.prop))});let d=o(`td`,c);i(c,d);let f=o(`code`,d);i(d,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,d)}})}),p}),E=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,ee=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,te=`https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp`,ne=`https://picsum.photos/seed/rue-card-workspace/960/640`,re=`https://picsum.photos/seed/rue-card-report/960/640`,ie=()=>s(e=>{let t=o(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`viewBox`,`0 0 24 24`),u(t,`fill`,`none`),u(t,`stroke`,`currentColor`),u(t,`strokeWidth`,`2`),c(t,`size-4`);let n=o(`path`,t);i(t,n),u(n,`strokeLinecap`,`round`),u(n,`strokeLinejoin`,`round`),u(n,`d`,`M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z`);let r=o(`circle`,t);return i(t,r),u(r,`cx`,`12`),u(r,`cy`,`12`),u(r,`r`,`3`),t}),ae=()=>s(e=>{let t=o(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`viewBox`,`0 0 24 24`),u(t,`fill`,`none`),u(t,`stroke`,`currentColor`),u(t,`strokeWidth`,`2`),c(t,`size-4`);let n=o(`path`,t);i(t,n),u(n,`strokeLinecap`,`round`),u(n,`strokeLinejoin`,`round`),u(n,`d`,`m4 16 6-6 4 4 6-8`);let r=o(`path`,t);return i(t,r),u(r,`strokeLinecap`,`round`),u(r,`strokeLinejoin`,`round`),u(r,`d`,`M14 6h6v6`),t}),oe=()=>s(e=>{let t=o(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`viewBox`,`0 0 24 24`),u(t,`fill`,`none`),u(t,`stroke`,`currentColor`),u(t,`strokeWidth`,`2`),c(t,`size-4`);let n=o(`path`,t);return i(t,n),u(n,`strokeLinecap`,`round`),u(n,`strokeLinejoin`,`round`),u(n,`d`,`M6 6l12 12M18 6 6 18`),t}),se=()=>s(e=>{let t=o(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`viewBox`,`0 0 24 24`),u(t,`fill`,`none`),u(t,`stroke`,`currentColor`),u(t,`strokeWidth`,`2`),c(t,`size-4`);let n=o(`path`,t);return i(t,n),u(n,`strokeLinecap`,`round`),u(n,`strokeLinejoin`,`round`),u(n,`d`,`M12 5v14M5 12h14`),t}),ce=e=>s(a=>{let s=o(`div`,a);n(()=>{c(s,`inline-grid h-12 w-12 place-items-center rounded-full text-sm font-semibold ${e.className??`bg-primary text-primary-content`}`)});let u=t(`rue:slot:anchor`);return i(s,u),n(()=>{let t=e.text;r(()=>l(t,s,u))}),s}),le=[{prop:`actions`,description:`底部操作栏，传入节点数组后自动平均分栏`,type:`any[]`,defaultValue:`-`},{prop:`activeTabKey`,description:`受控模式下的当前 tab key`,type:`string`,defaultValue:`-`},{prop:`bodyClassName`,description:`语义化 body 容器的类名`,type:`string`,defaultValue:`-`},{prop:`border / bordered`,description:`旧版边框别名，等价于追加 card-border`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`根节点类名，保留与 daisyUI 类直接混用的能力`,type:`string`,defaultValue:`-`},{prop:`cover`,description:`卡片封面，自动渲染为顶部 figure 区域`,type:`any`,defaultValue:`-`},{prop:`dash`,description:`旧版虚线边框开关，追加 card-dash`,type:`boolean`,defaultValue:`false`},{prop:`defaultActiveTabKey`,description:`非受控模式下的默认 tab key`,type:`string`,defaultValue:`tabList 第一项`},{prop:`extra`,description:`头部右侧操作区域`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`语义化 header 容器的类名`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`启用悬浮抬升与阴影过渡`,type:`boolean`,defaultValue:`false`},{prop:`imageFull`,description:`沿用 daisyUI image-full，适合封面做背景图`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`在 body 区域输出骨架占位`,type:`boolean`,defaultValue:`false`},{prop:`onTabChange`,description:`tab 切换回调，受控与非受控模式都会触发`,type:`(key: string) => void`,defaultValue:`-`},{prop:`side`,description:`沿用 daisyUI card-side，让 figure 进入横向布局`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`支持 xs~xl 与 small / middle / large 语义别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'middle' | 'large'`,defaultValue:`md`},{prop:`tabBarExtraContent`,description:`tabs 右侧扩展区域`,type:`any`,defaultValue:`-`},{prop:`tabList`,description:`头部 tabs 配置列表，支持 disabled 与 className`,type:`Array<{ key: string; label?: any; tab?: any; disabled?: boolean; className?: string }>`,defaultValue:`-`},{prop:`tabProps`,description:`控制 tabs 的 style、placement、size 与 className`,type:`{ style?: 'box' | 'border' | 'lift'; placement?: 'top' | 'bottom'; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; className?: string }`,defaultValue:`-`},{prop:`title`,description:`头部标题区`,type:`any`,defaultValue:`-`},{prop:`type`,description:`卡片层次语义，inner 会切到更内嵌的底色与边框`,type:`'default' | 'inner'`,defaultValue:`default`},{prop:`variant`,description:`语义化边框风格，优先于展示层 API 编排`,type:`'outlined' | 'borderless' | 'dashed'`,defaultValue:`borderless`}],ue=[{prop:`avatar`,description:`头像或图标区域`,type:`any`,defaultValue:`-`},{prop:`children`,description:`标题和描述下方的自定义补充内容`,type:`any`,defaultValue:`-`},{prop:`className`,description:`Meta 根节点类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`描述内容`,type:`any`,defaultValue:`-`},{prop:`title`,description:`标题内容`,type:`any`,defaultValue:`-`}],de=[{prop:`className`,description:`Grid 单元的类名，常与宽度或背景类联用`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`是否启用 hover 阴影与背景过渡`,type:`boolean`,defaultValue:`true`},{prop:`style`,description:`Grid 单元的行内样式`,type:`any`,defaultValue:`-`}],fe=`import { Badge, Button, Card } from '@rue-js/design'

<Card
  title="Q2 产品指标"
  extra={<Badge variant="secondary">Live</Badge>}
  cover={<img src="https://picsum.photos/seed/rue-card-workspace/960/640" alt="Workspace dashboard" className="h-56 w-full object-cover" />}
  actions={[
    <Button type="text" size="sm" className="inline-flex items-center justify-center">查看报表</Button>,
    <Button color="primary" size="sm" className="inline-flex items-center justify-center">升级看板</Button>,
  ]}
  hoverable
  className="overflow-hidden bg-base-100 shadow-sm"
>
  <p className="text-sm leading-6 opacity-80">
    把封面、头部、操作区放进根组件 props，适合仪表盘和概览卡片。
  </p>
  <div className="mt-2 flex flex-wrap gap-2">
    <Badge outline>转化率 19.2%</Badge>
    <Badge outline>客单价 +12%</Badge>
  </div>
</Card>`,pe=`import { Button, Card } from '@rue-js/design'

<Card className="w-96 bg-base-100 shadow-sm">
  <Card.Figure>
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
  </Card.Figure>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <p className="text-sm leading-6 opacity-75">
      Body / Title / Actions / Figure 仍然适合做完全自定义的内容拼装。
    </p>
    <Card.Actions className="justify-end">
      <Button color="primary">Buy Now</Button>
    </Card.Actions>
  </Card.Body>
</Card>`,me=`import { Badge, Button, Card } from '@rue-js/design'

<Card
  cover={<img src="https://picsum.photos/seed/rue-card-report/960/640" alt="Team workspace" className="h-52 w-full object-cover" />}
  actions={[
    <Button type="text" size="sm">收藏</Button>,
    <Button type="text" size="sm">分享</Button>,
    <Button color="primary" size="sm">打开空间</Button>,
  ]}
  className="overflow-hidden bg-base-100 shadow-sm"
>
  <Card.Body className="gap-4">
    <Card.Meta
      avatar={<div className="inline-grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-content text-sm font-semibold">AI</div>}
      title="Rue Design Workspace"
      description="把文档、组件、评审记录聚合在一张卡片里。"
    >
      <div className="flex flex-wrap gap-2">
        <Badge outline>12 个原型</Badge>
        <Badge outline>3 位维护者</Badge>
      </div>
    </Card.Meta>
  </Card.Body>
</Card>`,he=`import { ref } from '@rue-js/rue'
import { Badge, Button, Card } from '@rue-js/design'

const activeKey = ref<'overview' | 'milestones' | 'members'>('overview')

<Card
  title="版本节奏"
  activeTabKey={activeKey.value}
  tabList={[
    { key: 'overview', label: '总览' },
    { key: 'milestones', label: '里程碑' },
    { key: 'members', label: '成员' },
  ]}
  tabBarExtraContent={<Button size="sm" color="primary">新建里程碑</Button>}
  onTabChange={key => {
    activeKey.value = key as 'overview' | 'milestones' | 'members'
  }}
  className="bg-base-100 shadow-sm"
>
  {activeKey.value === 'overview' ? (
    <div className="space-y-2 text-sm leading-6 opacity-80">
      <p>用 activeTabKey + onTabChange 驱动卡片级 tab 切换。</p>
      <Badge outline>Roadmap ready</Badge>
    </div>
  ) : null}
</Card>`,ge=`import { Card } from '@rue-js/design'

<div className="grid gap-6 lg:grid-cols-2">
  <Card loading title="同步远程指标" className="bg-base-100 shadow-sm" />
  <Card type="inner" title="内嵌提示" className="bg-base-100">
    <p className="text-sm leading-6 opacity-75">
      type="inner" 适合在主卡片内部再嵌一层说明块。
    </p>
  </Card>
</div>`,_e=`import { Card } from '@rue-js/design'

<Card title="常用入口" bodyClassName="!p-0" className="overflow-hidden bg-base-100 shadow-sm">
  <div className="grid gap-px bg-base-300/70 sm:grid-cols-2 xl:grid-cols-4">
    <Card.Grid>文档中心</Card.Grid>
    <Card.Grid>设计 Token</Card.Grid>
    <Card.Grid hoverable={false}>构建产物</Card.Grid>
    <Card.Grid>使用趋势</Card.Grid>
  </div>
</Card>`,ve=`<Card className="w-full max-w-md bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-3xl font-bold">Premium</h2>
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs leading-6">
      <li>High-resolution image generation</li>
      <li>Customizable style templates</li>
      <li>Batch processing capabilities</li>
      <li>AI-driven image enhancements</li>
      <li className="opacity-50 line-through">Seamless cloud integration</li>
      <li className="opacity-50 line-through">Real-time collaboration tools</li>
    </ul>
    <div className="mt-6">
      <Button color="primary" block>Subscribe</Button>
    </div>
  </div>
</Card>`,ye=`<div className="grid gap-4 lg:grid-cols-2">
  <Card size="xs" className="bg-base-100 shadow-sm"><Card.Body><Card.Title>Xsmall Card</Card.Title><p className="text-sm opacity-75">适合最紧凑的信息块。</p></Card.Body></Card>
  <Card size="sm" className="bg-base-100 shadow-sm"><Card.Body><Card.Title>Small Card</Card.Title><p className="text-sm opacity-75">移动端列表卡片常用尺寸。</p></Card.Body></Card>
  <Card size="md" className="bg-base-100 shadow-sm"><Card.Body><Card.Title>Medium Card</Card.Title><p className="text-sm opacity-75">默认信息层级。</p></Card.Body></Card>
  <Card size="lg" className="bg-base-100 shadow-sm"><Card.Body><Card.Title>Large Card</Card.Title><p className="text-sm opacity-75">适合模块式运营位。</p></Card.Body></Card>
  <Card size="xl" className="bg-base-100 shadow-sm"><Card.Body><Card.Title>Xlarge Card</Card.Title><p className="text-sm opacity-75">适合宽幅内容摘要。</p></Card.Body></Card>
</div>`,be=`<div className="grid gap-6 lg:grid-cols-3">
  <Card className="overflow-hidden bg-base-100 shadow-sm" cover={<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />}>
    <Card.Body>
      <Card.Title>Card Title <Badge variant="secondary">NEW</Badge></Card.Title>
      <p className="text-sm opacity-75">标题区可直接放入徽标或状态。</p>
      <Card.Actions className="justify-end"><Badge outline>Fashion</Badge><Badge outline>Products</Badge></Card.Actions>
    </Card.Body>
  </Card>

  <Card className="bg-base-100 shadow-sm">
    <Card.Body>
      <Card.Title>Card title!</Card.Title>
      <p className="text-sm opacity-75">没有图片时，Card 依然可以作为纯文字内容块使用。</p>
      <Card.Actions className="justify-end"><Button color="primary">Buy Now</Button></Card.Actions>
    </Card.Body>
  </Card>

  <Card className="bg-base-100 shadow-sm">
    <Card.Body>
      <Card.Actions className="justify-end">
        <Button shape="square" size="sm"><span aria-hidden="true">×</span></Button>
      </Card.Actions>
      <p className="text-sm leading-6 opacity-75">把动作放在内容上方，适合轻提示和可关闭卡片。</p>
    </Card.Body>
  </Card>
</div>`,xe=`<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
  <Card variant="outlined" className="bg-base-100"><Card.Body><Card.Title>Outlined</Card.Title><p className="text-sm opacity-75">经典描边信息卡。</p></Card.Body></Card>
  <Card variant="dashed" className="bg-base-100"><Card.Body><Card.Title>Dashed</Card.Title><p className="text-sm opacity-75">适合空态和引导。</p></Card.Body></Card>
  <Card className="bg-primary text-primary-content"><Card.Body><Card.Title>Brand Surface</Card.Title><p className="text-sm opacity-85">品牌色卡片。</p></Card.Body></Card>
  <Card className="bg-neutral text-neutral-content"><Card.Body className="items-center text-center"><Card.Title>Cookies!</Card.Title><p className="text-sm opacity-85">居中内容与反差色适合提醒面板。</p></Card.Body></Card>
  <Card type="inner" className="bg-base-100"><Card.Body><Card.Title>Inner</Card.Title><p className="text-sm opacity-75">适合主卡片内部的次级信息层。</p></Card.Body></Card>
</div>`,Se=`<div className="grid gap-6 xl:grid-cols-2">
  <Card className="overflow-hidden bg-base-100 shadow-sm" cover={<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <p className="text-sm opacity-75">最常见的顶部封面布局。</p>
      <Card.Actions className="justify-end"><Button color="primary">Buy Now</Button></Card.Actions>
    </Card.Body>
  </Card>

  <Card className="bg-base-100 shadow-sm">
    <Card.Body>
      <Card.Title>Bottom Image</Card.Title>
      <p className="text-sm opacity-75">将媒体放在内容之后，适合做故事卡片。</p>
    </Card.Body>
    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
  </Card>

  <Card className="bg-base-100 shadow-sm">
    <figure className="px-10 pt-10"><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-box" /></figure>
    <Card.Body className="items-center text-center">
      <Card.Title>Centered Card</Card.Title>
      <p className="text-sm opacity-75">保留居中内容与额外留白的旧示例。</p>
      <Card.Actions><Button color="primary">Buy Now</Button></Card.Actions>
    </Card.Body>
  </Card>

  <Card imageFull className="overflow-hidden bg-base-100 shadow-sm" cover={<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />}>
    <Card.Body>
      <Card.Title>Image Overlay</Card.Title>
      <p className="text-sm opacity-85">imageFull 让封面成为背景层。</p>
      <Card.Actions className="justify-end"><Button color="primary">Buy Now</Button></Card.Actions>
    </Card.Body>
  </Card>
</div>`,Ce=`<div className="grid gap-6 xl:grid-cols-2">
  <Card side className="overflow-hidden bg-base-100 shadow-sm">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" /></figure>
    <Card.Body>
      <Card.Title>New movie is released!</Card.Title>
      <p className="text-sm opacity-75">Click the button to watch on Jetflix app.</p>
      <Card.Actions className="justify-end"><Button color="primary">Watch</Button></Card.Actions>
    </Card.Body>
  </Card>

  <Card className="overflow-hidden bg-base-100 shadow-sm lg:card-side">
    <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" /></figure>
    <Card.Body>
      <Card.Title>New album is released!</Card.Title>
      <p className="text-sm opacity-75">Click the button to listen on Spotiwhy app.</p>
      <Card.Actions className="justify-end"><Button color="primary">Listen</Button></Card.Actions>
    </Card.Body>
  </Card>
</div>`,D=()=>{let{tabSemantic:u,tabCompound:h,tabMeta:v,tabTabs:x,tabLoading:D,tabGrid:we,tabPricing:Te,tabSizes:Ee,tabContent:De,tabAppearance:Oe,tabMedia:ke,tabHorizontal:Ae,productTab:O}=m(`useSetup:0:0`,()=>a(()=>({tabSemantic:m(`ref:1:0`,()=>p(`preview`)),tabCompound:m(`ref:1:1`,()=>p(`preview`)),tabMeta:m(`ref:1:2`,()=>p(`preview`)),tabTabs:m(`ref:1:3`,()=>p(`preview`)),tabLoading:m(`ref:1:4`,()=>p(`preview`)),tabGrid:m(`ref:1:5`,()=>p(`preview`)),tabPricing:m(`ref:1:6`,()=>p(`preview`)),tabSizes:m(`ref:1:7`,()=>p(`preview`)),tabContent:m(`ref:1:8`,()=>p(`preview`)),tabAppearance:m(`ref:1:9`,()=>p(`preview`)),tabMedia:m(`ref:1:10`,()=>p(`preview`)),tabHorizontal:m(`ref:1:11`,()=>p(`preview`)),productTab:m(`ref:1:12`,()=>p(`overview`))})));return s(a=>{let p=e(),m=t(`rue:component:anchor`);return i(p,m),l(d(C,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let p=o(`h1`,s);i(s,p),i(p,f(`Card 卡片`));let m=o(`p`,s);i(s,m),c(m,`text-sm mt-3 mb-3`),i(m,f(`Card 用于把内容、媒体、操作和状态浓缩进一块易读的表面里。`));let C=o(`p`,s);i(s,C),c(C,`text-sm my-3 opacity-75`),i(C,f(`这一轮增强保留了 Rue 当前的视觉语气和 daisyUI class 直连能力，同时补上更接近业务组件的头部、封面、操作栏、Meta、Grid、loading 和 tabs API。`));let k=t(`rue:component:anchor`);i(s,k),n(()=>{let e=d(w,{title:`语义化 API`,summary:`优先展示新增加的 title、extra、cover、actions、hoverable 组合写法。`,tab:u,code:fe,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`,children:[g(b,{title:`Q2 产品指标`,extra:_(S,{variant:`secondary`,children:`Live`}),cover:_(`img`,{src:ne,alt:`Workspace dashboard`,className:`h-56 w-full object-cover`}),actions:[_(y,{type:`text`,size:`sm`,className:`inline-flex items-center justify-center`,children:g(`span`,{className:`inline-flex items-center gap-2`,children:[_(ie,{}),`查看报表`]})}),_(y,{color:`primary`,size:`sm`,className:`inline-flex items-center justify-center`,children:g(`span`,{className:`inline-flex items-center gap-2`,children:[_(ae,{}),`升级看板`]})})],hoverable:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[_(`p`,{className:`text-sm leading-6 opacity-80`,children:`把封面、头部、操作区放进根组件 props，适合仪表盘、概览页和运营卡片。`}),g(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[_(S,{outline:!0,children:`转化率 19.2%`}),_(S,{outline:!0,children:`客单价 +12%`}),_(S,{outline:!0,children:`复购率 +7%`})]})]}),g(b,{type:`inner`,title:`为什么要这样用`,className:`bg-base-100 shadow-sm`,children:[_(`p`,{className:`text-sm leading-6 opacity-75`,children:`语义化 API 适合把常见结构固定下来，减少反复手写 header、body、actions 和 tabs 布局。`}),g(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Cover`}),_(`div`,{className:`mt-2 text-sm font-medium`,children:`顶部封面`})]}),g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Actions`}),_(`div`,{className:`mt-2 text-sm font-medium`,children:`底部分栏操作`})]})]})]})]})});r(()=>l(e,s,k))});let A=t(`rue:component:anchor`);i(s,A),n(()=>{let e=d(w,{title:`复合子组件`,summary:`Body / Title / Actions / Figure 继续保留，适合手工拼装自定义结构。`,tab:h,code:pe,preview:()=>g(b,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:[_(b.Figure,{children:_(`img`,{src:E,alt:`Shoes`})}),g(b.Body,{children:[_(b.Title,{children:`Card Title`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`低层子组件没有被移除，仍然适合自定义媒体顺序、插入任意节点或接管布局细节。`}),_(b.Actions,{className:`justify-end`,children:_(y,{color:`primary`,children:`Buy Now`})})]})]})});r(()=>l(e,s,A))});let j=t(`rue:component:anchor`);i(s,j),n(()=>{let e=d(w,{title:`Meta 与操作栏`,summary:`Card.Meta 统一头像、标题和描述；配合根组件 actions 更适合做资料卡与工作区卡片。`,tab:v,code:me,preview:()=>_(b,{cover:_(`img`,{src:re,alt:`Team workspace`,className:`h-52 w-full object-cover`}),actions:[_(y,{type:`text`,size:`sm`,children:`收藏`}),_(y,{type:`text`,size:`sm`,children:`分享`}),_(y,{color:`primary`,size:`sm`,children:`打开空间`})],className:`overflow-hidden bg-base-100 shadow-sm`,children:g(b.Body,{className:`gap-4`,children:[_(b.Meta,{avatar:_(ce,{text:`AI`}),title:`Rue Design Workspace`,description:`把文档、组件、评审记录聚合在一张卡片里。`,children:g(`div`,{className:`flex flex-wrap gap-2`,children:[_(S,{outline:!0,children:`12 个原型`}),_(S,{outline:!0,children:`3 位维护者`}),_(S,{outline:!0,children:`2 个待合并 PR`})]})}),_(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-6 opacity-80`,children:`这类卡片适合团队空间、作者信息、文章摘要、资源入口等需要“头像 + 文案 + 操作”的场景。`})]})})});r(()=>l(e,s,j))});let je=t(`rue:component:anchor`);i(s,je),n(()=>{let e=d(w,{title:`带 Tabs 的卡片`,summary:`Card 现在可直接承载卡片级 tab 头部，适合概览、里程碑、成员等分区内容。`,tab:x,code:he,preview:()=>g(b,{title:`版本节奏`,activeTabKey:O.value,tabList:[{key:`overview`,label:`总览`},{key:`milestones`,label:`里程碑`},{key:`members`,label:`成员`}],tabBarExtraContent:_(y,{size:`sm`,color:`primary`,children:g(`span`,{className:`inline-flex items-center gap-2`,children:[_(se,{}),`新建里程碑`]})}),onTabChange:e=>{O.value=e},className:`bg-base-100 shadow-sm`,children:[O.value===`overview`?g(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Velocity`}),_(`div`,{className:`mt-2 text-2xl font-semibold`,children:`+18%`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`本周交付速度`})]}),g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`QA`}),_(`div`,{className:`mt-2 text-2xl font-semibold`,children:`7`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`待验证缺陷`})]}),g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Review`}),_(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`待合并 PR`})]})]}):null,O.value===`milestones`?g(`ul`,{className:`list gap-2`,children:[g(`li`,{className:`list-row`,children:[_(`div`,{className:`font-medium`,children:`v0.8`}),_(`div`,{className:`list-col-grow text-sm opacity-75`,children:`表单编排和 SSR 回归测试`}),_(S,{variant:`secondary`,children:`In Review`})]}),g(`li`,{className:`list-row`,children:[_(`div`,{className:`font-medium`,children:`v0.9`}),_(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计页统一升级`}),_(S,{outline:!0,children:`Planning`})]})]}):null,O.value===`members`?_(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[`UI`,`DX`,`QA`].map(e=>g(`div`,{className:`rounded-box bg-base-200/70 p-4 text-center`,children:[_(ce,{text:e,className:`mx-auto bg-secondary text-secondary-content`}),g(`div`,{className:`mt-3 font-medium`,children:[e,` Owner`]})]},e))}):null]})});r(()=>l(e,s,je))});let M=t(`rue:component:anchor`);i(s,M),n(()=>{let e=d(w,{title:`Loading 与 Inner`,summary:`loading 为数据未返回时提供骨架占位，type='inner' 适合二级信息层。`,tab:D,code:ge,preview:()=>g(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[_(b,{loading:!0,title:`同步远程指标`,className:`bg-base-100 shadow-sm`}),g(b,{type:`inner`,title:`内嵌提示`,className:`bg-base-100 shadow-sm`,children:[_(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 卡片更适合放在正文、抽屉或主卡片内部作为次级说明层，不会抢掉主信息面的视觉焦点。`}),g(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[_(S,{outline:!0,children:`发布前检查`}),_(S,{outline:!0,children:`设计稿已对齐`})]})]})]})});r(()=>l(e,s,M))});let N=t(`rue:component:anchor`);i(s,N),n(()=>{let e=d(w,{title:`Grid 网格卡片`,summary:`Card.Grid 适合做快捷入口和稠密信息总览；bodyClassName='!p-0' 可以去掉默认留白。`,tab:we,code:_e,preview:()=>_(b,{title:`常用入口`,bodyClassName:`!p-0`,className:`overflow-hidden bg-base-100 shadow-sm`,children:g(`div`,{className:`grid gap-px bg-base-300/70 sm:grid-cols-2 xl:grid-cols-4`,children:[g(b.Grid,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Docs`}),_(`div`,{className:`mt-2 font-semibold`,children:`文档中心`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`组件说明、计划和变更记录`})]}),g(b.Grid,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Token`}),_(`div`,{className:`mt-2 font-semibold`,children:`设计 Token`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`语义色、尺寸与层级规则`})]}),g(b.Grid,{hoverable:!1,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Build`}),_(`div`,{className:`mt-2 font-semibold`,children:`构建产物`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`稳定视图，不需要 hover 干扰`})]}),g(b.Grid,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Usage`}),_(`div`,{className:`mt-2 font-semibold`,children:`使用趋势`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`近 7 天页面访问与组件调用`})]})]})})});r(()=>l(e,s,N))});let P=t(`rue:component:anchor`);i(s,P),n(()=>{let e=d(w,{title:`Pricing Card`,summary:`保留原有定价卡片示例，作为信息密度更高的业务组合案例。`,tab:Te,code:ve,preview:()=>_(b,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body`,children:[_(`span`,{className:`badge badge-xs badge-warning`,children:`Most Popular`}),g(`div`,{className:`flex items-end justify-between gap-4`,children:[_(`h2`,{className:`text-3xl font-bold`,children:`Premium`}),_(`span`,{className:`text-xl`,children:`$29/mo`})]}),g(`ul`,{className:`mt-6 flex flex-col gap-2 text-xs leading-6`,children:[_(`li`,{children:`High-resolution image generation`}),_(`li`,{children:`Customizable style templates`}),_(`li`,{children:`Batch processing capabilities`}),_(`li`,{children:`AI-driven image enhancements`}),_(`li`,{className:`opacity-50 line-through`,children:`Seamless cloud integration`}),_(`li`,{className:`opacity-50 line-through`,children:`Real-time collaboration tools`})]}),_(`div`,{className:`mt-6`,children:_(y,{color:`primary`,block:!0,children:`Subscribe`})})]})})});r(()=>l(e,s,P))});let F=t(`rue:component:anchor`);i(s,F),n(()=>{let e=d(w,{title:`Card Sizes`,summary:`保留 xs ~ xl 的旧示例，同时补上更贴近业务语境的说明文案。`,tab:Ee,code:ye,preview:()=>g(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(b,{size:`xs`,className:`bg-base-100 shadow-sm`,children:g(b.Body,{children:[_(b.Title,{children:`Xsmall Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合最紧凑的信息块。`})]})}),_(b,{size:`sm`,className:`bg-base-100 shadow-sm`,children:g(b.Body,{children:[_(b.Title,{children:`Small Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`移动端列表卡片常用尺寸。`})]})}),_(b,{size:`md`,className:`bg-base-100 shadow-sm`,children:g(b.Body,{children:[_(b.Title,{children:`Medium Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`默认信息层级。`})]})}),_(b,{size:`lg`,className:`bg-base-100 shadow-sm`,children:g(b.Body,{children:[_(b.Title,{children:`Large Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合模块式运营位。`})]})}),_(b,{size:`xl`,className:`bg-base-100 shadow-sm lg:col-span-2`,children:g(b.Body,{children:[_(b.Title,{children:`Xlarge Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合宽幅内容摘要、品牌故事和大段说明。`})]})})]})});r(()=>l(e,s,F))});let I=t(`rue:component:anchor`);i(s,I),n(()=>{let e=d(w,{title:`内容组合`,summary:`保留 badge、纯内容卡片、顶部动作卡三种旧布局，并改成同一组内容编排能力展示。`,tab:De,code:be,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-3`,children:[_(b,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:_(`img`,{src:E,alt:`Shoes`}),children:g(b.Body,{children:[g(b.Title,{children:[`Card Title `,_(S,{variant:`secondary`,children:`NEW`})]}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`标题区可以直接承载状态徽标、分类标签和辅助描述。`}),g(b.Actions,{className:`justify-end`,children:[_(S,{outline:!0,children:`Fashion`}),_(S,{outline:!0,children:`Products`})]})]})}),_(b,{className:`bg-base-100 shadow-sm`,children:g(b.Body,{children:[_(b.Title,{children:`Card title!`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`没有图片时，Card 依然可以作为纯文字信息块，常用于说明、公告和短引导。`}),_(b.Actions,{className:`justify-end`,children:_(y,{color:`primary`,children:`Buy Now`})})]})}),_(b,{className:`bg-base-100 shadow-sm`,children:g(b.Body,{children:[_(b.Actions,{className:`justify-end`,children:_(y,{shape:`square`,size:`sm`,children:_(oe,{})})}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`把动作放在内容上方，适合轻提示、清单项和可关闭的局部提醒。`})]})})]})});r(()=>l(e,s,I))});let L=t(`rue:component:anchor`);i(s,L),n(()=>{let e=d(w,{title:`边框、颜色与层次`,summary:`保留 border、dash、品牌色、深色居中卡片等旧示例，同时补入 inner 变体。`,tab:Oe,code:xe,preview:()=>g(`div`,{className:`grid gap-6 lg:grid-cols-2 xl:grid-cols-3`,children:[_(b,{variant:`outlined`,className:`bg-base-100`,children:g(b.Body,{children:[_(b.Title,{children:`Outlined`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`经典描边信息卡，适合列表页和设置页。`})]})}),_(b,{variant:`dashed`,className:`bg-base-100`,children:g(b.Body,{children:[_(b.Title,{children:`Dashed`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`更像引导态或占位态，用来提示下一步动作。`})]})}),_(b,{className:`bg-primary text-primary-content shadow-sm`,children:g(b.Body,{children:[_(b.Title,{children:`Brand Surface`}),_(`p`,{className:`text-sm leading-6 opacity-90`,children:`保留原有的品牌色卡片用法。`}),_(b.Actions,{className:`justify-end`,children:_(y,{children:`Buy Now`})})]})}),_(b,{className:`bg-neutral text-neutral-content shadow-sm`,children:g(b.Body,{className:`items-center text-center`,children:[_(b.Title,{children:`Cookies!`}),_(`p`,{className:`text-sm leading-6 opacity-85`,children:`居中内容 + 反差表面适合提醒面板。`}),g(b.Actions,{className:`justify-end`,children:[_(y,{color:`primary`,children:`Accept`}),_(y,{type:`text`,children:`Deny`})]})]})}),_(b,{type:`inner`,className:`bg-base-100 shadow-sm lg:col-span-2 xl:col-span-1`,children:g(b.Body,{children:[_(b.Title,{children:`Inner`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 会切到更内嵌的底色和边框，适合把提示块、日志块或小型面板压进更大的容器里。`})]})})]})});r(()=>l(e,s,L))});let Me=t(`rue:component:anchor`);i(s,Me),n(()=>{let e=d(w,{title:`媒体布局`,summary:`保留顶部图片、底部图片、居中留白、图片覆盖四种旧媒体布局。`,tab:ke,code:Se,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[_(b,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:_(`img`,{src:E,alt:`Shoes`}),children:g(b.Body,{children:[_(b.Title,{children:`Card Title`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`最常见的顶部封面布局。`}),_(b.Actions,{className:`justify-end`,children:_(y,{color:`primary`,children:`Buy Now`})})]})}),g(b,{className:`bg-base-100 shadow-sm`,children:[g(b.Body,{children:[_(b.Title,{children:`Bottom Image`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`把媒体放到内容之后，适合做故事卡片。`})]}),_(`figure`,{children:_(`img`,{src:E,alt:`Shoes`})})]}),g(b,{className:`bg-base-100 shadow-sm`,children:[_(`figure`,{className:`px-10 pt-10`,children:_(`img`,{src:E,alt:`Shoes`,className:`rounded-box`})}),g(b.Body,{className:`items-center text-center`,children:[_(b.Title,{children:`Centered Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`保留原有居中内容与额外留白的写法。`}),_(b.Actions,{children:_(y,{color:`primary`,children:`Buy Now`})})]})]}),_(b,{imageFull:!0,className:`overflow-hidden bg-base-100 shadow-sm`,cover:_(`img`,{src:E,alt:`Shoes`}),children:g(b.Body,{children:[_(b.Title,{children:`Image Overlay`}),_(`p`,{className:`text-sm leading-6 opacity-90`,children:`imageFull 让封面进入背景层，适合做大图氛围卡。`}),_(b.Actions,{className:`justify-end`,children:_(y,{color:`primary`,children:`Buy Now`})})]})})]})});r(()=>l(e,s,Me))});let Ne=t(`rue:component:anchor`);i(s,Ne),n(()=>{let e=d(w,{title:`横向布局`,summary:`保留 side 和响应式横向布局两种旧示例，适合媒体摘要和推荐位。`,tab:Ae,code:Ce,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[g(b,{side:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[_(`figure`,{children:_(`img`,{src:ee,alt:`Movie`})}),g(b.Body,{children:[_(b.Title,{children:`New movie is released!`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to watch on Jetflix app.`}),_(b.Actions,{className:`justify-end`,children:_(y,{color:`primary`,children:`Watch`})})]})]}),g(b,{className:`overflow-hidden bg-base-100 shadow-sm lg:card-side`,children:[_(`figure`,{children:_(`img`,{src:te,alt:`Album`})}),g(b.Body,{children:[_(b.Title,{children:`New album is released!`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to listen on Spotiwhy app.`}),_(b.Actions,{className:`justify-end`,children:_(y,{color:`primary`,children:`Listen`})})]})]})]})});r(()=>l(e,s,Ne))});let R=o(`div`,s);i(s,R),c(R,`not-prose my-8 space-y-6`);let z=o(`div`,R);i(R,z);let B=o(`h2`,z);i(z,B),c(B,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(B,f(`# API`));let V=o(`p`,z);i(z,V),c(V,`m-0 text-sm opacity-70`),i(V,f(`Rue Card 现在同时支持“语义化根组件 API”和“低层复合子组件 API”。如果你已经习惯直接写 daisyUI 结构，也仍然可以继续混用。`));let H=o(`div`,R);i(R,H);let U=o(`h3`,H);i(H,U),c(U,`mt-0 mb-3 text-base font-semibold`),i(U,f(`Card`));let Pe=t(`rue:component:anchor`);i(H,Pe),n(()=>{let e=d(T,{rows:le});r(()=>l(e,H,Pe))});let W=o(`div`,R);i(R,W);let G=o(`h3`,W);i(W,G),c(G,`mt-0 mb-3 text-base font-semibold`),i(G,f(`Card.Meta`));let K=t(`rue:component:anchor`);i(W,K),n(()=>{let e=d(T,{rows:ue});r(()=>l(e,W,K))});let q=o(`div`,R);i(R,q);let J=o(`h3`,q);i(q,J),c(J,`mt-0 mb-3 text-base font-semibold`),i(J,f(`Card.Grid`));let Y=t(`rue:component:anchor`);i(q,Y),n(()=>{let e=d(T,{rows:de});r(()=>l(e,q,Y))});let X=o(`div`,R);i(R,X),c(X,`rounded-box border border-base-300 bg-base-100 p-5 text-sm leading-7`);let Z=o(`div`,X);i(X,Z),c(Z,`text-xs uppercase tracking-[0.18em] opacity-60`),i(Z,f(`低层复合结构`));let Q=o(`div`,X);i(X,Q),c(Q,`mt-3 font-medium`),i(Q,f(`Card.Body / Card.Title / Card.Actions / Card.Figure`));let $=o(`p`,X);return i(X,$),c($,`mt-2 mb-0 opacity-75`),i($,f(`这四个子组件保持和旧版一样的职责：当你想完全接管布局顺序时，继续直接拼结构即可；当你只想快速生成头部、封面和操作区时，再切到根组件的语义化 props。`)),a})}),p,m),p})};export{D as default};
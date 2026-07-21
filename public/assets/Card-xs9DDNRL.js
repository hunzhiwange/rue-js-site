import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,pn as o,pt as s,st as c,tn as l,vn as u}from"./context-8lXZvIn-.js";import{l as d,o as f,t as p}from"./vapor-runtime-ygJWVcNn.js";import{a as m,n as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{n as _,t as v}from"./src-CCTNpCXV.js";import{t as y}from"./button-CvwbmGA0.js";import{t as b}from"./card-BQwxfBsS.js";import{t as x}from"./tabs-B1XdBEJF.js";import{t as S}from"./badge-B-YHGclR.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var w=e=>d(t=>{let o=s(`div`,t);n(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=s(`div`,o);c(o,m),n(m,`flex flex-wrap items-start justify-between gap-3`);let h=s(`div`,m);c(m,h);let _=s(`h2`,h);c(h,_),n(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),c(_,a(`# `));let v=r(`rue:slot:anchor`);c(_,v),l(()=>{let t=e.title;u(()=>f(t,_,v))});let y=r(`rue:slot:anchor`);c(h,y),l(()=>{let t=e.summary?d(()=>{let t=i(),a=s(`p`,t);c(t,a),n(a,`m-0 text-sm opacity-70`);let o=r(`rue:slot:anchor`);return c(a,o),l(()=>{let t=e.summary;u(()=>f(t,a,o))}),t}):``;u(()=>f(t,h,y))});let b=r(`rue:component:anchor`);c(o,b),l(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});u(()=>f(t,o,b))});let S=r(`rue:slot:anchor`);return c(o,S),l(()=>{let t=e.tab.value===`preview`?e.preview():d(()=>{let t=i(),n=r(`rue:component:anchor`);return c(t,n),l(()=>{let r=p(g,{className:`mt-2`,lang:`tsx`,code:e.code});u(()=>f(r,t,n))}),t});u(()=>f(t,o,S))}),o}),T=e=>d(o=>{let p=s(`div`,o);n(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=s(`table`,p);c(p,m),n(m,`table table-zebra`);let g=s(`thead`,m);c(m,g);let _=s(`tr`,g);c(g,_);let v=s(`th`,_);c(_,v),c(v,a(`属性`));let y=s(`th`,_);c(_,y),c(y,a(`说明`));let b=s(`th`,_);c(_,b),c(b,a(`类型`));let x=s(`th`,_);c(_,x),c(x,a(`默认值`));let S=s(`tbody`,m);c(m,S);let C=r(`rue:list:start`),w=r(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=h({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,a,o,p)=>{f(d(()=>{let n=i(),a=s(`tr`,n);c(n,a),l(()=>{t(a,`key`,String(e.prop))});let o=s(`td`,a);c(a,o);let d=s(`code`,o);c(o,d);let p=r(`rue:slot:anchor`);c(d,p),l(()=>{let t=e.prop;u(()=>f(t,d,p))});let m=s(`td`,a);c(a,m);let h=r(`rue:slot:anchor`);c(m,h),l(()=>{let t=e.description;u(()=>f(t,m,h))});let g=s(`td`,a);c(a,g);let _=s(`code`,g);c(g,_);let v=r(`rue:slot:anchor`);c(_,v),l(()=>{let t=e.type;u(()=>f(t,_,v))});let y=s(`td`,a);c(a,y);let b=s(`code`,y);c(y,b);let x=r(`rue:slot:anchor`);return c(b,x),l(()=>{let t=e.defaultValue;u(()=>f(t,b,x))}),n}),n,a)}})}),p}),E=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,ee=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,te=`https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp`,ne=`https://picsum.photos/seed/rue-card-workspace/960/640`,re=`https://picsum.photos/seed/rue-card-report/960/640`,ie=()=>d(e=>{let r=s(`svg`,e);t(r,`xmlns`,`http://www.w3.org/2000/svg`),t(r,`viewBox`,`0 0 24 24`),t(r,`fill`,`none`),t(r,`stroke`,`currentColor`),t(r,`strokeWidth`,`2`),n(r,`size-4`);let i=s(`path`,r);c(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z`);let a=s(`circle`,r);return c(r,a),t(a,`cx`,`12`),t(a,`cy`,`12`),t(a,`r`,`3`),r}),ae=()=>d(e=>{let r=s(`svg`,e);t(r,`xmlns`,`http://www.w3.org/2000/svg`),t(r,`viewBox`,`0 0 24 24`),t(r,`fill`,`none`),t(r,`stroke`,`currentColor`),t(r,`strokeWidth`,`2`),n(r,`size-4`);let i=s(`path`,r);c(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`m4 16 6-6 4 4 6-8`);let a=s(`path`,r);return c(r,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M14 6h6v6`),r}),oe=()=>d(e=>{let r=s(`svg`,e);t(r,`xmlns`,`http://www.w3.org/2000/svg`),t(r,`viewBox`,`0 0 24 24`),t(r,`fill`,`none`),t(r,`stroke`,`currentColor`),t(r,`strokeWidth`,`2`),n(r,`size-4`);let i=s(`path`,r);return c(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M6 6l12 12M18 6 6 18`),r}),se=()=>d(e=>{let r=s(`svg`,e);t(r,`xmlns`,`http://www.w3.org/2000/svg`),t(r,`viewBox`,`0 0 24 24`),t(r,`fill`,`none`),t(r,`stroke`,`currentColor`),t(r,`strokeWidth`,`2`),n(r,`size-4`);let i=s(`path`,r);return c(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M12 5v14M5 12h14`),r}),ce=e=>d(t=>{let i=s(`div`,t);l(()=>{n(i,`inline-grid h-12 w-12 place-items-center rounded-full text-sm font-semibold ${e.className??`bg-primary text-primary-content`}`)});let a=r(`rue:slot:anchor`);return c(i,a),l(()=>{let t=e.text;u(()=>f(t,i,a))}),i}),le=[{prop:`actions`,description:`底部操作栏，传入节点数组后自动平均分栏`,type:`any[]`,defaultValue:`-`},{prop:`activeTabKey`,description:`受控模式下的当前 tab key`,type:`string`,defaultValue:`-`},{prop:`bodyClassName`,description:`语义化 body 容器的类名`,type:`string`,defaultValue:`-`},{prop:`border / bordered`,description:`基础边框别名，等价于追加 card-border`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`根节点类名，保持与 daisyUI 类直接混用的能力`,type:`string`,defaultValue:`-`},{prop:`cover`,description:`卡片封面，自动渲染为顶部 figure 区域`,type:`any`,defaultValue:`-`},{prop:`dash`,description:`基础虚线边框开关，追加 card-dash`,type:`boolean`,defaultValue:`false`},{prop:`defaultActiveTabKey`,description:`非受控模式下的默认 tab key`,type:`string`,defaultValue:`tabList 第一项`},{prop:`extra`,description:`头部右侧操作区域`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`语义化 header 容器的类名`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`启用悬浮抬升与阴影过渡`,type:`boolean`,defaultValue:`false`},{prop:`imageFull`,description:`使用 daisyUI image-full，适合封面做背景图`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`在 body 区域输出骨架占位`,type:`boolean`,defaultValue:`false`},{prop:`onTabChange`,description:`tab 切换回调，受控与非受控模式都会触发`,type:`(key: string) => void`,defaultValue:`-`},{prop:`side`,description:`使用 daisyUI card-side，让 figure 进入横向布局`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`支持 xs~xl 与 small / middle / large 语义别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'middle' | 'large'`,defaultValue:`md`},{prop:`tabBarExtraContent`,description:`tabs 右侧扩展区域`,type:`any`,defaultValue:`-`},{prop:`tabList`,description:`头部 tabs 配置列表，支持 disabled 与 className`,type:`Array<{ key: string; label?: any; tab?: any; disabled?: boolean; className?: string }>`,defaultValue:`-`},{prop:`tabProps`,description:`控制 tabs 的 style、placement、size 与 className`,type:`{ style?: 'box' | 'border' | 'lift'; placement?: 'top' | 'bottom'; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; className?: string }`,defaultValue:`-`},{prop:`title`,description:`头部标题区`,type:`any`,defaultValue:`-`},{prop:`type`,description:`卡片层次语义，inner 会切到更内嵌的底色与边框`,type:`'default' | 'inner'`,defaultValue:`default`},{prop:`variant`,description:`语义化边框风格，优先于展示层 API 编排`,type:`'outlined' | 'borderless' | 'dashed'`,defaultValue:`borderless`}],ue=[{prop:`avatar`,description:`头像或图标区域`,type:`any`,defaultValue:`-`},{prop:`children`,description:`标题和描述下方的自定义补充内容`,type:`any`,defaultValue:`-`},{prop:`className`,description:`Meta 根节点类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`描述内容`,type:`any`,defaultValue:`-`},{prop:`title`,description:`标题内容`,type:`any`,defaultValue:`-`}],de=[{prop:`className`,description:`Grid 单元的类名，常与宽度或背景类联用`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`是否启用 hover 阴影与背景过渡`,type:`boolean`,defaultValue:`true`},{prop:`style`,description:`Grid 单元的行内样式`,type:`any`,defaultValue:`-`}],fe=`import { Badge, Button, Card } from '@rue-js/design'

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
  <Card variant="outlined" className="bg-base-100"><Card.Body><Card.Title>Outlined</Card.Title><p className="text-sm opacity-75">组合描边信息卡。</p></Card.Body></Card>
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
      <p className="text-sm opacity-75">展示居中内容与额外留白的基础示例。</p>
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
</div>`,D=()=>{let{tabSemantic:t,tabCompound:h,tabMeta:g,tabTabs:x,tabLoading:D,tabGrid:we,tabPricing:Te,tabSizes:Ee,tabContent:De,tabAppearance:Oe,tabMedia:ke,tabHorizontal:Ae,productTab:O}=m(`useSetup:0:0`,()=>e(()=>({tabSemantic:m(`ref:1:0`,()=>o(`preview`)),tabCompound:m(`ref:1:1`,()=>o(`preview`)),tabMeta:m(`ref:1:2`,()=>o(`preview`)),tabTabs:m(`ref:1:3`,()=>o(`preview`)),tabLoading:m(`ref:1:4`,()=>o(`preview`)),tabGrid:m(`ref:1:5`,()=>o(`preview`)),tabPricing:m(`ref:1:6`,()=>o(`preview`)),tabSizes:m(`ref:1:7`,()=>o(`preview`)),tabContent:m(`ref:1:8`,()=>o(`preview`)),tabAppearance:m(`ref:1:9`,()=>o(`preview`)),tabMedia:m(`ref:1:10`,()=>o(`preview`)),tabHorizontal:m(`ref:1:11`,()=>o(`preview`)),productTab:m(`ref:1:12`,()=>o(`overview`))})));return d(e=>{let o=i(),m=r(`rue:component:anchor`);return c(o,m),f(p(C,{children:d(()=>{let e=i(),o=s(`div`,e);c(e,o),n(o,`max-w-none prose prose-sm md:prose-base`);let d=s(`h1`,o);c(o,d),c(d,a(`Card 卡片`));let m=s(`p`,o);c(o,m),n(m,`text-sm mt-3 mb-3`),c(m,a(`Card 用于把内容、媒体、操作和状态浓缩进一块易读的表面里。`));let C=s(`p`,o);c(o,C),n(C,`text-sm my-3 opacity-75`),c(C,a(`组件使用 Rue 当前的视觉语气和 daisyUI class 直连能力，同时提供头部、封面、操作栏、Meta、Grid、loading 和 tabs API。`));let k=r(`rue:component:anchor`);c(o,k),l(()=>{let e=p(w,{title:`语义化 API`,summary:`展示 title、extra、cover、actions、hoverable 组合写法。`,tab:t,code:fe,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`,children:[_(b,{title:`Q2 产品指标`,extra:v(S,{variant:`secondary`,children:`Live`}),cover:v(`img`,{src:ne,alt:`Workspace dashboard`,className:`h-56 w-full object-cover`}),actions:[v(y,{type:`text`,size:`sm`,className:`inline-flex items-center justify-center`,children:_(`span`,{className:`inline-flex items-center gap-2`,children:[v(ie,{}),`查看报表`]})}),v(y,{color:`primary`,size:`sm`,className:`inline-flex items-center justify-center`,children:_(`span`,{className:`inline-flex items-center gap-2`,children:[v(ae,{}),`升级看板`]})})],hoverable:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[v(`p`,{className:`text-sm leading-6 opacity-80`,children:`把封面、头部、操作区放进根组件 props，适合仪表盘、概览页和运营卡片。`}),_(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[v(S,{outline:!0,children:`转化率 19.2%`}),v(S,{outline:!0,children:`客单价 +12%`}),v(S,{outline:!0,children:`复购率 +7%`})]})]}),_(b,{type:`inner`,title:`为什么要这样用`,className:`bg-base-100 shadow-sm`,children:[v(`p`,{className:`text-sm leading-6 opacity-75`,children:`语义化 API 适合把常见结构固定下来，减少反复手写 header、body、actions 和 tabs 布局。`}),_(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Cover`}),v(`div`,{className:`mt-2 text-sm font-medium`,children:`顶部封面`})]}),_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Actions`}),v(`div`,{className:`mt-2 text-sm font-medium`,children:`底部分栏操作`})]})]})]})]})});u(()=>f(e,o,k))});let A=r(`rue:component:anchor`);c(o,A),l(()=>{let e=p(w,{title:`复合子组件`,summary:`Body / Title / Actions / Figure 展示，适合手工拼装自定义结构。`,tab:h,code:pe,preview:()=>_(b,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:[v(b.Figure,{children:v(`img`,{src:E,alt:`Shoes`})}),_(b.Body,{children:[v(b.Title,{children:`Card Title`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`低层子组件没有被移除，仍然适合自定义媒体顺序、插入任意节点或接管布局细节。`}),v(b.Actions,{className:`justify-end`,children:v(y,{color:`primary`,children:`Buy Now`})})]})]})});u(()=>f(e,o,A))});let j=r(`rue:component:anchor`);c(o,j),l(()=>{let e=p(w,{title:`Meta 与操作栏`,summary:`Card.Meta 统一头像、标题和描述；配合根组件 actions 更适合做资料卡与工作区卡片。`,tab:g,code:me,preview:()=>v(b,{cover:v(`img`,{src:re,alt:`Team workspace`,className:`h-52 w-full object-cover`}),actions:[v(y,{type:`text`,size:`sm`,children:`收藏`}),v(y,{type:`text`,size:`sm`,children:`分享`}),v(y,{color:`primary`,size:`sm`,children:`打开空间`})],className:`overflow-hidden bg-base-100 shadow-sm`,children:_(b.Body,{className:`gap-4`,children:[v(b.Meta,{avatar:v(ce,{text:`AI`}),title:`Rue Design Workspace`,description:`把文档、组件、评审记录聚合在一张卡片里。`,children:_(`div`,{className:`flex flex-wrap gap-2`,children:[v(S,{outline:!0,children:`12 个原型`}),v(S,{outline:!0,children:`3 位维护者`}),v(S,{outline:!0,children:`2 个待合并 PR`})]})}),v(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-6 opacity-80`,children:`这类卡片适合团队空间、作者信息、文章摘要、资源入口等需要“头像 + 文案 + 操作”的场景。`})]})})});u(()=>f(e,o,j))});let je=r(`rue:component:anchor`);c(o,je),l(()=>{let e=p(w,{title:`带 Tabs 的卡片`,summary:`Card 现在可直接承载卡片级 tab 头部，适合概览、里程碑、成员等分区内容。`,tab:x,code:he,preview:()=>_(b,{title:`版本节奏`,activeTabKey:O.value,tabList:[{key:`overview`,label:`总览`},{key:`milestones`,label:`里程碑`},{key:`members`,label:`成员`}],tabBarExtraContent:v(y,{size:`sm`,color:`primary`,children:_(`span`,{className:`inline-flex items-center gap-2`,children:[v(se,{}),`新建里程碑`]})}),onTabChange:e=>{O.value=e},className:`bg-base-100 shadow-sm`,children:[O.value===`overview`?_(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Velocity`}),v(`div`,{className:`mt-2 text-2xl font-semibold`,children:`+18%`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`本周交付速度`})]}),_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`QA`}),v(`div`,{className:`mt-2 text-2xl font-semibold`,children:`7`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`待验证缺陷`})]}),_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Review`}),v(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`待合并 PR`})]})]}):null,O.value===`milestones`?_(`ul`,{className:`list gap-2`,children:[_(`li`,{className:`list-row`,children:[v(`div`,{className:`font-medium`,children:`v0.8`}),v(`div`,{className:`list-col-grow text-sm opacity-75`,children:`表单编排和 SSR 回归测试`}),v(S,{variant:`secondary`,children:`In Review`})]}),_(`li`,{className:`list-row`,children:[v(`div`,{className:`font-medium`,children:`v0.9`}),v(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计页统一升级`}),v(S,{outline:!0,children:`Planning`})]})]}):null,O.value===`members`?v(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[`UI`,`DX`,`QA`].map(e=>_(`div`,{className:`rounded-box bg-base-200/70 p-4 text-center`,children:[v(ce,{text:e,className:`mx-auto bg-secondary text-secondary-content`}),_(`div`,{className:`mt-3 font-medium`,children:[e,` Owner`]})]},e))}):null]})});u(()=>f(e,o,je))});let M=r(`rue:component:anchor`);c(o,M),l(()=>{let e=p(w,{title:`Loading 与 Inner`,summary:`loading 为数据未返回时提供骨架占位，type='inner' 适合二级信息层。`,tab:D,code:ge,preview:()=>_(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[v(b,{loading:!0,title:`同步远程指标`,className:`bg-base-100 shadow-sm`}),_(b,{type:`inner`,title:`内嵌提示`,className:`bg-base-100 shadow-sm`,children:[v(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 卡片更适合放在正文、抽屉或主卡片内部作为次级说明层，不会抢掉主信息面的视觉焦点。`}),_(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[v(S,{outline:!0,children:`发布前检查`}),v(S,{outline:!0,children:`设计稿已对齐`})]})]})]})});u(()=>f(e,o,M))});let N=r(`rue:component:anchor`);c(o,N),l(()=>{let e=p(w,{title:`Grid 网格卡片`,summary:`Card.Grid 适合做快捷入口和稠密信息总览；bodyClassName='!p-0' 可以去掉默认留白。`,tab:we,code:_e,preview:()=>v(b,{title:`常用入口`,bodyClassName:`!p-0`,className:`overflow-hidden bg-base-100 shadow-sm`,children:_(`div`,{className:`grid gap-px bg-base-300/70 sm:grid-cols-2 xl:grid-cols-4`,children:[_(b.Grid,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Docs`}),v(`div`,{className:`mt-2 font-semibold`,children:`文档中心`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`组件说明、计划和变更记录`})]}),_(b.Grid,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Token`}),v(`div`,{className:`mt-2 font-semibold`,children:`设计 Token`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`语义色、尺寸与层级规则`})]}),_(b.Grid,{hoverable:!1,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Build`}),v(`div`,{className:`mt-2 font-semibold`,children:`构建产物`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`稳定视图，不需要 hover 干扰`})]}),_(b.Grid,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Usage`}),v(`div`,{className:`mt-2 font-semibold`,children:`使用趋势`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`近 7 天页面访问与组件调用`})]})]})})});u(()=>f(e,o,N))});let P=r(`rue:component:anchor`);c(o,P),l(()=>{let e=p(w,{title:`Pricing Card`,summary:`展示基础定价卡片示例，作为信息密度更高的业务组合案例。`,tab:Te,code:ve,preview:()=>v(b,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body`,children:[v(`span`,{className:`badge badge-xs badge-warning`,children:`Most Popular`}),_(`div`,{className:`flex items-end justify-between gap-4`,children:[v(`h2`,{className:`text-3xl font-bold`,children:`Premium`}),v(`span`,{className:`text-xl`,children:`$29/mo`})]}),_(`ul`,{className:`mt-6 flex flex-col gap-2 text-xs leading-6`,children:[v(`li`,{children:`High-resolution image generation`}),v(`li`,{children:`Customizable style templates`}),v(`li`,{children:`Batch processing capabilities`}),v(`li`,{children:`AI-driven image enhancements`}),v(`li`,{className:`opacity-50 line-through`,children:`Seamless cloud integration`}),v(`li`,{className:`opacity-50 line-through`,children:`Real-time collaboration tools`})]}),v(`div`,{className:`mt-6`,children:v(y,{color:`primary`,block:!0,children:`Subscribe`})})]})})});u(()=>f(e,o,P))});let F=r(`rue:component:anchor`);c(o,F),l(()=>{let e=p(w,{title:`Card Sizes`,summary:`展示 xs ~ xl 的基础示例，同时补上更贴近业务语境的说明文案。`,tab:Ee,code:ye,preview:()=>_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[v(b,{size:`xs`,className:`bg-base-100 shadow-sm`,children:_(b.Body,{children:[v(b.Title,{children:`Xsmall Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合最紧凑的信息块。`})]})}),v(b,{size:`sm`,className:`bg-base-100 shadow-sm`,children:_(b.Body,{children:[v(b.Title,{children:`Small Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`移动端列表卡片常用尺寸。`})]})}),v(b,{size:`md`,className:`bg-base-100 shadow-sm`,children:_(b.Body,{children:[v(b.Title,{children:`Medium Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`默认信息层级。`})]})}),v(b,{size:`lg`,className:`bg-base-100 shadow-sm`,children:_(b.Body,{children:[v(b.Title,{children:`Large Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合模块式运营位。`})]})}),v(b,{size:`xl`,className:`bg-base-100 shadow-sm lg:col-span-2`,children:_(b.Body,{children:[v(b.Title,{children:`Xlarge Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合宽幅内容摘要、品牌故事和大段说明。`})]})})]})});u(()=>f(e,o,F))});let I=r(`rue:component:anchor`);c(o,I),l(()=>{let e=p(w,{title:`内容组合`,summary:`展示 badge、纯内容卡片、顶部动作卡三种基础布局，并改成同一组内容编排能力展示。`,tab:De,code:be,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-3`,children:[v(b,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:v(`img`,{src:E,alt:`Shoes`}),children:_(b.Body,{children:[_(b.Title,{children:[`Card Title `,v(S,{variant:`secondary`,children:`NEW`})]}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`标题区可以直接承载状态徽标、分类标签和辅助描述。`}),_(b.Actions,{className:`justify-end`,children:[v(S,{outline:!0,children:`Fashion`}),v(S,{outline:!0,children:`Products`})]})]})}),v(b,{className:`bg-base-100 shadow-sm`,children:_(b.Body,{children:[v(b.Title,{children:`Card title!`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`没有图片时，Card 依然可以作为纯文字信息块，常用于说明、公告和短引导。`}),v(b.Actions,{className:`justify-end`,children:v(y,{color:`primary`,children:`Buy Now`})})]})}),v(b,{className:`bg-base-100 shadow-sm`,children:_(b.Body,{children:[v(b.Actions,{className:`justify-end`,children:v(y,{shape:`square`,size:`sm`,children:v(oe,{})})}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`把动作放在内容上方，适合轻提示、清单项和可关闭的局部提醒。`})]})})]})});u(()=>f(e,o,I))});let L=r(`rue:component:anchor`);c(o,L),l(()=>{let e=p(w,{title:`边框、颜色与层次`,summary:`展示 border、dash、品牌色、深色居中卡片等基础示例，同时补入 inner 变体。`,tab:Oe,code:xe,preview:()=>_(`div`,{className:`grid gap-6 lg:grid-cols-2 xl:grid-cols-3`,children:[v(b,{variant:`outlined`,className:`bg-base-100`,children:_(b.Body,{children:[v(b.Title,{children:`Outlined`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`组合描边信息卡，适合列表页和设置页。`})]})}),v(b,{variant:`dashed`,className:`bg-base-100`,children:_(b.Body,{children:[v(b.Title,{children:`Dashed`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`更像引导态或占位态，用来提示下一步动作。`})]})}),v(b,{className:`bg-primary text-primary-content shadow-sm`,children:_(b.Body,{children:[v(b.Title,{children:`Brand Surface`}),v(`p`,{className:`text-sm leading-6 opacity-90`,children:`展示基础的品牌色卡片用法。`}),v(b.Actions,{className:`justify-end`,children:v(y,{children:`Buy Now`})})]})}),v(b,{className:`bg-neutral text-neutral-content shadow-sm`,children:_(b.Body,{className:`items-center text-center`,children:[v(b.Title,{children:`Cookies!`}),v(`p`,{className:`text-sm leading-6 opacity-85`,children:`居中内容 + 反差表面适合提醒面板。`}),_(b.Actions,{className:`justify-end`,children:[v(y,{color:`primary`,children:`Accept`}),v(y,{type:`text`,children:`Deny`})]})]})}),v(b,{type:`inner`,className:`bg-base-100 shadow-sm lg:col-span-2 xl:col-span-1`,children:_(b.Body,{children:[v(b.Title,{children:`Inner`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 会切到更内嵌的底色和边框，适合把提示块、日志块或小型面板压进更大的容器里。`})]})})]})});u(()=>f(e,o,L))});let Me=r(`rue:component:anchor`);c(o,Me),l(()=>{let e=p(w,{title:`媒体布局`,summary:`展示顶部图片、底部图片、居中留白、图片覆盖四种媒体布局。`,tab:ke,code:Se,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[v(b,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:v(`img`,{src:E,alt:`Shoes`}),children:_(b.Body,{children:[v(b.Title,{children:`Card Title`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`最常见的顶部封面布局。`}),v(b.Actions,{className:`justify-end`,children:v(y,{color:`primary`,children:`Buy Now`})})]})}),_(b,{className:`bg-base-100 shadow-sm`,children:[_(b.Body,{children:[v(b.Title,{children:`Bottom Image`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`把媒体放到内容之后，适合做故事卡片。`})]}),v(`figure`,{children:v(`img`,{src:E,alt:`Shoes`})})]}),_(b,{className:`bg-base-100 shadow-sm`,children:[v(`figure`,{className:`px-10 pt-10`,children:v(`img`,{src:E,alt:`Shoes`,className:`rounded-box`})}),_(b.Body,{className:`items-center text-center`,children:[v(b.Title,{children:`Centered Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`展示基础居中内容与额外留白的写法。`}),v(b.Actions,{children:v(y,{color:`primary`,children:`Buy Now`})})]})]}),v(b,{imageFull:!0,className:`overflow-hidden bg-base-100 shadow-sm`,cover:v(`img`,{src:E,alt:`Shoes`}),children:_(b.Body,{children:[v(b.Title,{children:`Image Overlay`}),v(`p`,{className:`text-sm leading-6 opacity-90`,children:`imageFull 让封面进入背景层，适合做大图氛围卡。`}),v(b.Actions,{className:`justify-end`,children:v(y,{color:`primary`,children:`Buy Now`})})]})})]})});u(()=>f(e,o,Me))});let Ne=r(`rue:component:anchor`);c(o,Ne),l(()=>{let e=p(w,{title:`横向布局`,summary:`展示 side 和响应式横向布局两种基础示例，适合媒体摘要和推荐位。`,tab:Ae,code:Ce,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[_(b,{side:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[v(`figure`,{children:v(`img`,{src:ee,alt:`Movie`})}),_(b.Body,{children:[v(b.Title,{children:`New movie is released!`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to watch on Jetflix app.`}),v(b.Actions,{className:`justify-end`,children:v(y,{color:`primary`,children:`Watch`})})]})]}),_(b,{className:`overflow-hidden bg-base-100 shadow-sm lg:card-side`,children:[v(`figure`,{children:v(`img`,{src:te,alt:`Album`})}),_(b.Body,{children:[v(b.Title,{children:`New album is released!`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to listen on Spotiwhy app.`}),v(b.Actions,{className:`justify-end`,children:v(y,{color:`primary`,children:`Listen`})})]})]})]})});u(()=>f(e,o,Ne))});let R=s(`div`,o);c(o,R),n(R,`not-prose my-8 space-y-6`);let z=s(`div`,R);c(R,z);let B=s(`h2`,z);c(z,B),n(B,`component-preview-title mt-2 mb-1 text-lg font-semibold`),c(B,a(`# API`));let V=s(`p`,z);c(z,V),n(V,`m-0 text-sm opacity-70`),c(V,a(`Rue Card 现在同时支持“语义化根组件 API”和“低层复合子组件 API”。如果你已经习惯直接写 daisyUI 结构，也仍然可以继续混用。`));let H=s(`div`,R);c(R,H);let U=s(`h3`,H);c(H,U),n(U,`mt-0 mb-3 text-base font-semibold`),c(U,a(`Card`));let Pe=r(`rue:component:anchor`);c(H,Pe),l(()=>{let e=p(T,{rows:le});u(()=>f(e,H,Pe))});let W=s(`div`,R);c(R,W);let G=s(`h3`,W);c(W,G),n(G,`mt-0 mb-3 text-base font-semibold`),c(G,a(`Card.Meta`));let K=r(`rue:component:anchor`);c(W,K),l(()=>{let e=p(T,{rows:ue});u(()=>f(e,W,K))});let q=s(`div`,R);c(R,q);let J=s(`h3`,q);c(q,J),n(J,`mt-0 mb-3 text-base font-semibold`),c(J,a(`Card.Grid`));let Y=r(`rue:component:anchor`);c(q,Y),l(()=>{let e=p(T,{rows:de});u(()=>f(e,q,Y))});let X=s(`div`,R);c(R,X),n(X,`rounded-box border border-base-300 bg-base-100 p-5 text-sm leading-7`);let Z=s(`div`,X);c(X,Z),n(Z,`text-xs uppercase tracking-[0.18em] opacity-60`),c(Z,a(`低层复合结构`));let Q=s(`div`,X);c(X,Q),n(Q,`mt-3 font-medium`),c(Q,a(`Card.Body / Card.Title / Card.Actions / Card.Figure`));let $=s(`p`,X);return c(X,$),n($,`mt-2 mb-0 opacity-75`),c($,a(`这四个子组件保持和基础一样的职责：当你想完全接管布局顺序时，继续直接拼结构即可；当你只想快速生成头部、封面和操作区时，再切到根组件的语义化 props。`)),e})}),o,m),o})};export{D as default};
import{$ as e,Et as t,G as n,H as r,K as i,W as a,_t as o,d as s,kt as c,l,q as u,t as d,tt as f,xt as p}from"./vapor-runtime-ACs_OvwU.js";import{a as m,n as h}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as g,t as _}from"./src-B0RvnZVV.js";import{n as v}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as y}from"./Code-CliOXHNE.js";import{t as b}from"./button-C6eHAAtW.js";import{t as x}from"./card-DEH9g--0.js";import{t as S}from"./tabs-CPymQe79.js";import{t as C}from"./badge-BuRROX_W.js";var w=e=>s(t=>{let o=i(`div`,t);f(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=i(`div`,o);r(o,m),f(m,`flex flex-wrap items-start justify-between gap-3`);let h=i(`div`,m);r(m,h);let g=i(`h2`,h);r(h,g),f(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,u(`# `));let _=a(`rue:slot:anchor`);r(g,_),c(()=>{let t=e.title;p(()=>l(t,g,_))});let v=a(`rue:slot:anchor`);r(h,v),c(()=>{let t=e.summary?s(()=>{let t=n(),o=i(`p`,t);r(t,o),f(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return r(o,s),c(()=>{let t=e.summary;p(()=>l(t,o,s))}),t}):``;p(()=>l(t,h,v))});let b=a(`rue:component:anchor`);r(o,b),c(()=>{let t=d(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>l(t,o,b))});let x=a(`rue:slot:anchor`);return r(o,x),c(()=>{let t=e.tab.value===`preview`?e.preview():s(()=>{let t=n(),i=a(`rue:component:anchor`);return r(t,i),c(()=>{let n=d(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>l(n,t,i))}),t});p(()=>l(t,o,x))}),o}),T=t=>s(o=>{let d=i(`div`,o);f(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);r(d,m),f(m,`table table-zebra`);let g=i(`thead`,m);r(m,g);let _=i(`tr`,g);r(g,_);let v=i(`th`,_);r(_,v),r(v,u(`属性`));let y=i(`th`,_);r(_,y),r(y,u(`说明`));let b=i(`th`,_);r(_,b),r(b,u(`类型`));let x=i(`th`,_);r(_,x),r(x,u(`默认值`));let S=i(`tbody`,m);r(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return c(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,u,d,f)=>{l(s(()=>{let o=n(),s=i(`tr`,o);r(o,s),c(()=>{e(s,`key`,String(t.prop))});let u=i(`td`,s);r(s,u);let d=i(`code`,u);r(u,d);let f=a(`rue:slot:anchor`);r(d,f),c(()=>{let e=t.prop;p(()=>l(e,d,f))});let m=i(`td`,s);r(s,m);let h=a(`rue:slot:anchor`);r(m,h),c(()=>{let e=t.description;p(()=>l(e,m,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=a(`rue:slot:anchor`);r(_,v),c(()=>{let e=t.type;p(()=>l(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=a(`rue:slot:anchor`);return r(b,x),c(()=>{let e=t.defaultValue;p(()=>l(e,b,x))}),o}),o,u)}})}),d}),E=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,ee=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,te=`https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp`,ne=`https://picsum.photos/seed/rue-card-workspace/960/640`,re=`https://picsum.photos/seed/rue-card-report/960/640`,ie=()=>s(t=>{let n=i(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),f(n,`size-4`);let a=i(`path`,n);r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z`);let o=i(`circle`,n);return r(n,o),e(o,`cx`,`12`),e(o,`cy`,`12`),e(o,`r`,`3`),n}),ae=()=>s(t=>{let n=i(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),f(n,`size-4`);let a=i(`path`,n);r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`m4 16 6-6 4 4 6-8`);let o=i(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M14 6h6v6`),n}),oe=()=>s(t=>{let n=i(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),f(n,`size-4`);let a=i(`path`,n);return r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M6 6l12 12M18 6 6 18`),n}),se=()=>s(t=>{let n=i(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),f(n,`size-4`);let a=i(`path`,n);return r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M12 5v14M5 12h14`),n}),ce=e=>s(t=>{let n=i(`div`,t);c(()=>{f(n,String(`inline-grid h-12 w-12 place-items-center rounded-full text-sm font-semibold ${e.className??`bg-primary text-primary-content`}`))});let o=a(`rue:slot:anchor`);return r(n,o),c(()=>{let t=e.text;p(()=>l(t,n,o))}),n}),le=[{prop:`actions`,description:`底部操作栏，传入节点数组后自动平均分栏`,type:`any[]`,defaultValue:`-`},{prop:`activeTabKey`,description:`受控模式下的当前 tab key`,type:`string`,defaultValue:`-`},{prop:`bodyClassName`,description:`语义化 body 容器的类名`,type:`string`,defaultValue:`-`},{prop:`border / bordered`,description:`旧版边框别名，等价于追加 card-border`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`根节点类名，保留与 daisyUI 类直接混用的能力`,type:`string`,defaultValue:`-`},{prop:`cover`,description:`卡片封面，自动渲染为顶部 figure 区域`,type:`any`,defaultValue:`-`},{prop:`dash`,description:`旧版虚线边框开关，追加 card-dash`,type:`boolean`,defaultValue:`false`},{prop:`defaultActiveTabKey`,description:`非受控模式下的默认 tab key`,type:`string`,defaultValue:`tabList 第一项`},{prop:`extra`,description:`头部右侧操作区域`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`语义化 header 容器的类名`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`启用悬浮抬升与阴影过渡`,type:`boolean`,defaultValue:`false`},{prop:`imageFull`,description:`沿用 daisyUI image-full，适合封面做背景图`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`在 body 区域输出骨架占位`,type:`boolean`,defaultValue:`false`},{prop:`onTabChange`,description:`tab 切换回调，受控与非受控模式都会触发`,type:`(key: string) => void`,defaultValue:`-`},{prop:`side`,description:`沿用 daisyUI card-side，让 figure 进入横向布局`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`支持 xs~xl 与 small / middle / large 语义别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'middle' | 'large'`,defaultValue:`md`},{prop:`tabBarExtraContent`,description:`tabs 右侧扩展区域`,type:`any`,defaultValue:`-`},{prop:`tabList`,description:`头部 tabs 配置列表，支持 disabled 与 className`,type:`Array<{ key: string; label?: any; tab?: any; disabled?: boolean; className?: string }>`,defaultValue:`-`},{prop:`tabProps`,description:`控制 tabs 的 style、placement、size 与 className`,type:`{ style?: 'box' | 'border' | 'lift'; placement?: 'top' | 'bottom'; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; className?: string }`,defaultValue:`-`},{prop:`title`,description:`头部标题区`,type:`any`,defaultValue:`-`},{prop:`type`,description:`卡片层次语义，inner 会切到更内嵌的底色与边框`,type:`'default' | 'inner'`,defaultValue:`default`},{prop:`variant`,description:`语义化边框风格，优先于展示层 API 编排`,type:`'outlined' | 'borderless' | 'dashed'`,defaultValue:`borderless`}],ue=[{prop:`avatar`,description:`头像或图标区域`,type:`any`,defaultValue:`-`},{prop:`children`,description:`标题和描述下方的自定义补充内容`,type:`any`,defaultValue:`-`},{prop:`className`,description:`Meta 根节点类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`描述内容`,type:`any`,defaultValue:`-`},{prop:`title`,description:`标题内容`,type:`any`,defaultValue:`-`}],de=[{prop:`className`,description:`Grid 单元的类名，常与宽度或背景类联用`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`是否启用 hover 阴影与背景过渡`,type:`boolean`,defaultValue:`true`},{prop:`style`,description:`Grid 单元的行内样式`,type:`any`,defaultValue:`-`}],fe=`import { Badge, Button, Card } from '@rue-js/design'

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
</div>`,D=()=>{let{tabSemantic:e,tabCompound:h,tabMeta:y,tabTabs:S,tabLoading:D,tabGrid:we,tabPricing:Te,tabSizes:Ee,tabContent:De,tabAppearance:Oe,tabMedia:ke,tabHorizontal:Ae,productTab:O}=m(`useSetup:0:0`,()=>t(()=>({tabSemantic:m(`ref:1:0`,()=>o(`preview`)),tabCompound:m(`ref:1:1`,()=>o(`preview`)),tabMeta:m(`ref:1:2`,()=>o(`preview`)),tabTabs:m(`ref:1:3`,()=>o(`preview`)),tabLoading:m(`ref:1:4`,()=>o(`preview`)),tabGrid:m(`ref:1:5`,()=>o(`preview`)),tabPricing:m(`ref:1:6`,()=>o(`preview`)),tabSizes:m(`ref:1:7`,()=>o(`preview`)),tabContent:m(`ref:1:8`,()=>o(`preview`)),tabAppearance:m(`ref:1:9`,()=>o(`preview`)),tabMedia:m(`ref:1:10`,()=>o(`preview`)),tabHorizontal:m(`ref:1:11`,()=>o(`preview`)),productTab:m(`ref:1:12`,()=>o(`overview`))})));return s(t=>{let o=n(),m=a(`rue:component:anchor`);return r(o,m),l(d(v,{children:s(()=>{let t=n(),o=i(`div`,t);r(t,o),f(o,`max-w-none prose prose-sm md:prose-base`);let s=i(`h1`,o);r(o,s),r(s,u(`Card 卡片`));let m=i(`p`,o);r(o,m),f(m,`text-sm mt-3 mb-3`),r(m,u(`Card 用于把内容、媒体、操作和状态浓缩进一块易读的表面里。`));let v=i(`p`,o);r(o,v),f(v,`text-sm my-3 opacity-75`),r(v,u(`这一轮增强保留了 Rue 当前的视觉语气和 daisyUI class 直连能力，同时补上更接近业务组件的头部、封面、操作栏、Meta、Grid、loading 和 tabs API。`));let k=a(`rue:component:anchor`);r(o,k),c(()=>{let t=d(w,{title:`语义化 API`,summary:`优先展示新增加的 title、extra、cover、actions、hoverable 组合写法。`,tab:e,code:fe,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`,children:[g(x,{title:`Q2 产品指标`,extra:_(C,{variant:`secondary`,children:`Live`}),cover:_(`img`,{src:ne,alt:`Workspace dashboard`,className:`h-56 w-full object-cover`}),actions:[_(b,{type:`text`,size:`sm`,className:`inline-flex items-center justify-center`,children:g(`span`,{className:`inline-flex items-center gap-2`,children:[_(ie,{}),`查看报表`]})}),_(b,{color:`primary`,size:`sm`,className:`inline-flex items-center justify-center`,children:g(`span`,{className:`inline-flex items-center gap-2`,children:[_(ae,{}),`升级看板`]})})],hoverable:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[_(`p`,{className:`text-sm leading-6 opacity-80`,children:`把封面、头部、操作区放进根组件 props，适合仪表盘、概览页和运营卡片。`}),g(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[_(C,{outline:!0,children:`转化率 19.2%`}),_(C,{outline:!0,children:`客单价 +12%`}),_(C,{outline:!0,children:`复购率 +7%`})]})]}),g(x,{type:`inner`,title:`为什么要这样用`,className:`bg-base-100 shadow-sm`,children:[_(`p`,{className:`text-sm leading-6 opacity-75`,children:`语义化 API 适合把常见结构固定下来，减少反复手写 header、body、actions 和 tabs 布局。`}),g(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Cover`}),_(`div`,{className:`mt-2 text-sm font-medium`,children:`顶部封面`})]}),g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Actions`}),_(`div`,{className:`mt-2 text-sm font-medium`,children:`底部分栏操作`})]})]})]})]})});p(()=>l(t,o,k))});let A=a(`rue:component:anchor`);r(o,A),c(()=>{let e=d(w,{title:`复合子组件`,summary:`Body / Title / Actions / Figure 继续保留，适合手工拼装自定义结构。`,tab:h,code:pe,preview:()=>g(x,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:[_(x.Figure,{children:_(`img`,{src:E,alt:`Shoes`})}),g(x.Body,{children:[_(x.Title,{children:`Card Title`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`低层子组件没有被移除，仍然适合自定义媒体顺序、插入任意节点或接管布局细节。`}),_(x.Actions,{className:`justify-end`,children:_(b,{color:`primary`,children:`Buy Now`})})]})]})});p(()=>l(e,o,A))});let j=a(`rue:component:anchor`);r(o,j),c(()=>{let e=d(w,{title:`Meta 与操作栏`,summary:`Card.Meta 统一头像、标题和描述；配合根组件 actions 更适合做资料卡与工作区卡片。`,tab:y,code:me,preview:()=>_(x,{cover:_(`img`,{src:re,alt:`Team workspace`,className:`h-52 w-full object-cover`}),actions:[_(b,{type:`text`,size:`sm`,children:`收藏`}),_(b,{type:`text`,size:`sm`,children:`分享`}),_(b,{color:`primary`,size:`sm`,children:`打开空间`})],className:`overflow-hidden bg-base-100 shadow-sm`,children:g(x.Body,{className:`gap-4`,children:[_(x.Meta,{avatar:_(ce,{text:`AI`}),title:`Rue Design Workspace`,description:`把文档、组件、评审记录聚合在一张卡片里。`,children:g(`div`,{className:`flex flex-wrap gap-2`,children:[_(C,{outline:!0,children:`12 个原型`}),_(C,{outline:!0,children:`3 位维护者`}),_(C,{outline:!0,children:`2 个待合并 PR`})]})}),_(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-6 opacity-80`,children:`这类卡片适合团队空间、作者信息、文章摘要、资源入口等需要“头像 + 文案 + 操作”的场景。`})]})})});p(()=>l(e,o,j))});let je=a(`rue:component:anchor`);r(o,je),c(()=>{let e=d(w,{title:`带 Tabs 的卡片`,summary:`Card 现在可直接承载卡片级 tab 头部，适合概览、里程碑、成员等分区内容。`,tab:S,code:he,preview:()=>g(x,{title:`版本节奏`,activeTabKey:O.value,tabList:[{key:`overview`,label:`总览`},{key:`milestones`,label:`里程碑`},{key:`members`,label:`成员`}],tabBarExtraContent:_(b,{size:`sm`,color:`primary`,children:g(`span`,{className:`inline-flex items-center gap-2`,children:[_(se,{}),`新建里程碑`]})}),onTabChange:e=>{O.value=e},className:`bg-base-100 shadow-sm`,children:[O.value===`overview`?g(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Velocity`}),_(`div`,{className:`mt-2 text-2xl font-semibold`,children:`+18%`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`本周交付速度`})]}),g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`QA`}),_(`div`,{className:`mt-2 text-2xl font-semibold`,children:`7`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`待验证缺陷`})]}),g(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Review`}),_(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`待合并 PR`})]})]}):null,O.value===`milestones`?g(`ul`,{className:`list gap-2`,children:[g(`li`,{className:`list-row`,children:[_(`div`,{className:`font-medium`,children:`v0.8`}),_(`div`,{className:`list-col-grow text-sm opacity-75`,children:`表单编排和 SSR 回归测试`}),_(C,{variant:`secondary`,children:`In Review`})]}),g(`li`,{className:`list-row`,children:[_(`div`,{className:`font-medium`,children:`v0.9`}),_(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计页统一升级`}),_(C,{outline:!0,children:`Planning`})]})]}):null,O.value===`members`?_(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[`UI`,`DX`,`QA`].map(e=>g(`div`,{className:`rounded-box bg-base-200/70 p-4 text-center`,children:[_(ce,{text:e,className:`mx-auto bg-secondary text-secondary-content`}),g(`div`,{className:`mt-3 font-medium`,children:[e,` Owner`]})]},e))}):null]})});p(()=>l(e,o,je))});let M=a(`rue:component:anchor`);r(o,M),c(()=>{let e=d(w,{title:`Loading 与 Inner`,summary:`loading 为数据未返回时提供骨架占位，type='inner' 适合二级信息层。`,tab:D,code:ge,preview:()=>g(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[_(x,{loading:!0,title:`同步远程指标`,className:`bg-base-100 shadow-sm`}),g(x,{type:`inner`,title:`内嵌提示`,className:`bg-base-100 shadow-sm`,children:[_(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 卡片更适合放在正文、抽屉或主卡片内部作为次级说明层，不会抢掉主信息面的视觉焦点。`}),g(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[_(C,{outline:!0,children:`发布前检查`}),_(C,{outline:!0,children:`设计稿已对齐`})]})]})]})});p(()=>l(e,o,M))});let N=a(`rue:component:anchor`);r(o,N),c(()=>{let e=d(w,{title:`Grid 网格卡片`,summary:`Card.Grid 适合做快捷入口和稠密信息总览；bodyClassName='!p-0' 可以去掉默认留白。`,tab:we,code:_e,preview:()=>_(x,{title:`常用入口`,bodyClassName:`!p-0`,className:`overflow-hidden bg-base-100 shadow-sm`,children:g(`div`,{className:`grid gap-px bg-base-300/70 sm:grid-cols-2 xl:grid-cols-4`,children:[g(x.Grid,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Docs`}),_(`div`,{className:`mt-2 font-semibold`,children:`文档中心`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`组件说明、计划和变更记录`})]}),g(x.Grid,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Token`}),_(`div`,{className:`mt-2 font-semibold`,children:`设计 Token`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`语义色、尺寸与层级规则`})]}),g(x.Grid,{hoverable:!1,children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Build`}),_(`div`,{className:`mt-2 font-semibold`,children:`构建产物`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`稳定视图，不需要 hover 干扰`})]}),g(x.Grid,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Usage`}),_(`div`,{className:`mt-2 font-semibold`,children:`使用趋势`}),_(`div`,{className:`mt-1 text-sm opacity-75`,children:`近 7 天页面访问与组件调用`})]})]})})});p(()=>l(e,o,N))});let P=a(`rue:component:anchor`);r(o,P),c(()=>{let e=d(w,{title:`Pricing Card`,summary:`保留原有定价卡片示例，作为信息密度更高的业务组合案例。`,tab:Te,code:ve,preview:()=>_(x,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body`,children:[_(`span`,{className:`badge badge-xs badge-warning`,children:`Most Popular`}),g(`div`,{className:`flex items-end justify-between gap-4`,children:[_(`h2`,{className:`text-3xl font-bold`,children:`Premium`}),_(`span`,{className:`text-xl`,children:`$29/mo`})]}),g(`ul`,{className:`mt-6 flex flex-col gap-2 text-xs leading-6`,children:[_(`li`,{children:`High-resolution image generation`}),_(`li`,{children:`Customizable style templates`}),_(`li`,{children:`Batch processing capabilities`}),_(`li`,{children:`AI-driven image enhancements`}),_(`li`,{className:`opacity-50 line-through`,children:`Seamless cloud integration`}),_(`li`,{className:`opacity-50 line-through`,children:`Real-time collaboration tools`})]}),_(`div`,{className:`mt-6`,children:_(b,{color:`primary`,block:!0,children:`Subscribe`})})]})})});p(()=>l(e,o,P))});let F=a(`rue:component:anchor`);r(o,F),c(()=>{let e=d(w,{title:`Card Sizes`,summary:`保留 xs ~ xl 的旧示例，同时补上更贴近业务语境的说明文案。`,tab:Ee,code:ye,preview:()=>g(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(x,{size:`xs`,className:`bg-base-100 shadow-sm`,children:g(x.Body,{children:[_(x.Title,{children:`Xsmall Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合最紧凑的信息块。`})]})}),_(x,{size:`sm`,className:`bg-base-100 shadow-sm`,children:g(x.Body,{children:[_(x.Title,{children:`Small Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`移动端列表卡片常用尺寸。`})]})}),_(x,{size:`md`,className:`bg-base-100 shadow-sm`,children:g(x.Body,{children:[_(x.Title,{children:`Medium Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`默认信息层级。`})]})}),_(x,{size:`lg`,className:`bg-base-100 shadow-sm`,children:g(x.Body,{children:[_(x.Title,{children:`Large Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合模块式运营位。`})]})}),_(x,{size:`xl`,className:`bg-base-100 shadow-sm lg:col-span-2`,children:g(x.Body,{children:[_(x.Title,{children:`Xlarge Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合宽幅内容摘要、品牌故事和大段说明。`})]})})]})});p(()=>l(e,o,F))});let I=a(`rue:component:anchor`);r(o,I),c(()=>{let e=d(w,{title:`内容组合`,summary:`保留 badge、纯内容卡片、顶部动作卡三种旧布局，并改成同一组内容编排能力展示。`,tab:De,code:be,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-3`,children:[_(x,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:_(`img`,{src:E,alt:`Shoes`}),children:g(x.Body,{children:[g(x.Title,{children:[`Card Title `,_(C,{variant:`secondary`,children:`NEW`})]}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`标题区可以直接承载状态徽标、分类标签和辅助描述。`}),g(x.Actions,{className:`justify-end`,children:[_(C,{outline:!0,children:`Fashion`}),_(C,{outline:!0,children:`Products`})]})]})}),_(x,{className:`bg-base-100 shadow-sm`,children:g(x.Body,{children:[_(x.Title,{children:`Card title!`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`没有图片时，Card 依然可以作为纯文字信息块，常用于说明、公告和短引导。`}),_(x.Actions,{className:`justify-end`,children:_(b,{color:`primary`,children:`Buy Now`})})]})}),_(x,{className:`bg-base-100 shadow-sm`,children:g(x.Body,{children:[_(x.Actions,{className:`justify-end`,children:_(b,{shape:`square`,size:`sm`,children:_(oe,{})})}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`把动作放在内容上方，适合轻提示、清单项和可关闭的局部提醒。`})]})})]})});p(()=>l(e,o,I))});let L=a(`rue:component:anchor`);r(o,L),c(()=>{let e=d(w,{title:`边框、颜色与层次`,summary:`保留 border、dash、品牌色、深色居中卡片等旧示例，同时补入 inner 变体。`,tab:Oe,code:xe,preview:()=>g(`div`,{className:`grid gap-6 lg:grid-cols-2 xl:grid-cols-3`,children:[_(x,{variant:`outlined`,className:`bg-base-100`,children:g(x.Body,{children:[_(x.Title,{children:`Outlined`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`经典描边信息卡，适合列表页和设置页。`})]})}),_(x,{variant:`dashed`,className:`bg-base-100`,children:g(x.Body,{children:[_(x.Title,{children:`Dashed`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`更像引导态或占位态，用来提示下一步动作。`})]})}),_(x,{className:`bg-primary text-primary-content shadow-sm`,children:g(x.Body,{children:[_(x.Title,{children:`Brand Surface`}),_(`p`,{className:`text-sm leading-6 opacity-90`,children:`保留原有的品牌色卡片用法。`}),_(x.Actions,{className:`justify-end`,children:_(b,{children:`Buy Now`})})]})}),_(x,{className:`bg-neutral text-neutral-content shadow-sm`,children:g(x.Body,{className:`items-center text-center`,children:[_(x.Title,{children:`Cookies!`}),_(`p`,{className:`text-sm leading-6 opacity-85`,children:`居中内容 + 反差表面适合提醒面板。`}),g(x.Actions,{className:`justify-end`,children:[_(b,{color:`primary`,children:`Accept`}),_(b,{type:`text`,children:`Deny`})]})]})}),_(x,{type:`inner`,className:`bg-base-100 shadow-sm lg:col-span-2 xl:col-span-1`,children:g(x.Body,{children:[_(x.Title,{children:`Inner`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 会切到更内嵌的底色和边框，适合把提示块、日志块或小型面板压进更大的容器里。`})]})})]})});p(()=>l(e,o,L))});let Me=a(`rue:component:anchor`);r(o,Me),c(()=>{let e=d(w,{title:`媒体布局`,summary:`保留顶部图片、底部图片、居中留白、图片覆盖四种旧媒体布局。`,tab:ke,code:Se,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[_(x,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:_(`img`,{src:E,alt:`Shoes`}),children:g(x.Body,{children:[_(x.Title,{children:`Card Title`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`最常见的顶部封面布局。`}),_(x.Actions,{className:`justify-end`,children:_(b,{color:`primary`,children:`Buy Now`})})]})}),g(x,{className:`bg-base-100 shadow-sm`,children:[g(x.Body,{children:[_(x.Title,{children:`Bottom Image`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`把媒体放到内容之后，适合做故事卡片。`})]}),_(`figure`,{children:_(`img`,{src:E,alt:`Shoes`})})]}),g(x,{className:`bg-base-100 shadow-sm`,children:[_(`figure`,{className:`px-10 pt-10`,children:_(`img`,{src:E,alt:`Shoes`,className:`rounded-box`})}),g(x.Body,{className:`items-center text-center`,children:[_(x.Title,{children:`Centered Card`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`保留原有居中内容与额外留白的写法。`}),_(x.Actions,{children:_(b,{color:`primary`,children:`Buy Now`})})]})]}),_(x,{imageFull:!0,className:`overflow-hidden bg-base-100 shadow-sm`,cover:_(`img`,{src:E,alt:`Shoes`}),children:g(x.Body,{children:[_(x.Title,{children:`Image Overlay`}),_(`p`,{className:`text-sm leading-6 opacity-90`,children:`imageFull 让封面进入背景层，适合做大图氛围卡。`}),_(x.Actions,{className:`justify-end`,children:_(b,{color:`primary`,children:`Buy Now`})})]})})]})});p(()=>l(e,o,Me))});let Ne=a(`rue:component:anchor`);r(o,Ne),c(()=>{let e=d(w,{title:`横向布局`,summary:`保留 side 和响应式横向布局两种旧示例，适合媒体摘要和推荐位。`,tab:Ae,code:Ce,preview:()=>g(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[g(x,{side:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[_(`figure`,{children:_(`img`,{src:ee,alt:`Movie`})}),g(x.Body,{children:[_(x.Title,{children:`New movie is released!`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to watch on Jetflix app.`}),_(x.Actions,{className:`justify-end`,children:_(b,{color:`primary`,children:`Watch`})})]})]}),g(x,{className:`overflow-hidden bg-base-100 shadow-sm lg:card-side`,children:[_(`figure`,{children:_(`img`,{src:te,alt:`Album`})}),g(x.Body,{children:[_(x.Title,{children:`New album is released!`}),_(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to listen on Spotiwhy app.`}),_(x.Actions,{className:`justify-end`,children:_(b,{color:`primary`,children:`Listen`})})]})]})]})});p(()=>l(e,o,Ne))});let R=i(`div`,o);r(o,R),f(R,`not-prose my-8 space-y-6`);let z=i(`div`,R);r(R,z);let B=i(`h2`,z);r(z,B),f(B,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(B,u(`# API`));let V=i(`p`,z);r(z,V),f(V,`m-0 text-sm opacity-70`),r(V,u(`Rue Card 现在同时支持“语义化根组件 API”和“低层复合子组件 API”。如果你已经习惯直接写 daisyUI 结构，也仍然可以继续混用。`));let H=i(`div`,R);r(R,H);let U=i(`h3`,H);r(H,U),f(U,`mt-0 mb-3 text-base font-semibold`),r(U,u(`Card`));let Pe=a(`rue:component:anchor`);r(H,Pe),c(()=>{let e=d(T,{rows:le});p(()=>l(e,H,Pe))});let W=i(`div`,R);r(R,W);let G=i(`h3`,W);r(W,G),f(G,`mt-0 mb-3 text-base font-semibold`),r(G,u(`Card.Meta`));let K=a(`rue:component:anchor`);r(W,K),c(()=>{let e=d(T,{rows:ue});p(()=>l(e,W,K))});let q=i(`div`,R);r(R,q);let J=i(`h3`,q);r(q,J),f(J,`mt-0 mb-3 text-base font-semibold`),r(J,u(`Card.Grid`));let Y=a(`rue:component:anchor`);r(q,Y),c(()=>{let e=d(T,{rows:de});p(()=>l(e,q,Y))});let X=i(`div`,R);r(R,X),f(X,`rounded-box border border-base-300 bg-base-100 p-5 text-sm leading-7`);let Z=i(`div`,X);r(X,Z),f(Z,`text-xs uppercase tracking-[0.18em] opacity-60`),r(Z,u(`低层复合结构`));let Q=i(`div`,X);r(X,Q),f(Q,`mt-3 font-medium`),r(Q,u(`Card.Body / Card.Title / Card.Actions / Card.Figure`));let $=i(`p`,X);return r(X,$),f($,`mt-2 mb-0 opacity-75`),r($,u(`这四个子组件保持和旧版一样的职责：当你想完全接管布局顺序时，继续直接拼结构即可；当你只想快速生成头部、封面和操作区时，再切到根组件的语义化 props。`)),t})}),o,m),o})};export{D as default};
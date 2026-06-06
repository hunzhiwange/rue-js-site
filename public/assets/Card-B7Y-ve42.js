import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./button-B1PhsXzm.js";import{t as x}from"./card-B24uiCS9.js";import{t as S}from"./tabs-BOxm6iIN.js";import{t as C}from"./badge-brlKCV7x.js";var w=s=>l(c=>{let f=o(`div`,c);e(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,f);t(f,m),e(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);t(m,h);let _=o(`h2`,h);t(h,_),e(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(_,r(`# `));let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=s.title;p(()=>u(e,_,v))});let y=i(`rue:slot:anchor`);t(h,y),n(()=>{let r=s.summary?l(()=>{let r=a(),c=o(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=s.summary;p(()=>u(e,c,l))}),r}):``;p(()=>u(r,h,y))});let b=i(`rue:component:anchor`);t(f,b),n(()=>{let e=d(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.tab.value,onChange:e=>s.tab.value=e,className:`mb-3 mt-4`});p(()=>u(e,f,b))});let x=i(`rue:slot:anchor`);return t(f,x),n(()=>{let e=s.tab.value===`preview`?s.preview():l(()=>{let e=a(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=d(g,{className:`mt-2`,lang:`tsx`,code:s.code});p(()=>u(t,e,r))}),e});p(()=>u(e,f,x))}),f}),T=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),E=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,ee=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,te=`https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp`,ne=`https://picsum.photos/seed/rue-card-workspace/960/640`,re=`https://picsum.photos/seed/rue-card-report/960/640`,ie=()=>l(n=>{let r=o(`svg`,n);s(r,`xmlns`,`http://www.w3.org/2000/svg`),s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`2`),e(r,`size-4`);let i=o(`path`,r);t(r,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z`);let a=o(`circle`,r);return t(r,a),s(a,`cx`,`12`),s(a,`cy`,`12`),s(a,`r`,`3`),r}),ae=()=>l(n=>{let r=o(`svg`,n);s(r,`xmlns`,`http://www.w3.org/2000/svg`),s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`2`),e(r,`size-4`);let i=o(`path`,r);t(r,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`m4 16 6-6 4 4 6-8`);let a=o(`path`,r);return t(r,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M14 6h6v6`),r}),oe=()=>l(n=>{let r=o(`svg`,n);s(r,`xmlns`,`http://www.w3.org/2000/svg`),s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`2`),e(r,`size-4`);let i=o(`path`,r);return t(r,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M6 6l12 12M18 6 6 18`),r}),se=()=>l(n=>{let r=o(`svg`,n);s(r,`xmlns`,`http://www.w3.org/2000/svg`),s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`2`),e(r,`size-4`);let i=o(`path`,r);return t(r,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M12 5v14M5 12h14`),r}),ce=r=>l(a=>{let s=o(`div`,a);n(()=>{e(s,String(`inline-grid h-12 w-12 place-items-center rounded-full text-sm font-semibold ${r.className??`bg-primary text-primary-content`}`))});let c=i(`rue:slot:anchor`);return t(s,c),n(()=>{let e=r.text;p(()=>u(e,s,c))}),s}),le=[{prop:`actions`,description:`底部操作栏，传入节点数组后自动平均分栏`,type:`any[]`,defaultValue:`-`},{prop:`activeTabKey`,description:`受控模式下的当前 tab key`,type:`string`,defaultValue:`-`},{prop:`bodyClassName`,description:`语义化 body 容器的类名`,type:`string`,defaultValue:`-`},{prop:`border / bordered`,description:`旧版边框别名，等价于追加 card-border`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`根节点类名，保留与 daisyUI 类直接混用的能力`,type:`string`,defaultValue:`-`},{prop:`cover`,description:`卡片封面，自动渲染为顶部 figure 区域`,type:`any`,defaultValue:`-`},{prop:`dash`,description:`旧版虚线边框开关，追加 card-dash`,type:`boolean`,defaultValue:`false`},{prop:`defaultActiveTabKey`,description:`非受控模式下的默认 tab key`,type:`string`,defaultValue:`tabList 第一项`},{prop:`extra`,description:`头部右侧操作区域`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`语义化 header 容器的类名`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`启用悬浮抬升与阴影过渡`,type:`boolean`,defaultValue:`false`},{prop:`imageFull`,description:`沿用 daisyUI image-full，适合封面做背景图`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`在 body 区域输出骨架占位`,type:`boolean`,defaultValue:`false`},{prop:`onTabChange`,description:`tab 切换回调，受控与非受控模式都会触发`,type:`(key: string) => void`,defaultValue:`-`},{prop:`side`,description:`沿用 daisyUI card-side，让 figure 进入横向布局`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`支持 xs~xl 与 small / middle / large 语义别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'middle' | 'large'`,defaultValue:`md`},{prop:`tabBarExtraContent`,description:`tabs 右侧扩展区域`,type:`any`,defaultValue:`-`},{prop:`tabList`,description:`头部 tabs 配置列表，支持 disabled 与 className`,type:`Array<{ key: string; label?: any; tab?: any; disabled?: boolean; className?: string }>`,defaultValue:`-`},{prop:`tabProps`,description:`控制 tabs 的 style、placement、size 与 className`,type:`{ style?: 'box' | 'border' | 'lift'; placement?: 'top' | 'bottom'; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; className?: string }`,defaultValue:`-`},{prop:`title`,description:`头部标题区`,type:`any`,defaultValue:`-`},{prop:`type`,description:`卡片层次语义，inner 会切到更内嵌的底色与边框`,type:`'default' | 'inner'`,defaultValue:`default`},{prop:`variant`,description:`语义化边框风格，优先于展示层 API 编排`,type:`'outlined' | 'borderless' | 'dashed'`,defaultValue:`borderless`}],ue=[{prop:`avatar`,description:`头像或图标区域`,type:`any`,defaultValue:`-`},{prop:`children`,description:`标题和描述下方的自定义补充内容`,type:`any`,defaultValue:`-`},{prop:`className`,description:`Meta 根节点类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`描述内容`,type:`any`,defaultValue:`-`},{prop:`title`,description:`标题内容`,type:`any`,defaultValue:`-`}],de=[{prop:`className`,description:`Grid 单元的类名，常与宽度或背景类联用`,type:`string`,defaultValue:`-`},{prop:`hoverable`,description:`是否启用 hover 阴影与背景过渡`,type:`boolean`,defaultValue:`true`},{prop:`style`,description:`Grid 单元的行内样式`,type:`any`,defaultValue:`-`}],fe=`import { Badge, Button, Card } from '@rue-js/design'

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
</div>`,D=()=>{let{tabSemantic:s,tabCompound:h,tabMeta:g,tabTabs:S,tabLoading:D,tabGrid:we,tabPricing:Te,tabSizes:Ee,tabContent:De,tabAppearance:Oe,tabMedia:ke,tabHorizontal:Ae,productTab:O}=m(`useSetup:0:0`,()=>f(()=>({tabSemantic:m(`ref:1:0`,()=>c(`preview`)),tabCompound:m(`ref:1:1`,()=>c(`preview`)),tabMeta:m(`ref:1:2`,()=>c(`preview`)),tabTabs:m(`ref:1:3`,()=>c(`preview`)),tabLoading:m(`ref:1:4`,()=>c(`preview`)),tabGrid:m(`ref:1:5`,()=>c(`preview`)),tabPricing:m(`ref:1:6`,()=>c(`preview`)),tabSizes:m(`ref:1:7`,()=>c(`preview`)),tabContent:m(`ref:1:8`,()=>c(`preview`)),tabAppearance:m(`ref:1:9`,()=>c(`preview`)),tabMedia:m(`ref:1:10`,()=>c(`preview`)),tabHorizontal:m(`ref:1:11`,()=>c(`preview`)),productTab:m(`ref:1:12`,()=>c(`overview`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(y,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Card 卡片`));let m=o(`p`,l);t(l,m),e(m,`text-sm mt-3 mb-3`),t(m,r(`Card 用于把内容、媒体、操作和状态浓缩进一块易读的表面里。`));let y=o(`p`,l);t(l,y),e(y,`text-sm my-3 opacity-75`),t(y,r(`这一轮增强保留了 Rue 当前的视觉语气和 daisyUI class 直连能力，同时补上更接近业务组件的头部、封面、操作栏、Meta、Grid、loading 和 tabs API。`));let k=i(`rue:component:anchor`);t(l,k),n(()=>{let e=d(w,{title:`语义化 API`,summary:`优先展示新增加的 title、extra、cover、actions、hoverable 组合写法。`,tab:s,code:fe,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`,children:[_(x,{title:`Q2 产品指标`,extra:v(C,{variant:`secondary`,children:`Live`}),cover:v(`img`,{src:ne,alt:`Workspace dashboard`,className:`h-56 w-full object-cover`}),actions:[v(b,{type:`text`,size:`sm`,className:`inline-flex items-center justify-center`,children:_(`span`,{className:`inline-flex items-center gap-2`,children:[v(ie,{}),`查看报表`]})}),v(b,{color:`primary`,size:`sm`,className:`inline-flex items-center justify-center`,children:_(`span`,{className:`inline-flex items-center gap-2`,children:[v(ae,{}),`升级看板`]})})],hoverable:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[v(`p`,{className:`text-sm leading-6 opacity-80`,children:`把封面、头部、操作区放进根组件 props，适合仪表盘、概览页和运营卡片。`}),_(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[v(C,{outline:!0,children:`转化率 19.2%`}),v(C,{outline:!0,children:`客单价 +12%`}),v(C,{outline:!0,children:`复购率 +7%`})]})]}),_(x,{type:`inner`,title:`为什么要这样用`,className:`bg-base-100 shadow-sm`,children:[v(`p`,{className:`text-sm leading-6 opacity-75`,children:`语义化 API 适合把常见结构固定下来，减少反复手写 header、body、actions 和 tabs 布局。`}),_(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Cover`}),v(`div`,{className:`mt-2 text-sm font-medium`,children:`顶部封面`})]}),_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-60`,children:`Actions`}),v(`div`,{className:`mt-2 text-sm font-medium`,children:`底部分栏操作`})]})]})]})]})});p(()=>u(e,l,k))});let A=i(`rue:component:anchor`);t(l,A),n(()=>{let e=d(w,{title:`复合子组件`,summary:`Body / Title / Actions / Figure 继续保留，适合手工拼装自定义结构。`,tab:h,code:pe,preview:()=>_(x,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:[v(x.Figure,{children:v(`img`,{src:E,alt:`Shoes`})}),_(x.Body,{children:[v(x.Title,{children:`Card Title`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`低层子组件没有被移除，仍然适合自定义媒体顺序、插入任意节点或接管布局细节。`}),v(x.Actions,{className:`justify-end`,children:v(b,{color:`primary`,children:`Buy Now`})})]})]})});p(()=>u(e,l,A))});let j=i(`rue:component:anchor`);t(l,j),n(()=>{let e=d(w,{title:`Meta 与操作栏`,summary:`Card.Meta 统一头像、标题和描述；配合根组件 actions 更适合做资料卡与工作区卡片。`,tab:g,code:me,preview:()=>v(x,{cover:v(`img`,{src:re,alt:`Team workspace`,className:`h-52 w-full object-cover`}),actions:[v(b,{type:`text`,size:`sm`,children:`收藏`}),v(b,{type:`text`,size:`sm`,children:`分享`}),v(b,{color:`primary`,size:`sm`,children:`打开空间`})],className:`overflow-hidden bg-base-100 shadow-sm`,children:_(x.Body,{className:`gap-4`,children:[v(x.Meta,{avatar:v(ce,{text:`AI`}),title:`Rue Design Workspace`,description:`把文档、组件、评审记录聚合在一张卡片里。`,children:_(`div`,{className:`flex flex-wrap gap-2`,children:[v(C,{outline:!0,children:`12 个原型`}),v(C,{outline:!0,children:`3 位维护者`}),v(C,{outline:!0,children:`2 个待合并 PR`})]})}),v(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-6 opacity-80`,children:`这类卡片适合团队空间、作者信息、文章摘要、资源入口等需要“头像 + 文案 + 操作”的场景。`})]})})});p(()=>u(e,l,j))});let je=i(`rue:component:anchor`);t(l,je),n(()=>{let e=d(w,{title:`带 Tabs 的卡片`,summary:`Card 现在可直接承载卡片级 tab 头部，适合概览、里程碑、成员等分区内容。`,tab:S,code:he,preview:()=>_(x,{title:`版本节奏`,activeTabKey:O.value,tabList:[{key:`overview`,label:`总览`},{key:`milestones`,label:`里程碑`},{key:`members`,label:`成员`}],tabBarExtraContent:v(b,{size:`sm`,color:`primary`,children:_(`span`,{className:`inline-flex items-center gap-2`,children:[v(se,{}),`新建里程碑`]})}),onTabChange:e=>{O.value=e},className:`bg-base-100 shadow-sm`,children:[O.value===`overview`?_(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Velocity`}),v(`div`,{className:`mt-2 text-2xl font-semibold`,children:`+18%`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`本周交付速度`})]}),_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`QA`}),v(`div`,{className:`mt-2 text-2xl font-semibold`,children:`7`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`待验证缺陷`})]}),_(`div`,{className:`rounded-box bg-base-200/70 p-4`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Review`}),v(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`待合并 PR`})]})]}):null,O.value===`milestones`?_(`ul`,{className:`list gap-2`,children:[_(`li`,{className:`list-row`,children:[v(`div`,{className:`font-medium`,children:`v0.8`}),v(`div`,{className:`list-col-grow text-sm opacity-75`,children:`表单编排和 SSR 回归测试`}),v(C,{variant:`secondary`,children:`In Review`})]}),_(`li`,{className:`list-row`,children:[v(`div`,{className:`font-medium`,children:`v0.9`}),v(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计页统一升级`}),v(C,{outline:!0,children:`Planning`})]})]}):null,O.value===`members`?v(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[`UI`,`DX`,`QA`].map(e=>_(`div`,{className:`rounded-box bg-base-200/70 p-4 text-center`,children:[v(ce,{text:e,className:`mx-auto bg-secondary text-secondary-content`}),_(`div`,{className:`mt-3 font-medium`,children:[e,` Owner`]})]},e))}):null]})});p(()=>u(e,l,je))});let M=i(`rue:component:anchor`);t(l,M),n(()=>{let e=d(w,{title:`Loading 与 Inner`,summary:`loading 为数据未返回时提供骨架占位，type='inner' 适合二级信息层。`,tab:D,code:ge,preview:()=>_(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[v(x,{loading:!0,title:`同步远程指标`,className:`bg-base-100 shadow-sm`}),_(x,{type:`inner`,title:`内嵌提示`,className:`bg-base-100 shadow-sm`,children:[v(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 卡片更适合放在正文、抽屉或主卡片内部作为次级说明层，不会抢掉主信息面的视觉焦点。`}),_(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[v(C,{outline:!0,children:`发布前检查`}),v(C,{outline:!0,children:`设计稿已对齐`})]})]})]})});p(()=>u(e,l,M))});let N=i(`rue:component:anchor`);t(l,N),n(()=>{let e=d(w,{title:`Grid 网格卡片`,summary:`Card.Grid 适合做快捷入口和稠密信息总览；bodyClassName='!p-0' 可以去掉默认留白。`,tab:we,code:_e,preview:()=>v(x,{title:`常用入口`,bodyClassName:`!p-0`,className:`overflow-hidden bg-base-100 shadow-sm`,children:_(`div`,{className:`grid gap-px bg-base-300/70 sm:grid-cols-2 xl:grid-cols-4`,children:[_(x.Grid,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Docs`}),v(`div`,{className:`mt-2 font-semibold`,children:`文档中心`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`组件说明、计划和变更记录`})]}),_(x.Grid,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Token`}),v(`div`,{className:`mt-2 font-semibold`,children:`设计 Token`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`语义色、尺寸与层级规则`})]}),_(x.Grid,{hoverable:!1,children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Build`}),v(`div`,{className:`mt-2 font-semibold`,children:`构建产物`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`稳定视图，不需要 hover 干扰`})]}),_(x.Grid,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.16em] opacity-60`,children:`Usage`}),v(`div`,{className:`mt-2 font-semibold`,children:`使用趋势`}),v(`div`,{className:`mt-1 text-sm opacity-75`,children:`近 7 天页面访问与组件调用`})]})]})})});p(()=>u(e,l,N))});let P=i(`rue:component:anchor`);t(l,P),n(()=>{let e=d(w,{title:`Pricing Card`,summary:`保留原有定价卡片示例，作为信息密度更高的业务组合案例。`,tab:Te,code:ve,preview:()=>v(x,{className:`w-full max-w-md bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body`,children:[v(`span`,{className:`badge badge-xs badge-warning`,children:`Most Popular`}),_(`div`,{className:`flex items-end justify-between gap-4`,children:[v(`h2`,{className:`text-3xl font-bold`,children:`Premium`}),v(`span`,{className:`text-xl`,children:`$29/mo`})]}),_(`ul`,{className:`mt-6 flex flex-col gap-2 text-xs leading-6`,children:[v(`li`,{children:`High-resolution image generation`}),v(`li`,{children:`Customizable style templates`}),v(`li`,{children:`Batch processing capabilities`}),v(`li`,{children:`AI-driven image enhancements`}),v(`li`,{className:`opacity-50 line-through`,children:`Seamless cloud integration`}),v(`li`,{className:`opacity-50 line-through`,children:`Real-time collaboration tools`})]}),v(`div`,{className:`mt-6`,children:v(b,{color:`primary`,block:!0,children:`Subscribe`})})]})})});p(()=>u(e,l,P))});let F=i(`rue:component:anchor`);t(l,F),n(()=>{let e=d(w,{title:`Card Sizes`,summary:`保留 xs ~ xl 的旧示例，同时补上更贴近业务语境的说明文案。`,tab:Ee,code:ye,preview:()=>_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[v(x,{size:`xs`,className:`bg-base-100 shadow-sm`,children:_(x.Body,{children:[v(x.Title,{children:`Xsmall Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合最紧凑的信息块。`})]})}),v(x,{size:`sm`,className:`bg-base-100 shadow-sm`,children:_(x.Body,{children:[v(x.Title,{children:`Small Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`移动端列表卡片常用尺寸。`})]})}),v(x,{size:`md`,className:`bg-base-100 shadow-sm`,children:_(x.Body,{children:[v(x.Title,{children:`Medium Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`默认信息层级。`})]})}),v(x,{size:`lg`,className:`bg-base-100 shadow-sm`,children:_(x.Body,{children:[v(x.Title,{children:`Large Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合模块式运营位。`})]})}),v(x,{size:`xl`,className:`bg-base-100 shadow-sm lg:col-span-2`,children:_(x.Body,{children:[v(x.Title,{children:`Xlarge Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`适合宽幅内容摘要、品牌故事和大段说明。`})]})})]})});p(()=>u(e,l,F))});let I=i(`rue:component:anchor`);t(l,I),n(()=>{let e=d(w,{title:`内容组合`,summary:`保留 badge、纯内容卡片、顶部动作卡三种旧布局，并改成同一组内容编排能力展示。`,tab:De,code:be,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-3`,children:[v(x,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:v(`img`,{src:E,alt:`Shoes`}),children:_(x.Body,{children:[_(x.Title,{children:[`Card Title `,v(C,{variant:`secondary`,children:`NEW`})]}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`标题区可以直接承载状态徽标、分类标签和辅助描述。`}),_(x.Actions,{className:`justify-end`,children:[v(C,{outline:!0,children:`Fashion`}),v(C,{outline:!0,children:`Products`})]})]})}),v(x,{className:`bg-base-100 shadow-sm`,children:_(x.Body,{children:[v(x.Title,{children:`Card title!`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`没有图片时，Card 依然可以作为纯文字信息块，常用于说明、公告和短引导。`}),v(x.Actions,{className:`justify-end`,children:v(b,{color:`primary`,children:`Buy Now`})})]})}),v(x,{className:`bg-base-100 shadow-sm`,children:_(x.Body,{children:[v(x.Actions,{className:`justify-end`,children:v(b,{shape:`square`,size:`sm`,children:v(oe,{})})}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`把动作放在内容上方，适合轻提示、清单项和可关闭的局部提醒。`})]})})]})});p(()=>u(e,l,I))});let L=i(`rue:component:anchor`);t(l,L),n(()=>{let e=d(w,{title:`边框、颜色与层次`,summary:`保留 border、dash、品牌色、深色居中卡片等旧示例，同时补入 inner 变体。`,tab:Oe,code:xe,preview:()=>_(`div`,{className:`grid gap-6 lg:grid-cols-2 xl:grid-cols-3`,children:[v(x,{variant:`outlined`,className:`bg-base-100`,children:_(x.Body,{children:[v(x.Title,{children:`Outlined`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`经典描边信息卡，适合列表页和设置页。`})]})}),v(x,{variant:`dashed`,className:`bg-base-100`,children:_(x.Body,{children:[v(x.Title,{children:`Dashed`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`更像引导态或占位态，用来提示下一步动作。`})]})}),v(x,{className:`bg-primary text-primary-content shadow-sm`,children:_(x.Body,{children:[v(x.Title,{children:`Brand Surface`}),v(`p`,{className:`text-sm leading-6 opacity-90`,children:`保留原有的品牌色卡片用法。`}),v(x.Actions,{className:`justify-end`,children:v(b,{children:`Buy Now`})})]})}),v(x,{className:`bg-neutral text-neutral-content shadow-sm`,children:_(x.Body,{className:`items-center text-center`,children:[v(x.Title,{children:`Cookies!`}),v(`p`,{className:`text-sm leading-6 opacity-85`,children:`居中内容 + 反差表面适合提醒面板。`}),_(x.Actions,{className:`justify-end`,children:[v(b,{color:`primary`,children:`Accept`}),v(b,{type:`text`,children:`Deny`})]})]})}),v(x,{type:`inner`,className:`bg-base-100 shadow-sm lg:col-span-2 xl:col-span-1`,children:_(x.Body,{children:[v(x.Title,{children:`Inner`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`inner 会切到更内嵌的底色和边框，适合把提示块、日志块或小型面板压进更大的容器里。`})]})})]})});p(()=>u(e,l,L))});let Me=i(`rue:component:anchor`);t(l,Me),n(()=>{let e=d(w,{title:`媒体布局`,summary:`保留顶部图片、底部图片、居中留白、图片覆盖四种旧媒体布局。`,tab:ke,code:Se,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[v(x,{className:`overflow-hidden bg-base-100 shadow-sm`,cover:v(`img`,{src:E,alt:`Shoes`}),children:_(x.Body,{children:[v(x.Title,{children:`Card Title`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`最常见的顶部封面布局。`}),v(x.Actions,{className:`justify-end`,children:v(b,{color:`primary`,children:`Buy Now`})})]})}),_(x,{className:`bg-base-100 shadow-sm`,children:[_(x.Body,{children:[v(x.Title,{children:`Bottom Image`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`把媒体放到内容之后，适合做故事卡片。`})]}),v(`figure`,{children:v(`img`,{src:E,alt:`Shoes`})})]}),_(x,{className:`bg-base-100 shadow-sm`,children:[v(`figure`,{className:`px-10 pt-10`,children:v(`img`,{src:E,alt:`Shoes`,className:`rounded-box`})}),_(x.Body,{className:`items-center text-center`,children:[v(x.Title,{children:`Centered Card`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`保留原有居中内容与额外留白的写法。`}),v(x.Actions,{children:v(b,{color:`primary`,children:`Buy Now`})})]})]}),v(x,{imageFull:!0,className:`overflow-hidden bg-base-100 shadow-sm`,cover:v(`img`,{src:E,alt:`Shoes`}),children:_(x.Body,{children:[v(x.Title,{children:`Image Overlay`}),v(`p`,{className:`text-sm leading-6 opacity-90`,children:`imageFull 让封面进入背景层，适合做大图氛围卡。`}),v(x.Actions,{className:`justify-end`,children:v(b,{color:`primary`,children:`Buy Now`})})]})})]})});p(()=>u(e,l,Me))});let Ne=i(`rue:component:anchor`);t(l,Ne),n(()=>{let e=d(w,{title:`横向布局`,summary:`保留 side 和响应式横向布局两种旧示例，适合媒体摘要和推荐位。`,tab:Ae,code:Ce,preview:()=>_(`div`,{className:`grid gap-6 xl:grid-cols-2`,children:[_(x,{side:!0,className:`overflow-hidden bg-base-100 shadow-sm`,children:[v(`figure`,{children:v(`img`,{src:ee,alt:`Movie`})}),_(x.Body,{children:[v(x.Title,{children:`New movie is released!`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to watch on Jetflix app.`}),v(x.Actions,{className:`justify-end`,children:v(b,{color:`primary`,children:`Watch`})})]})]}),_(x,{className:`overflow-hidden bg-base-100 shadow-sm lg:card-side`,children:[v(`figure`,{children:v(`img`,{src:te,alt:`Album`})}),_(x.Body,{children:[v(x.Title,{children:`New album is released!`}),v(`p`,{className:`text-sm leading-6 opacity-75`,children:`Click the button to listen on Spotiwhy app.`}),v(x.Actions,{className:`justify-end`,children:v(b,{color:`primary`,children:`Listen`})})]})]})]})});p(()=>u(e,l,Ne))});let R=o(`div`,l);t(l,R),e(R,`not-prose my-8 space-y-6`);let z=o(`div`,R);t(R,z);let B=o(`h2`,z);t(z,B),e(B,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(B,r(`# API`));let V=o(`p`,z);t(z,V),e(V,`m-0 text-sm opacity-70`),t(V,r(`Rue Card 现在同时支持“语义化根组件 API”和“低层复合子组件 API”。如果你已经习惯直接写 daisyUI 结构，也仍然可以继续混用。`));let H=o(`div`,R);t(R,H);let U=o(`h3`,H);t(H,U),e(U,`mt-0 mb-3 text-base font-semibold`),t(U,r(`Card`));let Pe=i(`rue:component:anchor`);t(H,Pe),n(()=>{let e=d(T,{rows:le});p(()=>u(e,H,Pe))});let W=o(`div`,R);t(R,W);let G=o(`h3`,W);t(W,G),e(G,`mt-0 mb-3 text-base font-semibold`),t(G,r(`Card.Meta`));let K=i(`rue:component:anchor`);t(W,K),n(()=>{let e=d(T,{rows:ue});p(()=>u(e,W,K))});let q=o(`div`,R);t(R,q);let J=o(`h3`,q);t(q,J),e(J,`mt-0 mb-3 text-base font-semibold`),t(J,r(`Card.Grid`));let Y=i(`rue:component:anchor`);t(q,Y),n(()=>{let e=d(T,{rows:de});p(()=>u(e,q,Y))});let X=o(`div`,R);t(R,X),e(X,`rounded-box border border-base-300 bg-base-100 p-5 text-sm leading-7`);let Z=o(`div`,X);t(X,Z),e(Z,`text-xs uppercase tracking-[0.18em] opacity-60`),t(Z,r(`低层复合结构`));let Q=o(`div`,X);t(X,Q),e(Q,`mt-3 font-medium`),t(Q,r(`Card.Body / Card.Title / Card.Actions / Card.Figure`));let $=o(`p`,X);return t(X,$),e($,`mt-2 mb-0 opacity-75`),t($,r(`这四个子组件保持和旧版一样的职责：当你想完全接管布局顺序时，继续直接拼结构即可；当你只想快速生成头部、封面和操作区时，再切到根组件的语义化 props。`)),c})}),f,m),f})};export{D as default};
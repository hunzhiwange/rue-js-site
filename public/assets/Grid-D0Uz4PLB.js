import{C as e,F as t,I as n,K as r,L as i,N as a,R as o,S as s,W as c,d as l,dt as u,ht as d,l as f,mt as p,st as m,t as h,vt as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as y,t as b}from"./src-BQwLQD8R.js";import{n as x}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as S}from"./Code-DQxnq0in.js";import{t as C}from"./button-BlewusST.js";import{t as w}from"./card-BidtxlSu.js";import{t as T}from"./tabs-DqfJzZfa.js";import{t as E}from"./badge-lRk49Pw8.js";var D=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],O={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},k=new Set,A=(e,t)=>e?t?`${e} ${t}`:e:t??``,j=e=>typeof e==`number`?`${e}px`:e,M=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:M(e)}:${String(t)}`).join(`; `):``,P=(...e)=>e.map(e=>N(e)).filter(Boolean).join(`; `),F=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},I=()=>typeof window>`u`?O.xl:window.innerWidth||document.documentElement?.clientWidth||O.xl,L=()=>{k.forEach(e=>e())},R=e=>typeof window>`u`?()=>{}:(k.size===0&&window.addEventListener(`resize`,L),k.add(e),()=>{k.delete(e),k.size===0&&window.removeEventListener(`resize`,L)}),z=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>D.includes(e)),B=(e,t)=>{if(!z(e))return e;let n;for(let r of D)t>=O[r]&&e[r]!==void 0&&(n=e[r]);return n},V=e=>e?Array.isArray(e)?e.some(e=>z(e)):z(e):!1,H=e=>D.some(t=>e[t]!==void 0),U=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},W=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},G=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},K=(e,t)=>e?Array.isArray(e)?[B(e[0],t),B(e[1],t)]:[B(e,t),void 0]:[void 0,void 0],q=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ee=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of D){if(t<O[r])continue;let i=q(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},J=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},te=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},ne=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:W(n),alignItems:G(r),"--rue-grid-gutter-x":j(e)??`0px`,"--rue-grid-gutter-y":j(t)??`0px`},o=U(e,!0),s=U(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},re=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=J(e.offset)),e.push&&(t.position=`relative`,t.left=J(e.push)),e.pull&&(t.position=`relative`,t.right=J(e.pull)),e.span===0&&(t.display=`none`);let n=te(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=J(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},Y=({gutter:t,align:n,justify:r,wrap:i=!0,className:a,style:o,children:c,...l})=>{let u=V(t),d=l.ref,f=p(),m;`ref`in l&&delete l.ref,u&&(s(()=>{m=R(()=>{h()}),h()}),e(()=>{m&&m()}));let h=()=>{let e=f.current;if(!e)return;let[a,s]=K(t,I()),c=P(ne(a,s,r,n,i),o);c?e.setAttribute(`style`,c):e.removeAttribute(`style`)},g=e=>{f.current=e??void 0,e&&h(),F(d,e)};return b(`div`,{...l,ref:g,"data-rue-grid-row":!0,className:A(`rue-grid rue-grid-row`,a),children:c})},X=Object.assign(Y,{Row:Y,Col:({className:t,style:n,children:r,...i})=>{let a=H(i),o=i.ref,c=p(),l;`ref`in i&&delete i.ref,a&&(s(()=>{l=R(()=>{y()}),y()}),e(()=>{l&&l()}));let{xs:u,sm:d,md:f,lg:m,xl:h,xxl:g,gutter:_,...v}=i,y=()=>{let e=c.current;if(!e)return;let t=P(re(ee(i,I())),n);t?e.setAttribute(`style`,t):e.removeAttribute(`style`)},x=e=>{c.current=e??void 0,e&&y(),F(o,e)};return b(`div`,{...v,ref:x,"data-rue-grid-col":!0,className:A(`rue-grid-col`,t),children:r})}}),Z=e=>l(s=>{let c=i(`div`,s);r(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,c);a(c,d),r(d,`flex flex-wrap items-start justify-between gap-3`);let p=i(`div`,d);a(d,p);let m=i(`h2`,p);a(p,m),r(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(m,o(`# `));let _=t(`rue:slot:anchor`);a(m,_),g(()=>{let t=e.title;u(()=>f(t,m,_))});let v=t(`rue:slot:anchor`);a(p,v),g(()=>{let o=e.summary?l(()=>{let o=n(),s=i(`p`,o);a(o,s),r(s,`m-0 text-sm opacity-70`);let c=t(`rue:slot:anchor`);return a(s,c),g(()=>{let t=e.summary;u(()=>f(t,s,c))}),o}):``;u(()=>f(o,p,v))});let y=t(`rue:component:anchor`);a(c,y),g(()=>{let t=h(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});u(()=>f(t,c,y))});let b=t(`rue:slot:anchor`);return a(c,b),g(()=>{let r=e.tab.value===`preview`?e.preview():l(()=>{let r=n(),i=t(`rue:component:anchor`);return a(r,i),g(()=>{let t=h(S,{className:`mt-2`,lang:`tsx`,code:e.code});u(()=>f(t,r,i))}),r});u(()=>f(r,c,b))}),c}),Q=e=>l(s=>{let d=i(`div`,s);r(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=i(`table`,d);a(d,p),r(p,`table table-zebra`);let m=i(`thead`,p);a(p,m);let h=i(`tr`,m);a(m,h);let _=i(`th`,h);a(h,_),a(_,o(`属性`));let y=i(`th`,h);a(h,y),a(y,o(`说明`));let b=i(`th`,h);a(h,b),a(b,o(`类型`));let x=i(`th`,h);a(h,x),a(x,o(`默认值`));let S=i(`tbody`,p);a(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return g(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,o,s,d)=>{f(l(()=>{let r=n(),o=i(`tr`,r);a(r,o),g(()=>{c(o,`key`,String(e.prop))});let s=i(`td`,o);a(o,s);let l=i(`code`,s);a(s,l);let d=t(`rue:slot:anchor`);a(l,d),g(()=>{let t=e.prop;u(()=>f(t,l,d))});let p=i(`td`,o);a(o,p);let m=t(`rue:slot:anchor`);a(p,m),g(()=>{let t=e.description;u(()=>f(t,p,m))});let h=i(`td`,o);a(o,h);let _=i(`code`,h);a(h,_);let v=t(`rue:slot:anchor`);a(_,v),g(()=>{let t=e.type;u(()=>f(t,_,v))});let y=i(`td`,o);a(o,y);let b=i(`code`,y);a(y,b);let x=t(`rue:slot:anchor`);return a(b,x),g(()=>{let t=e.defaultValue;u(()=>f(t,b,x))}),r}),r,o)}})}),d}),$=e=>l(o=>{let s=i(`div`,o);g(()=>{r(s,String(`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${e.className??``}`.trim()))});let c=i(`div`,s);a(s,c),r(c,`flex items-start justify-between gap-3`);let d=i(`div`,c);a(c,d);let p=i(`div`,d);a(d,p),r(p,`text-sm font-semibold leading-6`);let m=t(`rue:slot:anchor`);a(p,m),g(()=>{let t=e.title;u(()=>f(t,p,m))});let _=t(`rue:slot:anchor`);a(d,_),g(()=>{let o=e.detail?l(()=>{let o=n(),s=i(`div`,o);a(o,s),r(s,`mt-1 text-xs leading-5 opacity-70`);let c=t(`rue:slot:anchor`);return a(s,c),g(()=>{let t=e.detail;u(()=>f(t,s,c))}),o}):``;u(()=>f(o,d,_))});let v=t(`rue:slot:anchor`);return a(c,v),g(()=>{let r=e.tag?l(()=>{let r=n(),i=t(`rue:component:anchor`);return a(r,i),g(()=>{let t=h(E,{outline:!0,children:e.tag});u(()=>f(t,r,i))}),r}):``;u(()=>f(r,c,v))}),s}),ie=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，保留 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ae=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],oe=`import { Grid } from '@rue-js/design'

<Grid gutter={[16, 16]}>
  <Grid.Col span={6}>span=6</Grid.Col>
  <Grid.Col span={6}>span=6</Grid.Col>
  <Grid.Col span={6}>span=6</Grid.Col>
  <Grid.Col span={6}>span=6</Grid.Col>
</Grid>

<Grid gutter={[16, 16]}>
  <Grid.Col span={8}>span=8</Grid.Col>
  <Grid.Col span={8}>span=8</Grid.Col>
  <Grid.Col span={8}>span=8</Grid.Col>
</Grid>`,se=`import { Grid } from '@rue-js/design'

<Grid gutter={[{ xs: 8, md: 24 }, { xs: 8, md: 24 }]}>
  <Grid.Col xs={24} sm={12} lg={8}>A</Grid.Col>
  <Grid.Col xs={24} sm={12} lg={8}>B</Grid.Col>
  <Grid.Col xs={24} lg={8}>C</Grid.Col>
</Grid>`,ce=`import { Grid } from '@rue-js/design'

<Grid gutter={[16, 16]} justify="space-between" align="bottom">
  <Grid.Col span={5}>A</Grid.Col>
  <Grid.Col span={5}>B</Grid.Col>
  <Grid.Col span={5}>C</Grid.Col>
</Grid>

<Grid gutter={[16, 16]}>
  <Grid.Col span={6} offset={6}>offset=6</Grid.Col>
  <Grid.Col span={6} order={3}>order=3</Grid.Col>
  <Grid.Col span={6} order={2}>order=2</Grid.Col>
</Grid>`,le=`import { Grid } from '@rue-js/design'

<Grid gutter={16} align="stretch">
  <Grid.Col flex="280px">Fixed rail</Grid.Col>
  <Grid.Col flex="auto">Fluid content</Grid.Col>
  <Grid.Col flex="120px">Ops</Grid.Col>
</Grid>

<Grid gutter={12} wrap={false}>
  <Grid.Col flex="180px">No wrap</Grid.Col>
  <Grid.Col flex="180px">For horizontal rails</Grid.Col>
  <Grid.Col flex="180px">And sticky toolbars</Grid.Col>
</Grid>`,ue=`import { Badge, Button, Card, Grid } from '@rue-js/design'

<Grid gutter={[20, 20]}>
  <Grid.Col xs={24} xl={16}>
    <Card className="overflow-hidden bg-base-100 shadow-sm">
      <Card.Body className="gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">Growth cockpit</div>
            <div className="mt-1 text-sm opacity-70">一块主画布里继续嵌套 Grid，拆出指标和趋势卡。</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge outline>Live</Badge>
            <Badge outline>Q2</Badge>
          </div>
        </div>

        <Grid gutter={[16, 16]}>
          <Grid.Col xs={24} md={12}>
            <div className="rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-primary/10 via-base-100 to-base-200 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] h-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold leading-6">GMV</div>
                  <div className="mt-1 text-xs leading-5 opacity-70">¥ 4,230,000</div>
                </div>
                <Badge outline>+18%</Badge>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col xs={24} md={12}>
            <div className="rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-success/10 via-base-100 to-base-200 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] h-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold leading-6">Retention</div>
                  <div className="mt-1 text-xs leading-5 opacity-70">71.4%</div>
                </div>
                <Badge outline>+4.8pt</Badge>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col xs={24}>
            <div className="rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Campaign timeline</div>
                  <div className="mt-1 text-xs leading-5 opacity-70">用整行展示跨模块趋势和长内容。</div>
                </div>
                <Button color="primary" size="sm">查看明细</Button>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-box bg-base-200/70 p-4 text-sm">启动 6 个投放实验</div>
                <div className="rounded-box bg-base-200/70 p-4 text-sm">完成落地页 AB 版本替换</div>
                <div className="rounded-box bg-base-200/70 p-4 text-sm">同步 CRM 标签到投放人群</div>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Card.Body>
    </Card>
  </Grid.Col>
  <Grid.Col xs={24} xl={8}>
    <Card className="bg-base-100 shadow-sm">
      <Card.Body className="gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">Ops queue</div>
            <div className="mt-1 text-xs opacity-70">右侧侧栏保持更紧凑的信息节奏。</div>
          </div>
          <Badge outline>7 items</Badge>
        </div>
        <div className="space-y-3">
          <div className="rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-warning/10 via-base-100 to-base-200 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold leading-6">素材审批</div>
                <div className="mt-1 text-xs leading-5 opacity-70">还剩 2 项待确认</div>
              </div>
              <Badge outline>Today</Badge>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-info/10 via-base-100 to-base-200 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold leading-6">会员分层</div>
                <div className="mt-1 text-xs leading-5 opacity-70">等待 CRM 回传标签</div>
              </div>
              <Badge outline>Sync</Badge>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-secondary/10 via-base-100 to-base-200 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold leading-6">报表快照</div>
                <div className="mt-1 text-xs leading-5 opacity-70">18:00 自动归档</div>
              </div>
              <Badge outline>Auto</Badge>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  </Grid.Col>
</Grid>`,de=()=>{let{tabBasic:e,tabResponsive:s,tabAlignment:c,tabFlex:p,tabDashboard:v}=_(`useSetup:0:0`,()=>d(()=>({tabBasic:_(`ref:1:0`,()=>m(`preview`)),tabResponsive:_(`ref:1:1`,()=>m(`preview`)),tabAlignment:_(`ref:1:2`,()=>m(`preview`)),tabFlex:_(`ref:1:3`,()=>m(`preview`)),tabDashboard:_(`ref:1:4`,()=>m(`preview`))})));return l(d=>{let m=n(),_=t(`rue:component:anchor`);return a(m,_),f(h(x,{children:l(()=>{let l=n(),d=i(`div`,l);a(l,d),r(d,`max-w-none prose prose-sm md:prose-base`);let m=i(`h1`,d);a(d,m),a(m,o(`Grid 栅格`));let _=i(`p`,d);a(d,_),r(_,`mt-3 mb-3 text-sm`),a(_,o(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let x=i(`p`,d);a(d,x),r(x,`my-3 text-sm opacity-75`),a(x,o(`这一版不照搬 Ant Design 的视觉，而是把它的核心布局能力迁到 Rue 当前的轻量表面体系里：支持 Row / Col、响应式断点、gutter、偏移、顺序和 flex 混排。`));let S=i(`div`,d);a(d,S),r(S,`not-prose mt-4 flex flex-wrap gap-2`);let T=t(`rue:component:anchor`);a(S,T),g(()=>{let e=h(E,{outline:!0,children:`24 Columns`});u(()=>f(e,S,T))});let D=t(`rue:component:anchor`);a(S,D),g(()=>{let e=h(E,{outline:!0,children:`Responsive`});u(()=>f(e,S,D))});let O=t(`rue:component:anchor`);a(S,O),g(()=>{let e=h(E,{outline:!0,children:`Offset & Order`});u(()=>f(e,S,O))});let k=t(`rue:component:anchor`);a(S,k),g(()=>{let e=h(E,{outline:!0,children:`Flex Mix`});u(()=>f(e,S,k))});let A=t(`rue:component:anchor`);a(d,A),g(()=>{let t=h(Z,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:e,code:oe,preview:()=>y(`div`,{className:`space-y-5`,children:[b(w,{className:`overflow-hidden bg-base-100 shadow-sm`,children:b(w.Body,{className:`gap-4`,children:y(X,{gutter:[16,16],children:[b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),y(X,{gutter:[16,16],children:[b(X.Col,{span:8,children:b($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),b(X.Col,{span:8,children:b($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),b(X.Col,{span:8,children:b($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});u(()=>f(t,d,A))});let j=t(`rue:component:anchor`);a(d,j),g(()=>{let e=h(Z,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:s,code:se,preview:()=>y(`div`,{className:`space-y-4`,children:[b(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),y(X,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[b(X.Col,{xs:24,sm:12,lg:8,children:b($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),b(X.Col,{xs:24,sm:12,lg:8,children:b($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),b(X.Col,{xs:24,lg:8,children:b($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});u(()=>f(e,d,j))});let M=t(`rue:component:anchor`);a(d,M),g(()=>{let e=h(Z,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:c,code:ce,preview:()=>y(`div`,{className:`space-y-6`,children:[b(w,{className:`bg-base-100 shadow-sm`,children:b(w.Body,{className:`gap-4`,children:y(X,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[b(X.Col,{span:5,children:b($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),b(X.Col,{span:5,children:b($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),b(X.Col,{span:5,children:b($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),y(X,{gutter:[16,16],children:[b(X.Col,{span:6,offset:6,children:b($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),b(X.Col,{span:6,order:3,children:b($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),b(X.Col,{span:6,order:2,children:b($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});u(()=>f(e,d,M))});let N=t(`rue:component:anchor`);a(d,N),g(()=>{let e=h(Z,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:p,code:le,preview:()=>y(`div`,{className:`space-y-6`,children:[y(X,{gutter:16,align:`stretch`,children:[b(X.Col,{flex:`280px`,children:b($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),b(X.Col,{flex:`auto`,children:b($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),b(X.Col,{flex:`120px`,children:b($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),y(X,{gutter:12,wrap:!1,children:[b(X.Col,{flex:`180px`,children:b($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),b(X.Col,{flex:`180px`,children:b($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),b(X.Col,{flex:`180px`,children:b($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});u(()=>f(e,d,N))});let P=t(`rue:component:anchor`);a(d,P),g(()=>{let e=h(Z,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:v,code:ue,preview:()=>y(X,{gutter:[20,20],children:[b(X.Col,{xs:24,xl:16,children:b(w,{className:`overflow-hidden bg-base-100 shadow-sm`,children:y(w.Body,{className:`gap-5`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),b(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(E,{outline:!0,children:`Live`}),b(E,{outline:!0,children:`Q2`})]})]}),y(X,{gutter:[16,16],children:[b(X.Col,{xs:24,md:12,children:b($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),b(X.Col,{xs:24,md:12,children:b($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),b(X.Col,{xs:24,children:y(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),b(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),b(C,{color:`primary`,size:`sm`,children:`查看明细`})]}),y(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[b(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),b(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),b(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),b(X.Col,{xs:24,xl:8,children:b(w,{className:`bg-base-100 shadow-sm`,children:y(w.Body,{className:`gap-4`,children:[y(`div`,{className:`flex items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),b(E,{outline:!0,children:`7 items`})]}),y(`div`,{className:`space-y-3`,children:[b($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),b($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),b($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});u(()=>f(e,d,P))});let F=i(`div`,d);a(d,F),r(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=i(`h2`,F);a(F,I),r(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(I,o(`# API`));let L=i(`p`,F);a(F,L),r(L,`m-0 text-sm opacity-70`),a(L,o(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=i(`div`,d);a(d,R),r(R,`not-prose space-y-8`);let z=i(`div`,R);a(R,z);let B=i(`h3`,z);a(z,B),r(B,`mb-3 text-base font-semibold`),a(B,o(`Grid / Grid.Row`));let V=t(`rue:component:anchor`);a(z,V),g(()=>{let e=h(Q,{rows:ie});u(()=>f(e,z,V))});let H=i(`div`,R);a(R,H);let U=i(`h3`,H);a(H,U),r(U,`mb-3 text-base font-semibold`),a(U,o(`Grid.Col`));let W=t(`rue:component:anchor`);return a(H,W),g(()=>{let e=h(Q,{rows:ae});u(()=>f(e,H,W))}),l})}),m,_),m})};export{de as default};
import{$ as e,B as t,Ct as n,D as r,Dt as i,G as a,H as o,O as s,U as c,W as l,Z as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./button-B1PhsXzm.js";import{t as w}from"./card-B24uiCS9.js";import{t as T}from"./tabs-BOxm6iIN.js";import{t as E}from"./badge-brlKCV7x.js";var D=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],O={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},k=new Set,A=(e,t)=>e?t?`${e} ${t}`:e:t??``,j=e=>typeof e==`number`?`${e}px`:e,M=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:M(e)}:${String(t)}`).join(`; `):``,P=(...e)=>e.map(e=>N(e)).filter(Boolean).join(`; `),F=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},I=()=>typeof window>`u`?O.xl:window.innerWidth||document.documentElement?.clientWidth||O.xl,L=()=>{k.forEach(e=>e())},R=e=>typeof window>`u`?()=>{}:(k.size===0&&window.addEventListener(`resize`,L),k.add(e),()=>{k.delete(e),k.size===0&&window.removeEventListener(`resize`,L)}),z=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>D.includes(e)),B=(e,t)=>{if(!z(e))return e;let n;for(let r of D)t>=O[r]&&e[r]!==void 0&&(n=e[r]);return n},V=e=>e?Array.isArray(e)?e.some(e=>z(e)):z(e):!1,H=e=>D.some(t=>e[t]!==void 0),U=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},W=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},G=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},K=(e,t)=>e?Array.isArray(e)?[B(e[0],t),B(e[1],t)]:[B(e,t),void 0]:[void 0,void 0],q=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ee=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of D){if(t<O[r])continue;let i=q(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},J=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},te=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},ne=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:W(n),alignItems:G(r),"--rue-grid-gutter-x":j(e)??`0px`,"--rue-grid-gutter-y":j(t)??`0px`},o=U(e,!0),s=U(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},re=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=J(e.offset)),e.push&&(t.position=`relative`,t.left=J(e.push)),e.pull&&(t.position=`relative`,t.right=J(e.pull)),e.span===0&&(t.display=`none`);let n=te(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=J(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},Y=({gutter:e,align:t,justify:i,wrap:a=!0,className:o,style:c,children:l,...u})=>{let d=V(e),f=u.ref,p=n(),m;`ref`in u&&delete u.ref,d&&(r(()=>{m=R(()=>{h()}),h()}),s(()=>{m&&m()}));let h=()=>{let n=p.current;if(!n)return;let[r,o]=K(e,I()),s=P(ne(r,o,i,t,a),c);s?n.setAttribute(`style`,s):n.removeAttribute(`style`)},g=e=>{p.current=e??void 0,e&&h(),F(f,e)};return x(`div`,{...u,ref:g,"data-rue-grid-row":!0,className:A(`rue-grid rue-grid-row`,o),children:l})},X=Object.assign(Y,{Row:Y,Col:({className:e,style:t,children:i,...a})=>{let o=H(a),c=a.ref,l=n(),u;`ref`in a&&delete a.ref,o&&(r(()=>{u=R(()=>{y()}),y()}),s(()=>{u&&u()}));let{xs:d,sm:f,md:p,lg:m,xl:h,xxl:g,gutter:_,...v}=a,y=()=>{let e=l.current;if(!e)return;let n=P(re(ee(a,I())),t);n?e.setAttribute(`style`,n):e.removeAttribute(`style`)},b=e=>{l.current=e??void 0,e&&y(),F(c,e)};return x(`div`,{...v,ref:b,"data-rue-grid-col":!0,className:A(`rue-grid-col`,e),children:i})}}),Z=n=>f(r=>{let s=l(`div`,r);e(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=l(`div`,s);t(s,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=l(`div`,u);t(u,d);let h=l(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,a(`# `));let _=o(`rue:slot:anchor`);t(h,_),i(()=>{let e=n.title;g(()=>p(e,h,_))});let v=o(`rue:slot:anchor`);t(d,v),i(()=>{let r=n.summary?f(()=>{let r=c(),a=l(`p`,r);t(r,a),e(a,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return t(a,s),i(()=>{let e=n.summary;g(()=>p(e,a,s))}),r}):``;g(()=>p(r,d,v))});let b=o(`rue:component:anchor`);t(s,b),i(()=>{let e=m(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,s,b))});let x=o(`rue:slot:anchor`);return t(s,x),i(()=>{let e=n.tab.value===`preview`?n.preview():f(()=>{let e=c(),r=o(`rue:component:anchor`);return t(e,r),i(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:n.code});g(()=>p(t,e,r))}),e});g(()=>p(e,s,x))}),s}),Q=n=>f(r=>{let s=l(`div`,r);e(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=l(`table`,s);t(s,d),e(d,`table table-zebra`);let m=l(`thead`,d);t(d,m);let h=l(`tr`,m);t(m,h);let _=l(`th`,h);t(h,_),t(_,a(`属性`));let y=l(`th`,h);t(h,y),t(y,a(`说明`));let b=l(`th`,h);t(h,b),t(b,a(`类型`));let x=l(`th`,h);t(h,x),t(x,a(`默认值`));let S=l(`tbody`,d);t(d,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return i(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,a,s)=>{p(f(()=>{let n=c(),r=l(`tr`,n);t(n,r),i(()=>{u(r,`key`,String(e.prop))});let a=l(`td`,r);t(r,a);let s=l(`code`,a);t(a,s);let d=o(`rue:slot:anchor`);t(s,d),i(()=>{let t=e.prop;g(()=>p(t,s,d))});let f=l(`td`,r);t(r,f);let m=o(`rue:slot:anchor`);t(f,m),i(()=>{let t=e.description;g(()=>p(t,f,m))});let h=l(`td`,r);t(r,h);let _=l(`code`,h);t(h,_);let v=o(`rue:slot:anchor`);t(_,v),i(()=>{let t=e.type;g(()=>p(t,_,v))});let y=l(`td`,r);t(r,y);let b=l(`code`,y);t(y,b);let x=o(`rue:slot:anchor`);return t(b,x),i(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),n}),n,r)}})}),s}),$=n=>f(r=>{let a=l(`div`,r);i(()=>{e(a,String(`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${n.className??``}`.trim()))});let s=l(`div`,a);t(a,s),e(s,`flex items-start justify-between gap-3`);let u=l(`div`,s);t(s,u);let d=l(`div`,u);t(u,d),e(d,`text-sm font-semibold leading-6`);let h=o(`rue:slot:anchor`);t(d,h),i(()=>{let e=n.title;g(()=>p(e,d,h))});let _=o(`rue:slot:anchor`);t(u,_),i(()=>{let r=n.detail?f(()=>{let r=c(),a=l(`div`,r);t(r,a),e(a,`mt-1 text-xs leading-5 opacity-70`);let s=o(`rue:slot:anchor`);return t(a,s),i(()=>{let e=n.detail;g(()=>p(e,a,s))}),r}):``;g(()=>p(r,u,_))});let v=o(`rue:slot:anchor`);return t(s,v),i(()=>{let e=n.tag?f(()=>{let e=c(),r=o(`rue:component:anchor`);return t(e,r),i(()=>{let t=m(E,{outline:!0,children:n.tag});g(()=>p(t,e,r))}),e}):``;g(()=>p(e,s,v))}),a}),ie=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，保留 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ae=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],oe=`import { Grid } from '@rue-js/design'

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
</Grid>`,de=()=>{let{tabBasic:n,tabResponsive:r,tabAlignment:s,tabFlex:u,tabDashboard:v}=_(`useSetup:0:0`,()=>h(()=>({tabBasic:_(`ref:1:0`,()=>d(`preview`)),tabResponsive:_(`ref:1:1`,()=>d(`preview`)),tabAlignment:_(`ref:1:2`,()=>d(`preview`)),tabFlex:_(`ref:1:3`,()=>d(`preview`)),tabDashboard:_(`ref:1:4`,()=>d(`preview`))})));return f(d=>{let h=c(),_=o(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=c(),f=l(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=l(`h1`,f);t(f,h),t(h,a(`Grid 栅格`));let _=l(`p`,f);t(f,_),e(_,`mt-3 mb-3 text-sm`),t(_,a(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let y=l(`p`,f);t(f,y),e(y,`my-3 text-sm opacity-75`),t(y,a(`这一版不照搬其他设计体系的视觉，而是把核心布局能力迁到 Rue 当前的轻量表面体系里：支持 Row / Col、响应式断点、gutter、偏移、顺序和 flex 混排。`));let S=l(`div`,f);t(f,S),e(S,`not-prose mt-4 flex flex-wrap gap-2`);let T=o(`rue:component:anchor`);t(S,T),i(()=>{let e=m(E,{outline:!0,children:`24 Columns`});g(()=>p(e,S,T))});let D=o(`rue:component:anchor`);t(S,D),i(()=>{let e=m(E,{outline:!0,children:`Responsive`});g(()=>p(e,S,D))});let O=o(`rue:component:anchor`);t(S,O),i(()=>{let e=m(E,{outline:!0,children:`Offset & Order`});g(()=>p(e,S,O))});let k=o(`rue:component:anchor`);t(S,k),i(()=>{let e=m(E,{outline:!0,children:`Flex Mix`});g(()=>p(e,S,k))});let A=o(`rue:component:anchor`);t(f,A),i(()=>{let e=m(Z,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:n,code:oe,preview:()=>b(`div`,{className:`space-y-5`,children:[x(w,{className:`overflow-hidden bg-base-100 shadow-sm`,children:x(w.Body,{className:`gap-4`,children:b(X,{gutter:[16,16],children:[x(X.Col,{span:6,children:x($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),x(X.Col,{span:6,children:x($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),x(X.Col,{span:6,children:x($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),x(X.Col,{span:6,children:x($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),b(X,{gutter:[16,16],children:[x(X.Col,{span:8,children:x($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),x(X.Col,{span:8,children:x($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),x(X.Col,{span:8,children:x($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});g(()=>p(e,f,A))});let j=o(`rue:component:anchor`);t(f,j),i(()=>{let e=m(Z,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:r,code:se,preview:()=>b(`div`,{className:`space-y-4`,children:[x(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),b(X,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[x(X.Col,{xs:24,sm:12,lg:8,children:x($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),x(X.Col,{xs:24,sm:12,lg:8,children:x($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),x(X.Col,{xs:24,lg:8,children:x($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});g(()=>p(e,f,j))});let M=o(`rue:component:anchor`);t(f,M),i(()=>{let e=m(Z,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:s,code:ce,preview:()=>b(`div`,{className:`space-y-6`,children:[x(w,{className:`bg-base-100 shadow-sm`,children:x(w.Body,{className:`gap-4`,children:b(X,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[x(X.Col,{span:5,children:x($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),x(X.Col,{span:5,children:x($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),x(X.Col,{span:5,children:x($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),b(X,{gutter:[16,16],children:[x(X.Col,{span:6,offset:6,children:x($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),x(X.Col,{span:6,order:3,children:x($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),x(X.Col,{span:6,order:2,children:x($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});g(()=>p(e,f,M))});let N=o(`rue:component:anchor`);t(f,N),i(()=>{let e=m(Z,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:u,code:le,preview:()=>b(`div`,{className:`space-y-6`,children:[b(X,{gutter:16,align:`stretch`,children:[x(X.Col,{flex:`280px`,children:x($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),x(X.Col,{flex:`auto`,children:x($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),x(X.Col,{flex:`120px`,children:x($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),b(X,{gutter:12,wrap:!1,children:[x(X.Col,{flex:`180px`,children:x($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),x(X.Col,{flex:`180px`,children:x($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),x(X.Col,{flex:`180px`,children:x($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});g(()=>p(e,f,N))});let P=o(`rue:component:anchor`);t(f,P),i(()=>{let e=m(Z,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:v,code:ue,preview:()=>b(X,{gutter:[20,20],children:[x(X.Col,{xs:24,xl:16,children:x(w,{className:`overflow-hidden bg-base-100 shadow-sm`,children:b(w.Body,{className:`gap-5`,children:[b(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),x(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),b(`div`,{className:`flex flex-wrap gap-2`,children:[x(E,{outline:!0,children:`Live`}),x(E,{outline:!0,children:`Q2`})]})]}),b(X,{gutter:[16,16],children:[x(X.Col,{xs:24,md:12,children:x($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),x(X.Col,{xs:24,md:12,children:x($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),x(X.Col,{xs:24,children:b(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[b(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),x(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),x(C,{color:`primary`,size:`sm`,children:`查看明细`})]}),b(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[x(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),x(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),x(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),x(X.Col,{xs:24,xl:8,children:x(w,{className:`bg-base-100 shadow-sm`,children:b(w.Body,{className:`gap-4`,children:[b(`div`,{className:`flex items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),x(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),x(E,{outline:!0,children:`7 items`})]}),b(`div`,{className:`space-y-3`,children:[x($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),x($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),x($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});g(()=>p(e,f,P))});let F=l(`div`,f);t(f,F),e(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=l(`h2`,F);t(F,I),e(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(I,a(`# API`));let L=l(`p`,F);t(F,L),e(L,`m-0 text-sm opacity-70`),t(L,a(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=l(`div`,f);t(f,R),e(R,`not-prose space-y-8`);let z=l(`div`,R);t(R,z);let B=l(`h3`,z);t(z,B),e(B,`mb-3 text-base font-semibold`),t(B,a(`Grid / Grid.Row`));let V=o(`rue:component:anchor`);t(z,V),i(()=>{let e=m(Q,{rows:ie});g(()=>p(e,z,V))});let H=l(`div`,R);t(R,H);let U=l(`h3`,H);t(H,U),e(U,`mb-3 text-base font-semibold`),t(U,a(`Grid.Col`));let W=o(`rue:component:anchor`);return t(H,W),i(()=>{let e=m(Q,{rows:ae});g(()=>p(e,H,W))}),d})}),h,_),h})};export{de as default};
import{$ as e,Gt as t,Kt as n,Lt as r,O as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,j as f,l as p,ot as m,s as h,t as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{a as y,i as b}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as x}from"./Code-Ds9lKLk6.js";import{t as S}from"./button-Cy4xZBmC.js";import{t as C}from"./card-BqlEmwPT.js";import{t as w}from"./tabs-DSy0eY-V.js";import{t as T}from"./badge-D84isAR2.js";import{n as E}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var D=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],O={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},k=new Set,A=(e,t)=>e?t?`${e} ${t}`:e:t??``,j=e=>typeof e==`number`?`${e}px`:e,M=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:M(e)}:${String(t)}`).join(`; `):``,P=(...e)=>e.map(e=>N(e)).filter(Boolean).join(`; `),F=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},I=()=>typeof window>`u`?O.xl:window.innerWidth||document.documentElement?.clientWidth||O.xl,L=()=>{k.forEach(e=>e())},R=e=>typeof window>`u`?()=>{}:(k.size===0&&window.addEventListener(`resize`,L),k.add(e),()=>{k.delete(e),k.size===0&&window.removeEventListener(`resize`,L)}),z=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>D.includes(e)),B=(e,t)=>{if(!z(e))return e;let n;for(let r of D)t>=O[r]&&e[r]!==void 0&&(n=e[r]);return n},V=e=>e?Array.isArray(e)?e.some(e=>z(e)):z(e):!1,H=e=>D.some(t=>e[t]!==void 0),U=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},W=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},G=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},K=(e,t)=>e?Array.isArray(e)?[B(e[0],t),B(e[1],t)]:[B(e,t),void 0]:[void 0,void 0],q=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ee=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of D){if(t<O[r])continue;let i=q(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},J=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},te=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},ne=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:W(n),alignItems:G(r),"--rue-grid-gutter-x":j(e)??`0px`,"--rue-grid-gutter-y":j(t)??`0px`},o=U(e,!0),s=U(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},re=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=J(e.offset)),e.push&&(t.position=`relative`,t.left=J(e.push)),e.pull&&(t.position=`relative`,t.right=J(e.pull)),e.span===0&&(t.display=`none`);let n=te(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=J(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},Y=({gutter:e,align:n,justify:r,wrap:a=!0,className:o,style:s,children:c,...l})=>{let u=V(e),d=l.ref,p=t(),m;`ref`in l&&delete l.ref,u&&(i(()=>{m=R(()=>{h()}),h()}),f(()=>{m&&m()}));let h=()=>{let t=p.current;if(!t)return;let[i,o]=K(e,I()),c=P(ne(i,o,r,n,a),s);c?t.setAttribute(`style`,c):t.removeAttribute(`style`)},g=e=>{p.current=e??void 0,e&&h(),F(d,e)};return b(`div`,{...l,ref:g,"data-rue-grid-row":!0,className:A(`rue-grid rue-grid-row`,o),children:c})},X=Object.assign(Y,{Row:Y,Col:({className:e,style:n,children:r,...a})=>{let o=H(a),s=a.ref,c=t(),l;`ref`in a&&delete a.ref,o&&(i(()=>{l=R(()=>{y()}),y()}),f(()=>{l&&l()}));let{xs:u,sm:d,md:p,lg:m,xl:h,xxl:g,gutter:_,...v}=a,y=()=>{let e=c.current;if(!e)return;let t=P(re(ee(a,I())),n);t?e.setAttribute(`style`,t):e.removeAttribute(`style`)},x=e=>{c.current=e??void 0,e&&y(),F(s,e)};return b(`div`,{...v,ref:x,"data-rue-grid-col":!0,className:A(`rue-grid-col`,e),children:r})}}),Z=t=>p(n=>{let r=e(`div`,n);u(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let i=e(`div`,r);s(r,i),u(i,`flex flex-wrap items-start justify-between gap-3`);let f=e(`div`,i);s(i,f);let m=e(`h2`,f);s(f,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),s(m,d(`# `));let _=l(`rue:slot:anchor`);s(m,_),c(()=>{let e=t.title;o(()=>h(e,m,_))});let v=l(`rue:slot:anchor`);s(f,v),c(()=>{let n=t.summary?p(()=>{let n=a(),r=e(`p`,n);s(n,r),u(r,`m-0 text-sm opacity-70`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=t.summary;o(()=>h(e,r,i))}),n}):``;o(()=>h(n,f,v))});let y=l(`rue:component:anchor`);s(r,y),c(()=>{let e=g(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});o(()=>h(e,r,y))});let b=l(`rue:slot:anchor`);return s(r,b),c(()=>{let e=t.tab.value===`preview`?t.preview():p(()=>{let e=a(),n=l(`rue:component:anchor`);return s(e,n),c(()=>{let r=g(x,{className:`mt-2`,lang:`tsx`,code:t.code});o(()=>h(r,e,n))}),e});o(()=>h(e,r,b))}),r}),Q=t=>p(n=>{let r=e(`div`,n);u(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);s(r,i),u(i,`table table-zebra`);let f=e(`thead`,i);s(i,f);let g=e(`tr`,f);s(f,g);let _=e(`th`,g);s(g,_),s(_,d(`属性`));let y=e(`th`,g);s(g,y),s(y,d(`说明`));let b=e(`th`,g);s(g,b),s(b,d(`类型`));let x=e(`th`,g);s(g,x),s(x,d(`默认值`));let S=e(`tbody`,i);s(i,S);let C=l(`rue:list:start`),w=l(`rue:list:end`);s(S,C),s(S,w);let T=new Map;return c(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,u)=>{h(p(()=>{let n=a(),r=e(`tr`,n);s(n,r),c(()=>{m(r,`key`,String(t.prop))});let i=e(`td`,r);s(r,i);let u=e(`code`,i);s(i,u);let d=l(`rue:slot:anchor`);s(u,d),c(()=>{let e=t.prop;o(()=>h(e,u,d))});let f=e(`td`,r);s(r,f);let p=l(`rue:slot:anchor`);s(f,p),c(()=>{let e=t.description;o(()=>h(e,f,p))});let g=e(`td`,r);s(r,g);let _=e(`code`,g);s(g,_);let v=l(`rue:slot:anchor`);s(_,v),c(()=>{let e=t.type;o(()=>h(e,_,v))});let y=e(`td`,r);s(r,y);let b=e(`code`,y);s(y,b);let x=l(`rue:slot:anchor`);return s(b,x),c(()=>{let e=t.defaultValue;o(()=>h(e,b,x))}),n}),n,r)}})}),r}),$=t=>p(n=>{let r=e(`div`,n);c(()=>{u(r,String(`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${t.className??``}`.trim()))});let i=e(`div`,r);s(r,i),u(i,`flex items-start justify-between gap-3`);let d=e(`div`,i);s(i,d);let f=e(`div`,d);s(d,f),u(f,`text-sm font-semibold leading-6`);let m=l(`rue:slot:anchor`);s(f,m),c(()=>{let e=t.title;o(()=>h(e,f,m))});let _=l(`rue:slot:anchor`);s(d,_),c(()=>{let n=t.detail?p(()=>{let n=a(),r=e(`div`,n);s(n,r),u(r,`mt-1 text-xs leading-5 opacity-70`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=t.detail;o(()=>h(e,r,i))}),n}):``;o(()=>h(n,d,_))});let v=l(`rue:slot:anchor`);return s(i,v),c(()=>{let e=t.tag?p(()=>{let e=a(),n=l(`rue:component:anchor`);return s(e,n),c(()=>{let r=g(T,{outline:!0,children:t.tag});o(()=>h(r,e,n))}),e}):``;o(()=>h(e,i,v))}),r}),ie=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，保留 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ae=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],oe=`import { Grid } from '@rue-js/design'

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
</Grid>`,de=()=>{let{tabBasic:t,tabResponsive:i,tabAlignment:f,tabFlex:m,tabDashboard:v}=_(`useSetup:0:0`,()=>n(()=>({tabBasic:_(`ref:1:0`,()=>r(`preview`)),tabResponsive:_(`ref:1:1`,()=>r(`preview`)),tabAlignment:_(`ref:1:2`,()=>r(`preview`)),tabFlex:_(`ref:1:3`,()=>r(`preview`)),tabDashboard:_(`ref:1:4`,()=>r(`preview`))})));return p(n=>{let r=a(),_=l(`rue:component:anchor`);return s(r,_),h(g(E,{children:p(()=>{let n=a(),r=e(`div`,n);s(n,r),u(r,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,r);s(r,p),s(p,d(`Grid 栅格`));let _=e(`p`,r);s(r,_),u(_,`mt-3 mb-3 text-sm`),s(_,d(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let x=e(`p`,r);s(r,x),u(x,`my-3 text-sm opacity-75`),s(x,d(`这一版不照搬其他设计体系的视觉，而是把核心布局能力迁到 Rue 当前的轻量表面体系里：支持 Row / Col、响应式断点、gutter、偏移、顺序和 flex 混排。`));let w=e(`div`,r);s(r,w),u(w,`not-prose mt-4 flex flex-wrap gap-2`);let E=l(`rue:component:anchor`);s(w,E),c(()=>{let e=g(T,{outline:!0,children:`24 Columns`});o(()=>h(e,w,E))});let D=l(`rue:component:anchor`);s(w,D),c(()=>{let e=g(T,{outline:!0,children:`Responsive`});o(()=>h(e,w,D))});let O=l(`rue:component:anchor`);s(w,O),c(()=>{let e=g(T,{outline:!0,children:`Offset & Order`});o(()=>h(e,w,O))});let k=l(`rue:component:anchor`);s(w,k),c(()=>{let e=g(T,{outline:!0,children:`Flex Mix`});o(()=>h(e,w,k))});let A=l(`rue:component:anchor`);s(r,A),c(()=>{let e=g(Z,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:t,code:oe,preview:()=>y(`div`,{className:`space-y-5`,children:[b(C,{className:`overflow-hidden bg-base-100 shadow-sm`,children:b(C.Body,{className:`gap-4`,children:y(X,{gutter:[16,16],children:[b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),b(X.Col,{span:6,children:b($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),y(X,{gutter:[16,16],children:[b(X.Col,{span:8,children:b($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),b(X.Col,{span:8,children:b($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),b(X.Col,{span:8,children:b($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});o(()=>h(e,r,A))});let j=l(`rue:component:anchor`);s(r,j),c(()=>{let e=g(Z,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:i,code:se,preview:()=>y(`div`,{className:`space-y-4`,children:[b(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),y(X,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[b(X.Col,{xs:24,sm:12,lg:8,children:b($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),b(X.Col,{xs:24,sm:12,lg:8,children:b($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),b(X.Col,{xs:24,lg:8,children:b($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});o(()=>h(e,r,j))});let M=l(`rue:component:anchor`);s(r,M),c(()=>{let e=g(Z,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:f,code:ce,preview:()=>y(`div`,{className:`space-y-6`,children:[b(C,{className:`bg-base-100 shadow-sm`,children:b(C.Body,{className:`gap-4`,children:y(X,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[b(X.Col,{span:5,children:b($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),b(X.Col,{span:5,children:b($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),b(X.Col,{span:5,children:b($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),y(X,{gutter:[16,16],children:[b(X.Col,{span:6,offset:6,children:b($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),b(X.Col,{span:6,order:3,children:b($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),b(X.Col,{span:6,order:2,children:b($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});o(()=>h(e,r,M))});let N=l(`rue:component:anchor`);s(r,N),c(()=>{let e=g(Z,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:m,code:le,preview:()=>y(`div`,{className:`space-y-6`,children:[y(X,{gutter:16,align:`stretch`,children:[b(X.Col,{flex:`280px`,children:b($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),b(X.Col,{flex:`auto`,children:b($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),b(X.Col,{flex:`120px`,children:b($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),y(X,{gutter:12,wrap:!1,children:[b(X.Col,{flex:`180px`,children:b($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),b(X.Col,{flex:`180px`,children:b($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),b(X.Col,{flex:`180px`,children:b($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});o(()=>h(e,r,N))});let P=l(`rue:component:anchor`);s(r,P),c(()=>{let e=g(Z,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:v,code:ue,preview:()=>y(X,{gutter:[20,20],children:[b(X.Col,{xs:24,xl:16,children:b(C,{className:`overflow-hidden bg-base-100 shadow-sm`,children:y(C.Body,{className:`gap-5`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),b(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(T,{outline:!0,children:`Live`}),b(T,{outline:!0,children:`Q2`})]})]}),y(X,{gutter:[16,16],children:[b(X.Col,{xs:24,md:12,children:b($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),b(X.Col,{xs:24,md:12,children:b($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),b(X.Col,{xs:24,children:y(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),b(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),b(S,{color:`primary`,size:`sm`,children:`查看明细`})]}),y(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[b(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),b(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),b(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),b(X.Col,{xs:24,xl:8,children:b(C,{className:`bg-base-100 shadow-sm`,children:y(C.Body,{className:`gap-4`,children:[y(`div`,{className:`flex items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),b(T,{outline:!0,children:`7 items`})]}),y(`div`,{className:`space-y-3`,children:[b($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),b($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),b($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});o(()=>h(e,r,P))});let F=e(`div`,r);s(r,F),u(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=e(`h2`,F);s(F,I),u(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),s(I,d(`# API`));let L=e(`p`,F);s(F,L),u(L,`m-0 text-sm opacity-70`),s(L,d(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=e(`div`,r);s(r,R),u(R,`not-prose space-y-8`);let z=e(`div`,R);s(R,z);let B=e(`h3`,z);s(z,B),u(B,`mb-3 text-base font-semibold`),s(B,d(`Grid / Grid.Row`));let V=l(`rue:component:anchor`);s(z,V),c(()=>{let e=g(Q,{rows:ie});o(()=>h(e,z,V))});let H=e(`div`,R);s(R,H);let U=e(`h3`,H);s(H,U),u(U,`mb-3 text-base font-semibold`),s(U,d(`Grid.Col`));let W=l(`rue:component:anchor`);return s(H,W),c(()=>{let e=g(Q,{rows:ae});o(()=>h(e,H,W))}),n})}),r,_),r})};export{de as default};
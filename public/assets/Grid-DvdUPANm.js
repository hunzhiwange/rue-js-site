import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,a as c,at as l,dt as u,gt as d,i as f,l as p,mt as m,qt as h,r as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b,n as x,t as S}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as C,i as w}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as T}from"./Code-CZqShVUj.js";import{t as E}from"./button-CyhsFe_V.js";import{t as D}from"./card-ChtpCSVB.js";import{t as O}from"./tabs-BBuGEPV7.js";import{t as k}from"./badge-BBo7V0Er.js";import{r as A}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var j=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],M={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},N=new Set,P=(e,t)=>e?t?`${e} ${t}`:e:t??``,F=e=>typeof e==`number`?`${e}px`:e,I=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),L=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:I(e)}:${String(t)}`).join(`; `):``,R=(...e)=>e.map(e=>L(e)).filter(Boolean).join(`; `),z=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},B=()=>typeof window>`u`?M.xl:window.innerWidth||document.documentElement?.clientWidth||M.xl,V=b(`ref:1:0`,()=>r(B())),H=()=>{N.forEach(e=>e())},U=e=>typeof window>`u`?()=>{}:(N.size===0&&window.addEventListener(`resize`,H),N.add(e),()=>{N.delete(e),N.size===0&&window.removeEventListener(`resize`,H)}),W=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>j.includes(e)),G=(e,t)=>{if(!W(e))return e;let n;for(let r of j)t>=M[r]&&e[r]!==void 0&&(n=e[r]);return n},K=e=>e?Array.isArray(e)?e.some(e=>W(e)):W(e):!1,ee=e=>j.some(t=>e[t]!==void 0),q=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},J=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},te=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},ne=(e,t)=>e?Array.isArray(e)?[G(e[0],t),G(e[1],t)]:[G(e,t),void 0]:[void 0,void 0],re=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ie=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of j){if(t<M[r])continue;let i=re(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},Y=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},ae=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},oe=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:J(n),alignItems:te(r),"--rue-grid-gutter-x":F(e)??`0px`,"--rue-grid-gutter-y":F(t)??`0px`},o=q(e,!0),s=q(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},se=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=Y(e.offset)),e.push&&(t.position=`relative`,t.left=Y(e.push)),e.pull&&(t.position=`relative`,t.right=Y(e.pull)),e.span===0&&(t.display=`none`);let n=ae(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=Y(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},X=e=>{let r=b(`useSetup:0:0`,()=>h(()=>{let{gutter:t,align:n,justify:r,wrap:i,className:a,style:o,children:s,ref:l,...u}=e,p=b(`computed:1:1`,()=>d(()=>K(e.gutter))),m=p,h;return m.get()&&(f(()=>{h=U(()=>{V.value=B()}),V.value=B()}),c(()=>{h&&h()})),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,rest:u,requiresViewport:p,applyRef:t=>{z(e.ref,t)},resolvedClassName:b(`computed:1:2`,()=>d(()=>P(`rue-grid rue-grid-row`,e.className))),resolvedStyle:b(`computed:1:3`,()=>d(()=>{let[t,n]=ne(e.gutter,m.get()?V.value:B());return R(oe(t,n,e.justify,e.align,e.wrap===void 0?!0:e.wrap),e.style)})),stopTracking:h}})),{__rue_rest_omit_0:s,__rue_rest_omit_1:y,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,rest:O,requiresViewport:k,applyRef:A,resolvedClassName:j,resolvedStyle:M}=r,{stopTracking:N}=r;return p(r=>{let s=i(`div`,r);o(()=>{m(s,O)});let c=S(s,()=>A);g(()=>{c()}),l(s,`data-rue-grid-row`,`true`),o(()=>{v(s,j.get())}),o(()=>{u(s,M.get())});let d=a(`rue:children:anchor`);return n(s,d),o(()=>{let n=e.children;t(()=>_(n,s,d))}),s})},Z=Object.assign(X,{Row:X,Col:e=>{let r=b(`useSetup:0:0:dup1`,()=>h(()=>{let{span:t,order:n,offset:r,push:i,pull:a,flex:o,xs:s,sm:l,md:u,lg:p,xl:m,xxl:h,className:g,style:_,children:v,gutter:y,ref:x,...S}=e,C=b(`computed:1:4`,()=>d(()=>({span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex,xs:e.xs,sm:e.sm,md:e.md,lg:e.lg,xl:e.xl,xxl:e.xxl}))),w=C,T=b(`computed:1:5`,()=>d(()=>ee(w.get()))),E=T,D;return E.get()&&(f(()=>{D=U(()=>{V.value=B()}),V.value=B()}),c(()=>{D&&D()})),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:p,__rue_rest_omit_10:m,__rue_rest_omit_11:h,__rue_rest_omit_12:g,__rue_rest_omit_13:_,__rue_rest_omit_14:v,__rue_rest_omit_15:y,__rue_rest_omit_16:x,domProps:S,gridProps:C,requiresViewport:T,applyRef:t=>{z(e.ref,t)},resolvedClassName:b(`computed:1:6`,()=>d(()=>P(`rue-grid-col`,e.className))),resolvedStyle:b(`computed:1:7`,()=>d(()=>R(se(ie(w.get(),E.get()?V.value:B())),e.style))),stopTracking:D}})),{__rue_rest_omit_0:s,__rue_rest_omit_1:y,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,__rue_rest_omit_14:F,__rue_rest_omit_15:I,__rue_rest_omit_16:L,domProps:H,gridProps:W,requiresViewport:G,applyRef:K,resolvedClassName:q,resolvedStyle:J}=r,{stopTracking:te}=r;return p(r=>{let s=i(`div`,r);o(()=>{m(s,H)});let c=S(s,()=>K);g(()=>{c()}),l(s,`data-rue-grid-col`,`true`),o(()=>{v(s,q.get())}),o(()=>{u(s,J.get())});let d=a(`rue:children:anchor`);return n(s,d),o(()=>{let n=e.children;t(()=>_(n,s,d))}),s})}}),Q=r=>p(c=>{let l=i(`div`,c);v(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),v(u,`flex flex-wrap items-start justify-between gap-3`);let d=i(`div`,u);n(u,d);let f=i(`h2`,d);n(d,f),v(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(f,e(`# `));let m=a(`rue:slot:anchor`);n(f,m),o(()=>{let e=r.title;t(()=>_(e,f,m))});let h=a(`rue:slot:anchor`);n(d,h),o(()=>{let e=r.summary?p(()=>{let e=s(),c=i(`p`,e);n(e,c),v(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>_(e,c,l))}),e}):``;t(()=>_(e,d,h))});let g=a(`rue:component:anchor`);n(l,g),o(()=>{let e=y(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>_(e,l,g))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?r.preview():p(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=y(T,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>_(n,e,i))}),e});t(()=>_(e,l,b))}),l}),ce=r=>p(c=>{let u=i(`div`,c);v(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=i(`table`,u);n(u,d),v(d,`table table-zebra`);let f=i(`thead`,d);n(d,f);let m=i(`tr`,f);n(f,m);let h=i(`th`,m);n(m,h),n(h,e(`属性`));let g=i(`th`,m);n(m,g),n(g,e(`说明`));let y=i(`th`,m);n(m,y),n(y,e(`类型`));let b=i(`th`,m);n(m,b),n(b,e(`默认值`));let S=i(`tbody`,d);n(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=x({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,u,d)=>{_(p(()=>{let r=s(),c=i(`tr`,r);n(r,c),o(()=>{l(c,`key`,String(e.prop))});let u=i(`td`,c);n(c,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>_(n,d,f))});let p=i(`td`,c);n(c,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>_(n,p,m))});let h=i(`td`,c);n(c,h);let g=i(`code`,h);n(h,g);let v=a(`rue:slot:anchor`);n(g,v),o(()=>{let n=e.type;t(()=>_(n,g,v))});let y=i(`td`,c);n(c,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>_(n,b,x))}),r}),r,c)}})}),u}),$=e=>p(r=>{let c=i(`div`,r);o(()=>{v(c,`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${e.className??``}`.trim())});let l=i(`div`,c);n(c,l),v(l,`flex items-start justify-between gap-3`);let u=i(`div`,l);n(l,u);let d=i(`div`,u);n(u,d),v(d,`text-sm font-semibold leading-6`);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.title;t(()=>_(n,d,f))});let m=a(`rue:slot:anchor`);n(u,m),o(()=>{let r=e.detail?p(()=>{let r=s(),c=i(`div`,r);n(r,c),v(c,`mt-1 text-xs leading-5 opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.detail;t(()=>_(n,c,l))}),r}):``;t(()=>_(r,u,m))});let h=a(`rue:slot:anchor`);return n(l,h),o(()=>{let r=e.tag?p(()=>{let r=s(),i=a(`rue:component:anchor`);return n(r,i),o(()=>{let n=y(k,{outline:!0,children:e.tag});t(()=>_(n,r,i))}),r}):``;t(()=>_(r,l,h))}),c}),le=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，保留 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ue=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],de=`import { Grid } from '@rue-js/design'

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
</Grid>`,fe=`import { Grid } from '@rue-js/design'

<Grid gutter={[{ xs: 8, md: 24 }, { xs: 8, md: 24 }]}>
  <Grid.Col xs={24} sm={12} lg={8}>A</Grid.Col>
  <Grid.Col xs={24} sm={12} lg={8}>B</Grid.Col>
  <Grid.Col xs={24} lg={8}>C</Grid.Col>
</Grid>`,pe=`import { Grid } from '@rue-js/design'

<Grid gutter={[16, 16]} justify="space-between" align="bottom">
  <Grid.Col span={5}>A</Grid.Col>
  <Grid.Col span={5}>B</Grid.Col>
  <Grid.Col span={5}>C</Grid.Col>
</Grid>

<Grid gutter={[16, 16]}>
  <Grid.Col span={6} offset={6}>offset=6</Grid.Col>
  <Grid.Col span={6} order={3}>order=3</Grid.Col>
  <Grid.Col span={6} order={2}>order=2</Grid.Col>
</Grid>`,me=`import { Grid } from '@rue-js/design'

<Grid gutter={16} align="stretch">
  <Grid.Col flex="280px">Fixed rail</Grid.Col>
  <Grid.Col flex="auto">Fluid content</Grid.Col>
  <Grid.Col flex="120px">Ops</Grid.Col>
</Grid>

<Grid gutter={12} wrap={false}>
  <Grid.Col flex="180px">No wrap</Grid.Col>
  <Grid.Col flex="180px">For horizontal rails</Grid.Col>
  <Grid.Col flex="180px">And sticky toolbars</Grid.Col>
</Grid>`,he=`import { Badge, Button, Card, Grid } from '@rue-js/design'

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
</Grid>`,ge=()=>{let{tabBasic:c,tabResponsive:l,tabAlignment:u,tabFlex:d,tabDashboard:f}=b(`useSetup:0:0`,()=>h(()=>({tabBasic:b(`ref:1:0`,()=>r(`preview`)),tabResponsive:b(`ref:1:1`,()=>r(`preview`)),tabAlignment:b(`ref:1:2`,()=>r(`preview`)),tabFlex:b(`ref:1:3`,()=>r(`preview`)),tabDashboard:b(`ref:1:4`,()=>r(`preview`))})));return p(r=>{let m=s(),h=a(`rue:component:anchor`);return n(m,h),_(y(A,{children:p(()=>{let r=s(),p=i(`div`,r);n(r,p),v(p,`max-w-none prose prose-sm md:prose-base`);let m=i(`h1`,p);n(p,m),n(m,e(`Grid 栅格`));let h=i(`p`,p);n(p,h),v(h,`mt-3 mb-3 text-sm`),n(h,e(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let g=i(`p`,p);n(p,g),v(g,`my-3 text-sm opacity-75`),n(g,e(`这一版不照搬其他设计体系的视觉，而是把核心布局能力迁到 Rue 当前的轻量表面体系里：支持 Row / Col、响应式断点、gutter、偏移、顺序和 flex 混排。`));let b=i(`div`,p);n(p,b),v(b,`not-prose mt-4 flex flex-wrap gap-2`);let x=a(`rue:component:anchor`);n(b,x),o(()=>{let e=y(k,{outline:!0,children:`24 Columns`});t(()=>_(e,b,x))});let S=a(`rue:component:anchor`);n(b,S),o(()=>{let e=y(k,{outline:!0,children:`Responsive`});t(()=>_(e,b,S))});let T=a(`rue:component:anchor`);n(b,T),o(()=>{let e=y(k,{outline:!0,children:`Offset & Order`});t(()=>_(e,b,T))});let O=a(`rue:component:anchor`);n(b,O),o(()=>{let e=y(k,{outline:!0,children:`Flex Mix`});t(()=>_(e,b,O))});let A=a(`rue:component:anchor`);n(p,A),o(()=>{let e=y(Q,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:c,code:de,preview:()=>C(`div`,{className:`space-y-5`,children:[w(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:C(Z,{gutter:[16,16],children:[w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),C(Z,{gutter:[16,16],children:[w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});t(()=>_(e,p,A))});let j=a(`rue:component:anchor`);n(p,j),o(()=>{let e=y(Q,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:l,code:fe,preview:()=>C(`div`,{className:`space-y-4`,children:[w(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),C(Z,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[w(Z.Col,{xs:24,sm:12,lg:8,children:w($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),w(Z.Col,{xs:24,sm:12,lg:8,children:w($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),w(Z.Col,{xs:24,lg:8,children:w($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});t(()=>_(e,p,j))});let M=a(`rue:component:anchor`);n(p,M),o(()=>{let e=y(Q,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:u,code:pe,preview:()=>C(`div`,{className:`space-y-6`,children:[w(D,{className:`bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:C(Z,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[w(Z.Col,{span:5,children:w($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),w(Z.Col,{span:5,children:w($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),w(Z.Col,{span:5,children:w($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),C(Z,{gutter:[16,16],children:[w(Z.Col,{span:6,offset:6,children:w($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),w(Z.Col,{span:6,order:3,children:w($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),w(Z.Col,{span:6,order:2,children:w($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});t(()=>_(e,p,M))});let N=a(`rue:component:anchor`);n(p,N),o(()=>{let e=y(Q,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:d,code:me,preview:()=>C(`div`,{className:`space-y-6`,children:[C(Z,{gutter:16,align:`stretch`,children:[w(Z.Col,{flex:`280px`,children:w($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),w(Z.Col,{flex:`auto`,children:w($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),w(Z.Col,{flex:`120px`,children:w($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),C(Z,{gutter:12,wrap:!1,children:[w(Z.Col,{flex:`180px`,children:w($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),w(Z.Col,{flex:`180px`,children:w($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),w(Z.Col,{flex:`180px`,children:w($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});t(()=>_(e,p,N))});let P=a(`rue:component:anchor`);n(p,P),o(()=>{let e=y(Q,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:f,code:he,preview:()=>C(Z,{gutter:[20,20],children:[w(Z.Col,{xs:24,xl:16,children:w(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-5`,children:[C(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),w(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),C(`div`,{className:`flex flex-wrap gap-2`,children:[w(k,{outline:!0,children:`Live`}),w(k,{outline:!0,children:`Q2`})]})]}),C(Z,{gutter:[16,16],children:[w(Z.Col,{xs:24,md:12,children:w($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),w(Z.Col,{xs:24,md:12,children:w($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),w(Z.Col,{xs:24,children:C(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[C(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),w(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),w(E,{color:`primary`,size:`sm`,children:`查看明细`})]}),C(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),w(Z.Col,{xs:24,xl:8,children:w(D,{className:`bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-4`,children:[C(`div`,{className:`flex items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),w(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),w(k,{outline:!0,children:`7 items`})]}),C(`div`,{className:`space-y-3`,children:[w($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),w($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),w($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});t(()=>_(e,p,P))});let F=i(`div`,p);n(p,F),v(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=i(`h2`,F);n(F,I),v(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(I,e(`# API`));let L=i(`p`,F);n(F,L),v(L,`m-0 text-sm opacity-70`),n(L,e(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=i(`div`,p);n(p,R),v(R,`not-prose space-y-8`);let z=i(`div`,R);n(R,z);let B=i(`h3`,z);n(z,B),v(B,`mb-3 text-base font-semibold`),n(B,e(`Grid / Grid.Row`));let V=a(`rue:component:anchor`);n(z,V),o(()=>{let e=y(ce,{rows:le});t(()=>_(e,z,V))});let H=i(`div`,R);n(R,H);let U=i(`h3`,H);n(H,U),v(U,`mb-3 text-base font-semibold`),n(U,e(`Grid.Col`));let W=a(`rue:component:anchor`);return n(H,W),o(()=>{let e=y(ce,{rows:ue});t(()=>_(e,H,W))}),r})}),m,h),m})};export{ge as default};
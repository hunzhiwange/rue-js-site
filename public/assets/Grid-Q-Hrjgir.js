import{Q as e,Vt as t,Xt as n,dt as r,i,it as a,l as o,n as s,nt as c,o as l,on as u,pt as d,r as f,rt as p,t as m,tn as h,tt as g,vt as _,wt as v,xt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as x,t as S}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as C,o as w}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as T}from"./Code-C5NjdoiC.js";import{t as E}from"./button-CgV0EoO3.js";import{t as D}from"./card-s-6XH47O.js";import{t as O}from"./tabs-C4UF43sZ.js";import{t as k}from"./badge-DmAwNfkt.js";import{r as A}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var j=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],M={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},N=new Set,P=(e,t)=>e?t?`${e} ${t}`:e:t??``,F=e=>typeof e==`number`?`${e}px`:e,I=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),L=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:I(e)}:${String(t)}`).join(`; `):``,R=(...e)=>e.map(e=>L(e)).filter(Boolean).join(`; `),z=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},B=()=>typeof window>`u`?M.xl:window.innerWidth||document.documentElement?.clientWidth||M.xl,V=b(`ref:1:0`,()=>n(B())),H=()=>{N.forEach(e=>e())},U=e=>typeof window>`u`?()=>{}:(N.size===0&&window.addEventListener(`resize`,H),N.add(e),()=>{N.delete(e),N.size===0&&window.removeEventListener(`resize`,H)}),W=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>j.includes(e)),G=(e,t)=>{if(!W(e))return e;let n;for(let r of j)t>=M[r]&&e[r]!==void 0&&(n=e[r]);return n},K=e=>e?Array.isArray(e)?e.some(e=>W(e)):W(e):!1,ee=e=>j.some(t=>e[t]!==void 0),q=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},J=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},te=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},ne=(e,t)=>e?Array.isArray(e)?[G(e[0],t),G(e[1],t)]:[G(e,t),void 0]:[void 0,void 0],re=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ie=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of j){if(t<M[r])continue;let i=re(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},Y=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},ae=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},oe=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:J(n),alignItems:te(r),"--rue-grid-gutter-x":F(e)??`0px`,"--rue-grid-gutter-y":F(t)??`0px`},o=q(e,!0),s=q(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},se=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=Y(e.offset)),e.push&&(t.position=`relative`,t.left=Y(e.push)),e.pull&&(t.position=`relative`,t.right=Y(e.pull)),e.span===0&&(t.display=`none`);let n=ae(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=Y(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},X=n=>{let a=b(`useSetup:0:0`,()=>u(()=>{let{gutter:e,align:t,justify:r,wrap:a,className:o,style:s,children:c,ref:l,...u}=n,d=b(`computed:1:1`,()=>v(()=>K(n.gutter))),p=d,m;return p.get()&&(f(()=>{m=U(()=>{V.value=B()}),V.value=B()}),i(()=>{m&&m()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,requiresViewport:d,applyRef:e=>{z(n.ref,e)},resolvedClassName:b(`computed:1:2`,()=>v(()=>P(`rue-grid rue-grid-row`,n.className))),resolvedStyle:b(`computed:1:3`,()=>v(()=>{let[e,t]=ne(n.gutter,p.get()?V.value:B());return R(oe(e,t,n.justify,n.align,n.wrap===void 0?!0:n.wrap),n.style)})),stopTracking:m}})),{__rue_rest_omit_0:c,__rue_rest_omit_1:m,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,rest:O,requiresViewport:k,applyRef:A,resolvedClassName:j,resolvedStyle:M}=a,{stopTracking:N}=a;return o(i=>{let a=p(`div`,i);t(()=>{y(a,O)});let o=S(a,()=>A);s(()=>{o()}),r(a,`data-rue-grid-row`,`true`),t(()=>{d(a,j.get())}),t(()=>{_(a,M.get())});let c=g(`rue:children:anchor`);return e(a,c),t(()=>{let e=n.children;h(()=>l(e,a,c))}),a})},Z=Object.assign(X,{Row:X,Col:n=>{let a=b(`useSetup:0:0:dup1`,()=>u(()=>{let{span:e,order:t,offset:r,push:a,pull:o,flex:s,xs:c,sm:l,md:u,lg:d,xl:p,xxl:m,className:h,style:g,children:_,gutter:y,ref:x,...S}=n,C=b(`computed:1:4`,()=>v(()=>({span:n.span,order:n.order,offset:n.offset,push:n.push,pull:n.pull,flex:n.flex,xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl,xxl:n.xxl}))),w=C,T=b(`computed:1:5`,()=>v(()=>ee(w.get()))),E=T,D;return E.get()&&(f(()=>{D=U(()=>{V.value=B()}),V.value=B()}),i(()=>{D&&D()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:p,__rue_rest_omit_11:m,__rue_rest_omit_12:h,__rue_rest_omit_13:g,__rue_rest_omit_14:_,__rue_rest_omit_15:y,__rue_rest_omit_16:x,domProps:S,gridProps:C,requiresViewport:T,applyRef:e=>{z(n.ref,e)},resolvedClassName:b(`computed:1:6`,()=>v(()=>P(`rue-grid-col`,n.className))),resolvedStyle:b(`computed:1:7`,()=>v(()=>R(se(ie(w.get(),E.get()?V.value:B())),n.style))),stopTracking:D}})),{__rue_rest_omit_0:c,__rue_rest_omit_1:m,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,__rue_rest_omit_14:F,__rue_rest_omit_15:I,__rue_rest_omit_16:L,domProps:H,gridProps:W,requiresViewport:G,applyRef:K,resolvedClassName:q,resolvedStyle:J}=a,{stopTracking:te}=a;return o(i=>{let a=p(`div`,i);t(()=>{y(a,H)});let o=S(a,()=>K);s(()=>{o()}),r(a,`data-rue-grid-col`,`true`),t(()=>{d(a,q.get())}),t(()=>{_(a,J.get())});let c=g(`rue:children:anchor`);return e(a,c),t(()=>{let e=n.children;h(()=>l(e,a,c))}),a})}}),Q=n=>o(r=>{let i=p(`div`,r);d(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=p(`div`,i);e(i,s),d(s,`flex flex-wrap items-start justify-between gap-3`);let u=p(`div`,s);e(s,u);let f=p(`h2`,u);e(u,f),d(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(f,a(`# `));let _=g(`rue:slot:anchor`);e(f,_),t(()=>{let e=n.title;h(()=>l(e,f,_))});let v=g(`rue:slot:anchor`);e(u,v),t(()=>{let r=n.summary?o(()=>{let r=c(),i=p(`p`,r);e(r,i),d(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;h(()=>l(e,i,a))}),r}):``;h(()=>l(r,u,v))});let y=g(`rue:component:anchor`);e(i,y),t(()=>{let e=m(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});h(()=>l(e,i,y))});let b=g(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():o(()=>{let r=c(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(T,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>l(e,r,i))}),r});h(()=>l(r,i,b))}),i}),ce=n=>o(i=>{let s=p(`div`,i);d(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=p(`table`,s);e(s,u),d(u,`table table-zebra`);let f=p(`thead`,u);e(u,f);let m=p(`tr`,f);e(f,m);let _=p(`th`,m);e(m,_),e(_,a(`属性`));let v=p(`th`,m);e(m,v),e(v,a(`说明`));let y=p(`th`,m);e(m,y),e(y,a(`类型`));let b=p(`th`,m);e(m,b),e(b,a(`默认值`));let S=p(`tbody`,u);e(u,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=x({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,s,u)=>{l(o(()=>{let i=c(),a=p(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let o=p(`td`,a);e(a,o);let s=p(`code`,o);e(o,s);let u=g(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;h(()=>l(e,s,u))});let d=p(`td`,a);e(a,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>l(e,d,f))});let m=p(`td`,a);e(a,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>l(e,_,v))});let y=p(`td`,a);e(a,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>l(e,b,x))}),i}),i,a)}})}),s}),$=n=>o(r=>{let i=p(`div`,r);t(()=>{d(i,`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${n.className??``}`.trim())});let a=p(`div`,i);e(i,a),d(a,`flex items-start justify-between gap-3`);let s=p(`div`,a);e(a,s);let u=p(`div`,s);e(s,u),d(u,`text-sm font-semibold leading-6`);let f=g(`rue:slot:anchor`);e(u,f),t(()=>{let e=n.title;h(()=>l(e,u,f))});let _=g(`rue:slot:anchor`);e(s,_),t(()=>{let r=n.detail?o(()=>{let r=c(),i=p(`div`,r);e(r,i),d(i,`mt-1 text-xs leading-5 opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.detail;h(()=>l(e,i,a))}),r}):``;h(()=>l(r,s,_))});let v=g(`rue:slot:anchor`);return e(a,v),t(()=>{let r=n.tag?o(()=>{let r=c(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(k,{outline:!0,children:n.tag});h(()=>l(e,r,i))}),r}):``;h(()=>l(r,a,v))}),i}),le=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，使用 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ue=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],de=`import { Grid } from '@rue-js/design'

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
</Grid>`,ge=()=>{let{tabBasic:r,tabResponsive:i,tabAlignment:s,tabFlex:f,tabDashboard:_}=b(`useSetup:0:0`,()=>u(()=>({tabBasic:b(`ref:1:0`,()=>n(`preview`)),tabResponsive:b(`ref:1:1`,()=>n(`preview`)),tabAlignment:b(`ref:1:2`,()=>n(`preview`)),tabFlex:b(`ref:1:3`,()=>n(`preview`)),tabDashboard:b(`ref:1:4`,()=>n(`preview`))})));return o(n=>{let u=c(),v=g(`rue:component:anchor`);return e(u,v),l(m(A,{children:o(()=>{let n=c(),o=p(`div`,n);e(n,o),d(o,`max-w-none prose prose-sm md:prose-base`);let u=p(`h1`,o);e(o,u),e(u,a(`Grid 栅格`));let v=p(`p`,o);e(o,v),d(v,`mt-3 mb-3 text-sm`),e(v,a(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let y=p(`p`,o);e(o,y),d(y,`my-3 text-sm opacity-75`),e(y,a(`视觉上使用 Rue 当前的轻量表面体系，能力覆盖 Row / Col、响应式断点、gutter、偏移、 顺序和 flex 混排。`));let b=p(`div`,o);e(o,b),d(b,`not-prose mt-4 flex flex-wrap gap-2`);let x=g(`rue:component:anchor`);e(b,x),t(()=>{let e=m(k,{outline:!0,children:`24 Columns`});h(()=>l(e,b,x))});let S=g(`rue:component:anchor`);e(b,S),t(()=>{let e=m(k,{outline:!0,children:`Responsive`});h(()=>l(e,b,S))});let T=g(`rue:component:anchor`);e(b,T),t(()=>{let e=m(k,{outline:!0,children:`Offset & Order`});h(()=>l(e,b,T))});let O=g(`rue:component:anchor`);e(b,O),t(()=>{let e=m(k,{outline:!0,children:`Flex Mix`});h(()=>l(e,b,O))});let A=g(`rue:component:anchor`);e(o,A),t(()=>{let e=m(Q,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:r,code:de,preview:()=>w(`div`,{className:`space-y-5`,children:[C(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-4`,children:w(Z,{gutter:[16,16],children:[C(Z.Col,{span:6,children:C($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),C(Z.Col,{span:6,children:C($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),C(Z.Col,{span:6,children:C($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),C(Z.Col,{span:6,children:C($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),w(Z,{gutter:[16,16],children:[C(Z.Col,{span:8,children:C($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),C(Z.Col,{span:8,children:C($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),C(Z.Col,{span:8,children:C($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});h(()=>l(e,o,A))});let j=g(`rue:component:anchor`);e(o,j),t(()=>{let e=m(Q,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:i,code:fe,preview:()=>w(`div`,{className:`space-y-4`,children:[C(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),w(Z,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[C(Z.Col,{xs:24,sm:12,lg:8,children:C($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),C(Z.Col,{xs:24,sm:12,lg:8,children:C($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),C(Z.Col,{xs:24,lg:8,children:C($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});h(()=>l(e,o,j))});let M=g(`rue:component:anchor`);e(o,M),t(()=>{let e=m(Q,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:s,code:pe,preview:()=>w(`div`,{className:`space-y-6`,children:[C(D,{className:`bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-4`,children:w(Z,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[C(Z.Col,{span:5,children:C($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),C(Z.Col,{span:5,children:C($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),C(Z.Col,{span:5,children:C($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),w(Z,{gutter:[16,16],children:[C(Z.Col,{span:6,offset:6,children:C($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),C(Z.Col,{span:6,order:3,children:C($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),C(Z.Col,{span:6,order:2,children:C($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});h(()=>l(e,o,M))});let N=g(`rue:component:anchor`);e(o,N),t(()=>{let e=m(Q,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:f,code:me,preview:()=>w(`div`,{className:`space-y-6`,children:[w(Z,{gutter:16,align:`stretch`,children:[C(Z.Col,{flex:`280px`,children:C($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),C(Z.Col,{flex:`auto`,children:C($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),C(Z.Col,{flex:`120px`,children:C($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),w(Z,{gutter:12,wrap:!1,children:[C(Z.Col,{flex:`180px`,children:C($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),C(Z.Col,{flex:`180px`,children:C($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),C(Z.Col,{flex:`180px`,children:C($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});h(()=>l(e,o,N))});let P=g(`rue:component:anchor`);e(o,P),t(()=>{let e=m(Q,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:_,code:he,preview:()=>w(Z,{gutter:[20,20],children:[C(Z.Col,{xs:24,xl:16,children:C(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-5`,children:[w(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[w(`div`,{children:[C(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),C(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),w(`div`,{className:`flex flex-wrap gap-2`,children:[C(k,{outline:!0,children:`Live`}),C(k,{outline:!0,children:`Q2`})]})]}),w(Z,{gutter:[16,16],children:[C(Z.Col,{xs:24,md:12,children:C($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),C(Z.Col,{xs:24,md:12,children:C($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),C(Z.Col,{xs:24,children:w(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[w(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[w(`div`,{children:[C(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),C(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),C(E,{color:`primary`,size:`sm`,children:`查看明细`})]}),w(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[C(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),C(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),C(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),C(Z.Col,{xs:24,xl:8,children:C(D,{className:`bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:[w(`div`,{className:`flex items-center justify-between gap-3`,children:[w(`div`,{children:[C(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),C(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),C(k,{outline:!0,children:`7 items`})]}),w(`div`,{className:`space-y-3`,children:[C($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),C($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),C($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});h(()=>l(e,o,P))});let F=p(`div`,o);e(o,F),d(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=p(`h2`,F);e(F,I),d(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(I,a(`# API`));let L=p(`p`,F);e(F,L),d(L,`m-0 text-sm opacity-70`),e(L,a(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=p(`div`,o);e(o,R),d(R,`not-prose space-y-8`);let z=p(`div`,R);e(R,z);let B=p(`h3`,z);e(z,B),d(B,`mb-3 text-base font-semibold`),e(B,a(`Grid / Grid.Row`));let V=g(`rue:component:anchor`);e(z,V),t(()=>{let e=m(ce,{rows:le});h(()=>l(e,z,V))});let H=p(`div`,R);e(R,H);let U=p(`h3`,H);e(H,U),d(U,`mb-3 text-base font-semibold`),e(U,a(`Grid.Col`));let W=g(`rue:component:anchor`);return e(H,W),t(()=>{let e=m(ce,{rows:ue});h(()=>l(e,H,W))}),n})}),u,v),u})};export{ge as default};
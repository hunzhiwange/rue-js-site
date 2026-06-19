import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,_t as o,ct as s,et as c,i as l,l as u,mt as d,n as f,nt as p,o as m,r as h,t as g,tt as _,ut as v,yt as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b,n as x,t as S}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as C,i as w}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as T}from"./Code-D5UqTwV6.js";import{t as E}from"./button-CiwrjbTY.js";import{t as D}from"./card-CpXBRexs.js";import{t as O}from"./tabs-DRfs918f.js";import{t as k}from"./badge-DhL0-cBn.js";import{r as A}from"./SidebarPlaygroundDesign-CWudvLqE.js";var j=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],M={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},N=new Set,P=(e,t)=>e?t?`${e} ${t}`:e:t??``,F=e=>typeof e==`number`?`${e}px`:e,I=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),L=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:I(e)}:${String(t)}`).join(`; `):``,R=(...e)=>e.map(e=>L(e)).filter(Boolean).join(`; `),z=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},B=()=>typeof window>`u`?M.xl:window.innerWidth||document.documentElement?.clientWidth||M.xl,V=b(`ref:1:0`,()=>n(B())),H=()=>{N.forEach(e=>e())},U=e=>typeof window>`u`?()=>{}:(N.size===0&&window.addEventListener(`resize`,H),N.add(e),()=>{N.delete(e),N.size===0&&window.removeEventListener(`resize`,H)}),W=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>j.includes(e)),G=(e,t)=>{if(!W(e))return e;let n;for(let r of j)t>=M[r]&&e[r]!==void 0&&(n=e[r]);return n},K=e=>e?Array.isArray(e)?e.some(e=>W(e)):W(e):!1,ee=e=>j.some(t=>e[t]!==void 0),q=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},J=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},te=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},ne=(e,t)=>e?Array.isArray(e)?[G(e[0],t),G(e[1],t)]:[G(e,t),void 0]:[void 0,void 0],re=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ie=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of j){if(t<M[r])continue;let i=re(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},Y=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},ae=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},oe=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:J(n),alignItems:te(r),"--rue-grid-gutter-x":F(e)??`0px`,"--rue-grid-gutter-y":F(t)??`0px`},o=q(e,!0),s=q(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},se=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=Y(e.offset)),e.push&&(t.position=`relative`,t.left=Y(e.push)),e.pull&&(t.position=`relative`,t.right=Y(e.pull)),e.span===0&&(t.display=`none`);let n=ae(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=Y(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},X=n=>{let c=b(`useSetup:0:0`,()=>i(()=>{let{gutter:e,align:t,justify:r,wrap:i,className:a,style:o,children:s,ref:c,...u}=n,d=b(`computed:1:1`,()=>y(()=>K(n.gutter))),f=d,p;return f.get()&&(h(()=>{p=U(()=>{V.value=B()}),V.value=B()}),l(()=>{p&&p()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:u,requiresViewport:d,applyRef:e=>{z(n.ref,e)},resolvedClassName:b(`computed:1:2`,()=>y(()=>P(`rue-grid rue-grid-row`,n.className))),resolvedStyle:b(`computed:1:3`,()=>y(()=>{let[e,t]=ne(n.gutter,f.get()?V.value:B());return R(oe(e,t,n.justify,n.align,n.wrap===void 0?!0:n.wrap),n.style)})),stopTracking:p}})),{__rue_rest_omit_0:p,__rue_rest_omit_1:g,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,rest:O,requiresViewport:k,applyRef:A,resolvedClassName:j,resolvedStyle:M}=c,{stopTracking:N}=c;return u(i=>{let c=_(`div`,i);t(()=>{o(c,O)});let l=S(c,()=>A);f(()=>{l()}),s(c,`data-rue-grid-row`,`true`),t(()=>{v(c,j.get())}),t(()=>{d(c,M.get())});let u=e(`rue:children:anchor`);return a(c,u),t(()=>{let e=n.children;r(()=>m(e,c,u))}),c})},Z=Object.assign(X,{Row:X,Col:n=>{let c=b(`useSetup:0:0:dup1`,()=>i(()=>{let{span:e,order:t,offset:r,push:i,pull:a,flex:o,xs:s,sm:c,md:u,lg:d,xl:f,xxl:p,className:m,style:g,children:_,gutter:v,ref:x,...S}=n,C=b(`computed:1:4`,()=>y(()=>({span:n.span,order:n.order,offset:n.offset,push:n.push,pull:n.pull,flex:n.flex,xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl,xxl:n.xxl}))),w=C,T=b(`computed:1:5`,()=>y(()=>ee(w.get()))),E=T,D;return E.get()&&(h(()=>{D=U(()=>{V.value=B()}),V.value=B()}),l(()=>{D&&D()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:g,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:x,domProps:S,gridProps:C,requiresViewport:T,applyRef:e=>{z(n.ref,e)},resolvedClassName:b(`computed:1:6`,()=>y(()=>P(`rue-grid-col`,n.className))),resolvedStyle:b(`computed:1:7`,()=>y(()=>R(se(ie(w.get(),E.get()?V.value:B())),n.style))),stopTracking:D}})),{__rue_rest_omit_0:p,__rue_rest_omit_1:g,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,__rue_rest_omit_14:F,__rue_rest_omit_15:I,__rue_rest_omit_16:L,domProps:H,gridProps:W,requiresViewport:G,applyRef:K,resolvedClassName:q,resolvedStyle:J}=c,{stopTracking:te}=c;return u(i=>{let c=_(`div`,i);t(()=>{o(c,H)});let l=S(c,()=>K);f(()=>{l()}),s(c,`data-rue-grid-col`,`true`),t(()=>{v(c,q.get())}),t(()=>{d(c,J.get())});let u=e(`rue:children:anchor`);return a(c,u),t(()=>{let e=n.children;r(()=>m(e,c,u))}),c})}}),Q=n=>u(i=>{let o=_(`div`,i);v(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=_(`div`,o);a(o,s),v(s,`flex flex-wrap items-start justify-between gap-3`);let l=_(`div`,s);a(s,l);let d=_(`h2`,l);a(l,d),v(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(d,p(`# `));let f=e(`rue:slot:anchor`);a(d,f),t(()=>{let e=n.title;r(()=>m(e,d,f))});let h=e(`rue:slot:anchor`);a(l,h),t(()=>{let i=n.summary?u(()=>{let i=c(),o=_(`p`,i);a(i,o),v(o,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.summary;r(()=>m(e,o,s))}),i}):``;r(()=>m(i,l,h))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=g(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>m(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?n.preview():u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=g(T,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>m(e,i,o))}),i});r(()=>m(i,o,b))}),o}),ce=n=>u(i=>{let o=_(`div`,i);v(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=_(`table`,o);a(o,l),v(l,`table table-zebra`);let d=_(`thead`,l);a(l,d);let f=_(`tr`,d);a(d,f);let h=_(`th`,f);a(f,h),a(h,p(`属性`));let g=_(`th`,f);a(f,g),a(g,p(`说明`));let y=_(`th`,f);a(f,y),a(y,p(`类型`));let b=_(`th`,f);a(f,b),a(b,p(`默认值`));let S=_(`tbody`,l);a(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=x({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,l,d)=>{m(u(()=>{let i=c(),o=_(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=_(`td`,o);a(o,l);let u=_(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>m(e,u,d))});let f=_(`td`,o);a(o,f);let p=e(`rue:slot:anchor`);a(f,p),t(()=>{let e=n.description;r(()=>m(e,f,p))});let h=_(`td`,o);a(o,h);let g=_(`code`,h);a(h,g);let v=e(`rue:slot:anchor`);a(g,v),t(()=>{let e=n.type;r(()=>m(e,g,v))});let y=_(`td`,o);a(o,y);let b=_(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>m(e,b,x))}),i}),i,o)}})}),o}),$=n=>u(i=>{let o=_(`div`,i);t(()=>{v(o,`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${n.className??``}`.trim())});let s=_(`div`,o);a(o,s),v(s,`flex items-start justify-between gap-3`);let l=_(`div`,s);a(s,l);let d=_(`div`,l);a(l,d),v(d,`text-sm font-semibold leading-6`);let f=e(`rue:slot:anchor`);a(d,f),t(()=>{let e=n.title;r(()=>m(e,d,f))});let p=e(`rue:slot:anchor`);a(l,p),t(()=>{let i=n.detail?u(()=>{let i=c(),o=_(`div`,i);a(i,o),v(o,`mt-1 text-xs leading-5 opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.detail;r(()=>m(e,o,s))}),i}):``;r(()=>m(i,l,p))});let h=e(`rue:slot:anchor`);return a(s,h),t(()=>{let i=n.tag?u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=g(k,{outline:!0,children:n.tag});r(()=>m(e,i,o))}),i}):``;r(()=>m(i,s,h))}),o}),le=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，保留 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ue=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],de=`import { Grid } from '@rue-js/design'

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
</Grid>`,ge=()=>{let{tabBasic:o,tabResponsive:s,tabAlignment:l,tabFlex:d,tabDashboard:f}=b(`useSetup:0:0`,()=>i(()=>({tabBasic:b(`ref:1:0`,()=>n(`preview`)),tabResponsive:b(`ref:1:1`,()=>n(`preview`)),tabAlignment:b(`ref:1:2`,()=>n(`preview`)),tabFlex:b(`ref:1:3`,()=>n(`preview`)),tabDashboard:b(`ref:1:4`,()=>n(`preview`))})));return u(n=>{let i=c(),h=e(`rue:component:anchor`);return a(i,h),m(g(A,{children:u(()=>{let n=c(),i=_(`div`,n);a(n,i),v(i,`max-w-none prose prose-sm md:prose-base`);let u=_(`h1`,i);a(i,u),a(u,p(`Grid 栅格`));let h=_(`p`,i);a(i,h),v(h,`mt-3 mb-3 text-sm`),a(h,p(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let y=_(`p`,i);a(i,y),v(y,`my-3 text-sm opacity-75`),a(y,p(`这一版不照搬其他设计体系的视觉，而是把核心布局能力迁到 Rue 当前的轻量表面体系里：支持 Row / Col、响应式断点、gutter、偏移、顺序和 flex 混排。`));let b=_(`div`,i);a(i,b),v(b,`not-prose mt-4 flex flex-wrap gap-2`);let x=e(`rue:component:anchor`);a(b,x),t(()=>{let e=g(k,{outline:!0,children:`24 Columns`});r(()=>m(e,b,x))});let S=e(`rue:component:anchor`);a(b,S),t(()=>{let e=g(k,{outline:!0,children:`Responsive`});r(()=>m(e,b,S))});let T=e(`rue:component:anchor`);a(b,T),t(()=>{let e=g(k,{outline:!0,children:`Offset & Order`});r(()=>m(e,b,T))});let O=e(`rue:component:anchor`);a(b,O),t(()=>{let e=g(k,{outline:!0,children:`Flex Mix`});r(()=>m(e,b,O))});let A=e(`rue:component:anchor`);a(i,A),t(()=>{let e=g(Q,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:o,code:de,preview:()=>C(`div`,{className:`space-y-5`,children:[w(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:C(Z,{gutter:[16,16],children:[w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),C(Z,{gutter:[16,16],children:[w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});r(()=>m(e,i,A))});let j=e(`rue:component:anchor`);a(i,j),t(()=>{let e=g(Q,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:s,code:fe,preview:()=>C(`div`,{className:`space-y-4`,children:[w(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),C(Z,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[w(Z.Col,{xs:24,sm:12,lg:8,children:w($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),w(Z.Col,{xs:24,sm:12,lg:8,children:w($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),w(Z.Col,{xs:24,lg:8,children:w($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});r(()=>m(e,i,j))});let M=e(`rue:component:anchor`);a(i,M),t(()=>{let e=g(Q,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:l,code:pe,preview:()=>C(`div`,{className:`space-y-6`,children:[w(D,{className:`bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:C(Z,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[w(Z.Col,{span:5,children:w($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),w(Z.Col,{span:5,children:w($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),w(Z.Col,{span:5,children:w($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),C(Z,{gutter:[16,16],children:[w(Z.Col,{span:6,offset:6,children:w($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),w(Z.Col,{span:6,order:3,children:w($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),w(Z.Col,{span:6,order:2,children:w($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});r(()=>m(e,i,M))});let N=e(`rue:component:anchor`);a(i,N),t(()=>{let e=g(Q,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:d,code:me,preview:()=>C(`div`,{className:`space-y-6`,children:[C(Z,{gutter:16,align:`stretch`,children:[w(Z.Col,{flex:`280px`,children:w($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),w(Z.Col,{flex:`auto`,children:w($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),w(Z.Col,{flex:`120px`,children:w($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),C(Z,{gutter:12,wrap:!1,children:[w(Z.Col,{flex:`180px`,children:w($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),w(Z.Col,{flex:`180px`,children:w($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),w(Z.Col,{flex:`180px`,children:w($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});r(()=>m(e,i,N))});let P=e(`rue:component:anchor`);a(i,P),t(()=>{let e=g(Q,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:f,code:he,preview:()=>C(Z,{gutter:[20,20],children:[w(Z.Col,{xs:24,xl:16,children:w(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-5`,children:[C(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),w(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),C(`div`,{className:`flex flex-wrap gap-2`,children:[w(k,{outline:!0,children:`Live`}),w(k,{outline:!0,children:`Q2`})]})]}),C(Z,{gutter:[16,16],children:[w(Z.Col,{xs:24,md:12,children:w($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),w(Z.Col,{xs:24,md:12,children:w($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),w(Z.Col,{xs:24,children:C(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[C(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),w(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),w(E,{color:`primary`,size:`sm`,children:`查看明细`})]}),C(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),w(Z.Col,{xs:24,xl:8,children:w(D,{className:`bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-4`,children:[C(`div`,{className:`flex items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),w(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),w(k,{outline:!0,children:`7 items`})]}),C(`div`,{className:`space-y-3`,children:[w($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),w($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),w($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});r(()=>m(e,i,P))});let F=_(`div`,i);a(i,F),v(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=_(`h2`,F);a(F,I),v(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(I,p(`# API`));let L=_(`p`,F);a(F,L),v(L,`m-0 text-sm opacity-70`),a(L,p(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=_(`div`,i);a(i,R),v(R,`not-prose space-y-8`);let z=_(`div`,R);a(R,z);let B=_(`h3`,z);a(z,B),v(B,`mb-3 text-base font-semibold`),a(B,p(`Grid / Grid.Row`));let V=e(`rue:component:anchor`);a(z,V),t(()=>{let e=g(ce,{rows:le});r(()=>m(e,z,V))});let H=_(`div`,R);a(R,H);let U=_(`h3`,H);a(H,U),v(U,`mb-3 text-base font-semibold`),a(U,p(`Grid.Col`));let W=e(`rue:component:anchor`);return a(H,W),t(()=>{let e=g(ce,{rows:ue});r(()=>m(e,H,W))}),n})}),i,h),i})};export{ge as default};
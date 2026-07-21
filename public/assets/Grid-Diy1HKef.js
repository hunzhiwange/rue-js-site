import{At as e,Cn as t,Ct as n,Lt as r,Nt as i,Tt as a,dt as o,ft as s,mt as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{i as m,l as h,n as g,o as _,r as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as x,t as S}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as C}from"./Code-DhoWkRkB.js";import{n as w,t as T}from"./src-CCTNpCXV.js";import{t as E}from"./button-CvwbmGA0.js";import{t as D}from"./card-BQwxfBsS.js";import{t as O}from"./tabs-B1XdBEJF.js";import{t as k}from"./badge-B-YHGclR.js";import{r as A}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var j=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],M={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},N=new Set,P=(e,t)=>e?t?`${e} ${t}`:e:t??``,F=e=>typeof e==`number`?`${e}px`:e,I=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),L=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:I(e)}:${String(t)}`).join(`; `):``,R=(...e)=>e.map(e=>L(e)).filter(Boolean).join(`; `),z=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},B=()=>typeof window>`u`?M.xl:window.innerWidth||document.documentElement?.clientWidth||M.xl,V=b(`ref:1:0`,()=>l(B())),H=()=>{N.forEach(e=>e())},U=e=>typeof window>`u`?()=>{}:(N.size===0&&window.addEventListener(`resize`,H),N.add(e),()=>{N.delete(e),N.size===0&&window.removeEventListener(`resize`,H)}),W=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>j.includes(e)),G=(e,t)=>{if(!W(e))return e;let n;for(let r of j)t>=M[r]&&e[r]!==void 0&&(n=e[r]);return n},K=e=>e?Array.isArray(e)?e.some(e=>W(e)):W(e):!1,ee=e=>j.some(t=>e[t]!==void 0),q=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},J=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},te=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},ne=(e,t)=>e?Array.isArray(e)?[G(e[0],t),G(e[1],t)]:[G(e,t),void 0]:[void 0,void 0],re=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ie=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of j){if(t<M[r])continue;let i=re(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},Y=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},ae=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},oe=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:J(n),alignItems:te(r),"--rue-grid-gutter-x":F(e)??`0px`,"--rue-grid-gutter-y":F(t)??`0px`},o=q(e,!0),s=q(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},se=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=Y(e.offset)),e.push&&(t.position=`relative`,t.left=Y(e.push)),e.pull&&(t.position=`relative`,t.right=Y(e.pull)),e.span===0&&(t.display=`none`);let n=ae(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=Y(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},X=s=>{let c=b(`useSetup:0:0`,()=>t(()=>{let{gutter:e,align:t,justify:n,wrap:i,className:a,style:o,children:c,ref:l,...u}=s,d=b(`computed:1:1`,()=>r(()=>K(s.gutter))),f=d,p;return f.get()&&(v(()=>{p=U(()=>{V.value=B()}),V.value=B()}),m(()=>{p&&p()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,requiresViewport:d,applyRef:e=>{z(s.ref,e)},resolvedClassName:b(`computed:1:2`,()=>r(()=>P(`rue-grid rue-grid-row`,s.className))),resolvedStyle:b(`computed:1:3`,()=>r(()=>{let[e,t]=ne(s.gutter,f.get()?V.value:B());return R(oe(e,t,s.justify,s.align,s.wrap===void 0||s.wrap),s.style)})),stopTracking:p}})),{__rue_rest_omit_0:l,__rue_rest_omit_1:y,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,rest:O,requiresViewport:k,applyRef:A,resolvedClassName:j,resolvedStyle:M}=c,{stopTracking:N}=c;return h(t=>{let r=u(`div`,t);f(()=>{i(r,O)});let c=S(r,()=>A);g(()=>{c()}),n(r,`data-rue-grid-row`,`true`),f(()=>{a(r,j.get())}),f(()=>{let t=M.get();e(r,t)});let l=o(`rue:children:anchor`);return d(r,l),f(()=>{let e=s.children;p(()=>_(e,r,l))}),r})},Z=Object.assign(X,{Row:X,Col:s=>{let c=b(`useSetup:0:0:dup1`,()=>t(()=>{let{span:e,order:t,offset:n,push:i,pull:a,flex:o,xs:c,sm:l,md:u,lg:d,xl:f,xxl:p,className:h,style:g,children:_,gutter:y,ref:x,...S}=s,C=b(`computed:1:4`,()=>r(()=>({span:s.span,order:s.order,offset:s.offset,push:s.push,pull:s.pull,flex:s.flex,xs:s.xs,sm:s.sm,md:s.md,lg:s.lg,xl:s.xl,xxl:s.xxl}))),w=C,T=b(`computed:1:5`,()=>r(()=>ee(w.get()))),E=T,D;return E.get()&&(v(()=>{D=U(()=>{V.value=B()}),V.value=B()}),m(()=>{D&&D()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:h,__rue_rest_omit_13:g,__rue_rest_omit_14:_,__rue_rest_omit_15:y,__rue_rest_omit_16:x,domProps:S,gridProps:C,requiresViewport:T,applyRef:e=>{z(s.ref,e)},resolvedClassName:b(`computed:1:6`,()=>r(()=>P(`rue-grid-col`,s.className))),resolvedStyle:b(`computed:1:7`,()=>r(()=>R(se(ie(w.get(),E.get()?V.value:B())),s.style))),stopTracking:D}})),{__rue_rest_omit_0:l,__rue_rest_omit_1:y,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,__rue_rest_omit_14:F,__rue_rest_omit_15:I,__rue_rest_omit_16:L,domProps:H,gridProps:W,requiresViewport:G,applyRef:K,resolvedClassName:q,resolvedStyle:J}=c,{stopTracking:te}=c;return h(t=>{let r=u(`div`,t);f(()=>{i(r,H)});let c=S(r,()=>K);g(()=>{c()}),n(r,`data-rue-grid-col`,`true`),f(()=>{a(r,q.get())}),f(()=>{let t=J.get();e(r,t)});let l=o(`rue:children:anchor`);return d(r,l),f(()=>{let e=s.children;p(()=>_(e,r,l))}),r})}}),Q=e=>h(t=>{let n=u(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=u(`div`,n);d(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=u(`div`,r);d(r,i);let l=u(`h2`,i);d(i,l),a(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,c(`# `));let m=o(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.title;p(()=>_(t,l,m))});let g=o(`rue:slot:anchor`);d(i,g),f(()=>{let t=e.summary?h(()=>{let t=s(),n=u(`p`,t);d(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.summary;p(()=>_(t,n,r))}),t}):``;p(()=>_(t,i,g))});let v=o(`rue:component:anchor`);d(n,v),f(()=>{let t=y(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>_(t,n,v))});let b=o(`rue:slot:anchor`);return d(n,b),f(()=>{let t=e.tab.value===`preview`?e.preview():h(()=>{let t=s(),n=o(`rue:component:anchor`);return d(t,n),f(()=>{let r=y(C,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>_(r,t,n))}),t});p(()=>_(t,n,b))}),n}),ce=e=>h(t=>{let r=u(`div`,t);a(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=u(`table`,r);d(r,i),a(i,`table table-zebra`);let l=u(`thead`,i);d(i,l);let m=u(`tr`,l);d(l,m);let g=u(`th`,m);d(m,g),d(g,c(`属性`));let v=u(`th`,m);d(m,v),d(v,c(`说明`));let y=u(`th`,m);d(m,y),d(y,c(`类型`));let b=u(`th`,m);d(m,b),d(b,c(`默认值`));let S=u(`tbody`,i);d(i,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=x({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,a)=>{_(h(()=>{let t=s(),r=u(`tr`,t);d(t,r),f(()=>{n(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let a=u(`code`,i);d(i,a);let c=o(`rue:slot:anchor`);d(a,c),f(()=>{let t=e.prop;p(()=>_(t,a,c))});let l=u(`td`,r);d(r,l);let m=o(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>_(t,l,m))});let h=u(`td`,r);d(r,h);let g=u(`code`,h);d(h,g);let v=o(`rue:slot:anchor`);d(g,v),f(()=>{let t=e.type;p(()=>_(t,g,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=o(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>_(t,b,x))}),t}),t,r)}})}),r}),$=e=>h(t=>{let n=u(`div`,t);f(()=>{a(n,`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${e.className??``}`.trim())});let r=u(`div`,n);d(n,r),a(r,`flex items-start justify-between gap-3`);let i=u(`div`,r);d(r,i);let c=u(`div`,i);d(i,c),a(c,`text-sm font-semibold leading-6`);let l=o(`rue:slot:anchor`);d(c,l),f(()=>{let t=e.title;p(()=>_(t,c,l))});let m=o(`rue:slot:anchor`);d(i,m),f(()=>{let t=e.detail?h(()=>{let t=s(),n=u(`div`,t);d(t,n),a(n,`mt-1 text-xs leading-5 opacity-70`);let r=o(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.detail;p(()=>_(t,n,r))}),t}):``;p(()=>_(t,i,m))});let g=o(`rue:slot:anchor`);return d(r,g),f(()=>{let t=e.tag?h(()=>{let t=s(),n=o(`rue:component:anchor`);return d(t,n),f(()=>{let r=y(k,{outline:!0,children:e.tag});p(()=>_(r,t,n))}),t}):``;p(()=>_(t,r,g))}),n}),le=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，使用 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ue=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],de=`import { Grid } from '@rue-js/design'

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
</Grid>`,ge=()=>{let{tabBasic:e,tabResponsive:n,tabAlignment:r,tabFlex:i,tabDashboard:m}=b(`useSetup:0:0`,()=>t(()=>({tabBasic:b(`ref:1:0`,()=>l(`preview`)),tabResponsive:b(`ref:1:1`,()=>l(`preview`)),tabAlignment:b(`ref:1:2`,()=>l(`preview`)),tabFlex:b(`ref:1:3`,()=>l(`preview`)),tabDashboard:b(`ref:1:4`,()=>l(`preview`))})));return h(t=>{let l=s(),g=o(`rue:component:anchor`);return d(l,g),_(y(A,{children:h(()=>{let t=s(),l=u(`div`,t);d(t,l),a(l,`max-w-none prose prose-sm md:prose-base`);let h=u(`h1`,l);d(l,h),d(h,c(`Grid 栅格`));let g=u(`p`,l);d(l,g),a(g,`mt-3 mb-3 text-sm`),d(g,c(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let v=u(`p`,l);d(l,v),a(v,`my-3 text-sm opacity-75`),d(v,c(`视觉上使用 Rue 当前的轻量表面体系，能力覆盖 Row / Col、响应式断点、gutter、偏移、 顺序和 flex 混排。`));let b=u(`div`,l);d(l,b),a(b,`not-prose mt-4 flex flex-wrap gap-2`);let x=o(`rue:component:anchor`);d(b,x),f(()=>{let e=y(k,{outline:!0,children:`24 Columns`});p(()=>_(e,b,x))});let S=o(`rue:component:anchor`);d(b,S),f(()=>{let e=y(k,{outline:!0,children:`Responsive`});p(()=>_(e,b,S))});let C=o(`rue:component:anchor`);d(b,C),f(()=>{let e=y(k,{outline:!0,children:`Offset & Order`});p(()=>_(e,b,C))});let O=o(`rue:component:anchor`);d(b,O),f(()=>{let e=y(k,{outline:!0,children:`Flex Mix`});p(()=>_(e,b,O))});let A=o(`rue:component:anchor`);d(l,A),f(()=>{let t=y(Q,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:e,code:de,preview:()=>w(`div`,{className:`space-y-5`,children:[T(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:T(D.Body,{className:`gap-4`,children:w(Z,{gutter:[16,16],children:[T(Z.Col,{span:6,children:T($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),T(Z.Col,{span:6,children:T($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),T(Z.Col,{span:6,children:T($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),T(Z.Col,{span:6,children:T($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),w(Z,{gutter:[16,16],children:[T(Z.Col,{span:8,children:T($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),T(Z.Col,{span:8,children:T($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),T(Z.Col,{span:8,children:T($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});p(()=>_(t,l,A))});let j=o(`rue:component:anchor`);d(l,j),f(()=>{let e=y(Q,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:n,code:fe,preview:()=>w(`div`,{className:`space-y-4`,children:[T(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),w(Z,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[T(Z.Col,{xs:24,sm:12,lg:8,children:T($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),T(Z.Col,{xs:24,sm:12,lg:8,children:T($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),T(Z.Col,{xs:24,lg:8,children:T($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});p(()=>_(e,l,j))});let M=o(`rue:component:anchor`);d(l,M),f(()=>{let e=y(Q,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:r,code:pe,preview:()=>w(`div`,{className:`space-y-6`,children:[T(D,{className:`bg-base-100 shadow-sm`,children:T(D.Body,{className:`gap-4`,children:w(Z,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[T(Z.Col,{span:5,children:T($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),T(Z.Col,{span:5,children:T($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),T(Z.Col,{span:5,children:T($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),w(Z,{gutter:[16,16],children:[T(Z.Col,{span:6,offset:6,children:T($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),T(Z.Col,{span:6,order:3,children:T($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),T(Z.Col,{span:6,order:2,children:T($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});p(()=>_(e,l,M))});let N=o(`rue:component:anchor`);d(l,N),f(()=>{let e=y(Q,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:i,code:me,preview:()=>w(`div`,{className:`space-y-6`,children:[w(Z,{gutter:16,align:`stretch`,children:[T(Z.Col,{flex:`280px`,children:T($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),T(Z.Col,{flex:`auto`,children:T($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),T(Z.Col,{flex:`120px`,children:T($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),w(Z,{gutter:12,wrap:!1,children:[T(Z.Col,{flex:`180px`,children:T($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),T(Z.Col,{flex:`180px`,children:T($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),T(Z.Col,{flex:`180px`,children:T($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});p(()=>_(e,l,N))});let P=o(`rue:component:anchor`);d(l,P),f(()=>{let e=y(Q,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:m,code:he,preview:()=>w(Z,{gutter:[20,20],children:[T(Z.Col,{xs:24,xl:16,children:T(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-5`,children:[w(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[w(`div`,{children:[T(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),T(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),w(`div`,{className:`flex flex-wrap gap-2`,children:[T(k,{outline:!0,children:`Live`}),T(k,{outline:!0,children:`Q2`})]})]}),w(Z,{gutter:[16,16],children:[T(Z.Col,{xs:24,md:12,children:T($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),T(Z.Col,{xs:24,md:12,children:T($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),T(Z.Col,{xs:24,children:w(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[w(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[w(`div`,{children:[T(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),T(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),T(E,{color:`primary`,size:`sm`,children:`查看明细`})]}),w(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[T(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),T(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),T(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),T(Z.Col,{xs:24,xl:8,children:T(D,{className:`bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:[w(`div`,{className:`flex items-center justify-between gap-3`,children:[w(`div`,{children:[T(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),T(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),T(k,{outline:!0,children:`7 items`})]}),w(`div`,{className:`space-y-3`,children:[T($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),T($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),T($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});p(()=>_(e,l,P))});let F=u(`div`,l);d(l,F),a(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=u(`h2`,F);d(F,I),a(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(I,c(`# API`));let L=u(`p`,F);d(F,L),a(L,`m-0 text-sm opacity-70`),d(L,c(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=u(`div`,l);d(l,R),a(R,`not-prose space-y-8`);let z=u(`div`,R);d(R,z);let B=u(`h3`,z);d(z,B),a(B,`mb-3 text-base font-semibold`),d(B,c(`Grid / Grid.Row`));let V=o(`rue:component:anchor`);d(z,V),f(()=>{let e=y(ce,{rows:le});p(()=>_(e,z,V))});let H=u(`div`,R);d(R,H);let U=u(`h3`,H);d(H,U),a(U,`mb-3 text-base font-semibold`),d(U,c(`Grid.Col`));let W=o(`rue:component:anchor`);return d(H,W),f(()=>{let e=y(ce,{rows:ue});p(()=>_(e,H,W))}),t})}),l,g),l})};export{ge as default};
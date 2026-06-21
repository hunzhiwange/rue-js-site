import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,gt as o,i as s,in as c,l,lt as u,n as d,nt as f,o as p,r as m,rt as h,t as g,tt as _,yt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b,n as x,t as S}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as C,i as w}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as T}from"./Code-4SUSUwRg.js";import{t as E}from"./button-COZLI6MM.js";import{t as D}from"./card-CF5ZGcgG.js";import{t as O}from"./tabs-Duzh3URW.js";import{t as k}from"./badge-rO8-umnf.js";import{r as A}from"./SidebarPlaygroundDesign-EU389JDE.js";var j=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],M={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},N=new Set,P=(e,t)=>e?t?`${e} ${t}`:e:t??``,F=e=>typeof e==`number`?`${e}px`:e,I=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),L=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:I(e)}:${String(t)}`).join(`; `):``,R=(...e)=>e.map(e=>L(e)).filter(Boolean).join(`; `),z=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},B=()=>typeof window>`u`?M.xl:window.innerWidth||document.documentElement?.clientWidth||M.xl,V=b(`ref:1:0`,()=>t(B())),H=()=>{N.forEach(e=>e())},U=e=>typeof window>`u`?()=>{}:(N.size===0&&window.addEventListener(`resize`,H),N.add(e),()=>{N.delete(e),N.size===0&&window.removeEventListener(`resize`,H)}),W=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:Object.keys(e).some(e=>j.includes(e)),G=(e,t)=>{if(!W(e))return e;let n;for(let r of j)t>=M[r]&&e[r]!==void 0&&(n=e[r]);return n},K=e=>e?Array.isArray(e)?e.some(e=>W(e)):W(e):!1,ee=e=>j.some(t=>e[t]!==void 0),q=(e,t=!1)=>{if(!(e==null||e===0||e===`0`)){if(typeof e==`number`){let n=e/2;return`${t?-n:n}px`}return`calc(${e} / ${t?`-2`:`2`})`}},J=e=>{switch(e){case`end`:return`flex-end`;case`center`:return`center`;case`space-around`:return`space-around`;case`space-between`:return`space-between`;case`space-evenly`:return`space-evenly`;default:return`flex-start`}},te=e=>{switch(e){case`middle`:return`center`;case`bottom`:return`flex-end`;case`stretch`:return`stretch`;default:return`flex-start`}},ne=(e,t)=>e?Array.isArray(e)?[G(e[0],t),G(e[1],t)]:[G(e,t),void 0]:[void 0,void 0],re=e=>{if(e!==void 0)return typeof e==`number`?{span:e}:e},ie=(e,t)=>{let n={span:e.span,order:e.order,offset:e.offset,push:e.push,pull:e.pull,flex:e.flex};for(let r of j){if(t<M[r])continue;let i=re(e[r]);i&&(i.span!==void 0&&(n.span=i.span),i.order!==void 0&&(n.order=i.order),i.offset!==void 0&&(n.offset=i.offset),i.push!==void 0&&(n.push=i.push),i.pull!==void 0&&(n.pull=i.pull),i.flex!==void 0&&(n.flex=i.flex))}return n},Y=e=>{if(e!==void 0)return`${Math.min(24,Math.max(0,e))/24*100}%`},ae=e=>{if(e==null)return;if(typeof e==`number`)return`${e} ${e} auto`;let t=e.trim();if(t)return t===`auto`?`1 1 auto`:t===`none`?`0 0 auto`:/^\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(t)?`0 0 ${t}`:t},oe=(e,t,n,r,i)=>{let a={display:`flex`,flexWrap:i===!1?`nowrap`:`wrap`,minWidth:0,justifyContent:J(n),alignItems:te(r),"--rue-grid-gutter-x":F(e)??`0px`,"--rue-grid-gutter-y":F(t)??`0px`},o=q(e,!0),s=q(t,!0);return o&&(a.marginLeft=o,a.marginRight=o),s&&(a.marginTop=s,a.marginBottom=s),a},se=e=>{let t={boxSizing:`border-box`,minWidth:0,paddingLeft:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingRight:`calc(var(--rue-grid-gutter-x, 0px) / 2)`,paddingTop:`calc(var(--rue-grid-gutter-y, 0px) / 2)`,paddingBottom:`calc(var(--rue-grid-gutter-y, 0px) / 2)`};e.order!==void 0&&(t.order=e.order),e.offset&&(t.marginLeft=Y(e.offset)),e.push&&(t.position=`relative`,t.left=Y(e.push)),e.pull&&(t.position=`relative`,t.right=Y(e.pull)),e.span===0&&(t.display=`none`);let n=ae(e.flex);if(n)t.flex=n;else if(e.span!==void 0&&e.span>0){let n=Y(e.span);t.flex=`0 0 ${n}`,t.maxWidth=n}return t},X=t=>{let h=b(`useSetup:0:0`,()=>c(()=>{let{gutter:e,align:n,justify:i,wrap:a,className:o,style:c,children:l,ref:u,...d}=t,f=b(`computed:1:1`,()=>r(()=>K(t.gutter))),p=f,h;return p.get()&&(m(()=>{h=U(()=>{V.value=B()}),V.value=B()}),s(()=>{h&&h()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:c,__rue_rest_omit_6:l,__rue_rest_omit_7:u,rest:d,requiresViewport:f,applyRef:e=>{z(t.ref,e)},resolvedClassName:b(`computed:1:2`,()=>r(()=>P(`rue-grid rue-grid-row`,t.className))),resolvedStyle:b(`computed:1:3`,()=>r(()=>{let[e,n]=ne(t.gutter,p.get()?V.value:B());return R(oe(e,n,t.justify,t.align,t.wrap===void 0?!0:t.wrap),t.style)})),stopTracking:h}})),{__rue_rest_omit_0:g,__rue_rest_omit_1:_,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,rest:O,requiresViewport:k,applyRef:A,resolvedClassName:j,resolvedStyle:M}=h,{stopTracking:N}=h;return l(r=>{let s=f(`div`,r);y(()=>{v(s,O)});let c=S(s,()=>A);d(()=>{c()}),u(s,`data-rue-grid-row`,`true`),y(()=>{i(s,j.get())}),y(()=>{o(s,M.get())});let l=a(`rue:children:anchor`);return n(s,l),y(()=>{let n=t.children;e(()=>p(n,s,l))}),s})},Z=Object.assign(X,{Row:X,Col:t=>{let h=b(`useSetup:0:0:dup1`,()=>c(()=>{let{span:e,order:n,offset:i,push:a,pull:o,flex:c,xs:l,sm:u,md:d,lg:f,xl:p,xxl:h,className:g,style:_,children:v,gutter:y,ref:x,...S}=t,C=b(`computed:1:4`,()=>r(()=>({span:t.span,order:t.order,offset:t.offset,push:t.push,pull:t.pull,flex:t.flex,xs:t.xs,sm:t.sm,md:t.md,lg:t.lg,xl:t.xl,xxl:t.xxl}))),w=C,T=b(`computed:1:5`,()=>r(()=>ee(w.get()))),E=T,D;return E.get()&&(m(()=>{D=U(()=>{V.value=B()}),V.value=B()}),s(()=>{D&&D()})),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:c,__rue_rest_omit_6:l,__rue_rest_omit_7:u,__rue_rest_omit_8:d,__rue_rest_omit_9:f,__rue_rest_omit_10:p,__rue_rest_omit_11:h,__rue_rest_omit_12:g,__rue_rest_omit_13:_,__rue_rest_omit_14:v,__rue_rest_omit_15:y,__rue_rest_omit_16:x,domProps:S,gridProps:C,requiresViewport:T,applyRef:e=>{z(t.ref,e)},resolvedClassName:b(`computed:1:6`,()=>r(()=>P(`rue-grid-col`,t.className))),resolvedStyle:b(`computed:1:7`,()=>r(()=>R(se(ie(w.get(),E.get()?V.value:B())),t.style))),stopTracking:D}})),{__rue_rest_omit_0:g,__rue_rest_omit_1:_,__rue_rest_omit_2:x,__rue_rest_omit_3:C,__rue_rest_omit_4:w,__rue_rest_omit_5:T,__rue_rest_omit_6:E,__rue_rest_omit_7:D,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,__rue_rest_omit_14:F,__rue_rest_omit_15:I,__rue_rest_omit_16:L,domProps:H,gridProps:W,requiresViewport:G,applyRef:K,resolvedClassName:q,resolvedStyle:J}=h,{stopTracking:te}=h;return l(r=>{let s=f(`div`,r);y(()=>{v(s,H)});let c=S(s,()=>K);d(()=>{c()}),u(s,`data-rue-grid-col`,`true`),y(()=>{i(s,q.get())}),y(()=>{o(s,J.get())});let l=a(`rue:children:anchor`);return n(s,l),y(()=>{let n=t.children;e(()=>p(n,s,l))}),s})}}),Q=t=>l(r=>{let o=f(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=f(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let c=f(`div`,s);n(s,c);let u=f(`h2`,c);n(c,u),i(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(u,h(`# `));let d=a(`rue:slot:anchor`);n(u,d),y(()=>{let n=t.title;e(()=>p(n,u,d))});let m=a(`rue:slot:anchor`);n(c,m),y(()=>{let r=t.summary?l(()=>{let r=_(),o=f(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),y(()=>{let n=t.summary;e(()=>p(n,o,s))}),r}):``;e(()=>p(r,c,m))});let v=a(`rue:component:anchor`);n(o,v),y(()=>{let n=g(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>p(n,o,v))});let b=a(`rue:slot:anchor`);return n(o,b),y(()=>{let r=t.tab.value===`preview`?t.preview():l(()=>{let r=_(),i=a(`rue:component:anchor`);return n(r,i),y(()=>{let n=g(T,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>p(n,r,i))}),r});e(()=>p(r,o,b))}),o}),ce=t=>l(r=>{let o=f(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=f(`table`,o);n(o,s),i(s,`table table-zebra`);let c=f(`thead`,s);n(s,c);let d=f(`tr`,c);n(c,d);let m=f(`th`,d);n(d,m),n(m,h(`属性`));let g=f(`th`,d);n(d,g),n(g,h(`说明`));let v=f(`th`,d);n(d,v),n(v,h(`类型`));let b=f(`th`,d);n(d,b),n(b,h(`默认值`));let S=f(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return y(()=>{T=x({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{p(l(()=>{let r=_(),i=f(`tr`,r);n(r,i),y(()=>{u(i,`key`,String(t.prop))});let o=f(`td`,i);n(i,o);let s=f(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),y(()=>{let n=t.prop;e(()=>p(n,s,c))});let l=f(`td`,i);n(i,l);let d=a(`rue:slot:anchor`);n(l,d),y(()=>{let n=t.description;e(()=>p(n,l,d))});let m=f(`td`,i);n(i,m);let h=f(`code`,m);n(m,h);let g=a(`rue:slot:anchor`);n(h,g),y(()=>{let n=t.type;e(()=>p(n,h,g))});let v=f(`td`,i);n(i,v);let b=f(`code`,v);n(v,b);let x=a(`rue:slot:anchor`);return n(b,x),y(()=>{let n=t.defaultValue;e(()=>p(n,b,x))}),r}),r,i)}})}),o}),$=t=>l(r=>{let o=f(`div`,r);y(()=>{i(o,`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)] ${t.className??``}`.trim())});let s=f(`div`,o);n(o,s),i(s,`flex items-start justify-between gap-3`);let c=f(`div`,s);n(s,c);let u=f(`div`,c);n(c,u),i(u,`text-sm font-semibold leading-6`);let d=a(`rue:slot:anchor`);n(u,d),y(()=>{let n=t.title;e(()=>p(n,u,d))});let m=a(`rue:slot:anchor`);n(c,m),y(()=>{let r=t.detail?l(()=>{let r=_(),o=f(`div`,r);n(r,o),i(o,`mt-1 text-xs leading-5 opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),y(()=>{let n=t.detail;e(()=>p(n,o,s))}),r}):``;e(()=>p(r,c,m))});let h=a(`rue:slot:anchor`);return n(s,h),y(()=>{let r=t.tag?l(()=>{let r=_(),i=a(`rue:component:anchor`);return n(r,i),y(()=>{let n=g(k,{outline:!0,children:t.tag});e(()=>p(n,r,i))}),r}):``;e(()=>p(r,s,h))}),o}),le=[{prop:`gutter`,description:`栅格间距，支持单值、[水平, 垂直]，以及按断点配置的对象写法`,type:`number | string | ResponsiveValue | [ResponsiveValue, ResponsiveValue]`,defaultValue:`-`},{prop:`justify`,description:`主轴对齐方式，覆盖常见的 start / center / end / evenly 语义`,type:`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'`,defaultValue:`start`},{prop:`align`,description:`交叉轴对齐方式`,type:`'top' | 'middle' | 'bottom' | 'stretch'`,defaultValue:`top`},{prop:`wrap`,description:`是否允许自动换行`,type:`boolean`,defaultValue:`true`},{prop:`className / style`,description:`根节点样式扩展，使用 Rue 一贯的 class 直连能力`,type:`string / Record<string, any>`,defaultValue:`-`}],ue=[{prop:`span`,description:`24 栅格占位数，0 表示隐藏当前列`,type:`number`,defaultValue:`-`},{prop:`offset`,description:`在当前列左侧追加空白栅格`,type:`number`,defaultValue:`0`},{prop:`order`,description:`通过 flex order 调整显示顺序`,type:`number`,defaultValue:`-`},{prop:`push / pull`,description:`相对当前列原位向右或向左推移指定栅格数`,type:`number`,defaultValue:`0`},{prop:`flex`,description:`支持 number、固定宽度字符串、auto 和 none，用于混合弹性布局`,type:`number | string`,defaultValue:`-`},{prop:`xs ~ xxl`,description:`断点覆盖，支持直接传 span 数值，或传入包含 span / order / offset / push / pull / flex 的对象`,type:`number | { span?: number; order?: number; offset?: number; push?: number; pull?: number; flex?: number | string }`,defaultValue:`-`},{prop:`className / style`,description:`列节点样式扩展`,type:`string / Record<string, any>`,defaultValue:`-`}],de=`import { Grid } from '@rue-js/design'

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
</Grid>`,ge=()=>{let{tabBasic:r,tabResponsive:o,tabAlignment:s,tabFlex:u,tabDashboard:d}=b(`useSetup:0:0`,()=>c(()=>({tabBasic:b(`ref:1:0`,()=>t(`preview`)),tabResponsive:b(`ref:1:1`,()=>t(`preview`)),tabAlignment:b(`ref:1:2`,()=>t(`preview`)),tabFlex:b(`ref:1:3`,()=>t(`preview`)),tabDashboard:b(`ref:1:4`,()=>t(`preview`))})));return l(t=>{let c=_(),m=a(`rue:component:anchor`);return n(c,m),p(g(A,{children:l(()=>{let t=_(),c=f(`div`,t);n(t,c),i(c,`max-w-none prose prose-sm md:prose-base`);let l=f(`h1`,c);n(c,l),n(l,h(`Grid 栅格`));let m=f(`p`,c);n(c,m),i(m,`mt-3 mb-3 text-sm`),n(m,h(`Grid 提供接近成熟组件库的 24 栅格 API，用来组织页面骨架、卡片矩阵和左右混排布局。`));let v=f(`p`,c);n(c,v),i(v,`my-3 text-sm opacity-75`),n(v,h(`视觉上使用 Rue 当前的轻量表面体系，能力覆盖 Row / Col、响应式断点、gutter、偏移、 顺序和 flex 混排。`));let b=f(`div`,c);n(c,b),i(b,`not-prose mt-4 flex flex-wrap gap-2`);let x=a(`rue:component:anchor`);n(b,x),y(()=>{let t=g(k,{outline:!0,children:`24 Columns`});e(()=>p(t,b,x))});let S=a(`rue:component:anchor`);n(b,S),y(()=>{let t=g(k,{outline:!0,children:`Responsive`});e(()=>p(t,b,S))});let T=a(`rue:component:anchor`);n(b,T),y(()=>{let t=g(k,{outline:!0,children:`Offset & Order`});e(()=>p(t,b,T))});let O=a(`rue:component:anchor`);n(b,O),y(()=>{let t=g(k,{outline:!0,children:`Flex Mix`});e(()=>p(t,b,O))});let A=a(`rue:component:anchor`);n(c,A),y(()=>{let t=g(Q,{title:`基础 24 栅格`,summary:`先用最直接的 span 心智搭建信息密度，再往上叠加响应式与语义卡片。`,tab:r,code:de,preview:()=>C(`div`,{className:`space-y-5`,children:[w(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:C(Z,{gutter:[16,16],children:[w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`季度销售`,tag:`25%`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`新增用户`,tag:`25%`,className:`from-info/8 to-base-100`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`留存趋势`,tag:`25%`,className:`from-success/8 to-base-100`})}),w(Z.Col,{span:6,children:w($,{title:`span 6`,detail:`投放效率`,tag:`25%`,className:`from-warning/10 to-base-100`})})]})})}),C(Z,{gutter:[16,16],children:[w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`三栏内容区`,tag:`33%`})}),w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`更适合导航+内容+侧栏`,tag:`33%`,className:`from-primary/8 to-base-100`})}),w(Z.Col,{span:8,children:w($,{title:`span 8`,detail:`与 Card、Stat 组合最常用`,tag:`33%`,className:`from-secondary/8 to-base-100`})})]})]})});e(()=>p(t,c,A))});let j=a(`rue:component:anchor`);n(c,j),y(()=>{let t=g(Q,{title:`响应式 gutter 与断点覆盖`,summary:`gutter 可以按断点变化，Col 也可以在 xs~xxl 分别覆盖 span 和布局参数。`,tab:o,code:fe,preview:()=>C(`div`,{className:`space-y-4`,children:[w(`div`,{className:`not-prose rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-4 text-sm opacity-75`,children:`缩放窗口时，这组三列会从一列堆叠，逐步过渡到两列和三列，同时间距从紧凑切到宽松。`}),C(Z,{gutter:[{xs:8,md:24},{xs:8,md:24}],children:[w(Z.Col,{xs:24,sm:12,lg:8,children:w($,{title:`Hero 模块`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-primary/10 via-base-100 to-base-200`})}),w(Z.Col,{xs:24,sm:12,lg:8,children:w($,{title:`Insights`,detail:`xs=24, sm=12, lg=8`,tag:`adaptive`,className:`from-info/10 via-base-100 to-base-200`})}),w(Z.Col,{xs:24,lg:8,children:w($,{title:`Ops Panel`,detail:`xs=24, lg=8`,tag:`adaptive`,className:`from-success/10 via-base-100 to-base-200`})})]})]})});e(()=>p(t,c,j))});let M=a(`rue:component:anchor`);n(c,M),y(()=>{let t=g(Q,{title:`对齐、偏移与顺序`,summary:`同一套 Grid 既能做规则矩阵，也能做营销位或时间线这种非对称排布。`,tab:s,code:pe,preview:()=>C(`div`,{className:`space-y-6`,children:[w(D,{className:`bg-base-100 shadow-sm`,children:w(D.Body,{className:`gap-4`,children:C(Z,{gutter:[16,16],justify:`space-between`,align:`bottom`,children:[w(Z.Col,{span:5,children:w($,{title:`Top`,detail:`高度较小`,tag:`A`,className:`h-28`})}),w(Z.Col,{span:5,children:w($,{title:`Middle`,detail:`通过 align=bottom 对齐底边`,tag:`B`,className:`h-40 from-warning/10 to-base-100`})}),w(Z.Col,{span:5,children:w($,{title:`Bottom`,detail:`适合比较型面板`,tag:`C`,className:`h-32 from-secondary/8 to-base-100`})})]})})}),C(Z,{gutter:[16,16],children:[w(Z.Col,{span:6,offset:6,children:w($,{title:`offset 6`,detail:`给主内容留白`,tag:`offset`})}),w(Z.Col,{span:6,order:3,children:w($,{title:`order 3`,detail:`视觉顺序后移`,tag:`order`,className:`from-info/8 to-base-100`})}),w(Z.Col,{span:6,order:2,children:w($,{title:`order 2`,detail:`视觉顺序前置`,tag:`order`,className:`from-success/8 to-base-100`})})]})]})});e(()=>p(t,c,M))});let N=a(`rue:component:anchor`);n(c,N),y(()=>{let t=g(Q,{title:`Flex 混排与不换行轨道`,summary:`当 24 栅格不足以表达固定边栏 + 弹性主内容时，直接切到 flex 语义。`,tab:u,code:me,preview:()=>C(`div`,{className:`space-y-6`,children:[C(Z,{gutter:16,align:`stretch`,children:[w(Z.Col,{flex:`280px`,children:w($,{title:`Fixed rail`,detail:`280px 固定宽度，适合过滤器与导航`,tag:`280px`,className:`h-full from-base-200 to-base-100`})}),w(Z.Col,{flex:`auto`,children:w($,{title:`Fluid canvas`,detail:`auto 吃掉剩余空间，适合主编辑区`,tag:`auto`,className:`h-full from-primary/8 to-base-100`})}),w(Z.Col,{flex:`120px`,children:w($,{title:`Ops`,detail:`固定操作条`,tag:`120px`,className:`h-full from-warning/10 to-base-100`})})]}),C(Z,{gutter:12,wrap:!1,children:[w(Z.Col,{flex:`180px`,children:w($,{title:`No wrap`,detail:`水平工具带`,tag:`rail`})}),w(Z.Col,{flex:`180px`,children:w($,{title:`Keep inline`,detail:`不允许自动换行`,tag:`rail`,className:`from-info/8 to-base-100`})}),w(Z.Col,{flex:`180px`,children:w($,{title:`Sticky group`,detail:`适合顶部命令条`,tag:`rail`,className:`from-secondary/8 to-base-100`})})]})]})});e(()=>p(t,c,N))});let P=a(`rue:component:anchor`);n(c,P),y(()=>{let t=g(Q,{title:`仪表盘实战布局`,summary:`Grid 不是只用来排彩色方块，更适合和 Card、Badge、Button 组合成真实页面骨架。`,tab:d,code:he,preview:()=>C(Z,{gutter:[20,20],children:[w(Z.Col,{xs:24,xl:16,children:w(D,{className:`overflow-hidden bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-5`,children:[C(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Growth cockpit`}),w(`div`,{className:`mt-1 text-sm opacity-70`,children:`一块主画布里继续嵌套 Grid，拆出指标和趋势卡。`})]}),C(`div`,{className:`flex flex-wrap gap-2`,children:[w(k,{outline:!0,children:`Live`}),w(k,{outline:!0,children:`Q2`})]})]}),C(Z,{gutter:[16,16],children:[w(Z.Col,{xs:24,md:12,children:w($,{title:`GMV`,detail:`¥ 4,230,000`,tag:`+18%`,className:`from-primary/10 via-base-100 to-base-200 h-full`})}),w(Z.Col,{xs:24,md:12,children:w($,{title:`Retention`,detail:`71.4%`,tag:`+4.8pt`,className:`from-success/10 via-base-100 to-base-200 h-full`})}),w(Z.Col,{xs:24,children:C(`div`,{className:`rounded-[1.25rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.55)]`,children:[C(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Campaign timeline`}),w(`div`,{className:`mt-1 text-xs leading-5 opacity-70`,children:`用整行展示跨模块趋势和长内容。`})]}),w(E,{color:`primary`,size:`sm`,children:`查看明细`})]}),C(`div`,{className:`mt-4 grid gap-3 md:grid-cols-3`,children:[w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`启动 6 个投放实验`}),w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`完成落地页 AB 版本替换`}),w(`div`,{className:`rounded-box bg-base-200/70 p-4 text-sm`,children:`同步 CRM 标签到投放人群`})]})]})})]})]})})}),w(Z.Col,{xs:24,xl:8,children:w(D,{className:`bg-base-100 shadow-sm`,children:C(D.Body,{className:`gap-4`,children:[C(`div`,{className:`flex items-center justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-sm font-semibold`,children:`Ops queue`}),w(`div`,{className:`mt-1 text-xs opacity-70`,children:`右侧侧栏保持更紧凑的信息节奏。`})]}),w(k,{outline:!0,children:`7 items`})]}),C(`div`,{className:`space-y-3`,children:[w($,{title:`素材审批`,detail:`还剩 2 项待确认`,tag:`Today`,className:`from-warning/10 to-base-100`}),w($,{title:`会员分层`,detail:`等待 CRM 回传标签`,tag:`Sync`,className:`from-info/10 to-base-100`}),w($,{title:`报表快照`,detail:`18:00 自动归档`,tag:`Auto`,className:`from-secondary/10 to-base-100`})]})]})})})]})});e(()=>p(t,c,P))});let F=f(`div`,c);n(c,F),i(F,`component-preview not-prose text-base-content my-8 lg:my-12`);let I=f(`h2`,F);n(F,I),i(I,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(I,h(`# API`));let L=f(`p`,F);n(F,L),i(L,`m-0 text-sm opacity-70`),n(L,h(`默认导出的 Grid 可直接当作 Row 使用，也可以通过 Grid.Row / Grid.Col 显式书写。`));let R=f(`div`,c);n(c,R),i(R,`not-prose space-y-8`);let z=f(`div`,R);n(R,z);let B=f(`h3`,z);n(z,B),i(B,`mb-3 text-base font-semibold`),n(B,h(`Grid / Grid.Row`));let V=a(`rue:component:anchor`);n(z,V),y(()=>{let t=g(ce,{rows:le});e(()=>p(t,z,V))});let H=f(`div`,R);n(R,H);let U=f(`h3`,H);n(H,U),i(U,`mb-3 text-base font-semibold`),n(U,h(`Grid.Col`));let W=a(`rue:component:anchor`);return n(H,W),y(()=>{let t=g(ce,{rows:ue});e(()=>p(t,H,W))}),t})}),c,m),c})};export{ge as default};
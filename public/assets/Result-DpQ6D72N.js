import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,ot as u,s as d,t as f}from"./vapor-runtime-aZAg0Qkw.js";import{a as p,n as m}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as h,i as g}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as _}from"./Code-5DOEyGxf.js";import{t as v}from"./button-DL6BQoU1.js";import{t as y}from"./tabs-CWmjyn0I.js";import{t as b}from"./badge-BESJ10D8.js";import{r as x}from"./SidebarPlaygroundDesign-CS11MI8e.js";var S=(e,t)=>t?`${e} ${t}`:e,C=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>C(e)):!0,w=e=>e==null?`info`:`${e}`,T=e=>e===`403`||e===`404`||e===`500`,E=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,D=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},O=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},k=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},A=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},j=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},M=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},N=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},P=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},F={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},I=({status:e,className:t})=>e===`success`?h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`success`,children:[g(`circle`,{cx:`12`,cy:`12`,r:`9`}),g(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m8.4 12.3 2.4 2.4 4.8-5.1`})]}):e===`warning`?h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`warning`,children:[g(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 4.5 20 18.5H4L12 4.5Z`}),g(`path`,{strokeLinecap:`round`,d:`M12 9.5v4.8`}),g(`circle`,{cx:`12`,cy:`16.9`,r:`0.9`,fill:`currentColor`,stroke:`none`})]}):e===`error`?h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`error`,children:[g(`circle`,{cx:`12`,cy:`12`,r:`9`}),g(`path`,{strokeLinecap:`round`,d:`m9 9 6 6M15 9l-6 6`})]}):h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`info`,children:[g(`circle`,{cx:`12`,cy:`12`,r:`9`}),g(`path`,{strokeLinecap:`round`,d:`M12 10.2v5.2`}),g(`circle`,{cx:`12`,cy:`7.4`,r:`0.9`,fill:`currentColor`,stroke:`none`})]}),L=({status:e,tone:t,className:n,style:r,size:i=`md`})=>{let a=F[e];return h(`div`,{className:S(`relative mx-auto w-full ${P(i)}`,n),style:r,"data-rue-result-illustration":e,children:[g(`div`,{"aria-hidden":`true`,className:`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${O(t)}`}),h(`div`,{className:`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`,children:[g(`div`,{"aria-hidden":`true`,className:`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`}),g(`div`,{"aria-hidden":`true`,className:`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`}),h(`div`,{className:`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`,children:[h(`div`,{className:`flex items-center justify-between gap-3`,children:[g(`span`,{className:`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${A(t)}`,children:a.label}),g(`span`,{className:`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`,children:`Rue Result`})]}),h(`div`,{className:`mt-5 flex items-end justify-between gap-4`,children:[h(`div`,{className:`min-w-0`,children:[g(`div`,{className:`text-[4rem] font-black leading-none tracking-[-0.1em] ${k(t)}`,children:e}),g(`div`,{className:`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`,children:a.scene})]}),g(`div`,{className:`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${A(t)}`,children:g(I,{status:t,className:`size-7`})})]})]})]})]})},R=(e,t,n)=>T(e)?g(L,{status:e,tone:t,size:n}):g(`div`,{className:`grid place-items-center border ${A(t)} ${N(n)}`,"data-rue-result-icon":`true`,children:g(I,{status:t,className:M(n)})}),z=Object.assign(({status:e=`info`,icon:t,title:n,subTitle:r,extra:i,children:a,variant:o=`surface`,size:s=`md`,align:c=`center`,showIcon:l=!0,bordered:u=!0,role:d=`status`,className:f,style:p,iconClassName:m,iconStyle:_,contentClassName:v,contentStyle:y,titleClassName:b,titleStyle:x,subTitleClassName:k,subTitleStyle:A,extraClassName:M,extraStyle:N,bodyClassName:P,bodyStyle:I,...L})=>{let z=w(e),B=E(z),V=T(z)?F[z]:void 0,H=n??V?.title,U=r??V?.subTitle,W=l===!1||t===null||t===!1,G=t!=null&&t!==!1?t:R(z,B,s),K=c===`start`?`items-start text-left`:`items-center text-center`,q=c===`start`?`items-start text-left`:`items-center text-center`,J=c===`start`?`justify-start`:`justify-center`,Y=C(a);return h(`section`,{role:d,className:S(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${c===`start`?`text-left`:`text-center`} ${D(o,u)}`,f),style:p,"data-rue-status":z,"data-rue-tone":B,...L,children:[g(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${O(B)}`}),h(`div`,{className:S(`relative flex w-full flex-col gap-5 ${K}`,v),style:y,children:[W?null:g(`div`,{className:m,style:_,"data-rue-result-icon-slot":`true`,children:G}),H!=null||U!=null?h(`div`,{className:`flex w-full max-w-3xl flex-col gap-2 ${q}`,children:[H==null?null:g(`div`,{className:S(`${j(s)} font-semibold leading-tight tracking-[-0.02em]`,b),style:x,children:H}),U==null?null:g(`div`,{className:S(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,k),style:A,children:U})]}):null,i==null?null:g(`div`,{className:S(`flex w-full flex-wrap gap-3 ${J}`,M),style:N,"data-rue-result-extra":`true`,children:i}),Y?g(`div`,{className:S(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,P),style:I,"data-rue-result-body":`true`,children:a}):null]})]})},{PRESENTED_IMAGE_403:e=>g(L,{...e,status:`403`,tone:`warning`}),PRESENTED_IMAGE_404:e=>g(L,{...e,status:`404`,tone:`info`}),PRESENTED_IMAGE_500:e=>g(L,{...e,status:`500`,tone:`error`})}),B=r=>l(u=>{let p=e(`div`,u);s(p,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=e(`div`,p);a(p,m),s(m,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,m);a(m,h);let g=e(`h2`,h);a(h,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let v=o(`rue:slot:anchor`);a(g,v),i(()=>{let e=r.title;t(()=>d(e,g,v))});let b=o(`rue:slot:anchor`);a(h,b),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>d(e,l,u))}),c}):``;t(()=>d(c,h,b))});let x=o(`rue:component:anchor`);a(p,x),i(()=>{let e=f(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>d(e,p,x))});let S=o(`rue:slot:anchor`);return a(p,S),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=f(_,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>d(n,e,s))}),e});t(()=>d(e,p,S))}),p}),V=r=>l(f=>{let p=e(`div`,f);s(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let h=e(`table`,p);a(p,h),s(h,`table table-zebra`);let g=e(`thead`,h);a(h,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,c(`属性`));let y=e(`th`,_);a(_,y),a(y,c(`说明`));let b=e(`th`,_);a(_,b),a(b,c(`类型`));let x=e(`th`,_);a(_,x),a(x,c(`默认值`));let S=e(`tbody`,h);a(h,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=m({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,f,p)=>{d(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{u(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let f=e(`code`,l);a(l,f);let p=o(`rue:slot:anchor`);a(f,p),i(()=>{let e=r.prop;t(()=>d(e,f,p))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>d(e,b,x))}),s}),s,c)}})}),p}),H=()=>l(t=>{let n=e(`svg`,t);u(n,`xmlns`,`http://www.w3.org/2000/svg`),u(n,`viewBox`,`0 0 24 24`),u(n,`fill`,`none`),u(n,`stroke`,`currentColor`),u(n,`strokeWidth`,`1.8`),s(n,`size-10`);let r=e(`path`,n);a(n,r),u(r,`strokeLinecap`,`round`),u(r,`strokeLinejoin`,`round`),u(r,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let i=e(`path`,n);a(n,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`M13.3 5.7 18.2 10.6`);let o=e(`path`,n);a(n,o),u(o,`strokeLinecap`,`round`),u(o,`strokeLinejoin`,`round`),u(o,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let c=e(`circle`,n);return a(n,c),u(c,`cx`,`14.6`),u(c,`cy`,`9.4`),u(c,`r`,`1.3`),n}),U=()=>l(t=>{let n=e(`svg`,t);u(n,`xmlns`,`http://www.w3.org/2000/svg`),u(n,`viewBox`,`0 0 24 24`),u(n,`fill`,`none`),u(n,`stroke`,`currentColor`),u(n,`strokeWidth`,`1.8`),s(n,`size-10`);let r=e(`circle`,n);a(n,r),u(r,`cx`,`12`),u(r,`cy`,`12`),u(r,`r`,`8.5`);let i=e(`path`,n);return a(n,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),n}),W=()=>l(t=>{let n=e(`svg`,t);u(n,`xmlns`,`http://www.w3.org/2000/svg`),u(n,`viewBox`,`0 0 24 24`),u(n,`fill`,`none`),u(n,`stroke`,`currentColor`),u(n,`strokeWidth`,`1.8`),s(n,`size-10`);let r=e(`path`,n);a(n,r),u(r,`strokeLinecap`,`round`),u(r,`strokeLinejoin`,`round`),u(r,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let i=e(`path`,n);a(n,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let o=e(`path`,n);return a(n,o),u(o,`strokeLinecap`,`round`),u(o,`strokeLinejoin`,`round`),u(o,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),n}),G=`const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.3 5.7 18.2 10.6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4" />
    <circle cx="14.6" cy="9.4" r="1.3" />
  </svg>
)`,K=`const CompassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <circle cx="12" cy="12" r="8.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z" />
  </svg>
)`,q=`const ShieldWaveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5" />
  </svg>
)`,J=p(`ref:1:0`,()=>r(`preview`)),Y=p(`ref:1:1`,()=>r(`preview`)),X=p(`ref:1:2`,()=>r(`preview`)),Z=p(`ref:1:3`,()=>r(`preview`)),Q=p(`ref:1:4`,()=>r(`preview`)),$=p(`ref:1:5`,()=>r(`preview`)),ee=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保留边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，兼容操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],te=()=>l(r=>{let u=n(),p=o(`rue:component:anchor`);return a(u,p),d(f(x,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,l);a(l,u),a(u,c(`Result 结果页`));let p=e(`p`,l);a(l,p),s(p,`text-sm mt-3 mb-3`),a(p,c(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let m=e(`p`,l);a(l,m),s(m,`text-sm opacity-75`),a(m,c(`这次补齐参考了成熟结果页组件的能力面，但视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let _=o(`rue:component:anchor`);a(l,_),i(()=>{let e=f(B,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:J,preview:()=>h(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[g(z,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),g(z,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),g(z,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),g(z,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 xl:grid-cols-2">
  <Result
    size="sm"
    status="success"
    title="发布成功"
    subTitle="新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。"
  />
  <Result
    size="sm"
    status="info"
    title="等待同步"
    subTitle="任务已经入队，系统会在资源空闲时继续处理。"
  />
  <Result
    size="sm"
    status="warning"
    title="仍需人工确认"
    subTitle="检测到配置变更涉及生产环境，请由值班同学完成最终审核。"
  />
  <Result
    size="sm"
    status="error"
    title="校验失败"
    subTitle="依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。"
  />
</div>
`});t(()=>d(e,l,_))});let y=o(`rue:component:anchor`);a(l,y),i(()=>{let e=f(B,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:Y,preview:()=>h(`div`,{className:`grid gap-5`,children:[g(z,{status:403,extra:g(v,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),h(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[g(z,{status:404,size:`sm`,extra:[g(v,{color:`primary`,children:`返回首页`},`home`),g(v,{type:`outlined`,children:`搜索文档`},`search`)]}),g(z,{status:500,size:`sm`,extra:[g(v,{color:`primary`,children:`重试请求`},`retry`),g(v,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

<div className="grid gap-5">
  <Result
    status={403}
    extra={<Button color="primary">申请访问</Button>}
    className="min-h-[26rem]"
  />
  <div className="grid gap-5 xl:grid-cols-2">
    <Result
      status={404}
      size="sm"
      extra={[
        <Button color="primary" key="home">返回首页</Button>,
        <Button type="outlined" key="search">搜索文档</Button>,
      ]}
    />
    <Result
      status={500}
      size="sm"
      extra={[
        <Button color="primary" key="retry">重试请求</Button>,
        <Button type="text" key="log">查看日志</Button>,
      ]}
    />
  </div>
</div>
`});t(()=>d(e,l,y))});let x=o(`rue:component:anchor`);a(l,x),i(()=>{let e=f(B,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:X,preview:()=>g(z,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[g(v,{color:`primary`,children:`前往控制台`},`console`),g(v,{type:`outlined`,children:`配置快照`},`snapshot`)],children:h(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[h(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[g(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),g(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),g(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),h(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[g(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),h(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,g(b,{color:`success`,children:`HTTPS`})]}),g(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),h(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[g(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),h(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[g(`li`,{children:`建议补充管理员手机号`}),g(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

<Result
  status="success"
  title="云主机已开通"
  subTitle="订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。"
  extra={[
    <Button color="primary" key="console">前往控制台</Button>,
    <Button type="outlined" key="snapshot">配置快照</Button>,
  ]}
>
  <div className="grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">实例规格</div>
      <div className="mt-2 text-lg font-semibold">4C8G / 华东 2</div>
      <div className="mt-1 text-sm opacity-65">自动扩容策略已启用</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">公网访问</div>
      <div className="mt-2 flex items-center gap-2 text-lg font-semibold">
        已开启
        <Badge color="success">HTTPS</Badge>
      </div>
      <div className="mt-1 text-sm opacity-65">默认指向 preview.rue.dev</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">提醒</div>
      <ul className="mt-2 m-0 pl-5 text-sm leading-7 opacity-80">
        <li>建议补充管理员手机号</li>
        <li>七天后会触发成本周报</li>
      </ul>
    </div>
  </div>
</Result>
`});t(()=>d(e,l,x))});let S=o(`rue:component:anchor`);a(l,S),i(()=>{let e=f(B,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保留标题、动作和补充文案。`,tab:Z,preview:()=>h(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[g(z,{status:`info`,icon:g(H,{}),title:`迁移任务已排定`,subTitle:`冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。`,extra:g(v,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),g(z,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[g(v,{type:`outlined`,children:`切换分支`},`branch`),g(v,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

${G}

<div className="grid gap-5 xl:grid-cols-2">
  <Result
    status="info"
    icon={<RocketIcon />}
    title="迁移任务已排定"
    subTitle="冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。"
    extra={<Button color="primary">查看任务看板</Button>}
    variant="soft"
  />
  <Result
    status="warning"
    showIcon={false}
    title="你正在使用只读副本"
    subTitle="当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。"
    extra={[
      <Button type="outlined" key="branch">切换分支</Button>,
      <Button type="text" key="sandbox">申请沙箱</Button>,
    ]}
    variant="outline"
  />
</div>
`});t(()=>d(e,l,S))});let C=o(`rue:component:anchor`);a(l,C),i(()=>{let e=f(B,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:Q,preview:()=>h(`div`,{className:`grid gap-5`,children:[g(z,{status:`success`,icon:g(W,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),h(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[g(z,{status:`info`,size:`sm`,variant:`soft`,icon:g(U,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:g(v,{color:`primary`,children:`查看接入清单`})}),g(z,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:g(v,{type:`outlined`,children:`打开故障时间线`}),children:h(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[g(`div`,{children:`node-sh-02: checksum mismatch`}),g(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

${K}

${q}

<div className="grid gap-5">
  <Result
    status="success"
    icon={<ShieldWaveIcon />}
    title="安全基线已更新"
    subTitle="所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。"
    variant="surface"
  />
  <div className="grid gap-5 xl:grid-cols-2">
    <Result
      status="info"
      size="sm"
      variant="soft"
      icon={<CompassIcon />}
      title="推荐下一步：整理路由入口"
      subTitle="新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。"
      align="start"
      extra={<Button color="primary">查看接入清单</Button>}
    />
    <Result
      status="error"
      size="sm"
      variant="outline"
      title="回滚未完成"
      subTitle="2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。"
      align="start"
      extra={<Button type="outlined">打开故障时间线</Button>}
    >
      <div className="grid gap-2 text-sm leading-7 opacity-80">
        <div>node-sh-02: checksum mismatch</div>
        <div>node-bj-05: waiting runtime restart</div>
      </div>
    </Result>
  </div>
</div>
`});t(()=>d(e,l,C))});let w=o(`rue:component:anchor`);a(l,w),i(()=>{let e=f(B,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:$,preview:()=>h(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[h(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[g(z.PRESENTED_IMAGE_403,{size:`sm`}),g(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),h(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[g(z.PRESENTED_IMAGE_404,{size:`sm`}),g(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),h(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[g(z.PRESENTED_IMAGE_500,{size:`sm`}),g(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 md:grid-cols-3">
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_403 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_403</div>
  </div>
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_404 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_404</div>
  </div>
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_500 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_500</div>
  </div>
</div>
`});t(()=>d(e,l,w))});let T=e(`h2`,l);a(l,T),s(T,`mt-10`),a(T,c(`API`));let E=o(`rue:component:anchor`);a(l,E),i(()=>{let e=f(V,{rows:ee});t(()=>d(e,l,E))});let D=e(`p`,l);return a(l,D),s(D,`text-sm opacity-70 mt-4`),a(D,c(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),r})}),u,p),u});export{te as default};
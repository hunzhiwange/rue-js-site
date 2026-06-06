import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-ACs_OvwU.js";import{a as h,n as g}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as _,t as v}from"./src-B0RvnZVV.js";import{n as y}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as b}from"./Code-CliOXHNE.js";import{t as x}from"./button-C6eHAAtW.js";import{t as S}from"./tabs-CPymQe79.js";var C=[`input`,`select`,`textarea`,`checkbox`,`toggle`],w=(...e)=>e.filter(Boolean).join(` `),T=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),E=e=>{let t=T(e);return C.find(e=>t.has(e))},D=(e,t,n)=>{if(t)return t;let r=E(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},O=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),k=(e,t,n,r)=>{let i=T(r);return w(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},A=e=>Array.isArray(e)?e.map((e,t)=>v(`span`,{className:`block`,children:e},`validator-line-${t}`)):e,j=({as:e,appearance:t,size:n,status:r,className:i,children:a,...o})=>{let s=D(e,t,i),c=O(e,s),l=k(s,n,r,i);return c===`select`?v(`select`,{...o,className:l,children:a}):c===`textarea`?v(`textarea`,{...o,className:l,children:a}):v(`input`,{...o,className:l})},M=({as:e=`p`,className:t,children:n,hideUntilInvalid:r,lines:i,...a})=>v(e,{...a,className:w(`validator-hint`,r?`hidden`:void 0,t),children:i?.length?A(i):n}),N=(e,t)=>w(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),P=Object.assign(j,{Hint:M,Field:({fieldAs:e=`fieldset`,className:t,controlClassName:n,label:r,labelClassName:i,hint:a,hintAs:o=`p`,hintClassName:s,hideHintWhenValid:c,extra:l,extraClassName:u,requiredMark:d,id:f,children:p,...m})=>{let h=e,g=typeof f==`string`&&f.trim()?f:void 0,y=g&&a!=null&&m[`aria-describedby`]==null?`${g}-hint`:void 0,b=m[`aria-describedby`]??y,x=d??m.required===!0;return _(h,{className:N(e,t),children:[r==null?null:_(`label`,{className:w(`label`,i),for:g,children:[v(`span`,{children:r}),x?v(`span`,{className:`text-error`,"aria-hidden":`true`,children:`*`}):null]}),v(j,{...m,id:g,"aria-describedby":b,className:n,children:p}),a==null?null:v(M,{id:y,as:o,className:s,hideUntilInvalid:c,children:A(a)}),l==null?null:v(`p`,{className:w(`label text-xs opacity-70`,u),children:A(l)})]})}}),F=e=>c(t=>{let a=i(`div`,t);p(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=i(`div`,a);r(a,s),p(s,`flex flex-wrap items-start justify-between gap-3`);let h=i(`div`,s);r(s,h);let g=i(`h2`,h);r(h,g),p(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;m(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(h,v),l(()=>{let t=e.summary?c(()=>{let t=n(),a=i(`p`,t);r(t,a),p(a,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(a,s),l(()=>{let t=e.summary;m(()=>u(t,a,s))}),t}):``;m(()=>u(t,h,v))});let y=o(`rue:component:anchor`);r(a,y),l(()=>{let t=f(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});m(()=>u(t,a,y))});let x=o(`rue:slot:anchor`);return r(a,x),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=f(b,{className:`mt-2`,lang:`tsx`,code:e.code});m(()=>u(n,t,i))}),t});m(()=>u(t,a,x))}),a}),I=t=>c(a=>{let s=i(`div`,a);p(s,`not-prose my-6 lg:my-8`);let f=i(`h3`,s);r(s,f),p(f,`mt-0 mb-3 text-base font-semibold text-base-content`);let h=o(`rue:slot:anchor`);r(f,h),l(()=>{let e=t.title;m(()=>u(e,f,h))});let _=i(`div`,s);r(s,_),p(_,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let v=i(`table`,_);r(_,v),p(v,`table table-zebra`);let y=i(`thead`,v);r(v,y);let b=i(`tr`,y);r(y,b);let x=i(`th`,b);r(b,x),r(x,d(`属性`));let S=i(`th`,b);r(b,S),r(S,d(`说明`));let C=i(`th`,b);r(b,C),r(C,d(`类型`));let w=i(`th`,b);r(b,w),r(w,d(`默认值`));let T=i(`tbody`,v);r(v,T);let E=o(`rue:list:start`),D=o(`rue:list:end`);r(T,E),r(T,D);let O=new Map;return l(()=>{O=g({items:t.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(t,a,s,d,f)=>{u(c(()=>{let a=n(),s=i(`tr`,a);r(a,s),l(()=>{e(s,`key`,String(t.prop))});let c=i(`td`,s);r(s,c);let d=i(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;m(()=>u(e,d,f))});let p=i(`td`,s);r(s,p);let h=o(`rue:slot:anchor`);r(p,h),l(()=>{let e=t.description;m(()=>u(e,p,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;m(()=>u(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;m(()=>u(e,b,x))}),a}),a,s)}})}),s}),L=(e,t)=>{let n=e.currentTarget;n&&(t.value=!n.checkValidity())},R=(e,t)=>{t.value=!0},z=e=>{e.preventDefault()},ee=()=>{let{invalid:e}=h(`useSetup:0:0`,()=>t(()=>({invalid:h(`ref:1:0`,()=>s(!1))})));return c(t=>{let n=i(`form`,t);p(n,`grid gap-2`),a(n,`submit`,z);let s=o(`rue:component:anchor`);r(n,s),l(()=>{let t=f(P,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":e.value?`true`:`false`,onInvalid:t=>R(t,e),onInput:t=>L(t,e),onBlur:t=>L(t,e)});m(()=>u(t,n,s))});let c=o(`rue:component:anchor`);r(n,c),l(()=>{let e=f(P.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});m(()=>u(e,n,c))});let d=o(`rue:component:anchor`);return r(n,d),u(f(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),n,d),n})},te=()=>{let{invalid:e}=h(`useSetup:0:0:dup1`,()=>t(()=>({invalid:h(`ref:1:1`,()=>s(!1))})));return c(t=>{let n=i(`form`,t);p(n,`grid gap-2`),a(n,`submit`,z);let s=o(`rue:component:anchor`);r(n,s),l(()=>{let t=f(P,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":e.value?`true`:`false`,onInvalid:t=>R(t,e),onInput:t=>L(t,e),onBlur:t=>L(t,e)});m(()=>u(t,n,s))});let c=o(`rue:component:anchor`);r(n,c),l(()=>{let e=f(P.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});m(()=>u(e,n,c))});let d=o(`rue:component:anchor`);return r(n,d),u(f(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),n,d),n})},ne=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],re=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],B=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],V=()=>{let{tabBasic:e,tabHosts:a,tabRules:g,tabStatus:b,tabField:S,tabForm:C}=h(`useSetup:0:0:dup2`,()=>t(()=>({tabBasic:h(`ref:1:2`,()=>s(`preview`)),tabHosts:h(`ref:1:3`,()=>s(`preview`)),tabRules:h(`ref:1:4`,()=>s(`preview`)),tabStatus:h(`ref:1:5`,()=>s(`preview`)),tabField:h(`ref:1:6`,()=>s(`preview`)),tabForm:h(`ref:1:7`,()=>s(`preview`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(y,{children:c(()=>{let t=n(),s=i(`div`,t);r(t,s),p(s,`max-w-none prose prose-sm md:prose-base`);let c=i(`h1`,s);r(s,c),r(c,d(`Validator 校验辅助`));let h=i(`p`,s);r(s,h),p(h,`text-sm mt-3 mb-3`),r(h,d(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let y=i(`code`,h);r(h,y),r(y,d(`className="input validator"`)),r(h,d(`写法继续可用，但现在也可以直接通过`));let w=i(`code`,h);r(h,w),r(w,d(`appearance`)),r(h,d(`、`));let T=i(`code`,h);r(h,T),r(T,d(`size`)),r(h,d(`、`));let E=i(`code`,h);r(h,E),r(E,d(`status`)),r(h,d(`和`));let D=i(`code`,h);r(h,D),r(D,d(`Field`)),r(h,d(`组合件来组织更完整的表单场景。`));let O=i(`div`,s);r(s,O),p(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=i(`div`,O);r(O,k);let A=i(`div`,k);r(k,A),p(A,`font-medium text-base-content`),r(A,d(`原生校验优先`));let j=i(`div`,k);r(k,j),p(j,`mt-1 opacity-70`),r(j,d(`继续依赖 required、pattern、minLength 等原生约束。`));let M=i(`div`,O);r(O,M);let N=i(`div`,M);r(M,N),p(N,`font-medium text-base-content`),r(N,d(`语义外观补齐`));let L=i(`div`,M);r(M,L),p(L,`mt-1 opacity-70`),r(L,d(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let R=i(`div`,O);r(O,R);let z=i(`div`,R);r(R,z),p(z,`font-medium text-base-content`),r(z,d(`表单结构复用`));let V=i(`div`,R);r(R,V),p(V,`mt-1 opacity-70`),r(V,d(`Field 统一 label、hint、extra 和基础可访问性连线。`));let H=o(`rue:component:anchor`);r(s,H),l(()=>{let t=f(F,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:e,preview:()=>_(`form`,{className:`grid w-full max-w-xs gap-2`,children:[v(P,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),v(P.Hint,{children:`Enter valid email address`}),v(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});m(()=>u(t,s,H))});let U=o(`rue:component:anchor`);r(s,U),l(()=>{let e=f(F,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:a,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[_(`div`,{className:`grid gap-2`,children:[_(P,{as:`select`,appearance:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`tabs`,children:`Tabs`}),v(`option`,{value:`spaces`,children:`Spaces`})]}),v(P.Hint,{children:`Required`})]}),_(`div`,{className:`grid gap-2`,children:[v(P,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),v(P.Hint,{children:`Required`})]}),_(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(P,{appearance:`checkbox`,type:`checkbox`,required:!0}),v(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),_(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),v(P,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});m(()=>u(e,s,U))});let W=o(`rue:component:anchor`);r(s,W),l(()=>{let e=f(F,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:g,preview:()=>_(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[v(ee,{}),v(te,{})]}),code:`const syncNativeValidity = (event: Event, invalidRef: { value: boolean }) => {
  const field = event.currentTarget as HTMLInputElement | null
  if (!field) return
  invalidRef.value = !field.checkValidity()
}

const syncNativeInvalid = (_event: Event, invalidRef: { value: boolean }) => {
  invalidRef.value = true
}

const passwordInvalid = ref(false)
const usernameInvalid = ref(false)

<form className="grid gap-2" onSubmit={event => event.preventDefault()}>
  <Validator
    appearance="input"
    type="password"
    required={true}
    minLength={8}
    pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must include number, lowercase and uppercase letters"
    placeholder="Password"
    aria-invalid={passwordInvalid.value ? 'true' : 'false'}
    onInvalid={(event: Event) => syncNativeInvalid(event, passwordInvalid)}
    onInput={(event: Event) => syncNativeValidity(event, passwordInvalid)}
    onBlur={(event: Event) => syncNativeValidity(event, passwordInvalid)}
  />
  <Validator.Hint
    hideUntilInvalid={true}
    lines={['Must be at least 8 characters', 'Must include number, lowercase and uppercase letters']}
  />
  <Button htmlType="submit" size="sm" className="w-fit">
    Check password
  </Button>
</form>

<form className="grid gap-2" onSubmit={event => event.preventDefault()}>
  <Validator
    appearance="input"
    type="text"
    required={true}
    minLength={3}
    maxLength={30}
    pattern="[A-Za-z0-9-]+"
    title="Only letters, numbers or dash"
    placeholder="Username"
    aria-invalid={usernameInvalid.value ? 'true' : 'false'}
    onInvalid={(event: Event) => syncNativeInvalid(event, usernameInvalid)}
    onInput={(event: Event) => syncNativeValidity(event, usernameInvalid)}
    onBlur={(event: Event) => syncNativeValidity(event, usernameInvalid)}
  />
  <Validator.Hint
    hideUntilInvalid={true}
    lines={['Must be 3 to 30 characters', 'Only letters, numbers or dash']}
  />
  <Button htmlType="submit" size="sm" className="w-fit">
    Check username
  </Button>
</form>`});m(()=>u(e,s,W))});let G=o(`rue:component:anchor`);r(s,G),l(()=>{let e=f(F,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:b,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[v(P.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),v(P.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),_(P.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[v(`option`,{children:`Stable`}),v(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
  id="validator-status-error"
  label="Workspace slug"
  hint="Already taken on the edge cluster"
  appearance="input"
  size="sm"
  status="error"
  defaultValue="rue-design"
/>

<Validator.Field
  id="validator-status-warning"
  label="Notification email"
  hint="MX record is still being verified"
  appearance="input"
  status="warning"
  defaultValue="team@rue.dev"
/>

<Validator.Field
  id="validator-status-success"
  label="Release channel"
  hint="Synced with the latest deployment policy"
  appearance="select"
  as="select"
  size="lg"
  status="success"
>
  <option>Stable</option>
  <option>Canary</option>
</Validator.Field>`});m(()=>u(e,s,G))});let K=o(`rue:component:anchor`);r(s,K),l(()=>{let e=f(F,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:S,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[v(P.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),_(P.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`utc+8`,children:`UTC +8`}),v(`option`,{value:`utc`,children:`UTC`})]}),v(P.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
  id="validator-field-email"
  label="Project email"
  hint="Use your workspace mailbox"
  extra="This address is used for deployment notifications."
  appearance="input"
  type="email"
  required={true}
  placeholder="release@rue.dev"
  hideHintWhenValid={true}
/>

<Validator.Field
  id="validator-field-timezone"
  label="Timezone"
  hint="Required"
  appearance="select"
  as="select"
  required={true}
>
  <option value="">Choose:</option>
  <option value="utc+8">UTC +8</option>
  <option value="utc">UTC</option>
</Validator.Field>

<Validator.Field
  id="validator-field-bio"
  label="Deployment note"
  hint={['Keep it under 140 characters', 'Mention rollback owner if needed']}
  appearance="textarea"
  as="textarea"
  rows={4}
  placeholder="What changed in this release?"
  fieldAs="div"
  className="rounded-box border border-base-300 bg-base-100 p-4"
  controlClassName="w-full"
/>
`});m(()=>u(e,s,K))});let q=o(`rue:component:anchor`);r(s,q),l(()=>{let e=f(F,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:C,preview:()=>_(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[v(P.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),v(P.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),_(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[v(x,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),v(x,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
  <Validator.Field
    id="validator-login-email"
    label="Email"
    hint="Required"
    appearance="input"
    type="email"
    required={true}
    placeholder="mail@site.com"
    hideHintWhenValid={true}
  />

  <Validator.Field
    id="validator-login-password"
    label="Password"
    hint={['At least 8 characters', 'Contains uppercase, lowercase and a number']}
    appearance="input"
    type="password"
    required={true}
    minLength={8}
    pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    placeholder="Password"
    hideHintWhenValid={true}
  />

  <div className="grid gap-2 sm:grid-cols-2">
    <Button color="primary" htmlType="submit" block={true}>Login</Button>
    <Button type="text" htmlType="reset" block={true}>Reset</Button>
  </div>
</form>`});m(()=>u(e,s,q))});let J=i(`div`,s);r(s,J),p(J,`my-8 lg:my-12`);let Y=i(`h2`,J);r(J,Y),r(Y,d(`API`));let X=i(`p`,J);r(J,X),p(X,`text-sm opacity-80`),r(X,d(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=o(`rue:component:anchor`);r(J,Z),l(()=>{let e=f(I,{title:`Validator`,rows:ne});m(()=>u(e,J,Z))});let Q=o(`rue:component:anchor`);r(J,Q),l(()=>{let e=f(I,{title:`Validator.Hint`,rows:re});m(()=>u(e,J,Q))});let $=o(`rue:component:anchor`);return r(J,$),l(()=>{let e=f(I,{title:`Validator.Field`,rows:B});m(()=>u(e,J,$))}),t})}),s,h),s})};export{V as default};
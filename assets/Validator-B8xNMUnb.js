import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-B3ypJaOM.js";import{a as h,n as g}from"./vapor-helpers-vapor-CER7Yupw.js";import{n as _,t as v}from"./src-BhCwGZbQ.js";import{n as y}from"./SidebarPlaygroundDesign-DJJx0NbZ.js";import{t as b}from"./Code-DOCCgQFa.js";import{t as x}from"./button-DKMNNUoo.js";import{t as S}from"./tabs-Cu0uJJtf.js";var C=[`input`,`select`,`textarea`,`checkbox`,`toggle`],w=(...e)=>e.filter(Boolean).join(` `),T=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),E=e=>{let t=T(e);return C.find(e=>t.has(e))},D=(e,t,n)=>{if(t)return t;let r=E(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},O=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),k=(e,t,n,r)=>{let i=T(r);return w(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},A=e=>Array.isArray(e)?e.map((e,t)=>v(`span`,{className:`block`,children:e},`validator-line-${t}`)):e,j=({as:e,appearance:t,size:n,status:r,className:i,children:a,...o})=>{let s=D(e,t,i),c=O(e,s),l=k(s,n,r,i);return c===`select`?v(`select`,{...o,className:l,children:a}):c===`textarea`?v(`textarea`,{...o,className:l,children:a}):v(`input`,{...o,className:l})},M=({as:e=`p`,className:t,children:n,hideUntilInvalid:r,lines:i,...a})=>v(e,{...a,className:w(`validator-hint`,r?`hidden`:void 0,t),children:i?.length?A(i):n}),N=(e,t)=>w(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),P=Object.assign(j,{Hint:M,Field:({fieldAs:e=`fieldset`,className:t,controlClassName:n,label:r,labelClassName:i,hint:a,hintAs:o=`p`,hintClassName:s,hideHintWhenValid:c,extra:l,extraClassName:u,requiredMark:d,id:f,children:p,...m})=>{let h=e,g=typeof f==`string`&&f.trim()?f:void 0,y=g&&a!=null&&m[`aria-describedby`]==null?`${g}-hint`:void 0,b=m[`aria-describedby`]??y,x=d??m.required===!0;return _(h,{className:N(e,t),children:[r==null?null:_(`label`,{className:w(`label`,i),for:g,children:[v(`span`,{children:r}),x?v(`span`,{className:`text-error`,"aria-hidden":`true`,children:`*`}):null]}),v(j,{...m,id:g,"aria-describedby":b,className:n,children:p}),a==null?null:v(M,{id:y,as:o,className:s,hideUntilInvalid:c,children:A(a)}),l==null?null:v(`p`,{className:w(`label text-xs opacity-70`,u),children:A(l)})]})}}),F=i=>l(s=>{let d=r(`div`,s);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,d);a(d,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,f);a(f,h);let g=r(`h2`,h);a(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,o(`# `));let _=e(`rue:slot:anchor`);a(g,_),c(()=>{let e=i.title;m(()=>u(e,g,_))});let v=e(`rue:slot:anchor`);a(h,v),c(()=>{let o=i.summary?l(()=>{let o=t(),s=r(`p`,o);a(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return a(s,l),c(()=>{let e=i.summary;m(()=>u(e,s,l))}),o}):``;m(()=>u(o,h,v))});let y=e(`rue:component:anchor`);a(d,y),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:i.tab.value,onChange:e=>i.tab.value=e,className:`mb-3 mt-4`});m(()=>u(e,d,y))});let x=e(`rue:slot:anchor`);return a(d,x),c(()=>{let n=i.tab.value===`preview`?i.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return a(n,r),c(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:i.code});m(()=>u(e,n,r))}),n});m(()=>u(n,d,x))}),d}),I=i=>l(d=>{let f=r(`div`,d);n(f,`not-prose my-6 lg:my-8`);let p=r(`h3`,f);a(f,p),n(p,`mt-0 mb-3 text-base font-semibold text-base-content`);let h=e(`rue:slot:anchor`);a(p,h),c(()=>{let e=i.title;m(()=>u(e,p,h))});let _=r(`div`,f);a(f,_),n(_,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let v=r(`table`,_);a(_,v),n(v,`table table-zebra`);let y=r(`thead`,v);a(v,y);let b=r(`tr`,y);a(y,b);let x=r(`th`,b);a(b,x),a(x,o(`属性`));let S=r(`th`,b);a(b,S),a(S,o(`说明`));let C=r(`th`,b);a(b,C),a(C,o(`类型`));let w=r(`th`,b);a(b,w),a(w,o(`默认值`));let T=r(`tbody`,v);a(v,T);let E=e(`rue:list:start`),D=e(`rue:list:end`);a(T,E),a(T,D);let O=new Map;return c(()=>{O=g({items:i.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(n,i,o,d,f)=>{u(l(()=>{let i=t(),o=r(`tr`,i);a(i,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);a(o,l);let d=r(`code`,l);a(l,d);let f=e(`rue:slot:anchor`);a(d,f),c(()=>{let e=n.prop;m(()=>u(e,d,f))});let p=r(`td`,o);a(o,p);let h=e(`rue:slot:anchor`);a(p,h),c(()=>{let e=n.description;m(()=>u(e,p,h))});let g=r(`td`,o);a(o,g);let _=r(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),c(()=>{let e=n.type;m(()=>u(e,_,v))});let y=r(`td`,o);a(o,y);let b=r(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),c(()=>{let e=n.defaultValue;m(()=>u(e,b,x))}),i}),i,o)}})}),f}),L=(e,t)=>{let n=e.currentTarget;n&&(t.value=!n.checkValidity())},R=(e,t)=>{t.value=!0},z=e=>{e.preventDefault()},ee=()=>{let{invalid:t}=h(`useSetup:0:0`,()=>d(()=>({invalid:h(`ref:1:0`,()=>f(!1))})));return l(o=>{let s=r(`form`,o);n(s,`grid gap-2`),i(s,`submit`,z);let l=e(`rue:component:anchor`);a(s,l),c(()=>{let e=p(P,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":t.value?`true`:`false`,onInvalid:e=>R(e,t),onInput:e=>L(e,t),onBlur:e=>L(e,t)});m(()=>u(e,s,l))});let d=e(`rue:component:anchor`);a(s,d),c(()=>{let e=p(P.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});m(()=>u(e,s,d))});let f=e(`rue:component:anchor`);return a(s,f),u(p(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),s,f),s})},te=()=>{let{invalid:t}=h(`useSetup:0:0:dup1`,()=>d(()=>({invalid:h(`ref:1:1`,()=>f(!1))})));return l(o=>{let s=r(`form`,o);n(s,`grid gap-2`),i(s,`submit`,z);let l=e(`rue:component:anchor`);a(s,l),c(()=>{let e=p(P,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":t.value?`true`:`false`,onInvalid:e=>R(e,t),onInput:e=>L(e,t),onBlur:e=>L(e,t)});m(()=>u(e,s,l))});let d=e(`rue:component:anchor`);a(s,d),c(()=>{let e=p(P.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});m(()=>u(e,s,d))});let f=e(`rue:component:anchor`);return a(s,f),u(p(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),s,f),s})},ne=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],re=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],ie=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],B=()=>{let{tabBasic:i,tabHosts:g,tabRules:b,tabStatus:S,tabField:C,tabForm:w}=h(`useSetup:0:0:dup2`,()=>d(()=>({tabBasic:h(`ref:1:2`,()=>f(`preview`)),tabHosts:h(`ref:1:3`,()=>f(`preview`)),tabRules:h(`ref:1:4`,()=>f(`preview`)),tabStatus:h(`ref:1:5`,()=>f(`preview`)),tabField:h(`ref:1:6`,()=>f(`preview`)),tabForm:h(`ref:1:7`,()=>f(`preview`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(y,{children:l(()=>{let l=t(),d=r(`div`,l);a(l,d),n(d,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,d);a(d,f),a(f,o(`Validator 校验辅助`));let h=r(`p`,d);a(d,h),n(h,`text-sm mt-3 mb-3`),a(h,o(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let y=r(`code`,h);a(h,y),a(y,o(`className="input validator"`)),a(h,o(`写法继续可用，但现在也可以直接通过`));let T=r(`code`,h);a(h,T),a(T,o(`appearance`)),a(h,o(`、`));let E=r(`code`,h);a(h,E),a(E,o(`size`)),a(h,o(`、`));let D=r(`code`,h);a(h,D),a(D,o(`status`)),a(h,o(`和`));let O=r(`code`,h);a(h,O),a(O,o(`Field`)),a(h,o(`组合件来组织更完整的表单场景。`));let k=r(`div`,d);a(d,k),n(k,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let A=r(`div`,k);a(k,A);let j=r(`div`,A);a(A,j),n(j,`font-medium text-base-content`),a(j,o(`原生校验优先`));let M=r(`div`,A);a(A,M),n(M,`mt-1 opacity-70`),a(M,o(`继续依赖 required、pattern、minLength 等原生约束。`));let N=r(`div`,k);a(k,N);let L=r(`div`,N);a(N,L),n(L,`font-medium text-base-content`),a(L,o(`语义外观补齐`));let R=r(`div`,N);a(N,R),n(R,`mt-1 opacity-70`),a(R,o(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let z=r(`div`,k);a(k,z);let B=r(`div`,z);a(z,B),n(B,`font-medium text-base-content`),a(B,o(`表单结构复用`));let V=r(`div`,z);a(z,V),n(V,`mt-1 opacity-70`),a(V,o(`Field 统一 label、hint、extra 和基础可访问性连线。`));let H=r(`div`,d);a(d,H),n(H,`text-sm mt-3`);let U=r(`a`,H);a(H,U),s(U,`href`,`https://daisyui.com/components/validator/`),s(U,`target`,`_blank`),s(U,`rel`,`noreferrer`),a(U,o(`查看 daisyUI 原始静态样式`));let W=e(`rue:component:anchor`);a(d,W),c(()=>{let e=p(F,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:i,preview:()=>_(`form`,{className:`grid w-full max-w-xs gap-2`,children:[v(P,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),v(P.Hint,{children:`Enter valid email address`}),v(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});m(()=>u(e,d,W))});let G=e(`rue:component:anchor`);a(d,G),c(()=>{let e=p(F,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:g,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[_(`div`,{className:`grid gap-2`,children:[_(P,{as:`select`,appearance:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`tabs`,children:`Tabs`}),v(`option`,{value:`spaces`,children:`Spaces`})]}),v(P.Hint,{children:`Required`})]}),_(`div`,{className:`grid gap-2`,children:[v(P,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),v(P.Hint,{children:`Required`})]}),_(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(P,{appearance:`checkbox`,type:`checkbox`,required:!0}),v(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),_(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),v(P,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});m(()=>u(e,d,G))});let K=e(`rue:component:anchor`);a(d,K),c(()=>{let e=p(F,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:b,preview:()=>_(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[v(ee,{}),v(te,{})]}),code:`const syncNativeValidity = (event: Event, invalidRef: { value: boolean }) => {
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
</form>`});m(()=>u(e,d,K))});let q=e(`rue:component:anchor`);a(d,q),c(()=>{let e=p(F,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:S,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[v(P.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),v(P.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),_(P.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[v(`option`,{children:`Stable`}),v(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});m(()=>u(e,d,q))});let J=e(`rue:component:anchor`);a(d,J),c(()=>{let e=p(F,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:C,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[v(P.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),_(P.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`utc+8`,children:`UTC +8`}),v(`option`,{value:`utc`,children:`UTC`})]}),v(P.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});m(()=>u(e,d,J))});let Y=e(`rue:component:anchor`);a(d,Y),c(()=>{let e=p(F,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:w,preview:()=>_(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[v(P.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),v(P.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),_(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[v(x,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),v(x,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});m(()=>u(e,d,Y))});let X=r(`div`,d);a(d,X),n(X,`my-8 lg:my-12`);let Z=r(`h2`,X);a(X,Z),a(Z,o(`API`));let Q=r(`p`,X);a(X,Q),n(Q,`text-sm opacity-80`),a(Q,o(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let $=e(`rue:component:anchor`);a(X,$),c(()=>{let e=p(I,{title:`Validator`,rows:ne});m(()=>u(e,X,$))});let ae=e(`rue:component:anchor`);a(X,ae),c(()=>{let e=p(I,{title:`Validator.Hint`,rows:re});m(()=>u(e,X,ae))});let oe=e(`rue:component:anchor`);return a(X,oe),c(()=>{let e=p(I,{title:`Validator.Field`,rows:ie});m(()=>u(e,X,oe))}),l})}),f,h),f})};export{B as default};
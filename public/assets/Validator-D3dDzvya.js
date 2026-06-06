import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h,n as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./Code-BCLFq1E3.js";import{n as v,t as y}from"./src-BLzF0BqW.js";import{n as b}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as x}from"./button-B1PhsXzm.js";import{t as S}from"./tabs-BOxm6iIN.js";var C=[`input`,`select`,`textarea`,`checkbox`,`toggle`],w=(...e)=>e.filter(Boolean).join(` `),T=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),E=e=>{let t=T(e);return C.find(e=>t.has(e))},D=(e,t,n)=>{if(t)return t;let r=E(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},O=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),k=(e,t,n,r)=>{let i=T(r);return w(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},A=e=>Array.isArray(e)?e.map((e,t)=>y(`span`,{className:`block`,children:e},`validator-line-${t}`)):e,j=({as:e,appearance:t,size:n,status:r,className:i,children:a,...o})=>{let s=D(e,t,i),c=O(e,s),l=k(s,n,r,i);return c===`select`?y(`select`,{...o,className:l,children:a}):c===`textarea`?y(`textarea`,{...o,className:l,children:a}):y(`input`,{...o,className:l})},M=({as:e=`p`,className:t,children:n,hideUntilInvalid:r,lines:i,...a})=>y(e,{...a,className:w(`validator-hint`,r?`hidden`:void 0,t),children:i?.length?A(i):n}),N=(e,t)=>w(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),P=Object.assign(j,{Hint:M,Field:({fieldAs:e=`fieldset`,className:t,controlClassName:n,label:r,labelClassName:i,hint:a,hintAs:o=`p`,hintClassName:s,hideHintWhenValid:c,extra:l,extraClassName:u,requiredMark:d,id:f,children:p,...m})=>{let h=e,g=typeof f==`string`&&f.trim()?f:void 0,_=g&&a!=null&&m[`aria-describedby`]==null?`${g}-hint`:void 0,b=m[`aria-describedby`]??_,x=d??m.required===!0;return v(h,{className:N(e,t),children:[r==null?null:v(`label`,{className:w(`label`,i),for:g,children:[y(`span`,{children:r}),x?y(`span`,{className:`text-error`,"aria-hidden":`true`,children:`*`}):null]}),y(j,{...m,id:g,"aria-describedby":b,className:n,children:p}),a==null?null:y(M,{id:_,as:o,className:s,hideUntilInvalid:c,children:A(a)}),l==null?null:y(`p`,{className:w(`label text-xs opacity-70`,u),children:A(l)})]})}}),F=s=>l(c=>{let f=o(`div`,c);e(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,f);t(f,m),e(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);t(m,h);let g=o(`h2`,h);t(h,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,r(`# `));let v=i(`rue:slot:anchor`);t(g,v),n(()=>{let e=s.title;p(()=>u(e,g,v))});let y=i(`rue:slot:anchor`);t(h,y),n(()=>{let r=s.summary?l(()=>{let r=a(),c=o(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=s.summary;p(()=>u(e,c,l))}),r}):``;p(()=>u(r,h,y))});let b=i(`rue:component:anchor`);t(f,b),n(()=>{let e=d(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.tab.value,onChange:e=>s.tab.value=e,className:`mb-3 mt-4`});p(()=>u(e,f,b))});let x=i(`rue:slot:anchor`);return t(f,x),n(()=>{let e=s.tab.value===`preview`?s.preview():l(()=>{let e=a(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=d(_,{className:`mt-2`,lang:`tsx`,code:s.code});p(()=>u(t,e,r))}),e});p(()=>u(e,f,x))}),f}),I=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose my-6 lg:my-8`);let m=o(`h3`,f);t(f,m),e(m,`mt-0 mb-3 text-base font-semibold text-base-content`);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=c.title;p(()=>u(e,m,h))});let _=o(`div`,f);t(f,_),e(_,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let v=o(`table`,_);t(_,v),e(v,`table table-zebra`);let y=o(`thead`,v);t(v,y);let b=o(`tr`,y);t(y,b);let x=o(`th`,b);t(b,x),t(x,r(`属性`));let S=o(`th`,b);t(b,S),t(S,r(`说明`));let C=o(`th`,b);t(b,C),t(C,r(`类型`));let w=o(`th`,b);t(b,w),t(w,r(`默认值`));let T=o(`tbody`,v);t(v,T);let E=i(`rue:list:start`),D=i(`rue:list:end`);t(T,E),t(T,D);let O=new Map;return n(()=>{O=g({items:c.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),L=(e,t)=>{let n=e.currentTarget;n&&(t.value=!n.checkValidity())},R=(e,t)=>{t.value=!0},z=e=>{e.preventDefault()},B=()=>{let{invalid:r}=h(`useSetup:0:0`,()=>f(()=>({invalid:h(`ref:1:0`,()=>c(!1))})));return l(a=>{let s=o(`form`,a);e(s,`grid gap-2`),m(s,`submit`,z);let c=i(`rue:component:anchor`);t(s,c),n(()=>{let e=d(P,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":r.value?`true`:`false`,onInvalid:e=>R(e,r),onInput:e=>L(e,r),onBlur:e=>L(e,r)});p(()=>u(e,s,c))});let l=i(`rue:component:anchor`);t(s,l),n(()=>{let e=d(P.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});p(()=>u(e,s,l))});let f=i(`rue:component:anchor`);return t(s,f),u(d(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),s,f),s})},ee=()=>{let{invalid:r}=h(`useSetup:0:0:dup1`,()=>f(()=>({invalid:h(`ref:1:1`,()=>c(!1))})));return l(a=>{let s=o(`form`,a);e(s,`grid gap-2`),m(s,`submit`,z);let c=i(`rue:component:anchor`);t(s,c),n(()=>{let e=d(P,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":r.value?`true`:`false`,onInvalid:e=>R(e,r),onInput:e=>L(e,r),onBlur:e=>L(e,r)});p(()=>u(e,s,c))});let l=i(`rue:component:anchor`);t(s,l),n(()=>{let e=d(P.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});p(()=>u(e,s,l))});let f=i(`rue:component:anchor`);return t(s,f),u(d(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),s,f),s})},te=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],V=()=>{let{tabBasic:s,tabHosts:m,tabRules:g,tabStatus:_,tabField:S,tabForm:C}=h(`useSetup:0:0:dup2`,()=>f(()=>({tabBasic:h(`ref:1:2`,()=>c(`preview`)),tabHosts:h(`ref:1:3`,()=>c(`preview`)),tabRules:h(`ref:1:4`,()=>c(`preview`)),tabStatus:h(`ref:1:5`,()=>c(`preview`)),tabField:h(`ref:1:6`,()=>c(`preview`)),tabForm:h(`ref:1:7`,()=>c(`preview`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(b,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Validator 校验辅助`));let h=o(`p`,l);t(l,h),e(h,`text-sm mt-3 mb-3`),t(h,r(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let b=o(`code`,h);t(h,b),t(b,r(`className="input validator"`)),t(h,r(`写法继续可用，但现在也可以直接通过`));let w=o(`code`,h);t(h,w),t(w,r(`appearance`)),t(h,r(`、`));let T=o(`code`,h);t(h,T),t(T,r(`size`)),t(h,r(`、`));let E=o(`code`,h);t(h,E),t(E,r(`status`)),t(h,r(`和`));let D=o(`code`,h);t(h,D),t(D,r(`Field`)),t(h,r(`组合件来组织更完整的表单场景。`));let O=o(`div`,l);t(l,O),e(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=o(`div`,O);t(O,k);let A=o(`div`,k);t(k,A),e(A,`font-medium text-base-content`),t(A,r(`原生校验优先`));let j=o(`div`,k);t(k,j),e(j,`mt-1 opacity-70`),t(j,r(`继续依赖 required、pattern、minLength 等原生约束。`));let M=o(`div`,O);t(O,M);let N=o(`div`,M);t(M,N),e(N,`font-medium text-base-content`),t(N,r(`语义外观补齐`));let L=o(`div`,M);t(M,L),e(L,`mt-1 opacity-70`),t(L,r(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let R=o(`div`,O);t(O,R);let z=o(`div`,R);t(R,z),e(z,`font-medium text-base-content`),t(z,r(`表单结构复用`));let V=o(`div`,R);t(R,V),e(V,`mt-1 opacity-70`),t(V,r(`Field 统一 label、hint、extra 和基础可访问性连线。`));let H=i(`rue:component:anchor`);t(l,H),n(()=>{let e=d(F,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:s,preview:()=>v(`form`,{className:`grid w-full max-w-xs gap-2`,children:[y(P,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),y(P.Hint,{children:`Enter valid email address`}),y(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});p(()=>u(e,l,H))});let U=i(`rue:component:anchor`);t(l,U),n(()=>{let e=d(F,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:m,preview:()=>v(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[v(`div`,{className:`grid gap-2`,children:[v(P,{as:`select`,appearance:`select`,required:!0,children:[y(`option`,{value:``,children:`Choose:`}),y(`option`,{value:`tabs`,children:`Tabs`}),y(`option`,{value:`spaces`,children:`Spaces`})]}),y(P.Hint,{children:`Required`})]}),v(`div`,{className:`grid gap-2`,children:[y(P,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),y(P.Hint,{children:`Required`})]}),v(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[y(P,{appearance:`checkbox`,type:`checkbox`,required:!0}),y(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),v(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[y(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),y(P,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});p(()=>u(e,l,U))});let W=i(`rue:component:anchor`);t(l,W),n(()=>{let e=d(F,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:g,preview:()=>v(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[y(B,{}),y(ee,{})]}),code:`const syncNativeValidity = (event: Event, invalidRef: { value: boolean }) => {
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
</form>`});p(()=>u(e,l,W))});let G=i(`rue:component:anchor`);t(l,G),n(()=>{let e=d(F,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:_,preview:()=>v(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[y(P.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),y(P.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),v(P.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[y(`option`,{children:`Stable`}),y(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});p(()=>u(e,l,G))});let K=i(`rue:component:anchor`);t(l,K),n(()=>{let e=d(F,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:S,preview:()=>v(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[y(P.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),v(P.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[y(`option`,{value:``,children:`Choose:`}),y(`option`,{value:`utc+8`,children:`UTC +8`}),y(`option`,{value:`utc`,children:`UTC`})]}),y(P.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});p(()=>u(e,l,K))});let q=i(`rue:component:anchor`);t(l,q),n(()=>{let e=d(F,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:C,preview:()=>v(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[y(P.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),y(P.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),v(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[y(x,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),y(x,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});p(()=>u(e,l,q))});let J=o(`div`,l);t(l,J),e(J,`my-8 lg:my-12`);let Y=o(`h2`,J);t(J,Y),t(Y,r(`API`));let X=o(`p`,J);t(J,X),e(X,`text-sm opacity-80`),t(X,r(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=i(`rue:component:anchor`);t(J,Z),n(()=>{let e=d(I,{title:`Validator`,rows:te});p(()=>u(e,J,Z))});let Q=i(`rue:component:anchor`);t(J,Q),n(()=>{let e=d(I,{title:`Validator.Hint`,rows:ne});p(()=>u(e,J,Q))});let $=i(`rue:component:anchor`);return t(J,$),n(()=>{let e=d(I,{title:`Validator.Field`,rows:re});p(()=>u(e,J,$))}),c})}),f,h),f})};export{V as default};
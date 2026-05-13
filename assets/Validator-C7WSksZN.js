import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,j as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h,n as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as _,t as v}from"./src-BfQKH6_d.js";import{n as y}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as b}from"./Code-2C2psoH3.js";import{t as x}from"./button-DroKVuaU.js";import{t as S}from"./tabs-BgQmsOey.js";var C=[`input`,`select`,`textarea`,`checkbox`,`toggle`],w=(...e)=>e.filter(Boolean).join(` `),T=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),E=e=>{let t=T(e);return C.find(e=>t.has(e))},D=(e,t,n)=>{if(t)return t;let r=E(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},O=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),k=(e,t,n,r)=>{let i=T(r);return w(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},A=e=>Array.isArray(e)?e.map((e,t)=>v(`span`,{className:`block`,children:e},`validator-line-${t}`)):e,j=({as:e,appearance:t,size:n,status:r,className:i,children:a,...o})=>{let s=D(e,t,i),c=O(e,s),l=k(s,n,r,i);return c===`select`?v(`select`,{...o,className:l,children:a}):c===`textarea`?v(`textarea`,{...o,className:l,children:a}):v(`input`,{...o,className:l})},M=({as:e=`p`,className:t,children:n,hideUntilInvalid:r,lines:i,...a})=>v(e,{...a,className:w(`validator-hint`,r?`hidden`:void 0,t),children:i?.length?A(i):n}),N=(e,t)=>w(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),P=Object.assign(j,{Hint:M,Field:({fieldAs:e=`fieldset`,className:t,controlClassName:n,label:r,labelClassName:i,hint:a,hintAs:o=`p`,hintClassName:s,hideHintWhenValid:c,extra:l,extraClassName:u,requiredMark:d,id:f,children:p,...m})=>{let h=e,g=typeof f==`string`&&f.trim()?f:void 0,y=g&&a!=null&&m[`aria-describedby`]==null?`${g}-hint`:void 0,b=m[`aria-describedby`]??y,x=d??m.required===!0;return _(h,{className:N(e,t),children:[r==null?null:_(`label`,{className:w(`label`,i),for:g,children:[v(`span`,{children:r}),x?v(`span`,{className:`text-error`,"aria-hidden":`true`,children:`*`}):null]}),v(j,{...m,id:g,"aria-describedby":b,className:n,children:p}),a==null?null:v(M,{id:y,as:o,className:s,hideUntilInvalid:c,children:A(a)}),l==null?null:v(`p`,{className:w(`label text-xs opacity-70`,u),children:A(l)})]})}}),F=o=>m(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=n(`div`);i(s,u),t(u,`flex flex-wrap items-start justify-between gap-3`);let d=n(`div`);i(u,d);let h=n(`h2`);i(d,h),t(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,r(`# `));let g=a(`rue:slot:anchor`);i(h,g),c(()=>{let e=o.title;f(()=>l(e,h,g))});let _=a(`rue:slot:anchor`);i(d,_),c(()=>{let r=o.summary?m(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let u=a(`rue:slot:anchor`);return i(s,u),c(()=>{let e=o.summary;f(()=>l(e,s,u))}),r}):``;f(()=>l(r,d,_))});let v=a(`rue:component:anchor`);i(s,v),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});f(()=>l(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),c(()=>{let t=o.tab.value===`preview`?o.preview():m(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),c(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:o.code});f(()=>l(e,t,n))}),t});f(()=>l(t,s,y))}),s}),I=s=>m(()=>{let u=n(`div`);t(u,`not-prose my-6 lg:my-8`);let d=n(`h3`);i(u,d),t(d,`mt-0 mb-3 text-base font-semibold text-base-content`);let p=a(`rue:slot:anchor`);i(d,p),c(()=>{let e=s.title;f(()=>l(e,d,p))});let h=n(`div`);i(u,h),t(h,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let _=n(`table`);i(h,_),t(_,`table table-zebra`);let v=n(`thead`);i(_,v);let y=n(`tr`);i(v,y);let b=n(`th`);i(y,b),i(b,r(`属性`));let x=n(`th`);i(y,x),i(x,r(`说明`));let S=n(`th`);i(y,S),i(S,r(`类型`));let C=n(`th`);i(y,C),i(C,r(`默认值`));let w=n(`tbody`);i(_,w);let T=a(`rue:list:start`),E=a(`rue:list:end`);i(w,T),i(w,E);let D=new Map;return c(()=>{D=g({items:s.rows||[],getKey:(e,t)=>e.prop,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,r,s,u,d)=>{l(m(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let d=n(`code`);i(u,d);let p=a(`rue:slot:anchor`);i(d,p),c(()=>{let e=t.prop;f(()=>l(e,d,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;f(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;f(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;f(()=>l(e,b,x))}),r}),r,s)}})}),u}),L=(e,t)=>{let n=e.currentTarget;n&&(t.value=!n.checkValidity())},R=(e,t)=>{t.value=!0},z=e=>{e.preventDefault()},ee=()=>{let{invalid:e}=h(`useSetup:0:0`,()=>s(()=>({invalid:h(`ref:1:0`,()=>d(!1))})));return m(()=>{let r=n(`form`);t(r,`grid gap-2`),u(r,`submit`,z);let o=a(`rue:component:anchor`);i(r,o),c(()=>{let t=p(P,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":e.value?`true`:`false`,onInvalid:t=>R(t,e),onInput:t=>L(t,e),onBlur:t=>L(t,e)});f(()=>l(t,r,o))});let s=a(`rue:component:anchor`);i(r,s),c(()=>{let e=p(P.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});f(()=>l(e,r,s))});let d=a(`rue:component:anchor`);return i(r,d),l(p(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),r,d),r})},te=()=>{let{invalid:e}=h(`useSetup:0:0:dup1`,()=>s(()=>({invalid:h(`ref:1:1`,()=>d(!1))})));return m(()=>{let r=n(`form`);t(r,`grid gap-2`),u(r,`submit`,z);let o=a(`rue:component:anchor`);i(r,o),c(()=>{let t=p(P,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":e.value?`true`:`false`,onInvalid:t=>R(t,e),onInput:t=>L(t,e),onBlur:t=>L(t,e)});f(()=>l(t,r,o))});let s=a(`rue:component:anchor`);i(r,s),c(()=>{let e=p(P.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});f(()=>l(e,r,s))});let d=a(`rue:component:anchor`);return i(r,d),l(p(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),r,d),r})},ne=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],re=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],ie=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],B=()=>{let{tabBasic:u,tabHosts:g,tabRules:b,tabStatus:S,tabField:C,tabForm:w}=h(`useSetup:0:0:dup2`,()=>s(()=>({tabBasic:h(`ref:1:2`,()=>d(`preview`)),tabHosts:h(`ref:1:3`,()=>d(`preview`)),tabRules:h(`ref:1:4`,()=>d(`preview`)),tabStatus:h(`ref:1:5`,()=>d(`preview`)),tabField:h(`ref:1:6`,()=>d(`preview`)),tabForm:h(`ref:1:7`,()=>d(`preview`))})));return m(()=>{let s=e(),d=a(`rue:component:anchor`);return i(s,d),l(p(y,{children:m(()=>{let s=e(),d=n(`div`);i(s,d),t(d,`max-w-none prose prose-sm md:prose-base`);let m=n(`h1`);i(d,m),i(m,r(`Validator 校验辅助`));let h=n(`p`);i(d,h),t(h,`text-sm mt-3 mb-3`),i(h,r(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let y=n(`code`);i(h,y),i(y,r(`className="input validator"`)),i(h,r(`写法继续可用，但现在也可以直接通过`));let T=n(`code`);i(h,T),i(T,r(`appearance`)),i(h,r(`、`));let E=n(`code`);i(h,E),i(E,r(`size`)),i(h,r(`、`));let D=n(`code`);i(h,D),i(D,r(`status`)),i(h,r(`和`));let O=n(`code`);i(h,O),i(O,r(`Field`)),i(h,r(`组合件来组织更完整的表单场景。`));let k=n(`div`);i(d,k),t(k,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let A=n(`div`);i(k,A);let j=n(`div`);i(A,j),t(j,`font-medium text-base-content`),i(j,r(`原生校验优先`));let M=n(`div`);i(A,M),t(M,`mt-1 opacity-70`),i(M,r(`继续依赖 required、pattern、minLength 等原生约束。`));let N=n(`div`);i(k,N);let L=n(`div`);i(N,L),t(L,`font-medium text-base-content`),i(L,r(`语义外观补齐`));let R=n(`div`);i(N,R),t(R,`mt-1 opacity-70`),i(R,r(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let z=n(`div`);i(k,z);let B=n(`div`);i(z,B),t(B,`font-medium text-base-content`),i(B,r(`表单结构复用`));let V=n(`div`);i(z,V),t(V,`mt-1 opacity-70`),i(V,r(`Field 统一 label、hint、extra 和基础可访问性连线。`));let H=n(`div`);i(d,H),t(H,`text-sm mt-3`);let U=n(`a`);i(H,U),o(U,`href`,`https://daisyui.com/components/validator/`),o(U,`target`,`_blank`),o(U,`rel`,`noreferrer`),i(U,r(`查看 daisyUI 原始静态样式`));let W=a(`rue:component:anchor`);i(d,W),c(()=>{let e=p(F,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:u,preview:()=>_(`form`,{className:`grid w-full max-w-xs gap-2`,children:[v(P,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),v(P.Hint,{children:`Enter valid email address`}),v(x,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});f(()=>l(e,d,W))});let G=a(`rue:component:anchor`);i(d,G),c(()=>{let e=p(F,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:g,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[_(`div`,{className:`grid gap-2`,children:[_(P,{as:`select`,appearance:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`tabs`,children:`Tabs`}),v(`option`,{value:`spaces`,children:`Spaces`})]}),v(P.Hint,{children:`Required`})]}),_(`div`,{className:`grid gap-2`,children:[v(P,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),v(P.Hint,{children:`Required`})]}),_(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(P,{appearance:`checkbox`,type:`checkbox`,required:!0}),v(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),_(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),v(P,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});f(()=>l(e,d,G))});let K=a(`rue:component:anchor`);i(d,K),c(()=>{let e=p(F,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:b,preview:()=>_(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[v(ee,{}),v(te,{})]}),code:`const syncNativeValidity = (event: Event, invalidRef: { value: boolean }) => {
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
</form>`});f(()=>l(e,d,K))});let q=a(`rue:component:anchor`);i(d,q),c(()=>{let e=p(F,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:S,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[v(P.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),v(P.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),_(P.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[v(`option`,{children:`Stable`}),v(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});f(()=>l(e,d,q))});let J=a(`rue:component:anchor`);i(d,J),c(()=>{let e=p(F,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:C,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[v(P.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),_(P.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`utc+8`,children:`UTC +8`}),v(`option`,{value:`utc`,children:`UTC`})]}),v(P.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});f(()=>l(e,d,J))});let Y=a(`rue:component:anchor`);i(d,Y),c(()=>{let e=p(F,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:w,preview:()=>_(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[v(P.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),v(P.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),_(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[v(x,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),v(x,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});f(()=>l(e,d,Y))});let X=n(`div`);i(d,X),t(X,`my-8 lg:my-12`);let Z=n(`h2`);i(X,Z),i(Z,r(`API`));let Q=n(`p`);i(X,Q),t(Q,`text-sm opacity-80`),i(Q,r(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let $=a(`rue:component:anchor`);i(X,$),c(()=>{let e=p(I,{title:`Validator`,rows:ne});f(()=>l(e,X,$))});let ae=a(`rue:component:anchor`);i(X,ae),c(()=>{let e=p(I,{title:`Validator.Hint`,rows:re});f(()=>l(e,X,ae))});let oe=a(`rue:component:anchor`);return i(X,oe),c(()=>{let e=p(I,{title:`Validator.Field`,rows:ie});f(()=>l(e,X,oe))}),s})}),s,d),s})};export{B as default};
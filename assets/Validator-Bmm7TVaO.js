import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as v,t as y}from"./src-CqIWk1va.js";import{n as b}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as x}from"./Code-B1JFTu6m.js";import{t as S}from"./button-Doo7Wv3K.js";import{t as C}from"./tabs-BbiCzXqJ.js";var w=[`input`,`select`,`textarea`,`checkbox`,`toggle`],T=(...e)=>e.filter(Boolean).join(` `),E=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),D=e=>{let t=E(e);return w.find(e=>t.has(e))},O=(e,t,n)=>{if(t)return t;let r=D(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},k=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),A=(e,t,n,r)=>{let i=E(r);return T(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},j=e=>Array.isArray(e)?e.map((e,t)=>y(`span`,{className:`block`,children:e},`validator-line-${t}`)):e,M=({as:e,appearance:t,size:n,status:r,className:i,children:a,...o})=>{let s=O(e,t,i),c=k(e,s),l=A(s,n,r,i);return c===`select`?y(`select`,{...o,className:l,children:a}):c===`textarea`?y(`textarea`,{...o,className:l,children:a}):y(`input`,{...o,className:l})},N=({as:e=`p`,className:t,children:n,hideUntilInvalid:r,lines:i,...a})=>y(e,{...a,className:T(`validator-hint`,r?`hidden`:void 0,t),children:i?.length?j(i):n}),P=(e,t)=>T(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),F=Object.assign(M,{Hint:N,Field:({fieldAs:e=`fieldset`,className:t,controlClassName:n,label:r,labelClassName:i,hint:a,hintAs:o=`p`,hintClassName:s,hideHintWhenValid:c,extra:l,extraClassName:u,requiredMark:d,id:f,children:p,...m})=>{let h=e,g=typeof f==`string`&&f.trim()?f:void 0,_=g&&a!=null&&m[`aria-describedby`]==null?`${g}-hint`:void 0,b=m[`aria-describedby`]??_,x=d??m.required===!0;return v(h,{className:P(e,t),children:[r==null?null:v(`label`,{className:T(`label`,i),for:g,children:[y(`span`,{children:r}),x?y(`span`,{className:`text-error`,"aria-hidden":`true`,children:`*`}):null]}),y(M,{...m,id:g,"aria-describedby":b,className:n,children:p}),a==null?null:y(N,{id:_,as:o,className:s,hideUntilInvalid:c,children:j(a)}),l==null?null:y(`p`,{className:T(`label text-xs opacity-70`,u),children:j(l)})]})}}),I=({title:e,summary:n,tab:f,preview:h,code:g})=>m(()=>{let _=t(`div`);s(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=t(`div`);u(_,v),s(v,`flex flex-wrap items-start justify-between gap-3`);let y=t(`div`);u(v,y);let b=t(`h2`);u(y,b),s(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,r(`# `));let S=i(b);u(b,S),d(()=>{c(S,e)});let w=a(`rue:slot:anchor`);u(y,w),d(()=>{l(n?m(()=>{let e=o(),r=t(`p`);u(e,r),s(r,`m-0 text-sm opacity-70`);let a=i(r);return u(r,a),d(()=>{c(a,n)}),e}):``,y,w)});let T=a(`rue:component:anchor`);u(_,T),d(()=>{l(p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=a(`rue:slot:anchor`);return u(_,E),d(()=>{l(f.value===`preview`?h():m(()=>{let e=o(),t=a(`rue:component:anchor`);return u(e,t),d(()=>{l(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),L=({title:e,rows:f})=>m(()=>{let p=t(`div`);s(p,`not-prose my-6 lg:my-8`);let h=t(`h3`);u(p,h),s(h,`mt-0 mb-3 text-base font-semibold text-base-content`);let g=i(h);u(h,g),d(()=>{c(g,e)});let v=t(`div`);u(p,v),s(v,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let y=t(`table`);u(v,y),s(y,`table table-zebra`);let b=t(`thead`);u(y,b);let x=t(`tr`);u(b,x);let S=t(`th`);u(x,S),u(S,r(`属性`));let C=t(`th`);u(x,C),u(C,r(`说明`));let w=t(`th`);u(x,w),u(w,r(`类型`));let T=t(`th`);u(x,T),u(T,r(`默认值`));let E=t(`tbody`);u(y,E);let D=a(`rue:list:start`),O=a(`rue:list:end`);u(E,D),u(E,O);let k=new Map;return d(()=>{k=_({items:f||[],getKey:(e,t)=>e.prop,elements:k,parent:E,before:O,singleRoot:!0,start:D,renderItem:(e,r,i,s,c)=>{l(m(()=>{let r=o(),i=t(`tr`);u(r,i),d(()=>{n(i,`key`,String(e.prop))});let s=t(`td`);u(i,s);let c=t(`code`);u(s,c);let f=a(`rue:slot:anchor`);u(c,f),d(()=>{let t=e.prop;l(t,c,f)});let p=t(`td`);u(i,p);let m=a(`rue:slot:anchor`);u(p,m),d(()=>{let t=e.description;l(t,p,m)});let h=t(`td`);u(i,h);let g=t(`code`);u(h,g);let _=a(`rue:slot:anchor`);u(g,_),d(()=>{let t=e.type;l(t,g,_)});let v=t(`td`);u(i,v);let y=t(`code`);u(v,y);let b=a(`rue:slot:anchor`);return u(y,b),d(()=>{let t=e.defaultValue;l(t,y,b)}),r}),r,i)}})}),p}),R=(e,t)=>{let n=e.currentTarget;n&&(t.value=!n.checkValidity())},z=(e,t)=>{t.value=!0},B=e=>{e.preventDefault()},ee=()=>{let{invalid:n}=g(`useSetup:0:0`,()=>h(()=>({invalid:g(`ref:1:0`,()=>f(!1))})));return m(()=>{let r=t(`form`);s(r,`grid gap-2`),e(r,`submit`,B);let i=a(`rue:component:anchor`);u(r,i),d(()=>{l(p(F,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":n.value?`true`:`false`,onInvalid:e=>z(e,n),onInput:e=>R(e,n),onBlur:e=>R(e,n)}),r,i)});let o=a(`rue:component:anchor`);u(r,o),d(()=>{l(p(F.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]}),r,o)});let c=a(`rue:component:anchor`);return u(r,c),l(p(S,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),r,c),r})},te=()=>{let{invalid:n}=g(`useSetup:0:0`,()=>h(()=>({invalid:g(`ref:1:1`,()=>f(!1))})));return m(()=>{let r=t(`form`);s(r,`grid gap-2`),e(r,`submit`,B);let i=a(`rue:component:anchor`);u(r,i),d(()=>{l(p(F,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":n.value?`true`:`false`,onInvalid:e=>z(e,n),onInput:e=>R(e,n),onBlur:e=>R(e,n)}),r,i)});let o=a(`rue:component:anchor`);u(r,o),d(()=>{l(p(F.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]}),r,o)});let c=a(`rue:component:anchor`);return u(r,c),l(p(S,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),r,c),r})},ne=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],re=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],ie=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],V=()=>{let{tabBasic:e,tabHosts:i,tabRules:c,tabStatus:_,tabField:x,tabForm:C}=g(`useSetup:0:0`,()=>h(()=>({tabBasic:g(`ref:1:2`,()=>f(`preview`)),tabHosts:g(`ref:1:3`,()=>f(`preview`)),tabRules:g(`ref:1:4`,()=>f(`preview`)),tabStatus:g(`ref:1:5`,()=>f(`preview`)),tabField:g(`ref:1:6`,()=>f(`preview`)),tabForm:g(`ref:1:7`,()=>f(`preview`))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(b,{children:m(()=>{let f=o(),m=t(`div`);u(f,m),s(m,`max-w-none prose prose-sm md:prose-base`);let h=t(`h1`);u(m,h),u(h,r(`Validator 校验辅助`));let g=t(`p`);u(m,g),s(g,`text-sm mt-3 mb-3`),u(g,r(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let b=t(`code`);u(g,b),u(b,r(`className="input validator"`)),u(g,r(`写法继续可用，但现在也可以直接通过`));let w=t(`code`);u(g,w),u(w,r(`appearance`)),u(g,r(`、`));let T=t(`code`);u(g,T),u(T,r(`size`)),u(g,r(`、`));let E=t(`code`);u(g,E),u(E,r(`status`)),u(g,r(`和`));let D=t(`code`);u(g,D),u(D,r(`Field`)),u(g,r(`组合件来组织更完整的表单场景。`));let O=t(`div`);u(m,O),s(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=t(`div`);u(O,k);let A=t(`div`);u(k,A),s(A,`font-medium text-base-content`),u(A,r(`原生校验优先`));let j=t(`div`);u(k,j),s(j,`mt-1 opacity-70`),u(j,r(`继续依赖 required、pattern、minLength 等原生约束。`));let M=t(`div`);u(O,M);let N=t(`div`);u(M,N),s(N,`font-medium text-base-content`),u(N,r(`语义外观补齐`));let P=t(`div`);u(M,P),s(P,`mt-1 opacity-70`),u(P,r(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let R=t(`div`);u(O,R);let z=t(`div`);u(R,z),s(z,`font-medium text-base-content`),u(z,r(`表单结构复用`));let B=t(`div`);u(R,B),s(B,`mt-1 opacity-70`),u(B,r(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=t(`div`);u(m,V),s(V,`text-sm mt-3`);let H=t(`a`);u(V,H),n(H,`href`,`https://daisyui.com/components/validator/`),n(H,`target`,`_blank`),n(H,`rel`,`noreferrer`),u(H,r(`查看 daisyUI 原始静态样式`));let U=a(`rue:component:anchor`);u(m,U),d(()=>{l(p(I,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:e,preview:()=>v(`form`,{className:`grid w-full max-w-xs gap-2`,children:[y(F,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),y(F.Hint,{children:`Enter valid email address`}),y(S,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`}),m,U)});let W=a(`rue:component:anchor`);u(m,W),d(()=>{l(p(I,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:i,preview:()=>v(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[v(`div`,{className:`grid gap-2`,children:[v(F,{as:`select`,appearance:`select`,required:!0,children:[y(`option`,{value:``,children:`Choose:`}),y(`option`,{value:`tabs`,children:`Tabs`}),y(`option`,{value:`spaces`,children:`Spaces`})]}),y(F.Hint,{children:`Required`})]}),v(`div`,{className:`grid gap-2`,children:[y(F,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),y(F.Hint,{children:`Required`})]}),v(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[y(F,{appearance:`checkbox`,type:`checkbox`,required:!0}),y(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),v(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[y(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),y(F,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`}),m,W)});let G=a(`rue:component:anchor`);u(m,G),d(()=>{l(p(I,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:c,preview:()=>v(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[y(ee,{}),y(te,{})]}),code:`const syncNativeValidity = (event: Event, invalidRef: { value: boolean }) => {
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
</form>`}),m,G)});let K=a(`rue:component:anchor`);u(m,K),d(()=>{l(p(I,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:_,preview:()=>v(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[y(F.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),y(F.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),v(F.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[y(`option`,{children:`Stable`}),y(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`}),m,K)});let q=a(`rue:component:anchor`);u(m,q),d(()=>{l(p(I,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:x,preview:()=>v(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[y(F.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),v(F.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[y(`option`,{value:``,children:`Choose:`}),y(`option`,{value:`utc+8`,children:`UTC +8`}),y(`option`,{value:`utc`,children:`UTC`})]}),y(F.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`}),m,q)});let J=a(`rue:component:anchor`);u(m,J),d(()=>{l(p(I,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:C,preview:()=>v(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[y(F.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),y(F.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),v(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[y(S,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),y(S,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`}),m,J)});let Y=t(`div`);u(m,Y),s(Y,`my-8 lg:my-12`);let X=t(`h2`);u(Y,X),u(X,r(`API`));let Z=t(`p`);u(Y,Z),s(Z,`text-sm opacity-80`),u(Z,r(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Q=a(`rue:component:anchor`);u(Y,Q),d(()=>{l(p(L,{title:`Validator`,rows:ne}),Y,Q)});let $=a(`rue:component:anchor`);u(Y,$),d(()=>{l(p(L,{title:`Validator.Hint`,rows:re}),Y,$)});let ae=a(`rue:component:anchor`);return u(Y,ae),d(()=>{l(p(L,{title:`Validator.Field`,rows:ie}),Y,ae)}),f})}),f,h),f})};export{V as default};
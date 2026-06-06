import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,s as p,t as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h,n as g}from"./vapor-helpers-vapor-CJFAWine.js";import{a as _,i as v}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as y}from"./Code-Ds9lKLk6.js";import{t as b}from"./button-Cy4xZBmC.js";import{t as x}from"./tabs-DSy0eY-V.js";import{n as S}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var C=[`input`,`select`,`textarea`,`checkbox`,`toggle`],w=(...e)=>e.filter(Boolean).join(` `),T=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),E=e=>{let t=T(e);return C.find(e=>t.has(e))},D=(e,t,n)=>{if(t)return t;let r=E(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},O=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),k=(e,t,n,r)=>{let i=T(r);return w(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},A=e=>Array.isArray(e)?e.map((e,t)=>v(`span`,{className:`block`,children:e},`validator-line-${t}`)):e,j=({as:e,appearance:t,size:n,status:r,className:i,children:a,...o})=>{let s=D(e,t,i),c=O(e,s),l=k(s,n,r,i);return c===`select`?v(`select`,{...o,className:l,children:a}):c===`textarea`?v(`textarea`,{...o,className:l,children:a}):v(`input`,{...o,className:l})},M=({as:e=`p`,className:t,children:n,hideUntilInvalid:r,lines:i,...a})=>v(e,{...a,className:w(`validator-hint`,r?`hidden`:void 0,t),children:i?.length?A(i):n}),N=(e,t)=>w(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),P=Object.assign(j,{Hint:M,Field:({fieldAs:e=`fieldset`,className:t,controlClassName:n,label:r,labelClassName:i,hint:a,hintAs:o=`p`,hintClassName:s,hideHintWhenValid:c,extra:l,extraClassName:u,requiredMark:d,id:f,children:p,...m})=>{let h=e,g=typeof f==`string`&&f.trim()?f:void 0,y=g&&a!=null&&m[`aria-describedby`]==null?`${g}-hint`:void 0,b=m[`aria-describedby`]??y,x=d??m.required===!0;return _(h,{className:N(e,t),children:[r==null?null:_(`label`,{className:w(`label`,i),for:g,children:[v(`span`,{children:r}),x?v(`span`,{className:`text-error`,"aria-hidden":`true`,children:`*`}):null]}),v(j,{...m,id:g,"aria-describedby":b,className:n,children:p}),a==null?null:v(M,{id:y,as:o,className:s,hideUntilInvalid:c,children:A(a)}),l==null?null:v(`p`,{className:w(`label text-xs opacity-70`,u),children:A(l)})]})}}),F=t=>d(n=>{let r=e(`div`,n);l(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,r);o(r,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,f);o(f,h);let g=e(`h2`,h);o(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,u(`# `));let _=c(`rue:slot:anchor`);o(g,_),s(()=>{let e=t.title;a(()=>p(e,g,_))});let v=c(`rue:slot:anchor`);o(h,v),s(()=>{let n=t.summary?d(()=>{let n=i(),r=e(`p`,n);o(n,r),l(r,`m-0 text-sm opacity-70`);let u=c(`rue:slot:anchor`);return o(r,u),s(()=>{let e=t.summary;a(()=>p(e,r,u))}),n}):``;a(()=>p(n,h,v))});let b=c(`rue:component:anchor`);o(r,b),s(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});a(()=>p(e,r,b))});let S=c(`rue:slot:anchor`);return o(r,S),s(()=>{let e=t.tab.value===`preview`?t.preview():d(()=>{let e=i(),n=c(`rue:component:anchor`);return o(e,n),s(()=>{let r=m(y,{className:`mt-2`,lang:`tsx`,code:t.code});a(()=>p(r,e,n))}),e});a(()=>p(e,r,S))}),r}),I=t=>d(n=>{let r=e(`div`,n);l(r,`not-prose my-6 lg:my-8`);let m=e(`h3`,r);o(r,m),l(m,`mt-0 mb-3 text-base font-semibold text-base-content`);let h=c(`rue:slot:anchor`);o(m,h),s(()=>{let e=t.title;a(()=>p(e,m,h))});let _=e(`div`,r);o(r,_),l(_,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let v=e(`table`,_);o(_,v),l(v,`table table-zebra`);let y=e(`thead`,v);o(v,y);let b=e(`tr`,y);o(y,b);let x=e(`th`,b);o(b,x),o(x,u(`属性`));let S=e(`th`,b);o(b,S),o(S,u(`说明`));let C=e(`th`,b);o(b,C),o(C,u(`类型`));let w=e(`th`,b);o(b,w),o(w,u(`默认值`));let T=e(`tbody`,v);o(v,T);let E=c(`rue:list:start`),D=c(`rue:list:end`);o(T,E),o(T,D);let O=new Map;return s(()=>{O=g({items:t.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(t,n,r,l,u)=>{p(d(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{f(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>p(e,u,d))});let m=e(`td`,r);o(r,m);let h=c(`rue:slot:anchor`);o(m,h),s(()=>{let e=t.description;a(()=>p(e,m,h))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>p(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>p(e,b,x))}),n}),n,r)}})}),r}),L=(e,t)=>{let n=e.currentTarget;n&&(t.value=!n.checkValidity())},R=(e,t)=>{t.value=!0},z=e=>{e.preventDefault()},B=()=>{let{invalid:i}=h(`useSetup:0:0`,()=>n(()=>({invalid:h(`ref:1:0`,()=>r(!1))})));return d(n=>{let r=e(`form`,n);l(r,`grid gap-2`),t(r,`submit`,z);let u=c(`rue:component:anchor`);o(r,u),s(()=>{let e=m(P,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":i.value?`true`:`false`,onInvalid:e=>R(e,i),onInput:e=>L(e,i),onBlur:e=>L(e,i)});a(()=>p(e,r,u))});let d=c(`rue:component:anchor`);o(r,d),s(()=>{let e=m(P.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});a(()=>p(e,r,d))});let f=c(`rue:component:anchor`);return o(r,f),p(m(b,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),r,f),r})},ee=()=>{let{invalid:i}=h(`useSetup:0:0:dup1`,()=>n(()=>({invalid:h(`ref:1:1`,()=>r(!1))})));return d(n=>{let r=e(`form`,n);l(r,`grid gap-2`),t(r,`submit`,z);let u=c(`rue:component:anchor`);o(r,u),s(()=>{let e=m(P,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":i.value?`true`:`false`,onInvalid:e=>R(e,i),onInput:e=>L(e,i),onBlur:e=>L(e,i)});a(()=>p(e,r,u))});let d=c(`rue:component:anchor`);o(r,d),s(()=>{let e=m(P.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});a(()=>p(e,r,d))});let f=c(`rue:component:anchor`);return o(r,f),p(m(b,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),r,f),r})},te=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],V=()=>{let{tabBasic:t,tabHosts:f,tabRules:g,tabStatus:y,tabField:x,tabForm:C}=h(`useSetup:0:0:dup2`,()=>n(()=>({tabBasic:h(`ref:1:2`,()=>r(`preview`)),tabHosts:h(`ref:1:3`,()=>r(`preview`)),tabRules:h(`ref:1:4`,()=>r(`preview`)),tabStatus:h(`ref:1:5`,()=>r(`preview`)),tabField:h(`ref:1:6`,()=>r(`preview`)),tabForm:h(`ref:1:7`,()=>r(`preview`))})));return d(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),p(m(S,{children:d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,r);o(r,d),o(d,u(`Validator 校验辅助`));let h=e(`p`,r);o(r,h),l(h,`text-sm mt-3 mb-3`),o(h,u(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let S=e(`code`,h);o(h,S),o(S,u(`className="input validator"`)),o(h,u(`写法继续可用，但现在也可以直接通过`));let w=e(`code`,h);o(h,w),o(w,u(`appearance`)),o(h,u(`、`));let T=e(`code`,h);o(h,T),o(T,u(`size`)),o(h,u(`、`));let E=e(`code`,h);o(h,E),o(E,u(`status`)),o(h,u(`和`));let D=e(`code`,h);o(h,D),o(D,u(`Field`)),o(h,u(`组合件来组织更完整的表单场景。`));let O=e(`div`,r);o(r,O),l(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=e(`div`,O);o(O,k);let A=e(`div`,k);o(k,A),l(A,`font-medium text-base-content`),o(A,u(`原生校验优先`));let j=e(`div`,k);o(k,j),l(j,`mt-1 opacity-70`),o(j,u(`继续依赖 required、pattern、minLength 等原生约束。`));let M=e(`div`,O);o(O,M);let N=e(`div`,M);o(M,N),l(N,`font-medium text-base-content`),o(N,u(`语义外观补齐`));let L=e(`div`,M);o(M,L),l(L,`mt-1 opacity-70`),o(L,u(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let R=e(`div`,O);o(O,R);let z=e(`div`,R);o(R,z),l(z,`font-medium text-base-content`),o(z,u(`表单结构复用`));let V=e(`div`,R);o(R,V),l(V,`mt-1 opacity-70`),o(V,u(`Field 统一 label、hint、extra 和基础可访问性连线。`));let H=c(`rue:component:anchor`);o(r,H),s(()=>{let e=m(F,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:t,preview:()=>_(`form`,{className:`grid w-full max-w-xs gap-2`,children:[v(P,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),v(P.Hint,{children:`Enter valid email address`}),v(b,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});a(()=>p(e,r,H))});let U=c(`rue:component:anchor`);o(r,U),s(()=>{let e=m(F,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:f,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[_(`div`,{className:`grid gap-2`,children:[_(P,{as:`select`,appearance:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`tabs`,children:`Tabs`}),v(`option`,{value:`spaces`,children:`Spaces`})]}),v(P.Hint,{children:`Required`})]}),_(`div`,{className:`grid gap-2`,children:[v(P,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),v(P.Hint,{children:`Required`})]}),_(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(P,{appearance:`checkbox`,type:`checkbox`,required:!0}),v(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),_(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[v(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),v(P,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});a(()=>p(e,r,U))});let W=c(`rue:component:anchor`);o(r,W),s(()=>{let e=m(F,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:g,preview:()=>_(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[v(B,{}),v(ee,{})]}),code:`const syncNativeValidity = (event: Event, invalidRef: { value: boolean }) => {
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
</form>`});a(()=>p(e,r,W))});let G=c(`rue:component:anchor`);o(r,G),s(()=>{let e=m(F,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:y,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[v(P.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),v(P.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),_(P.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[v(`option`,{children:`Stable`}),v(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});a(()=>p(e,r,G))});let K=c(`rue:component:anchor`);o(r,K),s(()=>{let e=m(F,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:x,preview:()=>_(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[v(P.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),_(P.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[v(`option`,{value:``,children:`Choose:`}),v(`option`,{value:`utc+8`,children:`UTC +8`}),v(`option`,{value:`utc`,children:`UTC`})]}),v(P.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});a(()=>p(e,r,K))});let q=c(`rue:component:anchor`);o(r,q),s(()=>{let e=m(F,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:C,preview:()=>_(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[v(P.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),v(P.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),_(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[v(b,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),v(b,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});a(()=>p(e,r,q))});let J=e(`div`,r);o(r,J),l(J,`my-8 lg:my-12`);let Y=e(`h2`,J);o(J,Y),o(Y,u(`API`));let X=e(`p`,J);o(J,X),l(X,`text-sm opacity-80`),o(X,u(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=c(`rue:component:anchor`);o(J,Z),s(()=>{let e=m(I,{title:`Validator`,rows:te});a(()=>p(e,J,Z))});let Q=c(`rue:component:anchor`);o(J,Q),s(()=>{let e=m(I,{title:`Validator.Hint`,rows:ne});a(()=>p(e,J,Q))});let $=c(`rue:component:anchor`);return o(J,$),s(()=>{let e=m(I,{title:`Validator.Field`,rows:re});a(()=>p(e,J,$))}),n})}),r,h),r})};export{V as default};
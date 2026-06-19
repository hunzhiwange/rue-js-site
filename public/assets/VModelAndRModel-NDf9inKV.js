import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,ct as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as ee}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x=e=>u(o=>{let s=c(`label`,o);d(s,`floating-label`);let l=c(`input`,s);i(s,l),d(l,`input input-bordered w-full`),n(()=>{f(l,e.modelValue??``)}),a(l,`input`,t=>{e.onUpdateModelValue?.(t.target.value)});let u=c(`span`,s);i(s,u);let p=t(`rue:slot:anchor`);return i(u,p),n(()=>{let t=e.label;r(()=>m(t,u,p))}),s}),te=e=>{let{emitTitleUpdate:t}=y(`useSetup:0:0`,()=>o(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return u(r=>{let o=c(`label`,r);d(o,`floating-label`);let s=c(`input`,o);i(o,s),d(s,`input input-bordered w-full`),n(()=>{f(s,e.title??``)}),a(s,`input`,e.titleModifiers?.lazy?void 0:t),a(s,`change`,e.titleModifiers?.lazy?t:void 0);let l=c(`span`,o);return i(o,l),i(l,_(`title`)),o})},ne=e=>{let{emitFirstNameUpdate:t,emitLastNameUpdate:r}=y(`useSetup:0:0:dup1`,()=>o(()=>({emitFirstNameUpdate:t=>{let n=t.target.value;e.onUpdateFirstName?.(e.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:t=>{let n=t.target.value;e.onUpdateLastName?.(e.lastNameModifiers?.trim?n.trim():n)}})));return u(o=>{let s=c(`div`,o);d(s,`grid gap-3 md:grid-cols-2`);let l=c(`label`,s);i(s,l),d(l,`floating-label`);let u=c(`input`,l);i(l,u),d(u,`input input-bordered w-full`),n(()=>{f(u,e.firstName??``)}),a(u,`input`,e.firstNameModifiers?.lazy?void 0:t),a(u,`change`,e.firstNameModifiers?.lazy?t:void 0);let p=c(`span`,l);i(l,p),i(p,_(`firstName`));let m=c(`label`,s);i(s,m),d(m,`floating-label`);let h=c(`input`,m);i(m,h),d(h,`input input-bordered w-full`),n(()=>{f(h,e.lastName??``)}),a(h,`input`,e.lastNameModifiers?.lazy?void 0:r),a(h,`change`,e.lastNameModifiers?.lazy?r:void 0);let g=c(`span`,m);return i(m,g),i(g,_(`lastName`)),s})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
`),ce=`import { type FC, ref } from '@rue-js/rue'

type ModelFieldProps = {
  label: string
  modelValue?: string
  onUpdateModelValue?: (value: string) => void
}

const ModelField: FC<ModelFieldProps> = props => (
  <label className="floating-label">
    <input
      className="input input-bordered w-full"
      value={props.modelValue ?? ''}
      onInput={(event: Event) => {
        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)
      }}
    />
    <span>{props.label}</span>
  </label>
)

type TitleFieldProps = {
  title?: string
  titleModifiers?: { trim?: boolean; lazy?: boolean }
  onUpdateTitle?: (value: string) => void
}

const TitleField: FC<TitleFieldProps> = props => {
  const emitTitleUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <label className="floating-label">
      <input
        className="input input-bordered w-full"
        value={props.title ?? ''}
        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}
        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}
      />
      <span>title</span>
    </label>
  )
}

type UserNameEditorProps = {
  firstName?: string
  lastName?: string
  firstNameModifiers?: { trim?: boolean; lazy?: boolean }
  lastNameModifiers?: { trim?: boolean; lazy?: boolean }
  onUpdateFirstName?: (value: string) => void
  onUpdateLastName?: (value: string) => void
}

const UserNameEditor: FC<UserNameEditorProps> = props => {
  const emitFirstNameUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)
  }

  const emitLastNameUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <label className="floating-label">
        <input
          className="input input-bordered w-full"
          value={props.firstName ?? ''}
          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}
          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}
        />
        <span>firstName</span>
      </label>

      <label className="floating-label">
        <input
          className="input input-bordered w-full"
          value={props.lastName ?? ''}
          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}
          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}
        />
        <span>lastName</span>
      </label>
    </div>
  )
}

const Demo: FC = () => {
  const message = ref('  Rue model  ')
  const trimmed = ref('  keep edges tidy  ')
  const age = ref<string | number>('18')
  const lazyNote = ref('blur to sync')
  const accepted = ref(false)
  const title = ref('Guide draft')
  const articleTitle = ref('Inside Rue')
  const firstName = ref('Rue')
  const lastName = ref('JSX')

  return (
    <section className="grid gap-4">
      <input
        className="input input-bordered"
        value={message.value}
        onInput={event => {
          message.value = (event.target as HTMLInputElement).value
        }}
      />

      <input
        className="input input-bordered"
        value={trimmed.value}
        onInput={event => {
          trimmed.value = (event.target as HTMLInputElement).value.trim()
        }}
      />

      <input
        type="number"
        className="input input-bordered"
        value={String(age.value)}
        onInput={event => {
          const value = (event.target as HTMLInputElement).value
          const parsed = parseFloat(value)
          age.value = Number.isNaN(parsed) ? value : parsed
        }}
      />

      <input
        className="input input-bordered"
        value={lazyNote.value}
        onChange={event => {
          lazyNote.value = (event.target as HTMLInputElement).value
        }}
      />

      <input
        type="checkbox"
        className="checkbox"
        checked={accepted.value}
        onChange={event => {
          accepted.value = (event.target as HTMLInputElement).checked
        }}
      />

      <ModelField
        label="默认组件 model"
        modelValue={title.value}
        onUpdateModelValue={value => {
          title.value = value
        }}
      />

      <TitleField
        title={articleTitle.value}
        titleModifiers={{ trim: true }}
        onUpdateTitle={value => {
          articleTitle.value = value
        }}
      />

      <UserNameEditor
        firstName={firstName.value}
        lastName={lastName.value}
        firstNameModifiers={{ trim: true }}
        lastNameModifiers={{ lazy: true }}
        onUpdateFirstName={value => {
          firstName.value = value
        }}
        onUpdateLastName={value => {
          lastName.value = value
        }}
      />
    </section>
  )
}

export default Demo`,T=`import { type FC, ref } from '@rue-js/rue'

type TitleFieldProps = {
  title?: string
  titleModifiers?: { trim?: boolean; lazy?: boolean }
  onUpdateTitle?: (value: string) => void
}

const TitleField: FC<TitleFieldProps> = props => {
  const emitTitleUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <label className="floating-label">
      <input
        className="input input-bordered w-full"
        value={props.title ?? ''}
        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}
        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}
      />
      <span>title</span>
    </label>
  )
}

type UserNameEditorProps = {
  firstName?: string
  lastName?: string
  firstNameModifiers?: { trim?: boolean; lazy?: boolean }
  lastNameModifiers?: { trim?: boolean; lazy?: boolean }
  onUpdateFirstName?: (value: string) => void
  onUpdateLastName?: (value: string) => void
}

const UserNameEditor: FC<UserNameEditorProps> = props => {
  const emitFirstNameUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)
  }

  const emitLastNameUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <input
        className="input input-bordered"
        value={props.firstName ?? ''}
        onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}
        onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}
      />
      <input
        className="input input-bordered"
        value={props.lastName ?? ''}
        onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}
        onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}
      />
    </div>
  )
}

const Demo: FC = () => {
  const message = ref('  Rue model  ')
  const age = ref<string | number>('18')
  const lazyNote = ref('blur to sync')
  const articleTitle = ref('Inside Rue')
  const firstName = ref('Rue')
  const lastName = ref('JSX')

  return (
    <section className="grid gap-4">
      <input className="input input-bordered" v-model:trim={message.value} />
      <input type="number" className="input input-bordered" r-model:number={age.value} />
      <input className="input input-bordered" r-model:lazy={lazyNote.value} />
      <TitleField v-model:trim-title={articleTitle.value} />
      <UserNameEditor
        v-model:trim-first-name={firstName.value}
        v-model:lazy-last-name={lastName.value}
      />
    </section>
  )
}

export default Demo`,le=`import { type FC, ref } from '@rue-js/rue'

type ModelFieldProps = {
  label: string
  modelValue?: string
  onUpdateModelValue?: (value: string) => void
}

const ModelField: FC<ModelFieldProps> = props => (
  <label className="floating-label">
    <input
      className="input input-bordered w-full"
      value={props.modelValue ?? ''}
      onInput={(event: Event) => {
        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)
      }}
    />
    <span>{props.label}</span>
  </label>
)

type TitleFieldProps = {
  title?: string
  titleModifiers?: { trim?: boolean; lazy?: boolean }
  onUpdateTitle?: (value: string) => void
}

const TitleField: FC<TitleFieldProps> = props => {
  const emitTitleUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <input
      className="input input-bordered"
      value={props.title ?? ''}
      onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}
      onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}
    />
  )
}

type UserNameEditorProps = {
  firstName?: string
  lastName?: string
  firstNameModifiers?: { trim?: boolean; lazy?: boolean }
  lastNameModifiers?: { trim?: boolean; lazy?: boolean }
  onUpdateFirstName?: (value: string) => void
  onUpdateLastName?: (value: string) => void
}

const UserNameEditor: FC<UserNameEditorProps> = props => {
  const emitFirstNameUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)
  }

  const emitLastNameUpdate = (event: Event) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <input
        className="input input-bordered"
        value={props.firstName ?? ''}
        onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}
        onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}
      />
      <input
        className="input input-bordered"
        value={props.lastName ?? ''}
        onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}
        onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}
      />
    </div>
  )
}

const Demo: FC = () => {
  const title = ref('Guide draft')
  const articleTitle = ref('Inside Rue')
  const firstName = ref('Rue')
  const lastName = ref('JSX')

  return (
    <section className="grid gap-6">
      <div className="grid gap-3">
        <ModelField label="默认组件 model" v-model={title.value} />
        <TitleField v-model:trim-title={articleTitle.value} />
        <UserNameEditor
          v-model:trim-first-name={firstName.value}
          v-model:lazy-last-name={lastName.value}
        />
      </div>

      <div className="grid gap-3">
        <ModelField
          label="默认组件 model"
          modelValue={title.value}
          onUpdateModelValue={value => {
            title.value = value
          }}
        />
        <TitleField
          title={articleTitle.value}
          titleModifiers={{ trim: true }}
          onUpdateTitle={value => {
            articleTitle.value = value
          }}
        />
        <UserNameEditor
          firstName={firstName.value}
          lastName={lastName.value}
          firstNameModifiers={{ trim: true }}
          lastNameModifiers={{ lazy: true }}
          onUpdateFirstName={value => {
            firstName.value = value
          }}
          onUpdateLastName={value => {
            lastName.value = value
          }}
        />
      </div>
    </section>
  )
}

export default Demo`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>o(()=>({activeTab:y(`ref:1:0`,()=>v(`preview`)),message:y(`ref:1:1`,()=>v(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>v(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>v(`18`)),lazyNote:y(`ref:1:4`,()=>v(`blur to sync`)),accepted:y(`ref:1:5`,()=>v(!1)),title:y(`ref:1:6`,()=>v(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>v(`Inside Rue`)),firstName:y(`ref:1:8`,()=>v(`Rue`)),lastName:y(`ref:1:9`,()=>v(`JSX`)),manualMessage:y(`ref:1:10`,()=>v(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>v(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>v(`18`)),manualLazyNote:y(`ref:1:13`,()=>v(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>v(!1))})));return u(o=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),m(g(b,{children:u(()=>{let o=e(),v=c(`div`,o);i(o,v),d(v,`space-y-6`);let y=c(`div`,v);i(v,y),d(y,`space-y-3`);let b=c(`h1`,y);i(y,b),d(b,`text-5xl font-semibold`),i(b,_(`v-model / r-model`));let Se=c(`p`,y);i(y,Se),d(Se,`text-base-content/70 max-w-3xl`),i(Se,_(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=c(`div`,v);i(v,E),h(E,`role`,`tablist`),d(E,`tabs tabs-box w-fit`);let D=c(`button`,E);i(E,D),h(D,`role`,`tab`),n(()=>{d(D,`tab ${S.value===`preview`?`tab-active`:``}`)}),a(D,`click`,()=>{S.value=`preview`}),i(D,_(`效果`));let O=c(`button`,E);i(E,O),h(O,`role`,`tab`),n(()=>{d(O,`tab ${S.value===`code`?`tab-active`:``}`)}),a(O,`click`,()=>{S.value=`code`}),i(O,_(`代码`));let k=t(`rue:slot:anchor`);i(v,k),n(()=>{let o=S.value===`preview`?u(()=>{let o=e(),u=c(`div`,o);i(o,u),d(u,`card bg-base-100 shadow`);let v=c(`div`,u);i(u,v),d(v,`card-body gap-6`);let y=c(`div`,v);i(v,y),h(y,`role`,`alert`),d(y,`alert alert-info`);let b=c(`span`,y);i(y,b),i(b,_(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=c(`section`,v);i(v,S),d(S,`space-y-3`);let w=c(`div`,S);i(S,w),d(w,`flex flex-wrap items-center justify-between gap-3`);let ce=c(`h2`,w);i(w,ce),d(ce,`text-xl font-semibold`),i(ce,_(`原生输入：真实指令 vs 手写等价`));let T=c(`div`,w);i(w,T),d(T,`flex flex-wrap gap-2`);let Se=c(`span`,T);i(T,Se),d(Se,`badge badge-primary`),i(Se,_(`directive`));let E=c(`span`,T);i(T,E),d(E,`badge badge-secondary`),i(E,_(`manual`));let D=c(`div`,S);i(S,D),d(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=c(`div`,D);i(D,O),d(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=c(`div`,O);i(O,k),d(k,`flex items-center justify-between gap-3`);let Ce=c(`h3`,k);i(k,Ce),d(Ce,`font-semibold`),i(Ce,_(`Rue TSX 实际写法`));let we=c(`span`,k);i(k,we),d(we,`badge badge-primary`),i(we,_(`v-model / r-model`));let A=c(`label`,O);i(O,A),d(A,`floating-label`);let Te=c(`input`,A);i(A,Te),d(Te,`input input-bordered w-full`),n(()=>{f(Te,re.value)}),a(Te,`input`,e=>{re.value=e.target.value});let Ee=c(`span`,A);i(A,Ee),i(Ee,_(`v-model`));let j=c(`label`,O);i(O,j),d(j,`floating-label`);let De=c(`input`,j);i(j,De),d(De,`input input-bordered w-full`),n(()=>{f(De,ie.value)}),a(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=c(`span`,j);i(j,Oe),i(Oe,_(`v-model:trim`));let M=c(`label`,O);i(O,M),d(M,`floating-label`);let ke=c(`input`,M);i(M,ke),h(ke,`type`,`number`),d(ke,`input input-bordered w-full`),n(()=>{f(ke,ae.value)}),a(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=c(`span`,M);i(M,Ae),i(Ae,_(`r-model:number`));let N=c(`label`,O);i(O,N),d(N,`floating-label`);let je=c(`input`,N);i(N,je),d(je,`input input-bordered w-full`),n(()=>{f(je,oe.value)}),a(je,`change`,e=>{oe.value=e.target.value});let Me=c(`span`,N);i(N,Me),i(Me,_(`r-model:lazy`));let P=c(`label`,O);i(O,P),d(P,`label cursor-pointer justify-start gap-3`);let Ne=c(`input`,P);i(P,Ne),h(Ne,`type`,`checkbox`),d(Ne,`checkbox`),n(()=>{s(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),a(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=c(`span`,P);i(P,Pe),d(Pe,`label-text`),i(Pe,_(`v-model checkbox`));let F=c(`div`,O);i(O,F),d(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=c(`p`,F);i(F,Fe),i(Fe,_(`message: `));let Ie=p(Fe);i(Fe,Ie),n(()=>{l(Ie,re.value||`空`)});let Le=c(`p`,F);i(F,Le),i(Le,_(`trimmed: `));let Re=p(Le);i(Le,Re),n(()=>{l(Re,ie.value||`空`)});let ze=c(`p`,F);i(F,ze),i(ze,_(`age: `));let Be=p(ze);i(ze,Be),n(()=>{l(Be,String(ae.value))});let Ve=c(`p`,F);i(F,Ve),i(Ve,_(`lazy: `));let He=p(Ve);i(Ve,He),n(()=>{l(He,oe.value||`空`)});let Ue=c(`p`,F);i(F,Ue),i(Ue,_(`accepted: `));let We=p(Ue);i(Ue,We),n(()=>{l(We,C.value?`true`:`false`)});let I=c(`div`,D);i(D,I),d(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=c(`div`,I);i(I,L),d(L,`flex items-center justify-between gap-3`);let Ge=c(`h3`,L);i(L,Ge),d(Ge,`font-semibold`),i(Ge,_(`手写 value / checked 对照`));let Ke=c(`span`,L);i(L,Ke),d(Ke,`badge badge-secondary`),i(Ke,_(`manual`));let R=c(`label`,I);i(I,R),d(R,`floating-label`);let qe=c(`input`,R);i(R,qe),d(qe,`input input-bordered w-full`),n(()=>{f(qe,_e.value)}),a(qe,`input`,e=>{ue(_e,e)});let Je=c(`span`,R);i(R,Je),i(Je,_(`value + onInput`));let z=c(`label`,I);i(I,z),d(z,`floating-label`);let Ye=c(`input`,z);i(z,Ye),d(Ye,`input input-bordered w-full`),n(()=>{f(Ye,ve.value)}),a(Ye,`input`,e=>{de(ve,e)});let Xe=c(`span`,z);i(z,Xe),i(Xe,_(`trim 后手写写回`));let B=c(`label`,I);i(I,B),d(B,`floating-label`);let Ze=c(`input`,B);i(B,Ze),h(Ze,`type`,`number`),d(Ze,`input input-bordered w-full`),n(()=>{f(Ze,String(ye.value))}),a(Ze,`input`,e=>{fe(ye,e)});let Qe=c(`span`,B);i(B,Qe),i(Qe,_(`parseFloat 后手写写回`));let V=c(`label`,I);i(I,V),d(V,`floating-label`);let $e=c(`input`,V);i(V,$e),d($e,`input input-bordered w-full`),n(()=>{f($e,be.value)}),a($e,`change`,e=>{ue(be,e)});let et=c(`span`,V);i(V,et),i(et,_(`onChange 延迟同步`));let H=c(`label`,I);i(I,H),d(H,`label cursor-pointer justify-start gap-3`);let tt=c(`input`,H);i(H,tt),h(tt,`type`,`checkbox`),d(tt,`checkbox`),n(()=>{s(tt,!!xe.value)}),a(tt,`change`,e=>{pe(xe,e)});let nt=c(`span`,H);i(H,nt),d(nt,`label-text`),i(nt,_(`checked + onChange`));let U=c(`div`,I);i(I,U),d(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=c(`p`,U);i(U,rt),i(rt,_(`message: `));let it=p(rt);i(rt,it),n(()=>{l(it,_e.value||`空`)});let at=c(`p`,U);i(U,at),i(at,_(`trimmed: `));let ot=p(at);i(at,ot),n(()=>{l(ot,ve.value||`空`)});let st=c(`p`,U);i(U,st),i(st,_(`age: `));let ct=p(st);i(st,ct),n(()=>{l(ct,String(ye.value))});let lt=c(`p`,U);i(U,lt),i(lt,_(`lazy: `));let ut=p(lt);i(lt,ut),n(()=>{l(ut,be.value||`空`)});let dt=c(`p`,U);i(U,dt),i(dt,_(`accepted: `));let ft=p(dt);i(dt,ft),n(()=>{l(ft,xe.value?`true`:`false`)});let W=c(`section`,v);i(v,W),d(W,`space-y-3`);let G=c(`div`,W);i(W,G),d(G,`flex flex-wrap items-center justify-between gap-3`);let pt=c(`h2`,G);i(G,pt),d(pt,`text-xl font-semibold`),i(pt,_(`组件：真实 v-model vs 等价 props`));let mt=c(`span`,G);i(G,mt),d(mt,`badge badge-info badge-lg`),i(mt,_(`component compare`));let K=c(`div`,W);i(W,K),d(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=c(`div`,K);i(K,q),d(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=c(`div`,q);i(q,J),d(J,`flex items-center justify-between gap-3`);let ht=c(`h3`,J);i(J,ht),d(ht,`font-semibold`),i(ht,_(`Rue TSX 实际组件写法`));let gt=c(`span`,J);i(J,gt),d(gt,`badge badge-primary`),i(gt,_(`v-model`));let _t=t(`rue:component:anchor`);i(q,_t),n(()=>{let e=g(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});r(()=>m(e,q,_t))});let vt=t(`rue:component:anchor`);i(q,vt),n(()=>{let e=g(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});r(()=>m(e,q,vt))});let yt=t(`rue:component:anchor`);i(q,yt),n(()=>{let e=g(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});r(()=>m(e,q,yt))});let Y=c(`div`,q);i(q,Y),d(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=c(`p`,Y);i(Y,bt),i(bt,_(`title: `));let xt=p(bt);i(bt,xt),n(()=>{l(xt,se.value||`空`)});let St=c(`p`,Y);i(Y,St),i(St,_(`articleTitle: `));let Ct=p(St);i(St,Ct),n(()=>{l(Ct,me.value||`空`)});let X=c(`p`,Y);i(Y,X),i(X,_(`firstName / lastName: `));let wt=p(X);i(X,wt),n(()=>{l(wt,he.value)}),i(X,_(` `));let Tt=p(X);i(X,Tt),n(()=>{l(Tt,ge.value)});let Z=c(`div`,K);i(K,Z),d(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=c(`div`,Z);i(Z,Q),d(Q,`flex items-center justify-between gap-3`);let Et=c(`h3`,Q);i(Q,Et),d(Et,`font-semibold`),i(Et,_(`等价手写 props`));let Dt=c(`span`,Q);i(Q,Dt),d(Dt,`badge badge-secondary`),i(Dt,_(`modelValue / onUpdateXxx`));let Ot=t(`rue:component:anchor`);i(Z,Ot),n(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:le});r(()=>m(e,Z,Ot))});let $=c(`div`,Z);i(Z,$),d($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=c(`p`,$);i($,kt);let At=c(`strong`,kt);i(kt,At),i(At,_(`v-model`)),i(kt,_(`-> modelValue + onUpdateModelValue`));let jt=c(`p`,$);i($,jt);let Mt=c(`strong`,jt);i(jt,Mt),i(Mt,_(`v-model:trim-title`)),i(jt,_(`-> title + titleModifiers + onUpdateTitle`));let Nt=c(`p`,$);i($,Nt);let Pt=c(`strong`,Nt);i(Nt,Pt),i(Pt,_(`v-model:trim-first-name`)),i(Nt,_(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=c(`p`,$);i($,Ft);let It=c(`strong`,Ft);return i(Ft,It),i(It,_(`v-model:lazy-last-name`)),i(Ft,_(`-> lastName + lastNameModifiers + onUpdateLastName`)),o}):``;r(()=>m(o,v,k))}),i(v,_(` `));let Ce=t(`rue:slot:anchor`);return i(v,Ce),n(()=>{let a=S.value===`code`?u(()=>{let a=e(),o=c(`div`,a);i(a,o),d(o,`grid gap-6`);let s=c(`div`,o);i(o,s),d(s,`card bg-base-100 shadow overflow-auto`);let l=c(`div`,s);i(s,l),d(l,`card-body gap-3`);let u=c(`h2`,l);i(l,u),d(u,`card-title`),i(u,_(`Rue TSX 实际源码`));let f=t(`rue:component:anchor`);i(l,f),n(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:w});r(()=>m(e,l,f))});let p=c(`div`,o);i(o,p),d(p,`card bg-base-100 shadow overflow-auto`);let h=c(`div`,p);i(p,h),d(h,`card-body gap-3`);let v=c(`h2`,h);i(h,v),d(v,`card-title`),i(v,_(`手写 modelValue / value 对照`));let y=t(`rue:component:anchor`);i(h,y),n(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ce});r(()=>m(e,h,y))});let b=c(`div`,o);i(o,b),d(b,`card bg-base-100 shadow overflow-auto`);let x=c(`div`,b);i(b,x),d(x,`card-body gap-3`);let te=c(`h2`,x);i(x,te),d(te,`card-title`),i(te,_(`TSX-safe 修饰符写法`));let ne=t(`rue:component:anchor`);return i(x,ne),n(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:T});r(()=>m(e,x,ne))}),a}):``;r(()=>m(a,v,Ce))}),o})}),v,y),v})};export{me as default};
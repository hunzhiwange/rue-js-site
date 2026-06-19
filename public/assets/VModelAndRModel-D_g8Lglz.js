import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,ht as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as ee}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var x=n=>d(a=>{let s=_(`label`,a);v(s,`floating-label`);let c=_(`input`,s);o(s,c),v(c,`input input-bordered w-full`),t(()=>{u(c,n.modelValue??``)}),i(c,`input`,e=>{n.onUpdateModelValue?.(e.target.value)});let l=_(`span`,s);o(s,l);let d=e(`rue:slot:anchor`);return o(l,d),t(()=>{let e=n.label;r(()=>m(e,l,d))}),s}),te=e=>{let{emitTitleUpdate:n}=y(`useSetup:0:0`,()=>a(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return d(r=>{let a=_(`label`,r);v(a,`floating-label`);let s=_(`input`,a);o(a,s),v(s,`input input-bordered w-full`),t(()=>{u(s,e.title??``)}),i(s,`input`,e.titleModifiers?.lazy?void 0:n),i(s,`change`,e.titleModifiers?.lazy?n:void 0);let c=_(`span`,a);return o(a,c),o(c,p(`title`)),a})},ne=e=>{let{emitFirstNameUpdate:n,emitLastNameUpdate:r}=y(`useSetup:0:0:dup1`,()=>a(()=>({emitFirstNameUpdate:t=>{let n=t.target.value;e.onUpdateFirstName?.(e.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:t=>{let n=t.target.value;e.onUpdateLastName?.(e.lastNameModifiers?.trim?n.trim():n)}})));return d(a=>{let s=_(`div`,a);v(s,`grid gap-3 md:grid-cols-2`);let c=_(`label`,s);o(s,c),v(c,`floating-label`);let l=_(`input`,c);o(c,l),v(l,`input input-bordered w-full`),t(()=>{u(l,e.firstName??``)}),i(l,`input`,e.firstNameModifiers?.lazy?void 0:n),i(l,`change`,e.firstNameModifiers?.lazy?n:void 0);let d=_(`span`,c);o(c,d),o(d,p(`firstName`));let f=_(`label`,s);o(s,f),v(f,`floating-label`);let m=_(`input`,f);o(f,m),v(m,`input input-bordered w-full`),t(()=>{u(m,e.lastName??``)}),i(m,`input`,e.lastNameModifiers?.lazy?void 0:r),i(m,`change`,e.lastNameModifiers?.lazy?r:void 0);let h=_(`span`,f);return o(f,h),o(h,p(`lastName`)),s})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>a(()=>({activeTab:y(`ref:1:0`,()=>n(`preview`)),message:y(`ref:1:1`,()=>n(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>n(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>n(`18`)),lazyNote:y(`ref:1:4`,()=>n(`blur to sync`)),accepted:y(`ref:1:5`,()=>n(!1)),title:y(`ref:1:6`,()=>n(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>n(`Inside Rue`)),firstName:y(`ref:1:8`,()=>n(`Rue`)),lastName:y(`ref:1:9`,()=>n(`JSX`)),manualMessage:y(`ref:1:10`,()=>n(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>n(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>n(`18`)),manualLazyNote:y(`ref:1:13`,()=>n(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>n(!1))})));return d(n=>{let a=c(),y=e(`rue:component:anchor`);return o(a,y),m(g(b,{children:d(()=>{let n=c(),a=_(`div`,n);o(n,a),v(a,`space-y-6`);let y=_(`div`,a);o(a,y),v(y,`space-y-3`);let b=_(`h1`,y);o(y,b),v(b,`text-5xl font-semibold`),o(b,p(`v-model / r-model`));let Se=_(`p`,y);o(y,Se),v(Se,`text-base-content/70 max-w-3xl`),o(Se,p(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=_(`div`,a);o(a,E),s(E,`role`,`tablist`),v(E,`tabs tabs-box w-fit`);let D=_(`button`,E);o(E,D),s(D,`role`,`tab`),t(()=>{v(D,`tab ${S.value===`preview`?`tab-active`:``}`)}),i(D,`click`,()=>{S.value=`preview`}),o(D,p(`效果`));let O=_(`button`,E);o(E,O),s(O,`role`,`tab`),t(()=>{v(O,`tab ${S.value===`code`?`tab-active`:``}`)}),i(O,`click`,()=>{S.value=`code`}),o(O,p(`代码`));let k=e(`rue:slot:anchor`);o(a,k),t(()=>{let n=S.value===`preview`?d(()=>{let n=c(),a=_(`div`,n);o(n,a),v(a,`card bg-base-100 shadow`);let d=_(`div`,a);o(a,d),v(d,`card-body gap-6`);let y=_(`div`,d);o(d,y),s(y,`role`,`alert`),v(y,`alert alert-info`);let b=_(`span`,y);o(y,b),o(b,p(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=_(`section`,d);o(d,S),v(S,`space-y-3`);let w=_(`div`,S);o(S,w),v(w,`flex flex-wrap items-center justify-between gap-3`);let ce=_(`h2`,w);o(w,ce),v(ce,`text-xl font-semibold`),o(ce,p(`原生输入：真实指令 vs 手写等价`));let T=_(`div`,w);o(w,T),v(T,`flex flex-wrap gap-2`);let Se=_(`span`,T);o(T,Se),v(Se,`badge badge-primary`),o(Se,p(`directive`));let E=_(`span`,T);o(T,E),v(E,`badge badge-secondary`),o(E,p(`manual`));let D=_(`div`,S);o(S,D),v(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=_(`div`,D);o(D,O),v(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=_(`div`,O);o(O,k),v(k,`flex items-center justify-between gap-3`);let Ce=_(`h3`,k);o(k,Ce),v(Ce,`font-semibold`),o(Ce,p(`Rue TSX 实际写法`));let we=_(`span`,k);o(k,we),v(we,`badge badge-primary`),o(we,p(`v-model / r-model`));let A=_(`label`,O);o(O,A),v(A,`floating-label`);let Te=_(`input`,A);o(A,Te),v(Te,`input input-bordered w-full`),t(()=>{u(Te,re.value)}),i(Te,`input`,e=>{re.value=e.target.value});let Ee=_(`span`,A);o(A,Ee),o(Ee,p(`v-model`));let j=_(`label`,O);o(O,j),v(j,`floating-label`);let De=_(`input`,j);o(j,De),v(De,`input input-bordered w-full`),t(()=>{u(De,ie.value)}),i(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=_(`span`,j);o(j,Oe),o(Oe,p(`v-model:trim`));let M=_(`label`,O);o(O,M),v(M,`floating-label`);let ke=_(`input`,M);o(M,ke),s(ke,`type`,`number`),v(ke,`input input-bordered w-full`),t(()=>{u(ke,ae.value)}),i(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=_(`span`,M);o(M,Ae),o(Ae,p(`r-model:number`));let N=_(`label`,O);o(O,N),v(N,`floating-label`);let je=_(`input`,N);o(N,je),v(je,`input input-bordered w-full`),t(()=>{u(je,oe.value)}),i(je,`change`,e=>{oe.value=e.target.value});let Me=_(`span`,N);o(N,Me),o(Me,p(`r-model:lazy`));let P=_(`label`,O);o(O,P),v(P,`label cursor-pointer justify-start gap-3`);let Ne=_(`input`,P);o(P,Ne),s(Ne,`type`,`checkbox`),v(Ne,`checkbox`),t(()=>{f(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),i(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=_(`span`,P);o(P,Pe),v(Pe,`label-text`),o(Pe,p(`v-model checkbox`));let F=_(`div`,O);o(O,F),v(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=_(`p`,F);o(F,Fe),o(Fe,p(`message: `));let Ie=h(Fe);o(Fe,Ie),t(()=>{l(Ie,re.value||`空`)});let Le=_(`p`,F);o(F,Le),o(Le,p(`trimmed: `));let Re=h(Le);o(Le,Re),t(()=>{l(Re,ie.value||`空`)});let ze=_(`p`,F);o(F,ze),o(ze,p(`age: `));let Be=h(ze);o(ze,Be),t(()=>{l(Be,String(ae.value))});let Ve=_(`p`,F);o(F,Ve),o(Ve,p(`lazy: `));let He=h(Ve);o(Ve,He),t(()=>{l(He,oe.value||`空`)});let Ue=_(`p`,F);o(F,Ue),o(Ue,p(`accepted: `));let We=h(Ue);o(Ue,We),t(()=>{l(We,C.value?`true`:`false`)});let I=_(`div`,D);o(D,I),v(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=_(`div`,I);o(I,L),v(L,`flex items-center justify-between gap-3`);let Ge=_(`h3`,L);o(L,Ge),v(Ge,`font-semibold`),o(Ge,p(`手写 value / checked 对照`));let Ke=_(`span`,L);o(L,Ke),v(Ke,`badge badge-secondary`),o(Ke,p(`manual`));let R=_(`label`,I);o(I,R),v(R,`floating-label`);let qe=_(`input`,R);o(R,qe),v(qe,`input input-bordered w-full`),t(()=>{u(qe,_e.value)}),i(qe,`input`,e=>{ue(_e,e)});let Je=_(`span`,R);o(R,Je),o(Je,p(`value + onInput`));let z=_(`label`,I);o(I,z),v(z,`floating-label`);let Ye=_(`input`,z);o(z,Ye),v(Ye,`input input-bordered w-full`),t(()=>{u(Ye,ve.value)}),i(Ye,`input`,e=>{de(ve,e)});let Xe=_(`span`,z);o(z,Xe),o(Xe,p(`trim 后手写写回`));let B=_(`label`,I);o(I,B),v(B,`floating-label`);let Ze=_(`input`,B);o(B,Ze),s(Ze,`type`,`number`),v(Ze,`input input-bordered w-full`),t(()=>{u(Ze,String(ye.value))}),i(Ze,`input`,e=>{fe(ye,e)});let Qe=_(`span`,B);o(B,Qe),o(Qe,p(`parseFloat 后手写写回`));let V=_(`label`,I);o(I,V),v(V,`floating-label`);let $e=_(`input`,V);o(V,$e),v($e,`input input-bordered w-full`),t(()=>{u($e,be.value)}),i($e,`change`,e=>{ue(be,e)});let et=_(`span`,V);o(V,et),o(et,p(`onChange 延迟同步`));let H=_(`label`,I);o(I,H),v(H,`label cursor-pointer justify-start gap-3`);let tt=_(`input`,H);o(H,tt),s(tt,`type`,`checkbox`),v(tt,`checkbox`),t(()=>{f(tt,!!xe.value)}),i(tt,`change`,e=>{pe(xe,e)});let nt=_(`span`,H);o(H,nt),v(nt,`label-text`),o(nt,p(`checked + onChange`));let U=_(`div`,I);o(I,U),v(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=_(`p`,U);o(U,rt),o(rt,p(`message: `));let it=h(rt);o(rt,it),t(()=>{l(it,_e.value||`空`)});let at=_(`p`,U);o(U,at),o(at,p(`trimmed: `));let ot=h(at);o(at,ot),t(()=>{l(ot,ve.value||`空`)});let st=_(`p`,U);o(U,st),o(st,p(`age: `));let ct=h(st);o(st,ct),t(()=>{l(ct,String(ye.value))});let lt=_(`p`,U);o(U,lt),o(lt,p(`lazy: `));let ut=h(lt);o(lt,ut),t(()=>{l(ut,be.value||`空`)});let dt=_(`p`,U);o(U,dt),o(dt,p(`accepted: `));let ft=h(dt);o(dt,ft),t(()=>{l(ft,xe.value?`true`:`false`)});let W=_(`section`,d);o(d,W),v(W,`space-y-3`);let G=_(`div`,W);o(W,G),v(G,`flex flex-wrap items-center justify-between gap-3`);let pt=_(`h2`,G);o(G,pt),v(pt,`text-xl font-semibold`),o(pt,p(`组件：真实 v-model vs 等价 props`));let mt=_(`span`,G);o(G,mt),v(mt,`badge badge-info badge-lg`),o(mt,p(`component compare`));let K=_(`div`,W);o(W,K),v(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=_(`div`,K);o(K,q),v(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=_(`div`,q);o(q,J),v(J,`flex items-center justify-between gap-3`);let ht=_(`h3`,J);o(J,ht),v(ht,`font-semibold`),o(ht,p(`Rue TSX 实际组件写法`));let gt=_(`span`,J);o(J,gt),v(gt,`badge badge-primary`),o(gt,p(`v-model`));let _t=e(`rue:component:anchor`);o(q,_t),t(()=>{let e=g(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});r(()=>m(e,q,_t))});let vt=e(`rue:component:anchor`);o(q,vt),t(()=>{let e=g(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});r(()=>m(e,q,vt))});let yt=e(`rue:component:anchor`);o(q,yt),t(()=>{let e=g(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});r(()=>m(e,q,yt))});let Y=_(`div`,q);o(q,Y),v(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=_(`p`,Y);o(Y,bt),o(bt,p(`title: `));let xt=h(bt);o(bt,xt),t(()=>{l(xt,se.value||`空`)});let St=_(`p`,Y);o(Y,St),o(St,p(`articleTitle: `));let Ct=h(St);o(St,Ct),t(()=>{l(Ct,me.value||`空`)});let X=_(`p`,Y);o(Y,X),o(X,p(`firstName / lastName: `));let wt=h(X);o(X,wt),t(()=>{l(wt,he.value)}),o(X,p(` `));let Tt=h(X);o(X,Tt),t(()=>{l(Tt,ge.value)});let Z=_(`div`,K);o(K,Z),v(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=_(`div`,Z);o(Z,Q),v(Q,`flex items-center justify-between gap-3`);let Et=_(`h3`,Q);o(Q,Et),v(Et,`font-semibold`),o(Et,p(`等价手写 props`));let Dt=_(`span`,Q);o(Q,Dt),v(Dt,`badge badge-secondary`),o(Dt,p(`modelValue / onUpdateXxx`));let Ot=e(`rue:component:anchor`);o(Z,Ot),t(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:le});r(()=>m(e,Z,Ot))});let $=_(`div`,Z);o(Z,$),v($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=_(`p`,$);o($,kt);let At=_(`strong`,kt);o(kt,At),o(At,p(`v-model`)),o(kt,p(`-> modelValue + onUpdateModelValue`));let jt=_(`p`,$);o($,jt);let Mt=_(`strong`,jt);o(jt,Mt),o(Mt,p(`v-model:trim-title`)),o(jt,p(`-> title + titleModifiers + onUpdateTitle`));let Nt=_(`p`,$);o($,Nt);let Pt=_(`strong`,Nt);o(Nt,Pt),o(Pt,p(`v-model:trim-first-name`)),o(Nt,p(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=_(`p`,$);o($,Ft);let It=_(`strong`,Ft);return o(Ft,It),o(It,p(`v-model:lazy-last-name`)),o(Ft,p(`-> lastName + lastNameModifiers + onUpdateLastName`)),n}):``;r(()=>m(n,a,k))}),o(a,p(` `));let Ce=e(`rue:slot:anchor`);return o(a,Ce),t(()=>{let n=S.value===`code`?d(()=>{let n=c(),i=_(`div`,n);o(n,i),v(i,`grid gap-6`);let a=_(`div`,i);o(i,a),v(a,`card bg-base-100 shadow overflow-auto`);let s=_(`div`,a);o(a,s),v(s,`card-body gap-3`);let l=_(`h2`,s);o(s,l),v(l,`card-title`),o(l,p(`Rue TSX 实际源码`));let u=e(`rue:component:anchor`);o(s,u),t(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:w});r(()=>m(e,s,u))});let d=_(`div`,i);o(i,d),v(d,`card bg-base-100 shadow overflow-auto`);let f=_(`div`,d);o(d,f),v(f,`card-body gap-3`);let h=_(`h2`,f);o(f,h),v(h,`card-title`),o(h,p(`手写 modelValue / value 对照`));let y=e(`rue:component:anchor`);o(f,y),t(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ce});r(()=>m(e,f,y))});let b=_(`div`,i);o(i,b),v(b,`card bg-base-100 shadow overflow-auto`);let x=_(`div`,b);o(b,x),v(x,`card-body gap-3`);let te=_(`h2`,x);o(x,te),v(te,`card-title`),o(te,p(`TSX-safe 修饰符写法`));let ne=e(`rue:component:anchor`);return o(x,ne),t(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:T});r(()=>m(e,x,ne))}),n}):``;r(()=>m(n,a,Ce))}),n})}),a,y),a})};export{me as default};
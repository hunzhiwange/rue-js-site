import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as ee}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x=t=>l(s=>{let c=d(`label`,s);a(c,`floating-label`);let l=d(`input`,c);n(c,l),a(l,`input input-bordered w-full`),v(()=>{i(l,t.modelValue??``)}),r(l,`input`,e=>{t.onUpdateModelValue?.(e.target.value)});let u=d(`span`,c);n(c,u);let p=o(`rue:slot:anchor`);return n(u,p),v(()=>{let n=t.label;e(()=>f(n,u,p))}),c}),te=e=>{let{emitTitleUpdate:t}=y(`useSetup:0:0`,()=>s(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return l(o=>{let s=d(`label`,o);a(s,`floating-label`);let c=d(`input`,s);n(s,c),a(c,`input input-bordered w-full`),v(()=>{i(c,e.title??``)}),r(c,`input`,e.titleModifiers?.lazy?void 0:t),r(c,`change`,e.titleModifiers?.lazy?t:void 0);let l=d(`span`,s);return n(s,l),n(l,p(`title`)),s})},ne=e=>{let{emitFirstNameUpdate:t,emitLastNameUpdate:o}=y(`useSetup:0:0:dup1`,()=>s(()=>({emitFirstNameUpdate:t=>{let n=t.target.value;e.onUpdateFirstName?.(e.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:t=>{let n=t.target.value;e.onUpdateLastName?.(e.lastNameModifiers?.trim?n.trim():n)}})));return l(s=>{let c=d(`div`,s);a(c,`grid gap-3 md:grid-cols-2`);let l=d(`label`,c);n(c,l),a(l,`floating-label`);let u=d(`input`,l);n(l,u),a(u,`input input-bordered w-full`),v(()=>{i(u,e.firstName??``)}),r(u,`input`,e.firstNameModifiers?.lazy?void 0:t),r(u,`change`,e.firstNameModifiers?.lazy?t:void 0);let f=d(`span`,l);n(l,f),n(f,p(`firstName`));let m=d(`label`,c);n(c,m),a(m,`floating-label`);let h=d(`input`,m);n(m,h),a(h,`input input-bordered w-full`),v(()=>{i(h,e.lastName??``)}),r(h,`input`,e.lastNameModifiers?.lazy?void 0:o),r(h,`change`,e.lastNameModifiers?.lazy?o:void 0);let g=d(`span`,m);return n(m,g),n(g,p(`lastName`)),c})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>s(()=>({activeTab:y(`ref:1:0`,()=>t(`preview`)),message:y(`ref:1:1`,()=>t(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>t(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>t(`18`)),lazyNote:y(`ref:1:4`,()=>t(`blur to sync`)),accepted:y(`ref:1:5`,()=>t(!1)),title:y(`ref:1:6`,()=>t(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>t(`Inside Rue`)),firstName:y(`ref:1:8`,()=>t(`Rue`)),lastName:y(`ref:1:9`,()=>t(`JSX`)),manualMessage:y(`ref:1:10`,()=>t(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>t(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>t(`18`)),manualLazyNote:y(`ref:1:13`,()=>t(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>t(!1))})));return l(t=>{let s=h(),y=o(`rue:component:anchor`);return n(s,y),f(m(b,{children:l(()=>{let t=h(),s=d(`div`,t);n(t,s),a(s,`space-y-6`);let y=d(`div`,s);n(s,y),a(y,`space-y-3`);let b=d(`h1`,y);n(y,b),a(b,`text-5xl font-semibold`),n(b,p(`v-model / r-model`));let Se=d(`p`,y);n(y,Se),a(Se,`text-base-content/70 max-w-3xl`),n(Se,p(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=d(`div`,s);n(s,E),u(E,`role`,`tablist`),a(E,`tabs tabs-box w-fit`);let D=d(`button`,E);n(E,D),u(D,`role`,`tab`),v(()=>{a(D,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(D,`click`,()=>{S.value=`preview`}),n(D,p(`效果`));let O=d(`button`,E);n(E,O),u(O,`role`,`tab`),v(()=>{a(O,`tab ${S.value===`code`?`tab-active`:``}`)}),r(O,`click`,()=>{S.value=`code`}),n(O,p(`代码`));let k=o(`rue:slot:anchor`);n(s,k),v(()=>{let t=S.value===`preview`?l(()=>{let t=h(),s=d(`div`,t);n(t,s),a(s,`card bg-base-100 shadow`);let l=d(`div`,s);n(s,l),a(l,`card-body gap-6`);let y=d(`div`,l);n(l,y),u(y,`role`,`alert`),a(y,`alert alert-info`);let b=d(`span`,y);n(y,b),n(b,p(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=d(`section`,l);n(l,S),a(S,`space-y-3`);let w=d(`div`,S);n(S,w),a(w,`flex flex-wrap items-center justify-between gap-3`);let ce=d(`h2`,w);n(w,ce),a(ce,`text-xl font-semibold`),n(ce,p(`原生输入：真实指令 vs 手写等价`));let T=d(`div`,w);n(w,T),a(T,`flex flex-wrap gap-2`);let Se=d(`span`,T);n(T,Se),a(Se,`badge badge-primary`),n(Se,p(`directive`));let E=d(`span`,T);n(T,E),a(E,`badge badge-secondary`),n(E,p(`manual`));let D=d(`div`,S);n(S,D),a(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=d(`div`,D);n(D,O),a(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=d(`div`,O);n(O,k),a(k,`flex items-center justify-between gap-3`);let Ce=d(`h3`,k);n(k,Ce),a(Ce,`font-semibold`),n(Ce,p(`Rue TSX 实际写法`));let we=d(`span`,k);n(k,we),a(we,`badge badge-primary`),n(we,p(`v-model / r-model`));let A=d(`label`,O);n(O,A),a(A,`floating-label`);let Te=d(`input`,A);n(A,Te),a(Te,`input input-bordered w-full`),v(()=>{i(Te,re.value)}),r(Te,`input`,e=>{re.value=e.target.value});let Ee=d(`span`,A);n(A,Ee),n(Ee,p(`v-model`));let j=d(`label`,O);n(O,j),a(j,`floating-label`);let De=d(`input`,j);n(j,De),a(De,`input input-bordered w-full`),v(()=>{i(De,ie.value)}),r(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=d(`span`,j);n(j,Oe),n(Oe,p(`v-model:trim`));let M=d(`label`,O);n(O,M),a(M,`floating-label`);let ke=d(`input`,M);n(M,ke),u(ke,`type`,`number`),a(ke,`input input-bordered w-full`),v(()=>{i(ke,ae.value)}),r(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=d(`span`,M);n(M,Ae),n(Ae,p(`r-model:number`));let N=d(`label`,O);n(O,N),a(N,`floating-label`);let je=d(`input`,N);n(N,je),a(je,`input input-bordered w-full`),v(()=>{i(je,oe.value)}),r(je,`change`,e=>{oe.value=e.target.value});let Me=d(`span`,N);n(N,Me),n(Me,p(`r-model:lazy`));let P=d(`label`,O);n(O,P),a(P,`label cursor-pointer justify-start gap-3`);let Ne=d(`input`,P);n(P,Ne),u(Ne,`type`,`checkbox`),a(Ne,`checkbox`),v(()=>{g(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),r(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=d(`span`,P);n(P,Pe),a(Pe,`label-text`),n(Pe,p(`v-model checkbox`));let F=d(`div`,O);n(O,F),a(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=d(`p`,F);n(F,Fe),n(Fe,p(`message: `));let Ie=c(Fe);n(Fe,Ie),v(()=>{_(Ie,re.value||`空`)});let Le=d(`p`,F);n(F,Le),n(Le,p(`trimmed: `));let Re=c(Le);n(Le,Re),v(()=>{_(Re,ie.value||`空`)});let ze=d(`p`,F);n(F,ze),n(ze,p(`age: `));let Be=c(ze);n(ze,Be),v(()=>{_(Be,String(ae.value))});let Ve=d(`p`,F);n(F,Ve),n(Ve,p(`lazy: `));let He=c(Ve);n(Ve,He),v(()=>{_(He,oe.value||`空`)});let Ue=d(`p`,F);n(F,Ue),n(Ue,p(`accepted: `));let We=c(Ue);n(Ue,We),v(()=>{_(We,C.value?`true`:`false`)});let I=d(`div`,D);n(D,I),a(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=d(`div`,I);n(I,L),a(L,`flex items-center justify-between gap-3`);let Ge=d(`h3`,L);n(L,Ge),a(Ge,`font-semibold`),n(Ge,p(`手写 value / checked 对照`));let Ke=d(`span`,L);n(L,Ke),a(Ke,`badge badge-secondary`),n(Ke,p(`manual`));let R=d(`label`,I);n(I,R),a(R,`floating-label`);let qe=d(`input`,R);n(R,qe),a(qe,`input input-bordered w-full`),v(()=>{i(qe,_e.value)}),r(qe,`input`,e=>{ue(_e,e)});let Je=d(`span`,R);n(R,Je),n(Je,p(`value + onInput`));let z=d(`label`,I);n(I,z),a(z,`floating-label`);let Ye=d(`input`,z);n(z,Ye),a(Ye,`input input-bordered w-full`),v(()=>{i(Ye,ve.value)}),r(Ye,`input`,e=>{de(ve,e)});let Xe=d(`span`,z);n(z,Xe),n(Xe,p(`trim 后手写写回`));let B=d(`label`,I);n(I,B),a(B,`floating-label`);let Ze=d(`input`,B);n(B,Ze),u(Ze,`type`,`number`),a(Ze,`input input-bordered w-full`),v(()=>{i(Ze,String(ye.value))}),r(Ze,`input`,e=>{fe(ye,e)});let Qe=d(`span`,B);n(B,Qe),n(Qe,p(`parseFloat 后手写写回`));let V=d(`label`,I);n(I,V),a(V,`floating-label`);let $e=d(`input`,V);n(V,$e),a($e,`input input-bordered w-full`),v(()=>{i($e,be.value)}),r($e,`change`,e=>{ue(be,e)});let et=d(`span`,V);n(V,et),n(et,p(`onChange 延迟同步`));let H=d(`label`,I);n(I,H),a(H,`label cursor-pointer justify-start gap-3`);let tt=d(`input`,H);n(H,tt),u(tt,`type`,`checkbox`),a(tt,`checkbox`),v(()=>{g(tt,!!xe.value)}),r(tt,`change`,e=>{pe(xe,e)});let nt=d(`span`,H);n(H,nt),a(nt,`label-text`),n(nt,p(`checked + onChange`));let U=d(`div`,I);n(I,U),a(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=d(`p`,U);n(U,rt),n(rt,p(`message: `));let it=c(rt);n(rt,it),v(()=>{_(it,_e.value||`空`)});let at=d(`p`,U);n(U,at),n(at,p(`trimmed: `));let ot=c(at);n(at,ot),v(()=>{_(ot,ve.value||`空`)});let st=d(`p`,U);n(U,st),n(st,p(`age: `));let ct=c(st);n(st,ct),v(()=>{_(ct,String(ye.value))});let lt=d(`p`,U);n(U,lt),n(lt,p(`lazy: `));let ut=c(lt);n(lt,ut),v(()=>{_(ut,be.value||`空`)});let dt=d(`p`,U);n(U,dt),n(dt,p(`accepted: `));let ft=c(dt);n(dt,ft),v(()=>{_(ft,xe.value?`true`:`false`)});let W=d(`section`,l);n(l,W),a(W,`space-y-3`);let G=d(`div`,W);n(W,G),a(G,`flex flex-wrap items-center justify-between gap-3`);let pt=d(`h2`,G);n(G,pt),a(pt,`text-xl font-semibold`),n(pt,p(`组件：真实 v-model vs 等价 props`));let mt=d(`span`,G);n(G,mt),a(mt,`badge badge-info badge-lg`),n(mt,p(`component compare`));let K=d(`div`,W);n(W,K),a(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=d(`div`,K);n(K,q),a(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=d(`div`,q);n(q,J),a(J,`flex items-center justify-between gap-3`);let ht=d(`h3`,J);n(J,ht),a(ht,`font-semibold`),n(ht,p(`Rue TSX 实际组件写法`));let gt=d(`span`,J);n(J,gt),a(gt,`badge badge-primary`),n(gt,p(`v-model`));let _t=o(`rue:component:anchor`);n(q,_t),v(()=>{let t=m(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});e(()=>f(t,q,_t))});let vt=o(`rue:component:anchor`);n(q,vt),v(()=>{let t=m(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});e(()=>f(t,q,vt))});let yt=o(`rue:component:anchor`);n(q,yt),v(()=>{let t=m(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});e(()=>f(t,q,yt))});let Y=d(`div`,q);n(q,Y),a(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=d(`p`,Y);n(Y,bt),n(bt,p(`title: `));let xt=c(bt);n(bt,xt),v(()=>{_(xt,se.value||`空`)});let St=d(`p`,Y);n(Y,St),n(St,p(`articleTitle: `));let Ct=c(St);n(St,Ct),v(()=>{_(Ct,me.value||`空`)});let X=d(`p`,Y);n(Y,X),n(X,p(`firstName / lastName: `));let wt=c(X);n(X,wt),v(()=>{_(wt,he.value)}),n(X,p(` `));let Tt=c(X);n(X,Tt),v(()=>{_(Tt,ge.value)});let Z=d(`div`,K);n(K,Z),a(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=d(`div`,Z);n(Z,Q),a(Q,`flex items-center justify-between gap-3`);let Et=d(`h3`,Q);n(Q,Et),a(Et,`font-semibold`),n(Et,p(`等价手写 props`));let Dt=d(`span`,Q);n(Q,Dt),a(Dt,`badge badge-secondary`),n(Dt,p(`modelValue / onUpdateXxx`));let Ot=o(`rue:component:anchor`);n(Z,Ot),v(()=>{let t=m(ee,{className:`h-full`,lang:`tsx`,code:le});e(()=>f(t,Z,Ot))});let $=d(`div`,Z);n(Z,$),a($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=d(`p`,$);n($,kt);let At=d(`strong`,kt);n(kt,At),n(At,p(`v-model`)),n(kt,p(`-> modelValue + onUpdateModelValue`));let jt=d(`p`,$);n($,jt);let Mt=d(`strong`,jt);n(jt,Mt),n(Mt,p(`v-model:trim-title`)),n(jt,p(`-> title + titleModifiers + onUpdateTitle`));let Nt=d(`p`,$);n($,Nt);let Pt=d(`strong`,Nt);n(Nt,Pt),n(Pt,p(`v-model:trim-first-name`)),n(Nt,p(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=d(`p`,$);n($,Ft);let It=d(`strong`,Ft);return n(Ft,It),n(It,p(`v-model:lazy-last-name`)),n(Ft,p(`-> lastName + lastNameModifiers + onUpdateLastName`)),t}):``;e(()=>f(t,s,k))}),n(s,p(` `));let Ce=o(`rue:slot:anchor`);return n(s,Ce),v(()=>{let t=S.value===`code`?l(()=>{let t=h(),r=d(`div`,t);n(t,r),a(r,`grid gap-6`);let i=d(`div`,r);n(r,i),a(i,`card bg-base-100 shadow overflow-auto`);let s=d(`div`,i);n(i,s),a(s,`card-body gap-3`);let c=d(`h2`,s);n(s,c),a(c,`card-title`),n(c,p(`Rue TSX 实际源码`));let l=o(`rue:component:anchor`);n(s,l),v(()=>{let t=m(ee,{className:`h-full`,lang:`tsx`,code:w});e(()=>f(t,s,l))});let u=d(`div`,r);n(r,u),a(u,`card bg-base-100 shadow overflow-auto`);let g=d(`div`,u);n(u,g),a(g,`card-body gap-3`);let _=d(`h2`,g);n(g,_),a(_,`card-title`),n(_,p(`手写 modelValue / value 对照`));let y=o(`rue:component:anchor`);n(g,y),v(()=>{let t=m(ee,{className:`h-full`,lang:`tsx`,code:ce});e(()=>f(t,g,y))});let b=d(`div`,r);n(r,b),a(b,`card bg-base-100 shadow overflow-auto`);let x=d(`div`,b);n(b,x),a(x,`card-body gap-3`);let te=d(`h2`,x);n(x,te),a(te,`card-title`),n(te,p(`TSX-safe 修饰符写法`));let ne=o(`rue:component:anchor`);return n(x,ne),v(()=>{let t=m(ee,{className:`h-full`,lang:`tsx`,code:T});e(()=>f(t,x,ne))}),t}):``;e(()=>f(t,s,Ce))}),t})}),s,y),s})};export{me as default};
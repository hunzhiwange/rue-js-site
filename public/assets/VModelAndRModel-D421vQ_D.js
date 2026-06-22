import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _,yt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as ee}from"./Code-C5NjdoiC.js";import{r as b}from"./SidebarPlaygroundExample-DpItFif-.js";var x=n=>l(i=>{let a=m(`label`,i);p(a,`floating-label`);let o=m(`input`,a);e(a,o),p(o,`input input-bordered w-full`),t(()=>{v(o,n.modelValue??``)}),r(o,`input`,e=>{n.onUpdateModelValue?.(e.target.value)});let s=m(`span`,a);e(a,s);let c=_(`rue:slot:anchor`);return e(s,c),t(()=>{let e=n.label;g(()=>d(e,s,c))}),a}),te=n=>{let{emitTitleUpdate:i}=y(`useSetup:0:0`,()=>f(()=>({emitTitleUpdate:e=>{let t=e.target.value;n.onUpdateTitle?.(n.titleModifiers?.trim?t.trim():t)}})));return l(a=>{let o=m(`label`,a);p(o,`floating-label`);let s=m(`input`,o);e(o,s),p(s,`input input-bordered w-full`),t(()=>{v(s,n.title??``)}),r(s,`input`,n.titleModifiers?.lazy?void 0:i),r(s,`change`,n.titleModifiers?.lazy?i:void 0);let l=m(`span`,o);return e(o,l),e(l,c(`title`)),o})},ne=n=>{let{emitFirstNameUpdate:i,emitLastNameUpdate:a}=y(`useSetup:0:0:dup1`,()=>f(()=>({emitFirstNameUpdate:e=>{let t=e.target.value;n.onUpdateFirstName?.(n.firstNameModifiers?.trim?t.trim():t)},emitLastNameUpdate:e=>{let t=e.target.value;n.onUpdateLastName?.(n.lastNameModifiers?.trim?t.trim():t)}})));return l(o=>{let s=m(`div`,o);p(s,`grid gap-3 md:grid-cols-2`);let l=m(`label`,s);e(s,l),p(l,`floating-label`);let u=m(`input`,l);e(l,u),p(u,`input input-bordered w-full`),t(()=>{v(u,n.firstName??``)}),r(u,`input`,n.firstNameModifiers?.lazy?void 0:i),r(u,`change`,n.firstNameModifiers?.lazy?i:void 0);let d=m(`span`,l);e(l,d),e(d,c(`firstName`));let f=m(`label`,s);e(s,f),p(f,`floating-label`);let h=m(`input`,f);e(f,h),p(h,`input input-bordered w-full`),t(()=>{v(h,n.lastName??``)}),r(h,`input`,n.lastNameModifiers?.lazy?void 0:a),r(h,`change`,n.lastNameModifiers?.lazy?a:void 0);let g=m(`span`,f);return e(f,g),e(g,c(`lastName`)),s})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>f(()=>({activeTab:y(`ref:1:0`,()=>n(`preview`)),message:y(`ref:1:1`,()=>n(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>n(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>n(`18`)),lazyNote:y(`ref:1:4`,()=>n(`blur to sync`)),accepted:y(`ref:1:5`,()=>n(!1)),title:y(`ref:1:6`,()=>n(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>n(`Inside Rue`)),firstName:y(`ref:1:8`,()=>n(`Rue`)),lastName:y(`ref:1:9`,()=>n(`JSX`)),manualMessage:y(`ref:1:10`,()=>n(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>n(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>n(`18`)),manualLazyNote:y(`ref:1:13`,()=>n(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>n(!1))})));return l(n=>{let f=u(),y=_(`rue:component:anchor`);return e(f,y),d(h(b,{children:l(()=>{let n=u(),f=m(`div`,n);e(n,f),p(f,`space-y-6`);let y=m(`div`,f);e(f,y),p(y,`space-y-3`);let b=m(`h1`,y);e(y,b),p(b,`text-5xl font-semibold`),e(b,c(`v-model / r-model`));let Se=m(`p`,y);e(y,Se),p(Se,`text-base-content/70 max-w-3xl`),e(Se,c(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=m(`div`,f);e(f,E),o(E,`role`,`tablist`),p(E,`tabs tabs-box w-fit`);let D=m(`button`,E);e(E,D),o(D,`role`,`tab`),t(()=>{p(D,`tab ${S.value===`preview`?`tab-active`:``}`)}),r(D,`click`,()=>{S.value=`preview`}),e(D,c(`效果`));let O=m(`button`,E);e(E,O),o(O,`role`,`tab`),t(()=>{p(O,`tab ${S.value===`code`?`tab-active`:``}`)}),r(O,`click`,()=>{S.value=`code`}),e(O,c(`代码`));let k=_(`rue:slot:anchor`);e(f,k),t(()=>{let n=S.value===`preview`?l(()=>{let n=u(),l=m(`div`,n);e(n,l),p(l,`card bg-base-100 shadow`);let f=m(`div`,l);e(l,f),p(f,`card-body gap-6`);let y=m(`div`,f);e(f,y),o(y,`role`,`alert`),p(y,`alert alert-info`);let b=m(`span`,y);e(y,b),e(b,c(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=m(`section`,f);e(f,S),p(S,`space-y-3`);let w=m(`div`,S);e(S,w),p(w,`flex flex-wrap items-center justify-between gap-3`);let ce=m(`h2`,w);e(w,ce),p(ce,`text-xl font-semibold`),e(ce,c(`原生输入：真实指令 vs 手写等价`));let T=m(`div`,w);e(w,T),p(T,`flex flex-wrap gap-2`);let Se=m(`span`,T);e(T,Se),p(Se,`badge badge-primary`),e(Se,c(`directive`));let E=m(`span`,T);e(T,E),p(E,`badge badge-secondary`),e(E,c(`manual`));let D=m(`div`,S);e(S,D),p(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=m(`div`,D);e(D,O),p(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=m(`div`,O);e(O,k),p(k,`flex items-center justify-between gap-3`);let Ce=m(`h3`,k);e(k,Ce),p(Ce,`font-semibold`),e(Ce,c(`Rue TSX 实际写法`));let we=m(`span`,k);e(k,we),p(we,`badge badge-primary`),e(we,c(`v-model / r-model`));let A=m(`label`,O);e(O,A),p(A,`floating-label`);let Te=m(`input`,A);e(A,Te),p(Te,`input input-bordered w-full`),t(()=>{v(Te,re.value)}),r(Te,`input`,e=>{re.value=e.target.value});let Ee=m(`span`,A);e(A,Ee),e(Ee,c(`v-model`));let j=m(`label`,O);e(O,j),p(j,`floating-label`);let De=m(`input`,j);e(j,De),p(De,`input input-bordered w-full`),t(()=>{v(De,ie.value)}),r(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=m(`span`,j);e(j,Oe),e(Oe,c(`v-model:trim`));let M=m(`label`,O);e(O,M),p(M,`floating-label`);let ke=m(`input`,M);e(M,ke),o(ke,`type`,`number`),p(ke,`input input-bordered w-full`),t(()=>{v(ke,ae.value)}),r(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=m(`span`,M);e(M,Ae),e(Ae,c(`r-model:number`));let N=m(`label`,O);e(O,N),p(N,`floating-label`);let je=m(`input`,N);e(N,je),p(je,`input input-bordered w-full`),t(()=>{v(je,oe.value)}),r(je,`change`,e=>{oe.value=e.target.value});let Me=m(`span`,N);e(N,Me),e(Me,c(`r-model:lazy`));let P=m(`label`,O);e(O,P),p(P,`label cursor-pointer justify-start gap-3`);let Ne=m(`input`,P);e(P,Ne),o(Ne,`type`,`checkbox`),p(Ne,`checkbox`),t(()=>{s(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),r(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=m(`span`,P);e(P,Pe),p(Pe,`label-text`),e(Pe,c(`v-model checkbox`));let F=m(`div`,O);e(O,F),p(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=m(`p`,F);e(F,Fe),e(Fe,c(`message: `));let Ie=i(Fe);e(Fe,Ie),t(()=>{a(Ie,re.value||`空`)});let Le=m(`p`,F);e(F,Le),e(Le,c(`trimmed: `));let Re=i(Le);e(Le,Re),t(()=>{a(Re,ie.value||`空`)});let ze=m(`p`,F);e(F,ze),e(ze,c(`age: `));let Be=i(ze);e(ze,Be),t(()=>{a(Be,String(ae.value))});let Ve=m(`p`,F);e(F,Ve),e(Ve,c(`lazy: `));let He=i(Ve);e(Ve,He),t(()=>{a(He,oe.value||`空`)});let Ue=m(`p`,F);e(F,Ue),e(Ue,c(`accepted: `));let We=i(Ue);e(Ue,We),t(()=>{a(We,C.value?`true`:`false`)});let I=m(`div`,D);e(D,I),p(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=m(`div`,I);e(I,L),p(L,`flex items-center justify-between gap-3`);let Ge=m(`h3`,L);e(L,Ge),p(Ge,`font-semibold`),e(Ge,c(`手写 value / checked 对照`));let Ke=m(`span`,L);e(L,Ke),p(Ke,`badge badge-secondary`),e(Ke,c(`manual`));let R=m(`label`,I);e(I,R),p(R,`floating-label`);let qe=m(`input`,R);e(R,qe),p(qe,`input input-bordered w-full`),t(()=>{v(qe,_e.value)}),r(qe,`input`,e=>{ue(_e,e)});let Je=m(`span`,R);e(R,Je),e(Je,c(`value + onInput`));let z=m(`label`,I);e(I,z),p(z,`floating-label`);let Ye=m(`input`,z);e(z,Ye),p(Ye,`input input-bordered w-full`),t(()=>{v(Ye,ve.value)}),r(Ye,`input`,e=>{de(ve,e)});let Xe=m(`span`,z);e(z,Xe),e(Xe,c(`trim 后手写写回`));let B=m(`label`,I);e(I,B),p(B,`floating-label`);let Ze=m(`input`,B);e(B,Ze),o(Ze,`type`,`number`),p(Ze,`input input-bordered w-full`),t(()=>{v(Ze,String(ye.value))}),r(Ze,`input`,e=>{fe(ye,e)});let Qe=m(`span`,B);e(B,Qe),e(Qe,c(`parseFloat 后手写写回`));let V=m(`label`,I);e(I,V),p(V,`floating-label`);let $e=m(`input`,V);e(V,$e),p($e,`input input-bordered w-full`),t(()=>{v($e,be.value)}),r($e,`change`,e=>{ue(be,e)});let et=m(`span`,V);e(V,et),e(et,c(`onChange 延迟同步`));let H=m(`label`,I);e(I,H),p(H,`label cursor-pointer justify-start gap-3`);let tt=m(`input`,H);e(H,tt),o(tt,`type`,`checkbox`),p(tt,`checkbox`),t(()=>{s(tt,!!xe.value)}),r(tt,`change`,e=>{pe(xe,e)});let nt=m(`span`,H);e(H,nt),p(nt,`label-text`),e(nt,c(`checked + onChange`));let U=m(`div`,I);e(I,U),p(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=m(`p`,U);e(U,rt),e(rt,c(`message: `));let it=i(rt);e(rt,it),t(()=>{a(it,_e.value||`空`)});let at=m(`p`,U);e(U,at),e(at,c(`trimmed: `));let ot=i(at);e(at,ot),t(()=>{a(ot,ve.value||`空`)});let st=m(`p`,U);e(U,st),e(st,c(`age: `));let ct=i(st);e(st,ct),t(()=>{a(ct,String(ye.value))});let lt=m(`p`,U);e(U,lt),e(lt,c(`lazy: `));let ut=i(lt);e(lt,ut),t(()=>{a(ut,be.value||`空`)});let dt=m(`p`,U);e(U,dt),e(dt,c(`accepted: `));let ft=i(dt);e(dt,ft),t(()=>{a(ft,xe.value?`true`:`false`)});let W=m(`section`,f);e(f,W),p(W,`space-y-3`);let G=m(`div`,W);e(W,G),p(G,`flex flex-wrap items-center justify-between gap-3`);let pt=m(`h2`,G);e(G,pt),p(pt,`text-xl font-semibold`),e(pt,c(`组件：真实 v-model vs 等价 props`));let mt=m(`span`,G);e(G,mt),p(mt,`badge badge-info badge-lg`),e(mt,c(`component compare`));let K=m(`div`,W);e(W,K),p(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=m(`div`,K);e(K,q),p(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=m(`div`,q);e(q,J),p(J,`flex items-center justify-between gap-3`);let ht=m(`h3`,J);e(J,ht),p(ht,`font-semibold`),e(ht,c(`Rue TSX 实际组件写法`));let gt=m(`span`,J);e(J,gt),p(gt,`badge badge-primary`),e(gt,c(`v-model`));let _t=_(`rue:component:anchor`);e(q,_t),t(()=>{let e=h(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});g(()=>d(e,q,_t))});let vt=_(`rue:component:anchor`);e(q,vt),t(()=>{let e=h(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});g(()=>d(e,q,vt))});let yt=_(`rue:component:anchor`);e(q,yt),t(()=>{let e=h(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});g(()=>d(e,q,yt))});let Y=m(`div`,q);e(q,Y),p(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=m(`p`,Y);e(Y,bt),e(bt,c(`title: `));let xt=i(bt);e(bt,xt),t(()=>{a(xt,se.value||`空`)});let St=m(`p`,Y);e(Y,St),e(St,c(`articleTitle: `));let Ct=i(St);e(St,Ct),t(()=>{a(Ct,me.value||`空`)});let X=m(`p`,Y);e(Y,X),e(X,c(`firstName / lastName: `));let wt=i(X);e(X,wt),t(()=>{a(wt,he.value)}),e(X,c(` `));let Tt=i(X);e(X,Tt),t(()=>{a(Tt,ge.value)});let Z=m(`div`,K);e(K,Z),p(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=m(`div`,Z);e(Z,Q),p(Q,`flex items-center justify-between gap-3`);let Et=m(`h3`,Q);e(Q,Et),p(Et,`font-semibold`),e(Et,c(`等价手写 props`));let Dt=m(`span`,Q);e(Q,Dt),p(Dt,`badge badge-secondary`),e(Dt,c(`modelValue / onUpdateXxx`));let Ot=_(`rue:component:anchor`);e(Z,Ot),t(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:le});g(()=>d(e,Z,Ot))});let $=m(`div`,Z);e(Z,$),p($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=m(`p`,$);e($,kt);let At=m(`strong`,kt);e(kt,At),e(At,c(`v-model`)),e(kt,c(`-> modelValue + onUpdateModelValue`));let jt=m(`p`,$);e($,jt);let Mt=m(`strong`,jt);e(jt,Mt),e(Mt,c(`v-model:trim-title`)),e(jt,c(`-> title + titleModifiers + onUpdateTitle`));let Nt=m(`p`,$);e($,Nt);let Pt=m(`strong`,Nt);e(Nt,Pt),e(Pt,c(`v-model:trim-first-name`)),e(Nt,c(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=m(`p`,$);e($,Ft);let It=m(`strong`,Ft);return e(Ft,It),e(It,c(`v-model:lazy-last-name`)),e(Ft,c(`-> lastName + lastNameModifiers + onUpdateLastName`)),n}):``;g(()=>d(n,f,k))}),e(f,c(` `));let Ce=_(`rue:slot:anchor`);return e(f,Ce),t(()=>{let n=S.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`grid gap-6`);let i=m(`div`,r);e(r,i),p(i,`card bg-base-100 shadow overflow-auto`);let a=m(`div`,i);e(i,a),p(a,`card-body gap-3`);let o=m(`h2`,a);e(a,o),p(o,`card-title`),e(o,c(`Rue TSX 实际源码`));let s=_(`rue:component:anchor`);e(a,s),t(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:w});g(()=>d(e,a,s))});let l=m(`div`,r);e(r,l),p(l,`card bg-base-100 shadow overflow-auto`);let f=m(`div`,l);e(l,f),p(f,`card-body gap-3`);let v=m(`h2`,f);e(f,v),p(v,`card-title`),e(v,c(`手写 modelValue / value 对照`));let y=_(`rue:component:anchor`);e(f,y),t(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ce});g(()=>d(e,f,y))});let b=m(`div`,r);e(r,b),p(b,`card bg-base-100 shadow overflow-auto`);let x=m(`div`,b);e(b,x),p(x,`card-body gap-3`);let te=m(`h2`,x);e(x,te),p(te,`card-title`),e(te,c(`TSX-safe 修饰符写法`));let ne=_(`rue:component:anchor`);return e(x,ne),t(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:T});g(()=>d(e,x,ne))}),n}):``;g(()=>d(n,f,Ce))}),n})}),f,y),f})};export{me as default};
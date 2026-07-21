import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m,wt as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as ee}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var x=e=>g(t=>{let n=d(`label`,t);r(n,`floating-label`);let a=d(`input`,n);f(n,a),r(a,`input input-bordered w-full`),p(()=>{s(a,e.modelValue??``)}),l(a,`input`,t=>{e.onUpdateModelValue?.(t.target.value)});let o=d(`span`,n);f(n,o);let c=i(`rue:slot:anchor`);return f(o,c),p(()=>{let t=e.label;m(()=>_(t,o,c))}),n}),te=t=>{let{emitTitleUpdate:n}=y(`useSetup:0:0`,()=>e(()=>({emitTitleUpdate:e=>{let n=e.target.value;t.onUpdateTitle?.(t.titleModifiers?.trim?n.trim():n)}})));return g(e=>{let i=d(`label`,e);r(i,`floating-label`);let a=d(`input`,i);f(i,a),r(a,`input input-bordered w-full`),p(()=>{s(a,t.title??``)}),l(a,`input`,t.titleModifiers?.lazy?void 0:n),l(a,`change`,t.titleModifiers?.lazy?n:void 0);let o=d(`span`,i);return f(i,o),f(o,c(`title`)),i})},ne=t=>{let{emitFirstNameUpdate:n,emitLastNameUpdate:i}=y(`useSetup:0:0:dup1`,()=>e(()=>({emitFirstNameUpdate:e=>{let n=e.target.value;t.onUpdateFirstName?.(t.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:e=>{let n=e.target.value;t.onUpdateLastName?.(t.lastNameModifiers?.trim?n.trim():n)}})));return g(e=>{let a=d(`div`,e);r(a,`grid gap-3 md:grid-cols-2`);let o=d(`label`,a);f(a,o),r(o,`floating-label`);let u=d(`input`,o);f(o,u),r(u,`input input-bordered w-full`),p(()=>{s(u,t.firstName??``)}),l(u,`input`,t.firstNameModifiers?.lazy?void 0:n),l(u,`change`,t.firstNameModifiers?.lazy?n:void 0);let m=d(`span`,o);f(o,m),f(m,c(`firstName`));let h=d(`label`,a);f(a,h),r(h,`floating-label`);let g=d(`input`,h);f(h,g),r(g,`input input-bordered w-full`),p(()=>{s(g,t.lastName??``)}),l(g,`input`,t.lastNameModifiers?.lazy?void 0:i),l(g,`change`,t.lastNameModifiers?.lazy?i:void 0);let _=d(`span`,h);return f(h,_),f(_,c(`lastName`)),a})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>e(()=>({activeTab:y(`ref:1:0`,()=>u(`preview`)),message:y(`ref:1:1`,()=>u(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>u(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>u(`18`)),lazyNote:y(`ref:1:4`,()=>u(`blur to sync`)),accepted:y(`ref:1:5`,()=>u(!1)),title:y(`ref:1:6`,()=>u(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>u(`Inside Rue`)),firstName:y(`ref:1:8`,()=>u(`Rue`)),lastName:y(`ref:1:9`,()=>u(`JSX`)),manualMessage:y(`ref:1:10`,()=>u(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>u(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>u(`18`)),manualLazyNote:y(`ref:1:13`,()=>u(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>u(!1))})));return g(e=>{let u=a(),y=i(`rue:component:anchor`);return f(u,y),_(v(b,{children:g(()=>{let e=a(),u=d(`div`,e);f(e,u),r(u,`space-y-6`);let y=d(`div`,u);f(u,y),r(y,`space-y-3`);let b=d(`h1`,y);f(y,b),r(b,`text-5xl font-semibold`),f(b,c(`v-model / r-model`));let Se=d(`p`,y);f(y,Se),r(Se,`text-base-content/70 max-w-3xl`),f(Se,c(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=d(`div`,u);f(u,E),t(E,`role`,`tablist`),r(E,`tabs tabs-box w-fit`);let D=d(`button`,E);f(E,D),t(D,`role`,`tab`),p(()=>{r(D,`tab ${S.value===`preview`?`tab-active`:``}`)}),l(D,`click`,()=>{S.value=`preview`}),f(D,c(`效果`));let O=d(`button`,E);f(E,O),t(O,`role`,`tab`),p(()=>{r(O,`tab ${S.value===`code`?`tab-active`:``}`)}),l(O,`click`,()=>{S.value=`code`}),f(O,c(`代码`));let k=i(`rue:slot:anchor`);f(u,k),p(()=>{let e=S.value===`preview`?g(()=>{let e=a(),u=d(`div`,e);f(e,u),r(u,`card bg-base-100 shadow`);let g=d(`div`,u);f(u,g),r(g,`card-body gap-6`);let y=d(`div`,g);f(g,y),t(y,`role`,`alert`),r(y,`alert alert-info`);let b=d(`span`,y);f(y,b),f(b,c(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=d(`section`,g);f(g,S),r(S,`space-y-3`);let w=d(`div`,S);f(S,w),r(w,`flex flex-wrap items-center justify-between gap-3`);let ce=d(`h2`,w);f(w,ce),r(ce,`text-xl font-semibold`),f(ce,c(`原生输入：真实指令 vs 手写等价`));let T=d(`div`,w);f(w,T),r(T,`flex flex-wrap gap-2`);let Se=d(`span`,T);f(T,Se),r(Se,`badge badge-primary`),f(Se,c(`directive`));let E=d(`span`,T);f(T,E),r(E,`badge badge-secondary`),f(E,c(`manual`));let D=d(`div`,S);f(S,D),r(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=d(`div`,D);f(D,O),r(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=d(`div`,O);f(O,k),r(k,`flex items-center justify-between gap-3`);let Ce=d(`h3`,k);f(k,Ce),r(Ce,`font-semibold`),f(Ce,c(`Rue TSX 实际写法`));let we=d(`span`,k);f(k,we),r(we,`badge badge-primary`),f(we,c(`v-model / r-model`));let A=d(`label`,O);f(O,A),r(A,`floating-label`);let Te=d(`input`,A);f(A,Te),r(Te,`input input-bordered w-full`),p(()=>{s(Te,re.value)}),l(Te,`input`,e=>{let t=e.target.value;re.value=t});let Ee=d(`span`,A);f(A,Ee),f(Ee,c(`v-model`));let j=d(`label`,O);f(O,j),r(j,`floating-label`);let De=d(`input`,j);f(j,De),r(De,`input input-bordered w-full`),p(()=>{s(De,ie.value)}),l(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=d(`span`,j);f(j,Oe),f(Oe,c(`v-model:trim`));let M=d(`label`,O);f(O,M),r(M,`floating-label`);let ke=d(`input`,M);f(M,ke),t(ke,`type`,`number`),r(ke,`input input-bordered w-full`),p(()=>{s(ke,ae.value)}),l(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=d(`span`,M);f(M,Ae),f(Ae,c(`r-model:number`));let N=d(`label`,O);f(O,N),r(N,`floating-label`);let je=d(`input`,N);f(N,je),r(je,`input input-bordered w-full`),p(()=>{s(je,oe.value)}),l(je,`change`,e=>{let t=e.target.value;oe.value=t});let Me=d(`span`,N);f(N,Me),f(Me,c(`r-model:lazy`));let P=d(`label`,O);f(O,P),r(P,`label cursor-pointer justify-start gap-3`);let Ne=d(`input`,P);f(P,Ne),t(Ne,`type`,`checkbox`),r(Ne,`checkbox`),p(()=>{h(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),l(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=d(`span`,P);f(P,Pe),r(Pe,`label-text`),f(Pe,c(`v-model checkbox`));let F=d(`div`,O);f(O,F),r(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=d(`p`,F);f(F,Fe),f(Fe,c(`message: `));let Ie=o(Fe);f(Fe,Ie),p(()=>{n(Ie,re.value||`空`)});let Le=d(`p`,F);f(F,Le),f(Le,c(`trimmed: `));let Re=o(Le);f(Le,Re),p(()=>{n(Re,ie.value||`空`)});let ze=d(`p`,F);f(F,ze),f(ze,c(`age: `));let Be=o(ze);f(ze,Be),p(()=>{n(Be,String(ae.value))});let Ve=d(`p`,F);f(F,Ve),f(Ve,c(`lazy: `));let He=o(Ve);f(Ve,He),p(()=>{n(He,oe.value||`空`)});let Ue=d(`p`,F);f(F,Ue),f(Ue,c(`accepted: `));let We=o(Ue);f(Ue,We),p(()=>{n(We,C.value?`true`:`false`)});let I=d(`div`,D);f(D,I),r(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=d(`div`,I);f(I,L),r(L,`flex items-center justify-between gap-3`);let Ge=d(`h3`,L);f(L,Ge),r(Ge,`font-semibold`),f(Ge,c(`手写 value / checked 对照`));let Ke=d(`span`,L);f(L,Ke),r(Ke,`badge badge-secondary`),f(Ke,c(`manual`));let R=d(`label`,I);f(I,R),r(R,`floating-label`);let qe=d(`input`,R);f(R,qe),r(qe,`input input-bordered w-full`),p(()=>{s(qe,_e.value)}),l(qe,`input`,e=>{ue(_e,e)});let Je=d(`span`,R);f(R,Je),f(Je,c(`value + onInput`));let z=d(`label`,I);f(I,z),r(z,`floating-label`);let Ye=d(`input`,z);f(z,Ye),r(Ye,`input input-bordered w-full`),p(()=>{s(Ye,ve.value)}),l(Ye,`input`,e=>{de(ve,e)});let Xe=d(`span`,z);f(z,Xe),f(Xe,c(`trim 后手写写回`));let B=d(`label`,I);f(I,B),r(B,`floating-label`);let Ze=d(`input`,B);f(B,Ze),t(Ze,`type`,`number`),r(Ze,`input input-bordered w-full`),p(()=>{s(Ze,String(ye.value))}),l(Ze,`input`,e=>{fe(ye,e)});let Qe=d(`span`,B);f(B,Qe),f(Qe,c(`parseFloat 后手写写回`));let V=d(`label`,I);f(I,V),r(V,`floating-label`);let $e=d(`input`,V);f(V,$e),r($e,`input input-bordered w-full`),p(()=>{s($e,be.value)}),l($e,`change`,e=>{ue(be,e)});let et=d(`span`,V);f(V,et),f(et,c(`onChange 延迟同步`));let H=d(`label`,I);f(I,H),r(H,`label cursor-pointer justify-start gap-3`);let tt=d(`input`,H);f(H,tt),t(tt,`type`,`checkbox`),r(tt,`checkbox`),p(()=>{h(tt,!!xe.value)}),l(tt,`change`,e=>{pe(xe,e)});let nt=d(`span`,H);f(H,nt),r(nt,`label-text`),f(nt,c(`checked + onChange`));let U=d(`div`,I);f(I,U),r(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=d(`p`,U);f(U,rt),f(rt,c(`message: `));let it=o(rt);f(rt,it),p(()=>{n(it,_e.value||`空`)});let at=d(`p`,U);f(U,at),f(at,c(`trimmed: `));let ot=o(at);f(at,ot),p(()=>{n(ot,ve.value||`空`)});let st=d(`p`,U);f(U,st),f(st,c(`age: `));let ct=o(st);f(st,ct),p(()=>{n(ct,String(ye.value))});let lt=d(`p`,U);f(U,lt),f(lt,c(`lazy: `));let ut=o(lt);f(lt,ut),p(()=>{n(ut,be.value||`空`)});let dt=d(`p`,U);f(U,dt),f(dt,c(`accepted: `));let ft=o(dt);f(dt,ft),p(()=>{n(ft,xe.value?`true`:`false`)});let W=d(`section`,g);f(g,W),r(W,`space-y-3`);let G=d(`div`,W);f(W,G),r(G,`flex flex-wrap items-center justify-between gap-3`);let pt=d(`h2`,G);f(G,pt),r(pt,`text-xl font-semibold`),f(pt,c(`组件：真实 v-model vs 等价 props`));let mt=d(`span`,G);f(G,mt),r(mt,`badge badge-info badge-lg`),f(mt,c(`component compare`));let K=d(`div`,W);f(W,K),r(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=d(`div`,K);f(K,q),r(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=d(`div`,q);f(q,J),r(J,`flex items-center justify-between gap-3`);let ht=d(`h3`,J);f(J,ht),r(ht,`font-semibold`),f(ht,c(`Rue TSX 实际组件写法`));let gt=d(`span`,J);f(J,gt),r(gt,`badge badge-primary`),f(gt,c(`v-model`));let _t=i(`rue:component:anchor`);f(q,_t),p(()=>{let e=v(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});m(()=>_(e,q,_t))});let vt=i(`rue:component:anchor`);f(q,vt),p(()=>{let e=v(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});m(()=>_(e,q,vt))});let yt=i(`rue:component:anchor`);f(q,yt),p(()=>{let e=v(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});m(()=>_(e,q,yt))});let Y=d(`div`,q);f(q,Y),r(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=d(`p`,Y);f(Y,bt),f(bt,c(`title: `));let xt=o(bt);f(bt,xt),p(()=>{n(xt,se.value||`空`)});let St=d(`p`,Y);f(Y,St),f(St,c(`articleTitle: `));let Ct=o(St);f(St,Ct),p(()=>{n(Ct,me.value||`空`)});let X=d(`p`,Y);f(Y,X),f(X,c(`firstName / lastName: `));let wt=o(X);f(X,wt),p(()=>{n(wt,he.value)}),f(X,c(` `));let Tt=o(X);f(X,Tt),p(()=>{n(Tt,ge.value)});let Z=d(`div`,K);f(K,Z),r(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=d(`div`,Z);f(Z,Q),r(Q,`flex items-center justify-between gap-3`);let Et=d(`h3`,Q);f(Q,Et),r(Et,`font-semibold`),f(Et,c(`等价手写 props`));let Dt=d(`span`,Q);f(Q,Dt),r(Dt,`badge badge-secondary`),f(Dt,c(`modelValue / onUpdateXxx`));let Ot=i(`rue:component:anchor`);f(Z,Ot),p(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:le});m(()=>_(e,Z,Ot))});let $=d(`div`,Z);f(Z,$),r($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=d(`p`,$);f($,kt);let At=d(`strong`,kt);f(kt,At),f(At,c(`v-model`)),f(kt,c(`-> modelValue + onUpdateModelValue`));let jt=d(`p`,$);f($,jt);let Mt=d(`strong`,jt);f(jt,Mt),f(Mt,c(`v-model:trim-title`)),f(jt,c(`-> title + titleModifiers + onUpdateTitle`));let Nt=d(`p`,$);f($,Nt);let Pt=d(`strong`,Nt);f(Nt,Pt),f(Pt,c(`v-model:trim-first-name`)),f(Nt,c(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=d(`p`,$);f($,Ft);let It=d(`strong`,Ft);return f(Ft,It),f(It,c(`v-model:lazy-last-name`)),f(Ft,c(`-> lastName + lastNameModifiers + onUpdateLastName`)),e}):``;m(()=>_(e,u,k))}),f(u,c(` `));let Ce=i(`rue:slot:anchor`);return f(u,Ce),p(()=>{let e=S.value===`code`?g(()=>{let e=a(),t=d(`div`,e);f(e,t),r(t,`grid gap-6`);let n=d(`div`,t);f(t,n),r(n,`card bg-base-100 shadow overflow-auto`);let o=d(`div`,n);f(n,o),r(o,`card-body gap-3`);let s=d(`h2`,o);f(o,s),r(s,`card-title`),f(s,c(`Rue TSX 实际源码`));let l=i(`rue:component:anchor`);f(o,l),p(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:w});m(()=>_(e,o,l))});let u=d(`div`,t);f(t,u),r(u,`card bg-base-100 shadow overflow-auto`);let h=d(`div`,u);f(u,h),r(h,`card-body gap-3`);let g=d(`h2`,h);f(h,g),r(g,`card-title`),f(g,c(`手写 modelValue / value 对照`));let y=i(`rue:component:anchor`);f(h,y),p(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:ce});m(()=>_(e,h,y))});let b=d(`div`,t);f(t,b),r(b,`card bg-base-100 shadow overflow-auto`);let x=d(`div`,b);f(b,x),r(x,`card-body gap-3`);let te=d(`h2`,x);f(x,te),r(te,`card-title`),f(te,c(`TSX-safe 修饰符写法`));let ne=i(`rue:component:anchor`);return f(x,ne),p(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:T});m(()=>_(e,x,ne))}),e}):``;m(()=>_(e,u,Ce))}),e})}),u,y),u})};export{me as default};
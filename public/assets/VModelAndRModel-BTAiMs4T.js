import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,l as d,ot as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as ee}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x=e=>d(r=>{let s=i(`label`,r);_(s,`floating-label`);let c=i(`input`,s);n(s,c),_(c,`input input-bordered w-full`),o(()=>{u(c,e.modelValue??``)}),m(c,`input`,t=>{e.onUpdateModelValue?.(t.target.value)});let l=i(`span`,s);n(s,l);let d=a(`rue:slot:anchor`);return n(l,d),o(()=>{let n=e.label;t(()=>g(n,l,d))}),s}),te=t=>{let{emitTitleUpdate:r}=y(`useSetup:0:0`,()=>h(()=>({emitTitleUpdate:e=>{let n=e.target.value;t.onUpdateTitle?.(t.titleModifiers?.trim?n.trim():n)}})));return d(a=>{let s=i(`label`,a);_(s,`floating-label`);let c=i(`input`,s);n(s,c),_(c,`input input-bordered w-full`),o(()=>{u(c,t.title??``)}),m(c,`input`,t.titleModifiers?.lazy?void 0:r),m(c,`change`,t.titleModifiers?.lazy?r:void 0);let l=i(`span`,s);return n(s,l),n(l,e(`title`)),s})},ne=t=>{let{emitFirstNameUpdate:r,emitLastNameUpdate:a}=y(`useSetup:0:0:dup1`,()=>h(()=>({emitFirstNameUpdate:e=>{let n=e.target.value;t.onUpdateFirstName?.(t.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:e=>{let n=e.target.value;t.onUpdateLastName?.(t.lastNameModifiers?.trim?n.trim():n)}})));return d(s=>{let c=i(`div`,s);_(c,`grid gap-3 md:grid-cols-2`);let l=i(`label`,c);n(c,l),_(l,`floating-label`);let d=i(`input`,l);n(l,d),_(d,`input input-bordered w-full`),o(()=>{u(d,t.firstName??``)}),m(d,`input`,t.firstNameModifiers?.lazy?void 0:r),m(d,`change`,t.firstNameModifiers?.lazy?r:void 0);let f=i(`span`,l);n(l,f),n(f,e(`firstName`));let p=i(`label`,c);n(c,p),_(p,`floating-label`);let h=i(`input`,p);n(p,h),_(h,`input input-bordered w-full`),o(()=>{u(h,t.lastName??``)}),m(h,`input`,t.lastNameModifiers?.lazy?void 0:a),m(h,`change`,t.lastNameModifiers?.lazy?a:void 0);let g=i(`span`,p);return n(p,g),n(g,e(`lastName`)),c})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>h(()=>({activeTab:y(`ref:1:0`,()=>r(`preview`)),message:y(`ref:1:1`,()=>r(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>r(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>r(`18`)),lazyNote:y(`ref:1:4`,()=>r(`blur to sync`)),accepted:y(`ref:1:5`,()=>r(!1)),title:y(`ref:1:6`,()=>r(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>r(`Inside Rue`)),firstName:y(`ref:1:8`,()=>r(`Rue`)),lastName:y(`ref:1:9`,()=>r(`JSX`)),manualMessage:y(`ref:1:10`,()=>r(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>r(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>r(`18`)),manualLazyNote:y(`ref:1:13`,()=>r(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>r(!1))})));return d(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(b,{children:d(()=>{let r=s(),h=i(`div`,r);n(r,h),_(h,`space-y-6`);let y=i(`div`,h);n(h,y),_(y,`space-y-3`);let b=i(`h1`,y);n(y,b),_(b,`text-5xl font-semibold`),n(b,e(`v-model / r-model`));let Se=i(`p`,y);n(y,Se),_(Se,`text-base-content/70 max-w-3xl`),n(Se,e(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=i(`div`,h);n(h,E),c(E,`role`,`tablist`),_(E,`tabs tabs-box w-fit`);let D=i(`button`,E);n(E,D),c(D,`role`,`tab`),o(()=>{_(D,`tab ${S.value===`preview`?`tab-active`:``}`)}),m(D,`click`,()=>{S.value=`preview`}),n(D,e(`效果`));let O=i(`button`,E);n(E,O),c(O,`role`,`tab`),o(()=>{_(O,`tab ${S.value===`code`?`tab-active`:``}`)}),m(O,`click`,()=>{S.value=`code`}),n(O,e(`代码`));let k=a(`rue:slot:anchor`);n(h,k),o(()=>{let r=S.value===`preview`?d(()=>{let r=s(),d=i(`div`,r);n(r,d),_(d,`card bg-base-100 shadow`);let h=i(`div`,d);n(d,h),_(h,`card-body gap-6`);let y=i(`div`,h);n(h,y),c(y,`role`,`alert`),_(y,`alert alert-info`);let b=i(`span`,y);n(y,b),n(b,e(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=i(`section`,h);n(h,S),_(S,`space-y-3`);let w=i(`div`,S);n(S,w),_(w,`flex flex-wrap items-center justify-between gap-3`);let ce=i(`h2`,w);n(w,ce),_(ce,`text-xl font-semibold`),n(ce,e(`原生输入：真实指令 vs 手写等价`));let T=i(`div`,w);n(w,T),_(T,`flex flex-wrap gap-2`);let Se=i(`span`,T);n(T,Se),_(Se,`badge badge-primary`),n(Se,e(`directive`));let E=i(`span`,T);n(T,E),_(E,`badge badge-secondary`),n(E,e(`manual`));let D=i(`div`,S);n(S,D),_(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=i(`div`,D);n(D,O),_(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=i(`div`,O);n(O,k),_(k,`flex items-center justify-between gap-3`);let Ce=i(`h3`,k);n(k,Ce),_(Ce,`font-semibold`),n(Ce,e(`Rue TSX 实际写法`));let we=i(`span`,k);n(k,we),_(we,`badge badge-primary`),n(we,e(`v-model / r-model`));let A=i(`label`,O);n(O,A),_(A,`floating-label`);let Te=i(`input`,A);n(A,Te),_(Te,`input input-bordered w-full`),o(()=>{u(Te,re.value)}),m(Te,`input`,e=>{re.value=e.target.value});let Ee=i(`span`,A);n(A,Ee),n(Ee,e(`v-model`));let j=i(`label`,O);n(O,j),_(j,`floating-label`);let De=i(`input`,j);n(j,De),_(De,`input input-bordered w-full`),o(()=>{u(De,ie.value)}),m(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=i(`span`,j);n(j,Oe),n(Oe,e(`v-model:trim`));let M=i(`label`,O);n(O,M),_(M,`floating-label`);let ke=i(`input`,M);n(M,ke),c(ke,`type`,`number`),_(ke,`input input-bordered w-full`),o(()=>{u(ke,ae.value)}),m(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=i(`span`,M);n(M,Ae),n(Ae,e(`r-model:number`));let N=i(`label`,O);n(O,N),_(N,`floating-label`);let je=i(`input`,N);n(N,je),_(je,`input input-bordered w-full`),o(()=>{u(je,oe.value)}),m(je,`change`,e=>{oe.value=e.target.value});let Me=i(`span`,N);n(N,Me),n(Me,e(`r-model:lazy`));let P=i(`label`,O);n(O,P),_(P,`label cursor-pointer justify-start gap-3`);let Ne=i(`input`,P);n(P,Ne),c(Ne,`type`,`checkbox`),_(Ne,`checkbox`),o(()=>{f(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),m(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=i(`span`,P);n(P,Pe),_(Pe,`label-text`),n(Pe,e(`v-model checkbox`));let F=i(`div`,O);n(O,F),_(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=i(`p`,F);n(F,Fe),n(Fe,e(`message: `));let Ie=l(Fe);n(Fe,Ie),o(()=>{p(Ie,re.value||`空`)});let Le=i(`p`,F);n(F,Le),n(Le,e(`trimmed: `));let Re=l(Le);n(Le,Re),o(()=>{p(Re,ie.value||`空`)});let ze=i(`p`,F);n(F,ze),n(ze,e(`age: `));let Be=l(ze);n(ze,Be),o(()=>{p(Be,String(ae.value))});let Ve=i(`p`,F);n(F,Ve),n(Ve,e(`lazy: `));let He=l(Ve);n(Ve,He),o(()=>{p(He,oe.value||`空`)});let Ue=i(`p`,F);n(F,Ue),n(Ue,e(`accepted: `));let We=l(Ue);n(Ue,We),o(()=>{p(We,C.value?`true`:`false`)});let I=i(`div`,D);n(D,I),_(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=i(`div`,I);n(I,L),_(L,`flex items-center justify-between gap-3`);let Ge=i(`h3`,L);n(L,Ge),_(Ge,`font-semibold`),n(Ge,e(`手写 value / checked 对照`));let Ke=i(`span`,L);n(L,Ke),_(Ke,`badge badge-secondary`),n(Ke,e(`manual`));let R=i(`label`,I);n(I,R),_(R,`floating-label`);let qe=i(`input`,R);n(R,qe),_(qe,`input input-bordered w-full`),o(()=>{u(qe,_e.value)}),m(qe,`input`,e=>{ue(_e,e)});let Je=i(`span`,R);n(R,Je),n(Je,e(`value + onInput`));let z=i(`label`,I);n(I,z),_(z,`floating-label`);let Ye=i(`input`,z);n(z,Ye),_(Ye,`input input-bordered w-full`),o(()=>{u(Ye,ve.value)}),m(Ye,`input`,e=>{de(ve,e)});let Xe=i(`span`,z);n(z,Xe),n(Xe,e(`trim 后手写写回`));let B=i(`label`,I);n(I,B),_(B,`floating-label`);let Ze=i(`input`,B);n(B,Ze),c(Ze,`type`,`number`),_(Ze,`input input-bordered w-full`),o(()=>{u(Ze,String(ye.value))}),m(Ze,`input`,e=>{fe(ye,e)});let Qe=i(`span`,B);n(B,Qe),n(Qe,e(`parseFloat 后手写写回`));let V=i(`label`,I);n(I,V),_(V,`floating-label`);let $e=i(`input`,V);n(V,$e),_($e,`input input-bordered w-full`),o(()=>{u($e,be.value)}),m($e,`change`,e=>{ue(be,e)});let et=i(`span`,V);n(V,et),n(et,e(`onChange 延迟同步`));let H=i(`label`,I);n(I,H),_(H,`label cursor-pointer justify-start gap-3`);let tt=i(`input`,H);n(H,tt),c(tt,`type`,`checkbox`),_(tt,`checkbox`),o(()=>{f(tt,!!xe.value)}),m(tt,`change`,e=>{pe(xe,e)});let nt=i(`span`,H);n(H,nt),_(nt,`label-text`),n(nt,e(`checked + onChange`));let U=i(`div`,I);n(I,U),_(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=i(`p`,U);n(U,rt),n(rt,e(`message: `));let it=l(rt);n(rt,it),o(()=>{p(it,_e.value||`空`)});let at=i(`p`,U);n(U,at),n(at,e(`trimmed: `));let ot=l(at);n(at,ot),o(()=>{p(ot,ve.value||`空`)});let st=i(`p`,U);n(U,st),n(st,e(`age: `));let ct=l(st);n(st,ct),o(()=>{p(ct,String(ye.value))});let lt=i(`p`,U);n(U,lt),n(lt,e(`lazy: `));let ut=l(lt);n(lt,ut),o(()=>{p(ut,be.value||`空`)});let dt=i(`p`,U);n(U,dt),n(dt,e(`accepted: `));let ft=l(dt);n(dt,ft),o(()=>{p(ft,xe.value?`true`:`false`)});let W=i(`section`,h);n(h,W),_(W,`space-y-3`);let G=i(`div`,W);n(W,G),_(G,`flex flex-wrap items-center justify-between gap-3`);let pt=i(`h2`,G);n(G,pt),_(pt,`text-xl font-semibold`),n(pt,e(`组件：真实 v-model vs 等价 props`));let mt=i(`span`,G);n(G,mt),_(mt,`badge badge-info badge-lg`),n(mt,e(`component compare`));let K=i(`div`,W);n(W,K),_(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=i(`div`,K);n(K,q),_(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=i(`div`,q);n(q,J),_(J,`flex items-center justify-between gap-3`);let ht=i(`h3`,J);n(J,ht),_(ht,`font-semibold`),n(ht,e(`Rue TSX 实际组件写法`));let gt=i(`span`,J);n(J,gt),_(gt,`badge badge-primary`),n(gt,e(`v-model`));let _t=a(`rue:component:anchor`);n(q,_t),o(()=>{let e=v(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});t(()=>g(e,q,_t))});let vt=a(`rue:component:anchor`);n(q,vt),o(()=>{let e=v(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});t(()=>g(e,q,vt))});let yt=a(`rue:component:anchor`);n(q,yt),o(()=>{let e=v(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});t(()=>g(e,q,yt))});let Y=i(`div`,q);n(q,Y),_(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=i(`p`,Y);n(Y,bt),n(bt,e(`title: `));let xt=l(bt);n(bt,xt),o(()=>{p(xt,se.value||`空`)});let St=i(`p`,Y);n(Y,St),n(St,e(`articleTitle: `));let Ct=l(St);n(St,Ct),o(()=>{p(Ct,me.value||`空`)});let X=i(`p`,Y);n(Y,X),n(X,e(`firstName / lastName: `));let wt=l(X);n(X,wt),o(()=>{p(wt,he.value)}),n(X,e(` `));let Tt=l(X);n(X,Tt),o(()=>{p(Tt,ge.value)});let Z=i(`div`,K);n(K,Z),_(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=i(`div`,Z);n(Z,Q),_(Q,`flex items-center justify-between gap-3`);let Et=i(`h3`,Q);n(Q,Et),_(Et,`font-semibold`),n(Et,e(`等价手写 props`));let Dt=i(`span`,Q);n(Q,Dt),_(Dt,`badge badge-secondary`),n(Dt,e(`modelValue / onUpdateXxx`));let Ot=a(`rue:component:anchor`);n(Z,Ot),o(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:le});t(()=>g(e,Z,Ot))});let $=i(`div`,Z);n(Z,$),_($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=i(`p`,$);n($,kt);let At=i(`strong`,kt);n(kt,At),n(At,e(`v-model`)),n(kt,e(`-> modelValue + onUpdateModelValue`));let jt=i(`p`,$);n($,jt);let Mt=i(`strong`,jt);n(jt,Mt),n(Mt,e(`v-model:trim-title`)),n(jt,e(`-> title + titleModifiers + onUpdateTitle`));let Nt=i(`p`,$);n($,Nt);let Pt=i(`strong`,Nt);n(Nt,Pt),n(Pt,e(`v-model:trim-first-name`)),n(Nt,e(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=i(`p`,$);n($,Ft);let It=i(`strong`,Ft);return n(Ft,It),n(It,e(`v-model:lazy-last-name`)),n(Ft,e(`-> lastName + lastNameModifiers + onUpdateLastName`)),r}):``;t(()=>g(r,h,k))}),n(h,e(` `));let Ce=a(`rue:slot:anchor`);return n(h,Ce),o(()=>{let r=S.value===`code`?d(()=>{let r=s(),c=i(`div`,r);n(r,c),_(c,`grid gap-6`);let l=i(`div`,c);n(c,l),_(l,`card bg-base-100 shadow overflow-auto`);let u=i(`div`,l);n(l,u),_(u,`card-body gap-3`);let d=i(`h2`,u);n(u,d),_(d,`card-title`),n(d,e(`Rue TSX 实际源码`));let f=a(`rue:component:anchor`);n(u,f),o(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:w});t(()=>g(e,u,f))});let p=i(`div`,c);n(c,p),_(p,`card bg-base-100 shadow overflow-auto`);let m=i(`div`,p);n(p,m),_(m,`card-body gap-3`);let h=i(`h2`,m);n(m,h),_(h,`card-title`),n(h,e(`手写 modelValue / value 对照`));let y=a(`rue:component:anchor`);n(m,y),o(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:ce});t(()=>g(e,m,y))});let b=i(`div`,c);n(c,b),_(b,`card bg-base-100 shadow overflow-auto`);let x=i(`div`,b);n(b,x),_(x,`card-body gap-3`);let te=i(`h2`,x);n(x,te),_(te,`card-title`),n(te,e(`TSX-safe 修饰符写法`));let ne=a(`rue:component:anchor`);return n(x,ne),o(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:T});t(()=>g(e,x,ne))}),r}):``;t(()=>g(r,h,Ce))}),r})}),h,y),h})};export{me as default};
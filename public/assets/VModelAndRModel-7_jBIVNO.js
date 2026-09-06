import{At as e,Dn as t,Dt as n,E as r,Q as i,Qt as a,Vt as o,_n as s,_t as c,at as l,ct as u,et as d,gn as f,nt as p,pn as m,qt as h,rt as g,st as _,tn as v,vn as y,wn as b,xn as x,xt as S}from"./rue-runtime-HIMg8Lz8.js";import{t as ee}from"./Code-DpH7u0gk.js";import{r as C}from"./SidebarPlaygroundExample-BCPRe0hA.js";var te=y(`<label class="floating-label"><input class="input input-bordered w-full"><span><!--rue:text-hole:0--></span></label>`),ne=y(`<label class="floating-label"><input class="input input-bordered w-full"><span>title</span></label>`),w=y(`<div class="grid gap-3 md:grid-cols-2"><label class="floating-label"><input class="input input-bordered w-full"><span>firstName</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>lastName</span></label></div>`),re=y(`<div class="space-y-6"><div class="space-y-3"><h1 class="text-5xl font-semibold">v-model / r-model</h1><p class="text-base-content/70 max-w-3xl">这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。</p></div><div role="tablist" class="tabs tabs-box w-fit"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ie=e=>{let r=l(e.label),i=l(e.modelValue),a=l(e.onUpdateModelValue);return u(o(Object.assign(e=>{let o=te().content.cloneNode(!0).firstChild,c=o.childNodes[0],l=o.childNodes[1].childNodes[0],u=l.parentNode;c.className=`input input-bordered w-full`;let d;b(()=>{let e=i.get()??``,t=e==null?``:String(e);Object.is(d,t)||(d=t,n(c,t))});let f=e=>{let t=e=>{a.get()?.(e.target.value)};typeof t==`function`&&t(e)};c.addEventListener(`input`,f),t(()=>c.removeEventListener(`input`,f));let p=s(``);return u.insertBefore(p,l),u.removeChild(l),x(p,()=>r.get()),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{r.set(e.label),i.set(e.modelValue),a.set(e.onUpdateModelValue)}),()=>e)},ae=t=>{let r=l(t.onUpdateTitle),o=l(t.title),s=l(t.titleModifiers),f=e=>{let t=e.target.value;r.get()?.(s.get()?.trim?t.trim():t)};return u(e(()=>{let e=c(),t=ne().content.cloneNode(!0),r=t.firstChild.childNodes[0];e.appendChild(t),i(r,`input input-bordered w-full`),b(()=>{n(r,o.get()??``)});let l=e=>{let t=s.get()?.lazy?void 0:f;typeof t==`function`&&t(e)};r.addEventListener(`input`,l),a(()=>r.removeEventListener(`input`,l));let u=e=>{let t=s.get()?.lazy?f:void 0;typeof t==`function`&&t(e)};return r.addEventListener(`change`,u),a(()=>r.removeEventListener(`change`,u)),e},!0),e=>d(()=>{r.set(e.onUpdateTitle),o.set(e.title),s.set(e.titleModifiers)}),()=>t)},oe=t=>{let r=l(t.firstName),o=l(t.firstNameModifiers),s=l(t.lastName),f=l(t.lastNameModifiers),p=l(t.onUpdateFirstName),m=l(t.onUpdateLastName),h=e=>{let t=e.target.value;p.get()?.(o.get()?.trim?t.trim():t)},g=e=>{let t=e.target.value;m.get()?.(f.get()?.trim?t.trim():t)};return u(e(()=>{let e=c(),t=w().content.cloneNode(!0),l=t.firstChild,u=l.childNodes[0].childNodes[0],d=l.childNodes[1].childNodes[0];e.appendChild(t),i(u,`input input-bordered w-full`),b(()=>{n(u,r.get()??``)});let p=e=>{let t=o.get()?.lazy?void 0:h;typeof t==`function`&&t(e)};u.addEventListener(`input`,p),a(()=>u.removeEventListener(`input`,p));let m=e=>{let t=o.get()?.lazy?h:void 0;typeof t==`function`&&t(e)};u.addEventListener(`change`,m),a(()=>u.removeEventListener(`change`,m)),i(d,`input input-bordered w-full`),b(()=>{n(d,s.get()??``)});let _=e=>{let t=f.get()?.lazy?void 0:g;typeof t==`function`&&t(e)};d.addEventListener(`input`,_),a(()=>d.removeEventListener(`input`,_));let v=e=>{let t=f.get()?.lazy?g:void 0;typeof t==`function`&&t(e)};return d.addEventListener(`change`,v),a(()=>d.removeEventListener(`change`,v)),e},!0),e=>d(()=>{r.set(e.firstName),o.set(e.firstNameModifiers),s.set(e.lastName),f.set(e.lastNameModifiers),p.set(e.onUpdateFirstName),m.set(e.onUpdateLastName)}),()=>t)},T=[`v`,`-model`].join(``),se=[`v`,`-model`,`:trim`].join(``),ce=[`r`,`-model`,`:number`].join(``),le=[`r`,`-model`,`:lazy`].join(``),ue=[`v`,`-model`,`:trim-title`].join(``),de=[`v`,`-model`,`:trim-first-name`].join(``),fe=[`v`,`-model`,`:lazy-last-name`].join(``),pe=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+T+`={message.value} />`,`      <input className="input input-bordered" `+se+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ce+`={age.value} />`,`      <input className="input input-bordered" `+le+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+T+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+T+`={title.value} />`,`      <TitleField `+ue+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+de+`={firstName.value}`,`        `+fe+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
`),E=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,D=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,me=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,he=(e,t)=>{e.value=t.target.value},ge=(e,t)=>{e.value=t.target.value.trim()},_e=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},ve=(e,t)=>{e.value=t.target.checked},ye=()=>{let e=v(`preview`),l=v(`  Rue model  `),y=v(`  keep edges tidy  `),te=v(`18`),ne=v(`blur to sync`),w=v(!1),T=v(`Guide draft`),se=v(`Inside Rue`),ce=v(`Rue`),le=v(`JSX`),ue=v(`  Rue model  `),de=v(`  keep edges tidy  `),fe=v(`18`),ye=v(`blur to sync`),be=v(!1);return h(()=>u(g(C,()=>({children:(u,d,h)=>r(u,h,()=>o(Object.assign(r=>{let u=c(),d=re().content.cloneNode(!0),h=d.firstChild,g=h.childNodes[1].childNodes[0],v=h.childNodes[1].childNodes[1],C=h.childNodes[2],xe=C.parentNode,Se=h.childNodes[3],Ce=Se.parentNode;u.appendChild(d),S(g,`role`,`tab`),b(()=>{i(g,`tab ${e.value===`preview`?`tab-active`:``}`)});let O=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};g.addEventListener(`click`,O),a(()=>g.removeEventListener(`click`,O)),S(v,`role`,`tab`),b(()=>{i(v,`tab ${e.value===`code`?`tab-active`:``}`)});let k=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return v.addEventListener(`click`,k),a(()=>v.removeEventListener(`click`,k)),p(xe,C,()=>{let r=e.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let r=f(`div`,e);r.className=`card bg-base-100 shadow`;let i=f(`div`,r);m(r,i),i.className=`card-body gap-6`;let a=f(`div`,i);m(i,a),a.setAttribute(`role`,`alert`),a.className=`alert alert-info`;let o=f(`span`,a);m(a,o),m(o,s(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let c=f(`section`,i);m(i,c),c.className=`space-y-3`;let u=f(`div`,c);m(c,u),u.className=`flex flex-wrap items-center justify-between gap-3`;let d=f(`h2`,u);m(u,d),d.className=`text-xl font-semibold`,m(d,s(`原生输入：真实指令 vs 手写等价`));let p=f(`div`,u);m(u,p),p.className=`flex flex-wrap gap-2`;let h=f(`span`,p);m(p,h),h.className=`badge badge-primary`,m(h,s(`directive`));let g=f(`span`,p);m(p,g),g.className=`badge badge-secondary`,m(g,s(`manual`));let v=f(`div`,c);m(c,v),v.className=`grid gap-4 xl:grid-cols-2 items-start`;let S=f(`div`,v);m(v,S),S.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`;let C=f(`div`,S);m(S,C),C.className=`flex items-center justify-between gap-3`;let re=f(`h3`,C);m(C,re),re.className=`font-semibold`,m(re,s(`Rue TSX 实际写法`));let pe=f(`span`,C);m(C,pe),pe.className=`badge badge-primary`,m(pe,s(`v-model / r-model`));let E=f(`label`,S);m(S,E),E.className=`floating-label`;let D=f(`input`,E);m(E,D),D.className=`input input-bordered w-full`;let xe;b(()=>{let e=l.value,t=e==null?``:String(e);Object.is(xe,t)||(xe=t,n(D,t))});let Se=e=>{let t=e=>{let t=e.target.value;l.value=t};typeof t==`function`&&t(e)};D.addEventListener(`input`,Se),t(()=>D.removeEventListener(`input`,Se));let Ce=f(`span`,E);m(E,Ce),m(Ce,s(`v-model`));let O=f(`label`,S);m(S,O),O.className=`floating-label`;let k=f(`input`,O);m(O,k),k.className=`input input-bordered w-full`;let we;b(()=>{let e=y.value,t=e==null?``:String(e);Object.is(we,t)||(we=t,n(k,t))});let Te=e=>{let t=e=>{let t=e.target.value;t=t.trim(),y.value=t};typeof t==`function`&&t(e)};k.addEventListener(`input`,Te),t(()=>k.removeEventListener(`input`,Te));let Ee=f(`span`,O);m(O,Ee),m(Ee,s(`v-model:trim`));let A=f(`label`,S);m(S,A),A.className=`floating-label`;let j=f(`input`,A);m(A,j),j.setAttribute(`type`,`number`),j.className=`input input-bordered w-full`;let De;b(()=>{let e=te.value,t=e==null?``:String(e);Object.is(De,t)||(De=t,n(j,t))});let Oe=e=>{let t=e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,te.value=t};typeof t==`function`&&t(e)};j.addEventListener(`input`,Oe),t(()=>j.removeEventListener(`input`,Oe));let ke=f(`span`,A);m(A,ke),m(ke,s(`r-model:number`));let Ae=f(`label`,S);m(S,Ae),Ae.className=`floating-label`;let je=f(`input`,Ae);m(Ae,je),je.className=`input input-bordered w-full`;let Me;b(()=>{let e=ne.value,t=e==null?``:String(e);Object.is(Me,t)||(Me=t,n(je,t))});let Ne=e=>{let t=e=>{let t=e.target.value;ne.value=t};typeof t==`function`&&t(e)};je.addEventListener(`change`,Ne),t(()=>je.removeEventListener(`change`,Ne));let Pe=f(`span`,Ae);m(Ae,Pe),m(Pe,s(`r-model:lazy`));let M=f(`label`,S);m(S,M),M.className=`label cursor-pointer justify-start gap-3`;let N=f(`input`,M);m(M,N),N.setAttribute(`type`,`checkbox`),N.className=`checkbox`;let Fe;b(()=>{let e=!!(Array.isArray(w.value)?w.value.includes(`on`):w.value instanceof Set?w.value.has(`on`):w.value);Object.is(Fe,e)||(Fe=e,N.checked=e)});let Ie=e=>{let t=e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(w.value)){w.value=t?w.value.includes(n)?w.value:w.value.concat([n]):w.value.filter(e=>e!==n);return}if(w.value instanceof Set){w.value=t?new Set([...w.value,n]):new Set(Array.from(w.value).filter(e=>e!==n));return}w.value=!!t};typeof t==`function`&&t(e)};N.addEventListener(`change`,Ie),t(()=>N.removeEventListener(`change`,Ie));let Le=f(`span`,M);m(M,Le),Le.className=`label-text`,m(Le,s(`v-model checkbox`));let P=f(`div`,S);m(S,P),P.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let Re=f(`p`,P);m(P,Re),m(Re,s(`message: `));let ze=s(``);m(Re,ze),x(ze,()=>l.value||`空`);let Be=f(`p`,P);m(P,Be),m(Be,s(`trimmed: `));let Ve=s(``);m(Be,Ve),x(Ve,()=>y.value||`空`);let He=f(`p`,P);m(P,He),m(He,s(`age: `));let Ue=s(``);m(He,Ue),x(Ue,()=>String(te.value));let We=f(`p`,P);m(P,We),m(We,s(`lazy: `));let Ge=s(``);m(We,Ge),x(Ge,()=>ne.value||`空`);let Ke=f(`p`,P);m(P,Ke),m(Ke,s(`accepted: `));let qe=s(``);m(Ke,qe),x(qe,()=>w.value?`true`:`false`);let F=f(`div`,v);m(v,F),F.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`;let I=f(`div`,F);m(F,I),I.className=`flex items-center justify-between gap-3`;let Je=f(`h3`,I);m(I,Je),Je.className=`font-semibold`,m(Je,s(`手写 value / checked 对照`));let Ye=f(`span`,I);m(I,Ye),Ye.className=`badge badge-secondary`,m(Ye,s(`manual`));let L=f(`label`,F);m(F,L),L.className=`floating-label`;let Xe=f(`input`,L);m(L,Xe),Xe.className=`input input-bordered w-full`;let Ze;b(()=>{let e=ue.value,t=e==null?``:String(e);Object.is(Ze,t)||(Ze=t,n(Xe,t))});let Qe=e=>{let t=e=>{he(ue,e)};typeof t==`function`&&t(e)};Xe.addEventListener(`input`,Qe),t(()=>Xe.removeEventListener(`input`,Qe));let $e=f(`span`,L);m(L,$e),m($e,s(`value + onInput`));let R=f(`label`,F);m(F,R),R.className=`floating-label`;let et=f(`input`,R);m(R,et),et.className=`input input-bordered w-full`;let tt;b(()=>{let e=de.value,t=e==null?``:String(e);Object.is(tt,t)||(tt=t,n(et,t))});let nt=e=>{let t=e=>{ge(de,e)};typeof t==`function`&&t(e)};et.addEventListener(`input`,nt),t(()=>et.removeEventListener(`input`,nt));let rt=f(`span`,R);m(R,rt),m(rt,s(`trim 后手写写回`));let z=f(`label`,F);m(F,z),z.className=`floating-label`;let B=f(`input`,z);m(z,B),B.setAttribute(`type`,`number`),B.className=`input input-bordered w-full`;let it;b(()=>{let e=String(fe.value),t=e==null?``:String(e);Object.is(it,t)||(it=t,n(B,t))});let at=e=>{let t=e=>{_e(fe,e)};typeof t==`function`&&t(e)};B.addEventListener(`input`,at),t(()=>B.removeEventListener(`input`,at));let ot=f(`span`,z);m(z,ot),m(ot,s(`parseFloat 后手写写回`));let V=f(`label`,F);m(F,V),V.className=`floating-label`;let st=f(`input`,V);m(V,st),st.className=`input input-bordered w-full`;let ct;b(()=>{let e=ye.value,t=e==null?``:String(e);Object.is(ct,t)||(ct=t,n(st,t))});let lt=e=>{let t=e=>{he(ye,e)};typeof t==`function`&&t(e)};st.addEventListener(`change`,lt),t(()=>st.removeEventListener(`change`,lt));let ut=f(`span`,V);m(V,ut),m(ut,s(`onChange 延迟同步`));let H=f(`label`,F);m(F,H),H.className=`label cursor-pointer justify-start gap-3`;let U=f(`input`,H);m(H,U),U.setAttribute(`type`,`checkbox`),U.className=`checkbox`;let dt;b(()=>{let e=!!be.value;Object.is(dt,e)||(dt=e,U.checked=e)});let ft=e=>{let t=e=>{ve(be,e)};typeof t==`function`&&t(e)};U.addEventListener(`change`,ft),t(()=>U.removeEventListener(`change`,ft));let pt=f(`span`,H);m(H,pt),pt.className=`label-text`,m(pt,s(`checked + onChange`));let W=f(`div`,F);m(F,W),W.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let mt=f(`p`,W);m(W,mt),m(mt,s(`message: `));let ht=s(``);m(mt,ht),x(ht,()=>ue.value||`空`);let gt=f(`p`,W);m(W,gt),m(gt,s(`trimmed: `));let _t=s(``);m(gt,_t),x(_t,()=>de.value||`空`);let vt=f(`p`,W);m(W,vt),m(vt,s(`age: `));let yt=s(``);m(vt,yt),x(yt,()=>String(fe.value));let bt=f(`p`,W);m(W,bt),m(bt,s(`lazy: `));let xt=s(``);m(bt,xt),x(xt,()=>ye.value||`空`);let St=f(`p`,W);m(W,St),m(St,s(`accepted: `));let Ct=s(``);m(St,Ct),x(Ct,()=>be.value?`true`:`false`);let G=f(`section`,i);m(i,G),G.className=`space-y-3`;let K=f(`div`,G);m(G,K),K.className=`flex flex-wrap items-center justify-between gap-3`;let wt=f(`h2`,K);m(K,wt),wt.className=`text-xl font-semibold`,m(wt,s(`组件：真实 v-model vs 等价 props`));let Tt=f(`span`,K);m(K,Tt),Tt.className=`badge badge-info badge-lg`,m(Tt,s(`component compare`));let q=f(`div`,G);m(G,q),q.className=`grid gap-4 xl:grid-cols-2 items-start`;let J=f(`div`,q);m(q,J),J.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`;let Y=f(`div`,J);m(J,Y),Y.className=`flex items-center justify-between gap-3`;let Et=f(`h3`,Y);m(Y,Et),Et.className=`font-semibold`,m(Et,s(`Rue TSX 实际组件写法`));let Dt=f(`span`,Y);m(Y,Dt),Dt.className=`badge badge-primary`,m(Dt,s(`v-model`)),_(J,ie,()=>({label:`v-model={title.value}`,modelValue:T.value,onUpdateModelValue:e=>T.value=e})),_(J,ae,()=>({title:se.value,onUpdateTitle:e=>se.value=e,titleModifiers:{trim:!0}})),_(J,oe,()=>({firstName:ce.value,onUpdateFirstName:e=>ce.value=e,firstNameModifiers:{trim:!0},lastName:le.value,onUpdateLastName:e=>le.value=e,lastNameModifiers:{lazy:!0}}));let X=f(`div`,J);m(J,X),X.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let Ot=f(`p`,X);m(X,Ot),m(Ot,s(`title: `));let kt=s(``);m(Ot,kt),x(kt,()=>T.value||`空`);let At=f(`p`,X);m(X,At),m(At,s(`articleTitle: `));let jt=s(``);m(At,jt),x(jt,()=>se.value||`空`);let Mt=f(`p`,X);m(X,Mt),m(Mt,s(`firstName / lastName: `));let Nt=s(``);m(Mt,Nt),x(Nt,()=>ce.value),m(Mt,s(` `));let Pt=s(``);m(Mt,Pt),x(Pt,()=>le.value);let Z=f(`div`,q);m(q,Z),Z.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`;let Q=f(`div`,Z);m(Z,Q),Q.className=`flex items-center justify-between gap-3`;let Ft=f(`h3`,Q);m(Q,Ft),Ft.className=`font-semibold`,m(Ft,s(`等价手写 props`));let It=f(`span`,Q);m(Q,It),It.className=`badge badge-secondary`,m(It,s(`modelValue / onUpdateXxx`)),_(Z,ee,()=>({className:`h-full`,lang:`tsx`,code:me}));let $=f(`div`,Z);m(Z,$),$.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let Lt=f(`p`,$);m($,Lt);let Rt=f(`strong`,Lt);m(Lt,Rt),m(Rt,s(`v-model`)),m(Lt,s(` -> modelValue + onUpdateModelValue`));let zt=f(`p`,$);m($,zt);let Bt=f(`strong`,zt);m(zt,Bt),m(Bt,s(`v-model:trim-title`)),m(zt,s(` -> title + titleModifiers + onUpdateTitle`));let Vt=f(`p`,$);m($,Vt);let Ht=f(`strong`,Vt);m(Vt,Ht),m(Ht,s(`v-model:trim-first-name`)),m(Vt,s(` -> firstName + firstNameModifiers + onUpdateFirstName`));let Ut=f(`p`,$);m($,Ut);let Wt=f(`strong`,Ut);return m(Ut,Wt),m(Wt,s(`v-model:lazy-last-name`)),m(Ut,s(` -> lastName + lastNameModifiers + onUpdateLastName`)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>o(Object.assign(e=>{let t=s(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),p(Ce,Se,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=f(`div`,e);t.className=`grid gap-6`;let n=f(`div`,t);m(t,n),n.className=`card bg-base-100 shadow overflow-auto`;let r=f(`div`,n);m(n,r),r.className=`card-body gap-3`;let i=f(`h2`,r);m(r,i),i.className=`card-title`,m(i,s(`Rue TSX 实际源码`)),_(r,ee,()=>({className:`h-full`,lang:`tsx`,code:pe}));let a=f(`div`,t);m(t,a),a.className=`card bg-base-100 shadow overflow-auto`;let o=f(`div`,a);m(a,o),o.className=`card-body gap-3`;let c=f(`h2`,o);m(o,c),c.className=`card-title`,m(c,s(`手写 modelValue / value 对照`)),_(o,ee,()=>({className:`h-full`,lang:`tsx`,code:E}));let l=f(`div`,t);m(t,l),l.className=`card bg-base-100 shadow overflow-auto`;let u=f(`div`,l);m(l,u),u.className=`card-body gap-3`;let d=f(`h2`,u);return m(u,d),d.className=`card-title`,m(d,s(`TSX-safe 修饰符写法`)),_(u,ee,()=>({className:`h-full`,lang:`tsx`,code:D})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>o(Object.assign(e=>{let n=s(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})))})),e=>d(()=>{})))};export{ye as default};
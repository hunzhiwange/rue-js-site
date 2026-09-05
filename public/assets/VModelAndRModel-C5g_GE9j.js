import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,V as c,W as l,_n as u,bn as d,fn as f,ft as p,gn as m,hn as h,ht as g,nt as _,ot as v,q as y,wn as b,x,z as S}from"./rue-runtime-CwEGJ854.js";import{t as ee}from"./Code-DUvGro8N.js";import{r as C}from"./SidebarPlaygroundExample-EGR0CyDT.js";var te=u(`<label class="floating-label"><input class="input input-bordered w-full"><span><!--rue:text-hole:0--></span></label>`),ne=u(`<label class="floating-label"><input class="input input-bordered w-full"><span>title</span></label>`),w=u(`<div class="grid gap-3 md:grid-cols-2"><label class="floating-label"><input class="input input-bordered w-full"><span>firstName</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>lastName</span></label></div>`),re=u(`<div class="space-y-6"><div class="space-y-3"><h1 class="text-5xl font-semibold">v-model / r-model</h1><p class="text-base-content/70 max-w-3xl">这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。</p></div><div role="tablist" class="tabs tabs-box w-fit"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ie=e=>{let r=l(e.label),i=l(e.modelValue),a=l(e.onUpdateModelValue);return y(n(Object.assign(e=>{let n=te().content.cloneNode(!0).firstChild,o=n.childNodes[0],s=n.childNodes[1].childNodes[0],c=s.parentNode;o.className=`input input-bordered w-full`;let l;b(()=>{let e=i.get()??``,t=e==null?``:String(e);Object.is(l,t)||(l=t,p(o,t))});let u=e=>{let t=e=>{a.get()?.(e.target.value)};typeof t==`function`&&t(e)};o.addEventListener(`input`,u),t(()=>o.removeEventListener(`input`,u));let f=m(``);return c.insertBefore(f,s),c.removeChild(s),d(f,()=>r.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{r.set(e.label),i.set(e.modelValue),a.set(e.onUpdateModelValue)}),()=>e)},ae=e=>{let t=l(e.onUpdateTitle),n=l(e.title),r=l(e.titleModifiers),i=e=>{let n=e.target.value;t.get()?.(r.get()?.trim?n.trim():n)};return y(g(()=>{let e=_(),t=ne().content.cloneNode(!0),s=t.firstChild.childNodes[0];e.appendChild(t),a(s,`input input-bordered w-full`),b(()=>{p(s,n.get()??``)});let c=e=>{let t=r.get()?.lazy?void 0:i;typeof t==`function`&&t(e)};s.addEventListener(`input`,c),o(()=>s.removeEventListener(`input`,c));let l=e=>{let t=r.get()?.lazy?i:void 0;typeof t==`function`&&t(e)};return s.addEventListener(`change`,l),o(()=>s.removeEventListener(`change`,l)),e},!0),e=>S(()=>{t.set(e.onUpdateTitle),n.set(e.title),r.set(e.titleModifiers)}),()=>e)},oe=e=>{let t=l(e.firstName),n=l(e.firstNameModifiers),r=l(e.lastName),i=l(e.lastNameModifiers),s=l(e.onUpdateFirstName),c=l(e.onUpdateLastName),u=e=>{let t=e.target.value;s.get()?.(n.get()?.trim?t.trim():t)},d=e=>{let t=e.target.value;c.get()?.(i.get()?.trim?t.trim():t)};return y(g(()=>{let e=_(),s=w().content.cloneNode(!0),c=s.firstChild,l=c.childNodes[0].childNodes[0],f=c.childNodes[1].childNodes[0];e.appendChild(s),a(l,`input input-bordered w-full`),b(()=>{p(l,t.get()??``)});let m=e=>{let t=n.get()?.lazy?void 0:u;typeof t==`function`&&t(e)};l.addEventListener(`input`,m),o(()=>l.removeEventListener(`input`,m));let h=e=>{let t=n.get()?.lazy?u:void 0;typeof t==`function`&&t(e)};l.addEventListener(`change`,h),o(()=>l.removeEventListener(`change`,h)),a(f,`input input-bordered w-full`),b(()=>{p(f,r.get()??``)});let g=e=>{let t=i.get()?.lazy?void 0:d;typeof t==`function`&&t(e)};f.addEventListener(`input`,g),o(()=>f.removeEventListener(`input`,g));let v=e=>{let t=i.get()?.lazy?d:void 0;typeof t==`function`&&t(e)};return f.addEventListener(`change`,v),o(()=>f.removeEventListener(`change`,v)),e},!0),e=>S(()=>{t.set(e.firstName),n.set(e.firstNameModifiers),r.set(e.lastName),i.set(e.lastNameModifiers),s.set(e.onUpdateFirstName),c.set(e.onUpdateLastName)}),()=>e)},T=[`v`,`-model`].join(``),se=[`v`,`-model`,`:trim`].join(``),ce=[`r`,`-model`,`:number`].join(``),le=[`r`,`-model`,`:lazy`].join(``),ue=[`v`,`-model`,`:trim-title`].join(``),de=[`v`,`-model`,`:trim-first-name`].join(``),fe=[`v`,`-model`,`:lazy-last-name`].join(``),pe=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+T+`={message.value} />`,`      <input className="input input-bordered" `+se+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ce+`={age.value} />`,`      <input className="input input-bordered" `+le+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+T+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+T+`={title.value} />`,`      <TitleField `+ue+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+de+`={firstName.value}`,`        `+fe+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,he=(e,t)=>{e.value=t.target.value},ge=(e,t)=>{e.value=t.target.value.trim()},_e=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},ve=(e,t)=>{e.value=t.target.checked},ye=()=>{let l=e(`preview`),u=e(`  Rue model  `),g=e(`  keep edges tidy  `),te=e(`18`),ne=e(`blur to sync`),w=e(!1),T=e(`Guide draft`),se=e(`Inside Rue`),ce=e(`Rue`),le=e(`JSX`),ue=e(`  Rue model  `),de=e(`  keep edges tidy  `),fe=e(`18`),ye=e(`blur to sync`),be=e(!1);return s(()=>y(r(C,()=>({children:(e,r,s)=>x(e,s,()=>n(Object.assign(e=>{let r=_(),s=re().content.cloneNode(!0),y=s.firstChild,x=y.childNodes[1].childNodes[0],S=y.childNodes[1].childNodes[1],C=y.childNodes[2],xe=C.parentNode,Se=y.childNodes[3],Ce=Se.parentNode;r.appendChild(s),v(x,`role`,`tab`),b(()=>{a(x,`tab ${l.value===`preview`?`tab-active`:``}`)});let O=e=>{let t=()=>{l.value=`preview`};typeof t==`function`&&t(e)};x.addEventListener(`click`,O),o(()=>x.removeEventListener(`click`,O)),v(S,`role`,`tab`),b(()=>{a(S,`tab ${l.value===`code`?`tab-active`:``}`)});let k=e=>{let t=()=>{l.value=`code`};typeof t==`function`&&t(e)};return S.addEventListener(`click`,k),o(()=>S.removeEventListener(`click`,k)),c(xe,C,()=>{let e=l.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=h(`div`,e);n.className=`card bg-base-100 shadow`;let r=h(`div`,n);f(n,r),r.className=`card-body gap-6`;let a=h(`div`,r);f(r,a),a.setAttribute(`role`,`alert`),a.className=`alert alert-info`;let o=h(`span`,a);f(a,o),f(o,m(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let s=h(`section`,r);f(r,s),s.className=`space-y-3`;let c=h(`div`,s);f(s,c),c.className=`flex flex-wrap items-center justify-between gap-3`;let l=h(`h2`,c);f(c,l),l.className=`text-xl font-semibold`,f(l,m(`原生输入：真实指令 vs 手写等价`));let _=h(`div`,c);f(c,_),_.className=`flex flex-wrap gap-2`;let v=h(`span`,_);f(_,v),v.className=`badge badge-primary`,f(v,m(`directive`));let y=h(`span`,_);f(_,y),y.className=`badge badge-secondary`,f(y,m(`manual`));let x=h(`div`,s);f(s,x),x.className=`grid gap-4 xl:grid-cols-2 items-start`;let S=h(`div`,x);f(x,S),S.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`;let C=h(`div`,S);f(S,C),C.className=`flex items-center justify-between gap-3`;let re=h(`h3`,C);f(C,re),re.className=`font-semibold`,f(re,m(`Rue TSX 实际写法`));let pe=h(`span`,C);f(C,pe),pe.className=`badge badge-primary`,f(pe,m(`v-model / r-model`));let E=h(`label`,S);f(S,E),E.className=`floating-label`;let D=h(`input`,E);f(E,D),D.className=`input input-bordered w-full`;let xe;b(()=>{let e=u.value,t=e==null?``:String(e);Object.is(xe,t)||(xe=t,p(D,t))});let Se=e=>{let t=e=>{let t=e.target.value;u.value=t};typeof t==`function`&&t(e)};D.addEventListener(`input`,Se),t(()=>D.removeEventListener(`input`,Se));let Ce=h(`span`,E);f(E,Ce),f(Ce,m(`v-model`));let O=h(`label`,S);f(S,O),O.className=`floating-label`;let k=h(`input`,O);f(O,k),k.className=`input input-bordered w-full`;let we;b(()=>{let e=g.value,t=e==null?``:String(e);Object.is(we,t)||(we=t,p(k,t))});let Te=e=>{let t=e=>{let t=e.target.value;t=t.trim(),g.value=t};typeof t==`function`&&t(e)};k.addEventListener(`input`,Te),t(()=>k.removeEventListener(`input`,Te));let Ee=h(`span`,O);f(O,Ee),f(Ee,m(`v-model:trim`));let A=h(`label`,S);f(S,A),A.className=`floating-label`;let De=h(`input`,A);f(A,De),De.setAttribute(`type`,`number`),De.className=`input input-bordered w-full`;let Oe;b(()=>{let e=te.value,t=e==null?``:String(e);Object.is(Oe,t)||(Oe=t,p(De,t))});let ke=e=>{let t=e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,te.value=t};typeof t==`function`&&t(e)};De.addEventListener(`input`,ke),t(()=>De.removeEventListener(`input`,ke));let Ae=h(`span`,A);f(A,Ae),f(Ae,m(`r-model:number`));let j=h(`label`,S);f(S,j),j.className=`floating-label`;let je=h(`input`,j);f(j,je),je.className=`input input-bordered w-full`;let Me;b(()=>{let e=ne.value,t=e==null?``:String(e);Object.is(Me,t)||(Me=t,p(je,t))});let Ne=e=>{let t=e=>{let t=e.target.value;ne.value=t};typeof t==`function`&&t(e)};je.addEventListener(`change`,Ne),t(()=>je.removeEventListener(`change`,Ne));let Pe=h(`span`,j);f(j,Pe),f(Pe,m(`r-model:lazy`));let M=h(`label`,S);f(S,M),M.className=`label cursor-pointer justify-start gap-3`;let N=h(`input`,M);f(M,N),N.setAttribute(`type`,`checkbox`),N.className=`checkbox`;let Fe;b(()=>{let e=!!(Array.isArray(w.value)?w.value.includes(`on`):w.value instanceof Set?w.value.has(`on`):w.value);Object.is(Fe,e)||(Fe=e,N.checked=e)});let Ie=e=>{let t=e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(w.value)){w.value=t?w.value.includes(n)?w.value:w.value.concat([n]):w.value.filter(e=>e!==n);return}if(w.value instanceof Set){w.value=t?new Set([...w.value,n]):new Set(Array.from(w.value).filter(e=>e!==n));return}w.value=!!t};typeof t==`function`&&t(e)};N.addEventListener(`change`,Ie),t(()=>N.removeEventListener(`change`,Ie));let Le=h(`span`,M);f(M,Le),Le.className=`label-text`,f(Le,m(`v-model checkbox`));let P=h(`div`,S);f(S,P),P.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let Re=h(`p`,P);f(P,Re),f(Re,m(`message: `));let ze=m(``);f(Re,ze),d(ze,()=>u.value||`空`);let Be=h(`p`,P);f(P,Be),f(Be,m(`trimmed: `));let Ve=m(``);f(Be,Ve),d(Ve,()=>g.value||`空`);let He=h(`p`,P);f(P,He),f(He,m(`age: `));let Ue=m(``);f(He,Ue),d(Ue,()=>String(te.value));let We=h(`p`,P);f(P,We),f(We,m(`lazy: `));let Ge=m(``);f(We,Ge),d(Ge,()=>ne.value||`空`);let Ke=h(`p`,P);f(P,Ke),f(Ke,m(`accepted: `));let qe=m(``);f(Ke,qe),d(qe,()=>w.value?`true`:`false`);let F=h(`div`,x);f(x,F),F.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`;let I=h(`div`,F);f(F,I),I.className=`flex items-center justify-between gap-3`;let Je=h(`h3`,I);f(I,Je),Je.className=`font-semibold`,f(Je,m(`手写 value / checked 对照`));let Ye=h(`span`,I);f(I,Ye),Ye.className=`badge badge-secondary`,f(Ye,m(`manual`));let L=h(`label`,F);f(F,L),L.className=`floating-label`;let Xe=h(`input`,L);f(L,Xe),Xe.className=`input input-bordered w-full`;let Ze;b(()=>{let e=ue.value,t=e==null?``:String(e);Object.is(Ze,t)||(Ze=t,p(Xe,t))});let Qe=e=>{let t=e=>{he(ue,e)};typeof t==`function`&&t(e)};Xe.addEventListener(`input`,Qe),t(()=>Xe.removeEventListener(`input`,Qe));let $e=h(`span`,L);f(L,$e),f($e,m(`value + onInput`));let R=h(`label`,F);f(F,R),R.className=`floating-label`;let et=h(`input`,R);f(R,et),et.className=`input input-bordered w-full`;let tt;b(()=>{let e=de.value,t=e==null?``:String(e);Object.is(tt,t)||(tt=t,p(et,t))});let nt=e=>{let t=e=>{ge(de,e)};typeof t==`function`&&t(e)};et.addEventListener(`input`,nt),t(()=>et.removeEventListener(`input`,nt));let rt=h(`span`,R);f(R,rt),f(rt,m(`trim 后手写写回`));let z=h(`label`,F);f(F,z),z.className=`floating-label`;let B=h(`input`,z);f(z,B),B.setAttribute(`type`,`number`),B.className=`input input-bordered w-full`;let it;b(()=>{let e=String(fe.value),t=e==null?``:String(e);Object.is(it,t)||(it=t,p(B,t))});let at=e=>{let t=e=>{_e(fe,e)};typeof t==`function`&&t(e)};B.addEventListener(`input`,at),t(()=>B.removeEventListener(`input`,at));let ot=h(`span`,z);f(z,ot),f(ot,m(`parseFloat 后手写写回`));let V=h(`label`,F);f(F,V),V.className=`floating-label`;let st=h(`input`,V);f(V,st),st.className=`input input-bordered w-full`;let ct;b(()=>{let e=ye.value,t=e==null?``:String(e);Object.is(ct,t)||(ct=t,p(st,t))});let lt=e=>{let t=e=>{he(ye,e)};typeof t==`function`&&t(e)};st.addEventListener(`change`,lt),t(()=>st.removeEventListener(`change`,lt));let ut=h(`span`,V);f(V,ut),f(ut,m(`onChange 延迟同步`));let H=h(`label`,F);f(F,H),H.className=`label cursor-pointer justify-start gap-3`;let U=h(`input`,H);f(H,U),U.setAttribute(`type`,`checkbox`),U.className=`checkbox`;let dt;b(()=>{let e=!!be.value;Object.is(dt,e)||(dt=e,U.checked=e)});let ft=e=>{let t=e=>{ve(be,e)};typeof t==`function`&&t(e)};U.addEventListener(`change`,ft),t(()=>U.removeEventListener(`change`,ft));let pt=h(`span`,H);f(H,pt),pt.className=`label-text`,f(pt,m(`checked + onChange`));let W=h(`div`,F);f(F,W),W.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let mt=h(`p`,W);f(W,mt),f(mt,m(`message: `));let ht=m(``);f(mt,ht),d(ht,()=>ue.value||`空`);let gt=h(`p`,W);f(W,gt),f(gt,m(`trimmed: `));let _t=m(``);f(gt,_t),d(_t,()=>de.value||`空`);let vt=h(`p`,W);f(W,vt),f(vt,m(`age: `));let yt=m(``);f(vt,yt),d(yt,()=>String(fe.value));let bt=h(`p`,W);f(W,bt),f(bt,m(`lazy: `));let xt=m(``);f(bt,xt),d(xt,()=>ye.value||`空`);let St=h(`p`,W);f(W,St),f(St,m(`accepted: `));let Ct=m(``);f(St,Ct),d(Ct,()=>be.value?`true`:`false`);let G=h(`section`,r);f(r,G),G.className=`space-y-3`;let K=h(`div`,G);f(G,K),K.className=`flex flex-wrap items-center justify-between gap-3`;let wt=h(`h2`,K);f(K,wt),wt.className=`text-xl font-semibold`,f(wt,m(`组件：真实 v-model vs 等价 props`));let Tt=h(`span`,K);f(K,Tt),Tt.className=`badge badge-info badge-lg`,f(Tt,m(`component compare`));let q=h(`div`,G);f(G,q),q.className=`grid gap-4 xl:grid-cols-2 items-start`;let J=h(`div`,q);f(q,J),J.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`;let Y=h(`div`,J);f(J,Y),Y.className=`flex items-center justify-between gap-3`;let Et=h(`h3`,Y);f(Y,Et),Et.className=`font-semibold`,f(Et,m(`Rue TSX 实际组件写法`));let Dt=h(`span`,Y);f(Y,Dt),Dt.className=`badge badge-primary`,f(Dt,m(`v-model`)),i(J,ie,()=>({label:`v-model={title.value}`,modelValue:T.value,onUpdateModelValue:e=>T.value=e})),i(J,ae,()=>({title:se.value,onUpdateTitle:e=>se.value=e,titleModifiers:{trim:!0}})),i(J,oe,()=>({firstName:ce.value,onUpdateFirstName:e=>ce.value=e,firstNameModifiers:{trim:!0},lastName:le.value,onUpdateLastName:e=>le.value=e,lastNameModifiers:{lazy:!0}}));let X=h(`div`,J);f(J,X),X.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let Ot=h(`p`,X);f(X,Ot),f(Ot,m(`title: `));let kt=m(``);f(Ot,kt),d(kt,()=>T.value||`空`);let At=h(`p`,X);f(X,At),f(At,m(`articleTitle: `));let jt=m(``);f(At,jt),d(jt,()=>se.value||`空`);let Mt=h(`p`,X);f(X,Mt),f(Mt,m(`firstName / lastName: `));let Nt=m(``);f(Mt,Nt),d(Nt,()=>ce.value),f(Mt,m(` `));let Pt=m(``);f(Mt,Pt),d(Pt,()=>le.value);let Z=h(`div`,q);f(q,Z),Z.className=`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`;let Q=h(`div`,Z);f(Z,Q),Q.className=`flex items-center justify-between gap-3`;let Ft=h(`h3`,Q);f(Q,Ft),Ft.className=`font-semibold`,f(Ft,m(`等价手写 props`));let It=h(`span`,Q);f(Q,It),It.className=`badge badge-secondary`,f(It,m(`modelValue / onUpdateXxx`)),i(Z,ee,()=>({className:`h-full`,lang:`tsx`,code:me}));let $=h(`div`,Z);f(Z,$),$.className=`rounded-box border border-base-300 bg-base-200 p-4 text-sm`;let Lt=h(`p`,$);f($,Lt);let Rt=h(`strong`,Lt);f(Lt,Rt),f(Rt,m(`v-model`)),f(Lt,m(` -> modelValue + onUpdateModelValue`));let zt=h(`p`,$);f($,zt);let Bt=h(`strong`,zt);f(zt,Bt),f(Bt,m(`v-model:trim-title`)),f(zt,m(` -> title + titleModifiers + onUpdateTitle`));let Vt=h(`p`,$);f($,Vt);let Ht=h(`strong`,Vt);f(Vt,Ht),f(Ht,m(`v-model:trim-first-name`)),f(Vt,m(` -> firstName + firstNameModifiers + onUpdateFirstName`));let Ut=h(`p`,$);f($,Ut);let Wt=h(`strong`,Ut);return f(Ut,Wt),f(Wt,m(`v-model:lazy-last-name`)),f(Ut,m(` -> lastName + lastNameModifiers + onUpdateLastName`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=_();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),c(Ce,Se,()=>{let e=l.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=h(`div`,e);t.className=`grid gap-6`;let n=h(`div`,t);f(t,n),n.className=`card bg-base-100 shadow overflow-auto`;let r=h(`div`,n);f(n,r),r.className=`card-body gap-3`;let a=h(`h2`,r);f(r,a),a.className=`card-title`,f(a,m(`Rue TSX 实际源码`)),i(r,ee,()=>({className:`h-full`,lang:`tsx`,code:pe}));let o=h(`div`,t);f(t,o),o.className=`card bg-base-100 shadow overflow-auto`;let s=h(`div`,o);f(o,s),s.className=`card-body gap-3`;let c=h(`h2`,s);f(s,c),c.className=`card-title`,f(c,m(`手写 modelValue / value 对照`)),i(s,ee,()=>({className:`h-full`,lang:`tsx`,code:E}));let l=h(`div`,t);f(t,l),l.className=`card bg-base-100 shadow overflow-auto`;let u=h(`div`,l);f(l,u),u.className=`card-body gap-3`;let d=h(`h2`,u);return f(u,d),d.className=`card-title`,f(d,m(`TSX-safe 修饰符写法`)),i(u,ee,()=>({className:`h-full`,lang:`tsx`,code:D})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=_();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),e=>S(()=>{})))};export{ye as default};
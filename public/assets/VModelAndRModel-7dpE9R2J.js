import{B as e,Bt as t,Dt as n,F as r,I as i,Mt as a,P as o,Qt as s,Ut as c,V as l,Vt as u,W as d,Wt as f,en as p,fn as m,gn as h,hn as g,in as _,mn as v,mt as y,nt as b,pn as ee,sn as x,u as S,yn as C,z as w,zt as te}from"./rue-runtime-BWbIfNT8.js";import{t as ne}from"./Code-C5ZhIIr9.js";import{r as T}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var re=C(`<label class="floating-label"><input class="input input-bordered w-full"><span>title</span></label>`),ie=C(`<div class="grid gap-3 md:grid-cols-2"><label class="floating-label"><input class="input input-bordered w-full"><span>firstName</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>lastName</span></label></div>`),ae=C(`<div class="space-y-6"><div class="space-y-3"><h1 class="text-5xl font-semibold">v-model / r-model</h1><p class="text-base-content/70 max-w-3xl">这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。</p></div><div role="tablist" class="tabs tabs-box w-fit"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),oe=(n,r,a)=>{let o=d(w(n,`label`)),s=d(w(n,`modelValue`)),c=d(w(n,`onUpdateModelValue`));return i(f(e=>{let n=g(`label`,e);n.setAttribute(`class`,`floating-label`);let r=g(`input`,n);m(n,r),r.setAttribute(`class`,`input input-bordered w-full`);let i;_(()=>{let e=s.get()??``,t=e==null?``:String(e);Object.is(i,t)||(i=t,r.value=t)});let a=e=>{let t=e=>{c.get()?.(e.target.value)};typeof t==`function`&&t(e)};r.addEventListener(`input`,a),x(()=>r.removeEventListener(`input`,a));let l=g(`span`,n);m(n,l);let u=ee(`rue:compiled-slot`);return m(l,u),t({parent:l,before:u},()=>te(o.get()),()=>({})),[n,n]}),e=>p(()=>{o.set(e.label),s.set(e.modelValue),c.set(e.onUpdateModelValue)}),()=>e(n))},se=(t,r,o)=>{let s=d(w(t,`onUpdateTitle`)),c=d(w(t,`title`)),l=d(w(t,`titleModifiers`)),u=e=>{let t=e.target.value;s.get()?.(l.get()?.trim?t.trim():t)};return i(f(()=>{let e=v(),t=re().content.cloneNode(!0),r=t.firstChild.childNodes[0];e.appendChild(t),n(r,`input input-bordered w-full`),_(()=>{a(r,c.get()??``)});let i=e=>{let t=l.get()?.lazy?void 0:u;typeof t==`function`&&t(e)};r.addEventListener(`input`,i),x(()=>r.removeEventListener(`input`,i));let o=e=>{let t=l.get()?.lazy?u:void 0;typeof t==`function`&&t(e)};r.addEventListener(`change`,o),x(()=>r.removeEventListener(`change`,o));let s=h(``),d=h(``);return e.insertBefore(s,e.firstChild),e.appendChild(d),[e.firstChild,e.lastChild]}),e=>p(()=>{s.set(e.onUpdateTitle),c.set(e.title),l.set(e.titleModifiers)}),()=>e(t))},ce=(t,r,o)=>{let s=d(w(t,`firstName`)),c=d(w(t,`firstNameModifiers`)),l=d(w(t,`lastName`)),u=d(w(t,`lastNameModifiers`)),m=d(w(t,`onUpdateFirstName`)),g=d(w(t,`onUpdateLastName`)),y=e=>{let t=e.target.value;m.get()?.(c.get()?.trim?t.trim():t)},b=e=>{let t=e.target.value;g.get()?.(u.get()?.trim?t.trim():t)};return i(f(()=>{let e=v(),t=ie().content.cloneNode(!0),r=t.firstChild,i=r.childNodes[0].childNodes[0],o=r.childNodes[1].childNodes[0];e.appendChild(t),n(i,`input input-bordered w-full`),_(()=>{a(i,s.get()??``)});let d=e=>{let t=c.get()?.lazy?void 0:y;typeof t==`function`&&t(e)};i.addEventListener(`input`,d),x(()=>i.removeEventListener(`input`,d));let f=e=>{let t=c.get()?.lazy?y:void 0;typeof t==`function`&&t(e)};i.addEventListener(`change`,f),x(()=>i.removeEventListener(`change`,f)),n(o,`input input-bordered w-full`),_(()=>{a(o,l.get()??``)});let p=e=>{let t=u.get()?.lazy?void 0:b;typeof t==`function`&&t(e)};o.addEventListener(`input`,p),x(()=>o.removeEventListener(`input`,p));let m=e=>{let t=u.get()?.lazy?b:void 0;typeof t==`function`&&t(e)};o.addEventListener(`change`,m),x(()=>o.removeEventListener(`change`,m));let g=h(``),ee=h(``);return e.insertBefore(g,e.firstChild),e.appendChild(ee),[e.firstChild,e.lastChild]}),e=>p(()=>{s.set(e.firstName),c.set(e.firstNameModifiers),l.set(e.lastName),u.set(e.lastNameModifiers),m.set(e.onUpdateFirstName),g.set(e.onUpdateLastName)}),()=>e(t))},le=[`v`,`-model`].join(``),ue=[`v`,`-model`,`:trim`].join(``),de=[`r`,`-model`,`:number`].join(``),fe=[`r`,`-model`,`:lazy`].join(``),pe=[`v`,`-model`,`:trim-title`].join(``),E=[`v`,`-model`,`:trim-first-name`].join(``),D=[`v`,`-model`,`:lazy-last-name`].join(``),O=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+le+`={message.value} />`,`      <input className="input input-bordered" `+ue+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+de+`={age.value} />`,`      <input className="input input-bordered" `+fe+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+le+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+le+`={title.value} />`,`      <TitleField `+pe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+E+`={firstName.value}`,`        `+D+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
`),me=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,he=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,ge=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,_e=(e,t)=>{e.value=t.target.value},ve=(e,t)=>{e.value=t.target.value.trim()},ye=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},be=(e,t)=>{e.value=t.target.checked},xe=(e,t,n)=>{let i=y(`preview`),a=y(`  Rue model  `),d=y(`  keep edges tidy  `),p=y(`18`),ee=y(`blur to sync`),C=y(!1),w=y(`Guide draft`),te=y(`Inside Rue`),re=y(`Rue`),ie=y(`JSX`),le=y(`  Rue model  `),ue=y(`  keep edges tidy  `),de=y(`18`),fe=y(`blur to sync`),pe=y(!1);return b(()=>o(T,()=>({children:(e,t,n)=>{let o=()=>f(e=>{let t=v(),n=ae().content.cloneNode(!0),o=n.firstChild,u=o.childNodes[1].childNodes[0],y=o.childNodes[1].childNodes[1],b=o.childNodes[2],T=b.parentNode,E=o.childNodes[3],D=E.parentNode;t.appendChild(n),u.setAttribute(`role`,`tab`);let xe;_(()=>{let e=`tab ${i.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(xe,t)||(xe=t,u.setAttribute(`class`,t))}),x(S(e,u,`click`,()=>()=>{i.value=`preview`})),y.setAttribute(`role`,`tab`);let k;_(()=>{let e=`tab ${i.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,y.setAttribute(`class`,t))}),x(S(e,y,`click`,()=>()=>{i.value=`code`})),c(T,b,()=>{let e=i.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=g(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let n=g(`div`,t);m(t,n),n.setAttribute(`class`,`card-body gap-6`);let i=g(`div`,n);m(n,i),i.setAttribute(`role`,`alert`),i.setAttribute(`class`,`alert alert-info`);let o=g(`span`,i);m(i,o),m(o,h(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let c=g(`section`,n);m(n,c),c.setAttribute(`class`,`space-y-3`);let l=g(`div`,c);m(c,l),l.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let u=g(`h2`,l);m(l,u),u.setAttribute(`class`,`text-xl font-semibold`),m(u,h(`原生输入：真实指令 vs 手写等价`));let f=g(`div`,l);m(l,f),f.setAttribute(`class`,`flex flex-wrap gap-2`);let v=g(`span`,f);m(f,v),v.setAttribute(`class`,`badge badge-primary`),m(v,h(`directive`));let y=g(`span`,f);m(f,y),y.setAttribute(`class`,`badge badge-secondary`),m(y,h(`manual`));let b=g(`div`,c);m(c,b),b.setAttribute(`class`,`grid gap-4 xl:grid-cols-2 items-start`);let S=g(`div`,b);m(b,S),S.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let T=g(`div`,S);m(S,T),T.setAttribute(`class`,`flex items-center justify-between gap-3`);let ae=g(`h3`,T);m(T,ae),ae.setAttribute(`class`,`font-semibold`),m(ae,h(`Rue TSX 实际写法`));let E=g(`span`,T);m(T,E),E.setAttribute(`class`,`badge badge-primary`),m(E,h(`v-model / r-model`));let D=g(`label`,S);m(S,D),D.setAttribute(`class`,`floating-label`);let O=g(`input`,D);m(D,O),O.setAttribute(`class`,`input input-bordered w-full`);let me;_(()=>{let e=a.value,t=e==null?``:String(e);Object.is(me,t)||(me=t,O.value=t)});let he=e=>{let t=e=>{let t=e.target.value;a.value=t};typeof t==`function`&&t(e)};O.addEventListener(`input`,he),x(()=>O.removeEventListener(`input`,he));let xe=g(`span`,D);m(D,xe),m(xe,h(`v-model`));let k=g(`label`,S);m(S,k),k.setAttribute(`class`,`floating-label`);let A=g(`input`,k);m(k,A),A.setAttribute(`class`,`input input-bordered w-full`);let Se;_(()=>{let e=d.value,t=e==null?``:String(e);Object.is(Se,t)||(Se=t,A.value=t)});let Ce=e=>{let t=e=>{let t=e.target.value;t=t.trim(),d.value=t};typeof t==`function`&&t(e)};A.addEventListener(`input`,Ce),x(()=>A.removeEventListener(`input`,Ce));let we=g(`span`,k);m(k,we),m(we,h(`v-model:trim`));let j=g(`label`,S);m(S,j),j.setAttribute(`class`,`floating-label`);let M=g(`input`,j);m(j,M),M.setAttribute(`type`,`number`),M.setAttribute(`class`,`input input-bordered w-full`);let Te;_(()=>{let e=p.value,t=e==null?``:String(e);Object.is(Te,t)||(Te=t,M.value=t)});let Ee=e=>{let t=e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,p.value=t};typeof t==`function`&&t(e)};M.addEventListener(`input`,Ee),x(()=>M.removeEventListener(`input`,Ee));let De=g(`span`,j);m(j,De),m(De,h(`r-model:number`));let N=g(`label`,S);m(S,N),N.setAttribute(`class`,`floating-label`);let Oe=g(`input`,N);m(N,Oe),Oe.setAttribute(`class`,`input input-bordered w-full`);let ke;_(()=>{let e=ee.value,t=e==null?``:String(e);Object.is(ke,t)||(ke=t,Oe.value=t)});let Ae=e=>{let t=e=>{let t=e.target.value;ee.value=t};typeof t==`function`&&t(e)};Oe.addEventListener(`change`,Ae),x(()=>Oe.removeEventListener(`change`,Ae));let je=g(`span`,N);m(N,je),m(je,h(`r-model:lazy`));let P=g(`label`,S);m(S,P),P.setAttribute(`class`,`label cursor-pointer justify-start gap-3`);let F=g(`input`,P);m(P,F),F.setAttribute(`type`,`checkbox`),F.setAttribute(`class`,`checkbox`);let Me;_(()=>{let e=!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value);Object.is(Me,e)||(Me=e,F.checked=e)});let Ne=e=>{let t=e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t};typeof t==`function`&&t(e)};F.addEventListener(`change`,Ne),x(()=>F.removeEventListener(`change`,Ne));let Pe=g(`span`,P);m(P,Pe),Pe.setAttribute(`class`,`label-text`),m(Pe,h(`v-model checkbox`));let I=g(`div`,S);m(S,I),I.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=g(`p`,I);m(I,Fe),m(Fe,h(`message: `));let Ie=h(``);m(Fe,Ie),s(Ie,()=>a.value||`空`);let Le=g(`p`,I);m(I,Le),m(Le,h(`trimmed: `));let Re=h(``);m(Le,Re),s(Re,()=>d.value||`空`);let ze=g(`p`,I);m(I,ze),m(ze,h(`age: `));let Be=h(``);m(ze,Be),s(Be,()=>String(p.value));let Ve=g(`p`,I);m(I,Ve),m(Ve,h(`lazy: `));let He=h(``);m(Ve,He),s(He,()=>ee.value||`空`);let Ue=g(`p`,I);m(I,Ue),m(Ue,h(`accepted: `));let We=h(``);m(Ue,We),s(We,()=>C.value?`true`:`false`);let L=g(`div`,b);m(b,L),L.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let R=g(`div`,L);m(L,R),R.setAttribute(`class`,`flex items-center justify-between gap-3`);let Ge=g(`h3`,R);m(R,Ge),Ge.setAttribute(`class`,`font-semibold`),m(Ge,h(`手写 value / checked 对照`));let Ke=g(`span`,R);m(R,Ke),Ke.setAttribute(`class`,`badge badge-secondary`),m(Ke,h(`manual`));let z=g(`label`,L);m(L,z),z.setAttribute(`class`,`floating-label`);let qe=g(`input`,z);m(z,qe),qe.setAttribute(`class`,`input input-bordered w-full`);let Je;_(()=>{let e=le.value,t=e==null?``:String(e);Object.is(Je,t)||(Je=t,qe.value=t)});let Ye=e=>{let t=e=>{_e(le,e)};typeof t==`function`&&t(e)};qe.addEventListener(`input`,Ye),x(()=>qe.removeEventListener(`input`,Ye));let Xe=g(`span`,z);m(z,Xe),m(Xe,h(`value + onInput`));let B=g(`label`,L);m(L,B),B.setAttribute(`class`,`floating-label`);let Ze=g(`input`,B);m(B,Ze),Ze.setAttribute(`class`,`input input-bordered w-full`);let Qe;_(()=>{let e=ue.value,t=e==null?``:String(e);Object.is(Qe,t)||(Qe=t,Ze.value=t)});let $e=e=>{let t=e=>{ve(ue,e)};typeof t==`function`&&t(e)};Ze.addEventListener(`input`,$e),x(()=>Ze.removeEventListener(`input`,$e));let et=g(`span`,B);m(B,et),m(et,h(`trim 后手写写回`));let tt=g(`label`,L);m(L,tt),tt.setAttribute(`class`,`floating-label`);let V=g(`input`,tt);m(tt,V),V.setAttribute(`type`,`number`),V.setAttribute(`class`,`input input-bordered w-full`);let nt;_(()=>{let e=String(de.value),t=e==null?``:String(e);Object.is(nt,t)||(nt=t,V.value=t)});let rt=e=>{let t=e=>{ye(de,e)};typeof t==`function`&&t(e)};V.addEventListener(`input`,rt),x(()=>V.removeEventListener(`input`,rt));let it=g(`span`,tt);m(tt,it),m(it,h(`parseFloat 后手写写回`));let H=g(`label`,L);m(L,H),H.setAttribute(`class`,`floating-label`);let at=g(`input`,H);m(H,at),at.setAttribute(`class`,`input input-bordered w-full`);let ot;_(()=>{let e=fe.value,t=e==null?``:String(e);Object.is(ot,t)||(ot=t,at.value=t)});let st=e=>{let t=e=>{_e(fe,e)};typeof t==`function`&&t(e)};at.addEventListener(`change`,st),x(()=>at.removeEventListener(`change`,st));let ct=g(`span`,H);m(H,ct),m(ct,h(`onChange 延迟同步`));let U=g(`label`,L);m(L,U),U.setAttribute(`class`,`label cursor-pointer justify-start gap-3`);let W=g(`input`,U);m(U,W),W.setAttribute(`type`,`checkbox`),W.setAttribute(`class`,`checkbox`);let lt;_(()=>{let e=!!pe.value;Object.is(lt,e)||(lt=e,W.checked=e)});let ut=e=>{let t=e=>{be(pe,e)};typeof t==`function`&&t(e)};W.addEventListener(`change`,ut),x(()=>W.removeEventListener(`change`,ut));let dt=g(`span`,U);m(U,dt),dt.setAttribute(`class`,`label-text`),m(dt,h(`checked + onChange`));let G=g(`div`,L);m(L,G),G.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let ft=g(`p`,G);m(G,ft),m(ft,h(`message: `));let pt=h(``);m(ft,pt),s(pt,()=>le.value||`空`);let mt=g(`p`,G);m(G,mt),m(mt,h(`trimmed: `));let ht=h(``);m(mt,ht),s(ht,()=>ue.value||`空`);let gt=g(`p`,G);m(G,gt),m(gt,h(`age: `));let _t=h(``);m(gt,_t),s(_t,()=>String(de.value));let vt=g(`p`,G);m(G,vt),m(vt,h(`lazy: `));let yt=h(``);m(vt,yt),s(yt,()=>fe.value||`空`);let bt=g(`p`,G);m(G,bt),m(bt,h(`accepted: `));let xt=h(``);m(bt,xt),s(xt,()=>pe.value?`true`:`false`);let K=g(`section`,n);m(n,K),K.setAttribute(`class`,`space-y-3`);let q=g(`div`,K);m(K,q),q.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let St=g(`h2`,q);m(q,St),St.setAttribute(`class`,`text-xl font-semibold`),m(St,h(`组件：真实 v-model vs 等价 props`));let Ct=g(`span`,q);m(q,Ct),Ct.setAttribute(`class`,`badge badge-info badge-lg`),m(Ct,h(`component compare`));let wt=g(`div`,K);m(K,wt),wt.setAttribute(`class`,`grid gap-4 xl:grid-cols-2 items-start`);let J=g(`div`,wt);m(wt,J),J.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Y=g(`div`,J);m(J,Y),Y.setAttribute(`class`,`flex items-center justify-between gap-3`);let Tt=g(`h3`,Y);m(Y,Tt),Tt.setAttribute(`class`,`font-semibold`),m(Tt,h(`Rue TSX 实际组件写法`));let Et=g(`span`,Y);m(Y,Et),Et.setAttribute(`class`,`badge badge-primary`),m(Et,h(`v-model`)),r(J,oe,()=>({label:`v-model={title.value}`,modelValue:w.value,onUpdateModelValue:e=>w.value=e})),r(J,se,()=>({title:te.value,onUpdateTitle:e=>te.value=e,titleModifiers:{trim:!0}})),r(J,ce,()=>({firstName:re.value,onUpdateFirstName:e=>re.value=e,firstNameModifiers:{trim:!0},lastName:ie.value,onUpdateLastName:e=>ie.value=e,lastNameModifiers:{lazy:!0}}));let X=g(`div`,J);m(J,X),X.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Dt=g(`p`,X);m(X,Dt),m(Dt,h(`title: `));let Ot=h(``);m(Dt,Ot),s(Ot,()=>w.value||`空`);let kt=g(`p`,X);m(X,kt),m(kt,h(`articleTitle: `));let At=h(``);m(kt,At),s(At,()=>te.value||`空`);let jt=g(`p`,X);m(X,jt),m(jt,h(`firstName / lastName: `));let Mt=h(``);m(jt,Mt),s(Mt,()=>re.value),m(jt,h(` `));let Nt=h(``);m(jt,Nt),s(Nt,()=>ie.value);let Z=g(`div`,wt);m(wt,Z),Z.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=g(`div`,Z);m(Z,Q),Q.setAttribute(`class`,`flex items-center justify-between gap-3`);let Pt=g(`h3`,Q);m(Q,Pt),Pt.setAttribute(`class`,`font-semibold`),m(Pt,h(`等价手写 props`));let Ft=g(`span`,Q);m(Q,Ft),Ft.setAttribute(`class`,`badge badge-secondary`),m(Ft,h(`modelValue / onUpdateXxx`)),r(Z,ne,()=>({className:`h-full`,lang:`tsx`,code:ge}));let $=g(`div`,Z);m(Z,$),$.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let It=g(`p`,$);m($,It);let Lt=g(`strong`,It);m(It,Lt),m(Lt,h(`v-model`)),m(It,h(` -> modelValue + onUpdateModelValue`));let Rt=g(`p`,$);m($,Rt);let zt=g(`strong`,Rt);m(Rt,zt),m(zt,h(`v-model:trim-title`)),m(Rt,h(` -> title + titleModifiers + onUpdateTitle`));let Bt=g(`p`,$);m($,Bt);let Vt=g(`strong`,Bt);m(Bt,Vt),m(Vt,h(`v-model:trim-first-name`)),m(Bt,h(` -> firstName + firstNameModifiers + onUpdateFirstName`));let Ht=g(`p`,$);m($,Ht);let Ut=g(`strong`,Ht);return m(Ht,Ut),m(Ut,h(`v-model:lazy-last-name`)),m(Ht,h(` -> lastName + lastNameModifiers + onUpdateLastName`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}}),c(D,E,()=>{let e=i.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=g(`div`,e);t.setAttribute(`class`,`grid gap-6`);let n=g(`div`,t);m(t,n),n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let i=g(`div`,n);m(n,i),i.setAttribute(`class`,`card-body gap-3`);let a=g(`h2`,i);m(i,a),a.setAttribute(`class`,`card-title`),m(a,h(`Rue TSX 实际源码`)),r(i,ne,()=>({className:`h-full`,lang:`tsx`,code:O}));let o=g(`div`,t);m(t,o),o.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let s=g(`div`,o);m(o,s),s.setAttribute(`class`,`card-body gap-3`);let c=g(`h2`,s);m(s,c),c.setAttribute(`class`,`card-title`),m(c,h(`手写 modelValue / value 对照`)),r(s,ne,()=>({className:`h-full`,lang:`tsx`,code:me}));let l=g(`div`,t);m(t,l),l.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let u=g(`div`,l);m(l,u),u.setAttribute(`class`,`card-body gap-3`);let d=g(`h2`,u);return m(u,d),d.setAttribute(`class`,`card-title`),m(d,h(`TSX-safe 修饰符写法`)),r(u,ne,()=>({className:`h-full`,lang:`tsx`,code:he})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}});let A=h(``),Se=h(``);return t.insertBefore(A,t.firstChild),t.appendChild(Se),[t.firstChild,t.lastChild]});return e==null?o():u(e,n,o)}})))};export{xe as default};
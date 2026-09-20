import{Bt as e,Dt as t,H as n,Mt as r,Qt as i,U as a,Ut as o,V as s,Vt as c,Wt as l,Y as u,_t as d,en as f,fn as p,gn as m,gt as h,hn as g,in as _,mn as v,pn as y,sn as b,st as x,u as S,vt as C,yn as w,yt as T,zt as ee}from"./rue-runtime-Cv6BZekS.js";import{t as te}from"./Code-BzFVdc3U.js";import{r as E}from"./SidebarPlaygroundExample-rFyhXfC_.js";var ne=w(`<label class="floating-label"><input class="input input-bordered w-full"><span>title</span></label>`),re=w(`<div class="grid gap-3 md:grid-cols-2"><label class="floating-label"><input class="input input-bordered w-full"><span>firstName</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>lastName</span></label></div>`),ie=w(`<div class="space-y-6"><div class="space-y-3"><h1 class="text-5xl font-semibold">v-model / r-model</h1><p class="text-base-content/70 max-w-3xl">这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。</p></div><div role="tablist" class="tabs tabs-box w-fit"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ae=(t,n,r)=>{let i=C(h(t,`label`)),o=C(h(t,`modelValue`)),s=C(h(t,`onUpdateModelValue`));return a(l(t=>{let n=g(`label`,t);n.setAttribute(`class`,`floating-label`);let r=g(`input`,n);p(n,r),r.setAttribute(`class`,`input input-bordered w-full`);let a;_(()=>{let e=o.get()??``,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.value=t)});let c=e=>{let t=e=>{s.get()?.(e.target.value)};typeof t==`function`&&t(e)};r.addEventListener(`input`,c),b(()=>r.removeEventListener(`input`,c));let l=g(`span`,n);p(n,l);let u=y(`rue:compiled-slot`);return p(l,u),e({parent:l,before:u},()=>ee(i.get()),()=>({})),[n,n]}),e=>f(()=>{i.set(e.label),o.set(e.modelValue),s.set(e.onUpdateModelValue)}),()=>d(t))},oe=(e,n,i)=>{let o=C(h(e,`onUpdateTitle`)),s=C(h(e,`title`)),c=C(h(e,`titleModifiers`)),u=e=>{let t=e.target.value;o.get()?.(c.get()?.trim?t.trim():t)};return a(l(()=>{let e=v(),n=ne().content.cloneNode(!0),i=n.firstChild.childNodes[0];e.appendChild(n),t(i,`input input-bordered w-full`),_(()=>{r(i,s.get()??``)});let a=e=>{let t=c.get()?.lazy?void 0:u;typeof t==`function`&&t(e)};i.addEventListener(`input`,a),b(()=>i.removeEventListener(`input`,a));let o=e=>{let t=c.get()?.lazy?u:void 0;typeof t==`function`&&t(e)};i.addEventListener(`change`,o),b(()=>i.removeEventListener(`change`,o));let l=m(``),d=m(``);return e.insertBefore(l,e.firstChild),e.appendChild(d),[e.firstChild,e.lastChild]}),e=>f(()=>{o.set(e.onUpdateTitle),s.set(e.title),c.set(e.titleModifiers)}),()=>d(e))},se=(e,n,i)=>{let o=C(h(e,`firstName`)),s=C(h(e,`firstNameModifiers`)),c=C(h(e,`lastName`)),u=C(h(e,`lastNameModifiers`)),p=C(h(e,`onUpdateFirstName`)),g=C(h(e,`onUpdateLastName`)),y=e=>{let t=e.target.value;p.get()?.(s.get()?.trim?t.trim():t)},x=e=>{let t=e.target.value;g.get()?.(u.get()?.trim?t.trim():t)};return a(l(()=>{let e=v(),n=re().content.cloneNode(!0),i=n.firstChild,a=i.childNodes[0].childNodes[0],l=i.childNodes[1].childNodes[0];e.appendChild(n),t(a,`input input-bordered w-full`),_(()=>{r(a,o.get()??``)});let d=e=>{let t=s.get()?.lazy?void 0:y;typeof t==`function`&&t(e)};a.addEventListener(`input`,d),b(()=>a.removeEventListener(`input`,d));let f=e=>{let t=s.get()?.lazy?y:void 0;typeof t==`function`&&t(e)};a.addEventListener(`change`,f),b(()=>a.removeEventListener(`change`,f)),t(l,`input input-bordered w-full`),_(()=>{r(l,c.get()??``)});let p=e=>{let t=u.get()?.lazy?void 0:x;typeof t==`function`&&t(e)};l.addEventListener(`input`,p),b(()=>l.removeEventListener(`input`,p));let h=e=>{let t=u.get()?.lazy?x:void 0;typeof t==`function`&&t(e)};l.addEventListener(`change`,h),b(()=>l.removeEventListener(`change`,h));let g=m(``),S=m(``);return e.insertBefore(g,e.firstChild),e.appendChild(S),[e.firstChild,e.lastChild]}),e=>f(()=>{o.set(e.firstName),s.set(e.firstNameModifiers),c.set(e.lastName),u.set(e.lastNameModifiers),p.set(e.onUpdateFirstName),g.set(e.onUpdateLastName)}),()=>d(e))},ce=[`v`,`-model`].join(``),le=[`v`,`-model`,`:trim`].join(``),ue=[`r`,`-model`,`:number`].join(``),de=[`r`,`-model`,`:lazy`].join(``),fe=[`v`,`-model`,`:trim-title`].join(``),D=[`v`,`-model`,`:trim-first-name`].join(``),O=[`v`,`-model`,`:lazy-last-name`].join(``),k=[`import { type FC, ref } from '@rue-js/rue'`,``,`type ModelFieldProps = {`,`  label: string`,`  modelValue?: string`,`  onUpdateModelValue?: (value: string) => void`,`}`,``,`const ModelField: FC<ModelFieldProps> = props => (`,`  <label className="floating-label">`,`    <input`,`      className="input input-bordered w-full"`,`      value={props.modelValue ?? ''}`,`      onInput={(event: Event) => {`,`        props.onUpdateModelValue?.((event.target as HTMLInputElement).value)`,`      }}`,`    />`,`    <span>{props.label}</span>`,`  </label>`,`)`,``,`type TitleFieldProps = {`,`  title?: string`,`  titleModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateTitle?: (value: string) => void`,`}`,``,`const TitleField: FC<TitleFieldProps> = props => {`,`  const emitTitleUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <label className="floating-label">`,`      <input`,`        className="input input-bordered w-full"`,`        value={props.title ?? ''}`,`        onInput={props.titleModifiers?.lazy ? undefined : emitTitleUpdate}`,`        onChange={props.titleModifiers?.lazy ? emitTitleUpdate : undefined}`,`      />`,`      <span>title</span>`,`    </label>`,`  )`,`}`,``,`type UserNameEditorProps = {`,`  firstName?: string`,`  lastName?: string`,`  firstNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  lastNameModifiers?: { trim?: boolean; lazy?: boolean }`,`  onUpdateFirstName?: (value: string) => void`,`  onUpdateLastName?: (value: string) => void`,`}`,``,`const UserNameEditor: FC<UserNameEditorProps> = props => {`,`  const emitFirstNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateFirstName?.(props.firstNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  const emitLastNameUpdate = (event: Event) => {`,`    const rawValue = (event.target as HTMLInputElement).value`,`    props.onUpdateLastName?.(props.lastNameModifiers?.trim ? rawValue.trim() : rawValue)`,`  }`,``,`  return (`,`    <div className="grid gap-3 md:grid-cols-2">`,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.firstName ?? ''}`,`          onInput={props.firstNameModifiers?.lazy ? undefined : emitFirstNameUpdate}`,`          onChange={props.firstNameModifiers?.lazy ? emitFirstNameUpdate : undefined}`,`        />`,`        <span>firstName</span>`,`      </label>`,``,`      <label className="floating-label">`,`        <input`,`          className="input input-bordered w-full"`,`          value={props.lastName ?? ''}`,`          onInput={props.lastNameModifiers?.lazy ? undefined : emitLastNameUpdate}`,`          onChange={props.lastNameModifiers?.lazy ? emitLastNameUpdate : undefined}`,`        />`,`        <span>lastName</span>`,`      </label>`,`    </div>`,`  )`,`}`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+ce+`={message.value} />`,`      <input className="input input-bordered" `+le+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ue+`={age.value} />`,`      <input className="input input-bordered" `+de+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+ce+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+ce+`={title.value} />`,`      <TitleField `+fe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+D+`={firstName.value}`,`        `+O+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
`),pe=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,me=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,he=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,ge=(e,t)=>{e.value=t.target.value},_e=(e,t)=>{e.value=t.target.value.trim()},ve=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},ye=(e,t)=>{e.value=t.target.checked},be=(e,t,r)=>{let a=x(`preview`),d=x(`  Rue model  `),f=x(`  keep edges tidy  `),h=x(`18`),y=x(`blur to sync`),C=x(!1),w=x(`Guide draft`),ee=x(`Inside Rue`),ne=x(`Rue`),re=x(`JSX`),ce=x(`  Rue model  `),le=x(`  keep edges tidy  `),ue=x(`18`),de=x(`blur to sync`),fe=x(!1);return u(()=>s(E,()=>({children:(e,t,r)=>{let s=()=>l(e=>{let t=v(),r=ie().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[1].childNodes[0],u=s.childNodes[1].childNodes[1],x=s.childNodes[2],E=x.parentNode,D=s.childNodes[3],O=D.parentNode;t.appendChild(r),c.setAttribute(`role`,`tab`);let be;_(()=>{let e=`tab ${a.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(be,t)||(be=t,c.setAttribute(`class`,t))}),b(S(e,c,`click`,()=>()=>{a.value=`preview`})),u.setAttribute(`role`,`tab`);let A;_(()=>{let e=`tab ${a.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(A,t)||(A=t,u.setAttribute(`class`,t))}),b(S(e,u,`click`,()=>()=>{a.value=`code`})),o(E,x,()=>{let e=a.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=g(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=g(`div`,t);p(t,r),r.setAttribute(`class`,`card-body gap-6`);let a=g(`div`,r);p(r,a),a.setAttribute(`role`,`alert`),a.setAttribute(`class`,`alert alert-info`);let o=g(`span`,a);p(a,o),p(o,m(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let s=g(`section`,r);p(r,s),s.setAttribute(`class`,`space-y-3`);let c=g(`div`,s);p(s,c),c.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let l=g(`h2`,c);p(c,l),l.setAttribute(`class`,`text-xl font-semibold`),p(l,m(`原生输入：真实指令 vs 手写等价`));let u=g(`div`,c);p(c,u),u.setAttribute(`class`,`flex flex-wrap gap-2`);let v=g(`span`,u);p(u,v),v.setAttribute(`class`,`badge badge-primary`),p(v,m(`directive`));let x=g(`span`,u);p(u,x),x.setAttribute(`class`,`badge badge-secondary`),p(x,m(`manual`));let S=g(`div`,s);p(s,S),S.setAttribute(`class`,`grid gap-4 xl:grid-cols-2 items-start`);let T=g(`div`,S);p(S,T),T.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let E=g(`div`,T);p(T,E),E.setAttribute(`class`,`flex items-center justify-between gap-3`);let ie=g(`h3`,E);p(E,ie),ie.setAttribute(`class`,`font-semibold`),p(ie,m(`Rue TSX 实际写法`));let D=g(`span`,E);p(E,D),D.setAttribute(`class`,`badge badge-primary`),p(D,m(`v-model / r-model`));let O=g(`label`,T);p(T,O),O.setAttribute(`class`,`floating-label`);let k=g(`input`,O);p(O,k),k.setAttribute(`class`,`input input-bordered w-full`);let pe;_(()=>{let e=d.value,t=e==null?``:String(e);Object.is(pe,t)||(pe=t,k.value=t)});let me=e=>{let t=e=>{let t=e.target.value;d.value=t};typeof t==`function`&&t(e)};k.addEventListener(`input`,me),b(()=>k.removeEventListener(`input`,me));let be=g(`span`,O);p(O,be),p(be,m(`v-model`));let A=g(`label`,T);p(T,A),A.setAttribute(`class`,`floating-label`);let j=g(`input`,A);p(A,j),j.setAttribute(`class`,`input input-bordered w-full`);let xe;_(()=>{let e=f.value,t=e==null?``:String(e);Object.is(xe,t)||(xe=t,j.value=t)});let Se=e=>{let t=e=>{let t=e.target.value;t=t.trim(),f.value=t};typeof t==`function`&&t(e)};j.addEventListener(`input`,Se),b(()=>j.removeEventListener(`input`,Se));let Ce=g(`span`,A);p(A,Ce),p(Ce,m(`v-model:trim`));let M=g(`label`,T);p(T,M),M.setAttribute(`class`,`floating-label`);let N=g(`input`,M);p(M,N),N.setAttribute(`type`,`number`),N.setAttribute(`class`,`input input-bordered w-full`);let we;_(()=>{let e=h.value,t=e==null?``:String(e);Object.is(we,t)||(we=t,N.value=t)});let Te=e=>{let t=e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,h.value=t};typeof t==`function`&&t(e)};N.addEventListener(`input`,Te),b(()=>N.removeEventListener(`input`,Te));let Ee=g(`span`,M);p(M,Ee),p(Ee,m(`r-model:number`));let P=g(`label`,T);p(T,P),P.setAttribute(`class`,`floating-label`);let De=g(`input`,P);p(P,De),De.setAttribute(`class`,`input input-bordered w-full`);let Oe;_(()=>{let e=y.value,t=e==null?``:String(e);Object.is(Oe,t)||(Oe=t,De.value=t)});let ke=e=>{let t=e=>{let t=e.target.value;y.value=t};typeof t==`function`&&t(e)};De.addEventListener(`change`,ke),b(()=>De.removeEventListener(`change`,ke));let Ae=g(`span`,P);p(P,Ae),p(Ae,m(`r-model:lazy`));let F=g(`label`,T);p(T,F),F.setAttribute(`class`,`label cursor-pointer justify-start gap-3`);let I=g(`input`,F);p(F,I),I.setAttribute(`type`,`checkbox`),I.setAttribute(`class`,`checkbox`);let je;_(()=>{let e=!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value);Object.is(je,e)||(je=e,I.checked=e)});let Me=e=>{let t=e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t};typeof t==`function`&&t(e)};I.addEventListener(`change`,Me),b(()=>I.removeEventListener(`change`,Me));let Ne=g(`span`,F);p(F,Ne),Ne.setAttribute(`class`,`label-text`),p(Ne,m(`v-model checkbox`));let L=g(`div`,T);p(T,L),L.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Pe=g(`p`,L);p(L,Pe),p(Pe,m(`message: `));let Fe=m(``);p(Pe,Fe),i(Fe,()=>d.value||`空`);let Ie=g(`p`,L);p(L,Ie),p(Ie,m(`trimmed: `));let Le=m(``);p(Ie,Le),i(Le,()=>f.value||`空`);let Re=g(`p`,L);p(L,Re),p(Re,m(`age: `));let ze=m(``);p(Re,ze),i(ze,()=>String(h.value));let Be=g(`p`,L);p(L,Be),p(Be,m(`lazy: `));let Ve=m(``);p(Be,Ve),i(Ve,()=>y.value||`空`);let He=g(`p`,L);p(L,He),p(He,m(`accepted: `));let Ue=m(``);p(He,Ue),i(Ue,()=>C.value?`true`:`false`);let R=g(`div`,S);p(S,R),R.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let z=g(`div`,R);p(R,z),z.setAttribute(`class`,`flex items-center justify-between gap-3`);let We=g(`h3`,z);p(z,We),We.setAttribute(`class`,`font-semibold`),p(We,m(`手写 value / checked 对照`));let Ge=g(`span`,z);p(z,Ge),Ge.setAttribute(`class`,`badge badge-secondary`),p(Ge,m(`manual`));let B=g(`label`,R);p(R,B),B.setAttribute(`class`,`floating-label`);let Ke=g(`input`,B);p(B,Ke),Ke.setAttribute(`class`,`input input-bordered w-full`);let qe;_(()=>{let e=ce.value,t=e==null?``:String(e);Object.is(qe,t)||(qe=t,Ke.value=t)});let Je=e=>{let t=e=>{ge(ce,e)};typeof t==`function`&&t(e)};Ke.addEventListener(`input`,Je),b(()=>Ke.removeEventListener(`input`,Je));let Ye=g(`span`,B);p(B,Ye),p(Ye,m(`value + onInput`));let V=g(`label`,R);p(R,V),V.setAttribute(`class`,`floating-label`);let Xe=g(`input`,V);p(V,Xe),Xe.setAttribute(`class`,`input input-bordered w-full`);let Ze;_(()=>{let e=le.value,t=e==null?``:String(e);Object.is(Ze,t)||(Ze=t,Xe.value=t)});let Qe=e=>{let t=e=>{_e(le,e)};typeof t==`function`&&t(e)};Xe.addEventListener(`input`,Qe),b(()=>Xe.removeEventListener(`input`,Qe));let $e=g(`span`,V);p(V,$e),p($e,m(`trim 后手写写回`));let H=g(`label`,R);p(R,H),H.setAttribute(`class`,`floating-label`);let U=g(`input`,H);p(H,U),U.setAttribute(`type`,`number`),U.setAttribute(`class`,`input input-bordered w-full`);let et;_(()=>{let e=String(ue.value),t=e==null?``:String(e);Object.is(et,t)||(et=t,U.value=t)});let tt=e=>{let t=e=>{ve(ue,e)};typeof t==`function`&&t(e)};U.addEventListener(`input`,tt),b(()=>U.removeEventListener(`input`,tt));let nt=g(`span`,H);p(H,nt),p(nt,m(`parseFloat 后手写写回`));let W=g(`label`,R);p(R,W),W.setAttribute(`class`,`floating-label`);let rt=g(`input`,W);p(W,rt),rt.setAttribute(`class`,`input input-bordered w-full`);let it;_(()=>{let e=de.value,t=e==null?``:String(e);Object.is(it,t)||(it=t,rt.value=t)});let at=e=>{let t=e=>{ge(de,e)};typeof t==`function`&&t(e)};rt.addEventListener(`change`,at),b(()=>rt.removeEventListener(`change`,at));let ot=g(`span`,W);p(W,ot),p(ot,m(`onChange 延迟同步`));let G=g(`label`,R);p(R,G),G.setAttribute(`class`,`label cursor-pointer justify-start gap-3`);let K=g(`input`,G);p(G,K),K.setAttribute(`type`,`checkbox`),K.setAttribute(`class`,`checkbox`);let st;_(()=>{let e=!!fe.value;Object.is(st,e)||(st=e,K.checked=e)});let ct=e=>{let t=e=>{ye(fe,e)};typeof t==`function`&&t(e)};K.addEventListener(`change`,ct),b(()=>K.removeEventListener(`change`,ct));let lt=g(`span`,G);p(G,lt),lt.setAttribute(`class`,`label-text`),p(lt,m(`checked + onChange`));let q=g(`div`,R);p(R,q),q.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let ut=g(`p`,q);p(q,ut),p(ut,m(`message: `));let dt=m(``);p(ut,dt),i(dt,()=>ce.value||`空`);let ft=g(`p`,q);p(q,ft),p(ft,m(`trimmed: `));let pt=m(``);p(ft,pt),i(pt,()=>le.value||`空`);let mt=g(`p`,q);p(q,mt),p(mt,m(`age: `));let ht=m(``);p(mt,ht),i(ht,()=>String(ue.value));let gt=g(`p`,q);p(q,gt),p(gt,m(`lazy: `));let _t=m(``);p(gt,_t),i(_t,()=>de.value||`空`);let vt=g(`p`,q);p(q,vt),p(vt,m(`accepted: `));let yt=m(``);p(vt,yt),i(yt,()=>fe.value?`true`:`false`);let J=g(`section`,r);p(r,J),J.setAttribute(`class`,`space-y-3`);let bt=g(`div`,J);p(J,bt),bt.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let xt=g(`h2`,bt);p(bt,xt),xt.setAttribute(`class`,`text-xl font-semibold`),p(xt,m(`组件：真实 v-model vs 等价 props`));let St=g(`span`,bt);p(bt,St),St.setAttribute(`class`,`badge badge-info badge-lg`),p(St,m(`component compare`));let Ct=g(`div`,J);p(J,Ct),Ct.setAttribute(`class`,`grid gap-4 xl:grid-cols-2 items-start`);let Y=g(`div`,Ct);p(Ct,Y),Y.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let X=g(`div`,Y);p(Y,X),X.setAttribute(`class`,`flex items-center justify-between gap-3`);let wt=g(`h3`,X);p(X,wt),wt.setAttribute(`class`,`font-semibold`),p(wt,m(`Rue TSX 实际组件写法`));let Tt=g(`span`,X);p(X,Tt),Tt.setAttribute(`class`,`badge badge-primary`),p(Tt,m(`v-model`)),n(Y,ae,()=>({label:`v-model={title.value}`,modelValue:w.value,onUpdateModelValue:e=>w.value=e})),n(Y,oe,()=>({title:ee.value,onUpdateTitle:e=>ee.value=e,titleModifiers:{trim:!0}})),n(Y,se,()=>({firstName:ne.value,onUpdateFirstName:e=>ne.value=e,firstNameModifiers:{trim:!0},lastName:re.value,onUpdateLastName:e=>re.value=e,lastNameModifiers:{lazy:!0}}));let Z=g(`div`,Y);p(Y,Z),Z.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Et=g(`p`,Z);p(Z,Et),p(Et,m(`title: `));let Dt=m(``);p(Et,Dt),i(Dt,()=>w.value||`空`);let Ot=g(`p`,Z);p(Z,Ot),p(Ot,m(`articleTitle: `));let kt=m(``);p(Ot,kt),i(kt,()=>ee.value||`空`);let At=g(`p`,Z);p(Z,At),p(At,m(`firstName / lastName: `));let jt=m(``);p(At,jt),i(jt,()=>ne.value),p(At,m(` `));let Mt=m(``);p(At,Mt),i(Mt,()=>re.value);let Q=g(`div`,Ct);p(Ct,Q),Q.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Nt=g(`div`,Q);p(Q,Nt),Nt.setAttribute(`class`,`flex items-center justify-between gap-3`);let Pt=g(`h3`,Nt);p(Nt,Pt),Pt.setAttribute(`class`,`font-semibold`),p(Pt,m(`等价手写 props`));let Ft=g(`span`,Nt);p(Nt,Ft),Ft.setAttribute(`class`,`badge badge-secondary`),p(Ft,m(`modelValue / onUpdateXxx`)),n(Q,te,()=>({className:`h-full`,lang:`tsx`,code:he}));let $=g(`div`,Q);p(Q,$),$.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let It=g(`p`,$);p($,It);let Lt=g(`strong`,It);p(It,Lt),p(Lt,m(`v-model`)),p(It,m(` -> modelValue + onUpdateModelValue`));let Rt=g(`p`,$);p($,Rt);let zt=g(`strong`,Rt);p(Rt,zt),p(zt,m(`v-model:trim-title`)),p(Rt,m(` -> title + titleModifiers + onUpdateTitle`));let Bt=g(`p`,$);p($,Bt);let Vt=g(`strong`,Bt);p(Bt,Vt),p(Vt,m(`v-model:trim-first-name`)),p(Bt,m(` -> firstName + firstNameModifiers + onUpdateFirstName`));let Ht=g(`p`,$);p($,Ht);let Ut=g(`strong`,Ht);return p(Ht,Ut),p(Ut,m(`v-model:lazy-last-name`)),p(Ht,m(` -> lastName + lastNameModifiers + onUpdateLastName`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=v();return[t.firstChild,t.lastChild]})}}),o(O,D,()=>{let e=a.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=g(`div`,e);t.setAttribute(`class`,`grid gap-6`);let r=g(`div`,t);p(t,r),r.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let i=g(`div`,r);p(r,i),i.setAttribute(`class`,`card-body gap-3`);let a=g(`h2`,i);p(i,a),a.setAttribute(`class`,`card-title`),p(a,m(`Rue TSX 实际源码`)),n(i,te,()=>({className:`h-full`,lang:`tsx`,code:k}));let o=g(`div`,t);p(t,o),o.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let s=g(`div`,o);p(o,s),s.setAttribute(`class`,`card-body gap-3`);let c=g(`h2`,s);p(s,c),c.setAttribute(`class`,`card-title`),p(c,m(`手写 modelValue / value 对照`)),n(s,te,()=>({className:`h-full`,lang:`tsx`,code:pe}));let l=g(`div`,t);p(t,l),l.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let u=g(`div`,l);p(l,u),u.setAttribute(`class`,`card-body gap-3`);let d=g(`h2`,u);return p(u,d),d.setAttribute(`class`,`card-title`),p(d,m(`TSX-safe 修饰符写法`)),n(u,te,()=>({className:`h-full`,lang:`tsx`,code:me})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=v();return[t.firstChild,t.lastChild]})}});let j=m(``),xe=m(``);return t.insertBefore(j,t.firstChild),t.appendChild(xe),[t.firstChild,t.lastChild]});return e==null?s():c(e,r,s)}})))};export{be as default};
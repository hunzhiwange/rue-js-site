import{A as e,At as t,B as n,Bt as r,Dt as i,E as a,F as o,I as s,It as c,Jt as l,Lt as u,M as d,P as f,Rt as p,Tt as m,Ut as h,V as g,Vt as _,W as v,Wt as y,X as b,Y as x,_ as S,an as C,ct as w,en as T,f as ee,fn as E,gn as D,h as O,hn as k,in as A,mn as j,mt as M,nt as te,p as ne,pn as N,qt as P,sn as F,u as I,v as re,y as ie,yn as L,z as R,zt as z}from"./rue-runtime-BWbIfNT8.js";import{t as B}from"./Code-C5ZhIIr9.js";import{r as V}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var H=`import {
  computed,
  createContext,
  Slot,
  Template,
  type FC,
  ref,
  useContext,
  useCustomElement,
  useEmit,
  useHost,
  useShadowRoot,
} from '@rue-js/rue'
import { provideContext } from '@rue-js/rue/internal/app'
import SidebarPlayground from '../site/SidebarPlaygroundExample'
import Code from '../site/components/Code'
import labSource from './WebComponentFeatureLab.tsx?raw'

type FeatureId = 'shadow' | 'light' | 'slots' | 'events' | 'context'
type LabEvent = {
  type: string
  detail: string
}
type ScopedBadgeProps = {
  channel: string
  count: number
}

const LAB_CONTEXT = createContext('lab:fallback')

const LabContextProvider: FC<{ value: string; children?: any }> = props => {
  provideContext(LAB_CONTEXT, () => props.value)
  return <>{props.children}</>
}

const LAB_TAGS = {
  shadow: 'rue-lab-shadow-probe',
  light: 'rue-lab-light-probe',
  slots: 'rue-lab-slot-probe',
  events: 'rue-lab-event-probe',
  context: 'rue-lab-context-probe',
}

const featureTabs: Array<{ id: FeatureId; title: string; badge: string }> = [
  { id: 'shadow', title: 'Shadow Root', badge: 'styles' },
  { id: 'light', title: 'Light DOM Props', badge: 'props' },
  { id: 'slots', title: 'Native Slots', badge: 'slot' },
  { id: 'events', title: 'Event Bridge', badge: 'emit' },
  { id: 'context', title: 'Context + Scoped Slot', badge: 'context' },
]

const shadowStyles = [
  \`
    :host {
      display: block;
      color: #e2e8f0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .shadowBox {
      min-height: 190px;
      display: grid;
      gap: 14px;
      align-content: center;
      border: 1px solid rgba(148, 163, 184, 0.26);
      border-radius: 18px;
      padding: 20px;
      background:
        radial-gradient(circle at top right, rgba(56, 189, 248, 0.22), transparent 38%),
        linear-gradient(135deg, #0f172a, #111827);
      box-shadow: 0 18px 36px rgba(15, 23, 42, 0.22);
    }

    .shadowTitle {
      margin: 0;
      font-size: 24px;
      line-height: 1.1;
      font-weight: 800;
      color: white;
    }

    .shadowMeta {
      margin: 0;
      font-size: 13px;
      color: rgba(226, 232, 240, 0.78);
    }

    .shadowCount {
      width: max-content;
      border-radius: 999px;
      background: #38bdf8;
      color: #082f49;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 700;
    }
  \`,
]

const lightStyles = [
  \`
    .lightBox {
      min-height: 160px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border: 1px solid hsl(var(--bc) / 0.12);
      border-radius: 16px;
      padding: 18px;
      background: hsl(var(--b1));
    }

    .lightTitle {
      margin: 0;
      font-weight: 800;
      font-size: 20px;
    }

    .lightMeta {
      margin: 4px 0 0;
      color: hsl(var(--bc) / 0.62);
      font-size: 13px;
    }

    .lightCount {
      min-width: 72px;
      text-align: center;
      border-radius: 14px;
      padding: 10px 12px;
      background: hsl(var(--p) / 0.12);
      color: hsl(var(--p));
      font-size: 28px;
      font-weight: 800;
    }
  \`,
]

const ShadowProbe: FC<Record<string, unknown>> = props => {
  const host = useHost()
  const shadowRoot = useShadowRoot()
  const title = String(props.title ?? 'Shadow probe')
  const count = Number(props.count ?? 0)

  return (
    <section className="shadowBox" data-testid="lab-shadow-box">
      <div>
        <p className="shadowTitle">{title}</p>
        <p className="shadowMeta" data-testid="lab-shadow-mode">
          {host?.tagName.toLowerCase() ?? 'no-host'} / {shadowRoot ? 'shadow' : 'light'}
        </p>
      </div>
      <div className="shadowCount" data-testid="lab-shadow-count">
        count {count}
      </div>
    </section>
  )
}

const LightProbe: FC<Record<string, unknown>> = props => {
  const title = String(props.title ?? 'Light probe')
  const count = Number(props.count ?? 0)

  return (
    <section className="lightBox" data-testid="lab-light-box">
      <div>
        <p className="lightTitle">{title}</p>
        <p className="lightMeta">shadowRoot disabled</p>
      </div>
      <div className="lightCount" data-testid="lab-light-count">
        {count}
      </div>
    </section>
  )
}

const NativeSlotProbe: FC = () => (
  <section className="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
    <header className="border-b border-base-300 pb-3">
      <slot name="header"></slot>
    </header>
    <main className="pt-4 text-sm text-base-content/75">
      <slot></slot>
    </main>
  </section>
)

const EventProbe: FC<Record<string, unknown>> = props => {
  const emit = useEmit(props as any)
  const count = Number(props.count ?? 0)

  return (
    <button
      type="button"
      className="btn btn-primary"
      data-testid="lab-event-button"
      onClick={() => {
        emit('confirm', { count, source: 'custom-element' })
      }}
    >
      emit confirm
    </button>
  )
}

const ContextProbe: FC<Record<string, unknown>> = props => {
  const channel = computed(() => useContext(LAB_CONTEXT))
  const count = Number(props.count ?? 0)

  return (
    <section className="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
      <p className="font-mono text-sm" data-testid="lab-context-value">
        {channel.value}
      </p>
      <div className="mt-4">
        <Slot source={props} name="badge" props={{ channel: channel.value, count }}>
          <span className="badge badge-outline" data-testid="lab-scoped-fallback">
            fallback badge
          </span>
        </Slot>
      </div>
    </section>
  )
}

const ShadowElement = useCustomElement(ShadowProbe, {
  styles: shadowStyles,
  nonce: 'rue-lab-nonce',
})

const LightElement = useCustomElement(LightProbe, {
  shadowRoot: false,
  styles: lightStyles,
})

const SlotElement = useCustomElement(NativeSlotProbe)
const EventElement = useCustomElement(EventProbe)
const ContextElement = useCustomElement(ContextProbe, { shadowRoot: false })

const registerLabElement = (tag: string, ctor: CustomElementConstructor) => {
  if (typeof customElements === 'undefined') {
    return
  }
  if (!customElements.get(tag)) {
    customElements.define(tag, ctor)
  }
}

registerLabElement(LAB_TAGS.shadow, ShadowElement)
registerLabElement(LAB_TAGS.light, LightElement)
registerLabElement(LAB_TAGS.slots, SlotElement)
registerLabElement(LAB_TAGS.events, EventElement)
registerLabElement(LAB_TAGS.context, ContextElement)

const formatDetail = (value: unknown) => {
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

const WebComponentFeatureLab: FC = () => {
  const activeTab = ref<'preview' | 'code'>('preview')
  const active = ref<FeatureId>('shadow')
  const title = ref('Rue CE probe')
  const count = ref(3)
  const channel = ref('outer:lab')
  const eventLog = ref<LabEvent[]>([])

  const pushEvent = (event: Event) => {
    const customEvent = event as CustomEvent
    eventLog.value = [
      {
        type: event.type,
        detail: formatDetail(customEvent.detail),
      },
      ...eventLog.value,
    ].slice(0, 3)
  }

  const renderPanel = () => {
    if (active.value === 'shadow') {
      return (
        <section data-testid="lab-panel-shadow" className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              className="btn btn-sm"
              onClick={() => {
                count.value += 1
              }}
            >
              count +1
            </button>
            <button
              className="btn btn-sm"
              onClick={() => {
                title.value = title.value === 'Rue CE probe' ? 'Shadow updated' : 'Rue CE probe'
              }}
            >
              title
            </button>
          </div>
          <rue-lab-shadow-probe props={{ title: title.value, count: count.value }} />
        </section>
      )
    }

    if (active.value === 'light') {
      return (
        <section data-testid="lab-panel-light" className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              className="btn btn-sm"
              onClick={() => {
                count.value += 2
              }}
            >
              count +2
            </button>
          </div>
          <rue-lab-light-probe props={{ title: title.value, count: count.value }} />
        </section>
      )
    }

    if (active.value === 'slots') {
      return (
        <section data-testid="lab-panel-slots" className="space-y-4">
          <rue-lab-slot-probe>
            <strong slot="header" data-testid="lab-native-header">
              Native slot header
            </strong>
            <span data-testid="lab-native-body">Native default body</span>
          </rue-lab-slot-probe>
        </section>
      )
    }

    if (active.value === 'events') {
      return (
        <section data-testid="lab-panel-events" className="space-y-4">
          <rue-lab-event-probe props={{ count: count.value }} onConfirm={pushEvent as any} />
          <div className="rounded-box border border-base-300 bg-base-100 p-4">
            <div className="font-mono text-sm" data-testid="lab-event-log">
              {eventLog.value[0]?.type ?? 'waiting'}
              {eventLog.value[0] ? \` \${eventLog.value[0].detail}\` : ''}
            </div>
          </div>
        </section>
      )
    }

    return (
      <section data-testid="lab-panel-context" className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            className="btn btn-sm"
            onClick={() => {
              channel.value = channel.value === 'outer:lab' ? 'outer:updated' : 'outer:lab'
            }}
          >
            channel
          </button>
        </div>
        <LabContextProvider value={channel.value}>
          <rue-lab-context-probe props={{ count: count.value }}>
            <Template slot="badge">
              {
                (({ channel, count }: ScopedBadgeProps) => (
                  <span className="badge badge-primary" data-testid="lab-scoped-badge">
                    {channel} / {count}
                  </span>
                )) as any
              }
            </Template>
          </rue-lab-context-probe>
        </LabContextProvider>
      </section>
    )
  }

  return (
    <SidebarPlayground>
      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-base-content/50">
              Custom Elements Lab
            </p>
            <h1 className="mt-2 text-4xl font-semibold">Web Components 分项测试</h1>
          </div>
          {activeTab.value === 'preview' && (
            <div className="stats shadow bg-base-100">
              <div className="stat py-3">
                <div className="stat-title">active</div>
                <div className="stat-value text-lg">{active.value}</div>
              </div>
            </div>
          )}
        </div>

        <div role="tablist" className="tabs tabs-box">
          <button
            role="tab"
            className={\`tab \${activeTab.value === 'preview' ? 'tab-active' : ''}\`}
            onClick={() => {
              activeTab.value = 'preview'
            }}
          >
            效果
          </button>
          <button
            role="tab"
            className={\`tab \${activeTab.value === 'code' ? 'tab-active' : ''}\`}
            onClick={() => {
              activeTab.value = 'code'
            }}
          >
            代码
          </button>
        </div>

        {activeTab.value === 'code' ? (
          <div className="card bg-base-100 shadow overflow-auto">
            <div className="card-body p-0">
              <Code className="h-full" lang="tsx" code={labSource} title="完整可复制示例" />
            </div>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <nav className="rounded-box border border-base-300 bg-base-100 p-3 shadow-sm">
              <div className="space-y-2">
                {featureTabs.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    className={\`btn w-full justify-between \${
                      active.value === item.id ? 'btn-primary' : 'btn-ghost'
                    }\`}
                    onClick={() => {
                      active.value = item.id
                    }}
                  >
                    <span>{item.title}</span>
                    <span className="badge badge-sm">{item.badge}</span>
                  </button>
                ))}
              </div>
            </nav>

            <div className="rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6">
              {renderPanel()}
            </div>
          </div>
        )}
      </section>
    </SidebarPlayground>
  )
}

export default WebComponentFeatureLab
`,U=L(`<span class="badge badge-primary" data-testid="lab-scoped-badge"><!--rue:text-hole:0--> / <!--rue:text-hole:1--></span>`),W=L(`<section class="shadowBox" data-testid="lab-shadow-box"><div><p class="shadowTitle">rue:direct-text</p><p class="shadowMeta" data-testid="lab-shadow-mode"><!--rue:text-hole:1--> / <!--rue:text-hole:2--></p></div><div class="shadowCount" data-testid="lab-shadow-count">count <!--rue:text-hole:3--></div></section>`),G=L(`<section class="lightBox" data-testid="lab-light-box"><div><p class="lightTitle">rue:direct-text</p><p class="lightMeta">shadowRoot disabled</p></div><div class="lightCount" data-testid="lab-light-count"><!--rue:text-hole:1--></div></section>`),K=L(`<button type="button" class="btn btn-primary" data-testid="lab-event-button">emit confirm</button>`),q=L(`<section class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><p class="font-mono text-sm" data-testid="lab-context-value"><!--rue:text-hole:0--></p><div class="mt-4"><!--rue:opaque-hole:1--></div></section>`),J=L(`<section data-testid="lab-panel-shadow" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +1</button><button class="btn btn-sm">title</button></div><!--rue:opaque-hole:0--></section>`),Y=L(`<section data-testid="lab-panel-light" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +2</button></div><!--rue:opaque-hole:0--></section>`),ae=L(`<section data-testid="lab-panel-slots" class="space-y-4"><!--rue:opaque-hole:0--></section>`),oe=L(`<section data-testid="lab-panel-events" class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="font-mono text-sm" data-testid="lab-event-log"><!--rue:text-hole:1--><!--rue:text-hole:2--></div></div></section>`),se=L(`<section data-testid="lab-panel-context" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">channel</button></div><!--rue:opaque-hole:0--></section>`),ce=L(`<section class="space-y-6"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm uppercase tracking-[0.22em] text-base-content/50">Custom Elements Lab</p><h1 class="mt-2 text-4xl font-semibold">Web Components 分项测试</h1></div><!--rue:text-hole:0--></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:1--></section>`),X=c(`lab:fallback`),le=(e,t,i)=>{let a=v(R(e,`children`)),o=v(R(e,`value`));return u(X,()=>o.get()),s(y(e=>{let t=j(),n=N(`rue:compiled-slot`);E(t,n),r({parent:t,before:n},()=>a.get(),()=>({}));let i=D(``),o=D(``);return t.insertBefore(i,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]}),e=>T(()=>{a.set(e.children),o.set(e.value)}),()=>n(e))},Z={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},ue=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],de=[`
    :host {
      display: block;
      color: #e2e8f0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .shadowBox {
      min-height: 190px;
      display: grid;
      gap: 14px;
      align-content: center;
      border: 1px solid rgba(148, 163, 184, 0.26);
      border-radius: 18px;
      padding: 20px;
      background:
        radial-gradient(circle at top right, rgba(56, 189, 248, 0.22), transparent 38%),
        linear-gradient(135deg, #0f172a, #111827);
      box-shadow: 0 18px 36px rgba(15, 23, 42, 0.22);
    }

    .shadowTitle {
      margin: 0;
      font-size: 24px;
      line-height: 1.1;
      font-weight: 800;
      color: white;
    }

    .shadowMeta {
      margin: 0;
      font-size: 13px;
      color: rgba(226, 232, 240, 0.78);
    }

    .shadowCount {
      width: max-content;
      border-radius: 999px;
      background: #38bdf8;
      color: #082f49;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 700;
    }
  `],fe=[`
    .lightBox {
      min-height: 160px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border: 1px solid hsl(var(--bc) / 0.12);
      border-radius: 16px;
      padding: 18px;
      background: hsl(var(--b1));
    }

    .lightTitle {
      margin: 0;
      font-weight: 800;
      font-size: 20px;
    }

    .lightMeta {
      margin: 4px 0 0;
      color: hsl(var(--bc) / 0.62);
      font-size: 13px;
    }

    .lightCount {
      min-width: 72px;
      text-align: center;
      border-radius: 14px;
      padding: 10px 12px;
      background: hsl(var(--p) / 0.12);
      color: hsl(var(--p));
      font-size: 28px;
      font-weight: 800;
    }
  `],pe=(e,t,i)=>{let a=v(R(e,`count`)),o=v(R(e,`title`)),c=re(),l=ie(),u=w(()=>String(o.get()??`Shadow probe`));u.get();let d=w(()=>Number(a.get()??0));return d.get(),s(y(e=>{let t=j(),n=W().content.cloneNode(!0),i=n.firstChild,a=i.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[0].childNodes[1].childNodes[0],f=s.parentNode,p=i.childNodes[0].childNodes[1].childNodes[2],m=p.parentNode,_=i.childNodes[1].childNodes[1],v=_.parentNode,y=N(`rue:text-hole:0`);o.replaceChild(y,a),t.appendChild(n),r({parent:o,before:y},()=>z(u.get()),()=>({})),r({parent:f,before:s},()=>z(c?.tagName.toLowerCase()??`no-host`),()=>({})),h(m,p,()=>l?{__rue_compiled_branch_key:!0,create:()=>g(e=>{let t=D(`shadow`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=D(`light`);return[t,t]})}),r({parent:v,before:_},()=>z(d.get()),()=>({}));let b=D(``),x=D(``);return t.insertBefore(b,t.firstChild),t.appendChild(x),[t.firstChild,t.lastChild]}),e=>T(()=>{a.set(e.count),o.set(e.title)}),()=>n(e))},me=(e,t,i)=>{let a=v(R(e,`count`)),o=v(R(e,`title`)),c=w(()=>String(o.get()??`Light probe`));c.get();let l=w(()=>Number(a.get()??0));return l.get(),s(y(()=>{let e=j(),t=G().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[1].childNodes[0],s=o.parentNode,u=N(`rue:text-hole:0`);a.replaceChild(u,i),e.appendChild(t),r({parent:a,before:u},()=>z(c.get()),()=>({})),r({parent:s,before:o},()=>z(l.get()),()=>({}));let d=D(``),f=D(``);return e.insertBefore(d,e.firstChild),e.appendChild(f),[e.firstChild,e.lastChild]}),e=>T(()=>{a.set(e.count),o.set(e.title)}),()=>n(e))},he=(e,t,n)=>g(e=>{let t=k(`section`,e);t.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let n=k(`header`,t);E(t,n),n.setAttribute(`class`,`border-b border-base-300 pb-3`);let r=k(`slot`,n);E(n,r),r.setAttribute(`name`,`header`);let i=k(`main`,t);E(t,i),i.setAttribute(`class`,`pt-4 text-sm text-base-content/75`);let a=k(`slot`,i);return E(i,a),[t,t]}),ge=(t,n,r)=>{let i=e(t),a=w(()=>Number(R(t,`count`)??0));return a.get(),y(e=>{let t=K().content.cloneNode(!0).firstChild,n=t;return n.setAttribute(`type`,`button`),n.setAttribute(`class`,`btn btn-primary`),n.setAttribute(`data-testid`,`lab-event-button`),F(I(e,n,`click`,()=>()=>{i(`confirm`,{count:a.get(),source:`custom-element`})})),[t,t]})},_e=(e,t,i)=>{let{channel:o,count:s,__rue_phase2_count:c}=l(`useSetup:0:0`,()=>{let t=w(()=>p(X)),n=w(()=>Number(R(e,`count`)??0));return n.get(),{channel:t,count:n,__rue_phase2_count:n}});return y(t=>{let i=q().content.cloneNode(!0).firstChild,c=i.childNodes[0].childNodes[0],l=c.parentNode,u=i.childNodes[1].childNodes[0],d=u.parentNode;r({parent:l,before:c},()=>z(o.value),()=>({}));let p=(t,r,i)=>{let c=()=>f(a,()=>({source:n(e),name:`badge`,props:{channel:o.value,count:s.get()},children:(e,t,n)=>{let r=()=>g(e=>{let t=j(),n=k(`span`,t);E(t,n),n.setAttribute(`class`,`badge badge-outline`),n.setAttribute(`data-testid`,`lab-scoped-fallback`),E(n,D(`fallback badge`));let r=D(``),i=D(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return t==null?c():_(t,i,c)},m=u.nextSibling;return d.removeChild(u),r({parent:d,before:m},()=>p,()=>({})),[i,i]})},ve=S(pe,{styles:de,nonce:`rue-lab-nonce`}),ye=S(me,{shadowRoot:!1,styles:fe}),Q=S(he),be=S(ge),xe=S(_e,{shadowRoot:!1}),$=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};$(Z.shadow,ve),$(Z.light,ye),$(Z.slots,Q),$(Z.events,be),$(Z.context,xe);var Se=e=>{try{return JSON.stringify(e)}catch{return String(e)}},Ce=(e,n,a)=>{let s=M(`preview`),c=M(`shadow`),l=M(`Rue CE probe`),u=M(3),f=M(`outer:lab`),p=M([]),S=e=>{let t=e;p.value=[{type:e.type,detail:Se(t.detail)},...p.value].slice(0,3)},w=(e,n,i)=>c.value===`shadow`?y(e=>{let n=J().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[0].childNodes[1],a=n.childNodes[1],o=a.parentNode;r.setAttribute(`class`,`btn btn-sm`),F(I(e,r,`click`,()=>()=>{u.value+=1})),i.setAttribute(`class`,`btn btn-sm`),F(I(e,i,`click`,()=>()=>{l.value=l.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`}));let s=k(`rue-lab-shadow-probe`,o);return t(s,`__rue_context_parent_instance__`,C()),E(o,s),o.insertBefore(s,a),A(()=>{t(s,`props`,{title:l.value,count:u.value})}),[n,n]}):c.value===`light`?y(e=>{let n=Y().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[1],a=i.parentNode;r.setAttribute(`class`,`btn btn-sm`),F(I(e,r,`click`,()=>()=>{u.value+=2}));let o=k(`rue-lab-light-probe`,a);return t(o,`__rue_context_parent_instance__`,C()),E(a,o),a.insertBefore(o,i),A(()=>{t(o,`props`,{title:l.value,count:u.value})}),[n,n]}):c.value===`slots`?g(e=>{let n=ae().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=k(`rue-lab-slot-probe`,i);t(a,`__rue_context_parent_instance__`,C()),E(i,a),i.insertBefore(a,r);let o=k(`strong`,a);E(a,o),m(o,`slot`,`header`),m(o,`data-testid`,`lab-native-header`),E(o,D(`Native slot header`));let s=k(`span`,a);return E(a,s),m(s,`data-testid`,`lab-native-body`),E(s,D(`Native default body`)),[n,n]}):c.value===`events`?y(e=>{let n=oe().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,o=n.childNodes[1].childNodes[0].childNodes[0],s=o.parentNode,c=n.childNodes[1].childNodes[0].childNodes[1],l=c.parentNode,d=k(`rue-lab-event-probe`,a);t(d,`__rue_context_parent_instance__`,C()),E(a,d),a.insertBefore(d,i),A(()=>{t(d,`props`,{count:u.value})});let f=e=>{let t=S;typeof t==`function`&&t(e)};return d.addEventListener(`confirm`,f),F(()=>d.removeEventListener(`confirm`,f)),r({parent:s,before:o},()=>z(p.value[0]?.type??`waiting`),()=>({})),r({parent:l,before:c},()=>p.value[0]?z(` ${p.value[0].detail}`):(e,t,n)=>{let r=()=>g(e=>{let t=D(``);return[t,t]});return e==null?r():_(e,n,r)},()=>({})),[n,n]}):y(e=>{let n=se().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0],a=n.childNodes[1],o=a.parentNode;i.setAttribute(`class`,`btn btn-sm`),F(I(e,i,`click`,()=>()=>{f.value=f.value===`outer:lab`?`outer:updated`:`outer:lab`}));let s=y(()=>{let e=j(),n=k(`rue-lab-context-probe`,e);t(n,`__rue_context_parent_instance__`,C()),E(e,n),A(()=>{t(n,`props`,{count:u.value})}),t(n,`__rue_slots`,{badge:({channel:e,count:t})=>y(n=>{let i=U().content.cloneNode(!0).firstChild,a=i.childNodes[0],o=a.parentNode,s=i.childNodes[2],c=s.parentNode;return r({parent:o,before:a},()=>z(e),()=>({})),r({parent:c,before:s},()=>z(t),()=>({})),[i,i]})});let i=D(``),a=D(``);return e.insertBefore(i,e.firstChild),e.appendChild(a),[e.firstChild,e.lastChild]});return r({parent:o,before:a},()=>(e,t,n)=>_(e,n,()=>d(le,()=>({value:f.value,children:s}))),()=>({})),[n,n]});return te(()=>(()=>{let e=y(e=>{let t=j(),n=ce().content.cloneNode(!0),a=n.firstChild,l=a.childNodes[1].childNodes[0],u=a.childNodes[1].childNodes[1],d=a.childNodes[0].childNodes[1],f=d.parentNode,p=a.childNodes[2],m=p.parentNode;t.appendChild(n),l.setAttribute(`role`,`tab`);let S;A(()=>{let e=`tab ${s.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,l.setAttribute(`class`,t))}),F(I(e,l,`click`,()=>()=>{s.value=`preview`})),u.setAttribute(`role`,`tab`);let C;A(()=>{let e=`tab ${s.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,u.setAttribute(`class`,t))}),F(I(e,u,`click`,()=>()=>{s.value=`code`})),h(f,d,()=>{let e=s.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>x(e=>{let t=k(`div`,e);t.setAttribute(`class`,`stats shadow bg-base-100`);let n=k(`div`,t);E(t,n),n.setAttribute(`class`,`stat py-3`);let r=k(`div`,n);E(n,r),r.setAttribute(`class`,`stat-title`),E(r,D(`active`));let i=k(`div`,n);E(n,i),i.setAttribute(`class`,`stat-value text-lg`);let a=D(``);return E(i,a),b(a,()=>c.value),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=D(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=j();return[t.firstChild,t.lastChild]})}}),r({parent:m,before:p},()=>s.value===`code`?(e,t,n)=>_(e,n,()=>y(e=>{let t=k(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=k(`div`,t);return E(t,n),n.setAttribute(`class`,`card-body p-0`),o(n,B,()=>({className:`h-full`,lang:`tsx`,code:H,title:`完整可复制示例`})),[t,t]})):(e,t,n)=>_(e,n,()=>y(e=>{let t=j(),n=k(`div`,t);E(t,n),i(n,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let a=k(`nav`,n);E(n,a),i(a,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let o=k(`div`,a);E(a,o),i(o,`space-y-2`);let s=N(`rue:list:end`);E(o,s);let l=[];P(()=>{l=O(o,s,l,ue||[],(e,t)=>e.id,(e,t)=>{let n=v(e);return ne((e,t,i)=>{let a=()=>y(e=>{let t=k(`button`,e);t.setAttribute(`type`,`button`);let i;A(()=>{let e=`btn w-full justify-between ${c.value===n.get().id?`btn-primary`:`btn-ghost`}`,r=e===!1||e==null?``:String(e);Object.is(i,r)||(i=r,t.setAttribute(`class`,r))}),F(I(e,t,`click`,()=>()=>{c.value=n.get().id}));let a=k(`span`,t);E(t,a);let o=N(`rue:compiled-slot`);E(a,o),r({parent:a,before:o},()=>z(n.get().title),()=>({}));let s=k(`span`,t);E(t,s),s.setAttribute(`class`,`badge badge-sm`);let l=N(`rue:compiled-slot`);return E(s,l),r({parent:s,before:l},()=>z(n.get().badge),()=>({})),[t,t]});return e==null?a():_(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>ee(l));let u=k(`div`,n);E(n,u),i(u,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let d=N(`rue:slot:anchor`);E(u,d),r({parent:u,before:d},()=>(e,t,n)=>z(w())(e,t,n),()=>({}));let f=D(``),p=D(``);return t.insertBefore(f,t.firstChild),t.appendChild(p),[t.firstChild,t.lastChild]})),()=>({}));let T=D(``),M=D(``);return t.insertBefore(T,t.firstChild),t.appendChild(M),[t.firstChild,t.lastChild]});return d(V,()=>({children:e}))})())};export{Ce as default};
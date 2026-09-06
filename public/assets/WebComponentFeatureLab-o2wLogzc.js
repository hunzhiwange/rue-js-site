import{A as e,At as t,C as n,Dn as r,E as i,M as a,Mt as o,P as s,Q as c,Qt as l,Tn as u,Tt as d,Vt as f,_n as p,_t as m,at as h,b as g,bn as _,ct as v,d as y,dt as b,et as x,gn as S,gt as ee,hn as C,j as w,kn as T,l as E,mn as te,nt as D,on as O,pn as k,qt as ne,sn as A,st as j,tn as M,u as re,ut as N,vn as P,vt as F,w as ie,wn as I,xn as L,xt as R,y as ae,yt as z}from"./rue-runtime-HIMg8Lz8.js";import{t as B}from"./Code-DpH7u0gk.js";import{r as V}from"./SidebarPlaygroundExample-BCPRe0hA.js";var H=`import {
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
        <LAB_CONTEXT.Provider value={channel.value}>
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
        </LAB_CONTEXT.Provider>
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
`,U=P(`<span class="badge badge-primary" data-testid="lab-scoped-badge"><!--rue:text-hole:0--> / <!--rue:text-hole:1--></span>`),W=P(`<section class="shadowBox" data-testid="lab-shadow-box"><div><p class="shadowTitle"><!--rue:text-hole:0--></p><p class="shadowMeta" data-testid="lab-shadow-mode"><!--rue:text-hole:1--> / <!--rue:text-hole:2--></p></div><div class="shadowCount" data-testid="lab-shadow-count">count <!--rue:text-hole:3--></div></section>`),G=P(`<section class="lightBox" data-testid="lab-light-box"><div><p class="lightTitle"><!--rue:text-hole:0--></p><p class="lightMeta">shadowRoot disabled</p></div><div class="lightCount" data-testid="lab-light-count"><!--rue:text-hole:1--></div></section>`),K=P(`<button type="button" class="btn btn-primary" data-testid="lab-event-button">emit confirm</button>`),q=P(`<section class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><p class="font-mono text-sm" data-testid="lab-context-value"><!--rue:text-hole:0--></p><div class="mt-4"><!--rue:opaque-hole:1--></div></section>`),J=P(`<section data-testid="lab-panel-shadow" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +1</button><button class="btn btn-sm">title</button></div><!--rue:opaque-hole:0--></section>`),oe=P(`<section data-testid="lab-panel-light" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +2</button></div><!--rue:opaque-hole:0--></section>`),se=P(`<section data-testid="lab-panel-slots" class="space-y-4"><!--rue:opaque-hole:0--></section>`),ce=P(`<section data-testid="lab-panel-events" class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="font-mono text-sm" data-testid="lab-event-log"><!--rue:text-hole:1--><!--rue:text-hole:2--></div></div></section>`),le=P(`<section data-testid="lab-panel-context" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">channel</button></div><!--rue:opaque-hole:0--></section>`),ue=P(`<section class="space-y-6"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm uppercase tracking-[0.22em] text-base-content/50">Custom Elements Lab</p><h1 class="mt-2 text-4xl font-semibold">Web Components 分项测试</h1></div><!--rue:text-hole:0--></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:1--></section>`),Y=w(`lab:fallback`),X={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},de=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],fe=[`
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
  `],pe=[`
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
  `],Z=e=>{let t=h(e.count),n=h(e.title),r=re(),i=y(),a=s(()=>String(n.get()??`Shadow probe`));a.get();let o=s(()=>Number(t.get()??0));return o.get(),v(f(Object.assign(e=>{let t=W().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],s=n.parentNode,c=t.childNodes[0].childNodes[1].childNodes[0],l=c.parentNode,u=t.childNodes[0].childNodes[1].childNodes[2],d=u.parentNode,m=t.childNodes[1].childNodes[1],h=m.parentNode,g=p(``);s.insertBefore(g,n),s.removeChild(n),L(g,()=>a.get()),D(l,c,()=>{let e=r?.tagName.toLowerCase();return e==null?{__rue_compiled_branch_key:null,create:()=>f(Object.assign(e=>{let t=p(`no-host`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>f(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),D(d,u,()=>i?{__rue_compiled_branch_key:!0,create:()=>f(Object.assign(e=>{let t=p(`shadow`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=p(`light`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let _=p(``);return h.insertBefore(_,m),h.removeChild(m),L(_,()=>o.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{t.set(e.count),n.set(e.title)}),()=>e)},me=e=>{let n=h(e.count),r=h(e.title),i=String(r.get()??`Light probe`),a=Number(n.get()??0);return v(t(()=>{let e=m(),t=G().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0].childNodes[0].childNodes[0],o=r.parentNode,s=n.childNodes[1].childNodes[0],c=s.parentNode;return e.appendChild(t),I(()=>{let e=i;T(()=>N(e,o,r))}),I(()=>{let e=a;T(()=>N(e,c,s))}),e},!0),e=>x(()=>{n.set(e.count),r.set(e.title)}),()=>e)},Q=()=>v(f(Object.assign(e=>{let t=S(`section`,e);t.className=`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`;let n=S(`header`,t);k(t,n),n.className=`border-b border-base-300 pb-3`;let r=S(`slot`,n);k(n,r),r.setAttribute(`name`,`header`);let i=S(`main`,t);k(t,i),i.className=`pt-4 text-sm text-base-content/75`;let a=S(`slot`,i);return k(i,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{})),he=t=>{let n=e(t),i=A(`computed:1:0`,()=>s(()=>Number(t.count??0)));return i.get(),f(Object.assign(e=>{let t=K().content.cloneNode(!0).firstChild,a=t;a.setAttribute(`type`,`button`),a.className=`btn btn-primary`,a.setAttribute(`data-testid`,`lab-event-button`);let o=e=>{let t=()=>{n(`confirm`,{count:i.get(),source:`custom-element`})};typeof t==`function`&&t(e)};return a.addEventListener(`click`,o),r(()=>a.removeEventListener(`click`,o)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},ge=e=>{let{channel:n,count:r,__rue_phase2_count:o}=_(`useSetup:0:0`,()=>{let t=s(()=>a(Y)),n=s(()=>Number(e.count??0));return n.get(),{channel:t,count:n,__rue_phase2_count:n}});return t(t=>{let a=q().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0],s=o.parentNode,c=a.childNodes[1].childNodes[0],l=c.parentNode;I(()=>{let e=n.value;T(()=>N(e,s,o))});let u=C(l);return j(u,ae,()=>({source:e,name:`badge`,props:{channel:n.value,count:r.get()},children:(e,t,n)=>i(e,n,()=>f(Object.assign(e=>{let t=m(),n=S(`span`,t);return k(t,n),n.className=`badge badge-outline`,n.setAttribute(`data-testid`,`lab-scoped-fallback`),k(n,p(`fallback badge`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(u,c),a})},_e=E(Z,{styles:fe,nonce:`rue-lab-nonce`}),ve=E(me,{shadowRoot:!1,styles:pe}),ye=E(Q),be=E(he),xe=E(ge,{shadowRoot:!1}),$=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};$(X.shadow,_e),$(X.light,ve),$(X.slots,ye),$(X.events,be),$(X.context,xe);var Se=e=>{try{return JSON.stringify(e)}catch{return String(e)}},Ce=()=>{let e=M(`preview`),a=M(`shadow`),s=M(`Rue CE probe`),_=M(3),y=M(`outer:lab`),C=M([]),w=e=>{let t=e;C.value=[{type:e.type,detail:Se(t.detail)},...C.value].slice(0,3)},E=O(()=>a.value===`shadow`?t(e=>{let t=J().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=t.childNodes[0].childNodes[1],i=t.childNodes[1],a=i.parentNode;c(n,`btn btn-sm`);let o=e=>{let t=()=>{_.value+=1};typeof t==`function`&&t(e)};n.addEventListener(`click`,o),l(()=>n.removeEventListener(`click`,o)),c(r,`btn btn-sm`);let f=e=>{let t=()=>{s.value=s.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`};typeof t==`function`&&t(e)};r.addEventListener(`click`,f),l(()=>r.removeEventListener(`click`,f));let p=F(`rue-lab-shadow-probe`,a);return d(p,`__rue_context_parent_instance__`,u()),b(a,p),a.insertBefore(p,i),I(()=>{d(p,`props`,{title:s.value,count:_.value})}),t}):a.value===`light`?t(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=t.childNodes[1],i=r.parentNode;c(n,`btn btn-sm`);let a=e=>{let t=()=>{_.value+=2};typeof t==`function`&&t(e)};n.addEventListener(`click`,a),l(()=>n.removeEventListener(`click`,a));let o=F(`rue-lab-light-probe`,i);return d(o,`__rue_context_parent_instance__`,u()),b(i,o),i.insertBefore(o,r),I(()=>{d(o,`props`,{title:s.value,count:_.value})}),t}):a.value===`slots`?t(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=F(`rue-lab-slot-probe`,r);d(i,`__rue_context_parent_instance__`,u()),b(r,i),r.insertBefore(i,n);let a=F(`strong`,i);b(i,a),R(a,`slot`,`header`),R(a,`data-testid`,`lab-native-header`),b(a,z(`Native slot header`));let o=F(`span`,i);return b(i,o),R(o,`data-testid`,`lab-native-body`),b(o,z(`Native default body`)),t}):a.value===`events`?t(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=t.childNodes[1].childNodes[0].childNodes[0],a=i.parentNode,o=t.childNodes[1].childNodes[0].childNodes[1],s=o.parentNode,c=F(`rue-lab-event-probe`,r);d(c,`__rue_context_parent_instance__`,u()),b(r,c),r.insertBefore(c,n),I(()=>{d(c,`props`,{count:_.value})});let m=e=>{let t=w;typeof t==`function`&&t(e)};return c.addEventListener(`confirm`,m),l(()=>c.removeEventListener(`confirm`,m)),D(a,i,()=>{let e=C.value[0]?.type;return e==null?{__rue_compiled_branch_key:null,create:()=>f(Object.assign(e=>{let t=p(`waiting`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>f(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),I(()=>{let e=C.value[0]?` ${C.value[0].detail}`:``;T(()=>N(e,s,o))}),t}):t(e=>{let n=le().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[1],a=i.parentNode;c(r,`btn btn-sm`);let s=e=>{let t=()=>{y.value=y.value===`outer:lab`?`outer:updated`:`outer:lab`};typeof t==`function`&&t(e)};return r.addEventListener(`click`,s),l(()=>r.removeEventListener(`click`,s)),I(()=>{let e=t(()=>{let e=m(),n=F(`rue-lab-context-probe`,e);return d(n,`__rue_context_parent_instance__`,u()),b(e,n),I(()=>{d(n,`props`,{count:_.value})}),d(n,`__rue_slots`,{badge:({channel:e,count:n})=>t(t=>{let r=U().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[2],s=o.parentNode;return I(()=>{let t=e;T(()=>N(t,a,i))}),I(()=>{let e=n;T(()=>N(e,s,o))}),r})}),e}),n=o(Y.Provider,()=>({value:y.value,children:e}));T(()=>N(n,a,i))}),n}));return ne(()=>v((()=>{let s=t(()=>{let o=m(),s=ue().content.cloneNode(!0),u=s.firstChild,d=u.childNodes[1].childNodes[0],_=u.childNodes[1].childNodes[1],v=u.childNodes[0].childNodes[1],y=v.parentNode,x=u.childNodes[2],C=x.parentNode;o.appendChild(s),R(d,`role`,`tab`),I(()=>{c(d,`tab ${e.value===`preview`?`tab-active`:``}`)});let w=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};d.addEventListener(`click`,w),l(()=>d.removeEventListener(`click`,w)),R(_,`role`,`tab`),I(()=>{c(_,`tab ${e.value===`code`?`tab-active`:``}`)});let O=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return _.addEventListener(`click`,O),l(()=>_.removeEventListener(`click`,O)),D(y,v,()=>{let t=e.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>f(Object.assign(e=>{let t=S(`div`,e);t.className=`stats shadow bg-base-100`;let n=S(`div`,t);k(t,n),n.className=`stat py-3`;let r=S(`div`,n);k(n,r),r.className=`stat-title`,k(r,p(`active`));let i=S(`div`,n);k(n,i),i.className=`stat-value text-lg`;let o=p(``);return k(i,o),L(o,()=>a.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>f(Object.assign(e=>{let n=p(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),I(()=>{let o=e.value===`code`?f(Object.assign(e=>{let t=S(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=S(`div`,t);return k(t,n),n.className=`card-body p-0`,j(n,B,()=>({className:`h-full`,lang:`tsx`,code:H,title:`完整可复制示例`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):t(()=>{let e=m(),t=F(`div`,e);b(e,t),c(t,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let o=F(`nav`,t);b(t,o),c(o,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let s=F(`div`,o);b(o,s),c(s,`space-y-2`);let l=te(`rue:list:end`);k(s,l);let u=[];I(()=>{u=ie(s,l,u,de||[],(e,t)=>e.id,(e,t)=>{let o=h(e);return n((e,t,n)=>i(e,n,()=>f(Object.assign(e=>{let t=S(`button`,e);t.setAttribute(`type`,`button`);let n;I(()=>{let e=`btn w-full justify-between ${a.value===o.get().id?`btn-primary`:`btn-ghost`}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let i=e=>{let t=()=>{a.value=o.get().id};typeof t==`function`&&t(e)};t.addEventListener(`click`,i),r(()=>t.removeEventListener(`click`,i));let s=S(`span`,t);k(t,s);let c=p(``);k(s,c),L(c,()=>o.get().title);let l=S(`span`,t);k(t,l),l.className=`badge badge-sm`;let u=p(``);return k(l,u),L(u,()=>o.get().badge),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r)=>{e=n,t=r,o.set(n)})})}),r(()=>g(u));let d=F(`div`,t);b(t,d),c(d,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let _=ee(`rue:slot:anchor`);return b(d,_),I(()=>{let e=E();T(()=>N(e,d,_))}),e},!0);T(()=>N(o,C,x))}),o});return o(V,()=>({children:s}))})(),e=>x(()=>{})))};O(Z);export{Ce as default};
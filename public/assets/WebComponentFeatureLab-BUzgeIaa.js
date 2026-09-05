import{Bt as e,C as t,D as n,Dn as r,Et as i,K as a,Kt as o,L as s,Lt as c,Mt as l,O as u,S as d,Sn as f,Tn as p,V as m,W as h,X as g,Y as _,_n as v,_t as y,bn as b,d as x,f as S,fn as C,gn as w,hn as T,ht as E,it as D,k as O,kn as k,mn as A,nt as j,ot as M,p as ee,pn as te,q as N,qt as ne,rt as P,tt as F,u as re,ut as I,wn as L,x as R,yn as ie,z}from"./rue-runtime-CwEGJ854.js";import{t as B}from"./Code-DUvGro8N.js";import{r as V}from"./SidebarPlaygroundExample-EGR0CyDT.js";var H=`import {
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
`,U=v(`<span class="badge badge-primary" data-testid="lab-scoped-badge"><!--rue:text-hole:0--> / <!--rue:text-hole:1--></span>`),W=v(`<section class="shadowBox" data-testid="lab-shadow-box"><div><p class="shadowTitle"><!--rue:text-hole:0--></p><p class="shadowMeta" data-testid="lab-shadow-mode"><!--rue:text-hole:1--> / <!--rue:text-hole:2--></p></div><div class="shadowCount" data-testid="lab-shadow-count">count <!--rue:text-hole:3--></div></section>`),G=v(`<section class="lightBox" data-testid="lab-light-box"><div><p class="lightTitle"><!--rue:text-hole:0--></p><p class="lightMeta">shadowRoot disabled</p></div><div class="lightCount" data-testid="lab-light-count"><!--rue:text-hole:1--></div></section>`),K=v(`<button type="button" class="btn btn-primary" data-testid="lab-event-button">emit confirm</button>`),q=v(`<section class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><p class="font-mono text-sm" data-testid="lab-context-value"><!--rue:text-hole:0--></p><div class="mt-4"><!--rue:opaque-hole:1--></div></section>`),J=v(`<section data-testid="lab-panel-shadow" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +1</button><button class="btn btn-sm">title</button></div><!--rue:opaque-hole:0--></section>`),Y=v(`<section data-testid="lab-panel-light" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +2</button></div><!--rue:opaque-hole:0--></section>`),ae=v(`<section data-testid="lab-panel-slots" class="space-y-4"><!--rue:opaque-hole:0--></section>`),oe=v(`<section data-testid="lab-panel-events" class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="font-mono text-sm" data-testid="lab-event-log"><!--rue:text-hole:1--><!--rue:text-hole:2--></div></div></section>`),se=v(`<section data-testid="lab-panel-context" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">channel</button></div><!--rue:opaque-hole:0--></section>`),ce=v(`<section class="space-y-6"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm uppercase tracking-[0.22em] text-base-content/50">Custom Elements Lab</p><h1 class="mt-2 text-4xl font-semibold">Web Components 分项测试</h1></div><!--rue:text-hole:0--></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:1--></section>`),X=u(`lab:fallback`),Z={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},le=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],ue=[`
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
  `],de=[`
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
  `],fe=e=>{let t=h(e.count),n=h(e.title),r=S(),a=ee(),o=f(()=>String(n.get()??`Shadow probe`));o.get();let s=f(()=>Number(t.get()??0));return s.get(),N(i(Object.assign(e=>{let t=W().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],c=n.parentNode,l=t.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,d=t.childNodes[0].childNodes[1].childNodes[2],f=d.parentNode,p=t.childNodes[1].childNodes[1],h=p.parentNode,g=w(``);c.insertBefore(g,n),c.removeChild(n),b(g,()=>o.get()),m(u,l,()=>{let e=r?.tagName.toLowerCase();return e==null?{__rue_compiled_branch_key:null,create:()=>i(Object.assign(e=>{let t=w(`no-host`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=w(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),m(f,d,()=>a?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=w(`shadow`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=w(`light`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let _=w(``);return h.insertBefore(_,p),h.removeChild(p),b(_,()=>s.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>z(()=>{t.set(e.count),n.set(e.title)}),()=>e)},pe=e=>{let t=h(e.count),n=h(e.title),r=String(n.get()??`Light probe`),i=Number(t.get()??0);return N(E(()=>{let e=j(),t=G().content.cloneNode(!0),n=t.firstChild,a=n.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[0],c=s.parentNode;return e.appendChild(t),L(()=>{let e=r;k(()=>_(e,o,a))}),L(()=>{let e=i;k(()=>_(e,c,s))}),e},!0),e=>z(()=>{t.set(e.count),n.set(e.title)}),()=>e)},me=()=>N(i(Object.assign(e=>{let t=T(`section`,e);t.className=`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`;let n=T(`header`,t);C(t,n),n.className=`border-b border-base-300 pb-3`;let r=T(`slot`,n);C(n,r),r.setAttribute(`name`,`header`);let i=T(`main`,t);C(t,i),i.className=`pt-4 text-sm text-base-content/75`;let a=T(`slot`,i);return C(i,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>z(()=>{})),Q=e=>{let t=n(e),a=ne(`computed:1:0`,()=>f(()=>Number(e.count??0)));return a.get(),i(Object.assign(e=>{let n=K().content.cloneNode(!0).firstChild,i=n;i.setAttribute(`type`,`button`),i.className=`btn btn-primary`,i.setAttribute(`data-testid`,`lab-event-button`);let o=e=>{let n=()=>{t(`confirm`,{count:a.get(),source:`custom-element`})};typeof n==`function`&&n(e)};return i.addEventListener(`click`,o),r(()=>i.removeEventListener(`click`,o)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},he=e=>{let{channel:t,count:n,__rue_phase2_count:r}=ie(`useSetup:0:0`,()=>{let t=f(()=>O(X)),n=f(()=>Number(e.count??0));return n.get(),{channel:t,count:n,__rue_phase2_count:n}});return E(r=>{let o=q().content.cloneNode(!0).firstChild,s=o.childNodes[0].childNodes[0],c=s.parentNode,l=o.childNodes[1].childNodes[0],u=l.parentNode;L(()=>{let e=t.value;k(()=>_(e,c,s))});let d=A(u);return a(d,re,()=>({source:e,name:`badge`,props:{channel:t.value,count:n.get()},children:(e,t,n)=>R(e,n,()=>i(Object.assign(e=>{let t=j(),n=T(`span`,t);return C(t,n),n.className=`badge badge-outline`,n.setAttribute(`data-testid`,`lab-scoped-fallback`),C(n,w(`fallback badge`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(d,l),o})},ge=x(fe,{styles:ue,nonce:`rue-lab-nonce`}),_e=x(pe,{shadowRoot:!1,styles:de}),ve=x(me),ye=x(Q),be=x(he,{shadowRoot:!1}),$=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};$(Z.shadow,ge),$(Z.light,_e),$(Z.slots,ve),$(Z.events,ye),$(Z.context,be);var xe=e=>{try{return JSON.stringify(e)}catch{return String(e)}},Se=()=>{let n=e(`preview`),u=e(`shadow`),f=e(`Rue CE probe`),v=e(3),x=e(`outer:lab`),S=e([]),O=e=>{let t=e;S.value=[{type:e.type,detail:xe(t.detail)},...S.value].slice(0,3)},A=o(()=>u.value===`shadow`?E(e=>{let t=J().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=t.childNodes[0].childNodes[1],i=t.childNodes[1],a=i.parentNode;s(n,`btn btn-sm`);let o=e=>{let t=()=>{v.value+=1};typeof t==`function`&&t(e)};n.addEventListener(`click`,o),c(()=>n.removeEventListener(`click`,o)),s(r,`btn btn-sm`);let l=e=>{let t=()=>{f.value=f.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`};typeof t==`function`&&t(e)};r.addEventListener(`click`,l),c(()=>r.removeEventListener(`click`,l));let u=P(`rue-lab-shadow-probe`,a);return I(u,`__rue_context_parent_instance__`,p()),g(a,u),a.insertBefore(u,i),L(()=>{I(u,`props`,{title:f.value,count:v.value})}),t}):u.value===`light`?E(e=>{let t=Y().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=t.childNodes[1],i=r.parentNode;s(n,`btn btn-sm`);let a=e=>{let t=()=>{v.value+=2};typeof t==`function`&&t(e)};n.addEventListener(`click`,a),c(()=>n.removeEventListener(`click`,a));let o=P(`rue-lab-light-probe`,i);return I(o,`__rue_context_parent_instance__`,p()),g(i,o),i.insertBefore(o,r),L(()=>{I(o,`props`,{title:f.value,count:v.value})}),t}):u.value===`slots`?E(e=>{let t=ae().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=P(`rue-lab-slot-probe`,r);I(i,`__rue_context_parent_instance__`,p()),g(r,i),r.insertBefore(i,n);let a=P(`strong`,i);g(i,a),M(a,`slot`,`header`),M(a,`data-testid`,`lab-native-header`),g(a,D(`Native slot header`));let o=P(`span`,i);return g(i,o),M(o,`data-testid`,`lab-native-body`),g(o,D(`Native default body`)),t}):u.value===`events`?E(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,a=t.childNodes[1].childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[1].childNodes[0].childNodes[1],l=s.parentNode,u=P(`rue-lab-event-probe`,r);I(u,`__rue_context_parent_instance__`,p()),g(r,u),r.insertBefore(u,n),L(()=>{I(u,`props`,{count:v.value})});let d=e=>{let t=O;typeof t==`function`&&t(e)};return u.addEventListener(`confirm`,d),c(()=>u.removeEventListener(`confirm`,d)),m(o,a,()=>{let e=S.value[0]?.type;return e==null?{__rue_compiled_branch_key:null,create:()=>i(Object.assign(e=>{let t=w(`waiting`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=w(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),L(()=>{let e=S.value[0]?` ${S.value[0].detail}`:``;k(()=>_(e,l,s))}),t}):E(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=t.childNodes[1],i=r.parentNode;s(n,`btn btn-sm`);let a=e=>{let t=()=>{x.value=x.value===`outer:lab`?`outer:updated`:`outer:lab`};typeof t==`function`&&t(e)};return n.addEventListener(`click`,a),c(()=>n.removeEventListener(`click`,a)),L(()=>{let e=E(()=>{let e=j(),t=P(`rue-lab-context-probe`,e);return I(t,`__rue_context_parent_instance__`,p()),g(e,t),L(()=>{I(t,`props`,{count:v.value})}),I(t,`__rue_slots`,{badge:({channel:e,count:t})=>E(n=>{let r=U().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[2],s=o.parentNode;return L(()=>{let t=e;k(()=>_(t,a,i))}),L(()=>{let e=t;k(()=>_(e,s,o))}),r})}),e}),t=y(X.Provider,()=>({value:x.value,children:e}));k(()=>_(t,i,r))}),t}));return l(()=>N((()=>{let e=E(()=>{let e=j(),o=ce().content.cloneNode(!0),l=o.firstChild,f=l.childNodes[1].childNodes[0],p=l.childNodes[1].childNodes[1],v=l.childNodes[0].childNodes[1],y=v.parentNode,x=l.childNodes[2],S=x.parentNode;e.appendChild(o),M(f,`role`,`tab`),L(()=>{s(f,`tab ${n.value===`preview`?`tab-active`:``}`)});let D=e=>{let t=()=>{n.value=`preview`};typeof t==`function`&&t(e)};f.addEventListener(`click`,D),c(()=>f.removeEventListener(`click`,D)),M(p,`role`,`tab`),L(()=>{s(p,`tab ${n.value===`code`?`tab-active`:``}`)});let O=e=>{let t=()=>{n.value=`code`};typeof t==`function`&&t(e)};return p.addEventListener(`click`,O),c(()=>p.removeEventListener(`click`,O)),m(y,v,()=>{let e=n.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=T(`div`,e);t.className=`stats shadow bg-base-100`;let n=T(`div`,t);C(t,n),n.className=`stat py-3`;let r=T(`div`,n);C(n,r),r.className=`stat-title`,C(r,w(`active`));let i=T(`div`,n);C(n,i),i.className=`stat-value text-lg`;let a=w(``);return C(i,a),b(a,()=>u.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=w(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=j();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),L(()=>{let e=n.value===`code`?i(Object.assign(e=>{let t=T(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=T(`div`,t);return C(t,n),n.className=`card-body p-0`,a(n,B,()=>({className:`h-full`,lang:`tsx`,code:H,title:`完整可复制示例`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):E(()=>{let e=j(),n=P(`div`,e);g(e,n),s(n,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let a=P(`nav`,n);g(n,a),s(a,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let o=P(`div`,a);g(a,o),s(o,`space-y-2`);let c=te(`rue:list:end`);C(o,c);let l=[];L(()=>{l=t(o,c,l,le||[],(e,t)=>e.id,(e,t)=>{let n=h(e),a=h(t);return d((e,t,a)=>R(e,a,()=>i(Object.assign(e=>{let t=T(`button`,e);t.setAttribute(`type`,`button`);let i;L(()=>{let e=`btn w-full justify-between ${u.value===n.get().id?`btn-primary`:`btn-ghost`}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>{u.value=n.get().id};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=T(`span`,t);C(t,o);let s=w(``);C(o,s),b(s,()=>n.get().title);let c=T(`span`,t);C(t,c),c.className=`badge badge-sm`;let l=w(``);return C(c,l),b(l,()=>n.get().badge),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})});let f=P(`div`,n);g(n,f),s(f,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let p=F(`rue:slot:anchor`);return g(f,p),L(()=>{let e=A();k(()=>_(e,f,p))}),e},!0);k(()=>_(e,S,x))}),e});return y(V,()=>({children:e}))})(),e=>z(()=>{})))};export{Se as default};
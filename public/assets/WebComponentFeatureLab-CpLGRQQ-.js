import{$t as e,Jt as t,L as n,Q as r,St as i,Wt as a,Z as o,dt as s,et as c,f as l,ht as u,in as d,it as f,l as p,lt as m,nt as h,o as g,rt as _,t as v,tt as y,u as b,vt as x,zt as S}from"./vapor-runtime-DsQWl-IB.js";import{a as C,n as w}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as T,o as E}from"./persistentSidebarPlayground-6jqnvaEa.js";import{n as D,r as O,t as k}from"./custom-elements-CQv15y7e.js";import{t as A}from"./Code-4SUSUwRg.js";import{r as j}from"./SidebarPlaygroundExample-BEWYUWOl.js";var M=`import {
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
  const channel = useContext(LAB_CONTEXT)
  const count = Number(props.count ?? 0)

  return (
    <section className="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
      <p className="font-mono text-sm" data-testid="lab-context-value">
        {channel}
      </p>
      <div className="mt-4">
        <Slot source={props} name="badge" props={{ channel, count }}>
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
`,N=b(`lab:fallback`),P={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},F=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],I=[`
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
  `],L=[`
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
  `],R=t=>{let{host:n,shadowRoot:a,title:o,count:l}=C(`useSetup:0:0`,()=>d(()=>({host:D(),shadowRoot:O(),title:C(`computed:1:0`,()=>i(()=>String(t.title??`Shadow probe`))),count:C(`computed:1:1`,()=>i(()=>Number(t.count??0)))})));return p(t=>{let i=h(`section`,t);s(i,`shadowBox`),m(i,`data-testid`,`lab-shadow-box`);let u=h(`div`,i);r(i,u);let d=h(`p`,u);r(u,d),s(d,`shadowTitle`);let p=c(`rue:slot:anchor`);r(d,p),S(()=>{let t=o.get();e(()=>g(t,d,p))});let v=h(`p`,u);r(u,v),s(v,`shadowMeta`),m(v,`data-testid`,`lab-shadow-mode`);let y=f(v);r(v,y),S(()=>{x(y,n?.tagName.toLowerCase()??`no-host`)}),r(v,_(` / `));let b=f(v);r(v,b),S(()=>{x(b,a?`shadow`:`light`)});let C=h(`div`,i);r(i,C),s(C,`shadowCount`),m(C,`data-testid`,`lab-shadow-count`),r(C,_(`count `));let w=c(`rue:slot:anchor`);return r(C,w),S(()=>{let t=l.get();e(()=>g(t,C,w))}),i})},z=t=>{let{title:n,count:a}=C(`useSetup:0:0:dup1`,()=>d(()=>({title:C(`computed:1:2`,()=>i(()=>String(t.title??`Light probe`))),count:C(`computed:1:3`,()=>i(()=>Number(t.count??0)))})));return p(t=>{let i=h(`section`,t);s(i,`lightBox`),m(i,`data-testid`,`lab-light-box`);let o=h(`div`,i);r(i,o);let l=h(`p`,o);r(o,l),s(l,`lightTitle`);let u=c(`rue:slot:anchor`);r(l,u),S(()=>{let t=n.get();e(()=>g(t,l,u))});let d=h(`p`,o);r(o,d),s(d,`lightMeta`),r(d,_(`shadowRoot disabled`));let f=h(`div`,i);r(i,f),s(f,`lightCount`),m(f,`data-testid`,`lab-light-count`);let p=c(`rue:slot:anchor`);return r(f,p),S(()=>{let t=a.get();e(()=>g(t,f,p))}),i})},B=()=>p(e=>{let t=h(`section`,e);s(t,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let n=h(`header`,t);r(t,n),s(n,`border-b border-base-300 pb-3`);let i=h(`slot`,n);r(n,i),m(i,`name`,`header`);let a=h(`main`,t);return r(t,a),s(a,`pt-4 text-sm text-base-content/75`),r(a,h(`slot`,a)),t}),V=e=>{let{emit:t,count:a}=C(`useSetup:0:0:dup2`,()=>d(()=>({emit:C(`computed:1:4`,()=>i(()=>n(e))),count:C(`computed:1:5`,()=>i(()=>Number(e.count??0)))})));return p(e=>{let n=h(`button`,e);return m(n,`type`,`button`),s(n,`btn btn-primary`),m(n,`data-testid`,`lab-event-button`),o(n,`click`,()=>{t.get()(`confirm`,{count:a.get(),source:`custom-element`})}),r(n,_(`emit confirm`)),n})},H=t=>{let{channel:n,count:a}=C(`useSetup:0:0:dup3`,()=>d(()=>({channel:l(N),count:C(`computed:1:6`,()=>i(()=>Number(t.count??0)))})));return p(i=>{let o=h(`section`,i);s(o,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let l=h(`p`,o);r(o,l),s(l,`font-mono text-sm`),m(l,`data-testid`,`lab-context-value`);let u=c(`rue:slot:anchor`);r(l,u),S(()=>{let t=n;e(()=>g(t,l,u))});let d=h(`div`,o);r(o,d),s(d,`mt-4`);let f=c(`rue:component:anchor`);r(d,f);let b=p(()=>{let e=y(),t=h(`span`,e);return r(e,t),s(t,`badge badge-outline`),m(t,`data-testid`,`lab-scoped-fallback`),r(t,_(`fallback badge`)),e});return S(()=>{let r=v(E,{source:t,name:`badge`,props:{channel:n,count:a.get()},children:b});e(()=>g(r,d,f))}),o})},U=k(R,{styles:I,nonce:`rue-lab-nonce`}),W=k(z,{shadowRoot:!1,styles:L}),G=k(B),K=k(V),q=k(H,{shadowRoot:!1}),J=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};J(P.shadow,U),J(P.light,W),J(P.slots,G),J(P.events,K),J(P.context,q);var Y=e=>{try{return JSON.stringify(e)}catch{return String(e)}},X=()=>{let{activeTab:n,active:i,title:l,count:b,channel:E,eventLog:D,pushEvent:O,renderPanel:k}=C(`useSetup:0:0:dup4`,()=>d(()=>{let n=C(`ref:1:7`,()=>t(`preview`)),i=C(`ref:1:8`,()=>t(`shadow`)),l=C(`ref:1:9`,()=>t(`Rue CE probe`)),d=C(`ref:1:10`,()=>t(3)),b=C(`ref:1:11`,()=>t(`outer:lab`)),w=C(`ref:1:12`,()=>t([])),E=e=>{let t=e;w.value=[{type:e.type,detail:Y(t.detail)},...w.value].slice(0,3)};return{activeTab:n,active:i,title:l,count:d,channel:b,eventLog:w,pushEvent:E,renderPanel:()=>i.value===`shadow`?p(e=>{let t=h(`section`,e);m(t,`data-testid`,`lab-panel-shadow`),s(t,`space-y-4`);let n=h(`div`,t);r(t,n),s(n,`flex flex-wrap gap-2`);let i=h(`button`,n);r(n,i),s(i,`btn btn-sm`),o(i,`click`,()=>{d.value+=1}),r(i,_(`count +1`));let c=h(`button`,n);r(n,c),s(c,`btn btn-sm`),o(c,`click`,()=>{l.value=l.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`}),r(c,_(`title`));let f=h(`rue-lab-shadow-probe`,t);return u(f,`__rue_context_parent_instance__`,a()),r(t,f),S(()=>{u(f,`props`,{title:l.value,count:d.value})}),t}):i.value===`light`?p(e=>{let t=h(`section`,e);m(t,`data-testid`,`lab-panel-light`),s(t,`space-y-4`);let n=h(`div`,t);r(t,n),s(n,`flex flex-wrap gap-2`);let i=h(`button`,n);r(n,i),s(i,`btn btn-sm`),o(i,`click`,()=>{d.value+=2}),r(i,_(`count +2`));let c=h(`rue-lab-light-probe`,t);return u(c,`__rue_context_parent_instance__`,a()),r(t,c),S(()=>{u(c,`props`,{title:l.value,count:d.value})}),t}):i.value===`slots`?p(e=>{let t=h(`section`,e);m(t,`data-testid`,`lab-panel-slots`),s(t,`space-y-4`);let n=h(`rue-lab-slot-probe`,t);u(n,`__rue_context_parent_instance__`,a()),r(t,n);let i=h(`strong`,n);r(n,i),m(i,`slot`,`header`),m(i,`data-testid`,`lab-native-header`),r(i,_(`Native slot header`));let o=h(`span`,n);return r(n,o),m(o,`data-testid`,`lab-native-body`),r(o,_(`Native default body`)),t}):i.value===`events`?p(e=>{let t=h(`section`,e);m(t,`data-testid`,`lab-panel-events`),s(t,`space-y-4`);let n=h(`rue-lab-event-probe`,t);u(n,`__rue_context_parent_instance__`,a()),r(t,n),S(()=>{u(n,`props`,{count:d.value})}),o(n,`confirm`,E);let i=h(`div`,t);r(t,i),s(i,`rounded-box border border-base-300 bg-base-100 p-4`);let c=h(`div`,i);r(i,c),s(c,`font-mono text-sm`),m(c,`data-testid`,`lab-event-log`);let l=f(c);r(c,l),S(()=>{x(l,w.value[0]?.type??`waiting`)}),r(c,_(` `));let p=f(c);return r(c,p),S(()=>{x(p,w.value[0]?` ${w.value[0].detail}`:``)}),t}):p(t=>{let n=h(`section`,t);m(n,`data-testid`,`lab-panel-context`),s(n,`space-y-4`);let i=h(`div`,n);r(n,i),s(i,`flex flex-wrap gap-2`);let l=h(`button`,i);r(i,l),s(l,`btn btn-sm`),o(l,`click`,()=>{b.value=b.value===`outer:lab`?`outer:updated`:`outer:lab`}),r(l,_(`channel`));let f=c(`rue:component:anchor`);r(n,f);let x=p(()=>{let e=y(),t=h(`rue-lab-context-probe`,e);return u(t,`__rue_context_parent_instance__`,a()),r(e,t),S(()=>{u(t,`props`,{count:d.value})}),u(t,`__rue_slots`,{badge:({channel:e,count:t})=>T(`span`,{className:`badge badge-primary`,"data-testid":`lab-scoped-badge`,children:[e,` / `,t]})}),e});return S(()=>{let t=v(N.Provider,{value:b.value,children:x});e(()=>g(t,n,f))}),n})}}));return p(t=>{let a=y(),l=c(`rue:component:anchor`);return r(a,l),g(v(j,{children:p(()=>{let t=y(),a=h(`section`,t);r(t,a),s(a,`space-y-6`);let l=h(`div`,a);r(a,l),s(l,`flex flex-wrap items-end justify-between gap-4`);let u=h(`div`,l);r(l,u);let d=h(`p`,u);r(u,d),s(d,`text-sm uppercase tracking-[0.22em] text-base-content/50`),r(d,_(`Custom Elements Lab`));let b=h(`h1`,u);r(u,b),s(b,`mt-2 text-4xl font-semibold`),r(b,_(`Web Components 分项测试`));let C=c(`rue:slot:anchor`);r(l,C),S(()=>{let t=n.value===`preview`?p(()=>{let e=y(),t=h(`div`,e);r(e,t),s(t,`stats shadow bg-base-100`);let n=h(`div`,t);r(t,n),s(n,`stat py-3`);let a=h(`div`,n);r(n,a),s(a,`stat-title`),r(a,_(`active`));let o=h(`div`,n);r(n,o),s(o,`stat-value text-lg`);let c=f(o);return r(o,c),S(()=>{x(c,i.value)}),e}):``;e(()=>g(t,l,C))});let T=h(`div`,a);r(a,T),m(T,`role`,`tablist`),s(T,`tabs tabs-box`);let E=h(`button`,T);r(T,E),m(E,`role`,`tab`),S(()=>{s(E,`tab ${n.value===`preview`?`tab-active`:``}`)}),o(E,`click`,()=>{n.value=`preview`}),r(E,_(`效果`));let D=h(`button`,T);r(T,D),m(D,`role`,`tab`),S(()=>{s(D,`tab ${n.value===`code`?`tab-active`:``}`)}),o(D,`click`,()=>{n.value=`code`}),r(D,_(`代码`));let O=c(`rue:slot:anchor`);return r(a,O),S(()=>{let t=n.value===`code`?p(()=>{let t=y(),n=h(`div`,t);r(t,n),s(n,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,n);r(n,i),s(i,`card-body p-0`);let a=c(`rue:component:anchor`);return r(i,a),S(()=>{let t=v(A,{className:`h-full`,lang:`tsx`,code:M,title:`完整可复制示例`});e(()=>g(t,i,a))}),t}):p(()=>{let t=y(),n=h(`div`,t);r(t,n),s(n,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let a=h(`nav`,n);r(n,a),s(a,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let l=h(`div`,a);r(a,l),s(l,`space-y-2`);let u=c(`rue:list:start`),d=c(`rue:list:end`);r(l,u),r(l,d);let f=new Map;S(()=>{f=w({items:F||[],getKey:(e,t)=>e.id,elements:f,parent:l,before:d,singleRoot:!0,trackIndex:!1,start:u,renderItem:(t,n,a,l,u)=>{g(p(()=>{let n=y(),a=h(`button`,n);r(n,a),S(()=>{m(a,`key`,String(t.id))}),m(a,`type`,`button`),S(()=>{s(a,`btn w-full justify-between ${i.value===t.id?`btn-primary`:`btn-ghost`}`)}),o(a,`click`,()=>{i.value=t.id});let l=h(`span`,a);r(a,l);let u=c(`rue:slot:anchor`);r(l,u),S(()=>{let n=t.title;e(()=>g(n,l,u))});let d=h(`span`,a);r(a,d),s(d,`badge badge-sm`);let f=c(`rue:slot:anchor`);return r(d,f),S(()=>{let n=t.badge;e(()=>g(n,d,f))}),n}),n,a)}})});let _=h(`div`,n);r(n,_),s(_,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let v=c(`rue:slot:anchor`);return r(_,v),S(()=>{let t=k();e(()=>g(t,_,v))}),t});e(()=>g(t,a,O))}),t})}),a,l),a})};export{X as default};
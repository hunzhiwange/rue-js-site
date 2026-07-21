import{A as e,Cn as t,Ct as n,Lt as r,Mt as i,Tt as a,a as o,dt as s,ft as c,ht as l,kt as u,ln as d,mt as f,n as p,ot as m,pn as h,pt as g,st as _,tn as v,vn as y}from"./context-8lXZvIn-.js";import{l as b,o as x,t as S}from"./vapor-runtime-ygJWVcNn.js";import{a as C,n as w}from"./vapor-helpers-vapor-CMwHgsXf.js";import{i as T}from"./persistentSidebarPlayground-B3vwD8_y.js";import{n as E,r as D,t as O}from"./custom-elements-Cj-OUraQ.js";import{t as k}from"./Code-DhoWkRkB.js";import{n as A}from"./src-CCTNpCXV.js";import{r as j}from"./SidebarPlaygroundExample-B78jsvoF.js";var M=`import {
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
`,N=p(`lab:fallback`),P={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},F=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],I=[`
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
  `],R=e=>{let{host:o,shadowRoot:c,title:u,count:d}=C(`useSetup:0:0`,()=>t(()=>({host:E(),shadowRoot:D(),title:C(`computed:1:0`,()=>r(()=>String(e.title??`Shadow probe`))),count:C(`computed:1:1`,()=>r(()=>Number(e.count??0)))})));return b(e=>{let t=g(`section`,e);a(t,`shadowBox`),n(t,`data-testid`,`lab-shadow-box`);let r=g(`div`,t);_(t,r);let p=g(`p`,r);_(r,p),a(p,`shadowTitle`);let m=s(`rue:slot:anchor`);_(p,m),v(()=>{let e=u.get();y(()=>x(e,p,m))});let h=g(`p`,r);_(r,h),a(h,`shadowMeta`),n(h,`data-testid`,`lab-shadow-mode`);let b=l(h);_(h,b),v(()=>{i(b,o?.tagName.toLowerCase()??`no-host`)}),_(h,f(` / `));let S=l(h);_(h,S),v(()=>{i(S,c?`shadow`:`light`)});let C=g(`div`,t);_(t,C),a(C,`shadowCount`),n(C,`data-testid`,`lab-shadow-count`),_(C,f(`count `));let w=s(`rue:slot:anchor`);return _(C,w),v(()=>{let e=d.get();y(()=>x(e,C,w))}),t})},z=e=>{let{title:i,count:o}=C(`useSetup:0:0:dup1`,()=>t(()=>({title:C(`computed:1:2`,()=>r(()=>String(e.title??`Light probe`))),count:C(`computed:1:3`,()=>r(()=>Number(e.count??0)))})));return b(e=>{let t=g(`section`,e);a(t,`lightBox`),n(t,`data-testid`,`lab-light-box`);let r=g(`div`,t);_(t,r);let c=g(`p`,r);_(r,c),a(c,`lightTitle`);let l=s(`rue:slot:anchor`);_(c,l),v(()=>{let e=i.get();y(()=>x(e,c,l))});let u=g(`p`,r);_(r,u),a(u,`lightMeta`),_(u,f(`shadowRoot disabled`));let d=g(`div`,t);_(t,d),a(d,`lightCount`),n(d,`data-testid`,`lab-light-count`);let p=s(`rue:slot:anchor`);return _(d,p),v(()=>{let e=o.get();y(()=>x(e,d,p))}),t})},B=()=>b(e=>{let t=g(`section`,e);a(t,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let r=g(`header`,t);_(t,r),a(r,`border-b border-base-300 pb-3`);let i=g(`slot`,r);_(r,i),n(i,`name`,`header`);let o=g(`main`,t);return _(t,o),a(o,`pt-4 text-sm text-base-content/75`),_(o,g(`slot`,o)),t}),V=i=>{let{emit:o,count:s}=C(`useSetup:0:0:dup2`,()=>t(()=>({emit:C(`computed:1:4`,()=>r(()=>e(i))),count:C(`computed:1:5`,()=>r(()=>Number(i.count??0)))})));return b(e=>{let t=g(`button`,e);return n(t,`type`,`button`),a(t,`btn btn-primary`),n(t,`data-testid`,`lab-event-button`),m(t,`click`,()=>{o.get()(`confirm`,{count:s.get(),source:`custom-element`})}),_(t,f(`emit confirm`)),t})},H=e=>{let{channel:i,count:l}=C(`useSetup:0:0:dup3`,()=>t(()=>({channel:o(N),count:C(`computed:1:6`,()=>r(()=>Number(e.count??0)))})));return b(t=>{let r=g(`section`,t);a(r,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let o=g(`p`,r);_(r,o),a(o,`font-mono text-sm`),n(o,`data-testid`,`lab-context-value`);let u=s(`rue:slot:anchor`);_(o,u),v(()=>{let e=i;y(()=>x(e,o,u))});let d=g(`div`,r);_(r,d),a(d,`mt-4`);let p=s(`rue:component:anchor`);_(d,p);let m=b(()=>{let e=c(),t=g(`span`,e);return _(e,t),a(t,`badge badge-outline`),n(t,`data-testid`,`lab-scoped-fallback`),_(t,f(`fallback badge`)),e});return v(()=>{let t=S(T,{source:e,name:`badge`,props:{channel:i,count:l.get()},children:m});y(()=>x(t,d,p))}),r})},U=O(R,{styles:I,nonce:`rue-lab-nonce`}),W=O(z,{shadowRoot:!1,styles:L}),G=O(B),K=O(V),q=O(H,{shadowRoot:!1}),J=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};J(P.shadow,U),J(P.light,W),J(P.slots,G),J(P.events,K),J(P.context,q);var Y=e=>{try{return JSON.stringify(e)}catch{return String(e)}},X=()=>{let{activeTab:e,active:r,title:o,count:p,channel:T,eventLog:E,pushEvent:D,renderPanel:O}=C(`useSetup:0:0:dup4`,()=>t(()=>{let e=C(`ref:1:7`,()=>h(`preview`)),t=C(`ref:1:8`,()=>h(`shadow`)),r=C(`ref:1:9`,()=>h(`Rue CE probe`)),o=C(`ref:1:10`,()=>h(3)),p=C(`ref:1:11`,()=>h(`outer:lab`)),w=C(`ref:1:12`,()=>h([])),T=e=>{let t=e;w.value=[{type:e.type,detail:Y(t.detail)},...w.value].slice(0,3)};return{activeTab:e,active:t,title:r,count:o,channel:p,eventLog:w,pushEvent:T,renderPanel:()=>t.value===`shadow`?b(e=>{let t=g(`section`,e);n(t,`data-testid`,`lab-panel-shadow`),a(t,`space-y-4`);let i=g(`div`,t);_(t,i),a(i,`flex flex-wrap gap-2`);let s=g(`button`,i);_(i,s),a(s,`btn btn-sm`),m(s,`click`,()=>{o.value+=1}),_(s,f(`count +1`));let c=g(`button`,i);_(i,c),a(c,`btn btn-sm`),m(c,`click`,()=>{r.value=r.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`}),_(c,f(`title`));let l=g(`rue-lab-shadow-probe`,t);return u(l,`__rue_context_parent_instance__`,d()),_(t,l),v(()=>{u(l,`props`,{title:r.value,count:o.value})}),t}):t.value===`light`?b(e=>{let t=g(`section`,e);n(t,`data-testid`,`lab-panel-light`),a(t,`space-y-4`);let i=g(`div`,t);_(t,i),a(i,`flex flex-wrap gap-2`);let s=g(`button`,i);_(i,s),a(s,`btn btn-sm`),m(s,`click`,()=>{o.value+=2}),_(s,f(`count +2`));let c=g(`rue-lab-light-probe`,t);return u(c,`__rue_context_parent_instance__`,d()),_(t,c),v(()=>{u(c,`props`,{title:r.value,count:o.value})}),t}):t.value===`slots`?b(e=>{let t=g(`section`,e);n(t,`data-testid`,`lab-panel-slots`),a(t,`space-y-4`);let r=g(`rue-lab-slot-probe`,t);u(r,`__rue_context_parent_instance__`,d()),_(t,r);let i=g(`strong`,r);_(r,i),n(i,`slot`,`header`),n(i,`data-testid`,`lab-native-header`),_(i,f(`Native slot header`));let o=g(`span`,r);return _(r,o),n(o,`data-testid`,`lab-native-body`),_(o,f(`Native default body`)),t}):t.value===`events`?b(e=>{let t=g(`section`,e);n(t,`data-testid`,`lab-panel-events`),a(t,`space-y-4`);let r=g(`rue-lab-event-probe`,t);u(r,`__rue_context_parent_instance__`,d()),_(t,r),v(()=>{u(r,`props`,{count:o.value})}),m(r,`confirm`,T);let s=g(`div`,t);_(t,s),a(s,`rounded-box border border-base-300 bg-base-100 p-4`);let c=g(`div`,s);_(s,c),a(c,`font-mono text-sm`),n(c,`data-testid`,`lab-event-log`);let p=l(c);_(c,p),v(()=>{i(p,w.value[0]?.type??`waiting`)}),_(c,f(` `));let h=l(c);return _(c,h),v(()=>{i(h,w.value[0]?` ${w.value[0].detail}`:``)}),t}):b(e=>{let t=g(`section`,e);n(t,`data-testid`,`lab-panel-context`),a(t,`space-y-4`);let r=g(`div`,t);_(t,r),a(r,`flex flex-wrap gap-2`);let i=g(`button`,r);_(r,i),a(i,`btn btn-sm`),m(i,`click`,()=>{p.value=p.value===`outer:lab`?`outer:updated`:`outer:lab`}),_(i,f(`channel`));let l=s(`rue:component:anchor`);_(t,l);let h=b(()=>{let e=c(),t=g(`rue-lab-context-probe`,e);return u(t,`__rue_context_parent_instance__`,d()),_(e,t),v(()=>{u(t,`props`,{count:o.value})}),u(t,`__rue_slots`,{badge:({channel:e,count:t})=>A(`span`,{className:`badge badge-primary`,"data-testid":`lab-scoped-badge`,children:[e,` / `,t]})}),e});return v(()=>{let e=S(N.Provider,{value:p.value,children:h});y(()=>x(e,t,l))}),t})}}));return b(t=>{let o=c(),u=s(`rue:component:anchor`);return _(o,u),x(S(j,{children:b(()=>{let t=c(),o=g(`section`,t);_(t,o),a(o,`space-y-6`);let u=g(`div`,o);_(o,u),a(u,`flex flex-wrap items-end justify-between gap-4`);let d=g(`div`,u);_(u,d);let p=g(`p`,d);_(d,p),a(p,`text-sm uppercase tracking-[0.22em] text-base-content/50`),_(p,f(`Custom Elements Lab`));let h=g(`h1`,d);_(d,h),a(h,`mt-2 text-4xl font-semibold`),_(h,f(`Web Components 分项测试`));let C=s(`rue:slot:anchor`);_(u,C),v(()=>{let t=e.value===`preview`?b(()=>{let e=c(),t=g(`div`,e);_(e,t),a(t,`stats shadow bg-base-100`);let n=g(`div`,t);_(t,n),a(n,`stat py-3`);let o=g(`div`,n);_(n,o),a(o,`stat-title`),_(o,f(`active`));let s=g(`div`,n);_(n,s),a(s,`stat-value text-lg`);let u=l(s);return _(s,u),v(()=>{i(u,r.value)}),e}):``;y(()=>x(t,u,C))});let T=g(`div`,o);_(o,T),n(T,`role`,`tablist`),a(T,`tabs tabs-box`);let E=g(`button`,T);_(T,E),n(E,`role`,`tab`),v(()=>{a(E,`tab ${e.value===`preview`?`tab-active`:``}`)}),m(E,`click`,()=>{e.value=`preview`}),_(E,f(`效果`));let D=g(`button`,T);_(T,D),n(D,`role`,`tab`),v(()=>{a(D,`tab ${e.value===`code`?`tab-active`:``}`)}),m(D,`click`,()=>{e.value=`code`}),_(D,f(`代码`));let A=s(`rue:slot:anchor`);return _(o,A),v(()=>{let t=e.value===`code`?b(()=>{let e=c(),t=g(`div`,e);_(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=g(`div`,t);_(t,n),a(n,`card-body p-0`);let r=s(`rue:component:anchor`);return _(n,r),v(()=>{let e=S(k,{className:`h-full`,lang:`tsx`,code:M,title:`完整可复制示例`});y(()=>x(e,n,r))}),e}):b(()=>{let e=c(),t=g(`div`,e);_(e,t),a(t,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let i=g(`nav`,t);_(t,i),a(i,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let o=g(`div`,i);_(i,o),a(o,`space-y-2`);let l=s(`rue:list:start`),u=s(`rue:list:end`);_(o,l),_(o,u);let d=new Map;v(()=>{d=w({items:F||[],getKey:(e,t)=>e.id,elements:d,parent:o,before:u,singleRoot:!0,trackIndex:!1,start:l,renderItem:(e,t,i,o,l)=>{x(b(()=>{let t=c(),i=g(`button`,t);_(t,i),v(()=>{n(i,`key`,String(e.id))}),n(i,`type`,`button`),v(()=>{a(i,`btn w-full justify-between ${r.value===e.id?`btn-primary`:`btn-ghost`}`)}),m(i,`click`,()=>{r.value=e.id});let o=g(`span`,i);_(i,o);let l=s(`rue:slot:anchor`);_(o,l),v(()=>{let t=e.title;y(()=>x(t,o,l))});let u=g(`span`,i);_(i,u),a(u,`badge badge-sm`);let d=s(`rue:slot:anchor`);return _(u,d),v(()=>{let t=e.badge;y(()=>x(t,u,d))}),t}),t,i)}})});let f=g(`div`,t);_(t,f),a(f,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let p=s(`rue:slot:anchor`);return _(f,p),v(()=>{let e=O();y(()=>x(e,f,p))}),e});y(()=>x(t,o,A))}),t})}),o,u),o})};export{X as default};
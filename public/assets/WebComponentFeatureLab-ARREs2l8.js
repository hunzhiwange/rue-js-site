import{Kt as e,L as t,Q as n,Vt as r,Xt as i,Z as a,_t as o,at as s,bt as c,dt as l,f as u,it as d,l as f,nt as p,o as m,on as h,pt as g,rt as _,t as v,tn as y,tt as b,u as x,wt as S}from"./vapor-runtime-x7F5M-49.js";import{a as C,n as w}from"./vapor-helpers-vapor-D1LP4JjK.js";import{i as T}from"./persistentSidebarPlayground-BeUAutTV.js";import{n as E,r as D,t as O}from"./custom-elements-DPWAZOXg.js";import{t as k}from"./Code-BoXKy3gJ.js";import{n as A}from"./src-Dlanwp1X.js";import{r as j}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var M=`import {
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
`,N=x(`lab:fallback`),P={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},F=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],I=[`
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
  `],R=e=>{let{host:t,shadowRoot:i,title:a,count:o}=C(`useSetup:0:0`,()=>h(()=>({host:E(),shadowRoot:D(),title:C(`computed:1:0`,()=>S(()=>String(e.title??`Shadow probe`))),count:C(`computed:1:1`,()=>S(()=>Number(e.count??0)))})));return f(e=>{let u=_(`section`,e);g(u,`shadowBox`),l(u,`data-testid`,`lab-shadow-box`);let f=_(`div`,u);n(u,f);let p=_(`p`,f);n(f,p),g(p,`shadowTitle`);let h=b(`rue:slot:anchor`);n(p,h),r(()=>{let e=a.get();y(()=>m(e,p,h))});let v=_(`p`,f);n(f,v),g(v,`shadowMeta`),l(v,`data-testid`,`lab-shadow-mode`);let x=s(v);n(v,x),r(()=>{c(x,t?.tagName.toLowerCase()??`no-host`)}),n(v,d(` / `));let S=s(v);n(v,S),r(()=>{c(S,i?`shadow`:`light`)});let C=_(`div`,u);n(u,C),g(C,`shadowCount`),l(C,`data-testid`,`lab-shadow-count`),n(C,d(`count `));let w=b(`rue:slot:anchor`);return n(C,w),r(()=>{let e=o.get();y(()=>m(e,C,w))}),u})},z=e=>{let{title:t,count:i}=C(`useSetup:0:0:dup1`,()=>h(()=>({title:C(`computed:1:2`,()=>S(()=>String(e.title??`Light probe`))),count:C(`computed:1:3`,()=>S(()=>Number(e.count??0)))})));return f(e=>{let a=_(`section`,e);g(a,`lightBox`),l(a,`data-testid`,`lab-light-box`);let o=_(`div`,a);n(a,o);let s=_(`p`,o);n(o,s),g(s,`lightTitle`);let c=b(`rue:slot:anchor`);n(s,c),r(()=>{let e=t.get();y(()=>m(e,s,c))});let u=_(`p`,o);n(o,u),g(u,`lightMeta`),n(u,d(`shadowRoot disabled`));let f=_(`div`,a);n(a,f),g(f,`lightCount`),l(f,`data-testid`,`lab-light-count`);let p=b(`rue:slot:anchor`);return n(f,p),r(()=>{let e=i.get();y(()=>m(e,f,p))}),a})},B=()=>f(e=>{let t=_(`section`,e);g(t,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let r=_(`header`,t);n(t,r),g(r,`border-b border-base-300 pb-3`);let i=_(`slot`,r);n(r,i),l(i,`name`,`header`);let a=_(`main`,t);return n(t,a),g(a,`pt-4 text-sm text-base-content/75`),n(a,_(`slot`,a)),t}),V=e=>{let{emit:r,count:i}=C(`useSetup:0:0:dup2`,()=>h(()=>({emit:C(`computed:1:4`,()=>S(()=>t(e))),count:C(`computed:1:5`,()=>S(()=>Number(e.count??0)))})));return f(e=>{let t=_(`button`,e);return l(t,`type`,`button`),g(t,`btn btn-primary`),l(t,`data-testid`,`lab-event-button`),a(t,`click`,()=>{r.get()(`confirm`,{count:i.get(),source:`custom-element`})}),n(t,d(`emit confirm`)),t})},H=e=>{let{channel:t,count:i}=C(`useSetup:0:0:dup3`,()=>h(()=>({channel:u(N),count:C(`computed:1:6`,()=>S(()=>Number(e.count??0)))})));return f(a=>{let o=_(`section`,a);g(o,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let s=_(`p`,o);n(o,s),g(s,`font-mono text-sm`),l(s,`data-testid`,`lab-context-value`);let c=b(`rue:slot:anchor`);n(s,c),r(()=>{let e=t;y(()=>m(e,s,c))});let u=_(`div`,o);n(o,u),g(u,`mt-4`);let h=b(`rue:component:anchor`);n(u,h);let x=f(()=>{let e=p(),t=_(`span`,e);return n(e,t),g(t,`badge badge-outline`),l(t,`data-testid`,`lab-scoped-fallback`),n(t,d(`fallback badge`)),e});return r(()=>{let n=v(T,{source:e,name:`badge`,props:{channel:t,count:i.get()},children:x});y(()=>m(n,u,h))}),o})},U=O(R,{styles:I,nonce:`rue-lab-nonce`}),W=O(z,{shadowRoot:!1,styles:L}),G=O(B),K=O(V),q=O(H,{shadowRoot:!1}),J=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};J(P.shadow,U),J(P.light,W),J(P.slots,G),J(P.events,K),J(P.context,q);var Y=e=>{try{return JSON.stringify(e)}catch{return String(e)}},X=()=>{let{activeTab:t,active:u,title:x,count:S,channel:T,eventLog:E,pushEvent:D,renderPanel:O}=C(`useSetup:0:0:dup4`,()=>h(()=>{let t=C(`ref:1:7`,()=>i(`preview`)),u=C(`ref:1:8`,()=>i(`shadow`)),h=C(`ref:1:9`,()=>i(`Rue CE probe`)),x=C(`ref:1:10`,()=>i(3)),S=C(`ref:1:11`,()=>i(`outer:lab`)),w=C(`ref:1:12`,()=>i([])),T=e=>{let t=e;w.value=[{type:e.type,detail:Y(t.detail)},...w.value].slice(0,3)};return{activeTab:t,active:u,title:h,count:x,channel:S,eventLog:w,pushEvent:T,renderPanel:()=>u.value===`shadow`?f(t=>{let i=_(`section`,t);l(i,`data-testid`,`lab-panel-shadow`),g(i,`space-y-4`);let s=_(`div`,i);n(i,s),g(s,`flex flex-wrap gap-2`);let c=_(`button`,s);n(s,c),g(c,`btn btn-sm`),a(c,`click`,()=>{x.value+=1}),n(c,d(`count +1`));let u=_(`button`,s);n(s,u),g(u,`btn btn-sm`),a(u,`click`,()=>{h.value=h.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`}),n(u,d(`title`));let f=_(`rue-lab-shadow-probe`,i);return o(f,`__rue_context_parent_instance__`,e()),n(i,f),r(()=>{o(f,`props`,{title:h.value,count:x.value})}),i}):u.value===`light`?f(t=>{let i=_(`section`,t);l(i,`data-testid`,`lab-panel-light`),g(i,`space-y-4`);let s=_(`div`,i);n(i,s),g(s,`flex flex-wrap gap-2`);let c=_(`button`,s);n(s,c),g(c,`btn btn-sm`),a(c,`click`,()=>{x.value+=2}),n(c,d(`count +2`));let u=_(`rue-lab-light-probe`,i);return o(u,`__rue_context_parent_instance__`,e()),n(i,u),r(()=>{o(u,`props`,{title:h.value,count:x.value})}),i}):u.value===`slots`?f(t=>{let r=_(`section`,t);l(r,`data-testid`,`lab-panel-slots`),g(r,`space-y-4`);let i=_(`rue-lab-slot-probe`,r);o(i,`__rue_context_parent_instance__`,e()),n(r,i);let a=_(`strong`,i);n(i,a),l(a,`slot`,`header`),l(a,`data-testid`,`lab-native-header`),n(a,d(`Native slot header`));let s=_(`span`,i);return n(i,s),l(s,`data-testid`,`lab-native-body`),n(s,d(`Native default body`)),r}):u.value===`events`?f(t=>{let i=_(`section`,t);l(i,`data-testid`,`lab-panel-events`),g(i,`space-y-4`);let u=_(`rue-lab-event-probe`,i);o(u,`__rue_context_parent_instance__`,e()),n(i,u),r(()=>{o(u,`props`,{count:x.value})}),a(u,`confirm`,T);let f=_(`div`,i);n(i,f),g(f,`rounded-box border border-base-300 bg-base-100 p-4`);let p=_(`div`,f);n(f,p),g(p,`font-mono text-sm`),l(p,`data-testid`,`lab-event-log`);let m=s(p);n(p,m),r(()=>{c(m,w.value[0]?.type??`waiting`)}),n(p,d(` `));let h=s(p);return n(p,h),r(()=>{c(h,w.value[0]?` ${w.value[0].detail}`:``)}),i}):f(t=>{let i=_(`section`,t);l(i,`data-testid`,`lab-panel-context`),g(i,`space-y-4`);let s=_(`div`,i);n(i,s),g(s,`flex flex-wrap gap-2`);let c=_(`button`,s);n(s,c),g(c,`btn btn-sm`),a(c,`click`,()=>{S.value=S.value===`outer:lab`?`outer:updated`:`outer:lab`}),n(c,d(`channel`));let u=b(`rue:component:anchor`);n(i,u);let h=f(()=>{let t=p(),i=_(`rue-lab-context-probe`,t);return o(i,`__rue_context_parent_instance__`,e()),n(t,i),r(()=>{o(i,`props`,{count:x.value})}),o(i,`__rue_slots`,{badge:({channel:e,count:t})=>A(`span`,{className:`badge badge-primary`,"data-testid":`lab-scoped-badge`,children:[e,` / `,t]})}),t});return r(()=>{let e=v(N.Provider,{value:S.value,children:h});y(()=>m(e,i,u))}),i})}}));return f(e=>{let i=p(),o=b(`rue:component:anchor`);return n(i,o),m(v(j,{children:f(()=>{let e=p(),i=_(`section`,e);n(e,i),g(i,`space-y-6`);let o=_(`div`,i);n(i,o),g(o,`flex flex-wrap items-end justify-between gap-4`);let h=_(`div`,o);n(o,h);let x=_(`p`,h);n(h,x),g(x,`text-sm uppercase tracking-[0.22em] text-base-content/50`),n(x,d(`Custom Elements Lab`));let S=_(`h1`,h);n(h,S),g(S,`mt-2 text-4xl font-semibold`),n(S,d(`Web Components 分项测试`));let C=b(`rue:slot:anchor`);n(o,C),r(()=>{let e=t.value===`preview`?f(()=>{let e=p(),t=_(`div`,e);n(e,t),g(t,`stats shadow bg-base-100`);let i=_(`div`,t);n(t,i),g(i,`stat py-3`);let a=_(`div`,i);n(i,a),g(a,`stat-title`),n(a,d(`active`));let o=_(`div`,i);n(i,o),g(o,`stat-value text-lg`);let l=s(o);return n(o,l),r(()=>{c(l,u.value)}),e}):``;y(()=>m(e,o,C))});let T=_(`div`,i);n(i,T),l(T,`role`,`tablist`),g(T,`tabs tabs-box`);let E=_(`button`,T);n(T,E),l(E,`role`,`tab`),r(()=>{g(E,`tab ${t.value===`preview`?`tab-active`:``}`)}),a(E,`click`,()=>{t.value=`preview`}),n(E,d(`效果`));let D=_(`button`,T);n(T,D),l(D,`role`,`tab`),r(()=>{g(D,`tab ${t.value===`code`?`tab-active`:``}`)}),a(D,`click`,()=>{t.value=`code`}),n(D,d(`代码`));let A=b(`rue:slot:anchor`);return n(i,A),r(()=>{let e=t.value===`code`?f(()=>{let e=p(),t=_(`div`,e);n(e,t),g(t,`card bg-base-100 shadow overflow-auto`);let i=_(`div`,t);n(t,i),g(i,`card-body p-0`);let a=b(`rue:component:anchor`);return n(i,a),r(()=>{let e=v(k,{className:`h-full`,lang:`tsx`,code:M,title:`完整可复制示例`});y(()=>m(e,i,a))}),e}):f(()=>{let e=p(),t=_(`div`,e);n(e,t),g(t,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let i=_(`nav`,t);n(t,i),g(i,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let o=_(`div`,i);n(i,o),g(o,`space-y-2`);let s=b(`rue:list:start`),c=b(`rue:list:end`);n(o,s),n(o,c);let d=new Map;r(()=>{d=w({items:F||[],getKey:(e,t)=>e.id,elements:d,parent:o,before:c,singleRoot:!0,trackIndex:!1,start:s,renderItem:(e,t,i,o,s)=>{m(f(()=>{let t=p(),i=_(`button`,t);n(t,i),r(()=>{l(i,`key`,String(e.id))}),l(i,`type`,`button`),r(()=>{g(i,`btn w-full justify-between ${u.value===e.id?`btn-primary`:`btn-ghost`}`)}),a(i,`click`,()=>{u.value=e.id});let o=_(`span`,i);n(i,o);let s=b(`rue:slot:anchor`);n(o,s),r(()=>{let t=e.title;y(()=>m(t,o,s))});let c=_(`span`,i);n(i,c),g(c,`badge badge-sm`);let d=b(`rue:slot:anchor`);return n(c,d),r(()=>{let t=e.badge;y(()=>m(t,c,d))}),t}),t,i)}})});let h=_(`div`,t);n(t,h),g(h,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let v=b(`rue:slot:anchor`);return n(h,v),r(()=>{let e=O();y(()=>m(e,h,v))}),e});y(()=>m(e,i,A))}),e})}),i,o),i})};export{X as default};
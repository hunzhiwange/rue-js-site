import{At as e,Bt as t,Dt as n,E as r,F as i,H as a,I as o,It as s,Jt as c,L as l,Lt as u,Rt as d,Tt as f,U as p,Ut as m,V as h,Vt as g,Wt as _,Y as v,_ as y,_t as b,an as x,en as S,f as C,fn as w,gn as T,gt as E,h as ee,hn as D,in as O,mn as k,p as te,pn as A,qt as ne,sn as j,st as M,tt as N,u as P,v as re,vt as F,y as ie,yn as I,yt as L,z as R,zt as z}from"./rue-runtime-Cv6BZekS.js";import{t as B}from"./Code-BzFVdc3U.js";import{r as V}from"./SidebarPlaygroundExample-rFyhXfC_.js";var H=`import {
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
`,U=I(`<span class="badge badge-primary" data-testid="lab-scoped-badge"><!--rue:text-hole:0--> / <!--rue:text-hole:1--></span>`),W=I(`<section class="shadowBox" data-testid="lab-shadow-box"><div><p class="shadowTitle">rue:direct-text</p><p class="shadowMeta" data-testid="lab-shadow-mode"><!--rue:text-hole:1--> / <!--rue:text-hole:2--></p></div><div class="shadowCount" data-testid="lab-shadow-count">count <!--rue:text-hole:3--></div></section>`),G=I(`<section class="lightBox" data-testid="lab-light-box"><div><p class="lightTitle">rue:direct-text</p><p class="lightMeta">shadowRoot disabled</p></div><div class="lightCount" data-testid="lab-light-count"><!--rue:text-hole:1--></div></section>`),K=I(`<button type="button" class="btn btn-primary" data-testid="lab-event-button">emit confirm</button>`),q=I(`<section class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><p class="font-mono text-sm" data-testid="lab-context-value"><!--rue:text-hole:0--></p><div class="mt-4"><!--rue:opaque-hole:1--></div></section>`),J=I(`<section data-testid="lab-panel-shadow" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +1</button><button class="btn btn-sm">title</button></div><!--rue:opaque-hole:0--></section>`),Y=I(`<section data-testid="lab-panel-light" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">count +2</button></div><!--rue:opaque-hole:0--></section>`),ae=I(`<section data-testid="lab-panel-slots" class="space-y-4"><!--rue:opaque-hole:0--></section>`),X=I(`<section data-testid="lab-panel-events" class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="font-mono text-sm" data-testid="lab-event-log"><!--rue:text-hole:1--><!--rue:text-hole:2--></div></div></section>`),oe=I(`<section data-testid="lab-panel-context" class="space-y-4"><div class="flex flex-wrap gap-2"><button class="btn btn-sm">channel</button></div><!--rue:opaque-hole:0--></section>`),se=I(`<section class="space-y-6"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm uppercase tracking-[0.22em] text-base-content/50">Custom Elements Lab</p><h1 class="mt-2 text-4xl font-semibold">Web Components 分项测试</h1></div><!--rue:text-hole:0--></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><!--rue:text-hole:1--></section>`),Z=s(`lab:fallback`),ce=(e,n,r)=>{let i=F(E(e,`children`)),a=F(E(e,`value`));return u(Z,()=>a.get()),p(_(e=>{let n=k(),r=A(`rue:compiled-slot`);w(n,r),t({parent:n,before:r},()=>i.get(),()=>({}));let a=T(``),o=T(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]}),e=>S(()=>{i.set(e.children),a.set(e.value)}),()=>b(e))},Q={shadow:`rue-lab-shadow-probe`,light:`rue-lab-light-probe`,slots:`rue-lab-slot-probe`,events:`rue-lab-event-probe`,context:`rue-lab-context-probe`},le=[{id:`shadow`,title:`Shadow Root`,badge:`styles`},{id:`light`,title:`Light DOM Props`,badge:`props`},{id:`slots`,title:`Native Slots`,badge:`slot`},{id:`events`,title:`Event Bridge`,badge:`emit`},{id:`context`,title:`Context + Scoped Slot`,badge:`context`}],ue=[`
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
  `],fe=(e,n,r)=>{let i=F(E(e,`count`)),a=F(E(e,`title`)),o=re(),s=ie(),c=N(()=>String(a.get()??`Shadow probe`));c.get();let l=N(()=>Number(i.get()??0));return l.get(),p(_(e=>{let n=k(),r=W().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0].childNodes[0].childNodes[0],u=a.parentNode,d=i.childNodes[0].childNodes[1].childNodes[0],f=d.parentNode,p=i.childNodes[0].childNodes[1].childNodes[2],h=p.parentNode,g=i.childNodes[1].childNodes[1],_=g.parentNode,v=A(`rue:text-hole:0`);u.replaceChild(v,a),n.appendChild(r),t({parent:u,before:v},()=>z(c.get()),()=>({})),t({parent:f,before:d},()=>z(o?.tagName.toLowerCase()??`no-host`),()=>({})),m(h,p,()=>s?{__rue_compiled_branch_key:!0,create:()=>L(e=>{let t=T(`shadow`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>L(e=>{let t=T(`light`);return[t,t]})}),t({parent:_,before:g},()=>z(l.get()),()=>({}));let y=T(``),b=T(``);return n.insertBefore(y,n.firstChild),n.appendChild(b),[n.firstChild,n.lastChild]}),e=>S(()=>{i.set(e.count),a.set(e.title)}),()=>b(e))},pe=(e,n,r)=>{let i=F(E(e,`count`)),a=F(E(e,`title`)),o=N(()=>String(a.get()??`Light probe`));o.get();let s=N(()=>Number(i.get()??0));return s.get(),p(_(()=>{let e=k(),n=G().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,c=r.childNodes[1].childNodes[0],l=c.parentNode,u=A(`rue:text-hole:0`);a.replaceChild(u,i),e.appendChild(n),t({parent:a,before:u},()=>z(o.get()),()=>({})),t({parent:l,before:c},()=>z(s.get()),()=>({}));let d=T(``),f=T(``);return e.insertBefore(d,e.firstChild),e.appendChild(f),[e.firstChild,e.lastChild]}),e=>S(()=>{i.set(e.count),a.set(e.title)}),()=>b(e))},me=(e,t,n)=>L(e=>{let t=D(`section`,e);t.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let n=D(`header`,t);w(t,n),n.setAttribute(`class`,`border-b border-base-300 pb-3`);let r=D(`slot`,n);w(n,r),r.setAttribute(`name`,`header`);let i=D(`main`,t);w(t,i),i.setAttribute(`class`,`pt-4 text-sm text-base-content/75`);let a=D(`slot`,i);return w(i,a),[t,t]}),he=(e,t,n)=>{let r=l(e),i=N(()=>Number(E(e,`count`)??0));return i.get(),_(e=>{let t=K().content.cloneNode(!0).firstChild,n=t;return n.setAttribute(`type`,`button`),n.setAttribute(`class`,`btn btn-primary`),n.setAttribute(`data-testid`,`lab-event-button`),j(P(e,n,`click`,()=>()=>{r(`confirm`,{count:i.get(),source:`custom-element`})})),[t,t]})},ge=(e,n,i)=>{let{channel:a,count:o,__rue_phase2_count:s}=c(`useSetup:0:0`,()=>{let t=N(()=>d(Z)),n=N(()=>Number(E(e,`count`)??0));return n.get(),{channel:t,count:n,__rue_phase2_count:n}});return _(n=>{let i=q().content.cloneNode(!0).firstChild,s=i.childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[1].childNodes[0],u=l.parentNode;t({parent:c,before:s},()=>z(a.value),()=>({}));let d=(t,n,i)=>{let s=()=>h(r,()=>({source:b(e),name:`badge`,props:{channel:a.value,count:o.get()},children:(e,t,n)=>{let r=()=>L(e=>{let t=k(),n=D(`span`,t);w(t,n),n.setAttribute(`class`,`badge badge-outline`),n.setAttribute(`data-testid`,`lab-scoped-fallback`),w(n,T(`fallback badge`));let r=T(``),i=T(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return t==null?s():g(t,i,s)},f=l.nextSibling;return u.removeChild(l),t({parent:u,before:f},()=>d,()=>({})),[i,i]})},_e=y(fe,{styles:ue,nonce:`rue-lab-nonce`}),ve=y(pe,{shadowRoot:!1,styles:de}),ye=y(me),be=y(he),xe=y(ge,{shadowRoot:!1}),$=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};$(Q.shadow,_e),$(Q.light,ve),$(Q.slots,ye),$(Q.events,be),$(Q.context,xe);var Se=e=>{try{return JSON.stringify(e)}catch{return String(e)}},Ce=(r,s,c)=>{let l=M(`preview`),u=M(`shadow`),d=M(`Rue CE probe`),p=M(3),h=M(`outer:lab`),y=M([]),b=e=>{let t=e;y.value=[{type:e.type,detail:Se(t.detail)},...y.value].slice(0,3)},S=(n,r,i)=>u.value===`shadow`?_(t=>{let n=J().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[0].childNodes[1],a=n.childNodes[1],o=a.parentNode;r.setAttribute(`class`,`btn btn-sm`),j(P(t,r,`click`,()=>()=>{p.value+=1})),i.setAttribute(`class`,`btn btn-sm`),j(P(t,i,`click`,()=>()=>{d.value=d.value===`Rue CE probe`?`Shadow updated`:`Rue CE probe`}));let s=D(`rue-lab-shadow-probe`,o);return e(s,`__rue_context_parent_instance__`,x()),w(o,s),o.insertBefore(s,a),O(()=>{e(s,`props`,{title:d.value,count:p.value})}),[n,n]}):u.value===`light`?_(t=>{let n=Y().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[1],a=i.parentNode;r.setAttribute(`class`,`btn btn-sm`),j(P(t,r,`click`,()=>()=>{p.value+=2}));let o=D(`rue-lab-light-probe`,a);return e(o,`__rue_context_parent_instance__`,x()),w(a,o),a.insertBefore(o,i),O(()=>{e(o,`props`,{title:d.value,count:p.value})}),[n,n]}):u.value===`slots`?L(t=>{let n=ae().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=D(`rue-lab-slot-probe`,i);e(a,`__rue_context_parent_instance__`,x()),w(i,a),i.insertBefore(a,r);let o=D(`strong`,a);w(a,o),f(o,`slot`,`header`),f(o,`data-testid`,`lab-native-header`),w(o,T(`Native slot header`));let s=D(`span`,a);return w(a,s),f(s,`data-testid`,`lab-native-body`),w(s,T(`Native default body`)),[n,n]}):u.value===`events`?_(n=>{let r=X().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0].childNodes[0],s=o.parentNode,c=r.childNodes[1].childNodes[0].childNodes[1],l=c.parentNode,u=D(`rue-lab-event-probe`,a);e(u,`__rue_context_parent_instance__`,x()),w(a,u),a.insertBefore(u,i),O(()=>{e(u,`props`,{count:p.value})});let d=e=>{let t=b;typeof t==`function`&&t(e)};return u.addEventListener(`confirm`,d),j(()=>u.removeEventListener(`confirm`,d)),t({parent:s,before:o},()=>z(y.value[0]?.type??`waiting`),()=>({})),t({parent:l,before:c},()=>y.value[0]?z(` ${y.value[0].detail}`):(e,t,n)=>{let r=()=>L(e=>{let t=T(``);return[t,t]});return e==null?r():g(e,n,r)},()=>({})),[r,r]}):_(n=>{let r=oe().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=r.childNodes[1],o=a.parentNode;i.setAttribute(`class`,`btn btn-sm`),j(P(n,i,`click`,()=>()=>{h.value=h.value===`outer:lab`?`outer:updated`:`outer:lab`}));let s=_(()=>{let n=k(),r=D(`rue-lab-context-probe`,n);e(r,`__rue_context_parent_instance__`,x()),w(n,r),O(()=>{e(r,`props`,{count:p.value})}),e(r,`__rue_slots`,{badge:({channel:e,count:n})=>_(r=>{let i=U().content.cloneNode(!0).firstChild,a=i.childNodes[0],o=a.parentNode,s=i.childNodes[2],c=s.parentNode;return t({parent:o,before:a},()=>z(e),()=>({})),t({parent:c,before:s},()=>z(n),()=>({})),[i,i]})});let i=T(``),a=T(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]});return t({parent:o,before:a},()=>(e,t,n)=>g(e,n,()=>R(ce,()=>({value:h.value,children:s}))),()=>({})),[r,r]});return v(()=>(()=>{let e=_(e=>{let r=k(),s=se().content.cloneNode(!0),c=s.firstChild,d=c.childNodes[1].childNodes[0],f=c.childNodes[1].childNodes[1],p=c.childNodes[0].childNodes[1],h=p.parentNode,v=c.childNodes[2],y=v.parentNode;r.appendChild(s),d.setAttribute(`role`,`tab`);let b;O(()=>{let e=`tab ${l.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,d.setAttribute(`class`,t))}),j(P(e,d,`click`,()=>()=>{l.value=`preview`})),f.setAttribute(`role`,`tab`);let x;O(()=>{let e=`tab ${l.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,f.setAttribute(`class`,t))}),j(P(e,f,`click`,()=>()=>{l.value=`code`})),m(h,p,()=>{let e=l.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>i(e=>{let t=D(`div`,e);t.setAttribute(`class`,`stats shadow bg-base-100`);let n=D(`div`,t);w(t,n),n.setAttribute(`class`,`stat py-3`);let r=D(`div`,n);w(n,r),r.setAttribute(`class`,`stat-title`),w(r,T(`active`));let i=D(`div`,n);w(n,i),i.setAttribute(`class`,`stat-value text-lg`);let a=T(``);return w(i,a),o(a,()=>u.value),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>L(t=>{let n=T(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>L(e=>{let t=k();return[t.firstChild,t.lastChild]})}}),t({parent:y,before:v},()=>l.value===`code`?(e,t,n)=>g(e,n,()=>_(e=>{let t=D(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=D(`div`,t);return w(t,n),n.setAttribute(`class`,`card-body p-0`),a(n,B,()=>({className:`h-full`,lang:`tsx`,code:H,title:`完整可复制示例`})),[t,t]})):(e,r,i)=>g(e,i,()=>_(e=>{let r=k(),i=D(`div`,r);w(r,i),n(i,`grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]`);let a=D(`nav`,i);w(i,a),n(a,`rounded-box border border-base-300 bg-base-100 p-3 shadow-sm`);let o=D(`div`,a);w(a,o),n(o,`space-y-2`);let s=A(`rue:list:end`);w(o,s);let c=[];ne(()=>{c=ee(o,s,c,le||[],(e,t)=>e.id,(e,n)=>{let r=F(e);return te((e,n,i)=>{let a=()=>_(e=>{let n=D(`button`,e);n.setAttribute(`type`,`button`);let i;O(()=>{let e=`btn w-full justify-between ${u.value===r.get().id?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),j(P(e,n,`click`,()=>()=>{u.value=r.get().id}));let a=D(`span`,n);w(n,a);let o=A(`rue:compiled-slot`);w(a,o),t({parent:a,before:o},()=>z(r.get().title),()=>({}));let s=D(`span`,n);w(n,s),s.setAttribute(`class`,`badge badge-sm`);let c=A(`rue:compiled-slot`);return w(s,c),t({parent:s,before:c},()=>z(r.get().badge),()=>({})),[n,n]});return e==null?a():g(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),j(()=>C(c));let l=D(`div`,i);w(i,l),n(l,`rounded-box border border-base-300 bg-base-200/40 p-4 md:p-6`);let d=A(`rue:slot:anchor`);w(l,d),t({parent:l,before:d},()=>(e,t,n)=>z(S())(e,t,n),()=>({}));let f=T(``),p=T(``);return r.insertBefore(f,r.firstChild),r.appendChild(p),[r.firstChild,r.lastChild]})),()=>({}));let E=T(``),M=T(``);return r.insertBefore(E,r.firstChild),r.appendChild(M),[r.firstChild,r.lastChild]});return R(V,()=>({children:e}))})())};export{Ce as default};
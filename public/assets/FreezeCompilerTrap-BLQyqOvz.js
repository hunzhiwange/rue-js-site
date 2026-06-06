import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,dt as u,kt as d,l as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-ACs_OvwU.js";import{a as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as y}from"./Code-CliOXHNE.js";import{t as b}from"./SidebarPlaygroundExample-DXnPmR3z.js";var x=`import { type FC, ref } from '@rue-js/rue'
import freezeCompilerTrapSource from './FreezeCompilerTrap.tsx?raw'
import SidebarPlayground from '../site/SidebarPlaygroundExample'
import Code from '../site/components/Code'

type FreezeProbeProps = {
  as?: any
  title?: any
  description?: any
  props?: Record<string, any>
  className?: string
  style?: Record<string, any>
  children?: any
  onClick?: (event: MouseEvent) => void
  [key: string]: any
}

const StableCard: FC<{ title: string; description: string }> = props => {
  return (
    <article className="card border border-success/20 bg-base-100 shadow-sm">
      <div className="card-body gap-3">
        <div className="badge badge-success badge-outline">safe baseline</div>
        <h2 className="card-title text-lg">{props.title}</h2>
        <p className="text-sm leading-7 text-base-content/72">{props.description}</p>
      </div>
    </article>
  )
}

// 这个组件故意保留了旧 Notification 命中的坏形状：
// 先从 props/rest 派生一个对象，再 delete/回写字段。
// 在 app/Vite 的 Vapor transform 路径里，它会被改写成 computed().get() 再突变。
const FreezeProneCard: FC<FreezeProbeProps> = ({
  as = 'article',
  title = '旧 Notification 坏路径',
  description = '如果一挂载就卡住或直接变成浏览器无响应，说明命中的还是同一类编译坏路径。',
  props,
  className,
  style,
  children,
  onClick,
  ...rest
}) => {
  const Component = as as any
  const componentProps: Record<string, any> = { ...props, ...rest }
  const userOnClick = componentProps.onClick

  if ('onClick' in componentProps) delete componentProps.onClick

  componentProps.role = componentProps.role ?? 'status'
  componentProps['data-freeze-probe'] = componentProps['data-freeze-probe'] ?? 'true'

  return (
    <Component
      {...componentProps}
      className={\`card border border-error/30 bg-base-100 shadow-sm \${className ?? ''}\`.trim()}
      style={style}
      onClick={(event: MouseEvent) => {
        if (typeof userOnClick === 'function') userOnClick(event)
        if (typeof onClick === 'function') onClick(event)
      }}
    >
      <div className="card-body gap-3">
        <div className="badge badge-error badge-outline">freeze probe</div>
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm leading-7 text-base-content/72">{description}</p>
        {children}
      </div>
    </Component>
  )
}

const FreezeCompilerTrap: FC = () => {
  const activeTab = ref<'preview' | 'code'>('preview')
  const mountProbe = ref(false)
  const mountAttempts = ref(0)

  return (
    <SidebarPlayground>
      <div className="space-y-4">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">卡死复现（编译器坏路径）</h1>
          <p className="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">
            这个 demo 不是在复现 Notification
            的整页壳，而是把当时真正导致卡死的那类源码形状单独抽出来。 重点是：组件内部先从 props 和
            rest 派生一个对象，再 delete 与回写字段。 如果当前编译器仍会把它改成 computed().get()
            再突变，那么挂载时就可能直接卡住。
          </p>
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

        {activeTab.value === 'preview' && (
          <div className="grid gap-6 items-start">
            <div className="alert alert-warning shadow-sm">
              <div className="space-y-2 text-sm leading-7">
                <div className="font-semibold">使用方式</div>
                <div>1. 页面先只渲染一个安全对照组件，不会卡。</div>
                <div>
                  2. 点击下面的“挂载可疑组件”后，如果标签页开始无响应，或者直接抛出 Rue Error / Wasm
                  \`RuntimeError: unreachable\`，都说明复现命中了。
                </div>
                <div>
                  3.
                  这两种表现对应的是同一条坏路径，只是当前运行时更早把它炸出来了，没有继续拖成整页卡死。
                </div>
                <div>
                  4.
                  如果既没卡住也没报错，而只是正常显示一张卡片，说明当前代码形状还不够接近真实坏路径。
                </div>
                <div>5. 当前挂载尝试次数：{mountAttempts.value}</div>
              </div>
            </div>

            <StableCard
              title="安全对照"
              description="这张卡片只做普通渲染，用来确认当前页面和 Sidebar 没有别的问题。"
            />

            <div className="rounded-2xl border border-error/20 bg-error/10 px-4 py-4 text-sm leading-7 text-base-content/80">
              预期现象不是只有“彻底卡死”这一种。 如果你点击后看到 Rue Error 面板，或控制台直接报
              Wasm \`RuntimeError: unreachable\`，也说明这个 demo 已经成功打到了和旧 Notification
              同类的坏编译路径。
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-error"
                onClick={() => {
                  mountAttempts.value += 1
                  mountProbe.value = true
                }}
              >
                挂载可疑组件（可能卡死或抛 Wasm unreachable）
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  mountProbe.value = false
                }}
              >
                卸载可疑组件
              </button>
            </div>

            {mountProbe.value ? (
              <FreezeProneCard
                props={{ 'data-testid': 'freeze-probe-root' }}
                description="这个组件复用了旧 Notification 的派生 props + delete + 回写模式。你要看的不是只有整页卡死；如果它一挂载就直接抛 Wasm unreachable，也算命中同类坏路径。"
              >
                <div className="rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2 font-mono text-xs leading-6">
                  data-freeze-probe should become true if it renders successfully.
                </div>
              </FreezeProneCard>
            ) : (
              <div className="rounded-2xl border border-dashed border-base-300 bg-base-100 px-4 py-5 text-sm leading-7 text-base-content/68">
                可疑组件尚未挂载。点击上面的按钮后，如果页面无响应，或者直接抛出 Wasm
                unreachable，就说明这个 demo 足够接近当时的坏路径。
              </div>
            )}
          </div>
        )}

        {activeTab.value === 'code' && (
          <div className="card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]">
            <div className="card-body p-0">
              <Code className="h-full" lang="tsx" code={freezeCompilerTrapSource} />
            </div>
          </div>
        )}
      </div>
    </SidebarPlayground>
  )
}

export default FreezeCompilerTrap
`,S=e=>l(t=>{let n=a(`article`,t);g(n,`card border border-success/20 bg-base-100 shadow-sm`);let i=a(`div`,n);r(n,i),g(i,`card-body gap-3`);let o=a(`div`,i);r(i,o),g(o,`badge badge-success badge-outline`),r(o,p(`safe baseline`));let c=a(`h2`,i);r(i,c),g(c,`card-title text-lg`);let l=s(`rue:slot:anchor`);r(c,l),d(()=>{let t=e.title;_(()=>f(t,c,l))});let u=a(`p`,i);r(i,u),g(u,`text-sm leading-7 text-base-content/72`);let m=s(`rue:slot:anchor`);return r(u,m),d(()=>{let t=e.description;_(()=>f(t,u,m))}),n}),C=e=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:o,__rue_rest_omit_2:c,__rue_rest_omit_3:m,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,rest:C,Component:w,componentProps:T,userOnClick:E}=v(`useSetup:0:0`,()=>t(()=>{let{as:t,title:n,description:r,props:i,className:a,style:o,children:s,onClick:c,...l}=e,d=e.as===void 0?`article`:e.as,f=v(`computed:1:0`,()=>u(()=>({...e.props,...l}))),p=f,m=v(`computed:1:1`,()=>u(()=>p.get().onClick));return`onClick`in p.get()&&delete p.get().onClick,p.get().role=p.get().role??`status`,p.get()[`data-freeze-probe`]=p.get()[`data-freeze-probe`]??`true`,{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:d,componentProps:f,userOnClick:m}}));return l(t=>{let i=n(),o=s(`rue:component:anchor`);r(i,o);let c=l(()=>{let t=n(),i=a(`div`,t);r(t,i),g(i,`card-body gap-3`);let o=a(`div`,i);r(i,o),g(o,`badge badge-error badge-outline`),r(o,p(`freeze probe`));let c=a(`h2`,i);r(i,c),g(c,`card-title text-lg`);let l=s(`rue:slot:anchor`);r(c,l),d(()=>{let t=e.title===void 0?`旧 Notification 坏路径`:e.title;_(()=>f(t,c,l))});let u=a(`p`,i);r(i,u),g(u,`text-sm leading-7 text-base-content/72`);let m=s(`rue:slot:anchor`);r(u,m),d(()=>{let t=e.description===void 0?`如果一挂载就卡住或直接变成浏览器无响应，说明命中的还是同一类编译坏路径。`:e.description;_(()=>f(t,u,m))});let h=s(`rue:children:anchor`);return r(i,h),d(()=>{let t=e.children;_(()=>f(t,i,h))}),t});return d(()=>{let t=h(w,{...T.get(),className:`card border border-error/30 bg-base-100 shadow-sm ${e.className??``}`.trim(),style:e.style,onClick:t=>{typeof E.get()==`function`&&E.get()(t),typeof e.onClick==`function`&&e.onClick(t)},children:c});_(()=>f(t,i,o))}),i})},w=()=>{let{activeTab:u,mountProbe:w,mountAttempts:T}=v(`useSetup:0:0:dup1`,()=>t(()=>({activeTab:v(`ref:1:2`,()=>c(`preview`)),mountProbe:v(`ref:1:3`,()=>c(!1)),mountAttempts:v(`ref:1:4`,()=>c(0))})));return l(t=>{let c=n(),v=s(`rue:component:anchor`);return r(c,v),f(h(b,{children:l(()=>{let t=n(),c=a(`div`,t);r(t,c),g(c,`space-y-4`);let v=a(`div`,c);r(c,v),g(v,`space-y-3`);let b=a(`h1`,v);r(v,b),g(b,`text-4xl font-semibold tracking-tight`),r(b,p(`卡死复现（编译器坏路径）`));let E=a(`p`,v);r(v,E),g(E,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),r(E,p(`这个 demo 不是在复现 Notification 的整页壳，而是把当时真正导致卡死的那类源码形状单独抽出来。 重点是：组件内部先从 props 和 rest 派生一个对象，再 delete 与回写字段。 如果当前编译器仍会把它改成 computed().get() 再突变，那么挂载时就可能直接卡住。`));let D=a(`div`,c);r(c,D),e(D,`role`,`tablist`),g(D,`tabs tabs-box`);let O=a(`button`,D);r(D,O),e(O,`role`,`tab`),d(()=>{g(O,String(`tab ${u.value===`preview`?`tab-active`:``}`))}),o(O,`click`,()=>{u.value=`preview`}),r(O,p(`效果`));let k=a(`button`,D);r(D,k),e(k,`role`,`tab`),d(()=>{g(k,String(`tab ${u.value===`code`?`tab-active`:``}`))}),o(k,`click`,()=>{u.value=`code`}),r(k,p(`代码`));let A=s(`rue:slot:anchor`);r(c,A),d(()=>{let t=u.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),g(c,`grid gap-6 items-start`);let u=a(`div`,c);r(c,u),g(u,`alert alert-warning shadow-sm`);let v=a(`div`,u);r(u,v),g(v,`space-y-2 text-sm leading-7`);let y=a(`div`,v);r(v,y),g(y,`font-semibold`),r(y,p(`使用方式`));let b=a(`div`,v);r(v,b),r(b,p(`1. 页面先只渲染一个安全对照组件，不会卡。`));let x=a(`div`,v);r(v,x),r(x,p("2. 点击下面的“挂载可疑组件”后，如果标签页开始无响应，或者直接抛出 Rue Error / Wasm `RuntimeError: unreachable`，都说明复现命中了。"));let E=a(`div`,v);r(v,E),r(E,p(`3. 这两种表现对应的是同一条坏路径，只是当前运行时更早把它炸出来了，没有继续拖成整页卡死。`));let D=a(`div`,v);r(v,D),r(D,p(`4. 如果既没卡住也没报错，而只是正常显示一张卡片，说明当前代码形状还不够接近真实坏路径。`));let O=a(`div`,v);r(v,O),r(O,p(`5. 当前挂载尝试次数：`));let k=i(O);r(O,k),d(()=>{m(k,T.value)});let A=s(`rue:component:anchor`);r(c,A),f(h(S,{title:`安全对照`,description:`这张卡片只做普通渲染，用来确认当前页面和 Sidebar 没有别的问题。`}),c,A);let j=a(`div`,c);r(c,j),g(j,`rounded-2xl border border-error/20 bg-error/10 px-4 py-4 text-sm leading-7 text-base-content/80`),r(j,p("预期现象不是只有“彻底卡死”这一种。 如果你点击后看到 Rue Error 面板，或控制台直接报 Wasm `RuntimeError: unreachable`，也说明这个 demo 已经成功打到了和旧 Notification 同类的坏编译路径。"));let M=a(`div`,c);r(c,M),g(M,`flex flex-wrap gap-3`);let N=a(`button`,M);r(M,N),e(N,`type`,`button`),g(N,`btn btn-error`),o(N,`click`,()=>{T.value+=1,w.value=!0}),r(N,p(`挂载可疑组件（可能卡死或抛 Wasm unreachable）`));let P=a(`button`,M);r(M,P),e(P,`type`,`button`),g(P,`btn btn-outline`),o(P,`click`,()=>{w.value=!1}),r(P,p(`卸载可疑组件`));let F=s(`rue:slot:anchor`);return r(c,F),d(()=>{let e=w.value?l(()=>{let e=n(),t=s(`rue:component:anchor`);r(e,t);let i=l(()=>{let e=n(),t=a(`div`,e);return r(e,t),g(t,`rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2 font-mono text-xs leading-6`),r(t,p(`data-freeze-probe should become true if it renders successfully.`)),e});return d(()=>{let n=h(C,{props:{"data-testid":`freeze-probe-root`},description:`这个组件复用了旧 Notification 的派生 props + delete + 回写模式。你要看的不是只有整页卡死；如果它一挂载就直接抛 Wasm unreachable，也算命中同类坏路径。`,children:i});_(()=>f(n,e,t))}),e}):l(()=>{let e=n(),t=a(`div`,e);return r(e,t),g(t,`rounded-2xl border border-dashed border-base-300 bg-base-100 px-4 py-5 text-sm leading-7 text-base-content/68`),r(t,p(`可疑组件尚未挂载。点击上面的按钮后，如果页面无响应，或者直接抛出 Wasm unreachable，就说明这个 demo 足够接近当时的坏路径。`)),e});_(()=>f(e,c,F))}),t}):``;_(()=>f(t,c,A))}),r(c,p(` `));let j=s(`rue:slot:anchor`);return r(c,j),d(()=>{let e=u.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=a(`div`,t);r(t,i),g(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:x});_(()=>f(e,i,o))}),e}):``;_(()=>f(e,c,j))}),t})}),c,v),c})};export{w as default};
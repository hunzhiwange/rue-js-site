import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,rt as p,st as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=`import { type FC, ref } from '@rue-js/rue'
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
`,S=t=>l(i=>{let o=r(`article`,i);n(o,`card border border-success/20 bg-base-100 shadow-sm`);let c=r(`div`,o);a(o,c),n(c,`card-body gap-3`);let l=r(`div`,c);a(c,l),n(l,`badge badge-success badge-outline`),a(l,s(`safe baseline`));let d=r(`h2`,c);a(c,d),n(d,`card-title text-lg`);let p=e(`rue:slot:anchor`);a(d,p),g(()=>{let e=t.title;u(()=>f(e,d,p))});let m=r(`p`,c);a(c,m),n(m,`text-sm leading-7 text-base-content/72`);let h=e(`rue:slot:anchor`);return a(m,h),g(()=>{let e=t.description;u(()=>f(e,m,h))}),o}),C=i=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:c,__rue_rest_omit_2:m,__rue_rest_omit_3:_,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,rest:C,Component:w,componentProps:T,userOnClick:E}=v(`useSetup:0:0`,()=>d(()=>{let{as:e,title:t,description:n,props:r,className:a,style:o,children:s,onClick:c,...l}=i,u=i.as===void 0?`article`:i.as,d=v(`computed:1:0`,()=>p(()=>({...i.props,...l}))),f=d,m=v(`computed:1:1`,()=>p(()=>f.get().onClick));return`onClick`in f.get()&&delete f.get().onClick,f.get().role=f.get().role??`status`,f.get()[`data-freeze-probe`]=f.get()[`data-freeze-probe`]??`true`,{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:u,componentProps:d,userOnClick:m}}));return l(o=>{let c=t(),d=e(`rue:component:anchor`);a(c,d);let p=l(()=>{let o=t(),c=r(`div`,o);a(o,c),n(c,`card-body gap-3`);let l=r(`div`,c);a(c,l),n(l,`badge badge-error badge-outline`),a(l,s(`freeze probe`));let d=r(`h2`,c);a(c,d),n(d,`card-title text-lg`);let p=e(`rue:slot:anchor`);a(d,p),g(()=>{let e=i.title===void 0?`旧 Notification 坏路径`:i.title;u(()=>f(e,d,p))});let m=r(`p`,c);a(c,m),n(m,`text-sm leading-7 text-base-content/72`);let h=e(`rue:slot:anchor`);a(m,h),g(()=>{let e=i.description===void 0?`如果一挂载就卡住或直接变成浏览器无响应，说明命中的还是同一类编译坏路径。`:i.description;u(()=>f(e,m,h))});let _=e(`rue:children:anchor`);return a(c,_),g(()=>{let e=i.children;u(()=>f(e,c,_))}),o});return g(()=>{let e=h(w,{...T.get(),className:`card border border-error/30 bg-base-100 shadow-sm ${i.className??``}`.trim(),style:i.style,onClick:e=>{typeof E.get()==`function`&&E.get()(e),typeof i.onClick==`function`&&i.onClick(e)},children:p});u(()=>f(e,c,d))}),c})},w=()=>{let{activeTab:p,mountProbe:w,mountAttempts:T}=v(`useSetup:0:0:dup1`,()=>d(()=>({activeTab:v(`ref:1:2`,()=>m(`preview`)),mountProbe:v(`ref:1:3`,()=>m(!1)),mountAttempts:v(`ref:1:4`,()=>m(0))})));return l(d=>{let m=t(),v=e(`rue:component:anchor`);return a(m,v),f(h(b,{children:l(()=>{let d=t(),m=r(`div`,d);a(d,m),n(m,`space-y-4`);let v=r(`div`,m);a(m,v),n(v,`space-y-3`);let b=r(`h1`,v);a(v,b),n(b,`text-4xl font-semibold tracking-tight`),a(b,s(`卡死复现（编译器坏路径）`));let E=r(`p`,v);a(v,E),n(E,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),a(E,s(`这个 demo 不是在复现 Notification 的整页壳，而是把当时真正导致卡死的那类源码形状单独抽出来。 重点是：组件内部先从 props 和 rest 派生一个对象，再 delete 与回写字段。 如果当前编译器仍会把它改成 computed().get() 再突变，那么挂载时就可能直接卡住。`));let D=r(`div`,m);a(m,D),c(D,`role`,`tablist`),n(D,`tabs tabs-box`);let O=r(`button`,D);a(D,O),c(O,`role`,`tab`),g(()=>{n(O,String(`tab ${p.value===`preview`?`tab-active`:``}`))}),i(O,`click`,()=>{p.value=`preview`}),a(O,s(`效果`));let k=r(`button`,D);a(D,k),c(k,`role`,`tab`),g(()=>{n(k,String(`tab ${p.value===`code`?`tab-active`:``}`))}),i(k,`click`,()=>{p.value=`code`}),a(k,s(`代码`));let A=e(`rue:slot:anchor`);a(m,A),g(()=>{let d=p.value===`preview`?l(()=>{let d=t(),p=r(`div`,d);a(d,p),n(p,`grid gap-6 items-start`);let m=r(`div`,p);a(p,m),n(m,`alert alert-warning shadow-sm`);let v=r(`div`,m);a(m,v),n(v,`space-y-2 text-sm leading-7`);let y=r(`div`,v);a(v,y),n(y,`font-semibold`),a(y,s(`使用方式`));let b=r(`div`,v);a(v,b),a(b,s(`1. 页面先只渲染一个安全对照组件，不会卡。`));let x=r(`div`,v);a(v,x),a(x,s("2. 点击下面的“挂载可疑组件”后，如果标签页开始无响应，或者直接抛出 Rue Error / Wasm `RuntimeError: unreachable`，都说明复现命中了。"));let E=r(`div`,v);a(v,E),a(E,s(`3. 这两种表现对应的是同一条坏路径，只是当前运行时更早把它炸出来了，没有继续拖成整页卡死。`));let D=r(`div`,v);a(v,D),a(D,s(`4. 如果既没卡住也没报错，而只是正常显示一张卡片，说明当前代码形状还不够接近真实坏路径。`));let O=r(`div`,v);a(v,O),a(O,s(`5. 当前挂载尝试次数：`));let k=_(O);a(O,k),g(()=>{o(k,T.value)});let A=e(`rue:component:anchor`);a(p,A),f(h(S,{title:`安全对照`,description:`这张卡片只做普通渲染，用来确认当前页面和 Sidebar 没有别的问题。`}),p,A);let j=r(`div`,p);a(p,j),n(j,`rounded-2xl border border-error/20 bg-error/10 px-4 py-4 text-sm leading-7 text-base-content/80`),a(j,s("预期现象不是只有“彻底卡死”这一种。 如果你点击后看到 Rue Error 面板，或控制台直接报 Wasm `RuntimeError: unreachable`，也说明这个 demo 已经成功打到了和旧 Notification 同类的坏编译路径。"));let M=r(`div`,p);a(p,M),n(M,`flex flex-wrap gap-3`);let N=r(`button`,M);a(M,N),c(N,`type`,`button`),n(N,`btn btn-error`),i(N,`click`,()=>{T.value+=1,w.value=!0}),a(N,s(`挂载可疑组件（可能卡死或抛 Wasm unreachable）`));let P=r(`button`,M);a(M,P),c(P,`type`,`button`),n(P,`btn btn-outline`),i(P,`click`,()=>{w.value=!1}),a(P,s(`卸载可疑组件`));let F=e(`rue:slot:anchor`);return a(p,F),g(()=>{let i=w.value?l(()=>{let i=t(),o=e(`rue:component:anchor`);a(i,o);let c=l(()=>{let e=t(),i=r(`div`,e);return a(e,i),n(i,`rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2 font-mono text-xs leading-6`),a(i,s(`data-freeze-probe should become true if it renders successfully.`)),e});return g(()=>{let e=h(C,{props:{"data-testid":`freeze-probe-root`},description:`这个组件复用了旧 Notification 的派生 props + delete + 回写模式。你要看的不是只有整页卡死；如果它一挂载就直接抛 Wasm unreachable，也算命中同类坏路径。`,children:c});u(()=>f(e,i,o))}),i}):l(()=>{let e=t(),i=r(`div`,e);return a(e,i),n(i,`rounded-2xl border border-dashed border-base-300 bg-base-100 px-4 py-5 text-sm leading-7 text-base-content/68`),a(i,s(`可疑组件尚未挂载。点击上面的按钮后，如果页面无响应，或者直接抛出 Wasm unreachable，就说明这个 demo 足够接近当时的坏路径。`)),e});u(()=>f(i,p,F))}),d}):``;u(()=>f(d,m,A))}),a(m,s(` `));let j=e(`rue:slot:anchor`);return a(m,j),g(()=>{let i=p.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),g(()=>{let e=h(y,{className:`h-full`,lang:`tsx`,code:x});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,m,j))}),d})}),m,v),m})};export{w as default};
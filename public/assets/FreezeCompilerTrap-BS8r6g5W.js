import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,_t as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x=`import { type FC, ref } from '@rue-js/rue'
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
`,S=n=>d(r=>{let i=e(`article`,r);l(i,`card border border-success/20 bg-base-100 shadow-sm`);let c=e(`div`,i);o(i,c),l(c,`card-body gap-3`);let d=e(`div`,c);o(c,d),l(d,`badge badge-success badge-outline`),o(d,u(`safe baseline`));let f=e(`h2`,c);o(c,f),l(f,`card-title text-lg`);let p=s(`rue:slot:anchor`);o(f,p),a(()=>{let e=n.title;t(()=>h(e,f,p))});let m=e(`p`,c);o(c,m),l(m,`text-sm leading-7 text-base-content/72`);let g=s(`rue:slot:anchor`);return o(m,g),a(()=>{let e=n.description;t(()=>h(e,m,g))}),i}),C=n=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:f,__rue_rest_omit_2:p,__rue_rest_omit_3:_,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,rest:C,Component:w,componentProps:T,userOnClick:E}=v(`useSetup:0:0`,()=>m(()=>{let{as:e,title:t,description:r,props:i,className:a,style:o,children:s,onClick:l,...u}=n,d=n.as===void 0?`article`:n.as,f=v(`computed:1:0`,()=>c(()=>({...n.props,...u}))),p=f,m=v(`computed:1:1`,()=>c(()=>p.get().onClick));return`onClick`in p.get()&&delete p.get().onClick,p.get().role=p.get().role??`status`,p.get()[`data-freeze-probe`]=p.get()[`data-freeze-probe`]??`true`,{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,rest:u,Component:d,componentProps:f,userOnClick:m}}));return d(i=>{let c=r(),f=s(`rue:component:anchor`);o(c,f);let p=d(()=>{let i=r(),c=e(`div`,i);o(i,c),l(c,`card-body gap-3`);let d=e(`div`,c);o(c,d),l(d,`badge badge-error badge-outline`),o(d,u(`freeze probe`));let f=e(`h2`,c);o(c,f),l(f,`card-title text-lg`);let p=s(`rue:slot:anchor`);o(f,p),a(()=>{let e=n.title===void 0?`旧 Notification 坏路径`:n.title;t(()=>h(e,f,p))});let m=e(`p`,c);o(c,m),l(m,`text-sm leading-7 text-base-content/72`);let g=s(`rue:slot:anchor`);o(m,g),a(()=>{let e=n.description===void 0?`如果一挂载就卡住或直接变成浏览器无响应，说明命中的还是同一类编译坏路径。`:n.description;t(()=>h(e,m,g))});let _=s(`rue:children:anchor`);return o(c,_),a(()=>{let e=n.children;t(()=>h(e,c,_))}),i});return a(()=>{let e=g(w,{...T.get(),className:`card border border-error/30 bg-base-100 shadow-sm ${n.className??``}`.trim(),style:n.style,onClick:e=>{typeof E.get()==`function`&&E.get()(e),typeof n.onClick==`function`&&n.onClick(e)},children:p});t(()=>h(e,c,f))}),c})},w=()=>{let{activeTab:c,mountProbe:w,mountAttempts:T}=v(`useSetup:0:0:dup1`,()=>m(()=>({activeTab:v(`ref:1:2`,()=>i(`preview`)),mountProbe:v(`ref:1:3`,()=>i(!1)),mountAttempts:v(`ref:1:4`,()=>i(0))})));return d(i=>{let m=r(),v=s(`rue:component:anchor`);return o(m,v),h(g(b,{children:d(()=>{let i=r(),m=e(`div`,i);o(i,m),l(m,`space-y-4`);let v=e(`div`,m);o(m,v),l(v,`space-y-3`);let b=e(`h1`,v);o(v,b),l(b,`text-4xl font-semibold tracking-tight`),o(b,u(`卡死复现（编译器坏路径）`));let E=e(`p`,v);o(v,E),l(E,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(E,u(`这个 demo 不是在复现 Notification 的整页壳，而是把当时真正导致卡死的那类源码形状单独抽出来。 重点是：组件内部先从 props 和 rest 派生一个对象，再 delete 与回写字段。 如果当前编译器仍会把它改成 computed().get() 再突变，那么挂载时就可能直接卡住。`));let D=e(`div`,m);o(m,D),p(D,`role`,`tablist`),l(D,`tabs tabs-box`);let O=e(`button`,D);o(D,O),p(O,`role`,`tab`),a(()=>{l(O,String(`tab ${c.value===`preview`?`tab-active`:``}`))}),n(O,`click`,()=>{c.value=`preview`}),o(O,u(`效果`));let k=e(`button`,D);o(D,k),p(k,`role`,`tab`),a(()=>{l(k,String(`tab ${c.value===`code`?`tab-active`:``}`))}),n(k,`click`,()=>{c.value=`code`}),o(k,u(`代码`));let A=s(`rue:slot:anchor`);o(m,A),a(()=>{let i=c.value===`preview`?d(()=>{let i=r(),c=e(`div`,i);o(i,c),l(c,`grid gap-6 items-start`);let m=e(`div`,c);o(c,m),l(m,`alert alert-warning shadow-sm`);let v=e(`div`,m);o(m,v),l(v,`space-y-2 text-sm leading-7`);let y=e(`div`,v);o(v,y),l(y,`font-semibold`),o(y,u(`使用方式`));let b=e(`div`,v);o(v,b),o(b,u(`1. 页面先只渲染一个安全对照组件，不会卡。`));let x=e(`div`,v);o(v,x),o(x,u("2. 点击下面的“挂载可疑组件”后，如果标签页开始无响应，或者直接抛出 Rue Error / Wasm `RuntimeError: unreachable`，都说明复现命中了。"));let E=e(`div`,v);o(v,E),o(E,u(`3. 这两种表现对应的是同一条坏路径，只是当前运行时更早把它炸出来了，没有继续拖成整页卡死。`));let D=e(`div`,v);o(v,D),o(D,u(`4. 如果既没卡住也没报错，而只是正常显示一张卡片，说明当前代码形状还不够接近真实坏路径。`));let O=e(`div`,v);o(v,O),o(O,u(`5. 当前挂载尝试次数：`));let k=_(O);o(O,k),a(()=>{f(k,T.value)});let A=s(`rue:component:anchor`);o(c,A),h(g(S,{title:`安全对照`,description:`这张卡片只做普通渲染，用来确认当前页面和 Sidebar 没有别的问题。`}),c,A);let j=e(`div`,c);o(c,j),l(j,`rounded-2xl border border-error/20 bg-error/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(j,u("预期现象不是只有“彻底卡死”这一种。 如果你点击后看到 Rue Error 面板，或控制台直接报 Wasm `RuntimeError: unreachable`，也说明这个 demo 已经成功打到了和旧 Notification 同类的坏编译路径。"));let M=e(`div`,c);o(c,M),l(M,`flex flex-wrap gap-3`);let N=e(`button`,M);o(M,N),p(N,`type`,`button`),l(N,`btn btn-error`),n(N,`click`,()=>{T.value+=1,w.value=!0}),o(N,u(`挂载可疑组件（可能卡死或抛 Wasm unreachable）`));let P=e(`button`,M);o(M,P),p(P,`type`,`button`),l(P,`btn btn-outline`),n(P,`click`,()=>{w.value=!1}),o(P,u(`卸载可疑组件`));let F=s(`rue:slot:anchor`);return o(c,F),a(()=>{let n=w.value?d(()=>{let n=r(),i=s(`rue:component:anchor`);o(n,i);let c=d(()=>{let t=r(),n=e(`div`,t);return o(t,n),l(n,`rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2 font-mono text-xs leading-6`),o(n,u(`data-freeze-probe should become true if it renders successfully.`)),t});return a(()=>{let e=g(C,{props:{"data-testid":`freeze-probe-root`},description:`这个组件复用了旧 Notification 的派生 props + delete + 回写模式。你要看的不是只有整页卡死；如果它一挂载就直接抛 Wasm unreachable，也算命中同类坏路径。`,children:c});t(()=>h(e,n,i))}),n}):d(()=>{let t=r(),n=e(`div`,t);return o(t,n),l(n,`rounded-2xl border border-dashed border-base-300 bg-base-100 px-4 py-5 text-sm leading-7 text-base-content/68`),o(n,u(`可疑组件尚未挂载。点击上面的按钮后，如果页面无响应，或者直接抛出 Wasm unreachable，就说明这个 demo 足够接近当时的坏路径。`)),t});t(()=>h(n,c,F))}),i}):``;t(()=>h(i,m,A))}),o(m,u(` `));let j=s(`rue:slot:anchor`);return o(m,j),a(()=>{let n=c.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),l(i,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let c=e(`div`,i);o(i,c),l(c,`card-body p-0`);let u=s(`rue:component:anchor`);return o(c,u),a(()=>{let e=g(y,{className:`h-full`,lang:`tsx`,code:x});t(()=>h(e,c,u))}),n}):``;t(()=>h(n,m,j))}),i})}),m,v),m})};export{w as default};
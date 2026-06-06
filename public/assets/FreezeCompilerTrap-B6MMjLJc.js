import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,lt as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x=`import { type FC, ref } from '@rue-js/rue'
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
`,S=a=>d(o=>{let c=s(`article`,o);e(c,`card border border-success/20 bg-base-100 shadow-sm`);let l=s(`div`,c);t(c,l),e(l,`card-body gap-3`);let u=s(`div`,l);t(l,u),e(u,`badge badge-success badge-outline`),t(u,r(`safe baseline`));let d=s(`h2`,l);t(l,d),e(d,`card-title text-lg`);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=a.title;g(()=>p(e,d,f))});let m=s(`p`,l);t(l,m),e(m,`text-sm leading-7 text-base-content/72`);let h=i(`rue:slot:anchor`);return t(m,h),n(()=>{let e=a.description;g(()=>p(e,m,h))}),c}),C=a=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:_,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,rest:C,Component:w,componentProps:T,userOnClick:E}=v(`useSetup:0:0`,()=>h(()=>{let{as:e,title:t,description:n,props:r,className:i,style:o,children:s,onClick:c,...l}=a,u=a.as===void 0?`article`:a.as,d=v(`computed:1:0`,()=>f(()=>({...a.props,...l}))),p=d,m=v(`computed:1:1`,()=>f(()=>p.get().onClick));return`onClick`in p.get()&&delete p.get().onClick,p.get().role=p.get().role??`status`,p.get()[`data-freeze-probe`]=p.get()[`data-freeze-probe`]??`true`,{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:u,componentProps:d,userOnClick:m}}));return d(c=>{let l=o(),u=i(`rue:component:anchor`);t(l,u);let f=d(()=>{let c=o(),l=s(`div`,c);t(c,l),e(l,`card-body gap-3`);let u=s(`div`,l);t(l,u),e(u,`badge badge-error badge-outline`),t(u,r(`freeze probe`));let d=s(`h2`,l);t(l,d),e(d,`card-title text-lg`);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=a.title===void 0?`旧 Notification 坏路径`:a.title;g(()=>p(e,d,f))});let m=s(`p`,l);t(l,m),e(m,`text-sm leading-7 text-base-content/72`);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=a.description===void 0?`如果一挂载就卡住或直接变成浏览器无响应，说明命中的还是同一类编译坏路径。`:a.description;g(()=>p(e,m,h))});let _=i(`rue:children:anchor`);return t(l,_),n(()=>{let e=a.children;g(()=>p(e,l,_))}),c});return n(()=>{let e=m(w,{...T.get(),className:`card border border-error/30 bg-base-100 shadow-sm ${a.className??``}`.trim(),style:a.style,onClick:e=>{typeof E.get()==`function`&&E.get()(e),typeof a.onClick==`function`&&a.onClick(e)},children:f});g(()=>p(e,l,u))}),l})},w=()=>{let{activeTab:f,mountProbe:w,mountAttempts:T}=v(`useSetup:0:0:dup1`,()=>h(()=>({activeTab:v(`ref:1:2`,()=>u(`preview`)),mountProbe:v(`ref:1:3`,()=>u(!1)),mountAttempts:v(`ref:1:4`,()=>u(0))})));return d(u=>{let h=o(),v=i(`rue:component:anchor`);return t(h,v),p(m(b,{children:d(()=>{let u=o(),h=s(`div`,u);t(u,h),e(h,`space-y-4`);let v=s(`div`,h);t(h,v),e(v,`space-y-3`);let b=s(`h1`,v);t(v,b),e(b,`text-4xl font-semibold tracking-tight`),t(b,r(`卡死复现（编译器坏路径）`));let E=s(`p`,v);t(v,E),e(E,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),t(E,r(`这个 demo 不是在复现 Notification 的整页壳，而是把当时真正导致卡死的那类源码形状单独抽出来。 重点是：组件内部先从 props 和 rest 派生一个对象，再 delete 与回写字段。 如果当前编译器仍会把它改成 computed().get() 再突变，那么挂载时就可能直接卡住。`));let D=s(`div`,h);t(h,D),c(D,`role`,`tablist`),e(D,`tabs tabs-box`);let O=s(`button`,D);t(D,O),c(O,`role`,`tab`),n(()=>{e(O,String(`tab ${f.value===`preview`?`tab-active`:``}`))}),_(O,`click`,()=>{f.value=`preview`}),t(O,r(`效果`));let k=s(`button`,D);t(D,k),c(k,`role`,`tab`),n(()=>{e(k,String(`tab ${f.value===`code`?`tab-active`:``}`))}),_(k,`click`,()=>{f.value=`code`}),t(k,r(`代码`));let A=i(`rue:slot:anchor`);t(h,A),n(()=>{let u=f.value===`preview`?d(()=>{let u=o(),f=s(`div`,u);t(u,f),e(f,`grid gap-6 items-start`);let h=s(`div`,f);t(f,h),e(h,`alert alert-warning shadow-sm`);let v=s(`div`,h);t(h,v),e(v,`space-y-2 text-sm leading-7`);let y=s(`div`,v);t(v,y),e(y,`font-semibold`),t(y,r(`使用方式`));let b=s(`div`,v);t(v,b),t(b,r(`1. 页面先只渲染一个安全对照组件，不会卡。`));let x=s(`div`,v);t(v,x),t(x,r("2. 点击下面的“挂载可疑组件”后，如果标签页开始无响应，或者直接抛出 Rue Error / Wasm `RuntimeError: unreachable`，都说明复现命中了。"));let E=s(`div`,v);t(v,E),t(E,r(`3. 这两种表现对应的是同一条坏路径，只是当前运行时更早把它炸出来了，没有继续拖成整页卡死。`));let D=s(`div`,v);t(v,D),t(D,r(`4. 如果既没卡住也没报错，而只是正常显示一张卡片，说明当前代码形状还不够接近真实坏路径。`));let O=s(`div`,v);t(v,O),t(O,r(`5. 当前挂载尝试次数：`));let k=a(O);t(O,k),n(()=>{l(k,T.value)});let A=i(`rue:component:anchor`);t(f,A),p(m(S,{title:`安全对照`,description:`这张卡片只做普通渲染，用来确认当前页面和 Sidebar 没有别的问题。`}),f,A);let j=s(`div`,f);t(f,j),e(j,`rounded-2xl border border-error/20 bg-error/10 px-4 py-4 text-sm leading-7 text-base-content/80`),t(j,r("预期现象不是只有“彻底卡死”这一种。 如果你点击后看到 Rue Error 面板，或控制台直接报 Wasm `RuntimeError: unreachable`，也说明这个 demo 已经成功打到了和旧 Notification 同类的坏编译路径。"));let M=s(`div`,f);t(f,M),e(M,`flex flex-wrap gap-3`);let N=s(`button`,M);t(M,N),c(N,`type`,`button`),e(N,`btn btn-error`),_(N,`click`,()=>{T.value+=1,w.value=!0}),t(N,r(`挂载可疑组件（可能卡死或抛 Wasm unreachable）`));let P=s(`button`,M);t(M,P),c(P,`type`,`button`),e(P,`btn btn-outline`),_(P,`click`,()=>{w.value=!1}),t(P,r(`卸载可疑组件`));let F=i(`rue:slot:anchor`);return t(f,F),n(()=>{let a=w.value?d(()=>{let a=o(),c=i(`rue:component:anchor`);t(a,c);let l=d(()=>{let n=o(),i=s(`div`,n);return t(n,i),e(i,`rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2 font-mono text-xs leading-6`),t(i,r(`data-freeze-probe should become true if it renders successfully.`)),n});return n(()=>{let e=m(C,{props:{"data-testid":`freeze-probe-root`},description:`这个组件复用了旧 Notification 的派生 props + delete + 回写模式。你要看的不是只有整页卡死；如果它一挂载就直接抛 Wasm unreachable，也算命中同类坏路径。`,children:l});g(()=>p(e,a,c))}),a}):d(()=>{let n=o(),i=s(`div`,n);return t(n,i),e(i,`rounded-2xl border border-dashed border-base-300 bg-base-100 px-4 py-5 text-sm leading-7 text-base-content/68`),t(i,r(`可疑组件尚未挂载。点击上面的按钮后，如果页面无响应，或者直接抛出 Wasm unreachable，就说明这个 demo 足够接近当时的坏路径。`)),n});g(()=>p(a,f,F))}),u}):``;g(()=>p(u,h,A))}),t(h,r(` `));let j=i(`rue:slot:anchor`);return t(h,j),n(()=>{let r=f.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=m(y,{className:`h-full`,lang:`tsx`,code:x});g(()=>p(e,c,l))}),r}):``;g(()=>p(r,h,j))}),u})}),h,v),h})};export{w as default};
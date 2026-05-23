import{$ as e,Et as t,G as n,H as r,J as i,K as a,Tt as o,W as s,_t as c,c as l,d as u,i as d,kt as f,l as p,o as m,q as h,st as g,t as _,tt as v,xt as y}from"./vapor-runtime-BAZOdMd8.js";import{a as b,n as ee,t as x}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as S}from"./ExamplePlayground-CP_R2ZD3.js";var C=`http://www.w3.org/2000/svg`,w=`http://www.w3.org/1999/xhtml`,T=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),E=e=>e?.namespaceURI??``,D=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,te=e=>e===C?`SVG`:e===w?`HTML`:e?`其他`:`未挂载`,ne=e=>e===C?`badge-info`:e===w?`badge-success`:`badge-ghost`,re=t=>u(n=>{let i=a(`a`,n),o=x(i,()=>t.linkRef);d(()=>{o()}),e(i,`href`,`#component`),v(i,`svg-shared-link`);let s=a(`title`,i);r(i,s);let c=x(s,()=>t.titleRef);d(()=>{c()}),r(s,h(`组件根 a/title 也会继承 SVG namespace`));let l=a(`text`,i);r(i,l),e(l,`x`,`24`),e(l,`y`,`112`),v(l,`svg-shared-label`),r(l,h(`组件根共享标签`));let u=a(`text`,i);return r(i,u),e(u,`x`,`24`),e(u,`y`,`136`),v(u,`svg-shared-note`),r(u,h(`这个 a/title 来自单独组件`)),i}),O=()=>{let{topLinkRef:S,topTitleRef:C,styleRef:w,scriptRef:O,componentLinkRef:k,componentTitleRef:A,htmlLinkRef:j,namespaces:M,syncNamespaces:N,namespaceRows:P}=b(`useSetup:0:0`,()=>t(()=>{let e=b(`useRef:1:0`,()=>o()),t=b(`useRef:1:1`,()=>o()),n=b(`useRef:1:2`,()=>o()),r=b(`useRef:1:3`,()=>o()),i=b(`useRef:1:4`,()=>o()),a=b(`useRef:1:5`,()=>o()),s=b(`useRef:1:6`,()=>o()),u=b(`ref:1:7`,()=>c(T())),d=()=>{let o={topLink:E(e.current),topTitle:E(t.current),style:E(n.current),script:E(r.current),componentLink:E(i.current),componentTitle:E(a.current),htmlLink:E(s.current)};D(u.value,o)||(u.value=o)};return m(d),l(d),{topLinkRef:e,topTitleRef:t,styleRef:n,scriptRef:r,componentLinkRef:i,componentTitleRef:a,htmlLinkRef:s,namespaces:u,syncNamespaces:d,namespaceRows:[{key:`topLink`,label:`svg > a`,namespace:u.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:u.value.topTitle},{key:`style`,label:`svg > style`,namespace:u.value.style},{key:`script`,label:`svg > script`,namespace:u.value.script},{key:`componentLink`,label:`组件根 a`,namespace:u.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:u.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:u.value.htmlLink}]}}));return u(t=>{let o=a(`div`,t);v(o,`grid gap-4`);let c=a(`p`,o);r(o,c),v(c,`text-sm leading-6 opacity-75`),r(c,h(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let l=a(`span`,c);r(c,l),v(l,`font-semibold`),r(l,h(`a / title / style / script`)),r(c,h(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let m=a(`div`,o);r(o,m),v(m,`card bg-base-100 shadow`);let b=a(`div`,m);r(m,b),v(b,`card-body gap-5`);let T=a(`div`,b);r(b,T),v(T,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=a(`svg`,T);r(T,E),e(E,`viewBox`,`0 0 520 240`),v(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=a(`style`,E);r(E,D);let M=x(D,()=>w);d(()=>{M()}),f(()=>{g(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let N=a(`script`,E);r(E,N);let F=x(N,()=>O);d(()=>{F()});let I=i(N);r(N,I),g(I,`/* namespace only demo */`);let L=a(`rect`,E);r(E,L),e(L,`x`,`16`),e(L,`y`,`20`),e(L,`width`,`228`),e(L,`height`,`140`),e(L,`rx`,`18`),e(L,`fill`,`#eff6ff`),e(L,`stroke`,`#93c5fd`);let R=a(`rect`,E);r(E,R),e(R,`x`,`272`),e(R,`y`,`20`),e(R,`width`,`228`),e(R,`height`,`140`),e(R,`rx`,`18`),e(R,`fill`,`#f8fafc`),e(R,`stroke`,`#cbd5e1`);let z=a(`a`,E);r(E,z);let ie=x(z,()=>S);d(()=>{ie()}),e(z,`href`,`#top`),v(z,`svg-shared-link`);let B=a(`title`,z);r(z,B);let ae=x(B,()=>C);d(()=>{ae()}),r(B,h(`顶层 a/title 在 SVG namespace`));let V=a(`text`,z);r(z,V),e(V,`x`,`24`),e(V,`y`,`48`),v(V,`svg-shared-label`),r(V,h(`顶层共享标签`));let H=a(`text`,z);r(z,H),e(H,`x`,`24`),e(H,`y`,`72`),v(H,`svg-shared-note`),r(H,h(`a、title、style、script 都挂在 SVG namespace`));let U=s(`rue:component:anchor`);r(E,U),f(()=>{let e=_(re,{linkRef:k,titleRef:A});y(()=>p(e,E,U))});let W=a(`text`,E);r(E,W),e(W,`x`,`280`),e(W,`y`,`48`),v(W,`svg-shared-label`),r(W,h(`foreignObject 回退`));let G=a(`text`,E);r(E,G),e(G,`x`,`280`),e(G,`y`,`72`),v(G,`svg-shared-note`),r(G,h(`里面的 a 会重新变回 HTML namespace`));let K=a(`foreignObject`,E);r(E,K),e(K,`x`,`280`),e(K,`y`,`96`),e(K,`width`,`210`),e(K,`height`,`64`);let q=a(`div`,K);r(K,q),v(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=a(`a`,q);r(q,J);let oe=x(J,()=>j);d(()=>{oe()}),e(J,`href`,`#html`),v(J,`text-sm font-semibold text-blue-600 underline`),r(J,h(`foreignObject 内的 HTML 链接`));let Y=a(`div`,b);r(b,Y),v(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=s(`rue:list:start`),Z=s(`rue:list:end`);r(Y,X),r(Y,Z);let Q=new Map;f(()=>{Q=ee({items:P||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(t,i,o,c,l)=>{p(u(()=>{let i=n(),o=a(`div`,i);r(i,o),f(()=>{e(o,`key`,String(t.key))}),v(o,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let c=a(`div`,o);r(o,c),v(c,`text-sm font-semibold text-base-content`);let l=s(`rue:slot:anchor`);r(c,l),f(()=>{let e=t.label;y(()=>p(e,c,l))});let u=a(`span`,o);r(o,u),f(()=>{v(u,String(`badge mt-2 ${ne(t.namespace)}`))});let d=s(`rue:slot:anchor`);r(u,d),f(()=>{let e=te(t.namespace);y(()=>p(e,u,d))});let m=a(`div`,o);r(o,m),v(m,`mt-2 break-all text-xs leading-5 opacity-60`);let h=s(`rue:slot:anchor`);return r(m,h),f(()=>{let e=t.namespace||`节点当前未挂载`;y(()=>p(e,m,h))}),i}),i,o)}})});let $=a(`p`,b);return r(b,$),v($,`text-xs leading-5 opacity-60`),r($,h(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),o})},k=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

const SVG_NS = 'http://www.w3.org/2000/svg'
const HTML_NS = 'http://www.w3.org/1999/xhtml'

type NamespaceSnapshot = {
  topLink: string
  topTitle: string
  style: string
  script: string
  componentLink: string
  componentTitle: string
  htmlLink: string
}

type SharedSvgLinkProps = {
  linkRef: { current?: SVGElement | null }
  titleRef: { current?: SVGElement | null }
}

const emptySnapshot = (): NamespaceSnapshot => ({
  topLink: '',
  topTitle: '',
  style: '',
  script: '',
  componentLink: '',
  componentTitle: '',
  htmlLink: '',
})

const readNamespace = (element?: Element | null) => element?.namespaceURI ?? ''

const sameSnapshot = (left: NamespaceSnapshot, right: NamespaceSnapshot) =>
  left.topLink === right.topLink &&
  left.topTitle === right.topTitle &&
  left.style === right.style &&
  left.script === right.script &&
  left.componentLink === right.componentLink &&
  left.componentTitle === right.componentTitle &&
  left.htmlLink === right.htmlLink

const formatNamespaceLabel = (namespace: string) => {
  if (namespace === SVG_NS) {
    return 'SVG'
  }
  if (namespace === HTML_NS) {
    return 'HTML'
  }
  if (!namespace) {
    return '未挂载'
  }
  return '其他'
}

const namespaceBadgeClassName = (namespace: string) => {
  if (namespace === SVG_NS) {
    return 'badge-info'
  }
  if (namespace === HTML_NS) {
    return 'badge-success'
  }
  return 'badge-ghost'
}

const SharedSvgLink: FC<SharedSvgLinkProps> = props => (
  <a ref={props.linkRef} href="#component" className="svg-shared-link">
    <title ref={props.titleRef}>组件根 a/title 也会继承 SVG namespace</title>
    <text x={24} y={112} className="svg-shared-label">
      组件根共享标签
    </text>
    <text x={24} y={136} className="svg-shared-note">
      这个 a/title 来自单独组件
    </text>
  </a>
)

const SVGSharedNamespaceDemo: FC = () => {
  const topLinkRef = useRef<SVGElement>()
  const topTitleRef = useRef<SVGElement>()
  const styleRef = useRef<SVGElement>()
  const scriptRef = useRef<SVGElement>()
  const componentLinkRef = useRef<SVGElement>()
  const componentTitleRef = useRef<SVGElement>()
  const htmlLinkRef = useRef<HTMLAnchorElement>()
  const namespaces = ref<NamespaceSnapshot>(emptySnapshot())

  const syncNamespaces = () => {
    const nextSnapshot: NamespaceSnapshot = {
      topLink: readNamespace(topLinkRef.current),
      topTitle: readNamespace(topTitleRef.current),
      style: readNamespace(styleRef.current),
      script: readNamespace(scriptRef.current),
      componentLink: readNamespace(componentLinkRef.current),
      componentTitle: readNamespace(componentTitleRef.current),
      htmlLink: readNamespace(htmlLinkRef.current),
    }
    if (sameSnapshot(namespaces.value, nextSnapshot)) {
      return
    }
    namespaces.value = nextSnapshot
  }

  onMounted(syncNamespaces)
  onUpdated(syncNamespaces)

  const namespaceRows = [
    { key: 'topLink', label: 'svg > a', namespace: namespaces.value.topLink },
    { key: 'topTitle', label: 'svg > a > title', namespace: namespaces.value.topTitle },
    { key: 'style', label: 'svg > style', namespace: namespaces.value.style },
    { key: 'script', label: 'svg > script', namespace: namespaces.value.script },
    {
      key: 'componentLink',
      label: '组件根 a',
      namespace: namespaces.value.componentLink,
    },
    {
      key: 'componentTitle',
      label: '组件根 title',
      namespace: namespaces.value.componentTitle,
    },
    {
      key: 'htmlLink',
      label: 'foreignObject > a',
      namespace: namespaces.value.htmlLink,
    },
  ]

  return (
    <div className="grid gap-4">
      <p className="text-sm leading-6 opacity-75">
        这个示例展示共享标签在不同父级上下文里的 namespace 传播：
        <span className="font-semibold">a / title / style / script</span>
        在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。
      </p>

      <div className="card bg-base-100 shadow">
        <div className="card-body gap-5">
          <div className="overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4">
            <svg viewBox="0 0 520 240" className="h-auto min-w-[500px] w-full rounded-lg bg-white">
              <style ref={styleRef}>{\`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
\`}</style>
              <script ref={scriptRef}>{'/* namespace only demo */'}<\/script>
              <rect
                x={16}
                y={20}
                width={228}
                height={140}
                rx={18}
                fill="#eff6ff"
                stroke="#93c5fd"
              />
              <rect
                x={272}
                y={20}
                width={228}
                height={140}
                rx={18}
                fill="#f8fafc"
                stroke="#cbd5e1"
              />

              <a ref={topLinkRef} href="#top" className="svg-shared-link">
                <title ref={topTitleRef}>顶层 a/title 在 SVG namespace</title>
                <text x={24} y={48} className="svg-shared-label">
                  顶层共享标签
                </text>
                <text x={24} y={72} className="svg-shared-note">
                  a、title、style、script 都挂在 SVG namespace
                </text>
              </a>

              <SharedSvgLink linkRef={componentLinkRef} titleRef={componentTitleRef} />

              <text x={280} y={48} className="svg-shared-label">
                foreignObject 回退
              </text>
              <text x={280} y={72} className="svg-shared-note">
                里面的 a 会重新变回 HTML namespace
              </text>

              <foreignObject x={280} y={96} width={210} height={64}>
                <div className="flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm">
                  <a
                    ref={htmlLinkRef}
                    href="#html"
                    className="text-sm font-semibold text-blue-600 underline"
                  >
                    foreignObject 内的 HTML 链接
                  </a>
                </div>
              </foreignObject>
            </svg>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {namespaceRows.map(row => (
              <div
                key={row.key}
                className="rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm"
              >
                <div className="text-sm font-semibold text-base-content">{row.label}</div>
                <span className={\`badge mt-2 \${namespaceBadgeClassName(row.namespace)}\`}>
                  {formatNamespaceLabel(row.namespace)}
                </span>
                <div className="mt-2 break-all text-xs leading-5 opacity-60">
                  {row.namespace || '节点当前未挂载'}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs leading-5 opacity-60">
            说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。
          </p>
        </div>
      </div>
    </div>
  )
}

export default SVGSharedNamespaceDemo
`,A=()=>u(e=>{let t=n(),i=s(`rue:component:anchor`);r(t,i);let a=_(O,{});return f(()=>{let e=_(S,{title:`SVG 共享标签命名空间`,source:k,codeCardClassName:`h-[640px] md:h-[760px]`,children:a});y(()=>p(e,t,i))}),t});export{A as default};
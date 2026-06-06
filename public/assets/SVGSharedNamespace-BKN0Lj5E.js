import{$ as e,B as t,Ct as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,ht as d,i as f,l as p,o as m,r as h,s as g,t as _,wt as v,yt as y}from"./vapor-runtime-C1rlwc61.js";import{a as b,n as ee,t as x}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as S}from"./ExamplePlayground-CBXAZwhN.js";var C=`http://www.w3.org/2000/svg`,w=`http://www.w3.org/1999/xhtml`,T=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),E=e=>e?.namespaceURI??``,D=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,te=e=>e===C?`SVG`:e===w?`HTML`:e?`其他`:`未挂载`,ne=e=>e===C?`badge-info`:e===w?`badge-success`:`badge-ghost`,re=n=>p(r=>{let a=c(`a`,r),o=x(a,()=>n.linkRef);h(()=>{o()}),l(a,`href`,`#component`),e(a,`svg-shared-link`);let s=c(`title`,a);t(a,s);let u=x(s,()=>n.titleRef);h(()=>{u()}),t(s,i(`组件根 a/title 也会继承 SVG namespace`));let d=c(`text`,a);t(a,d),l(d,`x`,`24`),l(d,`y`,`112`),e(d,`svg-shared-label`),t(d,i(`组件根共享标签`));let f=c(`text`,a);return t(a,f),l(f,`x`,`24`),l(f,`y`,`136`),e(f,`svg-shared-note`),t(f,i(`这个 a/title 来自单独组件`)),a}),O=()=>{let{topLinkRef:S,topTitleRef:C,styleRef:w,scriptRef:O,componentLinkRef:k,componentTitleRef:A,htmlLinkRef:j,namespaces:M,syncNamespaces:N,namespaceRows:P}=b(`useSetup:0:0`,()=>v(()=>{let e=b(`useRef:1:0`,()=>n()),t=b(`useRef:1:1`,()=>n()),r=b(`useRef:1:2`,()=>n()),i=b(`useRef:1:3`,()=>n()),a=b(`useRef:1:4`,()=>n()),o=b(`useRef:1:5`,()=>n()),s=b(`useRef:1:6`,()=>n()),c=b(`ref:1:7`,()=>d(T())),l=()=>{let n={topLink:E(e.current),topTitle:E(t.current),style:E(r.current),script:E(i.current),componentLink:E(a.current),componentTitle:E(o.current),htmlLink:E(s.current)};D(c.value,n)||(c.value=n)};return f(l),m(l),{topLinkRef:e,topTitleRef:t,styleRef:r,scriptRef:i,componentLinkRef:a,componentTitleRef:o,htmlLinkRef:s,namespaces:c,syncNamespaces:l,namespaceRows:[{key:`topLink`,label:`svg > a`,namespace:c.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:c.value.topTitle},{key:`style`,label:`svg > style`,namespace:c.value.style},{key:`script`,label:`svg > script`,namespace:c.value.script},{key:`componentLink`,label:`组件根 a`,namespace:c.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:c.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:c.value.htmlLink}]}}));return p(n=>{let d=c(`div`,n);e(d,`grid gap-4`);let f=c(`p`,d);t(d,f),e(f,`text-sm leading-6 opacity-75`),t(f,i(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let m=c(`span`,f);t(f,m),e(m,`font-semibold`),t(m,i(`a / title / style / script`)),t(f,i(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let v=c(`div`,d);t(d,v),e(v,`card bg-base-100 shadow`);let b=c(`div`,v);t(v,b),e(b,`card-body gap-5`);let T=c(`div`,b);t(b,T),e(T,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=c(`svg`,T);t(T,E),l(E,`viewBox`,`0 0 520 240`),e(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=c(`style`,E);t(E,D);let M=x(D,()=>w);h(()=>{M()}),r(()=>{u(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let N=c(`script`,E);t(E,N);let F=x(N,()=>O);h(()=>{F()});let I=o(N);t(N,I),u(I,`/* namespace only demo */`);let L=c(`rect`,E);t(E,L),l(L,`x`,`16`),l(L,`y`,`20`),l(L,`width`,`228`),l(L,`height`,`140`),l(L,`rx`,`18`),l(L,`fill`,`#eff6ff`),l(L,`stroke`,`#93c5fd`);let R=c(`rect`,E);t(E,R),l(R,`x`,`272`),l(R,`y`,`20`),l(R,`width`,`228`),l(R,`height`,`140`),l(R,`rx`,`18`),l(R,`fill`,`#f8fafc`),l(R,`stroke`,`#cbd5e1`);let z=c(`a`,E);t(E,z);let ie=x(z,()=>S);h(()=>{ie()}),l(z,`href`,`#top`),e(z,`svg-shared-link`);let B=c(`title`,z);t(z,B);let ae=x(B,()=>C);h(()=>{ae()}),t(B,i(`顶层 a/title 在 SVG namespace`));let V=c(`text`,z);t(z,V),l(V,`x`,`24`),l(V,`y`,`48`),e(V,`svg-shared-label`),t(V,i(`顶层共享标签`));let H=c(`text`,z);t(z,H),l(H,`x`,`24`),l(H,`y`,`72`),e(H,`svg-shared-note`),t(H,i(`a、title、style、script 都挂在 SVG namespace`));let U=a(`rue:component:anchor`);t(E,U),r(()=>{let e=_(re,{linkRef:k,titleRef:A});y(()=>g(e,E,U))});let W=c(`text`,E);t(E,W),l(W,`x`,`280`),l(W,`y`,`48`),e(W,`svg-shared-label`),t(W,i(`foreignObject 回退`));let G=c(`text`,E);t(E,G),l(G,`x`,`280`),l(G,`y`,`72`),e(G,`svg-shared-note`),t(G,i(`里面的 a 会重新变回 HTML namespace`));let K=c(`foreignObject`,E);t(E,K),l(K,`x`,`280`),l(K,`y`,`96`),l(K,`width`,`210`),l(K,`height`,`64`);let q=c(`div`,K);t(K,q),e(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=c(`a`,q);t(q,J);let oe=x(J,()=>j);h(()=>{oe()}),l(J,`href`,`#html`),e(J,`text-sm font-semibold text-blue-600 underline`),t(J,i(`foreignObject 内的 HTML 链接`));let Y=c(`div`,b);t(b,Y),e(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=a(`rue:list:start`),Z=a(`rue:list:end`);t(Y,X),t(Y,Z);let Q=new Map;r(()=>{Q=ee({items:P||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(n,i,o,u,d)=>{g(p(()=>{let i=s(),o=c(`div`,i);t(i,o),r(()=>{l(o,`key`,String(n.key))}),e(o,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let u=c(`div`,o);t(o,u),e(u,`text-sm font-semibold text-base-content`);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let e=n.label;y(()=>g(e,u,d))});let f=c(`span`,o);t(o,f),r(()=>{e(f,String(`badge mt-2 ${ne(n.namespace)}`))});let p=a(`rue:slot:anchor`);t(f,p),r(()=>{let e=te(n.namespace);y(()=>g(e,f,p))});let m=c(`div`,o);t(o,m),e(m,`mt-2 break-all text-xs leading-5 opacity-60`);let h=a(`rue:slot:anchor`);return t(m,h),r(()=>{let e=n.namespace||`节点当前未挂载`;y(()=>g(e,m,h))}),i}),i,o)}})});let $=c(`p`,b);return t(b,$),e($,`text-xs leading-5 opacity-60`),t($,i(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),d})},k=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,A=()=>p(e=>{let n=s(),i=a(`rue:component:anchor`);t(n,i);let o=_(O,{});return r(()=>{let e=_(S,{title:`SVG 共享标签命名空间`,source:k,codeCardClassName:`h-[640px] md:h-[760px]`,children:o});y(()=>g(e,n,i))}),n});export{A as default};
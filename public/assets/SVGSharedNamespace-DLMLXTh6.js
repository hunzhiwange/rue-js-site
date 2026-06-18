import{$ as e,Ht as t,J as n,Kt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,et as u,gt as d,i as f,l as p,o as m,pt as h,qt as g,r as _,s as v,st as y,t as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x,n as ee,t as S}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as C}from"./ExamplePlayground-6EfWP7y3.js";var w=`http://www.w3.org/2000/svg`,T=`http://www.w3.org/1999/xhtml`,E=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),D=e=>e?.namespaceURI??``,O=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,k=e=>e===w?`SVG`:e===T?`HTML`:e?`其他`:`未挂载`,A=e=>e===w?`badge-info`:e===T?`badge-success`:`badge-ghost`,te=t=>p(r=>{let i=a(`a`,r),o=S(i,()=>t.linkRef);_(()=>{o()}),l(i,`href`,`#component`),y(i,`svg-shared-link`);let s=a(`title`,i);n(i,s);let c=S(s,()=>t.titleRef);_(()=>{c()}),n(s,e(`组件根 a/title 也会继承 SVG namespace`));let u=a(`text`,i);n(i,u),l(u,`x`,`24`),l(u,`y`,`112`),y(u,`svg-shared-label`),n(u,e(`组件根共享标签`));let d=a(`text`,i);return n(i,d),l(d,`x`,`24`),l(d,`y`,`136`),y(d,`svg-shared-note`),n(d,e(`这个 a/title 来自单独组件`)),i}),j=()=>{let{topLinkRef:C,topTitleRef:w,styleRef:T,scriptRef:j,componentLinkRef:M,componentTitleRef:N,htmlLinkRef:ne,namespaces:P,syncNamespaces:re,namespaceRows:ie}=x(`useSetup:0:0`,()=>g(()=>{let e=x(`useRef:1:0`,()=>r()),t=x(`useRef:1:1`,()=>r()),n=x(`useRef:1:2`,()=>r()),a=x(`useRef:1:3`,()=>r()),o=x(`useRef:1:4`,()=>r()),s=x(`useRef:1:5`,()=>r()),c=x(`useRef:1:6`,()=>r()),l=x(`ref:1:7`,()=>i(E())),u=()=>{let r={topLink:D(e.current),topTitle:D(t.current),style:D(n.current),script:D(a.current),componentLink:D(o.current),componentTitle:D(s.current),htmlLink:D(c.current)};O(l.value,r)||(l.value=r)};return f(u),m(u),{topLinkRef:e,topTitleRef:t,styleRef:n,scriptRef:a,componentLinkRef:o,componentTitleRef:s,htmlLinkRef:c,namespaces:l,syncNamespaces:u,namespaceRows:x(`computed:1:8`,()=>d(()=>[{key:`topLink`,label:`svg > a`,namespace:l.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:l.value.topTitle},{key:`style`,label:`svg > style`,namespace:l.value.style},{key:`script`,label:`svg > script`,namespace:l.value.script},{key:`componentLink`,label:`组件根 a`,namespace:l.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:l.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:l.value.htmlLink}]))}}));return p(r=>{let i=a(`div`,r);y(i,`grid gap-4`);let d=a(`p`,i);n(i,d),y(d,`text-sm leading-6 opacity-75`),n(d,e(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let f=a(`span`,d);n(d,f),y(f,`font-semibold`),n(f,e(`a / title / style / script`)),n(d,e(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let m=a(`div`,i);n(i,m),y(m,`card bg-base-100 shadow`);let g=a(`div`,m);n(m,g),y(g,`card-body gap-5`);let x=a(`div`,g);n(g,x),y(x,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=a(`svg`,x);n(x,E),l(E,`viewBox`,`0 0 520 240`),y(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=a(`style`,E);n(E,D);let O=S(D,()=>T);_(()=>{O()}),s(()=>{h(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let P=a(`script`,E);n(E,P);let re=S(P,()=>j);_(()=>{re()});let F=u(P);n(P,F),h(F,`/* namespace only demo */`);let I=a(`rect`,E);n(E,I),l(I,`x`,`16`),l(I,`y`,`20`),l(I,`width`,`228`),l(I,`height`,`140`),l(I,`rx`,`18`),l(I,`fill`,`#eff6ff`),l(I,`stroke`,`#93c5fd`);let L=a(`rect`,E);n(E,L),l(L,`x`,`272`),l(L,`y`,`20`),l(L,`width`,`228`),l(L,`height`,`140`),l(L,`rx`,`18`),l(L,`fill`,`#f8fafc`),l(L,`stroke`,`#cbd5e1`);let R=a(`a`,E);n(E,R);let z=S(R,()=>C);_(()=>{z()}),l(R,`href`,`#top`),y(R,`svg-shared-link`);let B=a(`title`,R);n(R,B);let ae=S(B,()=>w);_(()=>{ae()}),n(B,e(`顶层 a/title 在 SVG namespace`));let V=a(`text`,R);n(R,V),l(V,`x`,`24`),l(V,`y`,`48`),y(V,`svg-shared-label`),n(V,e(`顶层共享标签`));let H=a(`text`,R);n(R,H),l(H,`x`,`24`),l(H,`y`,`72`),y(H,`svg-shared-note`),n(H,e(`a、title、style、script 都挂在 SVG namespace`));let U=o(`rue:component:anchor`);n(E,U),s(()=>{let e=b(te,{linkRef:M,titleRef:N});t(()=>v(e,E,U))});let W=a(`text`,E);n(E,W),l(W,`x`,`280`),l(W,`y`,`48`),y(W,`svg-shared-label`),n(W,e(`foreignObject 回退`));let G=a(`text`,E);n(E,G),l(G,`x`,`280`),l(G,`y`,`72`),y(G,`svg-shared-note`),n(G,e(`里面的 a 会重新变回 HTML namespace`));let K=a(`foreignObject`,E);n(E,K),l(K,`x`,`280`),l(K,`y`,`96`),l(K,`width`,`210`),l(K,`height`,`64`);let q=a(`div`,K);n(K,q),y(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=a(`a`,q);n(q,J);let oe=S(J,()=>ne);_(()=>{oe()}),l(J,`href`,`#html`),y(J,`text-sm font-semibold text-blue-600 underline`),n(J,e(`foreignObject 内的 HTML 链接`));let Y=a(`div`,g);n(g,Y),y(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=o(`rue:list:start`),Z=o(`rue:list:end`);n(Y,X),n(Y,Z);let Q=new Map;s(()=>{Q=ee({items:ie.get()||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(e,r,i,u,d)=>{v(p(()=>{let r=c(),i=a(`div`,r);n(r,i),s(()=>{l(i,`key`,String(e.key))}),y(i,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let u=a(`div`,i);n(i,u),y(u,`text-sm font-semibold text-base-content`);let d=o(`rue:slot:anchor`);n(u,d),s(()=>{let n=e.label;t(()=>v(n,u,d))});let f=a(`span`,i);n(i,f),s(()=>{y(f,`badge mt-2 ${A(e.namespace)}`)});let p=o(`rue:slot:anchor`);n(f,p),s(()=>{let n=k(e.namespace);t(()=>v(n,f,p))});let m=a(`div`,i);n(i,m),y(m,`mt-2 break-all text-xs leading-5 opacity-60`);let h=o(`rue:slot:anchor`);return n(m,h),s(()=>{let n=e.namespace||`节点当前未挂载`;t(()=>v(n,m,h))}),r}),r,i)}})});let $=a(`p`,g);return n(g,$),y($,`text-xs leading-5 opacity-60`),n($,e(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),i})},M=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,N=()=>p(e=>{let r=c(),i=o(`rue:component:anchor`);n(r,i);let a=b(j,{});return s(()=>{let e=b(C,{title:`SVG 共享标签命名空间`,source:M,codeCardClassName:`h-[640px] md:h-[760px]`,children:a});t(()=>v(e,r,i))}),r});export{N as default};
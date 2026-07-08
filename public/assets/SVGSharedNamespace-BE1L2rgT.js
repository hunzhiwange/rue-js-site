import{Q as e,Vt as t,Xt as n,a as r,an as i,at as a,bt as o,dt as s,it as c,l,n as u,nt as d,o as f,on as p,pt as m,r as h,rt as g,t as _,tn as v,tt as y,wt as b}from"./vapor-runtime-x7F5M-49.js";import{a as x,n as ee,t as S}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as C}from"./ExamplePlayground-CEVrpYcI.js";var w=`http://www.w3.org/2000/svg`,T=`http://www.w3.org/1999/xhtml`,E=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),D=e=>e?.namespaceURI??``,O=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,k=e=>e===w?`SVG`:e===T?`HTML`:e?`其他`:`未挂载`,A=e=>e===w?`badge-info`:e===T?`badge-success`:`badge-ghost`,te=t=>l(n=>{let r=g(`a`,n),i=S(r,()=>t.linkRef);u(()=>{i()}),s(r,`href`,`#component`),m(r,`svg-shared-link`);let a=g(`title`,r);e(r,a);let o=S(a,()=>t.titleRef);u(()=>{o()}),e(a,c(`组件根 a/title 也会继承 SVG namespace`));let l=g(`text`,r);e(r,l),s(l,`x`,`24`),s(l,`y`,`112`),m(l,`svg-shared-label`),e(l,c(`组件根共享标签`));let d=g(`text`,r);return e(r,d),s(d,`x`,`24`),s(d,`y`,`136`),m(d,`svg-shared-note`),e(d,c(`这个 a/title 来自单独组件`)),r}),j=()=>{let{topLinkRef:C,topTitleRef:w,styleRef:T,scriptRef:j,componentLinkRef:M,componentTitleRef:N,htmlLinkRef:ne,namespaces:P,syncNamespaces:re,namespaceRows:ie}=x(`useSetup:0:0`,()=>p(()=>{let e=x(`useRef:1:0`,()=>i()),t=x(`useRef:1:1`,()=>i()),a=x(`useRef:1:2`,()=>i()),o=x(`useRef:1:3`,()=>i()),s=x(`useRef:1:4`,()=>i()),c=x(`useRef:1:5`,()=>i()),l=x(`useRef:1:6`,()=>i()),u=x(`ref:1:7`,()=>n(E())),d=()=>{let n={topLink:D(e.current),topTitle:D(t.current),style:D(a.current),script:D(o.current),componentLink:D(s.current),componentTitle:D(c.current),htmlLink:D(l.current)};O(u.value,n)||(u.value=n)};return h(d),r(d),{topLinkRef:e,topTitleRef:t,styleRef:a,scriptRef:o,componentLinkRef:s,componentTitleRef:c,htmlLinkRef:l,namespaces:u,syncNamespaces:d,namespaceRows:x(`computed:1:8`,()=>b(()=>[{key:`topLink`,label:`svg > a`,namespace:u.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:u.value.topTitle},{key:`style`,label:`svg > style`,namespace:u.value.style},{key:`script`,label:`svg > script`,namespace:u.value.script},{key:`componentLink`,label:`组件根 a`,namespace:u.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:u.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:u.value.htmlLink}]))}}));return l(n=>{let r=g(`div`,n);m(r,`grid gap-4`);let i=g(`p`,r);e(r,i),m(i,`text-sm leading-6 opacity-75`),e(i,c(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let p=g(`span`,i);e(i,p),m(p,`font-semibold`),e(p,c(`a / title / style / script`)),e(i,c(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let h=g(`div`,r);e(r,h),m(h,`card bg-base-100 shadow`);let b=g(`div`,h);e(h,b),m(b,`card-body gap-5`);let x=g(`div`,b);e(b,x),m(x,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=g(`svg`,x);e(x,E),s(E,`viewBox`,`0 0 520 240`),m(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=g(`style`,E);e(E,D);let O=S(D,()=>T);u(()=>{O()}),t(()=>{o(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let P=g(`script`,E);e(E,P);let re=S(P,()=>j);u(()=>{re()});let F=a(P);e(P,F),o(F,`/* namespace only demo */`);let I=g(`rect`,E);e(E,I),s(I,`x`,`16`),s(I,`y`,`20`),s(I,`width`,`228`),s(I,`height`,`140`),s(I,`rx`,`18`),s(I,`fill`,`#eff6ff`),s(I,`stroke`,`#93c5fd`);let L=g(`rect`,E);e(E,L),s(L,`x`,`272`),s(L,`y`,`20`),s(L,`width`,`228`),s(L,`height`,`140`),s(L,`rx`,`18`),s(L,`fill`,`#f8fafc`),s(L,`stroke`,`#cbd5e1`);let R=g(`a`,E);e(E,R);let z=S(R,()=>C);u(()=>{z()}),s(R,`href`,`#top`),m(R,`svg-shared-link`);let B=g(`title`,R);e(R,B);let ae=S(B,()=>w);u(()=>{ae()}),e(B,c(`顶层 a/title 在 SVG namespace`));let V=g(`text`,R);e(R,V),s(V,`x`,`24`),s(V,`y`,`48`),m(V,`svg-shared-label`),e(V,c(`顶层共享标签`));let H=g(`text`,R);e(R,H),s(H,`x`,`24`),s(H,`y`,`72`),m(H,`svg-shared-note`),e(H,c(`a、title、style、script 都挂在 SVG namespace`));let U=y(`rue:component:anchor`);e(E,U),t(()=>{let e=_(te,{linkRef:M,titleRef:N});v(()=>f(e,E,U))});let W=g(`text`,E);e(E,W),s(W,`x`,`280`),s(W,`y`,`48`),m(W,`svg-shared-label`),e(W,c(`foreignObject 回退`));let G=g(`text`,E);e(E,G),s(G,`x`,`280`),s(G,`y`,`72`),m(G,`svg-shared-note`),e(G,c(`里面的 a 会重新变回 HTML namespace`));let K=g(`foreignObject`,E);e(E,K),s(K,`x`,`280`),s(K,`y`,`96`),s(K,`width`,`210`),s(K,`height`,`64`);let q=g(`div`,K);e(K,q),m(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=g(`a`,q);e(q,J);let oe=S(J,()=>ne);u(()=>{oe()}),s(J,`href`,`#html`),m(J,`text-sm font-semibold text-blue-600 underline`),e(J,c(`foreignObject 内的 HTML 链接`));let Y=g(`div`,b);e(b,Y),m(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=y(`rue:list:start`),Z=y(`rue:list:end`);e(Y,X),e(Y,Z);let Q=new Map;t(()=>{Q=ee({items:ie.get()||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(n,r,i,a,o)=>{f(l(()=>{let r=d(),i=g(`div`,r);e(r,i),t(()=>{s(i,`key`,String(n.key))}),m(i,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let a=g(`div`,i);e(i,a),m(a,`text-sm font-semibold text-base-content`);let o=y(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.label;v(()=>f(e,a,o))});let c=g(`span`,i);e(i,c),t(()=>{m(c,`badge mt-2 ${A(n.namespace)}`)});let l=y(`rue:slot:anchor`);e(c,l),t(()=>{let e=k(n.namespace);v(()=>f(e,c,l))});let u=g(`div`,i);e(i,u),m(u,`mt-2 break-all text-xs leading-5 opacity-60`);let p=y(`rue:slot:anchor`);return e(u,p),t(()=>{let e=n.namespace||`节点当前未挂载`;v(()=>f(e,u,p))}),r}),r,i)}})});let $=g(`p`,b);return e(b,$),m($,`text-xs leading-5 opacity-60`),e($,c(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),r})},M=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,N=()=>l(n=>{let r=d(),i=y(`rue:component:anchor`);e(r,i);let a=_(j,{});return t(()=>{let e=_(C,{title:`SVG 共享标签命名空间`,source:M,codeCardClassName:`h-[640px] md:h-[760px]`,children:a});v(()=>f(e,r,i))}),r});export{N as default};
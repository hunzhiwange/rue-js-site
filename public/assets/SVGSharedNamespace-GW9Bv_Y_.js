import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Yt as a,Z as o,a as s,ct as c,et as l,gt as u,l as d,n as f,nt as p,o as m,r as h,rt as g,t as _,tt as v,ut as y,yt as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x,n as ee,t as S}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as C}from"./ExamplePlayground-DM_o1yyo.js";var w=`http://www.w3.org/2000/svg`,T=`http://www.w3.org/1999/xhtml`,E=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),D=e=>e?.namespaceURI??``,O=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,te=e=>e===w?`SVG`:e===T?`HTML`:e?`其他`:`未挂载`,k=e=>e===w?`badge-info`:e===T?`badge-success`:`badge-ghost`,ne=e=>d(t=>{let n=v(`a`,t),r=S(n,()=>e.linkRef);f(()=>{r()}),c(n,`href`,`#component`),y(n,`svg-shared-link`);let i=v(`title`,n);o(n,i);let a=S(i,()=>e.titleRef);f(()=>{a()}),o(i,p(`组件根 a/title 也会继承 SVG namespace`));let s=v(`text`,n);o(n,s),c(s,`x`,`24`),c(s,`y`,`112`),y(s,`svg-shared-label`),o(s,p(`组件根共享标签`));let l=v(`text`,n);return o(n,l),c(l,`x`,`24`),c(l,`y`,`136`),y(l,`svg-shared-note`),o(l,p(`这个 a/title 来自单独组件`)),n}),A=()=>{let{topLinkRef:C,topTitleRef:w,styleRef:T,scriptRef:A,componentLinkRef:j,componentTitleRef:M,htmlLinkRef:N,namespaces:P,syncNamespaces:re,namespaceRows:ie}=x(`useSetup:0:0`,()=>i(()=>{let e=x(`useRef:1:0`,()=>a()),t=x(`useRef:1:1`,()=>a()),r=x(`useRef:1:2`,()=>a()),i=x(`useRef:1:3`,()=>a()),o=x(`useRef:1:4`,()=>a()),c=x(`useRef:1:5`,()=>a()),l=x(`useRef:1:6`,()=>a()),u=x(`ref:1:7`,()=>n(E())),d=()=>{let n={topLink:D(e.current),topTitle:D(t.current),style:D(r.current),script:D(i.current),componentLink:D(o.current),componentTitle:D(c.current),htmlLink:D(l.current)};O(u.value,n)||(u.value=n)};return h(d),s(d),{topLinkRef:e,topTitleRef:t,styleRef:r,scriptRef:i,componentLinkRef:o,componentTitleRef:c,htmlLinkRef:l,namespaces:u,syncNamespaces:d,namespaceRows:x(`computed:1:8`,()=>b(()=>[{key:`topLink`,label:`svg > a`,namespace:u.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:u.value.topTitle},{key:`style`,label:`svg > style`,namespace:u.value.style},{key:`script`,label:`svg > script`,namespace:u.value.script},{key:`componentLink`,label:`组件根 a`,namespace:u.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:u.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:u.value.htmlLink}]))}}));return d(n=>{let i=v(`div`,n);y(i,`grid gap-4`);let a=v(`p`,i);o(i,a),y(a,`text-sm leading-6 opacity-75`),o(a,p(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let s=v(`span`,a);o(a,s),y(s,`font-semibold`),o(s,p(`a / title / style / script`)),o(a,p(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let h=v(`div`,i);o(i,h),y(h,`card bg-base-100 shadow`);let b=v(`div`,h);o(h,b),y(b,`card-body gap-5`);let x=v(`div`,b);o(b,x),y(x,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=v(`svg`,x);o(x,E),c(E,`viewBox`,`0 0 520 240`),y(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=v(`style`,E);o(E,D);let O=S(D,()=>T);f(()=>{O()}),t(()=>{u(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let P=v(`script`,E);o(E,P);let re=S(P,()=>A);f(()=>{re()});let F=g(P);o(P,F),u(F,`/* namespace only demo */`);let I=v(`rect`,E);o(E,I),c(I,`x`,`16`),c(I,`y`,`20`),c(I,`width`,`228`),c(I,`height`,`140`),c(I,`rx`,`18`),c(I,`fill`,`#eff6ff`),c(I,`stroke`,`#93c5fd`);let L=v(`rect`,E);o(E,L),c(L,`x`,`272`),c(L,`y`,`20`),c(L,`width`,`228`),c(L,`height`,`140`),c(L,`rx`,`18`),c(L,`fill`,`#f8fafc`),c(L,`stroke`,`#cbd5e1`);let R=v(`a`,E);o(E,R);let z=S(R,()=>C);f(()=>{z()}),c(R,`href`,`#top`),y(R,`svg-shared-link`);let B=v(`title`,R);o(R,B);let ae=S(B,()=>w);f(()=>{ae()}),o(B,p(`顶层 a/title 在 SVG namespace`));let V=v(`text`,R);o(R,V),c(V,`x`,`24`),c(V,`y`,`48`),y(V,`svg-shared-label`),o(V,p(`顶层共享标签`));let H=v(`text`,R);o(R,H),c(H,`x`,`24`),c(H,`y`,`72`),y(H,`svg-shared-note`),o(H,p(`a、title、style、script 都挂在 SVG namespace`));let U=e(`rue:component:anchor`);o(E,U),t(()=>{let e=_(ne,{linkRef:j,titleRef:M});r(()=>m(e,E,U))});let W=v(`text`,E);o(E,W),c(W,`x`,`280`),c(W,`y`,`48`),y(W,`svg-shared-label`),o(W,p(`foreignObject 回退`));let G=v(`text`,E);o(E,G),c(G,`x`,`280`),c(G,`y`,`72`),y(G,`svg-shared-note`),o(G,p(`里面的 a 会重新变回 HTML namespace`));let K=v(`foreignObject`,E);o(E,K),c(K,`x`,`280`),c(K,`y`,`96`),c(K,`width`,`210`),c(K,`height`,`64`);let q=v(`div`,K);o(K,q),y(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=v(`a`,q);o(q,J);let oe=S(J,()=>N);f(()=>{oe()}),c(J,`href`,`#html`),y(J,`text-sm font-semibold text-blue-600 underline`),o(J,p(`foreignObject 内的 HTML 链接`));let Y=v(`div`,b);o(b,Y),y(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=e(`rue:list:start`),Z=e(`rue:list:end`);o(Y,X),o(Y,Z);let Q=new Map;t(()=>{Q=ee({items:ie.get()||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(n,i,a,s,u)=>{m(d(()=>{let i=l(),a=v(`div`,i);o(i,a),t(()=>{c(a,`key`,String(n.key))}),y(a,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let s=v(`div`,a);o(a,s),y(s,`text-sm font-semibold text-base-content`);let u=e(`rue:slot:anchor`);o(s,u),t(()=>{let e=n.label;r(()=>m(e,s,u))});let d=v(`span`,a);o(a,d),t(()=>{y(d,`badge mt-2 ${k(n.namespace)}`)});let f=e(`rue:slot:anchor`);o(d,f),t(()=>{let e=te(n.namespace);r(()=>m(e,d,f))});let p=v(`div`,a);o(a,p),y(p,`mt-2 break-all text-xs leading-5 opacity-60`);let h=e(`rue:slot:anchor`);return o(p,h),t(()=>{let e=n.namespace||`节点当前未挂载`;r(()=>m(e,p,h))}),i}),i,a)}})});let $=v(`p`,b);return o(b,$),y($,`text-xs leading-5 opacity-60`),o($,p(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),i})},j=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,M=()=>d(n=>{let i=l(),a=e(`rue:component:anchor`);o(i,a);let s=_(A,{});return t(()=>{let e=_(C,{title:`SVG 共享标签命名空间`,source:j,codeCardClassName:`h-[640px] md:h-[760px]`,children:s});r(()=>m(e,i,a))}),i});export{M as default};
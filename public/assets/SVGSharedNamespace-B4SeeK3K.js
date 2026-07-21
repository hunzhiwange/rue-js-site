import{Cn as e,Ct as t,Lt as n,Mt as r,Sn as i,Tt as a,dt as o,ft as s,ht as c,mt as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{a as h,l as g,n as _,o as v,r as y,t as b}from"./vapor-runtime-ygJWVcNn.js";import{a as x,n as ee,t as S}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as C}from"./ExamplePlayground-DYHfjLP8.js";var w=`http://www.w3.org/2000/svg`,T=`http://www.w3.org/1999/xhtml`,E=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),D=e=>e?.namespaceURI??``,O=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,k=e=>e===w?`SVG`:e===T?`HTML`:e?`其他`:`未挂载`,A=e=>e===w?`badge-info`:e===T?`badge-success`:`badge-ghost`,te=e=>g(n=>{let r=d(`a`,n),i=S(r,()=>e.linkRef);_(()=>{i()}),t(r,`href`,`#component`),a(r,`svg-shared-link`);let o=d(`title`,r);f(r,o);let s=S(o,()=>e.titleRef);_(()=>{s()}),f(o,l(`组件根 a/title 也会继承 SVG namespace`));let c=d(`text`,r);f(r,c),t(c,`x`,`24`),t(c,`y`,`112`),a(c,`svg-shared-label`),f(c,l(`组件根共享标签`));let u=d(`text`,r);return f(r,u),t(u,`x`,`24`),t(u,`y`,`136`),a(u,`svg-shared-note`),f(u,l(`这个 a/title 来自单独组件`)),r}),j=()=>{let{topLinkRef:C,topTitleRef:w,styleRef:T,scriptRef:j,componentLinkRef:M,componentTitleRef:N,htmlLinkRef:ne,namespaces:P,syncNamespaces:re,namespaceRows:ie}=x(`useSetup:0:0`,()=>e(()=>{let e=x(`useRef:1:0`,()=>i()),t=x(`useRef:1:1`,()=>i()),r=x(`useRef:1:2`,()=>i()),a=x(`useRef:1:3`,()=>i()),o=x(`useRef:1:4`,()=>i()),s=x(`useRef:1:5`,()=>i()),c=x(`useRef:1:6`,()=>i()),l=x(`ref:1:7`,()=>u(E())),d=()=>{let n={topLink:D(e.current),topTitle:D(t.current),style:D(r.current),script:D(a.current),componentLink:D(o.current),componentTitle:D(s.current),htmlLink:D(c.current)};O(l.value,n)||(l.value=n)};return y(d),h(d),{topLinkRef:e,topTitleRef:t,styleRef:r,scriptRef:a,componentLinkRef:o,componentTitleRef:s,htmlLinkRef:c,namespaces:l,syncNamespaces:d,namespaceRows:x(`computed:1:8`,()=>n(()=>[{key:`topLink`,label:`svg > a`,namespace:l.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:l.value.topTitle},{key:`style`,label:`svg > style`,namespace:l.value.style},{key:`script`,label:`svg > script`,namespace:l.value.script},{key:`componentLink`,label:`组件根 a`,namespace:l.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:l.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:l.value.htmlLink}]))}}));return g(e=>{let n=d(`div`,e);a(n,`grid gap-4`);let i=d(`p`,n);f(n,i),a(i,`text-sm leading-6 opacity-75`),f(i,l(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let u=d(`span`,i);f(i,u),a(u,`font-semibold`),f(u,l(`a / title / style / script`)),f(i,l(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let h=d(`div`,n);f(n,h),a(h,`card bg-base-100 shadow`);let y=d(`div`,h);f(h,y),a(y,`card-body gap-5`);let x=d(`div`,y);f(y,x),a(x,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=d(`svg`,x);f(x,E),t(E,`viewBox`,`0 0 520 240`),a(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=d(`style`,E);f(E,D);let O=S(D,()=>T);_(()=>{O()}),p(()=>{r(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let P=d(`script`,E);f(E,P);let re=S(P,()=>j);_(()=>{re()});let F=c(P);f(P,F),r(F,`/* namespace only demo */`);let I=d(`rect`,E);f(E,I),t(I,`x`,`16`),t(I,`y`,`20`),t(I,`width`,`228`),t(I,`height`,`140`),t(I,`rx`,`18`),t(I,`fill`,`#eff6ff`),t(I,`stroke`,`#93c5fd`);let L=d(`rect`,E);f(E,L),t(L,`x`,`272`),t(L,`y`,`20`),t(L,`width`,`228`),t(L,`height`,`140`),t(L,`rx`,`18`),t(L,`fill`,`#f8fafc`),t(L,`stroke`,`#cbd5e1`);let R=d(`a`,E);f(E,R);let z=S(R,()=>C);_(()=>{z()}),t(R,`href`,`#top`),a(R,`svg-shared-link`);let B=d(`title`,R);f(R,B);let ae=S(B,()=>w);_(()=>{ae()}),f(B,l(`顶层 a/title 在 SVG namespace`));let V=d(`text`,R);f(R,V),t(V,`x`,`24`),t(V,`y`,`48`),a(V,`svg-shared-label`),f(V,l(`顶层共享标签`));let H=d(`text`,R);f(R,H),t(H,`x`,`24`),t(H,`y`,`72`),a(H,`svg-shared-note`),f(H,l(`a、title、style、script 都挂在 SVG namespace`));let U=o(`rue:component:anchor`);f(E,U),p(()=>{let e=b(te,{linkRef:M,titleRef:N});m(()=>v(e,E,U))});let W=d(`text`,E);f(E,W),t(W,`x`,`280`),t(W,`y`,`48`),a(W,`svg-shared-label`),f(W,l(`foreignObject 回退`));let G=d(`text`,E);f(E,G),t(G,`x`,`280`),t(G,`y`,`72`),a(G,`svg-shared-note`),f(G,l(`里面的 a 会重新变回 HTML namespace`));let K=d(`foreignObject`,E);f(E,K),t(K,`x`,`280`),t(K,`y`,`96`),t(K,`width`,`210`),t(K,`height`,`64`);let q=d(`div`,K);f(K,q),a(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=d(`a`,q);f(q,J);let oe=S(J,()=>ne);_(()=>{oe()}),t(J,`href`,`#html`),a(J,`text-sm font-semibold text-blue-600 underline`),f(J,l(`foreignObject 内的 HTML 链接`));let Y=d(`div`,y);f(y,Y),a(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=o(`rue:list:start`),Z=o(`rue:list:end`);f(Y,X),f(Y,Z);let Q=new Map;p(()=>{Q=ee({items:ie.get()||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(e,n,r,i,c)=>{v(g(()=>{let n=s(),r=d(`div`,n);f(n,r),p(()=>{t(r,`key`,String(e.key))}),a(r,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let i=d(`div`,r);f(r,i),a(i,`text-sm font-semibold text-base-content`);let c=o(`rue:slot:anchor`);f(i,c),p(()=>{let t=e.label;m(()=>v(t,i,c))});let l=d(`span`,r);f(r,l),p(()=>{a(l,`badge mt-2 ${A(e.namespace)}`)});let u=o(`rue:slot:anchor`);f(l,u),p(()=>{let t=k(e.namespace);m(()=>v(t,l,u))});let h=d(`div`,r);f(r,h),a(h,`mt-2 break-all text-xs leading-5 opacity-60`);let g=o(`rue:slot:anchor`);return f(h,g),p(()=>{let t=e.namespace||`节点当前未挂载`;m(()=>v(t,h,g))}),n}),n,r)}})});let $=d(`p`,y);return f(y,$),a($,`text-xs leading-5 opacity-60`),f($,l(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),n})},M=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,N=()=>g(e=>{let t=s(),n=o(`rue:component:anchor`);f(t,n);let r=b(j,{});return p(()=>{let e=b(C,{title:`SVG 共享标签命名空间`,source:M,codeCardClassName:`h-[640px] md:h-[760px]`,children:r});m(()=>v(e,t,n))}),t});export{N as default};
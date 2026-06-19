import{$ as e,Jt as t,Q as n,Qt as r,Wt as i,X as a,Yt as o,a as s,et as c,ht as l,l as u,lt as d,n as f,nt as p,o as m,r as h,st as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x,n as S,t as C}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as w}from"./ExamplePlayground-pZPoAT9o.js";var T=`http://www.w3.org/2000/svg`,E=`http://www.w3.org/1999/xhtml`,D=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),O=e=>e?.namespaceURI??``,k=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,ee=e=>e===T?`SVG`:e===E?`HTML`:e?`其他`:`未挂载`,te=e=>e===T?`badge-info`:e===E?`badge-success`:`badge-ghost`,ne=e=>u(t=>{let n=c(`a`,t),r=C(n,()=>e.linkRef);f(()=>{r()}),g(n,`href`,`#component`),d(n,`svg-shared-link`);let i=c(`title`,n);a(n,i);let o=C(i,()=>e.titleRef);f(()=>{o()}),a(i,v(`组件根 a/title 也会继承 SVG namespace`));let s=c(`text`,n);a(n,s),g(s,`x`,`24`),g(s,`y`,`112`),d(s,`svg-shared-label`),a(s,v(`组件根共享标签`));let l=c(`text`,n);return a(n,l),g(l,`x`,`24`),g(l,`y`,`136`),d(l,`svg-shared-note`),a(l,v(`这个 a/title 来自单独组件`)),n}),A=()=>{let{topLinkRef:w,topTitleRef:T,styleRef:E,scriptRef:A,componentLinkRef:j,componentTitleRef:M,htmlLinkRef:re,namespaces:N,syncNamespaces:P,namespaceRows:F}=x(`useSetup:0:0`,()=>o(()=>{let e=x(`useRef:1:0`,()=>t()),n=x(`useRef:1:1`,()=>t()),r=x(`useRef:1:2`,()=>t()),i=x(`useRef:1:3`,()=>t()),a=x(`useRef:1:4`,()=>t()),o=x(`useRef:1:5`,()=>t()),c=x(`useRef:1:6`,()=>t()),l=x(`ref:1:7`,()=>b(D())),u=()=>{let t={topLink:O(e.current),topTitle:O(n.current),style:O(r.current),script:O(i.current),componentLink:O(a.current),componentTitle:O(o.current),htmlLink:O(c.current)};k(l.value,t)||(l.value=t)};return h(u),s(u),{topLinkRef:e,topTitleRef:n,styleRef:r,scriptRef:i,componentLinkRef:a,componentTitleRef:o,htmlLinkRef:c,namespaces:l,syncNamespaces:u,namespaceRows:x(`computed:1:8`,()=>y(()=>[{key:`topLink`,label:`svg > a`,namespace:l.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:l.value.topTitle},{key:`style`,label:`svg > style`,namespace:l.value.style},{key:`script`,label:`svg > script`,namespace:l.value.script},{key:`componentLink`,label:`组件根 a`,namespace:l.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:l.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:l.value.htmlLink}]))}}));return u(t=>{let o=c(`div`,t);d(o,`grid gap-4`);let s=c(`p`,o);a(o,s),d(s,`text-sm leading-6 opacity-75`),a(s,v(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let h=c(`span`,s);a(s,h),d(h,`font-semibold`),a(h,v(`a / title / style / script`)),a(s,v(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let y=c(`div`,o);a(o,y),d(y,`card bg-base-100 shadow`);let b=c(`div`,y);a(y,b),d(b,`card-body gap-5`);let x=c(`div`,b);a(b,x),d(x,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let D=c(`svg`,x);a(x,D),g(D,`viewBox`,`0 0 520 240`),d(D,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let O=c(`style`,D);a(D,O);let k=C(O,()=>E);f(()=>{k()}),r(()=>{l(O,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let N=c(`script`,D);a(D,N);let P=C(N,()=>A);f(()=>{P()});let I=p(N);a(N,I),l(I,`/* namespace only demo */`);let L=c(`rect`,D);a(D,L),g(L,`x`,`16`),g(L,`y`,`20`),g(L,`width`,`228`),g(L,`height`,`140`),g(L,`rx`,`18`),g(L,`fill`,`#eff6ff`),g(L,`stroke`,`#93c5fd`);let R=c(`rect`,D);a(D,R),g(R,`x`,`272`),g(R,`y`,`20`),g(R,`width`,`228`),g(R,`height`,`140`),g(R,`rx`,`18`),g(R,`fill`,`#f8fafc`),g(R,`stroke`,`#cbd5e1`);let z=c(`a`,D);a(D,z);let ie=C(z,()=>w);f(()=>{ie()}),g(z,`href`,`#top`),d(z,`svg-shared-link`);let B=c(`title`,z);a(z,B);let ae=C(B,()=>T);f(()=>{ae()}),a(B,v(`顶层 a/title 在 SVG namespace`));let V=c(`text`,z);a(z,V),g(V,`x`,`24`),g(V,`y`,`48`),d(V,`svg-shared-label`),a(V,v(`顶层共享标签`));let H=c(`text`,z);a(z,H),g(H,`x`,`24`),g(H,`y`,`72`),d(H,`svg-shared-note`),a(H,v(`a、title、style、script 都挂在 SVG namespace`));let U=n(`rue:component:anchor`);a(D,U),r(()=>{let e=_(ne,{linkRef:j,titleRef:M});i(()=>m(e,D,U))});let W=c(`text`,D);a(D,W),g(W,`x`,`280`),g(W,`y`,`48`),d(W,`svg-shared-label`),a(W,v(`foreignObject 回退`));let G=c(`text`,D);a(D,G),g(G,`x`,`280`),g(G,`y`,`72`),d(G,`svg-shared-note`),a(G,v(`里面的 a 会重新变回 HTML namespace`));let K=c(`foreignObject`,D);a(D,K),g(K,`x`,`280`),g(K,`y`,`96`),g(K,`width`,`210`),g(K,`height`,`64`);let q=c(`div`,K);a(K,q),d(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=c(`a`,q);a(q,J);let oe=C(J,()=>re);f(()=>{oe()}),g(J,`href`,`#html`),d(J,`text-sm font-semibold text-blue-600 underline`),a(J,v(`foreignObject 内的 HTML 链接`));let Y=c(`div`,b);a(b,Y),d(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=n(`rue:list:start`),Z=n(`rue:list:end`);a(Y,X),a(Y,Z);let Q=new Map;r(()=>{Q=S({items:F.get()||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(t,o,s,l,f)=>{m(u(()=>{let o=e(),s=c(`div`,o);a(o,s),r(()=>{g(s,`key`,String(t.key))}),d(s,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let l=c(`div`,s);a(s,l),d(l,`text-sm font-semibold text-base-content`);let u=n(`rue:slot:anchor`);a(l,u),r(()=>{let e=t.label;i(()=>m(e,l,u))});let f=c(`span`,s);a(s,f),r(()=>{d(f,`badge mt-2 ${te(t.namespace)}`)});let p=n(`rue:slot:anchor`);a(f,p),r(()=>{let e=ee(t.namespace);i(()=>m(e,f,p))});let h=c(`div`,s);a(s,h),d(h,`mt-2 break-all text-xs leading-5 opacity-60`);let _=n(`rue:slot:anchor`);return a(h,_),r(()=>{let e=t.namespace||`节点当前未挂载`;i(()=>m(e,h,_))}),o}),o,s)}})});let $=c(`p`,b);return a(b,$),d($,`text-xs leading-5 opacity-60`),a($,v(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),o})},j=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,M=()=>u(t=>{let o=e(),s=n(`rue:component:anchor`);a(o,s);let c=_(A,{});return r(()=>{let e=_(w,{title:`SVG 共享标签命名空间`,source:j,codeCardClassName:`h-[640px] md:h-[760px]`,children:c});i(()=>m(e,o,s))}),o});export{M as default};
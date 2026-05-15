import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,c as l,d as u,i as d,l as f,mt as p,o as m,ot as h,pt as g,t as _,ut as v,z as y}from"./vapor-runtime-Bp8DIxJg.js";import{a as b,n as ee,t as x}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as S}from"./ExamplePlayground-CuXhs1gU.js";var C=`http://www.w3.org/2000/svg`,w=`http://www.w3.org/1999/xhtml`,T=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),E=e=>e?.namespaceURI??``,D=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,te=e=>e===C?`SVG`:e===w?`HTML`:e?`其他`:`未挂载`,ne=e=>e===C?`badge-info`:e===w?`badge-success`:`badge-ghost`,re=e=>u(t=>{let a=r(`a`,t),c=x(a,()=>e.linkRef);d(()=>{c()}),s(a,`href`,`#component`),n(a,`svg-shared-link`);let l=r(`title`,a);i(a,l);let u=x(l,()=>e.titleRef);d(()=>{u()}),i(l,o(`组件根 a/title 也会继承 SVG namespace`));let f=r(`text`,a);i(a,f),s(f,`x`,`24`),s(f,`y`,`112`),n(f,`svg-shared-label`),i(f,o(`组件根共享标签`));let p=r(`text`,a);return i(a,p),s(p,`x`,`24`),s(p,`y`,`136`),n(p,`svg-shared-note`),i(p,o(`这个 a/title 来自单独组件`)),a}),O=()=>{let{topLinkRef:S,topTitleRef:C,styleRef:w,scriptRef:O,componentLinkRef:k,componentTitleRef:A,htmlLinkRef:j,namespaces:M,syncNamespaces:N,namespaceRows:P}=b(`useSetup:0:0`,()=>p(()=>{let e=b(`useRef:1:0`,()=>g()),t=b(`useRef:1:1`,()=>g()),n=b(`useRef:1:2`,()=>g()),r=b(`useRef:1:3`,()=>g()),i=b(`useRef:1:4`,()=>g()),a=b(`useRef:1:5`,()=>g()),o=b(`useRef:1:6`,()=>g()),s=b(`ref:1:7`,()=>h(T())),c=()=>{let c={topLink:E(e.current),topTitle:E(t.current),style:E(n.current),script:E(r.current),componentLink:E(i.current),componentTitle:E(a.current),htmlLink:E(o.current)};D(s.value,c)||(s.value=c)};return m(c),l(c),{topLinkRef:e,topTitleRef:t,styleRef:n,scriptRef:r,componentLinkRef:i,componentTitleRef:a,htmlLinkRef:o,namespaces:s,syncNamespaces:c,namespaceRows:[{key:`topLink`,label:`svg > a`,namespace:s.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:s.value.topTitle},{key:`style`,label:`svg > style`,namespace:s.value.style},{key:`script`,label:`svg > script`,namespace:s.value.script},{key:`componentLink`,label:`组件根 a`,namespace:s.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:s.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:s.value.htmlLink}]}}));return u(l=>{let p=r(`div`,l);n(p,`grid gap-4`);let m=r(`p`,p);i(p,m),n(m,`text-sm leading-6 opacity-75`),i(m,o(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let h=r(`span`,m);i(m,h),n(h,`font-semibold`),i(h,o(`a / title / style / script`)),i(m,o(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let g=r(`div`,p);i(p,g),n(g,`card bg-base-100 shadow`);let b=r(`div`,g);i(g,b),n(b,`card-body gap-5`);let T=r(`div`,b);i(b,T),n(T,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=r(`svg`,T);i(T,E),s(E,`viewBox`,`0 0 520 240`),n(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=r(`style`,E);i(E,D);let M=x(D,()=>w);d(()=>{M()}),c(()=>{a(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let N=r(`script`,E);i(E,N);let F=x(N,()=>O);d(()=>{F()});let I=y(N);i(N,I),a(I,`/* namespace only demo */`);let L=r(`rect`,E);i(E,L),s(L,`x`,`16`),s(L,`y`,`20`),s(L,`width`,`228`),s(L,`height`,`140`),s(L,`rx`,`18`),s(L,`fill`,`#eff6ff`),s(L,`stroke`,`#93c5fd`);let R=r(`rect`,E);i(E,R),s(R,`x`,`272`),s(R,`y`,`20`),s(R,`width`,`228`),s(R,`height`,`140`),s(R,`rx`,`18`),s(R,`fill`,`#f8fafc`),s(R,`stroke`,`#cbd5e1`);let z=r(`a`,E);i(E,z);let ie=x(z,()=>S);d(()=>{ie()}),s(z,`href`,`#top`),n(z,`svg-shared-link`);let B=r(`title`,z);i(z,B);let ae=x(B,()=>C);d(()=>{ae()}),i(B,o(`顶层 a/title 在 SVG namespace`));let V=r(`text`,z);i(z,V),s(V,`x`,`24`),s(V,`y`,`48`),n(V,`svg-shared-label`),i(V,o(`顶层共享标签`));let H=r(`text`,z);i(z,H),s(H,`x`,`24`),s(H,`y`,`72`),n(H,`svg-shared-note`),i(H,o(`a、title、style、script 都挂在 SVG namespace`));let U=e(`rue:component:anchor`);i(E,U),c(()=>{let e=_(re,{linkRef:k,titleRef:A});v(()=>f(e,E,U))});let W=r(`text`,E);i(E,W),s(W,`x`,`280`),s(W,`y`,`48`),n(W,`svg-shared-label`),i(W,o(`foreignObject 回退`));let G=r(`text`,E);i(E,G),s(G,`x`,`280`),s(G,`y`,`72`),n(G,`svg-shared-note`),i(G,o(`里面的 a 会重新变回 HTML namespace`));let K=r(`foreignObject`,E);i(E,K),s(K,`x`,`280`),s(K,`y`,`96`),s(K,`width`,`210`),s(K,`height`,`64`);let q=r(`div`,K);i(K,q),n(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=r(`a`,q);i(q,J);let oe=x(J,()=>j);d(()=>{oe()}),s(J,`href`,`#html`),n(J,`text-sm font-semibold text-blue-600 underline`),i(J,o(`foreignObject 内的 HTML 链接`));let Y=r(`div`,b);i(b,Y),n(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=e(`rue:list:start`),Z=e(`rue:list:end`);i(Y,X),i(Y,Z);let Q=new Map;c(()=>{Q=ee({items:P||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(o,l,d,p,m)=>{f(u(()=>{let l=t(),u=r(`div`,l);i(l,u),c(()=>{s(u,`key`,String(o.key))}),n(u,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let d=r(`div`,u);i(u,d),n(d,`text-sm font-semibold text-base-content`);let p=e(`rue:slot:anchor`);i(d,p),c(()=>{let e=o.label;v(()=>f(e,d,p))});let m=r(`span`,u);i(u,m),c(()=>{n(m,String(`badge mt-2 ${ne(o.namespace)}`))});let h=e(`rue:slot:anchor`);i(m,h),c(()=>{let e=te(o.namespace);v(()=>f(e,m,h))});let g=r(`div`,u);i(u,g),n(g,`mt-2 break-all text-xs leading-5 opacity-60`);let _=y(g);return i(g,_),c(()=>{a(_,o.namespace||`节点当前未挂载`)}),l}),l,d)}})});let $=r(`p`,b);return i(b,$),n($,`text-xs leading-5 opacity-60`),i($,o(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),p})},k=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
              <rect x={16} y={20} width={228} height={140} rx={18} fill="#eff6ff" stroke="#93c5fd" />
              <rect x={272} y={20} width={228} height={140} rx={18} fill="#f8fafc" stroke="#cbd5e1" />

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
                  <a ref={htmlLinkRef} href="#html" className="text-sm font-semibold text-blue-600 underline">
                    foreignObject 内的 HTML 链接
                  </a>
                </div>
              </foreignObject>
            </svg>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {namespaceRows.map(row => (
              <div key={row.key} className="rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm">
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

export default SVGSharedNamespaceDemo`,A=()=>u(n=>{let r=t(),a=e(`rue:component:anchor`);i(r,a);let o=_(O,{});return c(()=>{let e=_(S,{title:`SVG 共享标签命名空间`,source:k,codeCardClassName:`h-[640px] md:h-[760px]`,children:o});v(()=>f(e,r,a))}),r});export{A as default};
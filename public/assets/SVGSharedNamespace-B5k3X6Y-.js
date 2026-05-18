import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,c,d as l,dt as u,ht as d,i as f,l as p,mt as m,o as h,st as g,t as _,vt as v,z as ee}from"./vapor-runtime-BuwLbCGk.js";import{a as y,n as te,t as b}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as x}from"./ExamplePlayground-BbTxw6La.js";var S=`http://www.w3.org/2000/svg`,C=`http://www.w3.org/1999/xhtml`,w=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),T=e=>e?.namespaceURI??``,E=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,ne=e=>e===S?`SVG`:e===C?`HTML`:e?`其他`:`未挂载`,re=e=>e===S?`badge-info`:e===C?`badge-success`:`badge-ghost`,ie=e=>l(t=>{let a=r(`a`,t),c=b(a,()=>e.linkRef);f(()=>{c()}),s(a,`href`,`#component`),n(a,`svg-shared-link`);let l=r(`title`,a);i(a,l);let u=b(l,()=>e.titleRef);f(()=>{u()}),i(l,o(`组件根 a/title 也会继承 SVG namespace`));let d=r(`text`,a);i(a,d),s(d,`x`,`24`),s(d,`y`,`112`),n(d,`svg-shared-label`),i(d,o(`组件根共享标签`));let p=r(`text`,a);return i(a,p),s(p,`x`,`24`),s(p,`y`,`136`),n(p,`svg-shared-note`),i(p,o(`这个 a/title 来自单独组件`)),a}),D=()=>{let{topLinkRef:x,topTitleRef:S,styleRef:C,scriptRef:D,componentLinkRef:O,componentTitleRef:k,htmlLinkRef:A,namespaces:j,syncNamespaces:M,namespaceRows:N}=y(`useSetup:0:0`,()=>d(()=>{let e=y(`useRef:1:0`,()=>m()),t=y(`useRef:1:1`,()=>m()),n=y(`useRef:1:2`,()=>m()),r=y(`useRef:1:3`,()=>m()),i=y(`useRef:1:4`,()=>m()),a=y(`useRef:1:5`,()=>m()),o=y(`useRef:1:6`,()=>m()),s=y(`ref:1:7`,()=>g(w())),l=()=>{let c={topLink:T(e.current),topTitle:T(t.current),style:T(n.current),script:T(r.current),componentLink:T(i.current),componentTitle:T(a.current),htmlLink:T(o.current)};E(s.value,c)||(s.value=c)};return h(l),c(l),{topLinkRef:e,topTitleRef:t,styleRef:n,scriptRef:r,componentLinkRef:i,componentTitleRef:a,htmlLinkRef:o,namespaces:s,syncNamespaces:l,namespaceRows:[{key:`topLink`,label:`svg > a`,namespace:s.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:s.value.topTitle},{key:`style`,label:`svg > style`,namespace:s.value.style},{key:`script`,label:`svg > script`,namespace:s.value.script},{key:`componentLink`,label:`组件根 a`,namespace:s.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:s.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:s.value.htmlLink}]}}));return l(c=>{let d=r(`div`,c);n(d,`grid gap-4`);let m=r(`p`,d);i(d,m),n(m,`text-sm leading-6 opacity-75`),i(m,o(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let h=r(`span`,m);i(m,h),n(h,`font-semibold`),i(h,o(`a / title / style / script`)),i(m,o(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let g=r(`div`,d);i(d,g),n(g,`card bg-base-100 shadow`);let y=r(`div`,g);i(g,y),n(y,`card-body gap-5`);let w=r(`div`,y);i(y,w),n(w,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let T=r(`svg`,w);i(w,T),s(T,`viewBox`,`0 0 520 240`),n(T,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let E=r(`style`,T);i(T,E);let j=b(E,()=>C);f(()=>{j()}),v(()=>{a(E,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let M=r(`script`,T);i(T,M);let P=b(M,()=>D);f(()=>{P()});let F=ee(M);i(M,F),a(F,`/* namespace only demo */`);let I=r(`rect`,T);i(T,I),s(I,`x`,`16`),s(I,`y`,`20`),s(I,`width`,`228`),s(I,`height`,`140`),s(I,`rx`,`18`),s(I,`fill`,`#eff6ff`),s(I,`stroke`,`#93c5fd`);let L=r(`rect`,T);i(T,L),s(L,`x`,`272`),s(L,`y`,`20`),s(L,`width`,`228`),s(L,`height`,`140`),s(L,`rx`,`18`),s(L,`fill`,`#f8fafc`),s(L,`stroke`,`#cbd5e1`);let R=r(`a`,T);i(T,R);let z=b(R,()=>x);f(()=>{z()}),s(R,`href`,`#top`),n(R,`svg-shared-link`);let B=r(`title`,R);i(R,B);let ae=b(B,()=>S);f(()=>{ae()}),i(B,o(`顶层 a/title 在 SVG namespace`));let V=r(`text`,R);i(R,V),s(V,`x`,`24`),s(V,`y`,`48`),n(V,`svg-shared-label`),i(V,o(`顶层共享标签`));let H=r(`text`,R);i(R,H),s(H,`x`,`24`),s(H,`y`,`72`),n(H,`svg-shared-note`),i(H,o(`a、title、style、script 都挂在 SVG namespace`));let U=e(`rue:component:anchor`);i(T,U),v(()=>{let e=_(ie,{linkRef:O,titleRef:k});u(()=>p(e,T,U))});let W=r(`text`,T);i(T,W),s(W,`x`,`280`),s(W,`y`,`48`),n(W,`svg-shared-label`),i(W,o(`foreignObject 回退`));let G=r(`text`,T);i(T,G),s(G,`x`,`280`),s(G,`y`,`72`),n(G,`svg-shared-note`),i(G,o(`里面的 a 会重新变回 HTML namespace`));let K=r(`foreignObject`,T);i(T,K),s(K,`x`,`280`),s(K,`y`,`96`),s(K,`width`,`210`),s(K,`height`,`64`);let q=r(`div`,K);i(K,q),n(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=r(`a`,q);i(q,J);let oe=b(J,()=>A);f(()=>{oe()}),s(J,`href`,`#html`),n(J,`text-sm font-semibold text-blue-600 underline`),i(J,o(`foreignObject 内的 HTML 链接`));let Y=r(`div`,y);i(y,Y),n(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=e(`rue:list:start`),Z=e(`rue:list:end`);i(Y,X),i(Y,Z);let Q=new Map;v(()=>{Q=te({items:N||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(a,o,c,d,f)=>{p(l(()=>{let o=t(),c=r(`div`,o);i(o,c),v(()=>{s(c,`key`,String(a.key))}),n(c,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let l=r(`div`,c);i(c,l),n(l,`text-sm font-semibold text-base-content`);let d=e(`rue:slot:anchor`);i(l,d),v(()=>{let e=a.label;u(()=>p(e,l,d))});let f=r(`span`,c);i(c,f),v(()=>{n(f,String(`badge mt-2 ${re(a.namespace)}`))});let m=e(`rue:slot:anchor`);i(f,m),v(()=>{let e=ne(a.namespace);u(()=>p(e,f,m))});let h=r(`div`,c);i(c,h),n(h,`mt-2 break-all text-xs leading-5 opacity-60`);let g=e(`rue:slot:anchor`);return i(h,g),v(()=>{let e=a.namespace||`节点当前未挂载`;u(()=>p(e,h,g))}),o}),o,c)}})});let $=r(`p`,y);return i(y,$),n($,`text-xs leading-5 opacity-60`),i($,o(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),d})},O=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,k=()=>l(n=>{let r=t(),a=e(`rue:component:anchor`);i(r,a);let o=_(D,{});return v(()=>{let e=_(x,{title:`SVG 共享标签命名空间`,source:O,codeCardClassName:`h-[640px] md:h-[760px]`,children:o});u(()=>p(e,r,a))}),r});export{k as default};
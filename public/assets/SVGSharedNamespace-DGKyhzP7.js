import{$ as e,Gt as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,i as d,l as f,mt as p,o as m,ot as h,r as g,s as _,t as v,tt as ee}from"./vapor-runtime-DHPuOjqh.js";import{a as y,n as te,t as b}from"./vapor-helpers-vapor-CJFAWine.js";import{t as x}from"./ExamplePlayground-DVlKF6tZ.js";var S=`http://www.w3.org/2000/svg`,C=`http://www.w3.org/1999/xhtml`,w=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),T=e=>e?.namespaceURI??``,E=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,ne=e=>e===S?`SVG`:e===C?`HTML`:e?`其他`:`未挂载`,re=e=>e===S?`badge-info`:e===C?`badge-success`:`badge-ghost`,ie=t=>f(n=>{let r=e(`a`,n),i=b(r,()=>t.linkRef);g(()=>{i()}),h(r,`href`,`#component`),l(r,`svg-shared-link`);let a=e(`title`,r);o(r,a);let s=b(a,()=>t.titleRef);g(()=>{s()}),o(a,u(`组件根 a/title 也会继承 SVG namespace`));let c=e(`text`,r);o(r,c),h(c,`x`,`24`),h(c,`y`,`112`),l(c,`svg-shared-label`),o(c,u(`组件根共享标签`));let d=e(`text`,r);return o(r,d),h(d,`x`,`24`),h(d,`y`,`136`),l(d,`svg-shared-note`),o(d,u(`这个 a/title 来自单独组件`)),r}),D=()=>{let{topLinkRef:x,topTitleRef:S,styleRef:C,scriptRef:D,componentLinkRef:O,componentTitleRef:k,htmlLinkRef:A,namespaces:j,syncNamespaces:M,namespaceRows:N}=y(`useSetup:0:0`,()=>n(()=>{let e=y(`useRef:1:0`,()=>t()),n=y(`useRef:1:1`,()=>t()),i=y(`useRef:1:2`,()=>t()),a=y(`useRef:1:3`,()=>t()),o=y(`useRef:1:4`,()=>t()),s=y(`useRef:1:5`,()=>t()),c=y(`useRef:1:6`,()=>t()),l=y(`ref:1:7`,()=>r(w())),u=()=>{let t={topLink:T(e.current),topTitle:T(n.current),style:T(i.current),script:T(a.current),componentLink:T(o.current),componentTitle:T(s.current),htmlLink:T(c.current)};E(l.value,t)||(l.value=t)};return d(u),m(u),{topLinkRef:e,topTitleRef:n,styleRef:i,scriptRef:a,componentLinkRef:o,componentTitleRef:s,htmlLinkRef:c,namespaces:l,syncNamespaces:u,namespaceRows:[{key:`topLink`,label:`svg > a`,namespace:l.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:l.value.topTitle},{key:`style`,label:`svg > style`,namespace:l.value.style},{key:`script`,label:`svg > script`,namespace:l.value.script},{key:`componentLink`,label:`组件根 a`,namespace:l.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:l.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:l.value.htmlLink}]}}));return f(t=>{let n=e(`div`,t);l(n,`grid gap-4`);let r=e(`p`,n);o(n,r),l(r,`text-sm leading-6 opacity-75`),o(r,u(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let d=e(`span`,r);o(r,d),l(d,`font-semibold`),o(d,u(`a / title / style / script`)),o(r,u(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let m=e(`div`,n);o(n,m),l(m,`card bg-base-100 shadow`);let y=e(`div`,m);o(m,y),l(y,`card-body gap-5`);let w=e(`div`,y);o(y,w),l(w,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let T=e(`svg`,w);o(w,T),h(T,`viewBox`,`0 0 520 240`),l(T,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let E=e(`style`,T);o(T,E);let j=b(E,()=>C);g(()=>{j()}),s(()=>{p(E,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let M=e(`script`,T);o(T,M);let P=b(M,()=>D);g(()=>{P()});let F=ee(M);o(M,F),p(F,`/* namespace only demo */`);let I=e(`rect`,T);o(T,I),h(I,`x`,`16`),h(I,`y`,`20`),h(I,`width`,`228`),h(I,`height`,`140`),h(I,`rx`,`18`),h(I,`fill`,`#eff6ff`),h(I,`stroke`,`#93c5fd`);let L=e(`rect`,T);o(T,L),h(L,`x`,`272`),h(L,`y`,`20`),h(L,`width`,`228`),h(L,`height`,`140`),h(L,`rx`,`18`),h(L,`fill`,`#f8fafc`),h(L,`stroke`,`#cbd5e1`);let R=e(`a`,T);o(T,R);let z=b(R,()=>x);g(()=>{z()}),h(R,`href`,`#top`),l(R,`svg-shared-link`);let B=e(`title`,R);o(R,B);let ae=b(B,()=>S);g(()=>{ae()}),o(B,u(`顶层 a/title 在 SVG namespace`));let V=e(`text`,R);o(R,V),h(V,`x`,`24`),h(V,`y`,`48`),l(V,`svg-shared-label`),o(V,u(`顶层共享标签`));let H=e(`text`,R);o(R,H),h(H,`x`,`24`),h(H,`y`,`72`),l(H,`svg-shared-note`),o(H,u(`a、title、style、script 都挂在 SVG namespace`));let U=c(`rue:component:anchor`);o(T,U),s(()=>{let e=v(ie,{linkRef:O,titleRef:k});a(()=>_(e,T,U))});let W=e(`text`,T);o(T,W),h(W,`x`,`280`),h(W,`y`,`48`),l(W,`svg-shared-label`),o(W,u(`foreignObject 回退`));let G=e(`text`,T);o(T,G),h(G,`x`,`280`),h(G,`y`,`72`),l(G,`svg-shared-note`),o(G,u(`里面的 a 会重新变回 HTML namespace`));let K=e(`foreignObject`,T);o(T,K),h(K,`x`,`280`),h(K,`y`,`96`),h(K,`width`,`210`),h(K,`height`,`64`);let q=e(`div`,K);o(K,q),l(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=e(`a`,q);o(q,J);let oe=b(J,()=>A);g(()=>{oe()}),h(J,`href`,`#html`),l(J,`text-sm font-semibold text-blue-600 underline`),o(J,u(`foreignObject 内的 HTML 链接`));let Y=e(`div`,y);o(y,Y),l(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=c(`rue:list:start`),Z=c(`rue:list:end`);o(Y,X),o(Y,Z);let Q=new Map;s(()=>{Q=te({items:N||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(t,n,r,u,d)=>{_(f(()=>{let n=i(),r=e(`div`,n);o(n,r),s(()=>{h(r,`key`,String(t.key))}),l(r,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let u=e(`div`,r);o(r,u),l(u,`text-sm font-semibold text-base-content`);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.label;a(()=>_(e,u,d))});let f=e(`span`,r);o(r,f),s(()=>{l(f,String(`badge mt-2 ${re(t.namespace)}`))});let p=c(`rue:slot:anchor`);o(f,p),s(()=>{let e=ne(t.namespace);a(()=>_(e,f,p))});let m=e(`div`,r);o(r,m),l(m,`mt-2 break-all text-xs leading-5 opacity-60`);let g=c(`rue:slot:anchor`);return o(m,g),s(()=>{let e=t.namespace||`节点当前未挂载`;a(()=>_(e,m,g))}),n}),n,r)}})});let $=e(`p`,y);return o(y,$),l($,`text-xs leading-5 opacity-60`),o($,u(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),n})},O=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,k=()=>f(e=>{let t=i(),n=c(`rue:component:anchor`);o(t,n);let r=v(D,{});return s(()=>{let e=v(x,{title:`SVG 共享标签命名空间`,source:O,codeCardClassName:`h-[640px] md:h-[760px]`,children:r});a(()=>_(e,t,n))}),t});export{k as default};
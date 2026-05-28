import{$ as e,Gt as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,c as l,ct as u,d,et as f,i as p,l as m,mt as h,o as g,ot as _,t as v,tt as ee}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as te,t as b}from"./vapor-helpers-vapor-DkadWylb.js";import{t as x}from"./ExamplePlayground-C0Is7L_T.js";var S=`http://www.w3.org/2000/svg`,C=`http://www.w3.org/1999/xhtml`,w=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),T=e=>e?.namespaceURI??``,E=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,ne=e=>e===S?`SVG`:e===C?`HTML`:e?`其他`:`未挂载`,re=e=>e===S?`badge-info`:e===C?`badge-success`:`badge-ghost`,ie=t=>d(n=>{let r=e(`a`,n),i=b(r,()=>t.linkRef);p(()=>{i()}),_(r,`href`,`#component`),u(r,`svg-shared-link`);let a=e(`title`,r);o(r,a);let s=b(a,()=>t.titleRef);p(()=>{s()}),o(a,f(`组件根 a/title 也会继承 SVG namespace`));let c=e(`text`,r);o(r,c),_(c,`x`,`24`),_(c,`y`,`112`),u(c,`svg-shared-label`),o(c,f(`组件根共享标签`));let l=e(`text`,r);return o(r,l),_(l,`x`,`24`),_(l,`y`,`136`),u(l,`svg-shared-note`),o(l,f(`这个 a/title 来自单独组件`)),r}),D=()=>{let{topLinkRef:x,topTitleRef:S,styleRef:C,scriptRef:D,componentLinkRef:O,componentTitleRef:k,htmlLinkRef:A,namespaces:j,syncNamespaces:M,namespaceRows:N}=y(`useSetup:0:0`,()=>n(()=>{let e=y(`useRef:1:0`,()=>t()),n=y(`useRef:1:1`,()=>t()),i=y(`useRef:1:2`,()=>t()),a=y(`useRef:1:3`,()=>t()),o=y(`useRef:1:4`,()=>t()),s=y(`useRef:1:5`,()=>t()),c=y(`useRef:1:6`,()=>t()),u=y(`ref:1:7`,()=>r(w())),d=()=>{let t={topLink:T(e.current),topTitle:T(n.current),style:T(i.current),script:T(a.current),componentLink:T(o.current),componentTitle:T(s.current),htmlLink:T(c.current)};E(u.value,t)||(u.value=t)};return g(d),l(d),{topLinkRef:e,topTitleRef:n,styleRef:i,scriptRef:a,componentLinkRef:o,componentTitleRef:s,htmlLinkRef:c,namespaces:u,syncNamespaces:d,namespaceRows:[{key:`topLink`,label:`svg > a`,namespace:u.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:u.value.topTitle},{key:`style`,label:`svg > style`,namespace:u.value.style},{key:`script`,label:`svg > script`,namespace:u.value.script},{key:`componentLink`,label:`组件根 a`,namespace:u.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:u.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:u.value.htmlLink}]}}));return d(t=>{let n=e(`div`,t);u(n,`grid gap-4`);let r=e(`p`,n);o(n,r),u(r,`text-sm leading-6 opacity-75`),o(r,f(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let l=e(`span`,r);o(r,l),u(l,`font-semibold`),o(l,f(`a / title / style / script`)),o(r,f(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let g=e(`div`,n);o(n,g),u(g,`card bg-base-100 shadow`);let y=e(`div`,g);o(g,y),u(y,`card-body gap-5`);let w=e(`div`,y);o(y,w),u(w,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let T=e(`svg`,w);o(w,T),_(T,`viewBox`,`0 0 520 240`),u(T,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let E=e(`style`,T);o(T,E);let j=b(E,()=>C);p(()=>{j()}),s(()=>{h(E,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let M=e(`script`,T);o(T,M);let P=b(M,()=>D);p(()=>{P()});let F=ee(M);o(M,F),h(F,`/* namespace only demo */`);let I=e(`rect`,T);o(T,I),_(I,`x`,`16`),_(I,`y`,`20`),_(I,`width`,`228`),_(I,`height`,`140`),_(I,`rx`,`18`),_(I,`fill`,`#eff6ff`),_(I,`stroke`,`#93c5fd`);let L=e(`rect`,T);o(T,L),_(L,`x`,`272`),_(L,`y`,`20`),_(L,`width`,`228`),_(L,`height`,`140`),_(L,`rx`,`18`),_(L,`fill`,`#f8fafc`),_(L,`stroke`,`#cbd5e1`);let R=e(`a`,T);o(T,R);let z=b(R,()=>x);p(()=>{z()}),_(R,`href`,`#top`),u(R,`svg-shared-link`);let B=e(`title`,R);o(R,B);let ae=b(B,()=>S);p(()=>{ae()}),o(B,f(`顶层 a/title 在 SVG namespace`));let V=e(`text`,R);o(R,V),_(V,`x`,`24`),_(V,`y`,`48`),u(V,`svg-shared-label`),o(V,f(`顶层共享标签`));let H=e(`text`,R);o(R,H),_(H,`x`,`24`),_(H,`y`,`72`),u(H,`svg-shared-note`),o(H,f(`a、title、style、script 都挂在 SVG namespace`));let U=c(`rue:component:anchor`);o(T,U),s(()=>{let e=v(ie,{linkRef:O,titleRef:k});a(()=>m(e,T,U))});let W=e(`text`,T);o(T,W),_(W,`x`,`280`),_(W,`y`,`48`),u(W,`svg-shared-label`),o(W,f(`foreignObject 回退`));let G=e(`text`,T);o(T,G),_(G,`x`,`280`),_(G,`y`,`72`),u(G,`svg-shared-note`),o(G,f(`里面的 a 会重新变回 HTML namespace`));let K=e(`foreignObject`,T);o(T,K),_(K,`x`,`280`),_(K,`y`,`96`),_(K,`width`,`210`),_(K,`height`,`64`);let q=e(`div`,K);o(K,q),u(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=e(`a`,q);o(q,J);let oe=b(J,()=>A);p(()=>{oe()}),_(J,`href`,`#html`),u(J,`text-sm font-semibold text-blue-600 underline`),o(J,f(`foreignObject 内的 HTML 链接`));let Y=e(`div`,y);o(y,Y),u(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=c(`rue:list:start`),Z=c(`rue:list:end`);o(Y,X),o(Y,Z);let Q=new Map;s(()=>{Q=te({items:N||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(t,n,r,l,f)=>{m(d(()=>{let n=i(),r=e(`div`,n);o(n,r),s(()=>{_(r,`key`,String(t.key))}),u(r,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let l=e(`div`,r);o(r,l),u(l,`text-sm font-semibold text-base-content`);let d=c(`rue:slot:anchor`);o(l,d),s(()=>{let e=t.label;a(()=>m(e,l,d))});let f=e(`span`,r);o(r,f),s(()=>{u(f,String(`badge mt-2 ${re(t.namespace)}`))});let p=c(`rue:slot:anchor`);o(f,p),s(()=>{let e=ne(t.namespace);a(()=>m(e,f,p))});let h=e(`div`,r);o(r,h),u(h,`mt-2 break-all text-xs leading-5 opacity-60`);let g=c(`rue:slot:anchor`);return o(h,g),s(()=>{let e=t.namespace||`节点当前未挂载`;a(()=>m(e,h,g))}),n}),n,r)}})});let $=e(`p`,y);return o(y,$),u($,`text-xs leading-5 opacity-60`),o($,f(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),n})},O=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,k=()=>d(e=>{let t=i(),n=c(`rue:component:anchor`);o(t,n);let r=v(D,{});return s(()=>{let e=v(x,{title:`SVG 共享标签命名空间`,source:O,codeCardClassName:`h-[640px] md:h-[760px]`,children:r});a(()=>m(e,t,n))}),t});export{k as default};
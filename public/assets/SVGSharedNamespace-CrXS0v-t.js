import{$t as e,Jt as t,Q as n,St as r,a as i,dt as a,et as o,in as s,it as c,l,lt as u,n as d,nt as f,o as p,r as m,rn as h,rt as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-DsQWl-IB.js";import{a as x,n as ee,t as S}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as C}from"./ExamplePlayground-BpRRv8az.js";var w=`http://www.w3.org/2000/svg`,T=`http://www.w3.org/1999/xhtml`,E=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),D=e=>e?.namespaceURI??``,O=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,te=e=>e===w?`SVG`:e===T?`HTML`:e?`其他`:`未挂载`,ne=e=>e===w?`badge-info`:e===T?`badge-success`:`badge-ghost`,re=e=>l(t=>{let r=f(`a`,t),i=S(r,()=>e.linkRef);d(()=>{i()}),u(r,`href`,`#component`),a(r,`svg-shared-link`);let o=f(`title`,r);n(r,o);let s=S(o,()=>e.titleRef);d(()=>{s()}),n(o,g(`组件根 a/title 也会继承 SVG namespace`));let c=f(`text`,r);n(r,c),u(c,`x`,`24`),u(c,`y`,`112`),a(c,`svg-shared-label`),n(c,g(`组件根共享标签`));let l=f(`text`,r);return n(r,l),u(l,`x`,`24`),u(l,`y`,`136`),a(l,`svg-shared-note`),n(l,g(`这个 a/title 来自单独组件`)),r}),k=()=>{let{topLinkRef:C,topTitleRef:w,styleRef:T,scriptRef:k,componentLinkRef:A,componentTitleRef:j,htmlLinkRef:M,namespaces:N,syncNamespaces:P,namespaceRows:F}=x(`useSetup:0:0`,()=>s(()=>{let e=x(`useRef:1:0`,()=>h()),n=x(`useRef:1:1`,()=>h()),a=x(`useRef:1:2`,()=>h()),o=x(`useRef:1:3`,()=>h()),s=x(`useRef:1:4`,()=>h()),c=x(`useRef:1:5`,()=>h()),l=x(`useRef:1:6`,()=>h()),u=x(`ref:1:7`,()=>t(E())),d=()=>{let t={topLink:D(e.current),topTitle:D(n.current),style:D(a.current),script:D(o.current),componentLink:D(s.current),componentTitle:D(c.current),htmlLink:D(l.current)};O(u.value,t)||(u.value=t)};return m(d),i(d),{topLinkRef:e,topTitleRef:n,styleRef:a,scriptRef:o,componentLinkRef:s,componentTitleRef:c,htmlLinkRef:l,namespaces:u,syncNamespaces:d,namespaceRows:x(`computed:1:8`,()=>r(()=>[{key:`topLink`,label:`svg > a`,namespace:u.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:u.value.topTitle},{key:`style`,label:`svg > style`,namespace:u.value.style},{key:`script`,label:`svg > script`,namespace:u.value.script},{key:`componentLink`,label:`组件根 a`,namespace:u.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:u.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:u.value.htmlLink}]))}}));return l(t=>{let r=f(`div`,t);a(r,`grid gap-4`);let i=f(`p`,r);n(r,i),a(i,`text-sm leading-6 opacity-75`),n(i,g(`这个示例展示共享标签在不同父级上下文里的 namespace 传播：`));let s=f(`span`,i);n(i,s),a(s,`font-semibold`),n(s,g(`a / title / style / script`)),n(i,g(`在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。`));let m=f(`div`,r);n(r,m),a(m,`card bg-base-100 shadow`);let h=f(`div`,m);n(m,h),a(h,`card-body gap-5`);let x=f(`div`,h);n(h,x),a(x,`overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4`);let E=f(`svg`,x);n(x,E),u(E,`viewBox`,`0 0 520 240`),a(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let D=f(`style`,E);n(E,D);let O=S(D,()=>T);d(()=>{O()}),b(()=>{y(D,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let N=f(`script`,E);n(E,N);let P=S(N,()=>k);d(()=>{P()});let I=c(N);n(N,I),y(I,`/* namespace only demo */`);let L=f(`rect`,E);n(E,L),u(L,`x`,`16`),u(L,`y`,`20`),u(L,`width`,`228`),u(L,`height`,`140`),u(L,`rx`,`18`),u(L,`fill`,`#eff6ff`),u(L,`stroke`,`#93c5fd`);let R=f(`rect`,E);n(E,R),u(R,`x`,`272`),u(R,`y`,`20`),u(R,`width`,`228`),u(R,`height`,`140`),u(R,`rx`,`18`),u(R,`fill`,`#f8fafc`),u(R,`stroke`,`#cbd5e1`);let z=f(`a`,E);n(E,z);let ie=S(z,()=>C);d(()=>{ie()}),u(z,`href`,`#top`),a(z,`svg-shared-link`);let B=f(`title`,z);n(z,B);let ae=S(B,()=>w);d(()=>{ae()}),n(B,g(`顶层 a/title 在 SVG namespace`));let V=f(`text`,z);n(z,V),u(V,`x`,`24`),u(V,`y`,`48`),a(V,`svg-shared-label`),n(V,g(`顶层共享标签`));let H=f(`text`,z);n(z,H),u(H,`x`,`24`),u(H,`y`,`72`),a(H,`svg-shared-note`),n(H,g(`a、title、style、script 都挂在 SVG namespace`));let U=o(`rue:component:anchor`);n(E,U),b(()=>{let t=_(re,{linkRef:A,titleRef:j});e(()=>p(t,E,U))});let W=f(`text`,E);n(E,W),u(W,`x`,`280`),u(W,`y`,`48`),a(W,`svg-shared-label`),n(W,g(`foreignObject 回退`));let G=f(`text`,E);n(E,G),u(G,`x`,`280`),u(G,`y`,`72`),a(G,`svg-shared-note`),n(G,g(`里面的 a 会重新变回 HTML namespace`));let K=f(`foreignObject`,E);n(E,K),u(K,`x`,`280`),u(K,`y`,`96`),u(K,`width`,`210`),u(K,`height`,`64`);let q=f(`div`,K);n(K,q),a(q,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let J=f(`a`,q);n(q,J);let oe=S(J,()=>M);d(()=>{oe()}),u(J,`href`,`#html`),a(J,`text-sm font-semibold text-blue-600 underline`),n(J,g(`foreignObject 内的 HTML 链接`));let Y=f(`div`,h);n(h,Y),a(Y,`grid gap-3 md:grid-cols-2 xl:grid-cols-3`);let X=o(`rue:list:start`),Z=o(`rue:list:end`);n(Y,X),n(Y,Z);let Q=new Map;b(()=>{Q=ee({items:F.get()||[],getKey:(e,t)=>e.key,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(t,r,i,s,c)=>{p(l(()=>{let r=v(),i=f(`div`,r);n(r,i),b(()=>{u(i,`key`,String(t.key))}),a(i,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let s=f(`div`,i);n(i,s),a(s,`text-sm font-semibold text-base-content`);let c=o(`rue:slot:anchor`);n(s,c),b(()=>{let n=t.label;e(()=>p(n,s,c))});let l=f(`span`,i);n(i,l),b(()=>{a(l,`badge mt-2 ${ne(t.namespace)}`)});let d=o(`rue:slot:anchor`);n(l,d),b(()=>{let n=te(t.namespace);e(()=>p(n,l,d))});let m=f(`div`,i);n(i,m),a(m,`mt-2 break-all text-xs leading-5 opacity-60`);let h=o(`rue:slot:anchor`);return n(m,h),b(()=>{let n=t.namespace||`节点当前未挂载`;e(()=>p(n,m,h))}),r}),r,i)}})});let $=f(`p`,h);return n(h,$),a($,`text-xs leading-5 opacity-60`),n($,g(`说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。`)),r})},A=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,j=()=>l(t=>{let r=v(),i=o(`rue:component:anchor`);n(r,i);let a=_(k,{});return b(()=>{let t=_(C,{title:`SVG 共享标签命名空间`,source:A,codeCardClassName:`h-[640px] md:h-[760px]`,children:a});e(()=>p(t,r,i))}),r});export{j as default};
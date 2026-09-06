import{At as e,C as t,Dn as n,E as r,Ot as i,Q as a,Vt as o,Wt as s,Zt as c,_n as l,_t as u,at as d,b as f,bt as p,ct as m,dt as h,en as g,et as _,ft as v,gn as y,kn as b,mn as x,pn as S,qt as C,rt as w,st as T,tn as E,ut as ee,vn as D,vt as O,w as te,wn as k,xn as A,xt as j,yt as M}from"./rue-runtime-HIMg8Lz8.js";import{t as N}from"./ExamplePlayground-C6Q-WPon.js";var P=D(`<a href="#component" class="svg-shared-link"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></a>`),F=D(`<div class="grid gap-4"><p class="text-sm leading-6 opacity-75">这个示例展示共享标签在不同父级上下文里的 namespace 传播： <span class="font-semibold">a / title / style / script</span> 在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。</p><div class="card bg-base-100 shadow"><div class="card-body gap-5"><div class="overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4"><!--rue:opaque-hole:0--></div><div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3"><!--rue:text-hole:1--></div><p class="text-xs leading-5 opacity-60">说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。</p></div></div></div>`),I=`http://www.w3.org/2000/svg`,L=`http://www.w3.org/1999/xhtml`,R=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),z=e=>e?.namespaceURI??``,B=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,ne=e=>e===I?`SVG`:e===L?`HTML`:e?`其他`:`未挂载`,re=e=>e===I?`badge-info`:e===L?`badge-success`:`badge-ghost`,ie=t=>{let n=d(t.linkRef),r=d(t.titleRef);return m(e(()=>{let e=u(),t=P().content.cloneNode(!0),i=t.firstChild,o=i,s=i.childNodes[0],c=s.parentNode,l=i.childNodes[1],d=l.parentNode,f=i.childNodes[2],p=f.parentNode;e.appendChild(t),v(o,()=>n.get()),j(o,`href`,`#component`),a(o,`svg-shared-link`);let m=O(`title`,c);h(c,m),c.insertBefore(m,s),v(m,()=>r.get()),h(m,M(`组件根 a/title 也会继承 SVG namespace`));let g=O(`text`,d);h(d,g),d.insertBefore(g,l),j(g,`x`,`24`),j(g,`y`,`112`),a(g,`svg-shared-label`),h(g,M(`组件根共享标签`));let _=O(`text`,p);return h(p,_),p.insertBefore(_,f),j(_,`x`,`24`),j(_,`y`,`136`),a(_,`svg-shared-note`),h(_,M(`这个 a/title 来自单独组件`)),e},!0),e=>_(()=>{n.set(e.linkRef),r.set(e.titleRef)}),()=>t)},V=()=>{let w=s(`SVGSharedNamespaceDemo:hook:0`),D=s(`SVGSharedNamespaceDemo:hook:1`),N=s(`SVGSharedNamespaceDemo:hook:2`),P=s(`SVGSharedNamespaceDemo:hook:3`),I=s(`SVGSharedNamespaceDemo:hook:4`),L=s(`SVGSharedNamespaceDemo:hook:5`),V=s(`SVGSharedNamespaceDemo:hook:6`),H=E(R()),U=()=>{let e={topLink:z(w.current),topTitle:z(D.current),style:z(N.current),script:z(P.current),componentLink:z(I.current),componentTitle:z(L.current),htmlLink:z(V.current)};B(H.value,e)||(H.value=e)};c(U),g(U);let ae=[{key:`topLink`,label:`svg > a`,namespace:H.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:H.value.topTitle},{key:`style`,label:`svg > style`,namespace:H.value.style},{key:`script`,label:`svg > script`,namespace:H.value.script},{key:`componentLink`,label:`组件根 a`,namespace:H.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:H.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:H.value.htmlLink}];return C(()=>m(e(()=>{let e=u(),s=F().content.cloneNode(!0),c=s.firstChild,m=c.childNodes[1].childNodes[0].childNodes[0].childNodes[0],g=m.parentNode,_=c.childNodes[1].childNodes[0].childNodes[1].childNodes[0],C=_.parentNode;e.appendChild(s);let E=O(`svg`,g);h(g,E),g.insertBefore(E,m),j(E,`viewBox`,`0 0 520 240`),a(E,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let R=O(`style`,E);h(E,R),v(R,()=>N),k(()=>{i(R,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let z=O(`script`,E);h(E,z),v(z,()=>P);let B=p(z);h(z,B),i(B,`/* namespace only demo */`);let H=O(`rect`,E);h(E,H),j(H,`x`,`16`),j(H,`y`,`20`),j(H,`width`,`228`),j(H,`height`,`140`),j(H,`rx`,`18`),j(H,`fill`,`#eff6ff`),j(H,`stroke`,`#93c5fd`);let U=O(`rect`,E);h(E,U),j(U,`x`,`272`),j(U,`y`,`20`),j(U,`width`,`228`),j(U,`height`,`140`),j(U,`rx`,`18`),j(U,`fill`,`#f8fafc`),j(U,`stroke`,`#cbd5e1`);let W=O(`a`,E);h(E,W),v(W,()=>w),j(W,`href`,`#top`),a(W,`svg-shared-link`);let G=O(`title`,W);h(W,G),v(G,()=>D),h(G,M(`顶层 a/title 在 SVG namespace`));let K=O(`text`,W);h(W,K),j(K,`x`,`24`),j(K,`y`,`48`),a(K,`svg-shared-label`),h(K,M(`顶层共享标签`));let q=O(`text`,W);h(W,q),j(q,`x`,`24`),j(q,`y`,`72`),a(q,`svg-shared-note`),h(q,M(`a、title、style、script 都挂在 SVG namespace`)),T(E,ie,()=>({linkRef:I,titleRef:L}));let J=O(`text`,E);h(E,J),j(J,`x`,`280`),j(J,`y`,`48`),a(J,`svg-shared-label`),h(J,M(`foreignObject 回退`));let Y=O(`text`,E);h(E,Y),j(Y,`x`,`280`),j(Y,`y`,`72`),a(Y,`svg-shared-note`),h(Y,M(`里面的 a 会重新变回 HTML namespace`));let X=O(`foreignObject`,E);h(E,X),j(X,`x`,`280`),j(X,`y`,`96`),j(X,`width`,`210`),j(X,`height`,`64`);let Z=O(`div`,X);h(X,Z),a(Z,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let Q=O(`a`,Z);h(Z,Q),v(Q,()=>V),j(Q,`href`,`#html`),a(Q,`text-sm font-semibold text-blue-600 underline`),h(Q,M(`foreignObject 内的 HTML 链接`));let $=[];return k(()=>{$=te(C,_,$,ae||[],(e,t)=>e.key,(e,n)=>{let i=d(e);return t((e,t,n)=>r(e,n,()=>o(Object.assign(e=>{let t=y(`div`,e);t.className=`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`;let n=y(`div`,t);S(t,n),n.className=`text-sm font-semibold text-base-content`;let r=l(``);S(n,r),A(r,()=>i.get().label);let a=y(`span`,t);S(t,a);let o;k(()=>{let e=`badge mt-2 ${re(i.get().namespace)}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,a.className=t)});let s=x(`rue:compiled-slot`);S(a,s),k(()=>{let e=ne(i.get().namespace);b(()=>ee(e,a,s))});let c=y(`div`,t);S(t,c),c.className=`mt-2 break-all text-xs leading-5 opacity-60`;let u=l(``);return S(c,u),A(u,()=>i.get().namespace||`节点当前未挂载`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>f($)),e},!0),e=>_(()=>{})))},H=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,U=()=>m(w(N,()=>({title:`SVG 共享标签命名空间`,source:H,codeCardClassName:`h-[640px] md:h-[760px]`,children:(e,t,n)=>r(e,n,()=>o(Object.assign(e=>{let t=u();return T(t,V,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),e=>_(()=>{}));export{U as default};
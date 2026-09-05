import{Bt as e,C as t,Et as n,H as r,It as i,K as a,L as o,Mt as s,S as c,W as l,X as u,Y as d,Z as f,_n as p,at as m,bn as h,fn as g,gn as _,hn as v,ht as y,it as b,kn as ee,kt as x,nt as S,ot as C,pn as te,pt as w,q as T,rt as E,wn as D,x as O,z as k,zt as A}from"./rue-runtime-CwEGJ854.js";import{t as j}from"./ExamplePlayground-CgC9pzTk.js";var M=p(`<a href="#component" class="svg-shared-link"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></a>`),N=p(`<div class="grid gap-4"><p class="text-sm leading-6 opacity-75">这个示例展示共享标签在不同父级上下文里的 namespace 传播： <span class="font-semibold">a / title / style / script</span> 在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。</p><div class="card bg-base-100 shadow"><div class="card-body gap-5"><div class="overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4"><!--rue:opaque-hole:0--></div><div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3"><!--rue:text-hole:1--></div><p class="text-xs leading-5 opacity-60">说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。</p></div></div></div>`),P=`http://www.w3.org/2000/svg`,F=`http://www.w3.org/1999/xhtml`,I=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),L=e=>e?.namespaceURI??``,R=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,z=e=>e===P?`SVG`:e===F?`HTML`:e?`其他`:`未挂载`,B=e=>e===P?`badge-info`:e===F?`badge-success`:`badge-ghost`,ne=e=>{let t=l(e.linkRef),n=l(e.titleRef);return T(y(()=>{let e=S(),r=M().content.cloneNode(!0),i=r.firstChild,a=i,s=i.childNodes[0],c=s.parentNode,l=i.childNodes[1],d=l.parentNode,p=i.childNodes[2],m=p.parentNode;e.appendChild(r),f(a,()=>t.get()),C(a,`href`,`#component`),o(a,`svg-shared-link`);let h=E(`title`,c);u(c,h),c.insertBefore(h,s),f(h,()=>n.get()),u(h,b(`组件根 a/title 也会继承 SVG namespace`));let g=E(`text`,d);u(d,g),d.insertBefore(g,l),C(g,`x`,`24`),C(g,`y`,`112`),o(g,`svg-shared-label`),u(g,b(`组件根共享标签`));let _=E(`text`,m);return u(m,_),m.insertBefore(_,p),C(_,`x`,`24`),C(_,`y`,`136`),o(_,`svg-shared-note`),u(_,b(`这个 a/title 来自单独组件`)),e},!0),e=>k(()=>{t.set(e.linkRef),n.set(e.titleRef)}),()=>e)},V=()=>{let r=x(`SVGSharedNamespaceDemo:hook:0`),p=x(`SVGSharedNamespaceDemo:hook:1`),j=x(`SVGSharedNamespaceDemo:hook:2`),M=x(`SVGSharedNamespaceDemo:hook:3`),P=x(`SVGSharedNamespaceDemo:hook:4`),F=x(`SVGSharedNamespaceDemo:hook:5`),V=x(`SVGSharedNamespaceDemo:hook:6`),H=e(I()),U=()=>{let e={topLink:L(r.current),topTitle:L(p.current),style:L(j.current),script:L(M.current),componentLink:L(P.current),componentTitle:L(F.current),htmlLink:L(V.current)};R(H.value,e)||(H.value=e)};i(U),A(U);let re=[{key:`topLink`,label:`svg > a`,namespace:H.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:H.value.topTitle},{key:`style`,label:`svg > style`,namespace:H.value.style},{key:`script`,label:`svg > script`,namespace:H.value.script},{key:`componentLink`,label:`组件根 a`,namespace:H.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:H.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:H.value.htmlLink}];return s(()=>T(y(()=>{let e=S(),i=N().content.cloneNode(!0),s=i.firstChild,y=s.childNodes[1].childNodes[0].childNodes[0].childNodes[0],x=y.parentNode,T=s.childNodes[1].childNodes[0].childNodes[1].childNodes[0],k=T.parentNode;e.appendChild(i);let A=E(`svg`,x);u(x,A),x.insertBefore(A,y),C(A,`viewBox`,`0 0 520 240`),o(A,`h-auto min-w-[500px] w-full rounded-lg bg-white`);let I=E(`style`,A);u(A,I),f(I,()=>j),D(()=>{w(I,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let L=E(`script`,A);u(A,L),f(L,()=>M);let R=m(L);u(L,R),w(R,`/* namespace only demo */`);let H=E(`rect`,A);u(A,H),C(H,`x`,`16`),C(H,`y`,`20`),C(H,`width`,`228`),C(H,`height`,`140`),C(H,`rx`,`18`),C(H,`fill`,`#eff6ff`),C(H,`stroke`,`#93c5fd`);let U=E(`rect`,A);u(A,U),C(U,`x`,`272`),C(U,`y`,`20`),C(U,`width`,`228`),C(U,`height`,`140`),C(U,`rx`,`18`),C(U,`fill`,`#f8fafc`),C(U,`stroke`,`#cbd5e1`);let W=E(`a`,A);u(A,W),f(W,()=>r),C(W,`href`,`#top`),o(W,`svg-shared-link`);let G=E(`title`,W);u(W,G),f(G,()=>p),u(G,b(`顶层 a/title 在 SVG namespace`));let K=E(`text`,W);u(W,K),C(K,`x`,`24`),C(K,`y`,`48`),o(K,`svg-shared-label`),u(K,b(`顶层共享标签`));let q=E(`text`,W);u(W,q),C(q,`x`,`24`),C(q,`y`,`72`),o(q,`svg-shared-note`),u(q,b(`a、title、style、script 都挂在 SVG namespace`)),a(A,ne,()=>({linkRef:P,titleRef:F}));let J=E(`text`,A);u(A,J),C(J,`x`,`280`),C(J,`y`,`48`),o(J,`svg-shared-label`),u(J,b(`foreignObject 回退`));let Y=E(`text`,A);u(A,Y),C(Y,`x`,`280`),C(Y,`y`,`72`),o(Y,`svg-shared-note`),u(Y,b(`里面的 a 会重新变回 HTML namespace`));let X=E(`foreignObject`,A);u(A,X),C(X,`x`,`280`),C(X,`y`,`96`),C(X,`width`,`210`),C(X,`height`,`64`);let Z=E(`div`,X);u(X,Z),o(Z,`flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm`);let Q=E(`a`,Z);u(Z,Q),f(Q,()=>V),C(Q,`href`,`#html`),o(Q,`text-sm font-semibold text-blue-600 underline`),u(Q,b(`foreignObject 内的 HTML 链接`));let $=[];return D(()=>{$=t(k,T,$,re||[],(e,t)=>e.key,(e,t)=>{let r=l(e),i=l(t);return c((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=v(`div`,e);t.className=`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`;let n=v(`div`,t);g(t,n),n.className=`text-sm font-semibold text-base-content`;let i=_(``);g(n,i),h(i,()=>r.get().label);let a=v(`span`,t);g(t,a);let o;D(()=>{let e=`badge mt-2 ${B(r.get().namespace)}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,a.className=t)});let s=te(`rue:compiled-slot`);g(a,s),D(()=>{let e=z(r.get().namespace);ee(()=>d(e,a,s))});let c=v(`div`,t);g(t,c),c.className=`mt-2 break-all text-xs leading-5 opacity-60`;let l=_(``);return g(c,l),h(l,()=>r.get().namespace||`节点当前未挂载`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),e},!0),e=>k(()=>{})))},H=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,U=()=>T(r(j,()=>({title:`SVG 共享标签命名空间`,source:H,codeCardClassName:`h-[640px] md:h-[760px]`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return a(t,V,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),e=>k(()=>{}));export{U as default};
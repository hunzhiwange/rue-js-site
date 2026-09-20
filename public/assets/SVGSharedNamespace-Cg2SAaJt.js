import{Bt as e,Dt as t,H as n,Tt as r,U as i,V as a,Vt as o,W as s,Wt as c,Y as l,_n as u,_t as d,dn as f,en as p,f as m,fn as h,gn as g,gt as _,h as v,hn as y,in as b,it as x,mn as S,ot as C,p as w,pn as T,q as E,qt as D,sn as O,st as k,tt as A,vn as j,vt as M,yn as N,zt as P}from"./rue-runtime-Cv6BZekS.js";import{t as F}from"./ExamplePlayground-C5_Cdpk2.js";var I=N(`<a href="#component" class="svg-shared-link"><!--rue:opaque-hole:0--><text x="24" y="112" class="svg-shared-label">组件根共享标签</text><text x="24" y="136" class="svg-shared-note">这个 a/title 来自单独组件</text></a>`),L=N(`<div class="grid gap-4"><p class="text-sm leading-6 opacity-75">这个示例展示共享标签在不同父级上下文里的 namespace 传播： <span class="font-semibold">a / title / style / script</span> 在 svg 内保持 SVG namespace，而在 foreignObject 内回到 HTML namespace。</p><div class="card bg-base-100 shadow"><div class="card-body gap-5"><div class="overflow-auto rounded-xl border border-base-300 bg-slate-50 p-4"><svg viewBox="0 0 520 240" class="h-auto min-w-[500px] w-full rounded-lg bg-white"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><rect x="16" y="20" width="228" height="140" rx="18" fill="#eff6ff" stroke="#93c5fd"></rect><rect x="272" y="20" width="228" height="140" rx="18" fill="#f8fafc" stroke="#cbd5e1"></rect><a href="#top" class="svg-shared-link"><!--rue:opaque-hole:2--><text x="24" y="48" class="svg-shared-label">顶层共享标签</text><text x="24" y="72" class="svg-shared-note">a、title、style、script 都挂在 SVG namespace</text></a><!--rue:opaque-hole:3--><text x="280" y="48" class="svg-shared-label">foreignObject 回退</text><text x="280" y="72" class="svg-shared-note">里面的 a 会重新变回 HTML namespace</text><foreignObject x="280" y="96" width="210" height="64"><div class="flex h-full items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm"><a href="#html" class="text-sm font-semibold text-blue-600 underline">foreignObject 内的 HTML 链接</a></div></foreignObject></svg></div><div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3"><!--rue:text-hole:4--></div><p class="text-xs leading-5 opacity-60">说明：这里的 script 只用于验证 DOM 创建时的 namespace，不依赖浏览器执行脚本内容。</p></div></div></div>`),R=`http://www.w3.org/2000/svg`,z=`http://www.w3.org/1999/xhtml`,B=()=>({topLink:``,topTitle:``,style:``,script:``,componentLink:``,componentTitle:``,htmlLink:``}),V=e=>e?.namespaceURI??``,H=(e,t)=>e.topLink===t.topLink&&e.topTitle===t.topTitle&&e.style===t.style&&e.script===t.script&&e.componentLink===t.componentLink&&e.componentTitle===t.componentTitle&&e.htmlLink===t.htmlLink,U=e=>e===R?`SVG`:e===z?`HTML`:e?`其他`:`未挂载`,W=e=>e===R?`badge-info`:e===z?`badge-success`:`badge-ghost`,G=(e,n,a)=>{let o=M(_(e,`linkRef`)),l=M(_(e,`titleRef`));return i(c(()=>{let e=S(),n=I().content.cloneNode(!0),i=n.firstChild,a=i,c=i.childNodes[0],u=c.parentNode;e.appendChild(n),s(a,()=>o.get()),r(a,`href`,`#component`),t(a,`svg-shared-link`);let d=y(`title`,u);h(u,d),u.insertBefore(d,c),s(d,()=>l.get()),h(d,g(`组件根 a/title 也会继承 SVG namespace`));let f=g(``),p=g(``);return e.insertBefore(f,e.firstChild),e.appendChild(p),[e.firstChild,e.lastChild]}),e=>p(()=>{o.set(e.linkRef),l.set(e.titleRef)}),()=>d(e))},K=(n,r,i)=>{let d=E(`SVGSharedNamespaceDemo:hook:0`),p=E(`SVGSharedNamespaceDemo:hook:1`),_=E(`SVGSharedNamespaceDemo:hook:2`),N=E(`SVGSharedNamespaceDemo:hook:3`),F=E(`SVGSharedNamespaceDemo:hook:4`),I=E(`SVGSharedNamespaceDemo:hook:5`),R=E(`SVGSharedNamespaceDemo:hook:6`),z=k(B()),K=()=>{let e={topLink:V(d.current),topTitle:V(p.current),style:V(_.current),script:V(N.current),componentLink:V(F.current),componentTitle:V(I.current),htmlLink:V(R.current)};H(z.value,e)||(z.value=e)};x(K),C(K);let q=A(()=>[{key:`topLink`,label:`svg > a`,namespace:z.value.topLink},{key:`topTitle`,label:`svg > a > title`,namespace:z.value.topTitle},{key:`style`,label:`svg > style`,namespace:z.value.style},{key:`script`,label:`svg > script`,namespace:z.value.script},{key:`componentLink`,label:`组件根 a`,namespace:z.value.componentLink},{key:`componentTitle`,label:`组件根 title`,namespace:z.value.componentTitle},{key:`htmlLink`,label:`foreignObject > a`,namespace:z.value.htmlLink}]);return f(()=>q.get()),l(()=>c(n=>{let r=L().content.cloneNode(!0).firstChild,i=r.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[4],l=r.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[8].childNodes[0].childNodes[0],f=r.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0],x=f.parentNode,C=r.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1],E=C.parentNode,k=r.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[0],A=k.parentNode,z=r.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[5],B=z.parentNode,V=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],H=V.parentNode,K=d;typeof K==`function`?K(i):K&&typeof K==`object`&&`current`in K&&(K.current=i),O(()=>{typeof K==`function`?K(null):K&&typeof K==`object`&&`current`in K&&(K.current=null)}),i.setAttribute(`href`,`#top`),i.setAttribute(`class`,`svg-shared-link`);let J=R;typeof J==`function`?J(l):J&&typeof J==`object`&&`current`in J&&(J.current=l),O(()=>{typeof J==`function`?J(null):J&&typeof J==`object`&&`current`in J&&(J.current=null)}),l.setAttribute(`href`,`#html`),l.setAttribute(`class`,`text-sm font-semibold text-blue-600 underline`);let Y=y(`style`,x);h(x,Y),x.insertBefore(Y,f),s(Y,()=>_),b(()=>{j(Y,`
.svg-shared-link text { fill: #0f172a; text-decoration: underline; }
.svg-shared-label { fill: #2563eb; font-size: 18px; font-weight: 700; }
.svg-shared-note { fill: #475569; font-size: 12px; }
`)});let X=y(`script`,E);h(E,X),E.insertBefore(X,C),s(X,()=>N);let Z=u(X);h(X,Z),j(Z,`/* namespace only demo */`);let Q=y(`title`,A);h(A,Q),A.insertBefore(Q,k),s(Q,()=>p),h(Q,g(`顶层 a/title 在 SVG namespace`));let ee=(e,t,n)=>{let r=()=>a(G,()=>({linkRef:F,titleRef:I}));return e==null?r():o(e,n,r)},te=z.nextSibling;B.removeChild(z),e({parent:B,before:te},()=>ee,()=>({}));let $=[];return D(()=>{let n=q.get()||[];$=v(H,V,$,n,(e,t)=>e.key,(n,r)=>{let i=M(n);return w((n,r,a)=>{let s=()=>c(()=>{let n=S(),r=y(`div`,n);h(n,r),t(r,`rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm`);let a=y(`div`,r);h(r,a),t(a,`text-sm font-semibold text-base-content`);let o=T(`rue:slot:anchor`);h(a,o),e({parent:a,before:o},()=>P(i.get().label),()=>({}));let s=y(`span`,r);h(r,s),b(()=>{t(s,`badge mt-2 ${W(i.get().namespace)}`)});let c=u(s);h(s,c),b(()=>{j(c,U(i.get().namespace))});let l=y(`div`,r);h(r,l),t(l,`mt-2 break-all text-xs leading-5 opacity-60`);let d=T(`rue:slot:anchor`);h(l,d),e({parent:l,before:d},()=>P(i.get().namespace||`节点当前未挂载`),()=>({}));let f=g(``),p=g(``);return n.insertBefore(f,n.firstChild),n.appendChild(p),[n.firstChild,n.lastChild]});return n==null?s():o(n,a,s)},(e,t)=>{n=e,r=t,i.set(e)},void 0)},!1,!1)}),O(()=>m($)),[r,r]}))},q=`import { type FC, onMounted, onUpdated, ref, useRef } from '@rue-js/rue'

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
`,J=(e,t,r)=>a(F,()=>({title:`SVG 共享标签命名空间`,source:q,codeCardClassName:`h-[640px] md:h-[760px]`,children:(e,t,r)=>{let i=()=>c(e=>{let t=S();n(t,K,()=>({}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{J as default};
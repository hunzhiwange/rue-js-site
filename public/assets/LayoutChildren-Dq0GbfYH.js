import{B as e,Bt as t,F as n,I as r,P as i,V as a,Vt as o,W as s,Wt as c,en as l,fn as u,gn as d,hn as f,mn as p,pn as m,yn as h,z as g,zt as _}from"./rue-runtime-BWbIfNT8.js";import{t as v}from"./createHomeSplitExamplePage-Cjn7V321.js";var y=h(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),b=h(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Layout children 示例</h2><!--rue:opaque-hole:0--></div></div>`),x=(n,i,a)=>{let o=s(g(n,`children`));return r(c(e=>{let n=y().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[1],i=r.parentNode;return t({parent:i,before:r},()=>o.get(),()=>({})),[n,n]}),e=>l(()=>{o.set(e.children)}),()=>e(n))},S=(n,i,a)=>{let o=s(g(n,`children`)),d=s(g(n,`content`)),p=s(g(n,`footer`)),h=s(g(n,`header`));return r(c(e=>{let n=f(`div`,e);n.setAttribute(`class`,`layout border border-gray-300 p-4 rounded-md`);let r=f(`div`,n);u(n,r),r.setAttribute(`class`,`layout-header bg-gray-100 p-3`);let i=m(`rue:compiled-slot`);u(r,i),t({parent:r,before:i},()=>_(h.get()),()=>({}));let a=f(`div`,n);u(n,a),a.setAttribute(`class`,`layout-content p-3`);let s=m(`rue:compiled-slot`);u(a,s),t({parent:a,before:s},()=>o.get(),()=>({}));let c=f(`div`,n);u(n,c),c.setAttribute(`class`,`layout-footer bg-gray-100 p-3`);let l=m(`rue:compiled-slot`);u(c,l),t({parent:c,before:l},()=>_(p.get()),()=>({}));let g=f(`div`,n);u(n,g),g.setAttribute(`class`,`layout-content bg-gray-100 p-3`);let v=m(`rue:compiled-slot`);return u(g,v),t({parent:g,before:v},()=>_(d.get()),()=>({})),[n,n]}),e=>l(()=>{o.set(e.children),d.set(e.content),p.set(e.footer),h.set(e.header)}),()=>e(n))},C=(e,r,s)=>c(e=>{let r=b().content.cloneNode(!0).firstChild,s=r.childNodes[0].childNodes[1],l=s.parentNode,m=(e,t,r)=>{let s=()=>i(S,()=>({header:(e,t,n)=>{let r=()=>a(e=>{let t=f(`div`,e);return t.setAttribute(`class`,`text-gray-800 font-semibold`),u(t,d(`自定义 Header`)),[t,t]});return e==null?r():o(e,n,r)},footer:(e,t,n)=>{let r=()=>a(e=>{let t=f(`div`,e);return t.setAttribute(`class`,`text-gray-600`),u(t,d(`自定义 Footer`)),[t,t]});return e==null?r():o(e,n,r)},content:(e,t,r)=>{let i=()=>c(e=>{let t=f(`div`,e);return t.setAttribute(`class`,`space-y-2`),n(t,x,()=>({children:(e,t,r)=>{let i=()=>c(e=>{let t=p(),r=f(`p`,t);u(t,r),r.setAttribute(`class`,`text-gray-700`),u(r,d(`你好`)),n(r,x,()=>({children:(e,t,n)=>{let r=()=>a(e=>{let t=p();u(t,d(`123456`));let n=d(``),r=d(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));let i=d(``),s=d(``);return t.insertBefore(i,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}})),[t,t]});return e==null?i():o(e,r,i)},children:(e,t,n)=>{let r=()=>a(e=>{let t=p(),n=f(`p`,t);u(t,n),n.setAttribute(`class`,`text-gray-700`),u(n,d(`主体内容通过 props.children 传入`));let r=f(`p`,t);u(t,r),r.setAttribute(`class`,`text-gray-600`),u(r,d(`这与 React 的 children 语义一致`));let i=d(``),a=d(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,r,s)},h=s.nextSibling;return l.removeChild(s),t({parent:l,before:h},()=>m,()=>({})),[r,r]}),w=`import { type FC } from '@rue-js/rue'

const Hello: FC = props => {
  return (
    <div className="rounded-md border bg-white p-3 space-y-1">
      <p className="text-gray-800">我是hello组件</p>
      <span className="text-gray-600">这是我的children {props.children}</span>
    </div>
  )
}

const Layout: FC<{ header?: any; footer?: any; content?: any }> = props => {
  return (
    <div className="layout border border-gray-300 p-4 rounded-md">
      <div className="layout-header bg-gray-100 p-3">{props.header}</div>
      <div className="layout-content p-3">{props.children}</div>
      <div className="layout-footer bg-gray-100 p-3">{props.footer}</div>
      <div className="layout-content bg-gray-100 p-3">{props.content}</div>
    </div>
  )
}

const LayoutChildrenDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-semibold">Layout children 示例</h2>
        <Layout
          header={<div className="text-gray-800 font-semibold">自定义 Header</div>}
          footer={<div className="text-gray-600">自定义 Footer</div>}
          content={
            <div className="space-y-2">
              <Hello>
                <p className="text-gray-700">
                  你好<Hello>123456</Hello>
                </p>
              </Hello>
            </div>
          }
        >
          <p className="text-gray-700">主体内容通过 props.children 传入</p>
          <p className="text-gray-600">这与 React 的 children 语义一致</p>
        </Layout>
      </div>
    </div>
  )
}

export default LayoutChildrenDemo
`,T=(e,t,r)=>i(v,()=>({options:{title:`Layout children`,source:w},children:(e,t,r)=>{let i=()=>c(e=>{let t=p();n(t,C,()=>({}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{T as default};
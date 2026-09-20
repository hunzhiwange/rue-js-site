import{Bt as e,H as t,U as n,V as r,Vt as i,Wt as a,_t as o,en as s,fn as c,gn as l,gt as u,hn as d,mn as f,pn as p,vt as m,yn as h,yt as g,zt as _}from"./rue-runtime-Cv6BZekS.js";import{t as v}from"./createHomeSplitExamplePage-DqLcVC_n.js";var y=h(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),b=h(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Layout children 示例</h2><!--rue:opaque-hole:0--></div></div>`),x=(t,r,i)=>{let c=m(u(t,`children`));return n(a(t=>{let n=y().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[1],i=r.parentNode;return e({parent:i,before:r},()=>c.get(),()=>({})),[n,n]}),e=>s(()=>{c.set(e.children)}),()=>o(t))},S=(t,r,i)=>{let l=m(u(t,`children`)),f=m(u(t,`content`)),h=m(u(t,`footer`)),g=m(u(t,`header`));return n(a(t=>{let n=d(`div`,t);n.setAttribute(`class`,`layout border border-gray-300 p-4 rounded-md`);let r=d(`div`,n);c(n,r),r.setAttribute(`class`,`layout-header bg-gray-100 p-3`);let i=p(`rue:compiled-slot`);c(r,i),e({parent:r,before:i},()=>_(g.get()),()=>({}));let a=d(`div`,n);c(n,a),a.setAttribute(`class`,`layout-content p-3`);let o=p(`rue:compiled-slot`);c(a,o),e({parent:a,before:o},()=>l.get(),()=>({}));let s=d(`div`,n);c(n,s),s.setAttribute(`class`,`layout-footer bg-gray-100 p-3`);let u=p(`rue:compiled-slot`);c(s,u),e({parent:s,before:u},()=>_(h.get()),()=>({}));let m=d(`div`,n);c(n,m),m.setAttribute(`class`,`layout-content bg-gray-100 p-3`);let v=p(`rue:compiled-slot`);return c(m,v),e({parent:m,before:v},()=>_(f.get()),()=>({})),[n,n]}),e=>s(()=>{l.set(e.children),f.set(e.content),h.set(e.footer),g.set(e.header)}),()=>o(t))},C=(n,o,s)=>a(n=>{let o=b().content.cloneNode(!0).firstChild,s=o.childNodes[0].childNodes[1],u=s.parentNode,p=(e,n,o)=>{let s=()=>r(S,()=>({header:(e,t,n)=>{let r=()=>g(e=>{let t=d(`div`,e);return t.setAttribute(`class`,`text-gray-800 font-semibold`),c(t,l(`自定义 Header`)),[t,t]});return e==null?r():i(e,n,r)},footer:(e,t,n)=>{let r=()=>g(e=>{let t=d(`div`,e);return t.setAttribute(`class`,`text-gray-600`),c(t,l(`自定义 Footer`)),[t,t]});return e==null?r():i(e,n,r)},content:(e,n,r)=>{let o=()=>a(e=>{let n=d(`div`,e);return n.setAttribute(`class`,`space-y-2`),t(n,x,()=>({children:(e,n,r)=>{let o=()=>a(e=>{let n=f(),r=d(`p`,n);c(n,r),r.setAttribute(`class`,`text-gray-700`),c(r,l(`你好`)),t(r,x,()=>({children:(e,t,n)=>{let r=()=>g(e=>{let t=f();c(t,l(`123456`));let n=l(``),r=l(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():i(e,n,r)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}})),[n,n]});return e==null?o():i(e,r,o)},children:(e,t,n)=>{let r=()=>g(e=>{let t=f(),n=d(`p`,t);c(t,n),n.setAttribute(`class`,`text-gray-700`),c(n,l(`主体内容通过 props.children 传入`));let r=d(`p`,t);c(t,r),r.setAttribute(`class`,`text-gray-600`),c(r,l(`这与 React 的 children 语义一致`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():i(e,n,r)}}));return e==null?s():i(e,o,s)},m=s.nextSibling;return u.removeChild(s),e({parent:u,before:m},()=>p,()=>({})),[o,o]}),w=`import { type FC } from '@rue-js/rue'

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
`,T=(e,n,o)=>r(v,()=>({options:{title:`Layout children`,source:w},children:(e,n,r)=>{let o=()=>a(e=>{let n=f();t(n,C,()=>({}));let r=l(``),i=l(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));export{T as default};
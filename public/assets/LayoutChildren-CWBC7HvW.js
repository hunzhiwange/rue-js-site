import{E as e,T as t,Vt as n,_n as r,_t as i,at as a,ct as o,et as s,gn as c,hn as l,pn as u,st as d,vn as f,xn as p}from"./rue-runtime-HIMg8Lz8.js";import{t as m}from"./createHomeSplitExamplePage-DNdswIPW.js";var h=f(`<div class="space-y-2"><!--rue:opaque-hole:0--></div>`),g=f(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),_=f(`<div class="layout border border-gray-300 p-4 rounded-md"><div class="layout-header bg-gray-100 p-3"><!--rue:text-hole:0--></div><div class="layout-content p-3"><!--rue:text-hole:1--></div><div class="layout-footer bg-gray-100 p-3"><!--rue:text-hole:2--></div><div class="layout-content bg-gray-100 p-3"><!--rue:text-hole:3--></div></div>`),v=f(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Layout children 示例</h2><!--rue:opaque-hole:0--></div></div>`),y=e=>{let r=a(e.children);return o(n(Object.assign(e=>{let n=g().content.cloneNode(!0).firstChild,i=n.childNodes[1].childNodes[1],a=i.parentNode;return t({parent:a,before:i},()=>r.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{r.set(e.children)}),()=>e)},b=e=>{let i=a(e.children),c=a(e.content),l=a(e.footer),u=a(e.header);return o(n(Object.assign(e=>{let n=_().content.cloneNode(!0).firstChild,a=n.childNodes[0].childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[0],d=s.parentNode,f=n.childNodes[2].childNodes[0],m=f.parentNode,h=n.childNodes[3].childNodes[0],g=h.parentNode,v=r(``);o.insertBefore(v,a),o.removeChild(a),p(v,()=>u.get()),t({parent:d,before:s},()=>i.get(),()=>({}));let y=r(``);m.insertBefore(y,f),m.removeChild(f),p(y,()=>l.get());let b=r(``);return g.insertBefore(b,h),g.removeChild(h),p(b,()=>c.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{i.set(e.children),c.set(e.content),l.set(e.footer),u.set(e.header)}),()=>e)},x=m({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(n(Object.assign(t=>{let a=v().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[1],s=o.parentNode,f=l(s);return d(f,b,()=>({header:n(Object.assign(e=>{let t=c(`div`,e);return t.className=`text-gray-800 font-semibold`,u(t,r(`自定义 Header`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),footer:n(Object.assign(e=>{let t=c(`div`,e);return t.className=`text-gray-600`,u(t,r(`自定义 Footer`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:n(Object.assign(t=>{let a=h().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=o.parentNode,f=l(s);return d(f,y,()=>({children:(t,a,o)=>e(t,o,()=>n(Object.assign(t=>{let a=i(),o=c(`p`,a);return u(a,o),o.className=`text-gray-700`,u(o,r(`你好`)),d(o,y,()=>({children:(t,a,o)=>e(t,o,()=>n(Object.assign(e=>{let t=i();return u(t,r(`123456`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(f,o),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),children:[(t,a,o)=>e(t,o,()=>n(Object.assign(e=>{let t=i(),n=c(`p`,t);return u(t,n),n.className=`text-gray-700`,u(n,r(`主体内容通过 props.children 传入`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,a,o)=>e(t,o,()=>n(Object.assign(e=>{let t=i(),n=c(`p`,t);return u(t,n),n.className=`text-gray-600`,u(n,r(`这与 React 的 children 语义一致`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),s.insertBefore(f,o),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{}))});export{x as default};
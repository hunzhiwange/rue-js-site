import{Et as e,K as t,W as n,_n as r,b as i,bn as a,fn as o,gn as s,hn as c,mn as l,nt as u,q as d,x as f,z as p}from"./rue-runtime-CwEGJ854.js";import{t as m}from"./createHomeSplitExamplePage-DuLZTUZH.js";var h=r(`<div class="space-y-2"><!--rue:opaque-hole:0--></div>`),g=r(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),_=r(`<div class="layout border border-gray-300 p-4 rounded-md"><div class="layout-header bg-gray-100 p-3"><!--rue:text-hole:0--></div><div class="layout-content p-3"><!--rue:text-hole:1--></div><div class="layout-footer bg-gray-100 p-3"><!--rue:text-hole:2--></div><div class="layout-content bg-gray-100 p-3"><!--rue:text-hole:3--></div></div>`),v=r(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Layout children 示例</h2><!--rue:opaque-hole:0--></div></div>`),y=t=>{let r=n(t.children);return d(e(Object.assign(e=>{let t=g().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[1],a=n.parentNode;return i({parent:a,before:n},()=>r.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{r.set(e.children)}),()=>t)},b=t=>{let r=n(t.children),o=n(t.content),c=n(t.footer),l=n(t.header);return d(e(Object.assign(e=>{let t=_().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],u=n.parentNode,d=t.childNodes[1].childNodes[0],f=d.parentNode,p=t.childNodes[2].childNodes[0],m=p.parentNode,h=t.childNodes[3].childNodes[0],g=h.parentNode,v=s(``);u.insertBefore(v,n),u.removeChild(n),a(v,()=>l.get()),i({parent:f,before:d},()=>r.get(),()=>({}));let y=s(``);m.insertBefore(y,p),m.removeChild(p),a(y,()=>c.get());let b=s(``);return g.insertBefore(b,h),g.removeChild(h),a(b,()=>o.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{r.set(e.children),o.set(e.content),c.set(e.footer),l.set(e.header)}),()=>t)},x=m({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>d(e(Object.assign(n=>{let r=v().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,d=l(a);return t(d,b,()=>({header:e(Object.assign(e=>{let t=c(`div`,e);return t.className=`text-gray-800 font-semibold`,o(t,s(`自定义 Header`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),footer:e(Object.assign(e=>{let t=c(`div`,e);return t.className=`text-gray-600`,o(t,s(`自定义 Footer`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:e(Object.assign(n=>{let r=h().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,d=l(a);return t(d,y,()=>({children:(n,r,i)=>f(n,i,()=>e(Object.assign(n=>{let r=u(),i=c(`p`,r);return o(r,i),i.className=`text-gray-700`,o(i,s(`你好`)),t(i,y,()=>({children:(t,n,r)=>f(t,r,()=>e(Object.assign(e=>{let t=u();return o(t,s(`123456`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(d,i),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),children:[(t,n,r)=>f(t,r,()=>e(Object.assign(e=>{let t=u(),n=c(`p`,t);return o(t,n),n.className=`text-gray-700`,o(n,s(`主体内容通过 props.children 传入`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,r)=>f(t,r,()=>e(Object.assign(e=>{let t=u(),n=c(`p`,t);return o(t,n),n.className=`text-gray-600`,o(n,s(`这与 React 的 children 语义一致`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),a.insertBefore(d,i),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{}))});export{x as default};
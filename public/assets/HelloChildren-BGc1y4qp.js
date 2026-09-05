import{Et as e,K as t,W as n,_n as r,b as i,fn as a,gn as o,hn as s,mn as c,nt as l,q as u,x as d,z as f}from"./rue-runtime-CwEGJ854.js";import{t as p}from"./createHomeSplitExamplePage-BwH-lO_t.js";var m=r(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),h=r(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Hello children 示例</h2><!--rue:opaque-hole:0--></div></div>`),g=t=>{let r=n(t.children);return u(e(Object.assign(e=>{let t=m().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[1],a=n.parentNode;return i({parent:a,before:n},()=>r.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{r.set(e.children)}),()=>t)},_=()=>u(e(Object.assign(e=>{let t=s(`div`,e);return t.className=`rounded-md border bg-white p-3 space-y-1`,a(t,o(`我是 world`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})),v=p({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

const Hello: FC = props => {
  return (
    <div className="rounded-md border bg-white p-3 space-y-1">
      <p className="text-gray-800">我是hello组件</p>
      <span className="text-gray-600">这是我的children {props.children}</span>
    </div>
  )
}

const World: FC = () => {
  return <div className="rounded-md border bg-white p-3 space-y-1">我是 world</div>
}

const HelloChildrenDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-semibold">Hello children 示例</h2>
        <Hello>
          <World />
        </Hello>
      </div>
    </div>
  )
}

export default HelloChildrenDemo
`,Demo:()=>u(e(Object.assign(n=>{let r=h().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,o=c(a);return t(o,g,()=>({children:(n,r,i)=>d(n,i,()=>e(Object.assign(e=>{let n=l();return t(n,_,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(o,i),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{}))});export{v as default};
import{E as e,T as t,Vt as n,_n as r,_t as i,at as a,ct as o,et as s,gn as c,hn as l,pn as u,st as d,vn as f}from"./rue-runtime-HIMg8Lz8.js";import{t as p}from"./createHomeSplitExamplePage-DNdswIPW.js";var m=f(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),h=f(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Hello children 示例</h2><!--rue:opaque-hole:0--></div></div>`),g=e=>{let r=a(e.children);return o(n(Object.assign(e=>{let n=m().content.cloneNode(!0).firstChild,i=n.childNodes[1].childNodes[1],a=i.parentNode;return t({parent:a,before:i},()=>r.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{r.set(e.children)}),()=>e)},_=()=>o(n(Object.assign(e=>{let t=c(`div`,e);return t.className=`rounded-md border bg-white p-3 space-y-1`,u(t,r(`我是 world`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{})),v=p({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(n(Object.assign(t=>{let r=h().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1],o=a.parentNode,s=l(o);return d(s,g,()=>({children:(t,r,a)=>e(t,a,()=>n(Object.assign(e=>{let t=i();return d(t,_,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(s,a),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{}))});export{v as default};
import{B as e,Bt as t,F as n,I as r,P as i,V as a,Vt as o,W as s,Wt as c,en as l,fn as u,gn as d,hn as f,mn as p,yn as m,z as h}from"./rue-runtime-BWbIfNT8.js";import{t as g}from"./createHomeSplitExamplePage-Cjn7V321.js";var _=m(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),v=m(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Hello children 示例</h2><!--rue:opaque-hole:0--></div></div>`),y=(n,i,a)=>{let o=s(h(n,`children`));return r(c(e=>{let n=_().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[1],i=r.parentNode;return t({parent:i,before:r},()=>o.get(),()=>({})),[n,n]}),e=>l(()=>{o.set(e.children)}),()=>e(n))},b=(e,t,n)=>a(e=>{let t=f(`div`,e);return t.setAttribute(`class`,`rounded-md border bg-white p-3 space-y-1`),u(t,d(`我是 world`)),[t,t]}),x=(e,r,a)=>c(e=>{let r=v().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1],s=a.parentNode,l=(e,t,r)=>{let a=()=>i(y,()=>({children:(e,t,r)=>{let i=()=>c(e=>{let t=p();n(t,b,()=>({}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));return e==null?a():o(e,r,a)},u=a.nextSibling;return s.removeChild(a),t({parent:s,before:u},()=>l,()=>({})),[r,r]}),S=`import { type FC } from '@rue-js/rue'

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
`,C=(e,t,r)=>i(g,()=>({options:{title:`Hello children`,source:S},children:(e,t,r)=>{let i=()=>c(e=>{let t=p();n(t,x,()=>({}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{C as default};
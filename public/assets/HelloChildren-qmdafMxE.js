import{Bt as e,H as t,U as n,V as r,Vt as i,Wt as a,_t as o,en as s,fn as c,gn as l,gt as u,hn as d,mn as f,vt as p,yn as m,yt as h}from"./rue-runtime-Cv6BZekS.js";import{t as g}from"./createHomeSplitExamplePage-DqLcVC_n.js";var _=m(`<div class="rounded-md border bg-white p-3 space-y-1"><p class="text-gray-800">我是hello组件</p><span class="text-gray-600">这是我的children <!--rue:text-hole:0--></span></div>`),v=m(`<div class="card bg-base-100 shadow"><div class="card-body space-y-3"><h2 class="text-2xl font-semibold">Hello children 示例</h2><!--rue:opaque-hole:0--></div></div>`),y=(t,r,i)=>{let c=p(u(t,`children`));return n(a(t=>{let n=_().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[1],i=r.parentNode;return e({parent:i,before:r},()=>c.get(),()=>({})),[n,n]}),e=>s(()=>{c.set(e.children)}),()=>o(t))},b=(e,t,n)=>h(e=>{let t=d(`div`,e);return t.setAttribute(`class`,`rounded-md border bg-white p-3 space-y-1`),c(t,l(`我是 world`)),[t,t]}),x=(n,o,s)=>a(n=>{let o=v().content.cloneNode(!0).firstChild,s=o.childNodes[0].childNodes[1],c=s.parentNode,u=(e,n,o)=>{let s=()=>r(y,()=>({children:(e,n,r)=>{let o=()=>a(e=>{let n=f();t(n,b,()=>({}));let r=l(``),i=l(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));return e==null?s():i(e,o,s)},d=s.nextSibling;return c.removeChild(s),e({parent:c,before:d},()=>u,()=>({})),[o,o]}),S=`import { type FC } from '@rue-js/rue'

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
`,C=(e,n,o)=>r(g,()=>({options:{title:`Hello children`,source:S},children:(e,n,r)=>{let o=()=>a(e=>{let n=f();t(n,x,()=>({}));let r=l(``),i=l(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?o():i(e,r,o)}}));export{C as default};
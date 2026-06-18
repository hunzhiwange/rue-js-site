import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,l as o,s,st as c,t as l}from"./vapor-runtime-iQZthBPQ.js";import{t as u}from"./createHomeSplitExamplePage-C98rg19g.js";var d=l=>o(o=>{let u=r(`div`,o);c(u,`rounded-md border bg-white p-3 space-y-1`);let d=r(`p`,u);n(u,d),c(d,`text-gray-800`),n(d,e(`我是hello组件`));let f=r(`span`,u);n(u,f),c(f,`text-gray-600`),n(f,e(`这是我的children `));let p=i(`rue:children:anchor`);return n(f,p),a(()=>{let e=l.children;t(()=>s(e,f,p))}),u}),f=()=>o(t=>{let i=r(`div`,t);return c(i,`rounded-md border bg-white p-3 space-y-1`),n(i,e(`我是 world`)),i}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(t=>{let a=r(`div`,t);c(a,`card bg-base-100 shadow`);let o=r(`div`,a);n(a,o),c(o,`card-body space-y-3`);let u=r(`h2`,o);n(o,u),c(u,`text-2xl font-semibold`),n(u,e(`Hello children 示例`));let p=i(`rue:component:anchor`);return n(o,p),s(l(d,{children:l(f,{})}),o,p),a})});export{p as default};
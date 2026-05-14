import{F as e,K as t,L as n,N as r,R as i,_t as a,d as o,l as s,t as c,ut as l}from"./vapor-runtime-Dfq7aA8z.js";import{t as u}from"./createHomeSplitExamplePage-DJ9ZPmKq.js";var d=c=>o(o=>{let u=n(`div`,o);t(u,`rounded-md border bg-white p-3 space-y-1`);let d=n(`p`,u);r(u,d),t(d,`text-gray-800`),r(d,i(`我是hello组件`));let f=n(`span`,u);r(u,f),t(f,`text-gray-600`),r(f,i(`这是我的children `));let p=e(`rue:children:anchor`);return r(f,p),a(()=>{let e=c.children;l(()=>s(e,f,p))}),u}),f=()=>o(e=>{let a=n(`div`,e);return t(a,`rounded-md border bg-white p-3 space-y-1`),r(a,i(`我是 world`)),a}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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

export default HelloChildrenDemo`,Demo:()=>o(a=>{let o=n(`div`,a);t(o,`card bg-base-100 shadow`);let l=n(`div`,o);r(o,l),t(l,`card-body space-y-3`);let u=n(`h2`,l);r(l,u),t(u,`text-2xl font-semibold`),r(u,i(`Hello children 示例`));let p=e(`rue:component:anchor`);return r(l,p),s(c(d,{children:c(f,{})}),l,p),o})});export{p as default};
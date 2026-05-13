import{G as e,I as t,L as n,M as r,P as i,bt as a,c as o,pt as s,t as c,u as l}from"./vapor-runtime-D3a-68js.js";import{t as u}from"./createHomeSplitExamplePage-CLNmVfsf.js";var d=c=>l(()=>{let l=t(`div`);e(l,`rounded-md border bg-white p-3 space-y-1`);let u=t(`p`);r(l,u),e(u,`text-gray-800`),r(u,n(`我是hello组件`));let d=t(`span`);r(l,d),e(d,`text-gray-600`),r(d,n(`这是我的children `));let f=i(`rue:children:anchor`);return r(d,f),a(()=>{let e=c.children;s(()=>o(e,d,f))}),l}),f=()=>l(()=>{let i=t(`div`);return e(i,`rounded-md border bg-white p-3 space-y-1`),r(i,n(`我是 world`)),i}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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

export default HelloChildrenDemo`,Demo:()=>l(()=>{let a=t(`div`);e(a,`card bg-base-100 shadow`);let s=t(`div`);r(a,s),e(s,`card-body space-y-3`);let l=t(`h2`);r(s,l),e(l,`text-2xl font-semibold`),r(l,n(`Hello children 示例`));let u=i(`rue:component:anchor`);return r(s,u),o(c(d,{children:c(f,{})}),s,u),a})});export{p as default};
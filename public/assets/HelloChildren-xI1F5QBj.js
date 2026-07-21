import{Tt as e,dt as t,mt as n,pt as r,st as i,tn as a,vn as o}from"./context-8lXZvIn-.js";import{l as s,o as c,t as l}from"./vapor-runtime-ygJWVcNn.js";import{t as u}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var d=l=>s(s=>{let u=r(`div`,s);e(u,`rounded-md border bg-white p-3 space-y-1`);let d=r(`p`,u);i(u,d),e(d,`text-gray-800`),i(d,n(`我是hello组件`));let f=r(`span`,u);i(u,f),e(f,`text-gray-600`),i(f,n(`这是我的children `));let p=t(`rue:children:anchor`);return i(f,p),a(()=>{let e=l.children;o(()=>c(e,f,p))}),u}),f=()=>s(t=>{let a=r(`div`,t);return e(a,`rounded-md border bg-white p-3 space-y-1`),i(a,n(`我是 world`)),a}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(a=>{let o=r(`div`,a);e(o,`card bg-base-100 shadow`);let s=r(`div`,o);i(o,s),e(s,`card-body space-y-3`);let u=r(`h2`,s);i(s,u),e(u,`text-2xl font-semibold`),i(u,n(`Hello children 示例`));let p=t(`rue:component:anchor`);return i(s,p),c(l(d,{children:l(f,{})}),s,p),o})});export{p as default};
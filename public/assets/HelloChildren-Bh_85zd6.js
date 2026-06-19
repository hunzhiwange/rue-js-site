import{Q as e,Qt as t,Wt as n,X as r,et as i,l as a,lt as o,o as s,t as c,tt as l}from"./vapor-runtime-CXIalONM.js";import{t as u}from"./createHomeSplitExamplePage-Br1mQ323.js";var d=c=>a(a=>{let u=i(`div`,a);o(u,`rounded-md border bg-white p-3 space-y-1`);let d=i(`p`,u);r(u,d),o(d,`text-gray-800`),r(d,l(`我是hello组件`));let f=i(`span`,u);r(u,f),o(f,`text-gray-600`),r(f,l(`这是我的children `));let p=e(`rue:children:anchor`);return r(f,p),t(()=>{let e=c.children;n(()=>s(e,f,p))}),u}),f=()=>a(e=>{let t=i(`div`,e);return o(t,`rounded-md border bg-white p-3 space-y-1`),r(t,l(`我是 world`)),t}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>a(t=>{let n=i(`div`,t);o(n,`card bg-base-100 shadow`);let a=i(`div`,n);r(n,a),o(a,`card-body space-y-3`);let u=i(`h2`,a);r(a,u),o(u,`text-2xl font-semibold`),r(u,l(`Hello children 示例`));let p=e(`rue:component:anchor`);return r(a,p),s(c(d,{children:c(f,{})}),a,p),n})});export{p as default};
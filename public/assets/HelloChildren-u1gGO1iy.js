import{$ as e,$t as t,Gt as n,Z as r,l as i,nt as a,o,t as s,tt as c,ut as l}from"./vapor-runtime-CKrmRMZX.js";import{t as u}from"./createHomeSplitExamplePage-Q644r2Bq.js";var d=s=>i(i=>{let u=c(`div`,i);l(u,`rounded-md border bg-white p-3 space-y-1`);let d=c(`p`,u);r(u,d),l(d,`text-gray-800`),r(d,a(`我是hello组件`));let f=c(`span`,u);r(u,f),l(f,`text-gray-600`),r(f,a(`这是我的children `));let p=e(`rue:children:anchor`);return r(f,p),t(()=>{let e=s.children;n(()=>o(e,f,p))}),u}),f=()=>i(e=>{let t=c(`div`,e);return l(t,`rounded-md border bg-white p-3 space-y-1`),r(t,a(`我是 world`)),t}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>i(t=>{let n=c(`div`,t);l(n,`card bg-base-100 shadow`);let i=c(`div`,n);r(n,i),l(i,`card-body space-y-3`);let u=c(`h2`,i);r(i,u),l(u,`text-2xl font-semibold`),r(u,a(`Hello children 示例`));let p=e(`rue:component:anchor`);return r(i,p),o(s(d,{children:s(f,{})}),i,p),n})});export{p as default};
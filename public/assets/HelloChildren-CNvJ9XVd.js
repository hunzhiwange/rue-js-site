import{$ as e,B as t,Dt as n,G as r,H as i,W as a,l as o,s,t as c,yt as l}from"./vapor-runtime-C1rlwc61.js";import{t as u}from"./createHomeSplitExamplePage-BftZ6-s2.js";var d=c=>o(o=>{let u=a(`div`,o);e(u,`rounded-md border bg-white p-3 space-y-1`);let d=a(`p`,u);t(u,d),e(d,`text-gray-800`),t(d,r(`我是hello组件`));let f=a(`span`,u);t(u,f),e(f,`text-gray-600`),t(f,r(`这是我的children `));let p=i(`rue:children:anchor`);return t(f,p),n(()=>{let e=c.children;l(()=>s(e,f,p))}),u}),f=()=>o(n=>{let i=a(`div`,n);return e(i,`rounded-md border bg-white p-3 space-y-1`),t(i,r(`我是 world`)),i}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(n=>{let o=a(`div`,n);e(o,`card bg-base-100 shadow`);let l=a(`div`,o);t(o,l),e(l,`card-body space-y-3`);let u=a(`h2`,l);t(l,u),e(u,`text-2xl font-semibold`),t(u,r(`Hello children 示例`));let p=i(`rue:component:anchor`);return t(l,p),s(c(d,{children:c(f,{})}),l,p),o})});export{p as default};
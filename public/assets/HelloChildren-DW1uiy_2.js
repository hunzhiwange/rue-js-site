import{$t as e,Q as t,dt as n,et as r,l as i,nt as a,o,rt as s,t as c,zt as l}from"./vapor-runtime-DsQWl-IB.js";import{t as u}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var d=c=>i(i=>{let u=a(`div`,i);n(u,`rounded-md border bg-white p-3 space-y-1`);let d=a(`p`,u);t(u,d),n(d,`text-gray-800`),t(d,s(`我是hello组件`));let f=a(`span`,u);t(u,f),n(f,`text-gray-600`),t(f,s(`这是我的children `));let p=r(`rue:children:anchor`);return t(f,p),l(()=>{let t=c.children;e(()=>o(t,f,p))}),u}),f=()=>i(e=>{let r=a(`div`,e);return n(r,`rounded-md border bg-white p-3 space-y-1`),t(r,s(`我是 world`)),r}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>i(e=>{let i=a(`div`,e);n(i,`card bg-base-100 shadow`);let l=a(`div`,i);t(i,l),n(l,`card-body space-y-3`);let u=a(`h2`,l);t(l,u),n(u,`text-2xl font-semibold`),t(u,s(`Hello children 示例`));let p=r(`rue:component:anchor`);return t(l,p),o(c(d,{children:c(f,{})}),l,p),i})});export{p as default};
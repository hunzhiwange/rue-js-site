import{$ as e,Vt as t,Y as n,Yt as r,Z as i,ct as a,d as o,et as s,l as c,t as l}from"./vapor-runtime-BR_2rwNk.js";import{t as u}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var d=l=>o(o=>{let u=e(`div`,o);a(u,`rounded-md border bg-white p-3 space-y-1`);let d=e(`p`,u);n(u,d),a(d,`text-gray-800`),n(d,s(`我是hello组件`));let f=e(`span`,u);n(u,f),a(f,`text-gray-600`),n(f,s(`这是我的children `));let p=i(`rue:children:anchor`);return n(f,p),r(()=>{let e=l.children;t(()=>c(e,f,p))}),u}),f=()=>o(t=>{let r=e(`div`,t);return a(r,`rounded-md border bg-white p-3 space-y-1`),n(r,s(`我是 world`)),r}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(t=>{let r=e(`div`,t);a(r,`card bg-base-100 shadow`);let o=e(`div`,r);n(r,o),a(o,`card-body space-y-3`);let u=e(`h2`,o);n(o,u),a(u,`text-2xl font-semibold`),n(u,s(`Hello children 示例`));let p=i(`rue:component:anchor`);return n(o,p),c(l(d,{children:l(f,{})}),o,p),r})});export{p as default};
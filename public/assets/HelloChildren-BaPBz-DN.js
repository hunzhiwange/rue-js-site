import{$ as e,Vt as t,Y as n,Yt as r,Z as i,ct as a,et as o,l as s,s as c,t as l}from"./vapor-runtime-DHPuOjqh.js";import{t as u}from"./createHomeSplitExamplePage-BB_cTfze.js";var d=l=>s(s=>{let u=e(`div`,s);a(u,`rounded-md border bg-white p-3 space-y-1`);let d=e(`p`,u);n(u,d),a(d,`text-gray-800`),n(d,o(`我是hello组件`));let f=e(`span`,u);n(u,f),a(f,`text-gray-600`),n(f,o(`这是我的children `));let p=i(`rue:children:anchor`);return n(f,p),r(()=>{let e=l.children;t(()=>c(e,f,p))}),u}),f=()=>s(t=>{let r=e(`div`,t);return a(r,`rounded-md border bg-white p-3 space-y-1`),n(r,o(`我是 world`)),r}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(t=>{let r=e(`div`,t);a(r,`card bg-base-100 shadow`);let s=e(`div`,r);n(r,s),a(s,`card-body space-y-3`);let u=e(`h2`,s);n(s,u),a(u,`text-2xl font-semibold`),n(u,o(`Hello children 示例`));let p=i(`rue:component:anchor`);return n(s,p),c(l(d,{children:l(f,{})}),s,p),r})});export{p as default};
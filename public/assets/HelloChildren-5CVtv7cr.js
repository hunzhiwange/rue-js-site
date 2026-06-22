import{Q as e,Vt as t,it as n,l as r,o as i,pt as a,rt as o,t as s,tn as c,tt as l}from"./vapor-runtime-x7F5M-49.js";import{t as u}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var d=s=>r(r=>{let u=o(`div`,r);a(u,`rounded-md border bg-white p-3 space-y-1`);let d=o(`p`,u);e(u,d),a(d,`text-gray-800`),e(d,n(`我是hello组件`));let f=o(`span`,u);e(u,f),a(f,`text-gray-600`),e(f,n(`这是我的children `));let p=l(`rue:children:anchor`);return e(f,p),t(()=>{let e=s.children;c(()=>i(e,f,p))}),u}),f=()=>r(t=>{let r=o(`div`,t);return a(r,`rounded-md border bg-white p-3 space-y-1`),e(r,n(`我是 world`)),r}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>r(t=>{let r=o(`div`,t);a(r,`card bg-base-100 shadow`);let c=o(`div`,r);e(r,c),a(c,`card-body space-y-3`);let u=o(`h2`,c);e(c,u),a(u,`text-2xl font-semibold`),e(u,n(`Hello children 示例`));let p=l(`rue:component:anchor`);return e(c,p),i(s(d,{children:s(f,{})}),c,p),r})});export{p as default};
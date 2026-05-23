import{H as e,K as t,W as n,d as r,kt as i,l as a,q as o,t as s,tt as c,xt as l}from"./vapor-runtime-EUvELKQT.js";import{t as u}from"./createHomeSplitExamplePage-BuifU8mn.js";var d=s=>r(r=>{let u=t(`div`,r);c(u,`rounded-md border bg-white p-3 space-y-1`);let d=t(`p`,u);e(u,d),c(d,`text-gray-800`),e(d,o(`我是hello组件`));let f=t(`span`,u);e(u,f),c(f,`text-gray-600`),e(f,o(`这是我的children `));let p=n(`rue:children:anchor`);return e(f,p),i(()=>{let e=s.children;l(()=>a(e,f,p))}),u}),f=()=>r(n=>{let r=t(`div`,n);return c(r,`rounded-md border bg-white p-3 space-y-1`),e(r,o(`我是 world`)),r}),p=u({title:`Hello children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>r(r=>{let i=t(`div`,r);c(i,`card bg-base-100 shadow`);let l=t(`div`,i);e(i,l),c(l,`card-body space-y-3`);let u=t(`h2`,l);e(l,u),c(u,`text-2xl font-semibold`),e(u,o(`Hello children 示例`));let p=n(`rue:component:anchor`);return e(l,p),a(s(d,{children:s(f,{})}),l,p),i})});export{p as default};
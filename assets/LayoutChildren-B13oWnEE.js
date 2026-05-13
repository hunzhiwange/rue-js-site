import{F as e,G as t,I as n,L as r,M as i,P as a,bt as o,c as s,pt as c,t as l,u}from"./vapor-runtime-D3a-68js.js";import{n as d,t as f}from"./src-BfQKH6_d.js";import{t as p}from"./createHomeSplitExamplePage-CLNmVfsf.js";var m=e=>u(()=>{let l=n(`div`);t(l,`rounded-md border bg-white p-3 space-y-1`);let u=n(`p`);i(l,u),t(u,`text-gray-800`),i(u,r(`我是hello组件`));let d=n(`span`);i(l,d),t(d,`text-gray-600`),i(d,r(`这是我的children `));let f=a(`rue:children:anchor`);return i(d,f),o(()=>{let t=e.children;c(()=>s(t,d,f))}),l}),h=e=>u(()=>{let r=n(`div`);t(r,`layout border border-gray-300 p-4 rounded-md`);let l=n(`div`);i(r,l),t(l,`layout-header bg-gray-100 p-3`);let u=a(`rue:slot:anchor`);i(l,u),o(()=>{let t=e.header;c(()=>s(t,l,u))});let d=n(`div`);i(r,d),t(d,`layout-content p-3`);let f=a(`rue:children:anchor`);i(d,f),o(()=>{let t=e.children;c(()=>s(t,d,f))});let p=n(`div`);i(r,p),t(p,`layout-footer bg-gray-100 p-3`);let m=a(`rue:slot:anchor`);i(p,m),o(()=>{let t=e.footer;c(()=>s(t,p,m))});let h=n(`div`);i(r,h),t(h,`layout-content bg-gray-100 p-3`);let g=a(`rue:slot:anchor`);return i(h,g),o(()=>{let t=e.content;c(()=>s(t,h,g))}),r}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

const Hello: FC = props => {
  return (
    <div className="rounded-md border bg-white p-3 space-y-1">
      <p className="text-gray-800">我是hello组件</p>
      <span className="text-gray-600">这是我的children {props.children}</span>
    </div>
  )
}

const Layout: FC<{ header?: any; footer?: any; content?: any }> = props => {
  return (
    <div className="layout border border-gray-300 p-4 rounded-md">
      <div className="layout-header bg-gray-100 p-3">{props.header}</div>
      <div className="layout-content p-3">{props.children}</div>
      <div className="layout-footer bg-gray-100 p-3">{props.footer}</div>
      <div className="layout-content bg-gray-100 p-3">{props.content}</div>
    </div>
  )
}

const LayoutChildrenDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-semibold">Layout children 示例</h2>
        <Layout
          header={<div className="text-gray-800 font-semibold">自定义 Header</div>}
          footer={<div className="text-gray-600">自定义 Footer</div>}
          content={
            <div className="space-y-2">
              <Hello>
                <p className="text-gray-700">
                  你好<Hello>123456</Hello>
                </p>
              </Hello>
            </div>
          }
        >
          <p className="text-gray-700">主体内容通过 props.children 传入</p>
          <p className="text-gray-600">这与 React 的 children 语义一致</p>
        </Layout>
      </div>
    </div>
  )
}

export default LayoutChildrenDemo`,Demo:()=>u(()=>{let p=n(`div`);t(p,`card bg-base-100 shadow`);let g=n(`div`);i(p,g),t(g,`card-body space-y-3`);let _=n(`h2`);i(g,_),t(_,`text-2xl font-semibold`),i(_,r(`Layout children 示例`));let v=a(`rue:component:anchor`);i(g,v);let y=u(()=>{let a=e(),o=n(`p`);i(a,o),t(o,`text-gray-700`),i(o,r(`主体内容通过 props.children 传入`));let s=n(`p`);return i(a,s),t(s,`text-gray-600`),i(s,r(`这与 React 的 children 语义一致`)),a});return o(()=>{let e=l(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:y});c(()=>s(e,g,v))}),p})});export{g as default};
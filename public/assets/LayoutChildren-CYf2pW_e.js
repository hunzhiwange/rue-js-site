import{$ as e,$t as t,Gt as n,Z as r,et as i,l as a,nt as o,o as s,t as c,tt as l,ut as u}from"./vapor-runtime-CKrmRMZX.js";import{a as d,i as f}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as p}from"./createHomeSplitExamplePage-Q644r2Bq.js";var m=i=>a(a=>{let c=l(`div`,a);u(c,`rounded-md border bg-white p-3 space-y-1`);let d=l(`p`,c);r(c,d),u(d,`text-gray-800`),r(d,o(`我是hello组件`));let f=l(`span`,c);r(c,f),u(f,`text-gray-600`),r(f,o(`这是我的children `));let p=e(`rue:children:anchor`);return r(f,p),t(()=>{let e=i.children;n(()=>s(e,f,p))}),c}),h=i=>a(a=>{let o=l(`div`,a);u(o,`layout border border-gray-300 p-4 rounded-md`);let c=l(`div`,o);r(o,c),u(c,`layout-header bg-gray-100 p-3`);let d=e(`rue:slot:anchor`);r(c,d),t(()=>{let e=i.header;n(()=>s(e,c,d))});let f=l(`div`,o);r(o,f),u(f,`layout-content p-3`);let p=e(`rue:children:anchor`);r(f,p),t(()=>{let e=i.children;n(()=>s(e,f,p))});let m=l(`div`,o);r(o,m),u(m,`layout-footer bg-gray-100 p-3`);let h=e(`rue:slot:anchor`);r(m,h),t(()=>{let e=i.footer;n(()=>s(e,m,h))});let g=l(`div`,o);r(o,g),u(g,`layout-content bg-gray-100 p-3`);let _=e(`rue:slot:anchor`);return r(g,_),t(()=>{let e=i.content;n(()=>s(e,g,_))}),o}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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

export default LayoutChildrenDemo
`,Demo:()=>a(p=>{let g=l(`div`,p);u(g,`card bg-base-100 shadow`);let _=l(`div`,g);r(g,_),u(_,`card-body space-y-3`);let v=l(`h2`,_);r(_,v),u(v,`text-2xl font-semibold`),r(v,o(`Layout children 示例`));let y=e(`rue:component:anchor`);r(_,y);let b=a(()=>{let e=i(),t=l(`p`,e);r(e,t),u(t,`text-gray-700`),r(t,o(`主体内容通过 props.children 传入`));let n=l(`p`,e);return r(e,n),u(n,`text-gray-600`),r(n,o(`这与 React 的 children 语义一致`)),e});return t(()=>{let e=c(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});n(()=>s(e,_,y))}),g})});export{g as default};
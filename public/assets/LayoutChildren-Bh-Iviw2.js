import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as o,l as s,s as c,st as l,t as u}from"./vapor-runtime-iQZthBPQ.js";import{a as d,i as f}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as p}from"./createHomeSplitExamplePage-C98rg19g.js";var m=o=>s(s=>{let u=r(`div`,s);l(u,`rounded-md border bg-white p-3 space-y-1`);let d=r(`p`,u);n(u,d),l(d,`text-gray-800`),n(d,e(`我是hello组件`));let f=r(`span`,u);n(u,f),l(f,`text-gray-600`),n(f,e(`这是我的children `));let p=i(`rue:children:anchor`);return n(f,p),a(()=>{let e=o.children;t(()=>c(e,f,p))}),u}),h=e=>s(o=>{let s=r(`div`,o);l(s,`layout border border-gray-300 p-4 rounded-md`);let u=r(`div`,s);n(s,u),l(u,`layout-header bg-gray-100 p-3`);let d=i(`rue:slot:anchor`);n(u,d),a(()=>{let n=e.header;t(()=>c(n,u,d))});let f=r(`div`,s);n(s,f),l(f,`layout-content p-3`);let p=i(`rue:children:anchor`);n(f,p),a(()=>{let n=e.children;t(()=>c(n,f,p))});let m=r(`div`,s);n(s,m),l(m,`layout-footer bg-gray-100 p-3`);let h=i(`rue:slot:anchor`);n(m,h),a(()=>{let n=e.footer;t(()=>c(n,m,h))});let g=r(`div`,s);n(s,g),l(g,`layout-content bg-gray-100 p-3`);let _=i(`rue:slot:anchor`);return n(g,_),a(()=>{let n=e.content;t(()=>c(n,g,_))}),s}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(p=>{let g=r(`div`,p);l(g,`card bg-base-100 shadow`);let _=r(`div`,g);n(g,_),l(_,`card-body space-y-3`);let v=r(`h2`,_);n(_,v),l(v,`text-2xl font-semibold`),n(v,e(`Layout children 示例`));let y=i(`rue:component:anchor`);n(_,y);let b=s(()=>{let t=o(),i=r(`p`,t);n(t,i),l(i,`text-gray-700`),n(i,e(`主体内容通过 props.children 传入`));let a=r(`p`,t);return n(t,a),l(a,`text-gray-600`),n(a,e(`这与 React 的 children 语义一致`)),t});return a(()=>{let e=u(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});t(()=>c(e,_,y))}),g})});export{g as default};
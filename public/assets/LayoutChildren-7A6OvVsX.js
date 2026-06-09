import{$ as e,Ht as t,Q as n,Xt as r,Y as i,Z as a,ct as o,et as s,l as c,s as l,t as u}from"./vapor-runtime-aZAg0Qkw.js";import{a as d,i as f}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as p}from"./createHomeSplitExamplePage-CJbW_xoB.js";var m=n=>c(c=>{let u=e(`div`,c);o(u,`rounded-md border bg-white p-3 space-y-1`);let d=e(`p`,u);i(u,d),o(d,`text-gray-800`),i(d,s(`我是hello组件`));let f=e(`span`,u);i(u,f),o(f,`text-gray-600`),i(f,s(`这是我的children `));let p=a(`rue:children:anchor`);return i(f,p),r(()=>{let e=n.children;t(()=>l(e,f,p))}),u}),h=n=>c(s=>{let c=e(`div`,s);o(c,`layout border border-gray-300 p-4 rounded-md`);let u=e(`div`,c);i(c,u),o(u,`layout-header bg-gray-100 p-3`);let d=a(`rue:slot:anchor`);i(u,d),r(()=>{let e=n.header;t(()=>l(e,u,d))});let f=e(`div`,c);i(c,f),o(f,`layout-content p-3`);let p=a(`rue:children:anchor`);i(f,p),r(()=>{let e=n.children;t(()=>l(e,f,p))});let m=e(`div`,c);i(c,m),o(m,`layout-footer bg-gray-100 p-3`);let h=a(`rue:slot:anchor`);i(m,h),r(()=>{let e=n.footer;t(()=>l(e,m,h))});let g=e(`div`,c);i(c,g),o(g,`layout-content bg-gray-100 p-3`);let _=a(`rue:slot:anchor`);return i(g,_),r(()=>{let e=n.content;t(()=>l(e,g,_))}),c}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>c(p=>{let g=e(`div`,p);o(g,`card bg-base-100 shadow`);let _=e(`div`,g);i(g,_),o(_,`card-body space-y-3`);let v=e(`h2`,_);i(_,v),o(v,`text-2xl font-semibold`),i(v,s(`Layout children 示例`));let y=a(`rue:component:anchor`);i(_,y);let b=c(()=>{let t=n(),r=e(`p`,t);i(t,r),o(r,`text-gray-700`),i(r,s(`主体内容通过 props.children 传入`));let a=e(`p`,t);return i(t,a),o(a,`text-gray-600`),i(a,s(`这与 React 的 children 语义一致`)),t});return r(()=>{let e=u(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});t(()=>l(e,_,y))}),g})});export{g as default};
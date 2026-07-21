import{Tt as e,dt as t,ft as n,mt as r,pt as i,st as a,tn as o,vn as s}from"./context-8lXZvIn-.js";import{l as c,o as l,t as u}from"./vapor-runtime-ygJWVcNn.js";import{n as d,t as f}from"./src-CCTNpCXV.js";import{t as p}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var m=n=>c(c=>{let u=i(`div`,c);e(u,`rounded-md border bg-white p-3 space-y-1`);let d=i(`p`,u);a(u,d),e(d,`text-gray-800`),a(d,r(`我是hello组件`));let f=i(`span`,u);a(u,f),e(f,`text-gray-600`),a(f,r(`这是我的children `));let p=t(`rue:children:anchor`);return a(f,p),o(()=>{let e=n.children;s(()=>l(e,f,p))}),u}),h=n=>c(r=>{let c=i(`div`,r);e(c,`layout border border-gray-300 p-4 rounded-md`);let u=i(`div`,c);a(c,u),e(u,`layout-header bg-gray-100 p-3`);let d=t(`rue:slot:anchor`);a(u,d),o(()=>{let e=n.header;s(()=>l(e,u,d))});let f=i(`div`,c);a(c,f),e(f,`layout-content p-3`);let p=t(`rue:children:anchor`);a(f,p),o(()=>{let e=n.children;s(()=>l(e,f,p))});let m=i(`div`,c);a(c,m),e(m,`layout-footer bg-gray-100 p-3`);let h=t(`rue:slot:anchor`);a(m,h),o(()=>{let e=n.footer;s(()=>l(e,m,h))});let g=i(`div`,c);a(c,g),e(g,`layout-content bg-gray-100 p-3`);let _=t(`rue:slot:anchor`);return a(g,_),o(()=>{let e=n.content;s(()=>l(e,g,_))}),c}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>c(p=>{let g=i(`div`,p);e(g,`card bg-base-100 shadow`);let _=i(`div`,g);a(g,_),e(_,`card-body space-y-3`);let v=i(`h2`,_);a(_,v),e(v,`text-2xl font-semibold`),a(v,r(`Layout children 示例`));let y=t(`rue:component:anchor`);a(_,y);let b=c(()=>{let t=n(),o=i(`p`,t);a(t,o),e(o,`text-gray-700`),a(o,r(`主体内容通过 props.children 传入`));let s=i(`p`,t);return a(t,s),e(s,`text-gray-600`),a(s,r(`这与 React 的 children 语义一致`)),t});return o(()=>{let e=u(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});s(()=>l(e,_,y))}),g})});export{g as default};
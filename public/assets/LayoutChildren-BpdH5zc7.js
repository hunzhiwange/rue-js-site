import{Q as e,Vt as t,it as n,l as r,nt as i,o as a,pt as o,rt as s,t as c,tn as l,tt as u}from"./vapor-runtime-x7F5M-49.js";import{a as d,o as f}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as p}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var m=i=>r(r=>{let c=s(`div`,r);o(c,`rounded-md border bg-white p-3 space-y-1`);let d=s(`p`,c);e(c,d),o(d,`text-gray-800`),e(d,n(`我是hello组件`));let f=s(`span`,c);e(c,f),o(f,`text-gray-600`),e(f,n(`这是我的children `));let p=u(`rue:children:anchor`);return e(f,p),t(()=>{let e=i.children;l(()=>a(e,f,p))}),c}),h=n=>r(r=>{let i=s(`div`,r);o(i,`layout border border-gray-300 p-4 rounded-md`);let c=s(`div`,i);e(i,c),o(c,`layout-header bg-gray-100 p-3`);let d=u(`rue:slot:anchor`);e(c,d),t(()=>{let e=n.header;l(()=>a(e,c,d))});let f=s(`div`,i);e(i,f),o(f,`layout-content p-3`);let p=u(`rue:children:anchor`);e(f,p),t(()=>{let e=n.children;l(()=>a(e,f,p))});let m=s(`div`,i);e(i,m),o(m,`layout-footer bg-gray-100 p-3`);let h=u(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.footer;l(()=>a(e,m,h))});let g=s(`div`,i);e(i,g),o(g,`layout-content bg-gray-100 p-3`);let _=u(`rue:slot:anchor`);return e(g,_),t(()=>{let e=n.content;l(()=>a(e,g,_))}),i}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>r(p=>{let g=s(`div`,p);o(g,`card bg-base-100 shadow`);let _=s(`div`,g);e(g,_),o(_,`card-body space-y-3`);let v=s(`h2`,_);e(_,v),o(v,`text-2xl font-semibold`),e(v,n(`Layout children 示例`));let y=u(`rue:component:anchor`);e(_,y);let b=r(()=>{let t=i(),r=s(`p`,t);e(t,r),o(r,`text-gray-700`),e(r,n(`主体内容通过 props.children 传入`));let a=s(`p`,t);return e(t,a),o(a,`text-gray-600`),e(a,n(`这与 React 的 children 语义一致`)),t});return t(()=>{let e=c(h,{header:d(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:d(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:d(`div`,{className:`space-y-2`,children:d(m,{children:f(`p`,{className:`text-gray-700`,children:[`你好`,d(m,{children:`123456`})]})})}),children:b});l(()=>a(e,_,y))}),g})});export{g as default};
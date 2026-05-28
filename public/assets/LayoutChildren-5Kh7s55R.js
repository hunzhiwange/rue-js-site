import{$ as e,Q as t,Vt as n,Y as r,Yt as i,Z as a,ct as o,d as s,et as c,l,t as u}from"./vapor-runtime-BR_2rwNk.js";import{i as d,r as f}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as p}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var m=t=>s(s=>{let u=e(`div`,s);o(u,`rounded-md border bg-white p-3 space-y-1`);let d=e(`p`,u);r(u,d),o(d,`text-gray-800`),r(d,c(`我是hello组件`));let f=e(`span`,u);r(u,f),o(f,`text-gray-600`),r(f,c(`这是我的children `));let p=a(`rue:children:anchor`);return r(f,p),i(()=>{let e=t.children;n(()=>l(e,f,p))}),u}),h=t=>s(s=>{let c=e(`div`,s);o(c,`layout border border-gray-300 p-4 rounded-md`);let u=e(`div`,c);r(c,u),o(u,`layout-header bg-gray-100 p-3`);let d=a(`rue:slot:anchor`);r(u,d),i(()=>{let e=t.header;n(()=>l(e,u,d))});let f=e(`div`,c);r(c,f),o(f,`layout-content p-3`);let p=a(`rue:children:anchor`);r(f,p),i(()=>{let e=t.children;n(()=>l(e,f,p))});let m=e(`div`,c);r(c,m),o(m,`layout-footer bg-gray-100 p-3`);let h=a(`rue:slot:anchor`);r(m,h),i(()=>{let e=t.footer;n(()=>l(e,m,h))});let g=e(`div`,c);r(c,g),o(g,`layout-content bg-gray-100 p-3`);let _=a(`rue:slot:anchor`);return r(g,_),i(()=>{let e=t.content;n(()=>l(e,g,_))}),c}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(p=>{let g=e(`div`,p);o(g,`card bg-base-100 shadow`);let _=e(`div`,g);r(g,_),o(_,`card-body space-y-3`);let v=e(`h2`,_);r(_,v),o(v,`text-2xl font-semibold`),r(v,c(`Layout children 示例`));let y=a(`rue:component:anchor`);r(_,y);let b=s(()=>{let n=t(),i=e(`p`,n);r(n,i),o(i,`text-gray-700`),r(i,c(`主体内容通过 props.children 传入`));let a=e(`p`,n);return r(n,a),o(a,`text-gray-600`),r(a,c(`这与 React 的 children 语义一致`)),n});return i(()=>{let e=u(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});n(()=>l(e,_,y))}),g})});export{g as default};
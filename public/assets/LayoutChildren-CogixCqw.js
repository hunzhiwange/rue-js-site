import{F as e,I as t,K as n,L as r,N as i,R as a,d as o,dt as s,l as c,t as l,vt as u}from"./vapor-runtime-BuwLbCGk.js";import{n as d,t as f}from"./src-BQwLQD8R.js";import{t as p}from"./createHomeSplitExamplePage-2wtBgDCk.js";var m=t=>o(o=>{let l=r(`div`,o);n(l,`rounded-md border bg-white p-3 space-y-1`);let d=r(`p`,l);i(l,d),n(d,`text-gray-800`),i(d,a(`我是hello组件`));let f=r(`span`,l);i(l,f),n(f,`text-gray-600`),i(f,a(`这是我的children `));let p=e(`rue:children:anchor`);return i(f,p),u(()=>{let e=t.children;s(()=>c(e,f,p))}),l}),h=t=>o(a=>{let o=r(`div`,a);n(o,`layout border border-gray-300 p-4 rounded-md`);let l=r(`div`,o);i(o,l),n(l,`layout-header bg-gray-100 p-3`);let d=e(`rue:slot:anchor`);i(l,d),u(()=>{let e=t.header;s(()=>c(e,l,d))});let f=r(`div`,o);i(o,f),n(f,`layout-content p-3`);let p=e(`rue:children:anchor`);i(f,p),u(()=>{let e=t.children;s(()=>c(e,f,p))});let m=r(`div`,o);i(o,m),n(m,`layout-footer bg-gray-100 p-3`);let h=e(`rue:slot:anchor`);i(m,h),u(()=>{let e=t.footer;s(()=>c(e,m,h))});let g=r(`div`,o);i(o,g),n(g,`layout-content bg-gray-100 p-3`);let _=e(`rue:slot:anchor`);return i(g,_),u(()=>{let e=t.content;s(()=>c(e,g,_))}),o}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(p=>{let g=r(`div`,p);n(g,`card bg-base-100 shadow`);let _=r(`div`,g);i(g,_),n(_,`card-body space-y-3`);let v=r(`h2`,_);i(_,v),n(v,`text-2xl font-semibold`),i(v,a(`Layout children 示例`));let y=e(`rue:component:anchor`);i(_,y);let b=o(()=>{let e=t(),o=r(`p`,e);i(e,o),n(o,`text-gray-700`),i(o,a(`主体内容通过 props.children 传入`));let s=r(`p`,e);return i(e,s),n(s,`text-gray-600`),i(s,a(`这与 React 的 children 语义一致`)),e});return u(()=>{let e=l(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});s(()=>c(e,_,y))}),g})});export{g as default};
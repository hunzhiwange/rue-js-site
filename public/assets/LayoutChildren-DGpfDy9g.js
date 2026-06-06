import{G as e,H as t,K as n,W as r,d as i,kt as a,l as o,q as s,t as c,tt as l,xt as u}from"./vapor-runtime-ACs_OvwU.js";import{n as d,t as f}from"./src-B0RvnZVV.js";import{t as p}from"./createHomeSplitExamplePage-DOBN78Vl.js";var m=e=>i(i=>{let c=n(`div`,i);l(c,`rounded-md border bg-white p-3 space-y-1`);let d=n(`p`,c);t(c,d),l(d,`text-gray-800`),t(d,s(`我是hello组件`));let f=n(`span`,c);t(c,f),l(f,`text-gray-600`),t(f,s(`这是我的children `));let p=r(`rue:children:anchor`);return t(f,p),a(()=>{let t=e.children;u(()=>o(t,f,p))}),c}),h=e=>i(i=>{let s=n(`div`,i);l(s,`layout border border-gray-300 p-4 rounded-md`);let c=n(`div`,s);t(s,c),l(c,`layout-header bg-gray-100 p-3`);let d=r(`rue:slot:anchor`);t(c,d),a(()=>{let t=e.header;u(()=>o(t,c,d))});let f=n(`div`,s);t(s,f),l(f,`layout-content p-3`);let p=r(`rue:children:anchor`);t(f,p),a(()=>{let t=e.children;u(()=>o(t,f,p))});let m=n(`div`,s);t(s,m),l(m,`layout-footer bg-gray-100 p-3`);let h=r(`rue:slot:anchor`);t(m,h),a(()=>{let t=e.footer;u(()=>o(t,m,h))});let g=n(`div`,s);t(s,g),l(g,`layout-content bg-gray-100 p-3`);let _=r(`rue:slot:anchor`);return t(g,_),a(()=>{let t=e.content;u(()=>o(t,g,_))}),s}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>i(p=>{let g=n(`div`,p);l(g,`card bg-base-100 shadow`);let _=n(`div`,g);t(g,_),l(_,`card-body space-y-3`);let v=n(`h2`,_);t(_,v),l(v,`text-2xl font-semibold`),t(v,s(`Layout children 示例`));let y=r(`rue:component:anchor`);t(_,y);let b=i(()=>{let r=e(),i=n(`p`,r);t(r,i),l(i,`text-gray-700`),t(i,s(`主体内容通过 props.children 传入`));let a=n(`p`,r);return t(r,a),l(a,`text-gray-600`),t(a,s(`这与 React 的 children 语义一致`)),r});return a(()=>{let e=c(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});u(()=>o(e,_,y))}),g})});export{g as default};
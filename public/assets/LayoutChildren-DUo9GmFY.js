import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,l as s,s as c,t as l,yt as u}from"./vapor-runtime-C1rlwc61.js";import{n as d,t as f}from"./src-BLzF0BqW.js";import{t as p}from"./createHomeSplitExamplePage-BftZ6-s2.js";var m=a=>s(s=>{let l=o(`div`,s);e(l,`rounded-md border bg-white p-3 space-y-1`);let d=o(`p`,l);t(l,d),e(d,`text-gray-800`),t(d,r(`我是hello组件`));let f=o(`span`,l);t(l,f),e(f,`text-gray-600`),t(f,r(`这是我的children `));let p=i(`rue:children:anchor`);return t(f,p),n(()=>{let e=a.children;u(()=>c(e,f,p))}),l}),h=r=>s(a=>{let s=o(`div`,a);e(s,`layout border border-gray-300 p-4 rounded-md`);let l=o(`div`,s);t(s,l),e(l,`layout-header bg-gray-100 p-3`);let d=i(`rue:slot:anchor`);t(l,d),n(()=>{let e=r.header;u(()=>c(e,l,d))});let f=o(`div`,s);t(s,f),e(f,`layout-content p-3`);let p=i(`rue:children:anchor`);t(f,p),n(()=>{let e=r.children;u(()=>c(e,f,p))});let m=o(`div`,s);t(s,m),e(m,`layout-footer bg-gray-100 p-3`);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=r.footer;u(()=>c(e,m,h))});let g=o(`div`,s);t(s,g),e(g,`layout-content bg-gray-100 p-3`);let _=i(`rue:slot:anchor`);return t(g,_),n(()=>{let e=r.content;u(()=>c(e,g,_))}),s}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(p=>{let g=o(`div`,p);e(g,`card bg-base-100 shadow`);let _=o(`div`,g);t(g,_),e(_,`card-body space-y-3`);let v=o(`h2`,_);t(_,v),e(v,`text-2xl font-semibold`),t(v,r(`Layout children 示例`));let y=i(`rue:component:anchor`);t(_,y);let b=s(()=>{let n=a(),i=o(`p`,n);t(n,i),e(i,`text-gray-700`),t(i,r(`主体内容通过 props.children 传入`));let s=o(`p`,n);return t(n,s),e(s,`text-gray-600`),t(s,r(`这与 React 的 children 语义一致`)),n});return n(()=>{let e=l(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});u(()=>c(e,_,y))}),g})});export{g as default};
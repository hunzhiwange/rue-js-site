import{$ as e,Q as t,Qt as n,Wt as r,X as i,et as a,l as o,lt as s,o as c,t as l,tt as u}from"./vapor-runtime-CXIalONM.js";import{a as d,i as f}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as p}from"./createHomeSplitExamplePage-Br1mQ323.js";var m=e=>o(o=>{let l=a(`div`,o);s(l,`rounded-md border bg-white p-3 space-y-1`);let d=a(`p`,l);i(l,d),s(d,`text-gray-800`),i(d,u(`我是hello组件`));let f=a(`span`,l);i(l,f),s(f,`text-gray-600`),i(f,u(`这是我的children `));let p=t(`rue:children:anchor`);return i(f,p),n(()=>{let t=e.children;r(()=>c(t,f,p))}),l}),h=e=>o(o=>{let l=a(`div`,o);s(l,`layout border border-gray-300 p-4 rounded-md`);let u=a(`div`,l);i(l,u),s(u,`layout-header bg-gray-100 p-3`);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let t=e.header;r(()=>c(t,u,d))});let f=a(`div`,l);i(l,f),s(f,`layout-content p-3`);let p=t(`rue:children:anchor`);i(f,p),n(()=>{let t=e.children;r(()=>c(t,f,p))});let m=a(`div`,l);i(l,m),s(m,`layout-footer bg-gray-100 p-3`);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let t=e.footer;r(()=>c(t,m,h))});let g=a(`div`,l);i(l,g),s(g,`layout-content bg-gray-100 p-3`);let _=t(`rue:slot:anchor`);return i(g,_),n(()=>{let t=e.content;r(()=>c(t,g,_))}),l}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(p=>{let g=a(`div`,p);s(g,`card bg-base-100 shadow`);let _=a(`div`,g);i(g,_),s(_,`card-body space-y-3`);let v=a(`h2`,_);i(_,v),s(v,`text-2xl font-semibold`),i(v,u(`Layout children 示例`));let y=t(`rue:component:anchor`);i(_,y);let b=o(()=>{let t=e(),n=a(`p`,t);i(t,n),s(n,`text-gray-700`),i(n,u(`主体内容通过 props.children 传入`));let r=a(`p`,t);return i(t,r),s(r,`text-gray-600`),i(r,u(`这与 React 的 children 语义一致`)),t});return n(()=>{let e=l(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});r(()=>c(e,_,y))}),g})});export{g as default};
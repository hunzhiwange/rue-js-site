import{$t as e,Q as t,dt as n,et as r,l as i,nt as a,o,rt as s,t as c,tt as l,zt as u}from"./vapor-runtime-DsQWl-IB.js";import{a as d,i as f}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as p}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var m=c=>i(i=>{let l=a(`div`,i);n(l,`rounded-md border bg-white p-3 space-y-1`);let d=a(`p`,l);t(l,d),n(d,`text-gray-800`),t(d,s(`我是hello组件`));let f=a(`span`,l);t(l,f),n(f,`text-gray-600`),t(f,s(`这是我的children `));let p=r(`rue:children:anchor`);return t(f,p),u(()=>{let t=c.children;e(()=>o(t,f,p))}),l}),h=s=>i(i=>{let c=a(`div`,i);n(c,`layout border border-gray-300 p-4 rounded-md`);let l=a(`div`,c);t(c,l),n(l,`layout-header bg-gray-100 p-3`);let d=r(`rue:slot:anchor`);t(l,d),u(()=>{let t=s.header;e(()=>o(t,l,d))});let f=a(`div`,c);t(c,f),n(f,`layout-content p-3`);let p=r(`rue:children:anchor`);t(f,p),u(()=>{let t=s.children;e(()=>o(t,f,p))});let m=a(`div`,c);t(c,m),n(m,`layout-footer bg-gray-100 p-3`);let h=r(`rue:slot:anchor`);t(m,h),u(()=>{let t=s.footer;e(()=>o(t,m,h))});let g=a(`div`,c);t(c,g),n(g,`layout-content bg-gray-100 p-3`);let _=r(`rue:slot:anchor`);return t(g,_),u(()=>{let t=s.content;e(()=>o(t,g,_))}),c}),g=p({title:`Layout children`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>i(p=>{let g=a(`div`,p);n(g,`card bg-base-100 shadow`);let _=a(`div`,g);t(g,_),n(_,`card-body space-y-3`);let v=a(`h2`,_);t(_,v),n(v,`text-2xl font-semibold`),t(v,s(`Layout children 示例`));let y=r(`rue:component:anchor`);t(_,y);let b=i(()=>{let e=l(),r=a(`p`,e);t(e,r),n(r,`text-gray-700`),t(r,s(`主体内容通过 props.children 传入`));let i=a(`p`,e);return t(e,i),n(i,`text-gray-600`),t(i,s(`这与 React 的 children 语义一致`)),e});return u(()=>{let t=c(h,{header:f(`div`,{className:`text-gray-800 font-semibold`,children:`自定义 Header`}),footer:f(`div`,{className:`text-gray-600`,children:`自定义 Footer`}),content:f(`div`,{className:`space-y-2`,children:f(m,{children:d(`p`,{className:`text-gray-700`,children:[`你好`,f(m,{children:`123456`})]})})}),children:b});e(()=>o(t,_,y))}),g})});export{g as default};
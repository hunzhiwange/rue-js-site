import{$ as e,Q as t,Qt as n,Wt as r,X as i,et as a,l as o,lt as s,o as c,pt as l,t as u,tt as d}from"./vapor-runtime-CXIalONM.js";import{t as f}from"./createHomeSplitExamplePage-Br1mQ323.js";var p=e=>o(o=>{let u=a(`div`,o);s(u,`box`),n(()=>{l(u,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let d=a(`h3`,u);i(u,d),l(d,{margin:`0 0 8px`});let f=t(`rue:slot:anchor`);i(d,f),n(()=>{let t=e.title;r(()=>c(t,d,f))});let p=a(`div`,u);i(u,p),s(p,`content`);let m=t(`rue:children:anchor`);return i(p,m),n(()=>{let t=e.children;r(()=>c(t,p,m))}),u}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

const Box: FC<{ title: string; background: string }> = props => {
  return (
    <div
      className="box"
      style={{
        border: '1px solid #ddd',
        padding: '12px',
        marginBottom: '12px',
        background: props.background,
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{props.title}</h3>
      <div className="content">{props.children}</div>
    </div>
  )
}

const BasicChildrenBoxDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold">基础 children Box</h2>
        <Box title="基本 children" background="purple">
          <p>这是子内容 A</p>
          <p>这是子内容 B</p>
        </Box>
      </div>
    </div>
  )
}

export default BasicChildrenBoxDemo
`,Demo:()=>o(n=>{let r=a(`div`,n);s(r,`card bg-base-100 shadow`);let l=a(`div`,r);i(r,l),s(l,`card-body`);let f=a(`h2`,l);i(l,f),s(f,`text-2xl font-semibold`),i(f,d(`基础 children Box`));let m=t(`rue:component:anchor`);return i(l,m),c(u(p,{title:`基本 children`,background:`purple`,children:o(()=>{let t=e(),n=a(`p`,t);i(t,n),i(n,d(`这是子内容 A`));let r=a(`p`,t);return i(t,r),i(r,d(`这是子内容 B`)),t})}),l,m),r})});export{m as default};
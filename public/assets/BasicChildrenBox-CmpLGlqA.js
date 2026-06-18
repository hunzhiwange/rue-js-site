import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as o,dt as s,l as c,s as l,st as u,t as d}from"./vapor-runtime-iQZthBPQ.js";import{t as f}from"./createHomeSplitExamplePage-C98rg19g.js";var p=e=>c(o=>{let c=r(`div`,o);u(c,`box`),a(()=>{s(c,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let d=r(`h3`,c);n(c,d),s(d,{margin:`0 0 8px`});let f=i(`rue:slot:anchor`);n(d,f),a(()=>{let n=e.title;t(()=>l(n,d,f))});let p=r(`div`,c);n(c,p),u(p,`content`);let m=i(`rue:children:anchor`);return n(p,m),a(()=>{let n=e.children;t(()=>l(n,p,m))}),c}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>c(t=>{let a=r(`div`,t);u(a,`card bg-base-100 shadow`);let s=r(`div`,a);n(a,s),u(s,`card-body`);let f=r(`h2`,s);n(s,f),u(f,`text-2xl font-semibold`),n(f,e(`基础 children Box`));let m=i(`rue:component:anchor`);return n(s,m),l(d(p,{title:`基本 children`,background:`purple`,children:c(()=>{let t=o(),i=r(`p`,t);n(t,i),n(i,e(`这是子内容 A`));let a=r(`p`,t);return n(t,a),n(a,e(`这是子内容 B`)),t})}),s,m),a})});export{m as default};
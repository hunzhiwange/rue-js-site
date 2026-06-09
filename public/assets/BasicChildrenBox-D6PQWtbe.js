import{$ as e,Ht as t,Q as n,Xt as r,Y as i,Z as a,ct as o,et as s,ft as c,l,s as u,t as d}from"./vapor-runtime-aZAg0Qkw.js";import{t as f}from"./createHomeSplitExamplePage-CJbW_xoB.js";var p=n=>l(s=>{let l=e(`div`,s);o(l,`box`),r(()=>{c(l,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:n.background})});let d=e(`h3`,l);i(l,d),c(d,{margin:`0 0 8px`});let f=a(`rue:slot:anchor`);i(d,f),r(()=>{let e=n.title;t(()=>u(e,d,f))});let p=e(`div`,l);i(l,p),o(p,`content`);let m=a(`rue:children:anchor`);return i(p,m),r(()=>{let e=n.children;t(()=>u(e,p,m))}),l}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>l(t=>{let r=e(`div`,t);o(r,`card bg-base-100 shadow`);let c=e(`div`,r);i(r,c),o(c,`card-body`);let f=e(`h2`,c);i(c,f),o(f,`text-2xl font-semibold`),i(f,s(`基础 children Box`));let m=a(`rue:component:anchor`);return i(c,m),u(d(p,{title:`基本 children`,background:`purple`,children:l(()=>{let t=n(),r=e(`p`,t);i(t,r),i(r,s(`这是子内容 A`));let a=e(`p`,t);return i(t,a),i(a,s(`这是子内容 B`)),t})}),c,m),r})});export{m as default};
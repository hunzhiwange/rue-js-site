import{$ as e,Q as t,Vt as n,Y as r,Yt as i,Z as a,ct as o,et as s,ft as c,l,s as u,t as d}from"./vapor-runtime-DHPuOjqh.js";import{t as f}from"./createHomeSplitExamplePage-BB_cTfze.js";var p=t=>l(s=>{let l=e(`div`,s);o(l,`box`),i(()=>{c(l,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:t.background})});let d=e(`h3`,l);r(l,d),c(d,{margin:`0 0 8px`});let f=a(`rue:slot:anchor`);r(d,f),i(()=>{let e=t.title;n(()=>u(e,d,f))});let p=e(`div`,l);r(l,p),o(p,`content`);let m=a(`rue:children:anchor`);return r(p,m),i(()=>{let e=t.children;n(()=>u(e,p,m))}),l}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>l(n=>{let i=e(`div`,n);o(i,`card bg-base-100 shadow`);let c=e(`div`,i);r(i,c),o(c,`card-body`);let f=e(`h2`,c);r(c,f),o(f,`text-2xl font-semibold`),r(f,s(`基础 children Box`));let m=a(`rue:component:anchor`);return r(c,m),u(d(p,{title:`基本 children`,background:`purple`,children:l(()=>{let n=t(),i=e(`p`,n);r(n,i),r(i,s(`这是子内容 A`));let a=e(`p`,n);return r(n,a),r(a,s(`这是子内容 B`)),n})}),c,m),i})});export{m as default};
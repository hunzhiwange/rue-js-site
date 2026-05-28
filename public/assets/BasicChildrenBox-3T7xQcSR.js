import{$ as e,Q as t,Vt as n,Y as r,Yt as i,Z as a,ct as o,d as s,et as c,ft as l,l as u,t as d}from"./vapor-runtime-BR_2rwNk.js";import{t as f}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var p=t=>s(s=>{let c=e(`div`,s);o(c,`box`),i(()=>{l(c,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:t.background})});let d=e(`h3`,c);r(c,d),l(d,{margin:`0 0 8px`});let f=a(`rue:slot:anchor`);r(d,f),i(()=>{let e=t.title;n(()=>u(e,d,f))});let p=e(`div`,c);r(c,p),o(p,`content`);let m=a(`rue:children:anchor`);return r(p,m),i(()=>{let e=t.children;n(()=>u(e,p,m))}),c}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(n=>{let i=e(`div`,n);o(i,`card bg-base-100 shadow`);let l=e(`div`,i);r(i,l),o(l,`card-body`);let f=e(`h2`,l);r(l,f),o(f,`text-2xl font-semibold`),r(f,c(`基础 children Box`));let m=a(`rue:component:anchor`);return r(l,m),u(d(p,{title:`基本 children`,background:`purple`,children:s(()=>{let n=t(),i=e(`p`,n);r(n,i),r(i,c(`这是子内容 A`));let a=e(`p`,n);return r(n,a),r(a,c(`这是子内容 B`)),n})}),l,m),i})});export{m as default};
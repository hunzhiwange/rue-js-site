import{$ as e,$t as t,Gt as n,Z as r,et as i,l as a,mt as o,nt as s,o as c,t as l,tt as u,ut as d}from"./vapor-runtime-CKrmRMZX.js";import{t as f}from"./createHomeSplitExamplePage-Q644r2Bq.js";var p=i=>a(a=>{let s=u(`div`,a);d(s,`box`),t(()=>{o(s,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:i.background})});let l=u(`h3`,s);r(s,l),o(l,{margin:`0 0 8px`});let f=e(`rue:slot:anchor`);r(l,f),t(()=>{let e=i.title;n(()=>c(e,l,f))});let p=u(`div`,s);r(s,p),d(p,`content`);let m=e(`rue:children:anchor`);return r(p,m),t(()=>{let e=i.children;n(()=>c(e,p,m))}),s}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>a(t=>{let n=u(`div`,t);d(n,`card bg-base-100 shadow`);let o=u(`div`,n);r(n,o),d(o,`card-body`);let f=u(`h2`,o);r(o,f),d(f,`text-2xl font-semibold`),r(f,s(`基础 children Box`));let m=e(`rue:component:anchor`);return r(o,m),c(l(p,{title:`基本 children`,background:`purple`,children:a(()=>{let e=i(),t=u(`p`,e);r(e,t),r(t,s(`这是子内容 A`));let n=u(`p`,e);return r(e,n),r(n,s(`这是子内容 B`)),e})}),o,m),n})});export{m as default};
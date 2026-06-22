import{Q as e,Vt as t,it as n,l as r,nt as i,o as a,pt as o,rt as s,t as c,tn as l,tt as u,vt as d}from"./vapor-runtime-x7F5M-49.js";import{t as f}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var p=n=>r(r=>{let i=s(`div`,r);o(i,`box`),t(()=>{d(i,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:n.background})});let c=s(`h3`,i);e(i,c),d(c,{margin:`0 0 8px`});let f=u(`rue:slot:anchor`);e(c,f),t(()=>{let e=n.title;l(()=>a(e,c,f))});let p=s(`div`,i);e(i,p),o(p,`content`);let m=u(`rue:children:anchor`);return e(p,m),t(()=>{let e=n.children;l(()=>a(e,p,m))}),i}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>r(t=>{let l=s(`div`,t);o(l,`card bg-base-100 shadow`);let d=s(`div`,l);e(l,d),o(d,`card-body`);let f=s(`h2`,d);e(d,f),o(f,`text-2xl font-semibold`),e(f,n(`基础 children Box`));let m=u(`rue:component:anchor`);return e(d,m),a(c(p,{title:`基本 children`,background:`purple`,children:r(()=>{let t=i(),r=s(`p`,t);e(t,r),e(r,n(`这是子内容 A`));let a=s(`p`,t);return e(t,a),e(a,n(`这是子内容 B`)),t})}),d,m),l})});export{m as default};
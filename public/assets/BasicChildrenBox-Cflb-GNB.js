import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,l as s,rt as c,s as l,t as u,yt as d}from"./vapor-runtime-C1rlwc61.js";import{t as f}from"./createHomeSplitExamplePage-BftZ6-s2.js";var p=r=>s(a=>{let s=o(`div`,a);e(s,`box`),n(()=>{c(s,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:r.background})});let u=o(`h3`,s);t(s,u),c(u,{margin:`0 0 8px`});let f=i(`rue:slot:anchor`);t(u,f),n(()=>{let e=r.title;d(()=>l(e,u,f))});let p=o(`div`,s);t(s,p),e(p,`content`);let m=i(`rue:children:anchor`);return t(p,m),n(()=>{let e=r.children;d(()=>l(e,p,m))}),s}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(n=>{let c=o(`div`,n);e(c,`card bg-base-100 shadow`);let d=o(`div`,c);t(c,d),e(d,`card-body`);let f=o(`h2`,d);t(d,f),e(f,`text-2xl font-semibold`),t(f,r(`基础 children Box`));let m=i(`rue:component:anchor`);return t(d,m),l(u(p,{title:`基本 children`,background:`purple`,children:s(()=>{let e=a(),n=o(`p`,e);t(e,n),t(n,r(`这是子内容 A`));let i=o(`p`,e);return t(e,i),t(i,r(`这是子内容 B`)),e})}),d,m),c})});export{m as default};
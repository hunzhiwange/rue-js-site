import{At as e,Tt as t,dt as n,ft as r,mt as i,pt as a,st as o,tn as s,vn as c}from"./context-8lXZvIn-.js";import{l,o as u,t as d}from"./vapor-runtime-ygJWVcNn.js";import{t as f}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var p=r=>l(i=>{let l=a(`div`,i);t(l,`box`),s(()=>{let t={border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:r.background};e(l,t)});let d=a(`h3`,l);o(l,d),e(d,{margin:`0 0 8px`});let f=n(`rue:slot:anchor`);o(d,f),s(()=>{let e=r.title;c(()=>u(e,d,f))});let p=a(`div`,l);o(l,p),t(p,`content`);let m=n(`rue:children:anchor`);return o(p,m),s(()=>{let e=r.children;c(()=>u(e,p,m))}),l}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>l(e=>{let s=a(`div`,e);t(s,`card bg-base-100 shadow`);let c=a(`div`,s);o(s,c),t(c,`card-body`);let f=a(`h2`,c);o(c,f),t(f,`text-2xl font-semibold`),o(f,i(`基础 children Box`));let m=n(`rue:component:anchor`);return o(c,m),u(d(p,{title:`基本 children`,background:`purple`,children:l(()=>{let e=r(),t=a(`p`,e);o(e,t),o(t,i(`这是子内容 A`));let n=a(`p`,e);return o(e,n),o(n,i(`这是子内容 B`)),e})}),c,m),s})});export{m as default};
import{F as e,I as t,K as n,L as r,N as i,R as a,X as o,d as s,dt as c,l,t as u,vt as d}from"./vapor-runtime-BuwLbCGk.js";import{t as f}from"./createHomeSplitExamplePage-2wtBgDCk.js";var p=t=>s(a=>{let s=r(`div`,a);n(s,`box`),d(()=>{o(s,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:t.background})});let u=r(`h3`,s);i(s,u),o(u,{margin:`0 0 8px`});let f=e(`rue:slot:anchor`);i(u,f),d(()=>{let e=t.title;c(()=>l(e,u,f))});let p=r(`div`,s);i(s,p),n(p,`content`);let m=e(`rue:children:anchor`);return i(p,m),d(()=>{let e=t.children;c(()=>l(e,p,m))}),s}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(o=>{let c=r(`div`,o);n(c,`card bg-base-100 shadow`);let d=r(`div`,c);i(c,d),n(d,`card-body`);let f=r(`h2`,d);i(d,f),n(f,`text-2xl font-semibold`),i(f,a(`基础 children Box`));let m=e(`rue:component:anchor`);return i(d,m),l(u(p,{title:`基本 children`,background:`purple`,children:s(()=>{let e=t(),n=r(`p`,e);i(e,n),i(n,a(`这是子内容 A`));let o=r(`p`,e);return i(e,o),i(o,a(`这是子内容 B`)),e})}),d,m),c})});export{m as default};
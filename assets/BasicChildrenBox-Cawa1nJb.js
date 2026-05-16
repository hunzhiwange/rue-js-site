import{F as e,I as t,K as n,L as r,N as i,R as a,X as o,_t as s,d as c,l,t as u,ut as d}from"./vapor-runtime-B3ypJaOM.js";import{t as f}from"./createHomeSplitExamplePage-CMNE8Aez.js";var p=t=>c(a=>{let c=r(`div`,a);n(c,`box`),s(()=>{o(c,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:t.background})});let u=r(`h3`,c);i(c,u),o(u,{margin:`0 0 8px`});let f=e(`rue:slot:anchor`);i(u,f),s(()=>{let e=t.title;d(()=>l(e,u,f))});let p=r(`div`,c);i(c,p),n(p,`content`);let m=e(`rue:children:anchor`);return i(p,m),s(()=>{let e=t.children;d(()=>l(e,p,m))}),c}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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

export default BasicChildrenBoxDemo`,Demo:()=>c(o=>{let s=r(`div`,o);n(s,`card bg-base-100 shadow`);let d=r(`div`,s);i(s,d),n(d,`card-body`);let f=r(`h2`,d);i(d,f),n(f,`text-2xl font-semibold`),i(f,a(`基础 children Box`));let m=e(`rue:component:anchor`);return i(d,m),l(u(p,{title:`基本 children`,background:`purple`,children:c(()=>{let e=t(),n=r(`p`,e);i(e,n),i(n,a(`这是子内容 A`));let o=r(`p`,e);return i(e,o),i(o,a(`这是子内容 B`)),e})}),d,m),s})});export{m as default};
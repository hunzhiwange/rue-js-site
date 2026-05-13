import{F as e,G as t,I as n,L as r,M as i,P as a,Y as o,bt as s,c,pt as l,t as u,u as d}from"./vapor-runtime-D3a-68js.js";import{t as f}from"./createHomeSplitExamplePage-CLNmVfsf.js";var p=e=>d(()=>{let r=n(`div`);t(r,`box`),s(()=>{o(r,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let u=n(`h3`);i(r,u),o(u,{margin:`0 0 8px`});let d=a(`rue:slot:anchor`);i(u,d),s(()=>{let t=e.title;l(()=>c(t,u,d))});let f=n(`div`);i(r,f),t(f,`content`);let p=a(`rue:children:anchor`);return i(f,p),s(()=>{let t=e.children;l(()=>c(t,f,p))}),r}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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

export default BasicChildrenBoxDemo`,Demo:()=>d(()=>{let o=n(`div`);t(o,`card bg-base-100 shadow`);let s=n(`div`);i(o,s),t(s,`card-body`);let l=n(`h2`);i(s,l),t(l,`text-2xl font-semibold`),i(l,r(`基础 children Box`));let f=a(`rue:component:anchor`);return i(s,f),c(u(p,{title:`基本 children`,background:`purple`,children:d(()=>{let t=e(),a=n(`p`);i(t,a),i(a,r(`这是子内容 A`));let o=n(`p`);return i(t,o),i(o,r(`这是子内容 B`)),t})}),s,f),o})});export{m as default};
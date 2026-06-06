import{G as e,H as t,K as n,W as r,at as i,d as a,kt as o,l as s,q as c,t as l,tt as u,xt as d}from"./vapor-runtime-ACs_OvwU.js";import{t as f}from"./createHomeSplitExamplePage-DOBN78Vl.js";var p=e=>a(a=>{let c=n(`div`,a);u(c,`box`),o(()=>{i(c,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let l=n(`h3`,c);t(c,l),i(l,{margin:`0 0 8px`});let f=r(`rue:slot:anchor`);t(l,f),o(()=>{let t=e.title;d(()=>s(t,l,f))});let p=n(`div`,c);t(c,p),u(p,`content`);let m=r(`rue:children:anchor`);return t(p,m),o(()=>{let t=e.children;d(()=>s(t,p,m))}),c}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>a(i=>{let o=n(`div`,i);u(o,`card bg-base-100 shadow`);let d=n(`div`,o);t(o,d),u(d,`card-body`);let f=n(`h2`,d);t(d,f),u(f,`text-2xl font-semibold`),t(f,c(`基础 children Box`));let m=r(`rue:component:anchor`);return t(d,m),s(l(p,{title:`基本 children`,background:`purple`,children:a(()=>{let r=e(),i=n(`p`,r);t(r,i),t(i,c(`这是子内容 A`));let a=n(`p`,r);return t(r,a),t(a,c(`这是子内容 B`)),r})}),d,m),o})});export{m as default};
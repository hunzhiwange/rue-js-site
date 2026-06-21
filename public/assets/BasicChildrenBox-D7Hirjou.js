import{$t as e,Q as t,dt as n,et as r,gt as i,l as a,nt as o,o as s,rt as c,t as l,tt as u,zt as d}from"./vapor-runtime-DsQWl-IB.js";import{t as f}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var p=c=>a(a=>{let l=o(`div`,a);n(l,`box`),d(()=>{i(l,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:c.background})});let u=o(`h3`,l);t(l,u),i(u,{margin:`0 0 8px`});let f=r(`rue:slot:anchor`);t(u,f),d(()=>{let t=c.title;e(()=>s(t,u,f))});let p=o(`div`,l);t(l,p),n(p,`content`);let m=r(`rue:children:anchor`);return t(p,m),d(()=>{let t=c.children;e(()=>s(t,p,m))}),l}),m=f({title:`基础 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>a(e=>{let i=o(`div`,e);n(i,`card bg-base-100 shadow`);let d=o(`div`,i);t(i,d),n(d,`card-body`);let f=o(`h2`,d);t(d,f),n(f,`text-2xl font-semibold`),t(f,c(`基础 children Box`));let m=r(`rue:component:anchor`);return t(d,m),s(l(p,{title:`基本 children`,background:`purple`,children:a(()=>{let e=u(),n=o(`p`,e);t(e,n),t(n,c(`这是子内容 A`));let r=o(`p`,e);return t(e,r),t(r,c(`这是子内容 B`)),e})}),d,m),i})});export{m as default};
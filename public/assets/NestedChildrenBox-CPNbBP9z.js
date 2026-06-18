import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as o,dt as s,l as c,s as l,st as u,t as d}from"./vapor-runtime-iQZthBPQ.js";import{t as f}from"./createHomeSplitExamplePage-C98rg19g.js";var p=e=>c(o=>{let c=r(`div`,o);u(c,`box`),a(()=>{s(c,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let d=r(`h3`,c);n(c,d),s(d,{margin:`0 0 8px`});let f=i(`rue:slot:anchor`);n(d,f),a(()=>{let n=e.title;t(()=>l(n,d,f))});let p=r(`div`,c);n(c,p),u(p,`content`);let m=i(`rue:children:anchor`);return n(p,m),a(()=>{let n=e.children;t(()=>l(n,p,m))}),c}),m=f({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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

const NestedChildrenBoxDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold">嵌套 children Box</h2>
        <Box title="嵌套 children" background="blue">
          <Box title="内层 Box" background="red">
            <span>嵌套的子元素</span>
            <Box title="内层 Box2" background="yellow">
              <span>嵌套的子元素2</span>
              <Box title="内层 Box3" background="green">
                <span>嵌套的子元素3</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default NestedChildrenBoxDemo
`,Demo:()=>c(t=>{let a=r(`div`,t);u(a,`card bg-base-100 shadow`);let s=r(`div`,a);n(a,s),u(s,`card-body`);let f=r(`h2`,s);n(s,f),u(f,`text-2xl font-semibold`),n(f,e(`嵌套 children Box`));let m=i(`rue:component:anchor`);return n(s,m),l(d(p,{title:`嵌套 children`,background:`blue`,children:d(p,{title:`内层 Box`,background:`red`,children:c(()=>{let t=o(),a=r(`span`,t);n(t,a),n(a,e(`嵌套的子元素`));let s=i(`rue:component:anchor`);return n(t,s),l(d(p,{title:`内层 Box2`,background:`yellow`,children:c(()=>{let t=o(),a=r(`span`,t);n(t,a),n(a,e(`嵌套的子元素2`));let s=i(`rue:component:anchor`);return n(t,s),l(d(p,{title:`内层 Box3`,background:`green`,children:c(()=>{let t=o(),i=r(`span`,t);return n(t,i),n(i,e(`嵌套的子元素3`)),t})}),t,s),t})}),t,s),t})})}),s,m),a})});export{m as default};
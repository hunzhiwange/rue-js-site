import{G as e,H as t,K as n,W as r,at as i,d as a,kt as o,l as s,q as c,t as l,tt as u,xt as d}from"./vapor-runtime-ACs_OvwU.js";import{t as f}from"./createHomeSplitExamplePage-DOBN78Vl.js";var p=e=>a(a=>{let c=n(`div`,a);u(c,`box`),o(()=>{i(c,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let l=n(`h3`,c);t(c,l),i(l,{margin:`0 0 8px`});let f=r(`rue:slot:anchor`);t(l,f),o(()=>{let t=e.title;d(()=>s(t,l,f))});let p=n(`div`,c);t(c,p),u(p,`content`);let m=r(`rue:children:anchor`);return t(p,m),o(()=>{let t=e.children;d(()=>s(t,p,m))}),c}),m=f({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>a(i=>{let o=n(`div`,i);u(o,`card bg-base-100 shadow`);let d=n(`div`,o);t(o,d),u(d,`card-body`);let f=n(`h2`,d);t(d,f),u(f,`text-2xl font-semibold`),t(f,c(`嵌套 children Box`));let m=r(`rue:component:anchor`);return t(d,m),s(l(p,{title:`嵌套 children`,background:`blue`,children:l(p,{title:`内层 Box`,background:`red`,children:a(()=>{let i=e(),o=n(`span`,i);t(i,o),t(o,c(`嵌套的子元素`));let u=r(`rue:component:anchor`);return t(i,u),s(l(p,{title:`内层 Box2`,background:`yellow`,children:a(()=>{let i=e(),o=n(`span`,i);t(i,o),t(o,c(`嵌套的子元素2`));let u=r(`rue:component:anchor`);return t(i,u),s(l(p,{title:`内层 Box3`,background:`green`,children:a(()=>{let r=e(),i=n(`span`,r);return t(r,i),t(i,c(`嵌套的子元素3`)),r})}),i,u),i})}),i,u),i})})}),d,m),o})});export{m as default};
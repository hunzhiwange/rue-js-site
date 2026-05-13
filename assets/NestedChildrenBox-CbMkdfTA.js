import{F as e,G as t,I as n,L as r,M as i,P as a,Y as o,bt as s,c,pt as l,t as u,u as d}from"./vapor-runtime-D3a-68js.js";import{t as f}from"./createHomeSplitExamplePage-CLNmVfsf.js";var p=e=>d(()=>{let r=n(`div`);t(r,`box`),s(()=>{o(r,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let u=n(`h3`);i(r,u),o(u,{margin:`0 0 8px`});let d=a(`rue:slot:anchor`);i(u,d),s(()=>{let t=e.title;l(()=>c(t,u,d))});let f=n(`div`);i(r,f),t(f,`content`);let p=a(`rue:children:anchor`);return i(f,p),s(()=>{let t=e.children;l(()=>c(t,f,p))}),r}),m=f({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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

export default NestedChildrenBoxDemo`,Demo:()=>d(()=>{let o=n(`div`);t(o,`card bg-base-100 shadow`);let s=n(`div`);i(o,s),t(s,`card-body`);let l=n(`h2`);i(s,l),t(l,`text-2xl font-semibold`),i(l,r(`嵌套 children Box`));let f=a(`rue:component:anchor`);return i(s,f),c(u(p,{title:`嵌套 children`,background:`blue`,children:u(p,{title:`内层 Box`,background:`red`,children:d(()=>{let t=e(),o=n(`span`);i(t,o),i(o,r(`嵌套的子元素`));let s=a(`rue:component:anchor`);return i(t,s),c(u(p,{title:`内层 Box2`,background:`yellow`,children:d(()=>{let t=e(),o=n(`span`);i(t,o),i(o,r(`嵌套的子元素2`));let s=a(`rue:component:anchor`);return i(t,s),c(u(p,{title:`内层 Box3`,background:`green`,children:d(()=>{let t=e(),a=n(`span`);return i(t,a),i(a,r(`嵌套的子元素3`)),t})}),t,s),t})}),t,s),t})})}),s,f),o})});export{m as default};
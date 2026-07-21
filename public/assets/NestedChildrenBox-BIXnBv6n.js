import{At as e,Tt as t,dt as n,ft as r,mt as i,pt as a,st as o,tn as s,vn as c}from"./context-8lXZvIn-.js";import{l,o as u,t as d}from"./vapor-runtime-ygJWVcNn.js";import{t as f}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var p=r=>l(i=>{let l=a(`div`,i);t(l,`box`),s(()=>{let t={border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:r.background};e(l,t)});let d=a(`h3`,l);o(l,d),e(d,{margin:`0 0 8px`});let f=n(`rue:slot:anchor`);o(d,f),s(()=>{let e=r.title;c(()=>u(e,d,f))});let p=a(`div`,l);o(l,p),t(p,`content`);let m=n(`rue:children:anchor`);return o(p,m),s(()=>{let e=r.children;c(()=>u(e,p,m))}),l}),m=f({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>l(e=>{let s=a(`div`,e);t(s,`card bg-base-100 shadow`);let c=a(`div`,s);o(s,c),t(c,`card-body`);let f=a(`h2`,c);o(c,f),t(f,`text-2xl font-semibold`),o(f,i(`嵌套 children Box`));let m=n(`rue:component:anchor`);return o(c,m),u(d(p,{title:`嵌套 children`,background:`blue`,children:d(p,{title:`内层 Box`,background:`red`,children:l(()=>{let e=r(),t=a(`span`,e);o(e,t),o(t,i(`嵌套的子元素`));let s=n(`rue:component:anchor`);return o(e,s),u(d(p,{title:`内层 Box2`,background:`yellow`,children:l(()=>{let e=r(),t=a(`span`,e);o(e,t),o(t,i(`嵌套的子元素2`));let s=n(`rue:component:anchor`);return o(e,s),u(d(p,{title:`内层 Box3`,background:`green`,children:l(()=>{let e=r(),t=a(`span`,e);return o(e,t),o(t,i(`嵌套的子元素3`)),e})}),e,s),e})}),e,s),e})})}),c,m),s})});export{m as default};
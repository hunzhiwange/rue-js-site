import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,l as s,rt as c,s as l,t as u,yt as d}from"./vapor-runtime-C1rlwc61.js";import{t as f}from"./createHomeSplitExamplePage-BftZ6-s2.js";var p=r=>s(a=>{let s=o(`div`,a);e(s,`box`),n(()=>{c(s,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:r.background})});let u=o(`h3`,s);t(s,u),c(u,{margin:`0 0 8px`});let f=i(`rue:slot:anchor`);t(u,f),n(()=>{let e=r.title;d(()=>l(e,u,f))});let p=o(`div`,s);t(s,p),e(p,`content`);let m=i(`rue:children:anchor`);return t(p,m),n(()=>{let e=r.children;d(()=>l(e,p,m))}),s}),m=f({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>s(n=>{let c=o(`div`,n);e(c,`card bg-base-100 shadow`);let d=o(`div`,c);t(c,d),e(d,`card-body`);let f=o(`h2`,d);t(d,f),e(f,`text-2xl font-semibold`),t(f,r(`嵌套 children Box`));let m=i(`rue:component:anchor`);return t(d,m),l(u(p,{title:`嵌套 children`,background:`blue`,children:u(p,{title:`内层 Box`,background:`red`,children:s(()=>{let e=a(),n=o(`span`,e);t(e,n),t(n,r(`嵌套的子元素`));let c=i(`rue:component:anchor`);return t(e,c),l(u(p,{title:`内层 Box2`,background:`yellow`,children:s(()=>{let e=a(),n=o(`span`,e);t(e,n),t(n,r(`嵌套的子元素2`));let c=i(`rue:component:anchor`);return t(e,c),l(u(p,{title:`内层 Box3`,background:`green`,children:s(()=>{let e=a(),n=o(`span`,e);return t(e,n),t(n,r(`嵌套的子元素3`)),e})}),e,c),e})}),e,c),e})})}),d,m),c})});export{m as default};
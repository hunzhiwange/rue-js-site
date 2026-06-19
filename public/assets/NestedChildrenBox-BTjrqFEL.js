import{$ as e,Q as t,Qt as n,Wt as r,X as i,et as a,l as o,lt as s,o as c,pt as l,t as u,tt as d}from"./vapor-runtime-CXIalONM.js";import{t as f}from"./createHomeSplitExamplePage-Br1mQ323.js";var p=e=>o(o=>{let u=a(`div`,o);s(u,`box`),n(()=>{l(u,{border:`1px solid #ddd`,padding:`12px`,marginBottom:`12px`,background:e.background})});let d=a(`h3`,u);i(u,d),l(d,{margin:`0 0 8px`});let f=t(`rue:slot:anchor`);i(d,f),n(()=>{let t=e.title;r(()=>c(t,d,f))});let p=a(`div`,u);i(u,p),s(p,`content`);let m=t(`rue:children:anchor`);return i(p,m),n(()=>{let t=e.children;r(()=>c(t,p,m))}),u}),m=f({title:`嵌套 children Box`,source:`import { type FC } from '@rue-js/rue'

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
`,Demo:()=>o(n=>{let r=a(`div`,n);s(r,`card bg-base-100 shadow`);let l=a(`div`,r);i(r,l),s(l,`card-body`);let f=a(`h2`,l);i(l,f),s(f,`text-2xl font-semibold`),i(f,d(`嵌套 children Box`));let m=t(`rue:component:anchor`);return i(l,m),c(u(p,{title:`嵌套 children`,background:`blue`,children:u(p,{title:`内层 Box`,background:`red`,children:o(()=>{let n=e(),r=a(`span`,n);i(n,r),i(r,d(`嵌套的子元素`));let s=t(`rue:component:anchor`);return i(n,s),c(u(p,{title:`内层 Box2`,background:`yellow`,children:o(()=>{let n=e(),r=a(`span`,n);i(n,r),i(r,d(`嵌套的子元素2`));let s=t(`rue:component:anchor`);return i(n,s),c(u(p,{title:`内层 Box3`,background:`green`,children:o(()=>{let t=e(),n=a(`span`,t);return i(t,n),i(n,d(`嵌套的子元素3`)),t})}),n,s),n})}),n,s),n})})}),l,m),r})});export{m as default};
import{$ as e,Kt as t,S as n,Vt as r,Y as i,Yt as a,Z as o,ct as s,l as c,qt as l,s as u}from"./vapor-runtime-DHPuOjqh.js";import{a as d}from"./vapor-helpers-vapor-CJFAWine.js";import{t as f}from"./createHomeSplitExamplePage-BB_cTfze.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=t=>c(n=>{let c=e(`div`,n);s(c,`text-3xl font-bold mb-3`);let l=o(`rue:slot:anchor`);return i(c,l),a(()=>{let e=t.count.value;r(()=>u(e,c,l))}),c}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

const BUTTON_CLASS_NAME =
  'rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all'

const RenderCounterValue: FC<{ count: { value: number } }> = ({ count }) => (
  <div className="text-3xl font-bold mb-3">{count.value}</div>
)

const RenderCounterDemo: FC = () => {
  const [count, setCount] = useState(0, { kind: 'ref' })

  useSetup(() => {
    watchEffect(() => {
      console.info(\`watchEffect计数发生了变化：\${count.value}\`)
    })
  })

  return h(
    'div',
    { className: 'card bg-base-100 shadow' },
    h(
      'div',
      { className: 'card-body' },
      h('h2', { className: 'text-2xl font-semibold mb-2' }, '渲染函数计数器'),
      h(RenderCounterValue, { count }),
      h(
        'div',
        { className: 'flex flex-wrap justify-center gap-2' },
        h(
          'button',
          {
            className: \`\${BUTTON_CLASS_NAME} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200\`,
            onClick: () =>
              setCount(value => {
                value.value += 1
              }),
          },
          '+1',
        ),
        h(
          'button',
          {
            className: \`\${BUTTON_CLASS_NAME} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200\`,
            onClick: () =>
              setCount(value => {
                value.value -= 1
              }),
          },
          '-1',
        ),
        h(
          'button',
          {
            className: \`\${BUTTON_CLASS_NAME} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200\`,
            onClick: () => setCount(0),
          },
          '重置',
        ),
      ),
    ),
  )
}

export default RenderCounterDemo
`,Demo:()=>{let{count:e,setCount:r}=d(`useSetup:0:0`,()=>t(()=>{let[e,n]=d(`useState:1:0`,()=>l(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>t(()=>{d(`watchEffect:1:1`,()=>a(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}))})),{count:e,setCount:n}}));return n(`div`,{className:`card bg-base-100 shadow`},n(`div`,{className:`card-body`},n(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),n(m,{count:e}),n(`div`,{className:`flex flex-wrap justify-center gap-2`},n(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>r(e=>{e.value+=1})},`+1`),n(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>r(e=>{--e.value})},`-1`),n(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>r(0)},`重置`))))}});export{h as default};
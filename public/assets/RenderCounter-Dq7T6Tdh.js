import{Ht as e,J as t,Jt as n,Q as r,X as i,Xt as a,l as o,qt as s,s as c,st as l,x as u}from"./vapor-runtime-iQZthBPQ.js";import{a as d}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as f}from"./createHomeSplitExamplePage-C98rg19g.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=n=>o(o=>{let s=r(`div`,o);l(s,`text-3xl font-bold mb-3`);let u=i(`rue:slot:anchor`);return t(s,u),a(()=>{let t=n.count.value;e(()=>c(t,s,u))}),s}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{count:e,setCount:t}=d(`useSetup:0:0`,()=>s(()=>{let[e,t]=d(`useState:1:0`,()=>n(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>s(()=>{d(`watchEffect:1:1`,()=>a(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}))})),{count:e,setCount:t}}));return u(`div`,{className:`card bg-base-100 shadow`},u(`div`,{className:`card-body`},u(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),u(m,{count:e}),u(`div`,{className:`flex flex-wrap justify-center gap-2`},u(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>t(e=>{e.value+=1})},`+1`),u(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>t(e=>{--e.value})},`-1`),u(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>t(0)},`重置`))))}});export{h as default};
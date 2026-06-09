import{$ as e,Ht as t,Jt as n,S as r,Xt as i,Y as a,Z as o,ct as s,l as c,qt as l,s as u}from"./vapor-runtime-aZAg0Qkw.js";import{a as d}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as f}from"./createHomeSplitExamplePage-CJbW_xoB.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=n=>c(r=>{let c=e(`div`,r);s(c,`text-3xl font-bold mb-3`);let l=o(`rue:slot:anchor`);return a(c,l),i(()=>{let e=n.count.value;t(()=>u(e,c,l))}),c}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{count:e,setCount:t}=d(`useSetup:0:0`,()=>l(()=>{let[e,t]=d(`useState:1:0`,()=>n(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>l(()=>{d(`watchEffect:1:1`,()=>i(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}))})),{count:e,setCount:t}}));return r(`div`,{className:`card bg-base-100 shadow`},r(`div`,{className:`card-body`},r(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),r(m,{count:e}),r(`div`,{className:`flex flex-wrap justify-center gap-2`},r(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>t(e=>{e.value+=1})},`+1`),r(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>t(e=>{--e.value})},`-1`),r(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>t(0)},`重置`))))}});export{h as default};
import{Dt as e,Et as t,H as n,K as r,T as i,W as a,d as o,kt as s,l as c,tt as l,xt as u}from"./vapor-runtime-EUvELKQT.js";import{a as d}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as f}from"./createHomeSplitExamplePage-BuifU8mn.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=e=>o(t=>{let i=r(`div`,t);l(i,`text-3xl font-bold mb-3`);let o=a(`rue:slot:anchor`);return n(i,o),s(()=>{let t=e.count.value;u(()=>c(t,i,o))}),i}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{count:n,setCount:r}=d(`useSetup:0:0`,()=>t(()=>{let[n,r]=d(`useState:1:0`,()=>e(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>t(()=>{d(`watchEffect:1:1`,()=>s(()=>{console.info(`watchEffect计数发生了变化：${n.value}`)}))})),{count:n,setCount:r}}));return i(`div`,{className:`card bg-base-100 shadow`},i(`div`,{className:`card-body`},i(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),i(m,{count:n}),i(`div`,{className:`flex flex-wrap justify-center gap-2`},i(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>r(e=>{e.value+=1})},`+1`),i(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>r(e=>{--e.value})},`-1`),i(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>r(0)},`重置`))))}});export{h as default};
import{F as e,K as t,L as n,N as r,d as i,dt as a,gt as o,ht as s,l as c,v as l,vt as u}from"./vapor-runtime-BuwLbCGk.js";import{a as d}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as f}from"./createHomeSplitExamplePage-2wtBgDCk.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=o=>i(i=>{let s=n(`div`,i);t(s,`text-3xl font-bold mb-3`);let l=e(`rue:slot:anchor`);return r(s,l),u(()=>{let e=o.count.value;a(()=>c(e,s,l))}),s}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{count:e,setCount:t}=d(`useSetup:0:0`,()=>s(()=>{let[e,t]=d(`useState:1:0`,()=>o(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>s(()=>{d(`watchEffect:1:1`,()=>u(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}))})),{count:e,setCount:t}}));return l(`div`,{className:`card bg-base-100 shadow`},l(`div`,{className:`card-body`},l(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),l(m,{count:e}),l(`div`,{className:`flex flex-wrap justify-center gap-2`},l(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>t(e=>{e.value+=1})},`+1`),l(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>t(e=>{--e.value})},`-1`),l(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>t(0)},`重置`))))}});export{h as default};
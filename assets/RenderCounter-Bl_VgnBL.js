import{G as e,I as t,M as n,P as r,_ as i,_t as a,bt as o,c as s,pt as c,u as l,vt as u}from"./vapor-runtime-D3a-68js.js";import{a as d}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as f}from"./createHomeSplitExamplePage-CLNmVfsf.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=i=>l(()=>{let a=t(`div`);e(a,`text-3xl font-bold mb-3`);let l=r(`rue:slot:anchor`);return n(a,l),o(()=>{let e=i.count.value;c(()=>s(e,a,l))}),a}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

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

export default RenderCounterDemo`,Demo:()=>{let{count:e,setCount:t}=d(`useSetup:0:0`,()=>a(()=>{let[e,t]=d(`useState:1:0`,()=>u(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>a(()=>{d(`watchEffect:1:1`,()=>o(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}))})),{count:e,setCount:t}}));return i(`div`,{className:`card bg-base-100 shadow`},i(`div`,{className:`card-body`},i(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),i(m,{count:e}),i(`div`,{className:`flex flex-wrap justify-center gap-2`},i(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>t(e=>{e.value+=1})},`+1`),i(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>t(e=>{--e.value})},`-1`),i(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>t(0)},`重置`))))}});export{h as default};
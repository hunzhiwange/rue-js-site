import{$ as e,$t as t,Gt as n,Xt as r,Z as i,Zt as a,b as o,l as s,o as c,tt as l,ut as u}from"./vapor-runtime-CKrmRMZX.js";import{a as d}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as f}from"./createHomeSplitExamplePage-Q644r2Bq.js";var p=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,m=r=>s(a=>{let o=l(`div`,a);u(o,`text-3xl font-bold mb-3`);let s=e(`rue:slot:anchor`);return i(o,s),t(()=>{let e=r.count.value;n(()=>c(e,o,s))}),o}),h=f({title:`渲染函数计数器`,source:`import { type FC, h, useSetup, useState, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{count:e,setCount:n}=d(`useSetup:0:0`,()=>r(()=>{let[e,n]=d(`useState:1:0`,()=>a(0,{kind:`ref`}));return d(`useSetup:1:2`,()=>r(()=>{d(`watchEffect:1:1`,()=>t(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}))})),{count:e,setCount:n}}));return o(`div`,{className:`card bg-base-100 shadow`},o(`div`,{className:`card-body`},o(`h2`,{className:`text-2xl font-semibold mb-2`},`渲染函数计数器`),o(m,{count:e}),o(`div`,{className:`flex flex-wrap justify-center gap-2`},o(`button`,{className:`${p} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,onClick:()=>n(e=>{e.value+=1})},`+1`),o(`button`,{className:`${p} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,onClick:()=>n(e=>{--e.value})},`-1`),o(`button`,{className:`${p} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,onClick:()=>n(0)},`重置`))))}});export{h as default};
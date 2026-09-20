import{Bt as e,F as t,Gt as n,Kt as r,P as i,Vt as a,W as o,Wt as s,Xt as c,Yt as l,Zt as u,ct as d,f,fn as p,gn as m,h,hn as g,in as _,mn as v,nt as y,p as b,pn as x,qt as S,sn as C,st as w,u as T,yn as E,zt as D}from"./rue-runtime-BWbIfNT8.js";import{t as O}from"./createHomeSplitExamplePage-Cjn7V321.js";var k=n([`newTodo`],[!1]),A=n([`todos`],[!1]),j=n([`todos`,`length`],[!1,!1]),M=E(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">本地待办事项</h2><div class="flex items-center gap-2 mb-3"><input type="text" placeholder="输入待办事项" class="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"><button class="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200">添加</button></div><div><!--rue:text-hole:0--></div><p><!--rue:text-hole:1--></p></div></div>`),N=()=>({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``}),P=(t,n,i)=>{let[v]=w(`LocalTodoListDemo:hook:0`,N),E=d(()=>v.get().todos.filter(e=>e.completed).length),O=()=>{`${v.get().newTodo}`.trim()&&(c(l(u(v))(`todos`),`push`)({id:Date.now(),text:r(v,k),completed:!1}),l(u(v))(`newTodo`).value=``)},P=e=>{let t=v.get().todos.findIndex(t=>t.id===e);t!==-1&&(l(l(u(v))(`todos`))(t).value={...r(v,A)[t],completed:!r(v,A)[t].completed})},F=e=>{let t=v.get().todos.findIndex(t=>t.id===e);t!==-1&&c(l(u(v))(`todos`),`splice`)(t,1)};return y(()=>s(t=>{let n=M().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1].childNodes[0],c=n.childNodes[0].childNodes[1].childNodes[1],d=n.childNodes[0].childNodes[2].childNodes[0],y=d.parentNode,w=n.childNodes[0].childNodes[3].childNodes[0],A=w.parentNode;i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`输入待办事项`);let N;_(()=>{let e=r(v,k),t=e==null?``:String(e);Object.is(N,t)||(N=t,i.value=t)});let I=e=>{let t=e=>{l(u(v))(`newTodo`).value=e.target.value};typeof t==`function`&&t(e)};i.addEventListener(`input`,I),C(()=>i.removeEventListener(`input`,I));let L=e=>{let t=e=>{e.key===`Enter`&&O()};typeof t==`function`&&t(e)};i.addEventListener(`keypress`,L),C(()=>i.removeEventListener(`keypress`,L)),i.setAttribute(`class`,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),c.setAttribute(`class`,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`);let R=e=>{let t=O;typeof t==`function`&&t(e)};c.addEventListener(`click`,R),C(()=>c.removeEventListener(`click`,R));let z=[];return S(()=>{let t=v.get().todos||[];z=h(y,d,z,t,(e,t)=>e.id,(t,n)=>{let r=o(t);return b((t,n,i)=>{let o=()=>s(t=>{let n=g(`div`,t),i;_(()=>{let e=`flex items-center justify-between rounded-lg border p-3 mb-2 ${r.get().completed?`bg-gray-50`:`bg-white`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let a=g(`span`,n);p(n,a),C(T(t,a,`click`,()=>()=>P(r.get().id)));let o;_(()=>{let e=`cursor-pointer ${r.get().completed?`line-through text-gray-500`:`text-gray-800`}`,t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,a.setAttribute(`class`,t))});let s=x(`rue:compiled-slot`);p(a,s),e({parent:a,before:s},()=>D(r.get().text),()=>({}));let c=g(`button`,n);return p(n,c),c.setAttribute(`class`,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),C(T(t,c,`click`,()=>()=>F(r.get().id))),p(c,m(`删除`)),[n,n]});return t==null?o():a(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),C(()=>f(z)),e({parent:A,before:w},()=>D(`总计: ${r(v,j)} | 已完成: ${E.get()}`),()=>({})),[n,n]}))},F=`import { type FC, computed, useState } from '@rue-js/rue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const createTodoState = () => ({
  todos: [
    { id: 1, text: '学习响应式框架', completed: false },
    { id: 2, text: '编写示例代码', completed: true },
    { id: 3, text: '测试功能', completed: false },
  ] as Todo[],
  newTodo: '',
})

const LocalTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const completedCount = computed(() => state.todos.filter(todo => todo.completed).length)

  const addTodo = () => {
    if (!\`\${state.newTodo}\`.trim()) {
      return
    }

    state.todos.push({
      id: Date.now(),
      text: state.newTodo,
      completed: false,
    })
    state.newTodo = ''
  }

  const toggleTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos[index] = { ...state.todos[index], completed: !state.todos[index].completed }
    }
  }

  const deleteTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-3">本地待办事项</h2>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="输入待办事项"
            value={state.newTodo}
            onInput={(event: any) => {
              state.newTodo = (event.target as HTMLInputElement).value
            }}
            onKeyPress={(event: any) => {
              if (event.key === 'Enter') addTodo()
            }}
            className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          />
          <button
            className="rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200"
            onClick={addTodo}
          >
            添加
          </button>
        </div>
        <div>
          {state.todos.map(todo => (
            <div
              key={todo.id}
              className={\`flex items-center justify-between rounded-lg border p-3 mb-2 \${todo.completed ? 'bg-gray-50' : 'bg-white'}\`}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={\`cursor-pointer \${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}\`}
              >
                {todo.text}
              </span>
              <button
                className="rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200"
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
            </div>
          ))}
        </div>
        <p>{\`总计: \${state.todos.length} | 已完成: \${completedCount.get()}\`}</p>
      </div>
    </div>
  )
}

export default LocalTodoListDemo
`,I=(e,n,r)=>i(O,()=>({options:{title:`本地待办事项`,source:F},children:(e,n,r)=>{let i=()=>s(e=>{let n=v();t(n,P,()=>({}));let r=m(``),i=m(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{I as default};
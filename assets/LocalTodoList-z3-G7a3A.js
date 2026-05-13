import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,at as d,bt as f,c as p,ct as m,j as h,pt as g,u as _,vt as v}from"./vapor-runtime-D3a-68js.js";import{a as y,n as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./createHomeSplitExamplePage-CLNmVfsf.js";var S=()=>y(`reactive:1:0`,()=>m({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const createTodoState = () =>
  reactive({
    todos: [
      { id: 1, text: '学习响应式框架', completed: false },
      { id: 2, text: '编写示例代码', completed: true },
      { id: 3, text: '测试功能', completed: false },
    ] as Todo[],
    newTodo: '',
  })

const LocalTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const [todoViews] = useState(() =>
    computed(() => {
      const items: Todo[] = []

      for (let index = 0; index < state.todos.length; index += 1) {
        items.push(state.todos[index])
      }

      return items
    }),
  )
  const [completedCount] = useState(() =>
    computed(() => todoViews.get().filter(todo => todo.completed).length),
  )

  const addTodo = () => {
    if (!state.newTodo.trim()) {
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
      state.todos[index].completed = !state.todos[index].completed
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
          {todoViews.get().map(todo => (
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

export default LocalTodoListDemo`,Demo:()=>{let{state:m,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>u(()=>{let[e]=y(`useState:1:1`,()=>v(S)),[t]=y(`useState:1:3`,()=>v(()=>y(`computed:1:2`,()=>d(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1)t.push(e.todos[n]);return t})))),[n]=y(`useState:1:5`,()=>v(()=>y(`computed:1:4`,()=>d(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return _(()=>{let u=n(`div`);t(u,`card bg-base-100 shadow`);let d=n(`div`);i(u,d),t(d,`card-body`);let v=n(`h2`);i(d,v),t(v,`text-2xl font-semibold mb-3`),i(v,r(`本地待办事项`));let y=n(`div`);i(d,y),t(y,`flex items-center gap-2 mb-3`);let S=n(`input`);i(y,S),s(S,`type`,`text`),s(S,`placeholder`,`输入待办事项`),f(()=>{c(S,m.newTodo)}),h(S,`input`,e=>{m.newTodo=e.target.value}),h(S,`keypress`,e=>{e.key===`Enter`&&w()}),t(S,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let D=n(`button`);i(y,D),t(D,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),h(D,`click`,w),i(D,r(`添加`));let O=n(`div`);i(d,O);let k=a(`rue:list:start`),A=a(`rue:list:end`);i(O,k),i(O,A);let j=new Map;f(()=>{j=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(o,c,l,u,d)=>{p(_(()=>{let c=e(),l=n(`div`);i(c,l),f(()=>{s(l,`key`,String(o.id))}),f(()=>{t(l,String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${o.completed?`bg-gray-50`:`bg-white`}`))});let u=n(`span`);i(l,u),h(u,`click`,()=>T(o.id)),f(()=>{t(u,String(`cursor-pointer ${o.completed?`line-through text-gray-500`:`text-gray-800`}`))});let d=a(`rue:slot:anchor`);i(u,d),f(()=>{let e=o.text;g(()=>p(e,u,d))});let m=n(`button`);return i(l,m),t(m,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),h(m,`click`,()=>E(o.id)),i(m,r(`删除`)),c}),c,l)}})});let M=n(`p`);i(d,M);let N=o(M);return i(M,N),f(()=>{l(N,`总计: ${m.todos.length} | 已完成: ${C.get()}`)}),u})}});export{C as default};
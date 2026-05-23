import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,d as l,dt as u,gt as d,kt as f,l as p,ot as m,q as h,st as g,tt as _,xt as v}from"./vapor-runtime-EUvELKQT.js";import{a as y,n as b}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as x}from"./createHomeSplitExamplePage-BuifU8mn.js";var S=()=>y(`reactive:1:0`,()=>d({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`基础待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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

const BasicTodoListDemo: FC = () => {
  const [state] = useState(createTodoState)
  const [todoViews] = useState(() =>
    computed(() => {
      const items: Todo[] = []

      for (let index = 0; index < state.todos.length; index += 1) {
        const todo = state.todos[index]
        if (todo !== undefined && todo !== null) {
          items.push(todo)
        }
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
        <h2 className="text-2xl font-semibold mb-3">基础待办事项</h2>
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

export default BasicTodoListDemo
`,Demo:()=>{let{state:d,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>n(()=>{let[e]=y(`useState:1:1`,()=>t(S)),[n]=y(`useState:1:3`,()=>t(()=>y(`computed:1:2`,()=>u(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[r]=y(`useState:1:5`,()=>t(()=>y(`computed:1:4`,()=>u(()=>n.get().filter(e=>e.completed).length))));return{state:e,todoViews:n,completedCount:r,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return l(t=>{let n=o(`div`,t);_(n,`card bg-base-100 shadow`);let u=o(`div`,n);i(n,u),_(u,`card-body`);let y=o(`h2`,u);i(u,y),_(y,`text-2xl font-semibold mb-3`),i(y,h(`基础待办事项`));let S=o(`div`,u);i(u,S),_(S,`flex items-center gap-2 mb-3`);let D=o(`input`,S);i(S,D),e(D,`type`,`text`),e(D,`placeholder`,`输入待办事项`),f(()=>{m(D,d.newTodo)}),s(D,`input`,e=>{d.newTodo=e.target.value}),s(D,`keypress`,e=>{e.key===`Enter`&&w()}),_(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=o(`button`,S);i(S,O),_(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),s(O,`click`,w),i(O,h(`添加`));let k=o(`div`,u);i(u,k);let A=c(`rue:list:start`),j=c(`rue:list:end`);i(k,A),i(k,j);let M=new Map;f(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(t,n,a,u,d)=>{p(l(()=>{let n=r(),a=o(`div`,n);i(n,a),f(()=>{e(a,`key`,String(t.id))}),f(()=>{_(a,String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${t.completed?`bg-gray-50`:`bg-white`}`))});let l=o(`span`,a);i(a,l),s(l,`click`,()=>T(t.id)),f(()=>{_(l,String(`cursor-pointer ${t.completed?`line-through text-gray-500`:`text-gray-800`}`))});let u=c(`rue:slot:anchor`);i(l,u),f(()=>{let e=t.text;v(()=>p(e,l,u))});let d=o(`button`,a);return i(a,d),_(d,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),s(d,`click`,()=>E(t.id)),i(d,h(`删除`)),n}),n,a)}})});let N=o(`p`,u);i(u,N);let P=a(N);return i(N,P),f(()=>{g(P,`总计: ${d.todos.length} | 已完成: ${C.get()}`)}),n})}});export{C as default};
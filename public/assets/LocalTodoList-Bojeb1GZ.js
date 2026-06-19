import{$ as e,$t as t,Dt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,ct as c,et as l,gt as u,ht as d,l as f,nt as p,o as m,rt as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as x}from"./createHomeSplitExamplePage-Q644r2Bq.js";var S=()=>y(`reactive:1:0`,()=>n({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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

export default LocalTodoListDemo
`,Demo:()=>{let{state:n,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>a(()=>{let[e]=y(`useState:1:1`,()=>s(S)),[t]=y(`useState:1:3`,()=>s(()=>y(`computed:1:2`,()=>v(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[n]=y(`useState:1:5`,()=>s(()=>y(`computed:1:4`,()=>v(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return f(a=>{let s=g(`div`,a);_(s,`card bg-base-100 shadow`);let v=g(`div`,s);o(s,v),_(v,`card-body`);let y=g(`h2`,v);o(v,y),_(y,`text-2xl font-semibold mb-3`),o(y,p(`本地待办事项`));let S=g(`div`,v);o(v,S),_(S,`flex items-center gap-2 mb-3`);let D=g(`input`,S);o(S,D),c(D,`type`,`text`),c(D,`placeholder`,`输入待办事项`),t(()=>{d(D,n.newTodo)}),i(D,`input`,e=>{n.newTodo=e.target.value}),i(D,`keypress`,e=>{e.key===`Enter`&&w()}),_(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=g(`button`,S);o(S,O),_(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),i(O,`click`,w),o(O,p(`添加`));let k=g(`div`,v);o(v,k);let A=e(`rue:list:start`),j=e(`rue:list:end`);o(k,A),o(k,j);let M=new Map;t(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(n,a,s,u,d)=>{m(f(()=>{let a=l(),s=g(`div`,a);o(a,s),t(()=>{c(s,`key`,String(n.id))}),t(()=>{_(s,`flex items-center justify-between rounded-lg border p-3 mb-2 ${n.completed?`bg-gray-50`:`bg-white`}`)});let u=g(`span`,s);o(s,u),i(u,`click`,()=>T(n.id)),t(()=>{_(u,`cursor-pointer ${n.completed?`line-through text-gray-500`:`text-gray-800`}`)});let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.text;r(()=>m(e,u,d))});let f=g(`button`,s);return o(s,f),_(f,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),i(f,`click`,()=>E(n.id)),o(f,p(`删除`)),a}),a,s)}})});let N=g(`p`,v);o(v,N);let P=h(N);return o(N,P),t(()=>{u(P,`总计: ${n.todos.length} | 已完成: ${C.get()}`)}),s})}});export{C as default};
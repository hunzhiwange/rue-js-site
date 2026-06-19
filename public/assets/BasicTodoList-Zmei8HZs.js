import{$ as e,Et as t,Q as n,Qt as r,Wt as i,X as a,Xt as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,mt as p,nt as m,o as h,st as g,tt as _,vt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as x}from"./createHomeSplitExamplePage-Br1mQ323.js";var S=()=>y(`reactive:1:0`,()=>t({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`基础待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>c(()=>{let[e]=y(`useState:1:1`,()=>o(S)),[t]=y(`useState:1:3`,()=>o(()=>y(`computed:1:2`,()=>v(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[n]=y(`useState:1:5`,()=>o(()=>y(`computed:1:4`,()=>v(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return d(o=>{let c=l(`div`,o);f(c,`card bg-base-100 shadow`);let v=l(`div`,c);a(c,v),f(v,`card-body`);let y=l(`h2`,v);a(v,y),f(y,`text-2xl font-semibold mb-3`),a(y,_(`基础待办事项`));let S=l(`div`,v);a(v,S),f(S,`flex items-center gap-2 mb-3`);let D=l(`input`,S);a(S,D),g(D,`type`,`text`),g(D,`placeholder`,`输入待办事项`),r(()=>{p(D,t.newTodo)}),s(D,`input`,e=>{t.newTodo=e.target.value}),s(D,`keypress`,e=>{e.key===`Enter`&&w()}),f(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=l(`button`,S);a(S,O),f(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),s(O,`click`,w),a(O,_(`添加`));let k=l(`div`,v);a(v,k);let A=n(`rue:list:start`),j=n(`rue:list:end`);a(k,A),a(k,j);let M=new Map;r(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(t,o,c,u,p)=>{h(d(()=>{let o=e(),c=l(`div`,o);a(o,c),r(()=>{g(c,`key`,String(t.id))}),r(()=>{f(c,`flex items-center justify-between rounded-lg border p-3 mb-2 ${t.completed?`bg-gray-50`:`bg-white`}`)});let u=l(`span`,c);a(c,u),s(u,`click`,()=>T(t.id)),r(()=>{f(u,`cursor-pointer ${t.completed?`line-through text-gray-500`:`text-gray-800`}`)});let d=n(`rue:slot:anchor`);a(u,d),r(()=>{let e=t.text;i(()=>h(e,u,d))});let p=l(`button`,c);return a(c,p),f(p,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),s(p,`click`,()=>E(t.id)),a(p,_(`删除`)),o}),o,c)}})});let N=l(`p`,v);a(v,N);let P=m(N);return a(N,P),r(()=>{u(P,`总计: ${t.todos.length} | 已完成: ${C.get()}`)}),c})}});export{C as default};
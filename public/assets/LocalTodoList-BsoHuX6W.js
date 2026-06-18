import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,gt as d,l as f,pt as p,q as m,qt as h,s as g,st as _,wt as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as x}from"./createHomeSplitExamplePage-C98rg19g.js";var S=()=>y(`reactive:1:0`,()=>v({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:v,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>h(()=>{let[e]=y(`useState:1:1`,()=>r(S)),[t]=y(`useState:1:3`,()=>r(()=>y(`computed:1:2`,()=>d(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[n]=y(`useState:1:5`,()=>r(()=>y(`computed:1:4`,()=>d(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return f(r=>{let d=i(`div`,r);_(d,`card bg-base-100 shadow`);let h=i(`div`,d);n(d,h),_(h,`card-body`);let y=i(`h2`,h);n(h,y),_(y,`text-2xl font-semibold mb-3`),n(y,e(`本地待办事项`));let S=i(`div`,h);n(h,S),_(S,`flex items-center gap-2 mb-3`);let D=i(`input`,S);n(S,D),c(D,`type`,`text`),c(D,`placeholder`,`输入待办事项`),o(()=>{u(D,v.newTodo)}),m(D,`input`,e=>{v.newTodo=e.target.value}),m(D,`keypress`,e=>{e.key===`Enter`&&w()}),_(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=i(`button`,S);n(S,O),_(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),m(O,`click`,w),n(O,e(`添加`));let k=i(`div`,h);n(h,k);let A=a(`rue:list:start`),j=a(`rue:list:end`);n(k,A),n(k,j);let M=new Map;o(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(r,l,u,d,p)=>{g(f(()=>{let l=s(),u=i(`div`,l);n(l,u),o(()=>{c(u,`key`,String(r.id))}),o(()=>{_(u,`flex items-center justify-between rounded-lg border p-3 mb-2 ${r.completed?`bg-gray-50`:`bg-white`}`)});let d=i(`span`,u);n(u,d),m(d,`click`,()=>T(r.id)),o(()=>{_(d,`cursor-pointer ${r.completed?`line-through text-gray-500`:`text-gray-800`}`)});let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let e=r.text;t(()=>g(e,d,f))});let p=i(`button`,u);return n(u,p),_(p,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),m(p,`click`,()=>E(r.id)),n(p,e(`删除`)),l}),l,u)}})});let N=i(`p`,h);n(h,N);let P=l(N);return n(N,P),o(()=>{p(P,`总计: ${v.todos.length} | 已完成: ${C.get()}`)}),d})}});export{C as default};
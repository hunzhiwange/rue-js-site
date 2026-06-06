import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,U as s,W as c,Z as l,at as u,it as d,l as f,lt as p,mt as m,s as h,wt as g,yt as _,z as v}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as b}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as x}from"./createHomeSplitExamplePage-BftZ6-s2.js";var S=()=>y(`reactive:1:0`,()=>m({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:m,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>g(()=>{let[e]=y(`useState:1:1`,()=>o(S)),[t]=y(`useState:1:3`,()=>o(()=>y(`computed:1:2`,()=>p(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[n]=y(`useState:1:5`,()=>o(()=>y(`computed:1:4`,()=>p(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:n,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return f(o=>{let p=c(`div`,o);e(p,`card bg-base-100 shadow`);let g=c(`div`,p);t(p,g),e(g,`card-body`);let y=c(`h2`,g);t(g,y),e(y,`text-2xl font-semibold mb-3`),t(y,r(`本地待办事项`));let S=c(`div`,g);t(g,S),e(S,`flex items-center gap-2 mb-3`);let D=c(`input`,S);t(S,D),l(D,`type`,`text`),l(D,`placeholder`,`输入待办事项`),n(()=>{d(D,m.newTodo)}),v(D,`input`,e=>{m.newTodo=e.target.value}),v(D,`keypress`,e=>{e.key===`Enter`&&w()}),e(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=c(`button`,S);t(S,O),e(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),v(O,`click`,w),t(O,r(`添加`));let k=c(`div`,g);t(g,k);let A=i(`rue:list:start`),j=i(`rue:list:end`);t(k,A),t(k,j);let M=new Map;n(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(a,o,u,d,p)=>{h(f(()=>{let o=s(),u=c(`div`,o);t(o,u),n(()=>{l(u,`key`,String(a.id))}),n(()=>{e(u,String(`flex items-center justify-between rounded-lg border p-3 mb-2 ${a.completed?`bg-gray-50`:`bg-white`}`))});let d=c(`span`,u);t(u,d),v(d,`click`,()=>T(a.id)),n(()=>{e(d,String(`cursor-pointer ${a.completed?`line-through text-gray-500`:`text-gray-800`}`))});let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=a.text;_(()=>h(e,d,f))});let p=c(`button`,u);return t(u,p),e(p,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),v(p,`click`,()=>E(a.id)),t(p,r(`删除`)),o}),o,u)}})});let N=c(`p`,g);t(g,N);let P=a(N);return t(N,P),n(()=>{u(P,`总计: ${m.todos.length} | 已完成: ${C.get()}`)}),p})}});export{C as default};
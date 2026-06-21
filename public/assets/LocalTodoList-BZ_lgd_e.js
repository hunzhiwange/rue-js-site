import{$t as e,Q as t,St as n,Z as r,_t as i,an as a,dt as o,et as s,in as c,it as l,jt as u,l as d,lt as f,nt as p,o as m,rt as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as x}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var S=()=>y(`reactive:1:0`,()=>u({todos:[{id:1,text:`学习响应式框架`,completed:!1},{id:2,text:`编写示例代码`,completed:!0},{id:3,text:`测试功能`,completed:!1}],newTodo:``})),C=x({title:`本地待办事项`,source:`import { type FC, computed, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:u,todoViews:x,completedCount:C,addTodo:w,toggleTodo:T,deleteTodo:E}=y(`useSetup:0:0`,()=>c(()=>{let[e]=y(`useState:1:1`,()=>a(S)),[t]=y(`useState:1:3`,()=>a(()=>y(`computed:1:2`,()=>n(()=>{let t=[];for(let n=0;n<e.todos.length;n+=1){let r=e.todos[n];r!=null&&t.push(r)}return t})))),[r]=y(`useState:1:5`,()=>a(()=>y(`computed:1:4`,()=>n(()=>t.get().filter(e=>e.completed).length))));return{state:e,todoViews:t,completedCount:r,addTodo:()=>{e.newTodo.trim()&&(e.todos.push({id:Date.now(),text:e.newTodo,completed:!1}),e.newTodo=``)},toggleTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&(e.todos[n].completed=!e.todos[n].completed)},deleteTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)}}}));return d(n=>{let a=p(`div`,n);o(a,`card bg-base-100 shadow`);let c=p(`div`,a);t(a,c),o(c,`card-body`);let y=p(`h2`,c);t(c,y),o(y,`text-2xl font-semibold mb-3`),t(y,h(`本地待办事项`));let S=p(`div`,c);t(c,S),o(S,`flex items-center gap-2 mb-3`);let D=p(`input`,S);t(S,D),f(D,`type`,`text`),f(D,`placeholder`,`输入待办事项`),v(()=>{i(D,u.newTodo)}),r(D,`input`,e=>{u.newTodo=e.target.value}),r(D,`keypress`,e=>{e.key===`Enter`&&w()}),o(D,`flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let O=p(`button`,S);t(S,O),o(O,`rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200`),r(O,`click`,w),t(O,h(`添加`));let k=p(`div`,c);t(c,k);let A=s(`rue:list:start`),j=s(`rue:list:end`);t(k,A),t(k,j);let M=new Map;v(()=>{M=b({items:x.get()||[],getKey:(e,t)=>e.id,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(n,i,a,c,l)=>{m(d(()=>{let i=g(),a=p(`div`,i);t(i,a),v(()=>{f(a,`key`,String(n.id))}),v(()=>{o(a,`flex items-center justify-between rounded-lg border p-3 mb-2 ${n.completed?`bg-gray-50`:`bg-white`}`)});let c=p(`span`,a);t(a,c),r(c,`click`,()=>T(n.id)),v(()=>{o(c,`cursor-pointer ${n.completed?`line-through text-gray-500`:`text-gray-800`}`)});let l=s(`rue:slot:anchor`);t(c,l),v(()=>{let t=n.text;e(()=>m(t,c,l))});let u=p(`button`,a);return t(a,u),o(u,`rounded-lg border border-red-500 bg-red-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200`),r(u,`click`,()=>E(n.id)),t(u,h(`删除`)),i}),i,a)}})});let N=p(`p`,c);t(c,N);let P=l(N);return t(N,P),v(()=>{_(P,`总计: ${u.todos.length} | 已完成: ${C.get()}`)}),a})}});export{C as default};
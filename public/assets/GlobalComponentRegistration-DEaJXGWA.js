import{Cn as e,Ct as t,Kt as n,Lt as r,Mt as i,Sn as a,Tt as o,dt as s,ht as c,jt as l,mt as u,ot as d,pn as f,pt as p,rt as m,st as h,tn as g,vn as _,wt as v}from"./context-8lXZvIn-.js";import{i as y,l as b,n as x,o as S,r as C,s as w,t as T}from"./vapor-runtime-ygJWVcNn.js";import{a as E,n as D,t as O}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as k}from"./useApp-M23tfvVD.js";import{t as A}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var j=e=>b(n=>{let r=p(`li`,n);o(r,`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`);let i=p(`label`,r);h(r,i),o(i,`flex min-w-0 flex-1 cursor-pointer items-center gap-3`);let a=p(`input`,i);h(i,a),t(a,`type`,`checkbox`),o(a,`checkbox checkbox-primary checkbox-sm`),g(()=>{v(a,!!e.todo.done)}),d(a,`change`,()=>e.onToggle(e.todo.id));let c=p(`span`,i);h(i,c),g(()=>{o(c,`truncate ${e.todo.done?`text-base-content/45 line-through`:``}`)});let l=s(`rue:slot:anchor`);h(c,l),g(()=>{let t=e.todo.text;_(()=>S(t,c,l))});let f=p(`button`,r);return h(r,f),o(f,`btn btn-ghost btn-xs`),d(f,`click`,()=>e.onRemove(e.todo.id)),h(f,u(`删除`)),r}),M=()=>{let{state:a,addTodo:f,toggleTodo:v,removeTodo:y,completed:x}=E(`useSetup:0:0`,()=>e(()=>{let e=E(`reactive:1:0`,()=>n({draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`通过 useApp().component 注册 TodoItem`,done:!0},{id:3,text:`用 <Component is="TodoItem" /> 渲染`,done:!1}]}));return{state:e,addTodo:()=>{let t=e.draft.trim();t&&(e.todos.push({id:Date.now(),text:t,done:!1}),e.draft=``)},toggleTodo:t=>{let n=e.todos.find(e=>e.id===t);n&&(n.done=!n.done)},removeTodo:t=>{let n=e.todos.findIndex(e=>e.id===t);n!==-1&&e.todos.splice(n,1)},completed:E(`computed:1:1`,()=>r(()=>e.todos.filter(e=>e.done).length))}}));return b(e=>{let n=p(`div`,e);o(n,`rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`);let r=p(`div`,n);h(n,r),o(r,`flex flex-wrap items-start justify-between gap-3`);let b=p(`div`,r);h(r,b);let C=p(`p`,b);h(b,C),o(C,`text-xs font-semibold uppercase tracking-[0.22em] text-primary`),h(C,u(`registered runtime app`));let E=p(`h2`,b);h(b,E),o(E,`mt-2 text-2xl font-semibold`),h(E,u(`TodoItem 来自字符串注册名`));let O=p(`p`,b);h(b,O),o(O,`mt-2 max-w-2xl text-sm leading-6 text-base-content/70`),h(O,u(`列表项没有直接写成`));let k=p(`code`,O);h(O,k);let A=c(k);h(k,A),i(A,`<TodoItem />`),h(O,u(`，而是通过`));let j=c(O);h(O,j),i(j,` `);let M=p(`code`,O);h(O,M);let N=c(M);h(M,N),i(N,`<Component is="TodoItem" />`),h(O,u(`从当前应用的注册表解析。`));let P=p(`div`,r);h(r,P),o(P,`stats stats-horizontal bg-base-200`);let F=p(`div`,P);h(P,F),o(F,`stat px-4 py-2`);let I=p(`div`,F);h(F,I),o(I,`stat-title text-xs`),h(I,u(`完成`));let L=p(`div`,F);h(F,L),o(L,`stat-value text-lg`);let R=s(`rue:slot:anchor`);h(L,R),g(()=>{let e=x.get();_(()=>S(e,L,R))}),h(L,u(`/`));let z=s(`rue:slot:anchor`);h(L,z),g(()=>{let e=a.todos.length;_(()=>S(e,L,z))});let B=p(`div`,n);h(n,B),o(B,`mt-5 flex flex-col gap-3 sm:flex-row`);let V=p(`input`,B);h(B,V),o(V,`input input-bordered flex-1`),g(()=>{l(V,a.draft)}),t(V,`placeholder`,`新增一条任务`),d(V,`input`,e=>{a.draft=e.currentTarget.value}),d(V,`keydown`,e=>{e.key===`Enter`&&f()});let H=p(`button`,B);h(B,H),o(H,`btn btn-primary`),d(H,`click`,f),h(H,u(`添加`));let U=p(`ul`,n);h(n,U),o(U,`mt-4 grid gap-3`);let W=s(`rue:list:start`),G=s(`rue:list:end`);h(U,W),h(U,G);let K=new Map;return g(()=>{K=D({items:a.todos||[],getKey:(e,t)=>e.id,elements:K,parent:U,before:G,start:W,renderItem:(e,t,n,r,i)=>{w(T(m,{is:`TodoItem`,key:e.id,todo:e,onToggle:v,onRemove:y}),t,n,r)}})}),n})},N=A({title:`useApp().component 运行时注册`,source:`import {
  Component,
  type FC,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  useApp,
  useRef,
} from '@rue-js/rue'

type Todo = {
  id: number
  text: string
  done: boolean
}

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoItem: FC<TodoItemProps> = props => (
  <li className="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3">
    <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="checkbox checkbox-primary checkbox-sm"
        checked={props.todo.done}
        onChange={() => props.onToggle(props.todo.id)}
      />
      <span className={\`truncate \${props.todo.done ? 'text-base-content/45 line-through' : ''}\`}>
        {props.todo.text}
      </span>
    </label>
    <button className="btn btn-ghost btn-xs" onClick={() => props.onRemove(props.todo.id)}>
      删除
    </button>
  </li>
)

const RegisteredTodoHost: FC = () => {
  const state = reactive({
    draft: '确认 Component 能解析字符串名',
    todos: [
      { id: 1, text: '定义 TodoItem 函数组件', done: true },
      { id: 2, text: '通过 useApp().component 注册 TodoItem', done: true },
      { id: 3, text: '用 <Component is="TodoItem" /> 渲染', done: false },
    ] as Todo[],
  })

  const addTodo = () => {
    const text = state.draft.trim()
    if (!text) return

    state.todos.push({
      id: Date.now(),
      text,
      done: false,
    })
    state.draft = ''
  }

  const toggleTodo = (id: number) => {
    const todo = state.todos.find(item => item.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }

  const removeTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  const completed = state.todos.filter(todo => todo.done).length

  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            registered runtime app
          </p>
          <h2 className="mt-2 text-2xl font-semibold">TodoItem 来自字符串注册名</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">
            列表项没有直接写成 <code>{'<TodoItem />'}</code>，而是通过{' '}
            <code>{'<Component is="TodoItem" />'}</code> 从当前应用的注册表解析。
          </p>
        </div>
        <div className="stats stats-horizontal bg-base-200">
          <div className="stat px-4 py-2">
            <div className="stat-title text-xs">完成</div>
            <div className="stat-value text-lg">
              {completed}/{state.todos.length}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          className="input input-bordered flex-1"
          value={state.draft}
          placeholder="新增一条任务"
          onInput={(event: any) => {
            state.draft = event.currentTarget.value
          }}
          onKeyDown={(event: any) => {
            if (event.key === 'Enter') addTodo()
          }}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          添加
        </button>
      </div>

      <ul className="mt-4 grid gap-3">
        {state.todos.map(todo => (
          <Component
            is="TodoItem"
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  )
}

const GlobalComponentRegistrationDemo: FC = () => {
  const mountTarget = useRef<HTMLDivElement>()
  const status = ref('等待外层 demo 挂载内部应用')
  let innerApp: ReturnType<typeof useApp> | null = null
  let disposed = false

  onMounted(() => {
    queueMicrotask(() => {
      if (disposed) return

      const target = mountTarget.current
      if (!target) return

      innerApp = useApp(RegisteredTodoHost).component('TodoItem', TodoItem as FC<any>)
      innerApp.mount(target)
      status.value = '已注册 TodoItem，并通过 Component 的字符串 is 完成渲染'
    })
  })

  onUnmounted(() => {
    disposed = true
    innerApp?.unmount()
    innerApp = null
  })

  return (
    <div className="grid gap-4">
      <div className="alert border border-info/30 bg-info/10 text-sm">
        <span>{status.value}</span>
      </div>
      <div ref={mountTarget} />
      <div className="mockup-code bg-neutral text-neutral-content">
        <pre data-prefix="1">
          <code>{\`const app = useApp(RegisteredTodoHost)\`}</code>
        </pre>
        <pre data-prefix="2">
          <code>{\`.component('TodoItem', TodoItem)\`}</code>
        </pre>
        <pre data-prefix="3">
          <code>{\`.mount(container)\`}</code>
        </pre>
      </div>
    </div>
  )
}

export default GlobalComponentRegistrationDemo
`,Demo:()=>{let n=E(`useSetup:0:0:dup1`,()=>e(()=>{let e=E(`useRef:1:2`,()=>a()),t=E(`ref:1:3`,()=>f(`等待外层 demo 挂载内部应用`)),n=null,r=!1;return C(()=>{queueMicrotask(()=>{if(r)return;let i=e.current;i&&(n=k(M).component(`TodoItem`,j),n.mount(i),t.value=`已注册 TodoItem，并通过 Component 的字符串 is 完成渲染`)})}),y(()=>{r=!0,n?.unmount(),n=null}),{mountTarget:e,status:t,innerApp:n,disposed:r}})),{mountTarget:r,status:s}=n,{innerApp:l,disposed:u}=n;return b(e=>{let n=p(`div`,e);o(n,`grid gap-4`);let a=p(`div`,n);h(n,a),o(a,`alert border border-info/30 bg-info/10 text-sm`);let l=p(`span`,a);h(a,l);let u=c(l);h(l,u),g(()=>{i(u,s.value)});let d=p(`div`,n);h(n,d);let f=O(d,()=>r);x(()=>{f()});let m=p(`div`,n);h(n,m),o(m,`mockup-code bg-neutral text-neutral-content`);let _=p(`pre`,m);h(m,_),t(_,`data-prefix`,`1`);let v=p(`code`,_);h(_,v);let y=c(v);h(v,y),g(()=>{i(y,`const app = useApp(RegisteredTodoHost)`)});let b=p(`pre`,m);h(m,b),t(b,`data-prefix`,`2`);let S=p(`code`,b);h(b,S);let C=c(S);h(S,C),g(()=>{i(C,`.component('TodoItem', TodoItem)`)});let w=p(`pre`,m);h(m,w),t(w,`data-prefix`,`3`);let T=p(`code`,w);h(w,T);let E=c(T);return h(T,E),g(()=>{i(E,`.mount(container)`)}),n})}});export{N as default};
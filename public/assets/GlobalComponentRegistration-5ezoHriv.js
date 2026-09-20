import{B as e,Bt as t,F as n,Gt as r,Ht as i,I as a,Kt as o,P as s,Qt as c,Vt as l,W as u,Wt as d,Xt as f,Yt as p,Zt as m,en as h,f as g,gn as _,h as v,in as y,mn as b,nt as x,p as S,qt as C,sn as w,st as T,u as E,yn as D,z as O,zt as k}from"./rue-runtime-BWbIfNT8.js";import{t as A}from"./createHomeSplitExamplePage-Cjn7V321.js";var j=r([`todos`],[!1]),M=r([`draft`],[!1]),N=r([`todos`,`length`],[!1,!1]),P=D(`<li class="flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3"><label class="flex min-w-0 flex-1 cursor-pointer items-center gap-3"><input type="checkbox" class="checkbox checkbox-primary checkbox-sm"><span><!--rue:text-hole:0--></span></label><button class="btn btn-ghost btn-xs">删除</button></li>`),F=D(`<div class="rounded-box border border-base-300 bg-base-100 p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-semibold uppercase tracking-[0.22em] text-primary">compiler-proven registry</p><h2 class="mt-2 text-2xl font-semibold">TodoItem 来自有限组件注册表</h2><p class="mt-2 max-w-2xl text-sm leading-6 text-base-content/70"><code>&lt;Component is="TodoItem" /&gt;</code> 的 registry 在调用点显式声明，编译器能静态 验证并生成有限工厂分支。</p></div><div class="stats stats-horizontal bg-base-200"><div class="stat px-4 py-2"><div class="stat-title text-xs">完成</div><div class="stat-value text-lg"><!--rue:text-hole:0-->/<!--rue:text-hole:1--></div></div></div></div><div class="mt-5 flex flex-col gap-3 sm:flex-row"><input class="input input-bordered flex-1" placeholder="新增一条任务"><button class="btn btn-primary">添加</button></div><ul class="mt-4 grid gap-3"><!--rue:text-hole:2--></ul></div>`),I=D(`<div class="grid gap-4"><div class="alert border border-info/30 bg-info/10 text-sm"><span>TodoItem 已通过调用点的有限 registry 编译为静态工厂分支。</span></div><!--rue:opaque-hole:0--><div class="mockup-code bg-neutral text-neutral-content"><pre data-prefix="1"><code><!--rue:text-hole:1--></code></pre><pre data-prefix="2"><code><!--rue:text-hole:2--></code></pre><pre data-prefix="3"><code><!--rue:text-hole:3--></code></pre><pre data-prefix="4"><code><!--rue:text-hole:4--></code></pre></div></div>`),L=(n,r,i)=>{let o=u(O(n,`onRemove`)),s=u(O(n,`onToggle`)),c=u(O(n,`todo`));return a(d(e=>{let n=b(),r=P().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0].childNodes[0],l=i.childNodes[0].childNodes[1],u=i.childNodes[1],d=i.childNodes[0].childNodes[1].childNodes[0],f=d.parentNode;n.appendChild(r),a.setAttribute(`type`,`checkbox`),a.setAttribute(`class`,`checkbox checkbox-primary checkbox-sm`);let p;y(()=>{let e=!!c.get().done;Object.is(p,e)||(p=e,a.checked=e)}),w(E(e,a,`change`,()=>()=>s.get()(c.get().id)));let m;y(()=>{let e=`truncate ${c.get().done?`text-base-content/45 line-through`:``}`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,l.setAttribute(`class`,t))}),u.setAttribute(`class`,`btn btn-ghost btn-xs`),w(E(e,u,`click`,()=>()=>o.get()(c.get().id))),t({parent:f,before:d},()=>k(c.get().text),()=>({}));let h=_(``),g=_(``);return n.insertBefore(h,n.firstChild),n.appendChild(g),[n.firstChild,n.lastChild]}),e=>h(()=>{o.set(e.onRemove),s.set(e.onToggle),c.set(e.todo)}),()=>e(n))},R=(e,n,r)=>{let[a]=T(`RegisteredTodoHost:hook:0`,{draft:`确认 Component 能解析字符串名`,todos:[{id:1,text:`定义 TodoItem 函数组件`,done:!0},{id:2,text:`为 Component 声明有限 registry`,done:!0},{id:3,text:`用静态可证明的 TodoItem 工厂渲染`,done:!1}]}),h=()=>{let e=`${a.get().draft}`.trim();e&&(f(p(m(a))(`todos`),`push`)({id:Date.now(),text:e,done:!1}),p(m(a))(`draft`).value=``)},b=e=>{let t=a.get().todos.findIndex(t=>t.id===e);t!==-1&&(p(p(m(a))(`todos`))(t).value={...o(a,j)[t],done:!o(a,j)[t].done})},E=e=>{let t=a.get().todos.findIndex(t=>t.id===e);t!==-1&&f(p(m(a))(`todos`),`splice`)(t,1)},D=a.get().todos.filter(e=>e.done).length;return x(()=>d(e=>{let n=F().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],d=n.childNodes[1].childNodes[1],f=n.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],x=f.parentNode,T=n.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[2],O=T.parentNode,A=n.childNodes[2].childNodes[0],j=A.parentNode;r.setAttribute(`class`,`input input-bordered flex-1`);let P;y(()=>{let e=o(a,M),t=e==null?``:String(e);Object.is(P,t)||(P=t,r.value=t)}),r.setAttribute(`placeholder`,`新增一条任务`);let I=e=>{let t=e=>{p(m(a))(`draft`).value=e.currentTarget.value};typeof t==`function`&&t(e)};r.addEventListener(`input`,I),w(()=>r.removeEventListener(`input`,I));let R=e=>{let t=e=>{e.key===`Enter`&&h()};typeof t==`function`&&t(e)};r.addEventListener(`keydown`,R),w(()=>r.removeEventListener(`keydown`,R)),d.setAttribute(`class`,`btn btn-primary`);let z=e=>{let t=h;typeof t==`function`&&t(e)};d.addEventListener(`click`,z),w(()=>d.removeEventListener(`click`,z)),t({parent:x,before:f},()=>k(D),()=>({}));let B=_(``);O.insertBefore(B,T),O.removeChild(T),c(B,()=>o(a,N));let V=[];return C(()=>{let e=a.get().todos||[];V=v(j,A,V,e,(e,t)=>e.id,(e,t)=>{let n=u(e);return S((e,t,r)=>{let a=()=>i(()=>{switch(`TodoItem`){case`TodoItem`:return{__rue_compiled_branch_key:`TodoItem`,create:()=>s(L,()=>({todo:n.get(),onToggle:b,onRemove:E}))};default:throw Error(`Unknown compiled component key`)}});return e==null?a():l(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),w(()=>g(V)),[n,n]}))},z=(e,n,r)=>d(e=>{let n=I().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode,a=n.childNodes[2].childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,u=n.childNodes[2].childNodes[1].childNodes[0].childNodes[0],d=u.parentNode,f=n.childNodes[2].childNodes[2].childNodes[0].childNodes[0],p=f.parentNode,m=n.childNodes[2].childNodes[3].childNodes[0].childNodes[0],h=m.parentNode,g=(e,t,n)=>{let r=()=>s(R,()=>({}));return e==null?r():l(e,n,r)},v=r.nextSibling;i.removeChild(r),t({parent:i,before:v},()=>g,()=>({}));let y=_(``);o.insertBefore(y,a),o.removeChild(a),c(y,()=>`<Component`);let b=_(``);d.insertBefore(b,u),d.removeChild(u),c(b,()=>`  is="TodoItem"`);let x=_(``);p.insertBefore(x,f),p.removeChild(f),c(x,()=>`  registry={{ TodoItem }}`);let S=_(``);return h.insertBefore(S,m),h.removeChild(m),c(S,()=>`/>`),[n,n]}),B=`import { Component, type FC, useState } from '@rue-js/rue'

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
  const [state] = useState({
    draft: '确认 Component 能解析字符串名',
    todos: [
      { id: 1, text: '定义 TodoItem 函数组件', done: true },
      { id: 2, text: '为 Component 声明有限 registry', done: true },
      { id: 3, text: '用静态可证明的 TodoItem 工厂渲染', done: false },
    ] as Todo[],
  })

  const addTodo = () => {
    const text = \`\${state.draft}\`.trim()
    if (!text) return

    state.todos.push({
      id: Date.now(),
      text,
      done: false,
    })
    state.draft = ''
  }

  const toggleTodo = (id: number) => {
    const index = state.todos.findIndex(item => item.id === id)
    if (index !== -1) {
      state.todos[index] = { ...state.todos[index], done: !state.todos[index].done }
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
            compiler-proven registry
          </p>
          <h2 className="mt-2 text-2xl font-semibold">TodoItem 来自有限组件注册表</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-base-content/70">
            <code>{'<Component is="TodoItem" />'}</code> 的 registry 在调用点显式声明，编译器能静态
            验证并生成有限工厂分支。
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
            is={'TodoItem'}
            registry={{ TodoItem }}
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
  return (
    <div className="grid gap-4">
      <div className="alert border border-info/30 bg-info/10 text-sm">
        <span>TodoItem 已通过调用点的有限 registry 编译为静态工厂分支。</span>
      </div>
      <RegisteredTodoHost />
      <div className="mockup-code bg-neutral text-neutral-content">
        <pre data-prefix="1">
          <code>{\`<Component\`}</code>
        </pre>
        <pre data-prefix="2">
          <code>{\`  is="TodoItem"\`}</code>
        </pre>
        <pre data-prefix="3">
          <code>{\`  registry={{ TodoItem }}\`}</code>
        </pre>
        <pre data-prefix="4">
          <code>{\`/>\`}</code>
        </pre>
      </div>
    </div>
  )
}

export default GlobalComponentRegistrationDemo
`,V=(e,t,r)=>s(A,()=>({options:{title:`useApp().component 运行时注册`,source:B},children:(e,t,r)=>{let i=()=>d(e=>{let t=b();n(t,z,()=>({}));let r=_(``),i=_(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));export{V as default};
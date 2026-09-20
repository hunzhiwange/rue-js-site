import{B as e,Bt as t,F as n,I as r,P as i,Ut as a,V as o,Vt as s,W as c,Wt as l,X as u,Y as d,ct as f,en as p,f as m,fn as h,gn as g,h as _,hn as v,in as y,mn as b,mt as x,nt as S,p as C,pn as w,qt as T,sn as E,u as D,yn as O,z as k,zt as A}from"./rue-runtime-BWbIfNT8.js";import{t as j}from"./Code-C5ZhIIr9.js";import{r as M}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var N=O(`<li><div><!--rue:text-hole:0--><!--rue:text-hole:1--></div><!--rue:text-hole:2--></li>`),P=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">树状视图（移植自 Vue）</h1>`),F=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),I=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),L=(n,x,D)=>{let O=c(k(n,`className`)),j=c(k(n,`model`)),M=c(k(n,`onChange`)),P=f(()=>!!j.get().open),F=f(()=>!!j.get().children&&j.get().children.length>0),I=e=>{e?.stopPropagation(),M.get()(j.get().id,{open:!P.get()})},R=e=>{e?.stopPropagation();let t=j.get().children??[];M.get()(j.get().id,{children:[...t,{id:`${j.get().id}-new-${t.length}`,name:`new stuff`}],open:!0})},z=e=>{e?.stopPropagation(),F.get()||R()};return S(()=>r(l(e=>{let n=b(),r=N().content.cloneNode(!0),f=r.firstChild,p=f.childNodes[0],x=f.childNodes[0].childNodes[0],S=x.parentNode,D=f.childNodes[0].childNodes[1],k=D.parentNode,B=f.childNodes[1],V=B.parentNode;n.appendChild(r);let H;y(()=>{let e=`label-${j.get().id}`;Object.is(H,e)||(H=e,e==null?p.removeAttribute(`data-testid`):p.setAttribute(`data-testid`,String(e)))});let U;y(()=>{let e=`${F.get()?`font-bold`:``} cursor-pointer leading-6 ${O.get()||``}`,t=e===!1||e==null?``:String(e);Object.is(U,t)||(U=t,p.setAttribute(`class`,t))});let W=e=>{let t=I;typeof t==`function`&&t(e)};p.addEventListener(`click`,W),E(()=>p.removeEventListener(`click`,W));let G=e=>{let t=z;typeof t==`function`&&t(e)};p.addEventListener(`dblclick`,G),E(()=>p.removeEventListener(`dblclick`,G)),t({parent:S,before:x},()=>A(j.get().name),()=>({})),a(k,D,()=>F.get()?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let t=v(`span`,e);t.setAttribute(`class`,`ml-2`),h(t,g(`[`));let n=g(``);return h(t,n),u(n,()=>P.get()?`-`:`+`),h(t,g(`]`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=b();return[t.firstChild,t.lastChild]})}),a(V,B,()=>F.get()&&P.get()?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v(`ul`,e);t.setAttribute(`class`,`pl-6`);let n=w(`rue:list:end`);h(t,n);let r=[];T(()=>{let e=j.get().children||[];r=_(n.parentNode,n,r,e,(e,t)=>e.id,(e,t)=>{let n=c(e);return C((e,t,r)=>{let a=()=>i(L,()=>({className:`item`,model:n.get(),onChange:(...e)=>M.get()(...e)}));return e==null?a():s(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),E(()=>m(r));let a=v(`li`,t);h(t,a);let o;y(()=>{let e=`add-${j.get().id}`;Object.is(o,e)||(o=e,e==null?a.removeAttribute(`data-testid`):a.setAttribute(`data-testid`,String(e)))}),a.setAttribute(`class`,`item text-emerald-600 select-none`);let l=e=>{let t=R;typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),E(()=>a.removeEventListener(`click`,l)),h(a,g(`+`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=b();return[t.firstChild,t.lastChild]})});let K=g(``),q=g(``);return n.insertBefore(K,n.firstChild),n.appendChild(q),[n.firstChild,n.lastChild]}),e=>p(()=>{O.set(e.className),j.set(e.model),M.set(e.onChange)}),()=>e(n)))},R=(e,t,r)=>{let c=x({id:`root`,name:`My Tree`,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,children:[{id:`branch-deep-1`,name:`child folder`,children:[{id:`branch-deep-1-hello`,name:`hello`},{id:`branch-deep-1-world`,name:`world`}]},{id:`branch-hello`,name:`hello`},{id:`branch-world`,name:`world`},{id:`branch-deep-2`,name:`child folder`,children:[{id:`branch-deep-2-hello`,name:`hello`},{id:`branch-deep-2-world`,name:`world`}]}]}]}),u=(e,t)=>{let n=r=>r.id===e?{...r,...t}:{...r,children:r.children?.map(n)};c.value=n(c.value)},d=x(`preview`);return S(()=>i(M,()=>({children:(e,t,r)=>{let i=()=>l(e=>{let t=b();t.appendChild(P().content.cloneNode(!0));let r=F().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[0],f=i.childNodes[1];t.appendChild(r),s.setAttribute(`role`,`tab`);let p;y(()=>{let e=`tab ${d.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,s.setAttribute(`class`,t))}),E(D(e,s,`click`,()=>()=>{d.value=`preview`})),f.setAttribute(`role`,`tab`);let m;y(()=>{let e=`tab ${d.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,f.setAttribute(`class`,t))}),E(D(e,f,`click`,()=>()=>{d.value=`code`}));let _=I().content.cloneNode(!0),x=_.firstChild,S=x.childNodes[0],C=S.parentNode,w=x.childNodes[1],T=w.parentNode;t.appendChild(_),a(C,S,()=>{let e=d.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=v(`div`,t);return h(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,j,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, computed, ref } from '@rue-js/rue'

type Node = { id: string; name: string; open?: boolean; children?: Node[] }

const TreeItem: FC<{ model: Node; className?: string; onChange: (id: string, patch: Partial<Node>) => void }> = props => {
  const isOpen = computed(() => !!props.model.open)
  const isFolder = computed(() => !!props.model.children && props.model.children.length > 0)

  const toggle = (e?: any) => {
    e?.stopPropagation()
    props.onChange(props.model.id, { open: !isOpen.get() })
  }

  const addChild = (e?: any) => {
    e?.stopPropagation()
    const children = props.model.children ?? []
    props.onChange(props.model.id, {
      children: [...children, { id: \`\${props.model.id}-new-\${children.length}\`, name: 'new stuff' }],
      open: true,
    })
  }

  const changeType = (e?: any) => {
    e?.stopPropagation()
    if (!isFolder.get()) addChild()
  }

  return (
    <li>
      <div
        data-testid={\`label-\${props.model.id}\`}
        className={\`\${isFolder.get() ? 'font-bold' : ''} cursor-pointer leading-6 \${props.className || ''}\`}
        onClick={toggle}
        onDblClick={changeType}
      >
        {props.model.name}
        {isFolder.get() ? <span className="ml-2">[{isOpen.get() ? '-' : '+'}]</span> : null}
      </div>
      {isFolder.get() && isOpen.get() ? (
        <ul className="pl-6">
          {props.model.children!.map(m => (
            <TreeItem key={m.id} className="item" model={m} onChange={props.onChange} />
          ))}
          <li
            key={\`\${props.model.id}-add\`}
            data-testid={\`add-\${props.model.id}\`}
            className="item text-emerald-600 select-none"
            onClick={addChild}
          >
            +
          </li>
        </ul>
      ) : null}
    </li>
  )
}

const TreeView: FC = () => {
  const treeData = ref<Node>({
    id: 'root',
    name: 'My Tree',
    children: [
      { id: 'hello', name: 'hello' },
      { id: 'world', name: 'world' },
      {
        id: 'branch',
        name: 'child folder',
        children: [
          {
            id: 'branch-deep-1',
            name: 'child folder',
            children: [
              { id: 'branch-deep-1-hello', name: 'hello' },
              { id: 'branch-deep-1-world', name: 'world' },
            ],
          },
          { id: 'branch-hello', name: 'hello' },
          { id: 'branch-world', name: 'world' },
          {
            id: 'branch-deep-2',
            name: 'child folder',
            children: [
              { id: 'branch-deep-2-hello', name: 'hello' },
              { id: 'branch-deep-2-world', name: 'world' },
            ],
          },
        ],
      },
    ],
  })

  const onChange = (id: string, patch: Partial<Node>) => {
    const update = (node: Node): Node => node.id === id
      ? { ...node, ...patch }
      : { ...node, children: node.children?.map(update) }
    treeData.value = update(treeData.value)
  }

  const activeTab = ref<'preview' | 'code'>('preview')
  return <ul><TreeItem model={treeData.value} onChange={onChange} /></ul>
}
`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=b();return[t.firstChild,t.lastChild]})}}),a(T,w,()=>{let e=d.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card-body grid gap-4`);let i=v(`ul`,r);return h(r,i),n(i,L,()=>({className:`item`,model:c.value,onChange:u})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=b();return[t.firstChild,t.lastChild]})}});let O=g(``),k=g(``);return t.insertBefore(O,t.firstChild),t.appendChild(k),[t.firstChild,t.lastChild]});return e==null?i():s(e,r,i)}})))};export{R as default};
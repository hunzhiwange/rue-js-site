import{Bt as e,F as t,H as n,I as r,U as i,Ut as a,V as o,Vt as s,Wt as c,Y as l,_t as u,en as d,f,fn as p,gn as m,gt as h,h as g,hn as _,in as v,mn as y,p as b,pn as x,qt as S,sn as C,st as w,tt as T,u as E,vt as D,yn as O,yt as k,zt as A}from"./rue-runtime-Cv6BZekS.js";import{t as j}from"./Code-BzFVdc3U.js";import{r as M}from"./SidebarPlaygroundExample-rFyhXfC_.js";var N=O(`<li><div><!--rue:text-hole:0--><!--rue:text-hole:1--></div><!--rue:text-hole:2--></li>`),P=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">树状视图（移植自 Vue）</h1>`),F=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),I=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),L=(n,w,E)=>{let O=D(h(n,`className`)),j=D(h(n,`model`)),M=D(h(n,`onChange`)),P=T(()=>!!j.get().open),F=T(()=>!!j.get().children&&j.get().children.length>0),I=e=>{e?.stopPropagation(),M.get()(j.get().id,{open:!P.get()})},R=e=>{e?.stopPropagation();let t=j.get().children??[];M.get()(j.get().id,{children:[...t,{id:`${j.get().id}-new-${t.length}`,name:`new stuff`}],open:!0})},z=e=>{e?.stopPropagation(),F.get()||R()};return l(()=>i(c(n=>{let i=y(),l=N().content.cloneNode(!0),u=l.firstChild,d=u.childNodes[0],h=u.childNodes[0].childNodes[0],w=h.parentNode,T=u.childNodes[0].childNodes[1],E=T.parentNode,B=u.childNodes[1],V=B.parentNode;i.appendChild(l);let H;v(()=>{let e=`label-${j.get().id}`;Object.is(H,e)||(H=e,e==null?d.removeAttribute(`data-testid`):d.setAttribute(`data-testid`,String(e)))});let U;v(()=>{let e=`${F.get()?`font-bold`:``} cursor-pointer leading-6 ${O.get()||``}`,t=e===!1||e==null?``:String(e);Object.is(U,t)||(U=t,d.setAttribute(`class`,t))});let W=e=>{let t=I;typeof t==`function`&&t(e)};d.addEventListener(`click`,W),C(()=>d.removeEventListener(`click`,W));let G=e=>{let t=z;typeof t==`function`&&t(e)};d.addEventListener(`dblclick`,G),C(()=>d.removeEventListener(`dblclick`,G)),e({parent:w,before:h},()=>A(j.get().name),()=>({})),a(E,T,()=>F.get()?{__rue_compiled_branch_key:!0,create:()=>t(e=>{let t=_(`span`,e);t.setAttribute(`class`,`ml-2`),p(t,m(`[`));let n=m(``);return p(t,n),r(n,()=>P.get()?`-`:`+`),p(t,m(`]`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}),a(V,B,()=>F.get()&&P.get()?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`ul`,e);t.setAttribute(`class`,`pl-6`);let n=x(`rue:list:end`);p(t,n);let r=[];S(()=>{let e=j.get().children||[];r=g(n.parentNode,n,r,e,(e,t)=>e.id,(e,t)=>{let n=D(e);return b((e,t,r)=>{let i=()=>o(L,()=>({className:`item`,model:n.get(),onChange:(...e)=>M.get()(...e)}));return e==null?i():s(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),C(()=>f(r));let i=_(`li`,t);p(t,i);let a;v(()=>{let e=`add-${j.get().id}`;Object.is(a,e)||(a=e,e==null?i.removeAttribute(`data-testid`):i.setAttribute(`data-testid`,String(e)))}),i.setAttribute(`class`,`item text-emerald-600 select-none`);let c=e=>{let t=R;typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),C(()=>i.removeEventListener(`click`,c)),p(i,m(`+`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})});let K=m(``),q=m(``);return i.insertBefore(K,i.firstChild),i.appendChild(q),[i.firstChild,i.lastChild]}),e=>d(()=>{O.set(e.className),j.set(e.model),M.set(e.onChange)}),()=>u(n)))},R=(e,t,r)=>{let i=w({id:`root`,name:`My Tree`,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,children:[{id:`branch-deep-1`,name:`child folder`,children:[{id:`branch-deep-1-hello`,name:`hello`},{id:`branch-deep-1-world`,name:`world`}]},{id:`branch-hello`,name:`hello`},{id:`branch-world`,name:`world`},{id:`branch-deep-2`,name:`child folder`,children:[{id:`branch-deep-2-hello`,name:`hello`},{id:`branch-deep-2-world`,name:`world`}]}]}]}),u=(e,t)=>{let n=r=>r.id===e?{...r,...t}:{...r,children:r.children?.map(n)};i.value=n(i.value)},d=w(`preview`);return l(()=>o(M,()=>({children:(e,t,r)=>{let o=()=>c(e=>{let t=y();t.appendChild(P().content.cloneNode(!0));let r=F().content.cloneNode(!0),o=r.firstChild,s=o.childNodes[0],l=o.childNodes[1];t.appendChild(r),s.setAttribute(`role`,`tab`);let f;v(()=>{let e=`tab ${d.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,s.setAttribute(`class`,t))}),C(E(e,s,`click`,()=>()=>{d.value=`preview`})),l.setAttribute(`role`,`tab`);let h;v(()=>{let e=`tab ${d.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,l.setAttribute(`class`,t))}),C(E(e,l,`click`,()=>()=>{d.value=`code`}));let g=I().content.cloneNode(!0),b=g.firstChild,x=b.childNodes[0],S=x.parentNode,w=b.childNodes[1],T=w.parentNode;t.appendChild(g),a(S,x,()=>{let e=d.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=_(`div`,t);return p(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,j,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, computed, ref } from '@rue-js/rue'

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
`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>k(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}}),a(T,w,()=>{let e=d.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=_(`div`,t);p(t,r),r.setAttribute(`class`,`card-body grid gap-4`);let a=_(`ul`,r);return p(r,a),n(a,L,()=>({className:`item`,model:i.value,onChange:u})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>k(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}});let D=m(``),O=m(``);return t.insertBefore(D,t.firstChild),t.appendChild(O),[t.firstChild,t.lastChild]});return e==null?o():s(e,r,o)}})))};export{R as default};
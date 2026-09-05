import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,Mt as c,S as l,Sn as u,V as d,W as f,X as p,Y as m,_n as h,_t as g,at as _,bn as v,fn as y,ft as b,gn as x,hn as S,ht as C,it as w,kn as T,nn as E,nt as D,ot as O,pn as k,pt as A,q as j,rt as M,wn as N,x as P,z as F}from"./rue-runtime-CwEGJ854.js";import{t as I}from"./Code-B3jCYMAr.js";import{r as L}from"./SidebarPlaygroundExample-EGR0CyDT.js";var R=h(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">SVG 图像（移植自 Vue）</h1>`),z=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),B=h(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`);function V(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var H=e=>{let t=f(e.index),n=f(e.stat),r=f(e.total),i=u(()=>V(+n.get().value+10,t.get(),r.get()));return c(()=>j(C(()=>{let e=D(),t=M(`text`,e);p(e,t),N(()=>{O(t,`x`,String(i.get().x))}),N(()=>{O(t,`y`,String(i.get().y))});let r=_(t);return p(t,r),N(()=>{A(r,n.get().label)}),e},!0),e=>F(()=>{t.set(e.index),n.set(e.stat),r.set(e.total)}),()=>e))},U=e=>{let n=f(e.stats),r=u(()=>{let e=n.get().length;return n.get().map((t,n)=>{let{x:r,y:i}=V(t.value,n,e);return`${r},${i}`}).join(` `)});return c(()=>j(C(()=>{let e=D(),a=M(`g`,e);p(e,a);let o=M(`polygon`,a);p(a,o),N(()=>{O(o,`points`,String(r.get()))});let s=M(`circle`,a);p(a,s),O(s,`cx`,`100`),O(s,`cy`,`100`),O(s,`r`,`80`);let c=k(`rue:list:end`);y(a,c);let u=[];return N(()=>{let e=n.get()||[];u=t(a,c,u,e,(e,t)=>e.label+t,(e,t)=>{let r=f(e),a=f(t);return l((e,t,o)=>P(e,o,()=>i(H,()=>({stat:r.get(),index:a.get(),total:n.get().length}))),(n,i)=>{e=n,t=i,r.set(n),a.set(i)})})}),e},!0),e=>F(()=>{n.set(e.stats)}),()=>e))},W=()=>{let i=e(``),u=E([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]),h=e(`preview`),V=e=>{e.preventDefault(),i.value.trim()&&(u.push({label:i.value,value:100}),i.value=``)},H=e=>{u.length>3?u.splice(u.indexOf(e),1):alert(`Can't delete more!`)},W=(e,t)=>{e.value=Number(t.target.value)};return c(()=>j((()=>{let e=C(()=>{let e=D(),t=M(`style`,e);return p(e,t),N(()=>{A(t,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)}),e}),c=C(()=>{let e=D(),c=B().content.cloneNode(!0),g=c.firstChild,E=g.childNodes[0],j=E.parentNode,F=g.childNodes[1],L=F.parentNode;return e.appendChild(c),d(j,E,()=>{let e=h.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=S(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`,a(t,I,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

type Stat = { label: string; value: number };

function valueToPoint(value: number, index: number, total: number) {
  const x = 0;
  const y = -value * 0.8;
  const angle = ((Math.PI * 2) / total) * index;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = x * cos - y * sin + 100;
  const ty = x * sin + y * cos + 100;
  return { x: tx, y: ty };
}

const AxisLabel: FC<{ stat: Stat; index: number; total: number }> = (props) => {
  const point = computed(() => valueToPoint(+props.stat.value + 10, props.index, props.total));
  return <text x={point.value.x} y={point.value.y}>{props.stat.label}</text>;
};

const PolyGraph: FC<{ stats: Stat[] }> = (props) => {
  const points = computed(() => {
    const total = props.stats.length;
    return props.stats
      .map((stat, i) => {
        const { x, y } = valueToPoint(stat.value, i, total);
        return '\${x},\${y}';
      })
      .join(' ');
  });
  return (
    <g>
      <polygon points={points.value}></polygon>
      <circle cx={100} cy={100} r={80}></circle>
      {props.stats.map((stat, index) => (
        <AxisLabel key={stat.label + index} stat={stat} index={index} total={props.stats.length} />
      ))}
    </g>
  );
};

const SVGGraph: FC = () => {
  const newLabel = ref('');
  const stats = reactive<Stat[]>([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 },
  ]);
  const add = (e: any) => { e.preventDefault(); if (!newLabel.value.trim()) return; stats.push({ label: newLabel.value, value: 100 }); newLabel.value = ''; };
  const remove = (stat: Stat) => { if (stats.length > 3) { stats.splice(stats.indexOf(stat), 1); } else { alert("Can't delete more!"); } };
  const updateValue = (s: Stat, e: any) => { s.value = Number((e.target as HTMLInputElement).value); };
  return (
      <>
      <style>{\`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph .raw { padding: 10px; }
\`}</style>
      <div className="card bg-base-100 shadow">
        <div className="card-body grid gap-4 rue-svg-graph">
          <svg width={200} height={200}>
            <PolyGraph stats={stats} />
          </svg>
          <div className="grid gap-3">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center gap-3">
                <label>{stat.label}</label>
                <input
                  type="range"
                  className="range range-primary flex-1"
                  value={stat.value}
                  min={0}
                  max={100}
                  onInput={(e: any) => updateValue(stat, e)}
                />
                <span className="w-10 text-right">{stat.value}</span>
                <button className="btn btn-error btn-sm" onClick={() => remove(stat)}>
                  X
                </button>
              </div>
            ))}
          </div>
          <form className="flex items-center gap-2" onSubmit={add}>
            <input
              name="newlabel"
              className="input input-bordered"
              value={newLabel.value}
              onInput={(e: any) => {
                newLabel.value = (e.target as HTMLInputElement).value
              }}
            />
            <button className="btn btn-success" onClick={add}>
              Add a Stat
            </button>
          </form>
          <pre className="raw">{JSON.stringify(stats, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};

export default SVGGraph;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=D();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),N(()=>{let e=h.value===`preview`?C(()=>{let e=D(),c=M(`div`,e);p(e,c),o(c,`card bg-base-100 shadow`);let d=M(`div`,c);p(c,d),o(d,`card-body grid gap-4 rue-svg-graph`);let m=M(`svg`,d);p(d,m),O(m,`width`,`200`),O(m,`height`,`200`),a(m,U,()=>({stats:u}));let h=M(`div`,d);p(d,h),o(h,`grid gap-3`);let g=k(`rue:list:end`);y(h,g);let C=[];N(()=>{C=t(h,g,C,u||[],(e,t)=>e.label,(e,t)=>{let i=f(e),a=f(t);return l((e,t,a)=>P(e,a,()=>r(Object.assign(e=>{let t=S(`div`,e);t.className=`flex items-center gap-3`;let r=S(`label`,t);y(t,r);let a=x(``);y(r,a),v(a,()=>i.get().label);let o=S(`input`,t);y(t,o),o.setAttribute(`type`,`range`),o.className=`range range-primary flex-1`;let s;N(()=>{let e=i.get().value,t=e==null?``:String(e);Object.is(s,t)||(s=t,b(o,t))}),o.setAttribute(`min`,`0`),o.setAttribute(`max`,`100`);let c=e=>{let t=e=>W(i.get(),e);typeof t==`function`&&t(e)};o.addEventListener(`input`,c),n(()=>o.removeEventListener(`input`,c));let l=S(`span`,t);y(t,l),l.className=`w-10 text-right`;let u=x(``);y(l,u),v(u,()=>i.get().value);let d=S(`button`,t);y(t,d),d.className=`btn btn-error btn-sm`;let f=e=>{let t=()=>H(i.get());typeof t==`function`&&t(e)};return d.addEventListener(`click`,f),n(()=>d.removeEventListener(`click`,f)),y(d,x(`X`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r)=>{e=n,t=r,i.set(n),a.set(r)})})});let T=M(`form`,d);p(d,T),o(T,`flex items-center gap-2`);let E=e=>{let t=V;typeof t==`function`&&t(e)};T.addEventListener(`submit`,E),s(()=>T.removeEventListener(`submit`,E));let j=M(`input`,T);p(T,j),O(j,`name`,`newlabel`),o(j,`input input-bordered`),N(()=>{b(j,i.value)});let F=e=>{let t=e=>{i.value=e.target.value};typeof t==`function`&&t(e)};j.addEventListener(`input`,F),s(()=>j.removeEventListener(`input`,F));let I=M(`button`,T);p(T,I),o(I,`btn btn-success`);let L=e=>{let t=V;typeof t==`function`&&t(e)};I.addEventListener(`click`,L),s(()=>I.removeEventListener(`click`,L)),p(I,w(`Add a Stat`));let R=M(`pre`,d);p(d,R),o(R,`raw`);let z=_(R);return p(R,z),N(()=>{A(z,JSON.stringify(u,null,2))}),e},!0):``;T(()=>m(e,L,F))}),e});return g(L,()=>({children:[e,r(e=>R().content.cloneNode(!0).firstChild),r(Object.assign(e=>{let t=z().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;N(()=>{let e=`tab ${h.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{h.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;N(()=>{let e=`tab ${h.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{h.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),c]}))})(),e=>F(()=>{})))};export{W as default};
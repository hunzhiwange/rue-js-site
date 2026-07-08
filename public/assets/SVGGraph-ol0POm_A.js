import{Nt as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,s as h,t as g,tn as _,tt as v,wt as y,yt as b}from"./vapor-runtime-x7F5M-49.js";import{a as x,n as S}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as C}from"./Code-BoXKy3gJ.js";import{r as w}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=e=>{let{point:r}=x(`useSetup:0:0`,()=>f(()=>({point:x(`computed:1:0`,()=>y(()=>T(+e.stat.value+10,e.index,e.total)))})));return l(i=>{let a=m(`text`,i);n(()=>{s(a,`x`,String(r.get().x))}),n(()=>{s(a,`y`,String(r.get().y))});let o=v(`rue:slot:anchor`);return t(a,o),n(()=>{let t=e.stat.label;_(()=>d(t,a,o))}),a})},D=e=>{let{points:r}=x(`useSetup:0:0:dup1`,()=>f(()=>({points:x(`computed:1:1`,()=>y(()=>{let t=e.stats.length;return e.stats.map((e,n)=>{let{x:r,y:i}=T(e.value,n,t);return`${r},${i}`}).join(` `)}))})));return l(i=>{let a=m(`g`,i),o=m(`polygon`,a);t(a,o),n(()=>{s(o,`points`,String(r.get()))});let c=m(`circle`,a);t(a,c),s(c,`cx`,`100`),s(c,`cy`,`100`),s(c,`r`,`80`);let l=v(`rue:list:start`),u=v(`rue:list:end`);t(a,l),t(a,u);let d=new Map;return n(()=>{d=S({items:e.stats||[],getKey:(e,t)=>e.label+t,elements:d,parent:l.parentNode,before:u,start:l,renderItem:(t,n,r,i,a)=>{h(g(E,{key:t.label+a,stat:t,index:a,total:e.stats.length}),n,r,i)}})}),a})},O=()=>{let{newLabel:h,stats:y,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>f(()=>{let t=x(`ref:1:2`,()=>r(``)),n=x(`reactive:1:3`,()=>e([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:t,stats:n,activeTab:x(`ref:1:4`,()=>r(`preview`)),add:e=>{e.preventDefault(),t.value.trim()&&(n.push({label:t.value,value:100}),t.value=``)},remove:e=>{n.length>3?n.splice(n.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return l(e=>{let r=u(),f=v(`rue:component:anchor`);return t(r,f),d(g(w,{children:l(()=>{let e=u(),r=m(`style`,e);t(e,r),n(()=>{o(r,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let f=m(`h1`,e);t(e,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,c(`SVG 图像（移植自 Vue）`));let x=m(`div`,e);t(e,x),s(x,`role`,`tablist`),p(x,`tabs tabs-box`);let w=m(`button`,x);t(x,w),s(w,`role`,`tab`),n(()=>{p(w,`tab ${T.value===`preview`?`tab-active`:``}`)}),i(w,`click`,()=>{T.value=`preview`}),t(w,c(`效果`));let A=m(`button`,x);t(x,A),s(A,`role`,`tab`),n(()=>{p(A,`tab ${T.value===`code`?`tab-active`:``}`)}),i(A,`click`,()=>{T.value=`code`}),t(A,c(`代码`));let j=m(`div`,e);t(e,j),p(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=v(`rue:slot:anchor`);t(j,M),n(()=>{let e=T.value===`code`?l(()=>{let e=u(),r=m(`div`,e);t(e,r),p(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let i=v(`rue:component:anchor`);return t(r,i),n(()=>{let e=g(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});_(()=>d(e,r,i))}),e}):``;_(()=>d(e,j,M))}),t(j,c(` `));let N=v(`rue:slot:anchor`);return t(j,N),n(()=>{let e=T.value===`preview`?l(()=>{let e=u(),r=m(`div`,e);t(e,r),p(r,`card bg-base-100 shadow`);let f=m(`div`,r);t(r,f),p(f,`card-body grid gap-4 rue-svg-graph`);let x=m(`svg`,f);t(f,x),s(x,`width`,`200`),s(x,`height`,`200`);let C=v(`rue:component:anchor`);t(x,C),n(()=>{let e=g(D,{stats:y});_(()=>d(e,x,C))});let w=m(`div`,f);t(f,w),p(w,`grid gap-3`);let T=v(`rue:list:start`),A=v(`rue:list:end`);t(w,T),t(w,A);let j=new Map;n(()=>{j=S({items:y||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,r,f,h,g)=>{d(l(()=>{let r=u(),l=m(`div`,r);t(r,l),n(()=>{s(l,`key`,String(e.label))}),p(l,`flex items-center gap-3`);let f=m(`label`,l);t(l,f);let h=v(`rue:slot:anchor`);t(f,h),n(()=>{let t=e.label;_(()=>d(t,f,h))});let g=m(`input`,l);t(l,g),s(g,`type`,`range`),p(g,`range range-primary flex-1`),n(()=>{b(g,e.value)}),s(g,`min`,`0`),s(g,`max`,`100`),i(g,`input`,t=>k(e,t));let y=m(`span`,l);t(l,y),p(y,`w-10 text-right`);let x=a(y);t(y,x),n(()=>{o(x,e.value)});let S=m(`button`,l);return t(l,S),p(S,`btn btn-error btn-sm`),i(S,`click`,()=>O(e)),t(S,c(`X`)),r}),r,f)}})});let M=m(`form`,f);t(f,M),p(M,`flex items-center gap-2`),i(M,`submit`,E);let N=m(`input`,M);t(M,N),s(N,`name`,`newlabel`),p(N,`input input-bordered`),n(()=>{b(N,h.value)}),i(N,`input`,e=>{h.value=e.target.value});let P=m(`button`,M);t(M,P),p(P,`btn btn-success`),i(P,`click`,E),t(P,c(`Add a Stat`));let F=m(`pre`,f);t(f,F),p(F,`raw`);let I=a(F);return t(F,I),n(()=>{o(I,JSON.stringify(y,null,2))}),e}):``;_(()=>d(e,j,N))}),e})}),r,f),r})};export{O as default};
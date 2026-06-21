import{$t as e,Jt as t,Q as n,St as r,Z as i,_t as a,dt as o,et as s,in as c,it as l,jt as u,l as d,lt as f,nt as p,o as m,rt as h,s as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-DsQWl-IB.js";import{a as x,n as S}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as C}from"./Code-4SUSUwRg.js";import{r as w}from"./SidebarPlaygroundExample-BEWYUWOl.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=t=>{let{point:i}=x(`useSetup:0:0`,()=>c(()=>({point:x(`computed:1:0`,()=>r(()=>T(+t.stat.value+10,t.index,t.total)))})));return d(r=>{let a=p(`text`,r);b(()=>{f(a,`x`,String(i.get().x))}),b(()=>{f(a,`y`,String(i.get().y))});let o=s(`rue:slot:anchor`);return n(a,o),b(()=>{let n=t.stat.label;e(()=>m(n,a,o))}),a})},D=e=>{let{points:t}=x(`useSetup:0:0:dup1`,()=>c(()=>({points:x(`computed:1:1`,()=>r(()=>{let t=e.stats.length;return e.stats.map((e,n)=>{let{x:r,y:i}=T(e.value,n,t);return`${r},${i}`}).join(` `)}))})));return d(r=>{let i=p(`g`,r),a=p(`polygon`,i);n(i,a),b(()=>{f(a,`points`,String(t.get()))});let o=p(`circle`,i);n(i,o),f(o,`cx`,`100`),f(o,`cy`,`100`),f(o,`r`,`80`);let c=s(`rue:list:start`),l=s(`rue:list:end`);n(i,c),n(i,l);let u=new Map;return b(()=>{u=S({items:e.stats||[],getKey:(e,t)=>e.label+t,elements:u,parent:c.parentNode,before:l,start:c,renderItem:(t,n,r,i,a)=>{g(_(E,{key:t.label+a,stat:t,index:a,total:e.stats.length}),n,r,i)}})}),i})},O=()=>{let{newLabel:r,stats:g,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>c(()=>{let e=x(`ref:1:2`,()=>t(``)),n=x(`reactive:1:3`,()=>u([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:n,activeTab:x(`ref:1:4`,()=>t(`preview`)),add:t=>{t.preventDefault(),e.value.trim()&&(n.push({label:e.value,value:100}),e.value=``)},remove:e=>{n.length>3?n.splice(n.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return d(t=>{let c=v(),u=s(`rue:component:anchor`);return n(c,u),m(_(w,{children:d(()=>{let t=v(),c=p(`style`,t);n(t,c),b(()=>{y(c,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let u=p(`h1`,t);n(t,u),o(u,`text-5xl font-semibold mb-4 md:mb-4`),n(u,h(`SVG 图像（移植自 Vue）`));let x=p(`div`,t);n(t,x),f(x,`role`,`tablist`),o(x,`tabs tabs-box`);let w=p(`button`,x);n(x,w),f(w,`role`,`tab`),b(()=>{o(w,`tab ${T.value===`preview`?`tab-active`:``}`)}),i(w,`click`,()=>{T.value=`preview`}),n(w,h(`效果`));let A=p(`button`,x);n(x,A),f(A,`role`,`tab`),b(()=>{o(A,`tab ${T.value===`code`?`tab-active`:``}`)}),i(A,`click`,()=>{T.value=`code`}),n(A,h(`代码`));let j=p(`div`,t);n(t,j),o(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=s(`rue:slot:anchor`);n(j,M),b(()=>{let t=T.value===`code`?d(()=>{let t=v(),r=p(`div`,t);n(t,r),o(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let i=s(`rue:component:anchor`);return n(r,i),b(()=>{let t=_(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});e(()=>m(t,r,i))}),t}):``;e(()=>m(t,j,M))}),n(j,h(` `));let N=s(`rue:slot:anchor`);return n(j,N),b(()=>{let t=T.value===`preview`?d(()=>{let t=v(),c=p(`div`,t);n(t,c),o(c,`card bg-base-100 shadow`);let u=p(`div`,c);n(c,u),o(u,`card-body grid gap-4 rue-svg-graph`);let x=p(`svg`,u);n(u,x),f(x,`width`,`200`),f(x,`height`,`200`);let C=s(`rue:component:anchor`);n(x,C),b(()=>{let t=_(D,{stats:g});e(()=>m(t,x,C))});let w=p(`div`,u);n(u,w),o(w,`grid gap-3`);let T=s(`rue:list:start`),A=s(`rue:list:end`);n(w,T),n(w,A);let j=new Map;b(()=>{j=S({items:g||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,r,c,u,g)=>{m(d(()=>{let r=v(),c=p(`div`,r);n(r,c),b(()=>{f(c,`key`,String(t.label))}),o(c,`flex items-center gap-3`);let u=p(`label`,c);n(c,u);let d=s(`rue:slot:anchor`);n(u,d),b(()=>{let n=t.label;e(()=>m(n,u,d))});let g=p(`input`,c);n(c,g),f(g,`type`,`range`),o(g,`range range-primary flex-1`),b(()=>{a(g,t.value)}),f(g,`min`,`0`),f(g,`max`,`100`),i(g,`input`,e=>k(t,e));let _=p(`span`,c);n(c,_),o(_,`w-10 text-right`);let x=l(_);n(_,x),b(()=>{y(x,t.value)});let S=p(`button`,c);return n(c,S),o(S,`btn btn-error btn-sm`),i(S,`click`,()=>O(t)),n(S,h(`X`)),r}),r,c)}})});let M=p(`form`,u);n(u,M),o(M,`flex items-center gap-2`),i(M,`submit`,E);let N=p(`input`,M);n(M,N),f(N,`name`,`newlabel`),o(N,`input input-bordered`),b(()=>{a(N,r.value)}),i(N,`input`,e=>{r.value=e.target.value});let P=p(`button`,M);n(M,P),o(P,`btn btn-success`),i(P,`click`,E),n(P,h(`Add a Stat`));let F=p(`pre`,u);n(u,F),o(F,`raw`);let I=l(F);return n(F,I),b(()=>{y(I,JSON.stringify(g,null,2))}),t}):``;e(()=>m(t,j,N))}),t})}),c,u),c})};export{O as default};
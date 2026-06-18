import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,c as l,et as u,ft as d,gt as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y,wt as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x,n as S}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as C}from"./Code-CZqShVUj.js";import{r as w}from"./SidebarPlaygroundExample-5H7RL-T7.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=e=>{let{point:r}=x(`useSetup:0:0`,()=>g(()=>({point:x(`computed:1:0`,()=>f(()=>T(+e.stat.value+10,e.index,e.total)))})));return p(s=>{let l=i(`text`,s);o(()=>{c(l,`x`,String(r.get().x))}),o(()=>{c(l,`y`,String(r.get().y))});let u=a(`rue:slot:anchor`);return n(l,u),o(()=>{let n=e.stat.label;t(()=>_(n,l,u))}),l})},D=e=>{let{points:t}=x(`useSetup:0:0:dup1`,()=>g(()=>({points:x(`computed:1:1`,()=>f(()=>{let t=e.stats.length;return e.stats.map((e,n)=>{let{x:r,y:i}=T(e.value,n,t);return`${r},${i}`}).join(` `)}))})));return p(r=>{let s=i(`g`,r),u=i(`polygon`,s);n(s,u),o(()=>{c(u,`points`,String(t.get()))});let d=i(`circle`,s);n(s,d),c(d,`cx`,`100`),c(d,`cy`,`100`),c(d,`r`,`80`);let f=a(`rue:list:start`),p=a(`rue:list:end`);n(s,f),n(s,p);let m=new Map;return o(()=>{m=S({items:e.stats||[],getKey:(e,t)=>e.label+t,elements:m,parent:f.parentNode,before:p,start:f,renderItem:(t,n,r,i,a)=>{l(y(E,{key:t.label+a,stat:t,index:a,total:e.stats.length}),n,r,i)}})}),s})},O=()=>{let{newLabel:l,stats:f,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>g(()=>{let e=x(`ref:1:2`,()=>r(``)),t=x(`reactive:1:3`,()=>b([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>r(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return p(r=>{let g=s(),b=a(`rue:component:anchor`);return n(g,b),_(y(w,{children:p(()=>{let r=s(),g=i(`style`,r);n(r,g),o(()=>{m(g,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let b=i(`h1`,r);n(r,b),v(b,`text-5xl font-semibold mb-4 md:mb-4`),n(b,e(`SVG 图像（移植自 Vue）`));let x=i(`div`,r);n(r,x),c(x,`role`,`tablist`),v(x,`tabs tabs-box`);let w=i(`button`,x);n(x,w),c(w,`role`,`tab`),o(()=>{v(w,`tab ${T.value===`preview`?`tab-active`:``}`)}),h(w,`click`,()=>{T.value=`preview`}),n(w,e(`效果`));let A=i(`button`,x);n(x,A),c(A,`role`,`tab`),o(()=>{v(A,`tab ${T.value===`code`?`tab-active`:``}`)}),h(A,`click`,()=>{T.value=`code`}),n(A,e(`代码`));let j=i(`div`,r);n(r,j),v(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=a(`rue:slot:anchor`);n(j,M),o(()=>{let e=T.value===`code`?p(()=>{let e=s(),r=i(`div`,e);n(e,r),v(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let c=a(`rue:component:anchor`);return n(r,c),o(()=>{let e=y(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});t(()=>_(e,r,c))}),e}):``;t(()=>_(e,j,M))}),n(j,e(` `));let N=a(`rue:slot:anchor`);return n(j,N),o(()=>{let r=T.value===`preview`?p(()=>{let r=s(),g=i(`div`,r);n(r,g),v(g,`card bg-base-100 shadow`);let b=i(`div`,g);n(g,b),v(b,`card-body grid gap-4 rue-svg-graph`);let x=i(`svg`,b);n(b,x),c(x,`width`,`200`),c(x,`height`,`200`);let C=a(`rue:component:anchor`);n(x,C),o(()=>{let e=y(D,{stats:f});t(()=>_(e,x,C))});let w=i(`div`,b);n(b,w),v(w,`grid gap-3`);let T=a(`rue:list:start`),A=a(`rue:list:end`);n(w,T),n(w,A);let j=new Map;o(()=>{j=S({items:f||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(r,l,f,g,y)=>{_(p(()=>{let l=s(),f=i(`div`,l);n(l,f),o(()=>{c(f,`key`,String(r.label))}),v(f,`flex items-center gap-3`);let p=i(`label`,f);n(f,p);let g=a(`rue:slot:anchor`);n(p,g),o(()=>{let e=r.label;t(()=>_(e,p,g))});let y=i(`input`,f);n(f,y),c(y,`type`,`range`),v(y,`range range-primary flex-1`),o(()=>{d(y,r.value)}),c(y,`min`,`0`),c(y,`max`,`100`),h(y,`input`,e=>k(r,e));let b=i(`span`,f);n(f,b),v(b,`w-10 text-right`);let x=u(b);n(b,x),o(()=>{m(x,r.value)});let S=i(`button`,f);return n(f,S),v(S,`btn btn-error btn-sm`),h(S,`click`,()=>O(r)),n(S,e(`X`)),l}),l,f)}})});let M=i(`form`,b);n(b,M),v(M,`flex items-center gap-2`),h(M,`submit`,E);let N=i(`input`,M);n(M,N),c(N,`name`,`newlabel`),v(N,`input input-bordered`),o(()=>{d(N,l.value)}),h(N,`input`,e=>{l.value=e.target.value});let P=i(`button`,M);n(M,P),v(P,`btn btn-success`),h(P,`click`,E),n(P,e(`Add a Stat`));let F=i(`pre`,b);n(b,F),v(F,`raw`);let I=u(F);return n(F,I),o(()=>{m(I,JSON.stringify(f,null,2))}),r}):``;t(()=>_(r,j,N))}),r})}),g,b),g})};export{O as default};
import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,X as a,Xt as o,Z as s,ct as c,et as l,gt as u,ht as d,l as f,nt as p,o as m,rt as h,s as g,t as _,tt as v,ut as y,yt as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x,n as S}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as C}from"./Code-D5UqTwV6.js";import{r as w}from"./SidebarPlaygroundExample-D2vGHFCu.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=n=>{let{point:r}=x(`useSetup:0:0`,()=>o(()=>({point:x(`computed:1:0`,()=>b(()=>T(+n.stat.value+10,n.index,n.total)))})));return f(a=>{let o=v(`text`,a);t(()=>{c(o,`x`,String(r.get().x))}),t(()=>{c(o,`y`,String(r.get().y))});let l=e(`rue:slot:anchor`);return s(o,l),t(()=>{let e=n.stat.label;i(()=>m(e,o,l))}),o})},D=n=>{let{points:r}=x(`useSetup:0:0:dup1`,()=>o(()=>({points:x(`computed:1:1`,()=>b(()=>{let e=n.stats.length;return n.stats.map((t,n)=>{let{x:r,y:i}=T(t.value,n,e);return`${r},${i}`}).join(` `)}))})));return f(i=>{let a=v(`g`,i),o=v(`polygon`,a);s(a,o),t(()=>{c(o,`points`,String(r.get()))});let l=v(`circle`,a);s(a,l),c(l,`cx`,`100`),c(l,`cy`,`100`),c(l,`r`,`80`);let u=e(`rue:list:start`),d=e(`rue:list:end`);s(a,u),s(a,d);let f=new Map;return t(()=>{f=S({items:n.stats||[],getKey:(e,t)=>e.label+t,elements:f,parent:u.parentNode,before:d,start:u,renderItem:(e,t,r,i,a)=>{g(_(E,{key:e.label+a,stat:e,index:a,total:n.stats.length}),t,r,i)}})}),a})},O=()=>{let{newLabel:g,stats:b,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>o(()=>{let e=x(`ref:1:2`,()=>n(``)),t=x(`reactive:1:3`,()=>r([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>n(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return f(n=>{let r=l(),o=e(`rue:component:anchor`);return s(r,o),m(_(w,{children:f(()=>{let n=l(),r=v(`style`,n);s(n,r),t(()=>{u(r,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let o=v(`h1`,n);s(n,o),y(o,`text-5xl font-semibold mb-4 md:mb-4`),s(o,p(`SVG 图像（移植自 Vue）`));let x=v(`div`,n);s(n,x),c(x,`role`,`tablist`),y(x,`tabs tabs-box`);let w=v(`button`,x);s(x,w),c(w,`role`,`tab`),t(()=>{y(w,`tab ${T.value===`preview`?`tab-active`:``}`)}),a(w,`click`,()=>{T.value=`preview`}),s(w,p(`效果`));let A=v(`button`,x);s(x,A),c(A,`role`,`tab`),t(()=>{y(A,`tab ${T.value===`code`?`tab-active`:``}`)}),a(A,`click`,()=>{T.value=`code`}),s(A,p(`代码`));let j=v(`div`,n);s(n,j),y(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=e(`rue:slot:anchor`);s(j,M),t(()=>{let n=T.value===`code`?f(()=>{let n=l(),r=v(`div`,n);s(n,r),y(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let a=e(`rue:component:anchor`);return s(r,a),t(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});i(()=>m(e,r,a))}),n}):``;i(()=>m(n,j,M))}),s(j,p(` `));let N=e(`rue:slot:anchor`);return s(j,N),t(()=>{let n=T.value===`preview`?f(()=>{let n=l(),r=v(`div`,n);s(n,r),y(r,`card bg-base-100 shadow`);let o=v(`div`,r);s(r,o),y(o,`card-body grid gap-4 rue-svg-graph`);let x=v(`svg`,o);s(o,x),c(x,`width`,`200`),c(x,`height`,`200`);let C=e(`rue:component:anchor`);s(x,C),t(()=>{let e=_(D,{stats:b});i(()=>m(e,x,C))});let w=v(`div`,o);s(o,w),y(w,`grid gap-3`);let T=e(`rue:list:start`),A=e(`rue:list:end`);s(w,T),s(w,A);let j=new Map;t(()=>{j=S({items:b||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(n,r,o,g,_)=>{m(f(()=>{let r=l(),o=v(`div`,r);s(r,o),t(()=>{c(o,`key`,String(n.label))}),y(o,`flex items-center gap-3`);let f=v(`label`,o);s(o,f);let g=e(`rue:slot:anchor`);s(f,g),t(()=>{let e=n.label;i(()=>m(e,f,g))});let _=v(`input`,o);s(o,_),c(_,`type`,`range`),y(_,`range range-primary flex-1`),t(()=>{d(_,n.value)}),c(_,`min`,`0`),c(_,`max`,`100`),a(_,`input`,e=>k(n,e));let b=v(`span`,o);s(o,b),y(b,`w-10 text-right`);let x=h(b);s(b,x),t(()=>{u(x,n.value)});let S=v(`button`,o);return s(o,S),y(S,`btn btn-error btn-sm`),a(S,`click`,()=>O(n)),s(S,p(`X`)),r}),r,o)}})});let M=v(`form`,o);s(o,M),y(M,`flex items-center gap-2`),a(M,`submit`,E);let N=v(`input`,M);s(M,N),c(N,`name`,`newlabel`),y(N,`input input-bordered`),t(()=>{d(N,g.value)}),a(N,`input`,e=>{g.value=e.target.value});let P=v(`button`,M);s(M,P),y(P,`btn btn-success`),a(P,`click`,E),s(P,p(`Add a Stat`));let F=v(`pre`,o);s(o,F),y(F,`raw`);let I=h(F);return s(F,I),t(()=>{u(I,JSON.stringify(b,null,2))}),n}):``;i(()=>m(n,j,N))}),n})}),r,o),r})};export{O as default};
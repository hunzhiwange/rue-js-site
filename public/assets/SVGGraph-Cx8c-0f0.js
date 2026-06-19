import{$ as e,Et as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,s as h,st as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x,n as S}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as C}from"./Code-BIscIyEp.js";import{r as w}from"./SidebarPlaygroundExample-CEz1fABX.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=e=>{let{point:t}=x(`useSetup:0:0`,()=>s(()=>({point:x(`computed:1:0`,()=>y(()=>T(+e.stat.value+10,e.index,e.total)))})));return u(o=>{let s=c(`text`,o);r(()=>{g(s,`x`,String(t.get().x))}),r(()=>{g(s,`y`,String(t.get().y))});let l=n(`rue:slot:anchor`);return a(s,l),r(()=>{let t=e.stat.label;i(()=>m(t,s,l))}),s})},D=e=>{let{points:t}=x(`useSetup:0:0:dup1`,()=>s(()=>({points:x(`computed:1:1`,()=>y(()=>{let t=e.stats.length;return e.stats.map((e,n)=>{let{x:r,y:i}=T(e.value,n,t);return`${r},${i}`}).join(` `)}))})));return u(i=>{let o=c(`g`,i),s=c(`polygon`,o);a(o,s),r(()=>{g(s,`points`,String(t.get()))});let l=c(`circle`,o);a(o,l),g(l,`cx`,`100`),g(l,`cy`,`100`),g(l,`r`,`80`);let u=n(`rue:list:start`),d=n(`rue:list:end`);a(o,u),a(o,d);let f=new Map;return r(()=>{f=S({items:e.stats||[],getKey:(e,t)=>e.label+t,elements:f,parent:u.parentNode,before:d,start:u,renderItem:(t,n,r,i,a)=>{h(_(E,{key:t.label+a,stat:t,index:a,total:e.stats.length}),n,r,i)}})}),o})},O=()=>{let{newLabel:h,stats:y,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>s(()=>{let e=x(`ref:1:2`,()=>b(``)),n=x(`reactive:1:3`,()=>t([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:n,activeTab:x(`ref:1:4`,()=>b(`preview`)),add:t=>{t.preventDefault(),e.value.trim()&&(n.push({label:e.value,value:100}),e.value=``)},remove:e=>{n.length>3?n.splice(n.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return u(t=>{let s=e(),b=n(`rue:component:anchor`);return a(s,b),m(_(w,{children:u(()=>{let t=e(),s=c(`style`,t);a(t,s),r(()=>{l(s,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let b=c(`h1`,t);a(t,b),d(b,`text-5xl font-semibold mb-4 md:mb-4`),a(b,v(`SVG 图像（移植自 Vue）`));let x=c(`div`,t);a(t,x),g(x,`role`,`tablist`),d(x,`tabs tabs-box`);let w=c(`button`,x);a(x,w),g(w,`role`,`tab`),r(()=>{d(w,`tab ${T.value===`preview`?`tab-active`:``}`)}),o(w,`click`,()=>{T.value=`preview`}),a(w,v(`效果`));let A=c(`button`,x);a(x,A),g(A,`role`,`tab`),r(()=>{d(A,`tab ${T.value===`code`?`tab-active`:``}`)}),o(A,`click`,()=>{T.value=`code`}),a(A,v(`代码`));let j=c(`div`,t);a(t,j),d(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=n(`rue:slot:anchor`);a(j,M),r(()=>{let t=T.value===`code`?u(()=>{let t=e(),o=c(`div`,t);a(t,o),d(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=n(`rue:component:anchor`);return a(o,s),r(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});i(()=>m(e,o,s))}),t}):``;i(()=>m(t,j,M))}),a(j,v(` `));let N=n(`rue:slot:anchor`);return a(j,N),r(()=>{let t=T.value===`preview`?u(()=>{let t=e(),s=c(`div`,t);a(t,s),d(s,`card bg-base-100 shadow`);let b=c(`div`,s);a(s,b),d(b,`card-body grid gap-4 rue-svg-graph`);let x=c(`svg`,b);a(b,x),g(x,`width`,`200`),g(x,`height`,`200`);let C=n(`rue:component:anchor`);a(x,C),r(()=>{let e=_(D,{stats:y});i(()=>m(e,x,C))});let w=c(`div`,b);a(b,w),d(w,`grid gap-3`);let T=n(`rue:list:start`),A=n(`rue:list:end`);a(w,T),a(w,A);let j=new Map;r(()=>{j=S({items:y||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,s,h,_,y)=>{m(u(()=>{let s=e(),u=c(`div`,s);a(s,u),r(()=>{g(u,`key`,String(t.label))}),d(u,`flex items-center gap-3`);let h=c(`label`,u);a(u,h);let _=n(`rue:slot:anchor`);a(h,_),r(()=>{let e=t.label;i(()=>m(e,h,_))});let y=c(`input`,u);a(u,y),g(y,`type`,`range`),d(y,`range range-primary flex-1`),r(()=>{f(y,t.value)}),g(y,`min`,`0`),g(y,`max`,`100`),o(y,`input`,e=>k(t,e));let b=c(`span`,u);a(u,b),d(b,`w-10 text-right`);let x=p(b);a(b,x),r(()=>{l(x,t.value)});let S=c(`button`,u);return a(u,S),d(S,`btn btn-error btn-sm`),o(S,`click`,()=>O(t)),a(S,v(`X`)),s}),s,h)}})});let M=c(`form`,b);a(b,M),d(M,`flex items-center gap-2`),o(M,`submit`,E);let N=c(`input`,M);a(M,N),g(N,`name`,`newlabel`),d(N,`input input-bordered`),r(()=>{f(N,h.value)}),o(N,`input`,e=>{h.value=e.target.value});let P=c(`button`,M);a(M,P),d(P,`btn btn-success`),o(P,`click`,E),a(P,v(`Add a Stat`));let F=c(`pre`,b);a(b,F),d(F,`raw`);let I=p(F);return a(F,I),r(()=>{l(I,JSON.stringify(y,null,2))}),t}):``;i(()=>m(t,j,N))}),t})}),s,b),s})};export{O as default};
import{$ as e,Ht as t,J as n,Q as r,Rt as i,Tt as a,Xt as o,Y as s,Z as c,_t as l,c as u,ct as d,et as f,l as p,mt as m,ot as h,pt as g,qt as _,s as v,t as y,tt as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x,n as S}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as C}from"./Code-5DOEyGxf.js";import{r as w}from"./SidebarPlaygroundExample-cASgDpH3.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=n=>{let{point:r}=x(`useSetup:0:0`,()=>_(()=>({point:x(`computed:1:0`,()=>l(()=>T(+n.stat.value+10,n.index,n.total)))})));return p(i=>{let a=e(`text`,i);o(()=>{h(a,`x`,String(r.get().x))}),o(()=>{h(a,`y`,String(r.get().y))});let l=c(`rue:slot:anchor`);return s(a,l),o(()=>{let e=n.stat.label;t(()=>v(e,a,l))}),a})},D=t=>{let{points:n}=x(`useSetup:0:0:dup1`,()=>_(()=>({points:x(`computed:1:1`,()=>l(()=>{let e=t.stats.length;return t.stats.map((t,n)=>{let{x:r,y:i}=T(t.value,n,e);return`${r},${i}`}).join(` `)}))})));return p(r=>{let i=e(`g`,r),a=e(`polygon`,i);s(i,a),o(()=>{h(a,`points`,String(n.get()))});let l=e(`circle`,i);s(i,l),h(l,`cx`,`100`),h(l,`cy`,`100`),h(l,`r`,`80`);let d=c(`rue:list:start`),f=c(`rue:list:end`);s(i,d),s(i,f);let p=new Map;return o(()=>{p=S({items:t.stats||[],getKey:(e,t)=>e.label+t,elements:p,parent:d.parentNode,before:f,start:d,renderItem:(e,n,r,i,a)=>{u(y(E,{key:e.label+a,stat:e,index:a,total:t.stats.length}),n,r,i)}})}),i})},O=()=>{let{newLabel:l,stats:u,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>_(()=>{let e=x(`ref:1:2`,()=>i(``)),t=x(`reactive:1:3`,()=>a([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>i(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return p(i=>{let a=r(),_=c(`rue:component:anchor`);return s(a,_),v(y(w,{children:p(()=>{let i=r(),a=e(`style`,i);s(i,a),o(()=>{m(a,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let _=e(`h1`,i);s(i,_),d(_,`text-5xl font-semibold mb-4 md:mb-4`),s(_,f(`SVG 图像（移植自 Vue）`));let x=e(`div`,i);s(i,x),h(x,`role`,`tablist`),d(x,`tabs tabs-box`);let w=e(`button`,x);s(x,w),h(w,`role`,`tab`),o(()=>{d(w,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),n(w,`click`,()=>{T.value=`preview`}),s(w,f(`效果`));let A=e(`button`,x);s(x,A),h(A,`role`,`tab`),o(()=>{d(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),n(A,`click`,()=>{T.value=`code`}),s(A,f(`代码`));let j=e(`div`,i);s(i,j),d(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=c(`rue:slot:anchor`);s(j,M),o(()=>{let n=T.value===`code`?p(()=>{let n=r(),i=e(`div`,n);s(n,i),d(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let a=c(`rue:component:anchor`);return s(i,a),o(()=>{let e=y(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});t(()=>v(e,i,a))}),n}):``;t(()=>v(n,j,M))}),s(j,f(` `));let N=c(`rue:slot:anchor`);return s(j,N),o(()=>{let i=T.value===`preview`?p(()=>{let i=r(),a=e(`div`,i);s(i,a),d(a,`card bg-base-100 shadow`);let _=e(`div`,a);s(a,_),d(_,`card-body grid gap-4 rue-svg-graph`);let x=e(`svg`,_);s(_,x),h(x,`width`,`200`),h(x,`height`,`200`);let C=c(`rue:component:anchor`);s(x,C),o(()=>{let e=y(D,{stats:u});t(()=>v(e,x,C))});let w=e(`div`,_);s(_,w),d(w,`grid gap-3`);let T=c(`rue:list:start`),A=c(`rue:list:end`);s(w,T),s(w,A);let j=new Map;o(()=>{j=S({items:u||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(i,a,l,u,_)=>{v(p(()=>{let a=r(),l=e(`div`,a);s(a,l),o(()=>{h(l,`key`,String(i.label))}),d(l,`flex items-center gap-3`);let u=e(`label`,l);s(l,u);let p=c(`rue:slot:anchor`);s(u,p),o(()=>{let e=i.label;t(()=>v(e,u,p))});let _=e(`input`,l);s(l,_),h(_,`type`,`range`),d(_,`range range-primary flex-1`),o(()=>{g(_,i.value)}),h(_,`min`,`0`),h(_,`max`,`100`),n(_,`input`,e=>k(i,e));let y=e(`span`,l);s(l,y),d(y,`w-10 text-right`);let x=b(y);s(y,x),o(()=>{m(x,i.value)});let S=e(`button`,l);return s(l,S),d(S,`btn btn-error btn-sm`),n(S,`click`,()=>O(i)),s(S,f(`X`)),a}),a,l)}})});let M=e(`form`,_);s(_,M),d(M,`flex items-center gap-2`),n(M,`submit`,E);let N=e(`input`,M);s(M,N),h(N,`name`,`newlabel`),d(N,`input input-bordered`),o(()=>{g(N,l.value)}),n(N,`input`,e=>{l.value=e.target.value});let P=e(`button`,M);s(M,P),d(P,`btn btn-success`),n(P,`click`,E),s(P,f(`Add a Stat`));let F=e(`pre`,_);s(_,F),d(F,`raw`);let I=b(F);return s(F,I),o(()=>{m(I,JSON.stringify(u,null,2))}),i}):``;t(()=>v(i,j,N))}),i})}),a,_),a})};export{O as default};
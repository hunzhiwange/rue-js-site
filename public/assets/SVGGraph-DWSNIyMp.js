import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,c as u,ht as d,it as f,l as p,lt as m,mt as h,s as g,t as _,wt as v,yt as y,z as b}from"./vapor-runtime-C1rlwc61.js";import{a as x,n as S}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as C}from"./Code-BCLFq1E3.js";import{t as w}from"./SidebarPlaygroundExample-CdMvdgT7.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=e=>{let{point:r}=x(`useSetup:0:0`,()=>v(()=>({point:x(`computed:1:0`,()=>m(()=>T(+e.stat.value+10,e.index,e.total)))})));return p(a=>{let o=s(`text`,a);n(()=>{c(o,`x`,String(r.get().x))}),n(()=>{c(o,`y`,String(r.get().y))});let l=i(`rue:slot:anchor`);return t(o,l),n(()=>{let t=e.stat.label;y(()=>g(t,o,l))}),o})},D=e=>{let{points:r}=x(`useSetup:0:0:dup1`,()=>v(()=>({points:x(`computed:1:1`,()=>m(()=>{let t=e.stats.length;return e.stats.map((e,n)=>{let{x:r,y:i}=T(e.value,n,t);return`${r},${i}`}).join(` `)}))})));return p(a=>{let o=s(`g`,a),l=s(`polygon`,o);t(o,l),n(()=>{c(l,`points`,String(r.get()))});let d=s(`circle`,o);t(o,d),c(d,`cx`,`100`),c(d,`cy`,`100`),c(d,`r`,`80`);let f=i(`rue:list:start`),p=i(`rue:list:end`);t(o,f),t(o,p);let m=new Map;return n(()=>{m=S({items:e.stats||[],getKey:(e,t)=>e.label+t,elements:m,parent:f.parentNode,before:p,start:f,renderItem:(t,n,r,i,a)=>{u(_(E,{key:t.label+a,stat:t,index:a,total:e.stats.length}),n,r,i)}})}),o})},O=()=>{let{newLabel:u,stats:m,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>v(()=>{let e=x(`ref:1:2`,()=>d(``)),t=x(`reactive:1:3`,()=>h([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>d(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return p(d=>{let h=o(),v=i(`rue:component:anchor`);return t(h,v),g(_(w,{children:p(()=>{let d=o(),h=s(`style`,d);t(d,h),n(()=>{l(h,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let v=s(`h1`,d);t(d,v),e(v,`text-5xl font-semibold mb-4 md:mb-4`),t(v,r(`SVG 图像（移植自 Vue）`));let x=s(`div`,d);t(d,x),c(x,`role`,`tablist`),e(x,`tabs tabs-box`);let w=s(`button`,x);t(x,w),c(w,`role`,`tab`),n(()=>{e(w,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),b(w,`click`,()=>{T.value=`preview`}),t(w,r(`效果`));let A=s(`button`,x);t(x,A),c(A,`role`,`tab`),n(()=>{e(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),b(A,`click`,()=>{T.value=`code`}),t(A,r(`代码`));let j=s(`div`,d);t(d,j),e(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=i(`rue:slot:anchor`);t(j,M),n(()=>{let r=T.value===`code`?p(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let c=i(`rue:component:anchor`);return t(a,c),n(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});y(()=>g(e,a,c))}),r}):``;y(()=>g(r,j,M))}),t(j,r(` `));let N=i(`rue:slot:anchor`);return t(j,N),n(()=>{let d=T.value===`preview`?p(()=>{let d=o(),h=s(`div`,d);t(d,h),e(h,`card bg-base-100 shadow`);let v=s(`div`,h);t(h,v),e(v,`card-body grid gap-4 rue-svg-graph`);let x=s(`svg`,v);t(v,x),c(x,`width`,`200`),c(x,`height`,`200`);let C=i(`rue:component:anchor`);t(x,C),n(()=>{let e=_(D,{stats:m});y(()=>g(e,x,C))});let w=s(`div`,v);t(v,w),e(w,`grid gap-3`);let T=i(`rue:list:start`),A=i(`rue:list:end`);t(w,T),t(w,A);let j=new Map;n(()=>{j=S({items:m||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(u,d,m,h,_)=>{g(p(()=>{let d=o(),p=s(`div`,d);t(d,p),n(()=>{c(p,`key`,String(u.label))}),e(p,`flex items-center gap-3`);let m=s(`label`,p);t(p,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=u.label;y(()=>g(e,m,h))});let _=s(`input`,p);t(p,_),c(_,`type`,`range`),e(_,`range range-primary flex-1`),n(()=>{f(_,u.value)}),c(_,`min`,`0`),c(_,`max`,`100`),b(_,`input`,e=>k(u,e));let v=s(`span`,p);t(p,v),e(v,`w-10 text-right`);let x=a(v);t(v,x),n(()=>{l(x,u.value)});let S=s(`button`,p);return t(p,S),e(S,`btn btn-error btn-sm`),b(S,`click`,()=>O(u)),t(S,r(`X`)),d}),d,m)}})});let M=s(`form`,v);t(v,M),e(M,`flex items-center gap-2`),b(M,`submit`,E);let N=s(`input`,M);t(M,N),c(N,`name`,`newlabel`),e(N,`input input-bordered`),n(()=>{f(N,u.value)}),b(N,`input`,e=>{u.value=e.target.value});let P=s(`button`,M);t(M,P),e(P,`btn btn-success`),b(P,`click`,E),t(P,r(`Add a Stat`));let F=s(`pre`,v);t(v,F),e(F,`raw`);let I=a(F);return t(F,I),n(()=>{l(I,JSON.stringify(m,null,2))}),d}):``;y(()=>g(d,j,N))}),d})}),h,v),h})};export{O as default};
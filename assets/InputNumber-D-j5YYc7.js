import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,gt as f,lt as p,pt as m,t as h,u as g,x as _,yt as v}from"./vapor-runtime-D3a-68js.js";import{a as y,n as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as x,t as S}from"./src-BfQKH6_d.js";import{n as C}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as w}from"./badge-60HGICjs.js";import{t as T}from"./fieldset-gE9vdPU4.js";import{t as E}from"./input-D_T0Xhpz.js";import{t as D}from"./PreviewBlock-DZ28sFI7.js";var O=e=>{let t=Number(e);return Number.isFinite(t)?t:void 0},k=e=>Object.is(e,-0)?0:e,A=(e,t)=>{if(typeof t!=`number`||t<0)return k(e);let n=10**t;return k(Math.round(e*n)/n)},j=e=>{if(e==null)return 0;let t=String(e).toLowerCase();if(t.includes(`e-`)){let[e,n]=t.split(`e-`),r=Number(n);return(e.includes(`.`)?e.length-e.indexOf(`.`)-1:0)+r}return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0},ee=(e,t)=>{let n=O(e)??-(2**53-1),r=O(t)??2**53-1;return r<n?{min:r,max:n}:{min:n,max:r}},te=e=>{let t=O(e)??1;return t>0?t:1},M=(e,t,n)=>e<t?t:e>n?n:e,N=(e,t)=>t&&t!==`.`?e.replace(`.`,t):e,P=(e,t)=>{let n=t===`,`?`,`:`.`,r=e.trim();if(!r)return``;let i=``,a=r;a.startsWith(`-`)&&(i=`-`,a=a.slice(1)),a=a.replace(/-/g,``),a=n===`,`?a.replace(/\./g,``):a.replace(/,/g,``),a=a.replace(n===`,`?/[^0-9,]/g:/[^0-9.]/g,``);let o=a.split(n),s=o.shift()??``,c=o.join(``),l=a.includes(n);return`${i}${s}${l?`.${c}`:``}`},F=e=>e===`-`||e===`.`||e===`-.`,I=(e,t,n)=>{if(e==null||e===``)return null;if(typeof e==`number`)return Number.isFinite(e)?t?String(k(e)):k(e):null;let r=P(String(e),n);if(!r||F(r))return null;let i=O(r);return i===void 0?null:t?r:k(i)},ne=(e,t,n,r)=>{let i=A(e,n);return t?typeof n==`number`&&n>=0?i.toFixed(n):r&&!F(r)&&O(r)!==void 0?r:String(i):i},re=(e,t,n)=>{if(e==null)return``;let r;if(typeof e==`string`)if(typeof t==`number`&&t>=0){let n=O(e);r=n===void 0?e:A(n,t).toFixed(t)}else r=e;else{let n=A(e,t);r=typeof t==`number`&&t>=0?n.toFixed(t):String(n)}return N(r,n)},ie=(e,t,n)=>{let r=t?t(e):e;if(r==null||r===``)return{display:``,normalized:``,empty:!0,transient:!1};if(typeof r==`number`){if(!Number.isFinite(r))return{display:``,normalized:``,empty:!0,transient:!1};let e=String(k(r));return{display:N(e,n),normalized:e,numeric:k(r),empty:!1,transient:!1}}let i=P(String(r),n);if(!i)return{display:``,normalized:``,empty:!0,transient:!1};if(F(i))return{display:N(i,n),normalized:i,empty:!1,transient:!0};let a=O(i);return{display:N(i,n),normalized:i,numeric:a===void 0?void 0:k(a),empty:!1,transient:!1}},ae=(e,t,n,r)=>{if(typeof e!=`function`)return n;let i=e(t,{userTyping:r,input:n});return i==null?n:String(i)},oe=(e,t,n,r)=>{let i=10**Math.max(j(e),j(n),r??0);return A((Math.round(e*i)+Math.round(n*i)*t)/i,r)},se=(e,t,n)=>{let r=e==null?void 0:O(e);return r===void 0?t>0?t:n<0?n:0:r},ce=()=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 14 5-5 5 5`})}),le=()=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 10 5 5 5-5`})}),L=({value:e,defaultValue:t,min:n,max:r,step:i=1,precision:a,stringMode:o=!1,keyboard:s=!0,changeOnWheel:c,changeOnBlur:l=!0,controls:u=!0,decimalSeparator:d,formatter:m,parser:h,readOnly:g,disabled:y,suffix:b,onChange:C,onStep:w,onInput:T,onKeyDown:D,onPressEnter:k,onBlur:N,onFocus:P,onWheel:F,...L})=>{let R=f(),z=L.ref,B=p(``),V=p(!1),H=e!==void 0,U=ee(n,r),W=te(i),ue=p(I(e,o,d)),de=p(I(H?e:t,o,d)),G=p(``),K=p(void 0),q=p(void 0),fe=p(!1);`ref`in L&&delete L.ref;let pe=e=>{if(R.current=e??void 0,typeof z==`function`){z(e);return}z&&typeof z==`object`&&(z.current=e??void 0)},J=()=>H?ue.value:de.value,me=()=>{let e=J();if(V.value){let t=ie(B.value,h,d);return ae(m,t.numeric===void 0?e:ne(t.numeric,o,void 0,t.normalized),B.value,!0)}return ae(m,e,re(e,a,d),!1)},Y=()=>{let e=J(),t=e==null?void 0:O(e),n=me();G.value=n,K.value=t==null?void 0:String(t),q.value=n||void 0},X=(e=!1)=>{let t=R.current;if(!t)return;let n=t.value!==G.value;n&&(t.value=G.value),K.value===void 0?t.removeAttribute(`aria-valuenow`):t.setAttribute(`aria-valuenow`,K.value),q.value===void 0?t.removeAttribute(`aria-valuetext`):t.setAttribute(`aria-valuetext`,q.value),e&&n&&(fe.value=!0,t.dispatchEvent(new Event(`input`,{bubbles:!0})))},Z=e=>{H||(de.value=e)},Q=e=>{C&&C(e)},he=(e,t)=>{if(e.empty)return Z(null),Q(null),Y(),X(!0),null;if(e.numeric===void 0)return Y(),X(!0),J();let n=e.numeric;n=A(n,a),t&&(n=M(n,U.min,U.max),n=A(n,a));let r=ne(n,o,a,e.normalized),i=J();return Z(r),r!==i&&Q(r),Y(),X(!0),r},$=(e,t)=>{if(y||g)return;let n=ie(R.current?.value??B.value,h,d),r=J(),i=ne(M(oe(n.numeric??se(r,U.min,U.max),e===`up`?1:-1,W,a),U.min,U.max),o,a);V.value=!1,B.value=re(i,a,d),Z(i),i!==r&&Q(i),Y(),X(!0),w?.(i,{offset:e===`up`?W:-W,type:e,emitter:t}),R.current?.focus()};v(()=>e,e=>{H&&(ue.value=I(e,o,d),V.value=!1,Y(),X(!0))},{immediate:!0}),Y(),_(()=>{X(!1)});let ge=u&&typeof u==`object`?u:void 0,_e=u!==!1&&!y&&!g?x(`span`,{className:`inline-flex shrink-0 flex-col gap-0.5`,"data-rue-input-number-controls":`true`,children:[S(`button`,{type:`button`,"aria-label":`Increase value`,className:`btn btn-ghost h-4 min-h-0 w-6 rounded-md border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>$(`up`,`handler`),children:ge?.upIcon??S(ce,{})}),S(`button`,{type:`button`,"aria-label":`Decrease value`,className:`btn btn-ghost h-4 min-h-0 w-6 rounded-md border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>$(`down`,`handler`),children:ge?.downIcon??S(le,{})})]}):null,ve=b!==void 0||_e?x(`span`,{className:`inline-flex items-center gap-2`,children:[b,_e]}):void 0;return S(E,{...L,ref:pe,type:`text`,inputMode:L.inputMode??(j(W)>0||a!==void 0?`decimal`:`numeric`),disabled:y,readOnly:g,suffix:ve,role:`spinbutton`,"aria-valuemin":String(U.min),"aria-valuemax":String(U.max),value:G.value,"aria-valuenow":K.value,"aria-valuetext":q.value,onInput:e=>{if(fe.value){fe.value=!1;return}let t=e.target,n=ie(t?.value??``,h,d);if(V.value=!0,B.value=n.display,n.empty)Z(null),Q(null);else if(n.numeric!==void 0){let e=ne(n.numeric,o,void 0,n.normalized);Z(e),Q(e)}Y(),X(!0),T?.(e)},onKeyDown:e=>{if(D?.(e),!(e.defaultPrevented||!s)){if(e.key===`ArrowUp`){e.preventDefault?.(),$(`up`,`keydown`);return}e.key===`ArrowDown`&&(e.preventDefault?.(),$(`down`,`keydown`))}},onPressEnter:k,onFocus:e=>{Y(),X(!1),P?.(e)},onBlur:e=>{let t=e.target,n=ie(t?.value??B.value,h,d);V.value=!1,B.value=n.display,he(n,l),Y(),X(!0),N?.(e)},onWheel:e=>{F?.(e),!(e.defaultPrevented||!c||y||g||document.activeElement!==R.current)&&e.deltaY!==0&&(e.preventDefault?.(),$(e.deltaY<0?`up`:`down`,`wheel`))}})},R=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let v=n(`th`);i(p,v),i(v,r(`类型`));let y=n(`th`);i(p,y),i(y,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=b({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),z=(e,t=0)=>{let n=Number(e);return Number.isFinite(n)?n:t},B=(e,t)=>{if(t.userTyping)return t.input;if(e==null||e===``)return``;let[n,r]=String(e).split(`.`),i=n.replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return r?`\xa5 ${i}.${r}`:`\xa5 ${i}`},V=e=>e.replace(/¥\s?|,/g,``),H=(e,t)=>t.userTyping?t.input:e==null||e===``?``:`${e}%`,U=e=>e.replace(/%/g,``),W=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`1.8`),t(e,`size-3`),s(e,`aria-hidden`,`true`);let r=n(`path`);return i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M12 5v14M5 12h14`),e}),ue=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`1.8`),t(e,`size-3`),s(e,`aria-hidden`,`true`);let r=n(`path`);return i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M5 12h14`),e}),de=()=>{let{seats:s,stepLog:f}=y(`useSetup:0:0`,()=>l(()=>({seats:y(`ref:1:0`,()=>p(3)),stepLog:y(`ref:1:1`,()=>p(`最近一次步进：等待操作`))})));return g(()=>{let l=n(`div`);t(l,`grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]`);let p=n(`div`);i(l,p),t(p,`grid gap-4 sm:grid-cols-2`);let _=a(`rue:component:anchor`);i(p,_),d(h(T,{children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(T.Legend,{children:`订阅席位`}),t,n);let r=a(`rue:component:anchor`);i(t,r),u(()=>{let e=h(L,{value:s.value,min:1,max:12,onChange:e=>{s.value=z(e,1)},onStep:(e,t)=>{f.value=t.emitter+` / `+t.type+` -> `+String(e)}});m(()=>d(e,t,r))});let o=a(`rue:component:anchor`);return i(t,o),d(h(T.Label,{as:`p`,children:`默认启用控制按钮、方向键和范围约束。`}),t,o),t})}),p,_);let v=a(`rue:component:anchor`);i(p,v),d(h(T,{children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(T.Legend,{children:`积分偏移`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(L,{defaultValue:40,min:0,max:100,controls:!1,suffix:`pts`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(T.Label,{as:`p`,children:`只保留纯输入体验，适合和自定义操作条组合。`}),t,o),t})}),p,v);let y=a(`rue:component:anchor`);i(p,y),d(h(T,{children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(T.Legend,{children:`延迟回写`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(L,{defaultValue:250,step:25,changeOnBlur:!1,suffix:`ms`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(T.Label,{as:`p`,children:`关闭 blur 归一化时，区间外值会继续保留到业务层处理。`}),t,o),t})}),p,y);let b=a(`rue:component:anchor`);i(p,b),d(h(T,{children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(T.Legend,{children:`不可用态`}),t,n);let r=a(`rue:component:anchor`);i(t,r),u(()=>{let e=h(L,{defaultValue:24,disabled:!0,prefix:`QTY`});m(()=>d(e,t,r))});let o=a(`rue:component:anchor`);return i(t,o),d(h(T.Label,{as:`p`,children:`禁用时自动收起加减控件，保留 Rue Input 的静态视觉。`}),t,o),t})}),p,b);let x=n(`div`);i(l,x),t(x,`rounded-box border border-base-300 bg-base-100 p-5`);let S=n(`div`);i(x,S),t(S,`text-xs uppercase tracking-[0.22em] text-base-content/45`),i(S,r(`Live summary`));let C=n(`div`);i(x,C),t(C,`mt-3 text-4xl font-semibold text-base-content`);let w=o(C);i(C,w),u(()=>{c(w,s.value)});let E=n(`p`);i(x,E),t(E,`mt-2 mb-0 text-sm text-base-content/65`),i(E,r(`当前席位。步进时会同步输出交互来源，方便联动库存、价格或配额面板。`));let D=n(`div`);i(x,D),t(D,`mt-4 rounded-box bg-base-200/70 p-4 text-sm text-base-content/70`);let O=o(D);return i(D,O),u(()=>{c(O,f.value)}),l})},G=()=>g(()=>{let e=n(`div`);t(e,`grid gap-4 md:grid-cols-2`);let r=a(`rue:component:anchor`);i(e,r),d(h(L,{defaultValue:12800,step:100,precision:0,prefix:`￥`,suffix:`CNY`,allowClear:!0}),e,r);let o=a(`rue:component:anchor`);i(e,o),u(()=>{let t=h(L,{defaultValue:18,addonBefore:`APR`,addonAfter:`%`,formatter:H,parser:U});m(()=>d(t,e,o))});let s=a(`rue:component:anchor`);i(e,s),d(h(L,{defaultValue:4.2,precision:1,status:`warning`,variant:`filled`,prefix:`延迟`,suffix:`s`}),e,s);let c=a(`rue:component:anchor`);return i(e,c),d(h(L,{defaultValue:68,status:`error`,variant:`borderless`,addonBefore:`CPU`,addonAfter:`%`}),e,c),e}),K=()=>{let{budget:e,discount:s}=y(`useSetup:0:0:dup1`,()=>l(()=>({budget:y(`ref:1:2`,()=>p(12800)),discount:y(`ref:1:3`,()=>p(12.5))})));return g(()=>{let l=n(`div`);t(l,`grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`);let f=n(`div`);i(l,f),t(f,`grid gap-4 md:grid-cols-2`);let p=a(`rue:component:anchor`);i(f,p),u(()=>{let t=h(L,{value:e.value,step:500,precision:0,formatter:B,parser:V,onChange:t=>{e.value=z(t,0)}});m(()=>d(t,f,p))});let g=a(`rue:component:anchor`);i(f,g),u(()=>{let e=h(L,{value:s.value,min:0,max:35,step:.5,precision:1,formatter:H,parser:U,onChange:e=>{s.value=z(e,0)}});m(()=>d(e,f,g))});let _=n(`div`);i(l,_),t(_,`rounded-box border border-base-300 bg-base-100 p-5 text-sm`);let v=n(`div`);i(_,v),t(v,`flex items-center justify-between gap-3`);let y=n(`div`);i(v,y);let b=n(`div`);i(y,b),t(b,`text-xs uppercase tracking-[0.22em] text-base-content/45`),i(b,r(`Raw value`));let x=n(`div`);i(y,x),t(x,`mt-2 text-lg font-semibold text-base-content`),i(x,r(`¥ `));let S=o(x);i(x,S),u(()=>{c(S,e.value)});let C=a(`rue:component:anchor`);i(v,C),d(h(w,{variant:`neutral`,size:`sm`,children:`parser + formatter`}),v,C);let T=n(`p`);i(_,T),t(T,`mt-4 mb-0 text-base-content/65`),i(T,r(`formatter 负责展示层，parser 负责回到数值层。这样可以在不使用原生 number input 的前提下，保留货币、百分比和本地化格式。`));let E=n(`div`);i(_,E),t(E,`mt-4 rounded-box bg-base-200/70 p-4`),i(E,r(`折扣后预算：`));let D=n(`strong`);i(E,D),i(D,r(`¥ `));let O=o(D);return i(D,O),u(()=>{c(O,(e.value*(100-s.value)/100).toFixed(0))}),l})},q=()=>{let{amount:e,fee:s,spot:f}=y(`useSetup:0:0:dup2`,()=>l(()=>({amount:y(`ref:1:4`,()=>p(`0.1250`)),fee:y(`ref:1:5`,()=>p(`0.0008`)),spot:y(`ref:1:6`,()=>p(64235.75))})));return g(()=>{let l=n(`div`);t(l,`grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`);let p=n(`div`);i(l,p),t(p,`grid gap-4 md:grid-cols-2`);let g=a(`rue:component:anchor`);i(p,g),u(()=>{let t=h(L,{value:e.value,stringMode:!0,precision:4,step:`0.0001`,prefix:`BTC`,onChange:t=>{e.value=t==null?`0.0000`:String(t)}});m(()=>d(t,p,g))});let _=a(`rue:component:anchor`);i(p,_),u(()=>{let e=h(L,{value:s.value,stringMode:!0,precision:4,step:`0.0001`,variant:`filled`,prefix:`Fee`,onChange:e=>{s.value=e==null?`0.0000`:String(e)}});m(()=>d(e,p,_))});let v=a(`rue:component:anchor`);i(p,v),u(()=>{let e=h(L,{value:f.value,precision:2,step:25,prefix:`$`,onChange:e=>{f.value=z(e,0)}});m(()=>d(e,p,v))});let y=n(`div`);i(p,y),t(y,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let b=n(`div`);i(y,b),t(b,`flex items-center justify-between gap-3`);let x=n(`span`);i(b,x),i(x,r(`String mode`));let S=a(`rue:component:anchor`);i(b,S),d(h(w,{variant:`outline`,size:`sm`,children:`保留 4 位小数`}),b,S);let C=n(`div`);i(y,C),t(C,`mt-4 text-2xl font-semibold text-base-content`),i(C,r(`$`));let T=o(C);i(C,T),u(()=>{c(T,((z(e.value,0)+z(s.value,0))*f.value).toFixed(2))});let E=n(`p`);return i(y,E),t(E,`mt-2 mb-0`),i(E,r(`适合高精度金额、链上数量、保证金比例等需要字符串回传的场景。`)),l})},fe=()=>{let{throughput:e,lastStep:s}=y(`useSetup:0:0:dup3`,()=>l(()=>({throughput:y(`ref:1:7`,()=>p(120)),lastStep:y(`ref:1:8`,()=>p(`等待操作`))})));return g(()=>{let l=n(`div`);t(l,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`);let f=a(`rue:component:anchor`);i(l,f),u(()=>{let t=h(L,{value:e.value,min:0,max:500,step:25,changeOnWheel:!0,prefix:`QPS`,controls:{upIcon:S(W,{}),downIcon:S(ue,{})},onChange:t=>{e.value=z(t,0)},onStep:(e,t)=>{s.value=t.emitter+` / `+t.type+` -> `+String(e)}});m(()=>d(t,l,f))});let p=n(`div`);i(l,p),t(p,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let g=n(`div`);i(p,g),t(g,`flex flex-wrap gap-2`);let _=a(`rue:component:anchor`);i(g,_),d(h(w,{variant:`neutral`,size:`sm`,children:`ArrowUp / ArrowDown`}),g,_);let v=a(`rue:component:anchor`);i(g,v),d(h(w,{variant:`neutral`,size:`sm`,children:`Mouse Wheel`}),g,v);let y=a(`rue:component:anchor`);i(g,y),d(h(w,{variant:`neutral`,size:`sm`,children:`Custom Icons`}),g,y);let b=n(`div`);i(p,b),t(b,`mt-4 text-2xl font-semibold text-base-content`);let x=o(b);i(b,x),u(()=>{c(x,e.value)}),i(b,r(` QPS`));let C=n(`p`);i(p,C),t(C,`mt-2 mb-0`),i(C,r(`聚焦输入框后可以直接滚轮增减，也可以复用业务自己的加减图标。`));let T=n(`div`);i(p,T),t(T,`mt-4 rounded-box bg-base-200/70 p-4`);let E=o(T);return i(T,E),u(()=>{c(E,s.value)}),l})},pe=()=>g(()=>{let e=n(`div`);t(e,`grid gap-4 md:grid-cols-2 xl:grid-cols-3`);let r=a(`rue:component:anchor`);i(e,r),d(h(L,{size:`xs`,defaultValue:8,suffix:`xs`}),e,r);let o=a(`rue:component:anchor`);i(e,o),d(h(L,{size:`sm`,defaultValue:16,suffix:`sm`}),e,o);let s=a(`rue:component:anchor`);i(e,s),d(h(L,{size:`md`,defaultValue:24,suffix:`md`}),e,s);let c=a(`rue:component:anchor`);i(e,c),d(h(L,{size:`lg`,defaultValue:32,suffix:`lg`}),e,c);let l=a(`rue:component:anchor`);i(e,l),d(h(L,{size:`xl`,defaultValue:48,suffix:`xl`}),e,l);let u=a(`rue:component:anchor`);return i(e,u),d(h(L,{size:`large`,defaultValue:64,suffix:`large alias`}),e,u),e}),J=[{prop:`value / defaultValue`,description:`受控与非受控值，支持 number，也支持 stringMode 下的字符串值。`,type:`number | string | null`,defaultValue:`-`},{prop:`min / max`,description:`数值上下界；配合 changeOnBlur 时会在失焦后自动归一化。`,type:`number | string`,defaultValue:`MIN_SAFE_INTEGER / MAX_SAFE_INTEGER`},{prop:`step`,description:`每次加减的步长，支持整数与小数。`,type:`number | string`,defaultValue:`1`},{prop:`precision`,description:`控制最终值的小数位数；步进和 blur 归一化都会遵守该精度。`,type:`number`,defaultValue:`-`},{prop:`stringMode`,description:`改为字符串回传，适合高精度金额或链上数量。`,type:`boolean`,defaultValue:`false`},{prop:`formatter`,description:`自定义展示格式，参数里会带上 userTyping 和当前 input 文本。`,type:`(value, info) => string`,defaultValue:`-`},{prop:`parser`,description:`把 formatter 后的文本重新提取为数值，常用于货币、百分比和带单位输入。`,type:`(input: string) => number | string | null | undefined`,defaultValue:`-`},{prop:`controls`,description:`是否展示上下步进按钮，也支持自定义 upIcon / downIcon。`,type:`boolean | { upIcon?: any; downIcon?: any }`,defaultValue:`true`},{prop:`keyboard`,description:`是否启用 ArrowUp / ArrowDown 键盘步进。`,type:`boolean`,defaultValue:`true`},{prop:`changeOnWheel`,description:`聚焦输入框后是否允许用鼠标滚轮调节数值。`,type:`boolean`,defaultValue:`false`},{prop:`changeOnBlur`,description:`失焦后是否按 min / max 和 precision 做归一化。`,type:`boolean`,defaultValue:`true`},{prop:`prefix / suffix`,description:`输入区内部前后缀，可与控件按钮共存。`,type:`any`,defaultValue:`-`},{prop:`addonBefore / addonAfter`,description:`输入框两侧附加区，适合协议、单位、业务标签块。`,type:`any`,defaultValue:`-`},{prop:`variant / status / size / color`,description:`直接复用 Rue Input 的视觉层能力。`,type:`与 Input 一致`,defaultValue:`-`},{prop:`allowClear`,description:`沿用 Rue Input 的清空按钮能力，清空后会回传 null。`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`onChange`,description:`数值变化时触发；stringMode 下返回字符串，否则返回 number；清空返回 null。`,type:`(value: number | string | null) => void`,defaultValue:`-`},{prop:`onStep`,description:`点击控件、键盘或滚轮步进后触发，附带步进来源和偏移量。`,type:`(value, info) => void`,defaultValue:`-`}],me=()=>{let{tabBasic:o,tabAffix:c,tabFormatter:f,tabPrecision:_,tabControls:v,tabSizes:b}=y(`useSetup:0:0:dup4`,()=>l(()=>({tabBasic:y(`ref:1:9`,()=>p(`preview`)),tabAffix:y(`ref:1:10`,()=>p(`preview`)),tabFormatter:y(`ref:1:11`,()=>p(`preview`)),tabPrecision:y(`ref:1:12`,()=>p(`preview`)),tabControls:y(`ref:1:13`,()=>p(`preview`)),tabSizes:y(`ref:1:14`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(C,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`InputNumber 数字输入`));let y=n(`p`);i(p,y),t(y,`text-sm mt-3 mb-3`),i(y,r(`InputNumber 建在 Rue 现有的 Input 视觉壳层之上：保持 prefix、suffix、addon、状态和变体都还是同一套审美，但把数值输入真正需要的 formatter、parser、precision、步进按钮、键盘和滚轮能力一次补齐。`));let x=n(`div`);i(p,x),t(x,`text-sm flex flex-wrap gap-4`);let C=n(`a`);i(x,C),s(C,`href`,`https://ant.design/components/input-number/`),s(C,`target`,`_blank`),i(C,r(`参考 InputNumber 功能语义`));let w=n(`h2`);i(p,w),i(w,r(`何时使用`));let T=n(`ul`);i(p,T);let E=n(`li`);i(T,E),i(E,r(`需要输入数量、金额、比例、库存、席位等明确数值，而不是自由文本。`));let O=n(`li`);i(T,O),i(O,r(`希望同时支持键盘、按钮、滚轮和格式化展示，但不想退回浏览器原生 number input 的不可控体验。`));let k=n(`li`);i(T,k),i(k,r(`希望在 Rue Input 的统一视觉下，把数字输入和 prefix、单位、告警状态、add-on 组合起来。`));let A=a(`rue:component:anchor`);i(p,A),u(()=>{let e=h(D,{title:`Basic and bounds`,summary:`基础数值输入、范围约束、无控件模式和禁用态。`,tab:o,preview:()=>S(de,{}),code:`const seats = ref(3)
const stepLog = ref('最近一次步进：等待操作')

<InputNumber
  value={seats.value}
  min={1}
  max={12}
  onChange={value => {
    seats.value = Number(value ?? 1)
  }}
  onStep={(value, info) => {
    stepLog.value = info.emitter + ' / ' + info.type + ' -> ' + String(value)
  }}
/>

<InputNumber defaultValue={40} min={0} max={100} controls={false} suffix="pts" />
<InputNumber defaultValue={250} step={25} changeOnBlur={false} suffix="ms" />
<InputNumber defaultValue={24} disabled prefix="QTY" />`});m(()=>d(e,p,A))});let j=a(`rue:component:anchor`);i(p,j),u(()=>{let e=h(D,{title:`Affixes and variants`,summary:`复用 Rue Input 的前后缀、附加区、状态与变体。`,tab:c,preview:()=>S(G,{}),code:`<InputNumber
  defaultValue={12800}
  step={100}
  precision={0}
  prefix="￥"
  suffix="CNY"
  allowClear={true}
/>

<InputNumber
  defaultValue={18}
  addonBefore="APR"
  addonAfter="%"
  formatter={(value, info) => (info.userTyping ? info.input : String(value ?? '') + '%')}
  parser={input => input.replace(/%/g, '')}
/>

<InputNumber
  defaultValue={4.2}
  precision={1}
  status="warning"
  variant="filled"
  prefix="延迟"
  suffix="s"
/>

<InputNumber
  defaultValue={68}
  status="error"
  variant="borderless"
  addonBefore="CPU"
  addonAfter="%"
/>`});m(()=>d(e,p,j))});let ee=a(`rue:component:anchor`);i(p,ee),u(()=>{let e=h(D,{title:`Formatter and parser`,summary:`把展示层和数值层拆开，适合货币和百分比。`,tab:f,preview:()=>S(K,{}),code:`const budget = ref(12800)
const discount = ref(12.5)

<InputNumber
  value={budget.value}
  step={500}
  precision={0}
  formatter={(value, info) => {
    if (info.userTyping) return info.input
    if (value == null || value === '') return ''
    const parts = String(value).split('.')
    const grouped = parts[0].replace(/B(?=(d{3})+(?!d))/g, ',')
    return parts[1] ? '¥ ' + grouped + '.' + parts[1] : '¥ ' + grouped
  }}
  parser={input => input.replace(/¥s?|,/g, '')}
  onChange={value => {
    budget.value = Number(value ?? 0)
  }}
/>

<InputNumber
  value={discount.value}
  min={0}
  max={35}
  step={0.5}
  precision={1}
  formatter={(value, info) => (info.userTyping ? info.input : String(value ?? '') + '%')}
  parser={input => input.replace(/%/g, '')}
  onChange={value => {
    discount.value = Number(value ?? 0)
  }}
/>`});m(()=>d(e,p,ee))});let te=a(`rue:component:anchor`);i(p,te),u(()=>{let e=h(D,{title:`Precision and stringMode`,summary:`适合链上数量、高精度金额、手续费等需要字符串回传的场景。`,tab:_,preview:()=>S(q,{}),code:`const amount = ref('0.1250')
const fee = ref('0.0008')
const spot = ref(64235.75)

<InputNumber
  value={amount.value}
  stringMode={true}
  precision={4}
  step="0.0001"
  prefix="BTC"
  onChange={value => {
    amount.value = value == null ? '0.0000' : String(value)
  }}
/>

<InputNumber
  value={fee.value}
  stringMode={true}
  precision={4}
  step="0.0001"
  variant="filled"
  prefix="Fee"
  onChange={value => {
    fee.value = value == null ? '0.0000' : String(value)
  }}
/>

<InputNumber
  value={spot.value}
  precision={2}
  step={25}
  prefix="$"
  onChange={value => {
    spot.value = Number(value ?? 0)
  }}
/>`});m(()=>d(e,p,te))});let M=a(`rue:component:anchor`);i(p,M),u(()=>{let e=h(D,{title:`Custom controls and wheel`,summary:`支持替换控件图标，并区分来自按钮、键盘还是滚轮的步进来源。`,tab:v,preview:()=>S(fe,{}),code:`const throughput = ref(120)
const lastStep = ref('等待操作')

<InputNumber
  value={throughput.value}
  min={0}
  max={500}
  step={25}
  changeOnWheel={true}
  prefix="QPS"
  controls={{
    upIcon: <PlusMiniIcon />,
    downIcon: <MinusMiniIcon />,
  }}
  onChange={value => {
    throughput.value = Number(value ?? 0)
  }}
  onStep={(value, info) => {
    lastStep.value = info.emitter + ' / ' + info.type + ' -> ' + String(value)
  }}
/>`});m(()=>d(e,p,M))});let N=a(`rue:component:anchor`);i(p,N),u(()=>{let e=h(D,{title:`Sizes`,summary:`沿用 Rue Input 的尺寸体系，包括 large 别名。`,tab:b,preview:()=>S(pe,{}),code:`<InputNumber size="xs" defaultValue={8} suffix="xs" />
<InputNumber size="sm" defaultValue={16} suffix="sm" />
<InputNumber size="md" defaultValue={24} suffix="md" />
<InputNumber size="lg" defaultValue={32} suffix="lg" />
<InputNumber size="xl" defaultValue={48} suffix="xl" />
<InputNumber size="large" defaultValue={64} suffix="large alias" />`});m(()=>d(e,p,N))});let P=n(`h2`);i(p,P),s(P,`id`,`input-number-api`),i(P,r(`API`));let F=n(`p`);i(p,F),i(F,r(`InputNumber 直接复用了 Rue Input 的视觉 props，同时把数值行为语义补到了同一层。`));let I=a(`rue:component:anchor`);return i(p,I),u(()=>{let e=h(R,{rows:J});m(()=>d(e,p,I))}),l})}),l,p),l})};export{me as default};
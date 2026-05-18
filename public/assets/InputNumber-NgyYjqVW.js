import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,S as s,W as c,_t as l,d as u,dt as d,ht as f,l as p,mt as m,st as h,t as g,vt as _,z as v}from"./vapor-runtime-BuwLbCGk.js";import{a as y,n as b}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as x,t as S}from"./src-BQwLQD8R.js";import{n as C}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as w}from"./badge-lRk49Pw8.js";import{t as T}from"./fieldset-BtRZ016d.js";import{t as E}from"./input-BU-TVJFw.js";import{t as D}from"./PreviewBlock-Cks1b4IL.js";var O=(...e)=>e.filter(Boolean).join(` `),k=e=>{switch(e){case`small`:return`sm`;case`middle`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(k(e)){case`xs`:return{buttonClassName:`btn-xs w-3.5 rounded-[4px] px-0 text-[10px]`,iconClassName:`size-2`,groupClassName:`gap-0`,suffixClassName:`gap-1`};case`sm`:return{buttonClassName:`btn-xs w-4.5 rounded`,iconClassName:`size-2.5`,groupClassName:`gap-px`,suffixClassName:`gap-1.5`};case`lg`:return{buttonClassName:`btn-sm w-7 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};case`xl`:return{buttonClassName:`btn-sm w-8 rounded-lg`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};default:return{buttonClassName:`btn-xs w-6 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`}}},A=e=>{let t=Number(e);return Number.isFinite(t)?t:void 0},j=e=>Object.is(e,-0)?0:e,M=(e,t)=>{if(typeof t!=`number`||t<0)return j(e);let n=10**t;return j(Math.round(e*n)/n)},N=e=>{if(e==null)return 0;let t=String(e).toLowerCase();if(t.includes(`e-`)){let[e,n]=t.split(`e-`),r=Number(n);return(e.includes(`.`)?e.length-e.indexOf(`.`)-1:0)+r}return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0},te=(e,t)=>{let n=A(e)??-(2**53-1),r=A(t)??2**53-1;return r<n?{min:r,max:n}:{min:n,max:r}},ne=e=>{let t=A(e)??1;return t>0?t:1},re=(e,t,n)=>e<t?t:e>n?n:e,P=(e,t)=>t&&t!==`.`?e.replace(`.`,t):e,ie=(e,t)=>{let n=t===`,`?`,`:`.`,r=(typeof e.normalize==`function`?e.normalize(`NFKC`):e).trim();if(!r)return``;let i=``,a=r;a.startsWith(`-`)&&(i=`-`,a=a.slice(1)),a=a.replace(/-/g,``),a=n===`,`?a.replace(/\./g,``):a.replace(/,/g,``),a=a.replace(n===`,`?/[^0-9,]/g:/[^0-9.]/g,``);let o=a.split(n),s=o.shift()??``,c=o.join(``),l=a.includes(n);return`${i}${s}${l?`.${c}`:``}`},ae=e=>e===`-`||e===`.`||e===`-.`,oe=(e,t,n)=>{if(e==null||e===``)return null;if(typeof e==`number`)return Number.isFinite(e)?t?String(j(e)):j(e):null;let r=ie(String(e),n);if(!r||ae(r))return null;let i=A(r);return i===void 0?null:t?r:j(i)},se=(e,t,n,r)=>{let i=M(e,n);return t?typeof n==`number`&&n>=0?i.toFixed(n):r&&!ae(r)&&A(r)!==void 0?r:String(i):i},ce=(e,t,n)=>{if(e==null)return``;let r;if(typeof e==`string`)if(typeof t==`number`&&t>=0){let n=A(e);r=n===void 0?e:M(n,t).toFixed(t)}else r=e;else{let n=M(e,t);r=typeof t==`number`&&t>=0?n.toFixed(t):String(n)}return P(r,n)},le=(e,t,n)=>{let r=t?t(e):e;if(r==null||r===``)return{display:``,normalized:``,empty:!0,transient:!1};if(typeof r==`number`){if(!Number.isFinite(r))return{display:``,normalized:``,empty:!0,transient:!1};let e=String(j(r));return{display:P(e,n),normalized:e,numeric:j(r),empty:!1,transient:!1}}let i=ie(String(r),n);if(!i)return{display:``,normalized:``,empty:!0,transient:!1};if(ae(i))return{display:P(i,n),normalized:i,empty:!1,transient:!0};let a=A(i);return{display:P(i,n),normalized:i,numeric:a===void 0?void 0:j(a),empty:!1,transient:!1}},ue=(e,t,n,r)=>{if(typeof e!=`function`)return n;let i=e(t,{userTyping:r,input:n});return i==null?n:String(i)},de=(e,t,n,r)=>{let i=10**Math.max(N(e),N(n),r??0);return M((Math.round(e*i)+Math.round(n*i)*t)/i,r)},fe=(e,t,n)=>{let r=e==null?void 0:A(e);return r===void 0?t>0?t:n<0?n:0:r},pe=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 14 5-5 5 5`})}),me=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 10 5 5 5-5`})}),F=({value:e,defaultValue:t,min:n,max:r,step:i=1,precision:a,stringMode:o=!1,keyboard:c=!0,changeOnWheel:u,changeOnBlur:d=!0,controls:f=!0,decimalSeparator:p,formatter:g,parser:_,readOnly:v,disabled:y,size:b,suffix:C,onChange:w,onStep:T,onInput:D,onKeyDown:k,onPressEnter:j,onBlur:P,onFocus:ie,onWheel:ae,onCompositionStart:F,onCompositionEnd:he,...I})=>{let L=m(),R=I.ref,z=h(``),B=h(!1),V=h(!1),H=e!==void 0,U=te(n,r),W=ne(i),ge=h(oe(e,o,p)),_e=h(oe(H?e:t,o,p)),G=h(``),K=h(void 0),q=h(void 0),ve=h(!1);`ref`in I&&delete I.ref;let ye=e=>{if(L.current=e??void 0,typeof R==`function`){R(e);return}R&&typeof R==`object`&&(R.current=e??void 0)},J=()=>H?ge.value:_e.value,be=()=>{let e=J();if(B.value){let t=le(z.value,_,p);return ue(g,t.numeric===void 0?e:se(t.numeric,o,void 0,t.normalized),z.value,!0)}return ue(g,e,ce(e,a,p),!1)},Y=()=>{let e=J(),t=e==null?void 0:A(e),n=be();G.value=n,K.value=t==null?void 0:String(t),q.value=n||void 0},X=(e=!1)=>{let t=L.current;if(!t)return;let n=t.value!==G.value;n&&(t.value=G.value),K.value===void 0?t.removeAttribute(`aria-valuenow`):t.setAttribute(`aria-valuenow`,K.value),q.value===void 0?t.removeAttribute(`aria-valuetext`):t.setAttribute(`aria-valuetext`,q.value),e&&n&&(ve.value=!0,t.dispatchEvent(new Event(`input`,{bubbles:!0})))},Z=e=>{H||(_e.value=e)},xe=e=>{w&&w(e)},Se=e=>{B.value=!0,z.value=e,G.value=e,K.value=void 0,q.value=e||void 0},Ce=e=>{let t=le(e,_,p);if(B.value=!0,z.value=t.display,t.empty)Z(null),xe(null);else if(t.numeric!==void 0){let e=se(t.numeric,o,void 0,t.normalized);Z(e),xe(e)}Y(),X(!1)},we=(e,t)=>{if(e.empty)return Z(null),xe(null),Y(),X(!0),null;if(e.numeric===void 0)return Y(),X(!0),J();let n=e.numeric;n=M(n,a),t&&(n=re(n,U.min,U.max),n=M(n,a));let r=se(n,o,a,e.normalized),i=J();return Z(r),r!==i&&xe(r),Y(),X(!0),r},Q=(e,t)=>{if(y||v)return;let n=le(L.current?.value??z.value,_,p),r=J(),i=se(re(de(n.numeric??fe(r,U.min,U.max),e===`up`?1:-1,W,a),U.min,U.max),o,a);B.value=!1,z.value=ce(i,a,p),Z(i),i!==r&&xe(i),Y(),X(!0),T?.(i,{offset:e===`up`?W:-W,type:e,emitter:t}),L.current?.focus()};l(()=>e,e=>{H&&(ge.value=oe(e,o,p),B.value=!1,Y(),X(!0))},{immediate:!0}),Y(),s(()=>{X(!1)});let Te=f&&typeof f==`object`?f:void 0,Ee=f!==!1&&!y&&!v,$=ee(b),De=Ee?x(`span`,{className:O(`inline-flex shrink-0 self-stretch flex-col`,$.groupClassName),"data-rue-input-number-controls":`true`,children:[S(`button`,{type:`button`,"aria-label":`Increase value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`up`,`handler`),children:Te?.upIcon??S(pe,{className:$.iconClassName})}),S(`button`,{type:`button`,"aria-label":`Decrease value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`down`,`handler`),children:Te?.downIcon??S(me,{className:$.iconClassName})})]}):null,Oe=C!==void 0||De?x(`span`,{className:O(`inline-flex items-center`,$.suffixClassName),children:[C,De]}):void 0;return S(E,{...I,ref:ye,type:`text`,inputMode:I.inputMode??(N(W)>0||a!==void 0?`decimal`:`numeric`),disabled:y,readOnly:v,size:b,suffix:Oe,role:`spinbutton`,"aria-valuemin":String(U.min),"aria-valuemax":String(U.max),value:G.value,"aria-valuenow":K.value,"aria-valuetext":q.value,onInput:e=>{if(ve.value){ve.value=!1;return}let t=e.target?.value??``;if(V.value||e.isComposing){Se(t),D?.(e);return}Ce(t),D?.(e)},onKeyDown:e=>{if(k?.(e),!(e.defaultPrevented||!c)){if(e.key===`ArrowUp`){e.preventDefault?.(),Q(`up`,`keydown`);return}e.key===`ArrowDown`&&(e.preventDefault?.(),Q(`down`,`keydown`))}},onPressEnter:j,onFocus:e=>{Y(),X(!1),ie?.(e)},onCompositionStart:e=>{V.value=!0,Se(e.target?.value??z.value),F?.(e)},onCompositionEnd:e=>{V.value=!1,Ce(e.target?.value??z.value),he?.(e)},onBlur:e=>{let t=e.target,n=le(t?.value??z.value,_,p);V.value=!1,B.value=!1,z.value=n.display,we(n,d),Y(),X(!0),P?.(e)},onWheel:e=>{ae?.(e),!(e.defaultPrevented||!u||y||v||document.activeElement!==L.current)&&e.deltaY!==0&&(e.preventDefault?.(),Q(e.deltaY<0?`up`:`down`,`wheel`))}})},he=a=>u(s=>{let l=r(`div`,s);n(l,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=r(`table`,l);i(l,f),n(f,`table table-zebra`);let m=r(`thead`,f);i(f,m);let h=r(`tr`,m);i(m,h);let g=r(`th`,h);i(h,g),i(g,o(`属性`));let v=r(`th`,h);i(h,v),i(v,o(`说明`));let y=r(`th`,h);i(h,y),i(y,o(`类型`));let x=r(`th`,h);i(h,x),i(x,o(`默认值`));let S=r(`tbody`,f);i(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return _(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,s,l)=>{p(u(()=>{let a=t(),o=r(`tr`,a);i(a,o),_(()=>{c(o,`key`,String(n.prop))});let s=r(`td`,o);i(o,s);let l=r(`code`,s);i(s,l);let u=e(`rue:slot:anchor`);i(l,u),_(()=>{let e=n.prop;d(()=>p(e,l,u))});let f=r(`td`,o);i(o,f);let m=e(`rue:slot:anchor`);i(f,m),_(()=>{let e=n.description;d(()=>p(e,f,m))});let h=r(`td`,o);i(o,h);let g=r(`code`,h);i(h,g);let v=e(`rue:slot:anchor`);i(g,v),_(()=>{let e=n.type;d(()=>p(e,g,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),_(()=>{let e=n.defaultValue;d(()=>p(e,b,x))}),a}),a,o)}})}),l}),I=(e,t=0)=>{let n=Number(e);return Number.isFinite(n)?n:t},L=(e,t)=>{if(t.userTyping)return t.input;if(e==null||e===``)return``;let[n,r]=String(e).split(`.`),i=n.replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return r?`\xa5 ${i}.${r}`:`\xa5 ${i}`},R=e=>e.replace(/¥\s?|,/g,``),z=(e,t)=>t.userTyping?t.input:e==null||e===``?``:`${e}%`,B=e=>e.replace(/%/g,``),V=()=>u(e=>{let t=r(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`1.8`),n(t,`size-3`),c(t,`aria-hidden`,`true`);let a=r(`path`,t);return i(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M12 5v14M5 12h14`),t}),H=()=>u(e=>{let t=r(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`1.8`),n(t,`size-3`),c(t,`aria-hidden`,`true`);let a=r(`path`,t);return i(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M5 12h14`),t}),U=()=>{let{seats:s,stepLog:c}=y(`useSetup:0:0`,()=>f(()=>({seats:y(`ref:1:0`,()=>h(3)),stepLog:y(`ref:1:1`,()=>h(`最近一次步进：等待操作`))})));return u(l=>{let f=r(`div`,l);n(f,`grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]`);let m=r(`div`,f);i(f,m),n(m,`grid gap-4 xl:grid-cols-2`);let h=e(`rue:component:anchor`);i(m,h),p(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),p(g(T.Legend,{children:`订阅席位`}),n,r);let a=e(`rue:component:anchor`);i(n,a),_(()=>{let e=g(F,{className:`w-full`,value:s.value,min:1,max:12,onChange:e=>{s.value=I(e,1)},onStep:(e,t)=>{c.value=t.emitter+` / `+t.type+` -> `+String(e)}});d(()=>p(e,n,a))});let o=e(`rue:component:anchor`);return i(n,o),p(g(T.Label,{as:`p`,children:`默认启用控制按钮、方向键和范围约束。`}),n,o),n})}),m,h);let y=e(`rue:component:anchor`);i(m,y),p(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),p(g(T.Legend,{children:`积分偏移`}),n,r);let a=e(`rue:component:anchor`);i(n,a),p(g(F,{className:`w-full`,defaultValue:40,min:0,max:100,controls:!1,suffix:`pts`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),p(g(T.Label,{as:`p`,children:`只保留纯输入体验，适合和自定义操作条组合。`}),n,o),n})}),m,y);let b=e(`rue:component:anchor`);i(m,b),p(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),p(g(T.Legend,{children:`延迟回写`}),n,r);let a=e(`rue:component:anchor`);i(n,a),p(g(F,{className:`w-full`,defaultValue:250,step:25,changeOnBlur:!1,suffix:`ms`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),p(g(T.Label,{as:`p`,children:`关闭 blur 归一化时，区间外值会继续保留到业务层处理。`}),n,o),n})}),m,b);let x=e(`rue:component:anchor`);i(m,x),p(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),p(g(T.Legend,{children:`不可用态`}),n,r);let a=e(`rue:component:anchor`);i(n,a),_(()=>{let e=g(F,{className:`w-full`,defaultValue:24,disabled:!0,prefix:`QTY`});d(()=>p(e,n,a))});let o=e(`rue:component:anchor`);return i(n,o),p(g(T.Label,{as:`p`,children:`禁用时自动收起加减控件，保留 Rue Input 的静态视觉。`}),n,o),n})}),m,x);let S=r(`div`,f);i(f,S),n(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=r(`div`,S);i(S,C),n(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),i(C,o(`Live summary`));let w=r(`div`,S);i(S,w),n(w,`mt-3 text-4xl font-semibold text-base-content`);let E=v(w);i(w,E),_(()=>{a(E,s.value)});let D=r(`p`,S);i(S,D),n(D,`mt-2 mb-0 text-sm text-base-content/65`),i(D,o(`当前席位。步进时会同步输出交互来源，方便联动库存、价格或配额面板。`));let O=r(`div`,S);i(S,O),n(O,`mt-4 rounded-box bg-base-200/70 p-4 text-sm text-base-content/70`);let k=v(O);return i(O,k),_(()=>{a(k,c.value)}),f})},W=()=>u(t=>{let a=r(`div`,t);n(a,`grid gap-4 md:grid-cols-2`);let o=e(`rue:component:anchor`);i(a,o),p(g(F,{defaultValue:12800,step:100,precision:0,prefix:`￥`,suffix:`CNY`,allowClear:!0}),a,o);let s=e(`rue:component:anchor`);i(a,s),_(()=>{let e=g(F,{defaultValue:18,addonBefore:`APR`,addonAfter:`%`,formatter:z,parser:B});d(()=>p(e,a,s))});let c=e(`rue:component:anchor`);i(a,c),p(g(F,{defaultValue:4.2,precision:1,status:`warning`,variant:`filled`,prefix:`延迟`,suffix:`s`}),a,c);let l=e(`rue:component:anchor`);return i(a,l),p(g(F,{defaultValue:68,status:`error`,variant:`borderless`,addonBefore:`CPU`,addonAfter:`%`}),a,l),a}),ge=()=>{let{budget:t,discount:s}=y(`useSetup:0:0:dup1`,()=>f(()=>({budget:y(`ref:1:2`,()=>h(12800)),discount:y(`ref:1:3`,()=>h(12.5))})));return u(c=>{let l=r(`div`,c);n(l,`grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`);let u=r(`div`,l);i(l,u),n(u,`grid gap-4 md:grid-cols-2`);let f=e(`rue:component:anchor`);i(u,f),_(()=>{let e=g(F,{value:t.value,step:500,precision:0,formatter:L,parser:R,onChange:e=>{t.value=I(e,0)}});d(()=>p(e,u,f))});let m=e(`rue:component:anchor`);i(u,m),_(()=>{let e=g(F,{value:s.value,min:0,max:35,step:.5,precision:1,formatter:z,parser:B,onChange:e=>{s.value=I(e,0)}});d(()=>p(e,u,m))});let h=r(`div`,l);i(l,h),n(h,`rounded-box border border-base-300 bg-base-100 p-5 text-sm`);let y=r(`div`,h);i(h,y),n(y,`flex items-center justify-between gap-3`);let b=r(`div`,y);i(y,b);let x=r(`div`,b);i(b,x),n(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),i(x,o(`Raw value`));let S=r(`div`,b);i(b,S),n(S,`mt-2 text-lg font-semibold text-base-content`),i(S,o(`¥ `));let C=v(S);i(S,C),_(()=>{a(C,t.value)});let T=e(`rue:component:anchor`);i(y,T),p(g(w,{variant:`neutral`,size:`sm`,children:`parser + formatter`}),y,T);let E=r(`p`,h);i(h,E),n(E,`mt-4 mb-0 text-base-content/65`),i(E,o(`formatter 负责展示层，parser 负责回到数值层。这样可以在不使用原生 number input 的前提下，保留货币、百分比和本地化格式。`));let D=r(`div`,h);i(h,D),n(D,`mt-4 rounded-box bg-base-200/70 p-4`),i(D,o(`折扣后预算：`));let O=r(`strong`,D);i(D,O),i(O,o(`¥ `));let k=v(O);return i(O,k),_(()=>{a(k,(t.value*(100-s.value)/100).toFixed(0))}),l})},_e=()=>{let{amount:t,fee:s,spot:c}=y(`useSetup:0:0:dup2`,()=>f(()=>({amount:y(`ref:1:4`,()=>h(`0.1250`)),fee:y(`ref:1:5`,()=>h(`0.0008`)),spot:y(`ref:1:6`,()=>h(64235.75))})));return u(l=>{let u=r(`div`,l);n(u,`grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`);let f=r(`div`,u);i(u,f),n(f,`grid gap-4 md:grid-cols-2`);let m=e(`rue:component:anchor`);i(f,m),_(()=>{let e=g(F,{value:t.value,stringMode:!0,precision:4,step:`0.0001`,prefix:`BTC`,onChange:e=>{t.value=e==null?`0.0000`:String(e)}});d(()=>p(e,f,m))});let h=e(`rue:component:anchor`);i(f,h),_(()=>{let e=g(F,{value:s.value,stringMode:!0,precision:4,step:`0.0001`,variant:`filled`,prefix:`Fee`,onChange:e=>{s.value=e==null?`0.0000`:String(e)}});d(()=>p(e,f,h))});let y=e(`rue:component:anchor`);i(f,y),_(()=>{let e=g(F,{value:c.value,precision:2,step:25,prefix:`$`,onChange:e=>{c.value=I(e,0)}});d(()=>p(e,f,y))});let b=r(`div`,f);i(f,b),n(b,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let x=r(`div`,b);i(b,x),n(x,`flex items-center justify-between gap-3`);let S=r(`span`,x);i(x,S),i(S,o(`String mode`));let C=e(`rue:component:anchor`);i(x,C),p(g(w,{outline:!0,size:`sm`,children:`保留 4 位小数`}),x,C);let T=r(`div`,b);i(b,T),n(T,`mt-4 text-2xl font-semibold text-base-content`),i(T,o(`$`));let E=v(T);i(T,E),_(()=>{a(E,((I(t.value,0)+I(s.value,0))*c.value).toFixed(2))});let D=r(`p`,b);return i(b,D),n(D,`mt-2 mb-0`),i(D,o(`适合高精度金额、链上数量、保证金比例等需要字符串回传的场景。`)),u})},G=()=>{let{throughput:t,lastStep:s}=y(`useSetup:0:0:dup3`,()=>f(()=>({throughput:y(`ref:1:7`,()=>h(120)),lastStep:y(`ref:1:8`,()=>h(`等待操作`))})));return u(c=>{let l=r(`div`,c);n(l,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`);let u=e(`rue:component:anchor`);i(l,u),_(()=>{let e=g(F,{value:t.value,min:0,max:500,step:25,changeOnWheel:!0,prefix:`QPS`,controls:{upIcon:S(V,{}),downIcon:S(H,{})},onChange:e=>{t.value=I(e,0)},onStep:(e,t)=>{s.value=t.emitter+` / `+t.type+` -> `+String(e)}});d(()=>p(e,l,u))});let f=r(`div`,l);i(l,f),n(f,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let m=r(`div`,f);i(f,m),n(m,`flex flex-wrap gap-2`);let h=e(`rue:component:anchor`);i(m,h),p(g(w,{variant:`neutral`,size:`sm`,children:`ArrowUp / ArrowDown`}),m,h);let y=e(`rue:component:anchor`);i(m,y),p(g(w,{variant:`neutral`,size:`sm`,children:`Mouse Wheel`}),m,y);let b=e(`rue:component:anchor`);i(m,b),p(g(w,{variant:`neutral`,size:`sm`,children:`Custom Icons`}),m,b);let x=r(`div`,f);i(f,x),n(x,`mt-4 text-2xl font-semibold text-base-content`);let C=v(x);i(x,C),_(()=>{a(C,t.value)}),i(x,o(` QPS`));let T=r(`p`,f);i(f,T),n(T,`mt-2 mb-0`),i(T,o(`聚焦输入框后可以直接滚轮增减，也可以复用业务自己的加减图标。`));let E=r(`div`,f);i(f,E),n(E,`mt-4 rounded-box bg-base-200/70 p-4`);let D=v(E);return i(E,D),_(()=>{a(D,s.value)}),l})},K=()=>u(t=>{let a=r(`div`,t);n(a,`grid gap-4 md:grid-cols-2 xl:grid-cols-3`);let o=e(`rue:component:anchor`);i(a,o),p(g(F,{size:`xs`,defaultValue:8,suffix:`xs`}),a,o);let s=e(`rue:component:anchor`);i(a,s),p(g(F,{size:`sm`,defaultValue:16,suffix:`sm`}),a,s);let c=e(`rue:component:anchor`);i(a,c),p(g(F,{size:`md`,defaultValue:24,suffix:`md`}),a,c);let l=e(`rue:component:anchor`);i(a,l),p(g(F,{size:`lg`,defaultValue:32,suffix:`lg`}),a,l);let u=e(`rue:component:anchor`);i(a,u),p(g(F,{size:`xl`,defaultValue:48,suffix:`xl`}),a,u);let d=e(`rue:component:anchor`);return i(a,d),p(g(F,{size:`large`,defaultValue:64,suffix:`large alias`}),a,d),a}),q=[{prop:`value / defaultValue`,description:`受控与非受控值，支持 number，也支持 stringMode 下的字符串值。`,type:`number | string | null`,defaultValue:`-`},{prop:`min / max`,description:`数值上下界；配合 changeOnBlur 时会在失焦后自动归一化。`,type:`number | string`,defaultValue:`MIN_SAFE_INTEGER / MAX_SAFE_INTEGER`},{prop:`step`,description:`每次加减的步长，支持整数与小数。`,type:`number | string`,defaultValue:`1`},{prop:`precision`,description:`控制最终值的小数位数；步进和 blur 归一化都会遵守该精度。`,type:`number`,defaultValue:`-`},{prop:`stringMode`,description:`改为字符串回传，适合高精度金额或链上数量。`,type:`boolean`,defaultValue:`false`},{prop:`formatter`,description:`自定义展示格式，参数里会带上 userTyping 和当前 input 文本。`,type:`(value, info) => string`,defaultValue:`-`},{prop:`parser`,description:`把 formatter 后的文本重新提取为数值，常用于货币、百分比和带单位输入。`,type:`(input: string) => number | string | null | undefined`,defaultValue:`-`},{prop:`controls`,description:`是否展示上下步进按钮，也支持自定义 upIcon / downIcon。`,type:`boolean | { upIcon?: any; downIcon?: any }`,defaultValue:`true`},{prop:`keyboard`,description:`是否启用 ArrowUp / ArrowDown 键盘步进。`,type:`boolean`,defaultValue:`true`},{prop:`changeOnWheel`,description:`聚焦输入框后是否允许用鼠标滚轮调节数值。`,type:`boolean`,defaultValue:`false`},{prop:`changeOnBlur`,description:`失焦后是否按 min / max 和 precision 做归一化。`,type:`boolean`,defaultValue:`true`},{prop:`prefix / suffix`,description:`输入区内部前后缀，可与控件按钮共存。`,type:`any`,defaultValue:`-`},{prop:`addonBefore / addonAfter`,description:`输入框两侧附加区，适合协议、单位、业务标签块。`,type:`any`,defaultValue:`-`},{prop:`variant / status / size / color`,description:`直接复用 Rue Input 的视觉层能力。`,type:`与 Input 一致`,defaultValue:`-`},{prop:`allowClear`,description:`沿用 Rue Input 的清空按钮能力，清空后会回传 null。`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`onChange`,description:`数值变化时触发；stringMode 下返回字符串，否则返回 number；清空返回 null。`,type:`(value: number | string | null) => void`,defaultValue:`-`},{prop:`onStep`,description:`点击控件、键盘或滚轮步进后触发，附带步进来源和偏移量。`,type:`(value, info) => void`,defaultValue:`-`}],ve=()=>{let{tabBasic:a,tabAffix:s,tabFormatter:l,tabPrecision:m,tabControls:v,tabSizes:b}=y(`useSetup:0:0:dup4`,()=>f(()=>({tabBasic:y(`ref:1:9`,()=>h(`preview`)),tabAffix:y(`ref:1:10`,()=>h(`preview`)),tabFormatter:y(`ref:1:11`,()=>h(`preview`)),tabPrecision:y(`ref:1:12`,()=>h(`preview`)),tabControls:y(`ref:1:13`,()=>h(`preview`)),tabSizes:y(`ref:1:14`,()=>h(`preview`))})));return u(f=>{let h=t(),y=e(`rue:component:anchor`);return i(h,y),p(g(C,{children:u(()=>{let u=t(),f=r(`div`,u);i(u,f),n(f,`max-w-none prose prose-sm md:prose-base`);let h=r(`h1`,f);i(f,h),i(h,o(`InputNumber 数字输入`));let y=r(`p`,f);i(f,y),n(y,`text-sm mt-3 mb-3`),i(y,o(`InputNumber 建在 Rue 现有的 Input 视觉壳层之上：保持 prefix、suffix、addon、状态和变体都还是同一套审美，但把数值输入真正需要的 formatter、parser、precision、步进按钮、键盘和滚轮能力一次补齐。`));let x=r(`h2`,f);i(f,x),i(x,o(`何时使用`));let C=r(`ul`,f);i(f,C);let w=r(`li`,C);i(C,w),i(w,o(`需要输入数量、金额、比例、库存、席位等明确数值，而不是自由文本。`));let T=r(`li`,C);i(C,T),i(T,o(`希望同时支持键盘、按钮、滚轮和格式化展示，但不想退回浏览器原生 number input 的不可控体验。`));let E=r(`li`,C);i(C,E),i(E,o(`希望在 Rue Input 的统一视觉下，把数字输入和 prefix、单位、告警状态、add-on 组合起来。`));let O=e(`rue:component:anchor`);i(f,O),_(()=>{let e=g(D,{title:`Basic and bounds`,summary:`基础数值输入、范围约束、无控件模式和禁用态。`,tab:a,preview:()=>S(U,{}),code:`const seats = ref(3)
const stepLog = ref('最近一次步进：等待操作')

<InputNumber
  className="w-full"
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

<InputNumber className="w-full" defaultValue={40} min={0} max={100} controls={false} suffix="pts" />
<InputNumber className="w-full" defaultValue={250} step={25} changeOnBlur={false} suffix="ms" />
<InputNumber className="w-full" defaultValue={24} disabled prefix="QTY" />`});d(()=>p(e,f,O))});let k=e(`rue:component:anchor`);i(f,k),_(()=>{let e=g(D,{title:`Affixes and variants`,summary:`复用 Rue Input 的前后缀、附加区、状态与变体。`,tab:s,preview:()=>S(W,{}),code:`<InputNumber
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
/>`});d(()=>p(e,f,k))});let ee=e(`rue:component:anchor`);i(f,ee),_(()=>{let e=g(D,{title:`Formatter and parser`,summary:`把展示层和数值层拆开，适合货币和百分比。`,tab:l,preview:()=>S(ge,{}),code:`const budget = ref(12800)
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
/>`});d(()=>p(e,f,ee))});let A=e(`rue:component:anchor`);i(f,A),_(()=>{let e=g(D,{title:`Precision and stringMode`,summary:`适合链上数量、高精度金额、手续费等需要字符串回传的场景。`,tab:m,preview:()=>S(_e,{}),code:`const amount = ref('0.1250')
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
/>`});d(()=>p(e,f,A))});let j=e(`rue:component:anchor`);i(f,j),_(()=>{let e=g(D,{title:`Custom controls and wheel`,summary:`支持替换控件图标，并区分来自按钮、键盘还是滚轮的步进来源。`,tab:v,preview:()=>S(G,{}),code:`const throughput = ref(120)
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
/>`});d(()=>p(e,f,j))});let M=e(`rue:component:anchor`);i(f,M),_(()=>{let e=g(D,{title:`Sizes`,summary:`沿用 Rue Input 的尺寸体系，包括 large 别名。`,tab:b,preview:()=>S(K,{}),code:`<InputNumber size="xs" defaultValue={8} suffix="xs" />
<InputNumber size="sm" defaultValue={16} suffix="sm" />
<InputNumber size="md" defaultValue={24} suffix="md" />
<InputNumber size="lg" defaultValue={32} suffix="lg" />
<InputNumber size="xl" defaultValue={48} suffix="xl" />
<InputNumber size="large" defaultValue={64} suffix="large alias" />`});d(()=>p(e,f,M))});let N=r(`h2`,f);i(f,N),c(N,`id`,`input-number-api`),i(N,o(`API`));let te=r(`p`,f);i(f,te),i(te,o(`InputNumber 直接复用了 Rue Input 的视觉 props，同时把数值行为语义补到了同一层。`));let ne=e(`rue:component:anchor`);return i(f,ne),_(()=>{let e=g(he,{rows:q});d(()=>p(e,f,ne))}),u})}),h,y),h})};export{ve as default};
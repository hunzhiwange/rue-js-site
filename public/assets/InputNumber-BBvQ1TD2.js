import{$ as e,Et as t,G as n,H as r,J as i,K as a,Ot as o,Tt as s,W as c,_t as l,d as u,k as d,kt as f,l as p,q as m,st as h,t as g,tt as _,xt as v}from"./vapor-runtime-BAZOdMd8.js";import{a as y,n as b}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as x,t as S}from"./src-DZJ4J6sD.js";import{n as C}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as w}from"./badge-7zWC8IcH.js";import{t as T}from"./fieldset-Df5bJLAJ.js";import{t as E}from"./input-bzAw-a-c.js";import{t as D}from"./PreviewBlock-5K6Tp_o4.js";var O=(...e)=>e.filter(Boolean).join(` `),k=e=>{switch(e){case`small`:return`sm`;case`middle`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(k(e)){case`xs`:return{buttonClassName:`btn-xs w-3.5 rounded-[4px] px-0 text-[10px]`,iconClassName:`size-2`,groupClassName:`gap-0`,suffixClassName:`gap-1`};case`sm`:return{buttonClassName:`btn-xs w-4.5 rounded`,iconClassName:`size-2.5`,groupClassName:`gap-px`,suffixClassName:`gap-1.5`};case`lg`:return{buttonClassName:`btn-sm w-7 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};case`xl`:return{buttonClassName:`btn-sm w-8 rounded-lg`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};default:return{buttonClassName:`btn-xs w-6 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`}}},A=e=>{let t=Number(e);return Number.isFinite(t)?t:void 0},j=e=>Object.is(e,-0)?0:e,M=(e,t)=>{if(typeof t!=`number`||t<0)return j(e);let n=10**t;return j(Math.round(e*n)/n)},N=e=>{if(e==null)return 0;let t=String(e).toLowerCase();if(t.includes(`e-`)){let[e,n]=t.split(`e-`),r=Number(n);return(e.includes(`.`)?e.length-e.indexOf(`.`)-1:0)+r}return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0},te=(e,t)=>{let n=A(e)??-(2**53-1),r=A(t)??2**53-1;return r<n?{min:r,max:n}:{min:n,max:r}},ne=e=>{let t=A(e)??1;return t>0?t:1},re=(e,t,n)=>e<t?t:e>n?n:e,P=(e,t)=>t&&t!==`.`?e.replace(`.`,t):e,ie=(e,t)=>{let n=t===`,`?`,`:`.`,r=(typeof e.normalize==`function`?e.normalize(`NFKC`):e).trim();if(!r)return``;let i=``,a=r;a.startsWith(`-`)&&(i=`-`,a=a.slice(1)),a=a.replace(/-/g,``),a=n===`,`?a.replace(/\./g,``):a.replace(/,/g,``),a=a.replace(n===`,`?/[^0-9,]/g:/[^0-9.]/g,``);let o=a.split(n),s=o.shift()??``,c=o.join(``),l=a.includes(n);return`${i}${s}${l?`.${c}`:``}`},ae=e=>e===`-`||e===`.`||e===`-.`,oe=(e,t,n)=>{if(e==null||e===``)return null;if(typeof e==`number`)return Number.isFinite(e)?t?String(j(e)):j(e):null;let r=ie(String(e),n);if(!r||ae(r))return null;let i=A(r);return i===void 0?null:t?r:j(i)},se=(e,t,n,r)=>{let i=M(e,n);return t?typeof n==`number`&&n>=0?i.toFixed(n):r&&!ae(r)&&A(r)!==void 0?r:String(i):i},ce=(e,t,n)=>{if(e==null)return``;let r;if(typeof e==`string`)if(typeof t==`number`&&t>=0){let n=A(e);r=n===void 0?e:M(n,t).toFixed(t)}else r=e;else{let n=M(e,t);r=typeof t==`number`&&t>=0?n.toFixed(t):String(n)}return P(r,n)},le=(e,t,n)=>{let r=t?t(e):e;if(r==null||r===``)return{display:``,normalized:``,empty:!0,transient:!1};if(typeof r==`number`){if(!Number.isFinite(r))return{display:``,normalized:``,empty:!0,transient:!1};let e=String(j(r));return{display:P(e,n),normalized:e,numeric:j(r),empty:!1,transient:!1}}let i=ie(String(r),n);if(!i)return{display:``,normalized:``,empty:!0,transient:!1};if(ae(i))return{display:P(i,n),normalized:i,empty:!1,transient:!0};let a=A(i);return{display:P(i,n),normalized:i,numeric:a===void 0?void 0:j(a),empty:!1,transient:!1}},ue=(e,t,n,r)=>{if(typeof e!=`function`)return n;let i=e(t,{userTyping:r,input:n});return i==null?n:String(i)},de=(e,t,n,r)=>{let i=10**Math.max(N(e),N(n),r??0);return M((Math.round(e*i)+Math.round(n*i)*t)/i,r)},fe=(e,t,n)=>{let r=e==null?void 0:A(e);return r===void 0?t>0?t:n<0?n:0:r},pe=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 14 5-5 5 5`})}),me=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 10 5 5 5-5`})}),F=({value:e,defaultValue:t,min:n,max:r,step:i=1,precision:a,stringMode:c=!1,keyboard:u=!0,changeOnWheel:f,changeOnBlur:p=!0,controls:m=!0,decimalSeparator:h,formatter:g,parser:_,readOnly:v,disabled:y,size:b,suffix:C,onChange:w,onStep:T,onInput:D,onKeyDown:k,onPressEnter:j,onBlur:P,onFocus:ie,onWheel:ae,onCompositionStart:F,onCompositionEnd:he,...I})=>{let L=s(),R=I.ref,z=l(``),B=l(!1),V=l(!1),H=e!==void 0,U=te(n,r),W=ne(i),ge=l(oe(e,c,h)),_e=l(oe(H?e:t,c,h)),G=l(``),K=l(void 0),q=l(void 0),ve=l(!1);`ref`in I&&delete I.ref;let ye=e=>{if(L.current=e??void 0,typeof R==`function`){R(e);return}R&&typeof R==`object`&&(R.current=e??void 0)},J=()=>H?ge.value:_e.value,be=()=>{let e=J();if(B.value){let t=le(z.value,_,h);return ue(g,t.numeric===void 0?e:se(t.numeric,c,void 0,t.normalized),z.value,!0)}return ue(g,e,ce(e,a,h),!1)},Y=()=>{let e=J(),t=e==null?void 0:A(e),n=be();G.value=n,K.value=t==null?void 0:String(t),q.value=n||void 0},X=(e=!1)=>{let t=L.current;if(!t)return;let n=t.value!==G.value;n&&(t.value=G.value),K.value===void 0?t.removeAttribute(`aria-valuenow`):t.setAttribute(`aria-valuenow`,K.value),q.value===void 0?t.removeAttribute(`aria-valuetext`):t.setAttribute(`aria-valuetext`,q.value),e&&n&&(ve.value=!0,t.dispatchEvent(new Event(`input`,{bubbles:!0})))},Z=e=>{H||(_e.value=e)},xe=e=>{w&&w(e)},Se=e=>{B.value=!0,z.value=e,G.value=e,K.value=void 0,q.value=e||void 0},Ce=e=>{let t=le(e,_,h);if(B.value=!0,z.value=t.display,t.empty)Z(null),xe(null);else if(t.numeric!==void 0){let e=se(t.numeric,c,void 0,t.normalized);Z(e),xe(e)}Y(),X(!1)},we=(e,t)=>{if(e.empty)return Z(null),xe(null),Y(),X(!0),null;if(e.numeric===void 0)return Y(),X(!0),J();let n=e.numeric;n=M(n,a),t&&(n=re(n,U.min,U.max),n=M(n,a));let r=se(n,c,a,e.normalized),i=J();return Z(r),r!==i&&xe(r),Y(),X(!0),r},Q=(e,t)=>{if(y||v)return;let n=le(L.current?.value??z.value,_,h),r=J(),i=se(re(de(n.numeric??fe(r,U.min,U.max),e===`up`?1:-1,W,a),U.min,U.max),c,a);B.value=!1,z.value=ce(i,a,h),Z(i),i!==r&&xe(i),Y(),X(!0),T?.(i,{offset:e===`up`?W:-W,type:e,emitter:t}),L.current?.focus()};o(()=>e,e=>{H&&(ge.value=oe(e,c,h),B.value=!1,Y(),X(!0))},{immediate:!0}),Y(),d(()=>{X(!1)});let Te=m&&typeof m==`object`?m:void 0,Ee=m!==!1&&!y&&!v,$=ee(b),De=Ee?x(`span`,{className:O(`inline-flex shrink-0 self-stretch flex-col`,$.groupClassName),"data-rue-input-number-controls":`true`,children:[S(`button`,{type:`button`,"aria-label":`Increase value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`up`,`handler`),children:Te?.upIcon??S(pe,{className:$.iconClassName})}),S(`button`,{type:`button`,"aria-label":`Decrease value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`down`,`handler`),children:Te?.downIcon??S(me,{className:$.iconClassName})})]}):null,Oe=C!==void 0||De?x(`span`,{className:O(`inline-flex items-center`,$.suffixClassName),children:[C,De]}):void 0;return S(E,{...I,ref:ye,type:`text`,inputMode:I.inputMode??(N(W)>0||a!==void 0?`decimal`:`numeric`),disabled:y,readOnly:v,size:b,suffix:Oe,role:`spinbutton`,"aria-valuemin":String(U.min),"aria-valuemax":String(U.max),value:G.value,"aria-valuenow":K.value,"aria-valuetext":q.value,onInput:e=>{if(ve.value){ve.value=!1;return}let t=e.target?.value??``;if(V.value||e.isComposing){Se(t),D?.(e);return}Ce(t),D?.(e)},onKeyDown:e=>{if(k?.(e),!(e.defaultPrevented||!u)){if(e.key===`ArrowUp`){e.preventDefault?.(),Q(`up`,`keydown`);return}e.key===`ArrowDown`&&(e.preventDefault?.(),Q(`down`,`keydown`))}},onPressEnter:j,onFocus:e=>{Y(),X(!1),ie?.(e)},onCompositionStart:e=>{V.value=!0,Se(e.target?.value??z.value),F?.(e)},onCompositionEnd:e=>{V.value=!1,Ce(e.target?.value??z.value),he?.(e)},onBlur:e=>{let t=e.target,n=le(t?.value??z.value,_,h);V.value=!1,B.value=!1,z.value=n.display,we(n,p),Y(),X(!0),P?.(e)},onWheel:e=>{ae?.(e),!(e.defaultPrevented||!f||y||v||document.activeElement!==L.current)&&e.deltaY!==0&&(e.preventDefault?.(),Q(e.deltaY<0?`up`:`down`,`wheel`))}})},he=t=>u(i=>{let o=a(`div`,i);_(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=a(`table`,o);r(o,s),_(s,`table table-zebra`);let l=a(`thead`,s);r(s,l);let d=a(`tr`,l);r(l,d);let h=a(`th`,d);r(d,h),r(h,m(`属性`));let g=a(`th`,d);r(d,g),r(g,m(`说明`));let y=a(`th`,d);r(d,y),r(y,m(`类型`));let x=a(`th`,d);r(d,x),r(x,m(`默认值`));let S=a(`tbody`,s);r(s,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return f(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,s,l)=>{p(u(()=>{let i=n(),o=a(`tr`,i);r(i,o),f(()=>{e(o,`key`,String(t.prop))});let s=a(`td`,o);r(o,s);let l=a(`code`,s);r(s,l);let u=c(`rue:slot:anchor`);r(l,u),f(()=>{let e=t.prop;v(()=>p(e,l,u))});let d=a(`td`,o);r(o,d);let m=c(`rue:slot:anchor`);r(d,m),f(()=>{let e=t.description;v(()=>p(e,d,m))});let h=a(`td`,o);r(o,h);let g=a(`code`,h);r(h,g);let _=c(`rue:slot:anchor`);r(g,_),f(()=>{let e=t.type;v(()=>p(e,g,_))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=c(`rue:slot:anchor`);return r(b,x),f(()=>{let e=t.defaultValue;v(()=>p(e,b,x))}),i}),i,o)}})}),o}),I=(e,t=0)=>{let n=Number(e);return Number.isFinite(n)?n:t},L=(e,t)=>{if(t.userTyping)return t.input;if(e==null||e===``)return``;let[n,r]=String(e).split(`.`),i=n.replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return r?`\xa5 ${i}.${r}`:`\xa5 ${i}`},R=e=>e.replace(/¥\s?|,/g,``),z=(e,t)=>t.userTyping?t.input:e==null||e===``?``:`${e}%`,B=e=>e.replace(/%/g,``),V=()=>u(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`1.8`),_(n,`size-3`),e(n,`aria-hidden`,`true`);let i=a(`path`,n);return r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M12 5v14M5 12h14`),n}),H=()=>u(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`1.8`),_(n,`size-3`),e(n,`aria-hidden`,`true`);let i=a(`path`,n);return r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M5 12h14`),n}),U=()=>{let{seats:e,stepLog:o}=y(`useSetup:0:0`,()=>t(()=>({seats:y(`ref:1:0`,()=>l(3)),stepLog:y(`ref:1:1`,()=>l(`最近一次步进：等待操作`))})));return u(t=>{let s=a(`div`,t);_(s,`grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]`);let l=a(`div`,s);r(s,l),_(l,`grid gap-4 xl:grid-cols-2`);let d=c(`rue:component:anchor`);r(l,d),p(g(T,{children:u(()=>{let t=n(),i=c(`rue:component:anchor`);r(t,i),p(g(T.Legend,{children:`订阅席位`}),t,i);let a=c(`rue:component:anchor`);r(t,a),f(()=>{let n=g(F,{className:`w-full`,value:e.value,min:1,max:12,onChange:t=>{e.value=I(t,1)},onStep:(e,t)=>{o.value=t.emitter+` / `+t.type+` -> `+String(e)}});v(()=>p(n,t,a))});let s=c(`rue:component:anchor`);return r(t,s),p(g(T.Label,{as:`p`,children:`默认启用控制按钮、方向键和范围约束。`}),t,s),t})}),l,d);let y=c(`rue:component:anchor`);r(l,y),p(g(T,{children:u(()=>{let e=n(),t=c(`rue:component:anchor`);r(e,t),p(g(T.Legend,{children:`积分偏移`}),e,t);let i=c(`rue:component:anchor`);r(e,i),p(g(F,{className:`w-full`,defaultValue:40,min:0,max:100,controls:!1,suffix:`pts`}),e,i);let a=c(`rue:component:anchor`);return r(e,a),p(g(T.Label,{as:`p`,children:`只保留纯输入体验，适合和自定义操作条组合。`}),e,a),e})}),l,y);let b=c(`rue:component:anchor`);r(l,b),p(g(T,{children:u(()=>{let e=n(),t=c(`rue:component:anchor`);r(e,t),p(g(T.Legend,{children:`延迟回写`}),e,t);let i=c(`rue:component:anchor`);r(e,i),p(g(F,{className:`w-full`,defaultValue:250,step:25,changeOnBlur:!1,suffix:`ms`}),e,i);let a=c(`rue:component:anchor`);return r(e,a),p(g(T.Label,{as:`p`,children:`关闭 blur 归一化时，区间外值会继续保留到业务层处理。`}),e,a),e})}),l,b);let x=c(`rue:component:anchor`);r(l,x),p(g(T,{children:u(()=>{let e=n(),t=c(`rue:component:anchor`);r(e,t),p(g(T.Legend,{children:`不可用态`}),e,t);let i=c(`rue:component:anchor`);r(e,i),f(()=>{let t=g(F,{className:`w-full`,defaultValue:24,disabled:!0,prefix:`QTY`});v(()=>p(t,e,i))});let a=c(`rue:component:anchor`);return r(e,a),p(g(T.Label,{as:`p`,children:`禁用时自动收起加减控件，保留 Rue Input 的静态视觉。`}),e,a),e})}),l,x);let S=a(`div`,s);r(s,S),_(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=a(`div`,S);r(S,C),_(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(C,m(`Live summary`));let w=a(`div`,S);r(S,w),_(w,`mt-3 text-4xl font-semibold text-base-content`);let E=i(w);r(w,E),f(()=>{h(E,e.value)});let D=a(`p`,S);r(S,D),_(D,`mt-2 mb-0 text-sm text-base-content/65`),r(D,m(`当前席位。步进时会同步输出交互来源，方便联动库存、价格或配额面板。`));let O=a(`div`,S);r(S,O),_(O,`mt-4 rounded-box bg-base-200/70 p-4 text-sm text-base-content/70`);let k=i(O);return r(O,k),f(()=>{h(k,o.value)}),s})},W=()=>u(e=>{let t=a(`div`,e);_(t,`grid gap-4 md:grid-cols-2`);let n=c(`rue:component:anchor`);r(t,n),p(g(F,{defaultValue:12800,step:100,precision:0,prefix:`￥`,suffix:`CNY`,allowClear:!0}),t,n);let i=c(`rue:component:anchor`);r(t,i),f(()=>{let e=g(F,{defaultValue:18,addonBefore:`APR`,addonAfter:`%`,formatter:z,parser:B});v(()=>p(e,t,i))});let o=c(`rue:component:anchor`);r(t,o),p(g(F,{defaultValue:4.2,precision:1,status:`warning`,variant:`filled`,prefix:`延迟`,suffix:`s`}),t,o);let s=c(`rue:component:anchor`);return r(t,s),p(g(F,{defaultValue:68,status:`error`,variant:`borderless`,addonBefore:`CPU`,addonAfter:`%`}),t,s),t}),ge=()=>{let{budget:e,discount:n}=y(`useSetup:0:0:dup1`,()=>t(()=>({budget:y(`ref:1:2`,()=>l(12800)),discount:y(`ref:1:3`,()=>l(12.5))})));return u(t=>{let o=a(`div`,t);_(o,`grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`);let s=a(`div`,o);r(o,s),_(s,`grid gap-4 md:grid-cols-2`);let l=c(`rue:component:anchor`);r(s,l),f(()=>{let t=g(F,{value:e.value,step:500,precision:0,formatter:L,parser:R,onChange:t=>{e.value=I(t,0)}});v(()=>p(t,s,l))});let u=c(`rue:component:anchor`);r(s,u),f(()=>{let e=g(F,{value:n.value,min:0,max:35,step:.5,precision:1,formatter:z,parser:B,onChange:e=>{n.value=I(e,0)}});v(()=>p(e,s,u))});let d=a(`div`,o);r(o,d),_(d,`rounded-box border border-base-300 bg-base-100 p-5 text-sm`);let y=a(`div`,d);r(d,y),_(y,`flex items-center justify-between gap-3`);let b=a(`div`,y);r(y,b);let x=a(`div`,b);r(b,x),_(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(x,m(`Raw value`));let S=a(`div`,b);r(b,S),_(S,`mt-2 text-lg font-semibold text-base-content`),r(S,m(`¥ `));let C=i(S);r(S,C),f(()=>{h(C,e.value)});let T=c(`rue:component:anchor`);r(y,T),p(g(w,{variant:`neutral`,size:`sm`,children:`parser + formatter`}),y,T);let E=a(`p`,d);r(d,E),_(E,`mt-4 mb-0 text-base-content/65`),r(E,m(`formatter 负责展示层，parser 负责回到数值层。这样可以在不使用原生 number input 的前提下，保留货币、百分比和本地化格式。`));let D=a(`div`,d);r(d,D),_(D,`mt-4 rounded-box bg-base-200/70 p-4`),r(D,m(`折扣后预算：`));let O=a(`strong`,D);r(D,O),r(O,m(`¥ `));let k=i(O);return r(O,k),f(()=>{h(k,(e.value*(100-n.value)/100).toFixed(0))}),o})},_e=()=>{let{amount:e,fee:n,spot:o}=y(`useSetup:0:0:dup2`,()=>t(()=>({amount:y(`ref:1:4`,()=>l(`0.1250`)),fee:y(`ref:1:5`,()=>l(`0.0008`)),spot:y(`ref:1:6`,()=>l(64235.75))})));return u(t=>{let s=a(`div`,t);_(s,`grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`);let l=a(`div`,s);r(s,l),_(l,`grid gap-4 md:grid-cols-2`);let u=c(`rue:component:anchor`);r(l,u),f(()=>{let t=g(F,{value:e.value,stringMode:!0,precision:4,step:`0.0001`,prefix:`BTC`,onChange:t=>{e.value=t==null?`0.0000`:String(t)}});v(()=>p(t,l,u))});let d=c(`rue:component:anchor`);r(l,d),f(()=>{let e=g(F,{value:n.value,stringMode:!0,precision:4,step:`0.0001`,variant:`filled`,prefix:`Fee`,onChange:e=>{n.value=e==null?`0.0000`:String(e)}});v(()=>p(e,l,d))});let y=c(`rue:component:anchor`);r(l,y),f(()=>{let e=g(F,{value:o.value,precision:2,step:25,prefix:`$`,onChange:e=>{o.value=I(e,0)}});v(()=>p(e,l,y))});let b=a(`div`,l);r(l,b),_(b,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let x=a(`div`,b);r(b,x),_(x,`flex items-center justify-between gap-3`);let S=a(`span`,x);r(x,S),r(S,m(`String mode`));let C=c(`rue:component:anchor`);r(x,C),p(g(w,{outline:!0,size:`sm`,children:`保留 4 位小数`}),x,C);let T=a(`div`,b);r(b,T),_(T,`mt-4 text-2xl font-semibold text-base-content`),r(T,m(`$`));let E=i(T);r(T,E),f(()=>{h(E,((I(e.value,0)+I(n.value,0))*o.value).toFixed(2))});let D=a(`p`,b);return r(b,D),_(D,`mt-2 mb-0`),r(D,m(`适合高精度金额、链上数量、保证金比例等需要字符串回传的场景。`)),s})},G=()=>{let{throughput:e,lastStep:n}=y(`useSetup:0:0:dup3`,()=>t(()=>({throughput:y(`ref:1:7`,()=>l(120)),lastStep:y(`ref:1:8`,()=>l(`等待操作`))})));return u(t=>{let o=a(`div`,t);_(o,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`);let s=c(`rue:component:anchor`);r(o,s),f(()=>{let t=g(F,{value:e.value,min:0,max:500,step:25,changeOnWheel:!0,prefix:`QPS`,controls:{upIcon:S(V,{}),downIcon:S(H,{})},onChange:t=>{e.value=I(t,0)},onStep:(e,t)=>{n.value=t.emitter+` / `+t.type+` -> `+String(e)}});v(()=>p(t,o,s))});let l=a(`div`,o);r(o,l),_(l,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let u=a(`div`,l);r(l,u),_(u,`flex flex-wrap gap-2`);let d=c(`rue:component:anchor`);r(u,d),p(g(w,{variant:`neutral`,size:`sm`,children:`ArrowUp / ArrowDown`}),u,d);let y=c(`rue:component:anchor`);r(u,y),p(g(w,{variant:`neutral`,size:`sm`,children:`Mouse Wheel`}),u,y);let b=c(`rue:component:anchor`);r(u,b),p(g(w,{variant:`neutral`,size:`sm`,children:`Custom Icons`}),u,b);let x=a(`div`,l);r(l,x),_(x,`mt-4 text-2xl font-semibold text-base-content`);let C=i(x);r(x,C),f(()=>{h(C,e.value)}),r(x,m(` QPS`));let T=a(`p`,l);r(l,T),_(T,`mt-2 mb-0`),r(T,m(`聚焦输入框后可以直接滚轮增减，也可以复用业务自己的加减图标。`));let E=a(`div`,l);r(l,E),_(E,`mt-4 rounded-box bg-base-200/70 p-4`);let D=i(E);return r(E,D),f(()=>{h(D,n.value)}),o})},K=()=>u(e=>{let t=a(`div`,e);_(t,`grid gap-4 md:grid-cols-2 xl:grid-cols-3`);let n=c(`rue:component:anchor`);r(t,n),p(g(F,{size:`xs`,defaultValue:8,suffix:`xs`}),t,n);let i=c(`rue:component:anchor`);r(t,i),p(g(F,{size:`sm`,defaultValue:16,suffix:`sm`}),t,i);let o=c(`rue:component:anchor`);r(t,o),p(g(F,{size:`md`,defaultValue:24,suffix:`md`}),t,o);let s=c(`rue:component:anchor`);r(t,s),p(g(F,{size:`lg`,defaultValue:32,suffix:`lg`}),t,s);let l=c(`rue:component:anchor`);r(t,l),p(g(F,{size:`xl`,defaultValue:48,suffix:`xl`}),t,l);let u=c(`rue:component:anchor`);return r(t,u),p(g(F,{size:`large`,defaultValue:64,suffix:`large alias`}),t,u),t}),q=[{prop:`value / defaultValue`,description:`受控与非受控值，支持 number，也支持 stringMode 下的字符串值。`,type:`number | string | null`,defaultValue:`-`},{prop:`min / max`,description:`数值上下界；配合 changeOnBlur 时会在失焦后自动归一化。`,type:`number | string`,defaultValue:`MIN_SAFE_INTEGER / MAX_SAFE_INTEGER`},{prop:`step`,description:`每次加减的步长，支持整数与小数。`,type:`number | string`,defaultValue:`1`},{prop:`precision`,description:`控制最终值的小数位数；步进和 blur 归一化都会遵守该精度。`,type:`number`,defaultValue:`-`},{prop:`stringMode`,description:`改为字符串回传，适合高精度金额或链上数量。`,type:`boolean`,defaultValue:`false`},{prop:`formatter`,description:`自定义展示格式，参数里会带上 userTyping 和当前 input 文本。`,type:`(value, info) => string`,defaultValue:`-`},{prop:`parser`,description:`把 formatter 后的文本重新提取为数值，常用于货币、百分比和带单位输入。`,type:`(input: string) => number | string | null | undefined`,defaultValue:`-`},{prop:`controls`,description:`是否展示上下步进按钮，也支持自定义 upIcon / downIcon。`,type:`boolean | { upIcon?: any; downIcon?: any }`,defaultValue:`true`},{prop:`keyboard`,description:`是否启用 ArrowUp / ArrowDown 键盘步进。`,type:`boolean`,defaultValue:`true`},{prop:`changeOnWheel`,description:`聚焦输入框后是否允许用鼠标滚轮调节数值。`,type:`boolean`,defaultValue:`false`},{prop:`changeOnBlur`,description:`失焦后是否按 min / max 和 precision 做归一化。`,type:`boolean`,defaultValue:`true`},{prop:`prefix / suffix`,description:`输入区内部前后缀，可与控件按钮共存。`,type:`any`,defaultValue:`-`},{prop:`addonBefore / addonAfter`,description:`输入框两侧附加区，适合协议、单位、业务标签块。`,type:`any`,defaultValue:`-`},{prop:`variant / status / size / color`,description:`直接复用 Rue Input 的视觉层能力。`,type:`与 Input 一致`,defaultValue:`-`},{prop:`allowClear`,description:`沿用 Rue Input 的清空按钮能力，清空后会回传 null。`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`onChange`,description:`数值变化时触发；stringMode 下返回字符串，否则返回 number；清空返回 null。`,type:`(value: number | string | null) => void`,defaultValue:`-`},{prop:`onStep`,description:`点击控件、键盘或滚轮步进后触发，附带步进来源和偏移量。`,type:`(value, info) => void`,defaultValue:`-`}],ve=()=>{let{tabBasic:i,tabAffix:o,tabFormatter:s,tabPrecision:d,tabControls:h,tabSizes:b}=y(`useSetup:0:0:dup4`,()=>t(()=>({tabBasic:y(`ref:1:9`,()=>l(`preview`)),tabAffix:y(`ref:1:10`,()=>l(`preview`)),tabFormatter:y(`ref:1:11`,()=>l(`preview`)),tabPrecision:y(`ref:1:12`,()=>l(`preview`)),tabControls:y(`ref:1:13`,()=>l(`preview`)),tabSizes:y(`ref:1:14`,()=>l(`preview`))})));return u(t=>{let l=n(),y=c(`rue:component:anchor`);return r(l,y),p(g(C,{children:u(()=>{let t=n(),l=a(`div`,t);r(t,l),_(l,`max-w-none prose prose-sm md:prose-base`);let u=a(`h1`,l);r(l,u),r(u,m(`InputNumber 数字输入`));let y=a(`p`,l);r(l,y),_(y,`text-sm mt-3 mb-3`),r(y,m(`InputNumber 建在 Rue 现有的 Input 视觉壳层之上：保持 prefix、suffix、addon、状态和变体都还是同一套审美，但把数值输入真正需要的 formatter、parser、precision、步进按钮、键盘和滚轮能力一次补齐。`));let x=a(`h2`,l);r(l,x),r(x,m(`何时使用`));let C=a(`ul`,l);r(l,C);let w=a(`li`,C);r(C,w),r(w,m(`需要输入数量、金额、比例、库存、席位等明确数值，而不是自由文本。`));let T=a(`li`,C);r(C,T),r(T,m(`希望同时支持键盘、按钮、滚轮和格式化展示，但不想退回浏览器原生 number input 的不可控体验。`));let E=a(`li`,C);r(C,E),r(E,m(`希望在 Rue Input 的统一视觉下，把数字输入和 prefix、单位、告警状态、add-on 组合起来。`));let O=c(`rue:component:anchor`);r(l,O),f(()=>{let e=g(D,{title:`Basic and bounds`,summary:`基础数值输入、范围约束、无控件模式和禁用态。`,tab:i,preview:()=>S(U,{}),code:`const seats = ref(3)
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
<InputNumber className="w-full" defaultValue={24} disabled prefix="QTY" />`});v(()=>p(e,l,O))});let k=c(`rue:component:anchor`);r(l,k),f(()=>{let e=g(D,{title:`Affixes and variants`,summary:`复用 Rue Input 的前后缀、附加区、状态与变体。`,tab:o,preview:()=>S(W,{}),code:`<InputNumber
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
/>`});v(()=>p(e,l,k))});let ee=c(`rue:component:anchor`);r(l,ee),f(()=>{let e=g(D,{title:`Formatter and parser`,summary:`把展示层和数值层拆开，适合货币和百分比。`,tab:s,preview:()=>S(ge,{}),code:`const budget = ref(12800)
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
/>`});v(()=>p(e,l,ee))});let A=c(`rue:component:anchor`);r(l,A),f(()=>{let e=g(D,{title:`Precision and stringMode`,summary:`适合链上数量、高精度金额、手续费等需要字符串回传的场景。`,tab:d,preview:()=>S(_e,{}),code:`const amount = ref('0.1250')
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
/>`});v(()=>p(e,l,A))});let j=c(`rue:component:anchor`);r(l,j),f(()=>{let e=g(D,{title:`Custom controls and wheel`,summary:`支持替换控件图标，并区分来自按钮、键盘还是滚轮的步进来源。`,tab:h,preview:()=>S(G,{}),code:`const throughput = ref(120)
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
/>`});v(()=>p(e,l,j))});let M=c(`rue:component:anchor`);r(l,M),f(()=>{let e=g(D,{title:`Sizes`,summary:`沿用 Rue Input 的尺寸体系，包括 large 别名。`,tab:b,preview:()=>S(K,{}),code:`<InputNumber size="xs" defaultValue={8} suffix="xs" />
<InputNumber size="sm" defaultValue={16} suffix="sm" />
<InputNumber size="md" defaultValue={24} suffix="md" />
<InputNumber size="lg" defaultValue={32} suffix="lg" />
<InputNumber size="xl" defaultValue={48} suffix="xl" />
<InputNumber size="large" defaultValue={64} suffix="large alias" />`});v(()=>p(e,l,M))});let N=a(`h2`,l);r(l,N),e(N,`id`,`input-number-api`),r(N,m(`API`));let te=a(`p`,l);r(l,te),r(te,m(`InputNumber 直接复用了 Rue Input 的视觉 props，同时把数值行为语义补到了同一层。`));let ne=c(`rue:component:anchor`);return r(l,ne),f(()=>{let e=g(he,{rows:q});v(()=>p(e,l,ne))}),t})}),l,y),l})};export{ve as default};
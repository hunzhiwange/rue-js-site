import{$ as e,B as t,Ct as n,D as r,Dt as i,Et as a,G as o,H as s,K as c,U as l,W as u,Z as d,at as f,ht as p,l as m,s as h,t as g,wt as _,yt as v}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as b}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as x,t as S}from"./src-BLzF0BqW.js";import{n as C}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as w}from"./badge-brlKCV7x.js";import{t as T}from"./fieldset-mezqiGsv.js";import{t as E}from"./input-B3nHDIiJ.js";import{t as D}from"./PreviewBlock-CfdDuiov.js";var O=(...e)=>e.filter(Boolean).join(` `),k=e=>{switch(e){case`small`:return`sm`;case`middle`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(k(e)){case`xs`:return{buttonClassName:`btn-xs w-3.5 rounded-[4px] px-0 text-[10px]`,iconClassName:`size-2`,groupClassName:`gap-0`,suffixClassName:`gap-1`};case`sm`:return{buttonClassName:`btn-xs w-4.5 rounded`,iconClassName:`size-2.5`,groupClassName:`gap-px`,suffixClassName:`gap-1.5`};case`lg`:return{buttonClassName:`btn-sm w-7 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};case`xl`:return{buttonClassName:`btn-sm w-8 rounded-lg`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};default:return{buttonClassName:`btn-xs w-6 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`}}},A=e=>{let t=Number(e);return Number.isFinite(t)?t:void 0},j=e=>Object.is(e,-0)?0:e,M=(e,t)=>{if(typeof t!=`number`||t<0)return j(e);let n=10**t;return j(Math.round(e*n)/n)},N=e=>{if(e==null)return 0;let t=String(e).toLowerCase();if(t.includes(`e-`)){let[e,n]=t.split(`e-`),r=Number(n);return(e.includes(`.`)?e.length-e.indexOf(`.`)-1:0)+r}return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0},te=(e,t)=>{let n=A(e)??-(2**53-1),r=A(t)??2**53-1;return r<n?{min:r,max:n}:{min:n,max:r}},ne=e=>{let t=A(e)??1;return t>0?t:1},re=(e,t,n)=>e<t?t:e>n?n:e,P=(e,t)=>t&&t!==`.`?e.replace(`.`,t):e,ie=(e,t)=>{let n=t===`,`?`,`:`.`,r=(typeof e.normalize==`function`?e.normalize(`NFKC`):e).trim();if(!r)return``;let i=``,a=r;a.startsWith(`-`)&&(i=`-`,a=a.slice(1)),a=a.replace(/-/g,``),a=n===`,`?a.replace(/\./g,``):a.replace(/,/g,``),a=a.replace(n===`,`?/[^0-9,]/g:/[^0-9.]/g,``);let o=a.split(n),s=o.shift()??``,c=o.join(``),l=a.includes(n);return`${i}${s}${l?`.${c}`:``}`},ae=e=>e===`-`||e===`.`||e===`-.`,oe=(e,t,n)=>{if(e==null||e===``)return null;if(typeof e==`number`)return Number.isFinite(e)?t?String(j(e)):j(e):null;let r=ie(String(e),n);if(!r||ae(r))return null;let i=A(r);return i===void 0?null:t?r:j(i)},se=(e,t,n,r)=>{let i=M(e,n);return t?typeof n==`number`&&n>=0?i.toFixed(n):r&&!ae(r)&&A(r)!==void 0?r:String(i):i},ce=(e,t,n)=>{if(e==null)return``;let r;if(typeof e==`string`)if(typeof t==`number`&&t>=0){let n=A(e);r=n===void 0?e:M(n,t).toFixed(t)}else r=e;else{let n=M(e,t);r=typeof t==`number`&&t>=0?n.toFixed(t):String(n)}return P(r,n)},le=(e,t,n)=>{let r=t?t(e):e;if(r==null||r===``)return{display:``,normalized:``,empty:!0,transient:!1};if(typeof r==`number`){if(!Number.isFinite(r))return{display:``,normalized:``,empty:!0,transient:!1};let e=String(j(r));return{display:P(e,n),normalized:e,numeric:j(r),empty:!1,transient:!1}}let i=ie(String(r),n);if(!i)return{display:``,normalized:``,empty:!0,transient:!1};if(ae(i))return{display:P(i,n),normalized:i,empty:!1,transient:!0};let a=A(i);return{display:P(i,n),normalized:i,numeric:a===void 0?void 0:j(a),empty:!1,transient:!1}},ue=(e,t,n,r)=>{if(typeof e!=`function`)return n;let i=e(t,{userTyping:r,input:n});return i==null?n:String(i)},de=(e,t,n,r)=>{let i=10**Math.max(N(e),N(n),r??0);return M((Math.round(e*i)+Math.round(n*i)*t)/i,r)},fe=(e,t,n)=>{let r=e==null?void 0:A(e);return r===void 0?t>0?t:n<0?n:0:r},pe=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 14 5-5 5 5`})}),me=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 10 5 5 5-5`})}),F=({value:e,defaultValue:t,min:i,max:o,step:s=1,precision:c,stringMode:l=!1,keyboard:u=!0,changeOnWheel:d,changeOnBlur:f=!0,controls:m=!0,decimalSeparator:h,formatter:g,parser:_,readOnly:v,disabled:y,size:b,suffix:C,onChange:w,onStep:T,onInput:D,onKeyDown:k,onPressEnter:j,onBlur:P,onFocus:ie,onWheel:ae,onCompositionStart:F,onCompositionEnd:he,...I})=>{let L=n(),R=I.ref,z=p(``),B=p(!1),V=p(!1),H=e!==void 0,U=te(i,o),W=ne(s),ge=p(oe(e,l,h)),_e=p(oe(H?e:t,l,h)),G=p(``),K=p(void 0),q=p(void 0),ve=p(!1);`ref`in I&&delete I.ref;let ye=e=>{if(L.current=e??void 0,typeof R==`function`){R(e);return}R&&typeof R==`object`&&(R.current=e??void 0)},J=()=>H?ge.value:_e.value,be=()=>{let e=J();if(B.value){let t=le(z.value,_,h);return ue(g,t.numeric===void 0?e:se(t.numeric,l,void 0,t.normalized),z.value,!0)}return ue(g,e,ce(e,c,h),!1)},Y=()=>{let e=J(),t=e==null?void 0:A(e),n=be();G.value=n,K.value=t==null?void 0:String(t),q.value=n||void 0},X=(e=!1)=>{let t=L.current;if(!t)return;let n=t.value!==G.value;n&&(t.value=G.value),K.value===void 0?t.removeAttribute(`aria-valuenow`):t.setAttribute(`aria-valuenow`,K.value),q.value===void 0?t.removeAttribute(`aria-valuetext`):t.setAttribute(`aria-valuetext`,q.value),e&&n&&(ve.value=!0,t.dispatchEvent(new Event(`input`,{bubbles:!0})))},Z=e=>{H||(_e.value=e)},xe=e=>{w&&w(e)},Se=e=>{B.value=!0,z.value=e,G.value=e,K.value=void 0,q.value=e||void 0},Ce=e=>{let t=le(e,_,h);if(B.value=!0,z.value=t.display,t.empty)Z(null),xe(null);else if(t.numeric!==void 0){let e=se(t.numeric,l,void 0,t.normalized);Z(e),xe(e)}Y(),X(!1)},we=(e,t)=>{if(e.empty)return Z(null),xe(null),Y(),X(!0),null;if(e.numeric===void 0)return Y(),X(!0),J();let n=e.numeric;n=M(n,c),t&&(n=re(n,U.min,U.max),n=M(n,c));let r=se(n,l,c,e.normalized),i=J();return Z(r),r!==i&&xe(r),Y(),X(!0),r},Q=(e,t)=>{if(y||v)return;let n=le(L.current?.value??z.value,_,h),r=J(),i=se(re(de(n.numeric??fe(r,U.min,U.max),e===`up`?1:-1,W,c),U.min,U.max),l,c);B.value=!1,z.value=ce(i,c,h),Z(i),i!==r&&xe(i),Y(),X(!0),T?.(i,{offset:e===`up`?W:-W,type:e,emitter:t}),L.current?.focus()};a(()=>e,e=>{H&&(ge.value=oe(e,l,h),B.value=!1,Y(),X(!0))},{immediate:!0}),Y(),r(()=>{X(!1)});let Te=m&&typeof m==`object`?m:void 0,Ee=m!==!1&&!y&&!v,$=ee(b),De=Ee?x(`span`,{className:O(`inline-flex shrink-0 self-stretch flex-col`,$.groupClassName),"data-rue-input-number-controls":`true`,children:[S(`button`,{type:`button`,"aria-label":`Increase value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`up`,`handler`),children:Te?.upIcon??S(pe,{className:$.iconClassName})}),S(`button`,{type:`button`,"aria-label":`Decrease value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`down`,`handler`),children:Te?.downIcon??S(me,{className:$.iconClassName})})]}):null,Oe=C!==void 0||De?x(`span`,{className:O(`inline-flex items-center`,$.suffixClassName),children:[C,De]}):void 0;return S(E,{...I,ref:ye,type:`text`,inputMode:I.inputMode??(N(W)>0||c!==void 0?`decimal`:`numeric`),disabled:y,readOnly:v,size:b,suffix:Oe,role:`spinbutton`,"aria-valuemin":String(U.min),"aria-valuemax":String(U.max),value:G.value,"aria-valuenow":K.value,"aria-valuetext":q.value,onInput:e=>{if(ve.value){ve.value=!1;return}let t=e.target?.value??``;if(V.value||e.isComposing){Se(t),D?.(e);return}Ce(t),D?.(e)},onKeyDown:e=>{if(k?.(e),!(e.defaultPrevented||!u)){if(e.key===`ArrowUp`){e.preventDefault?.(),Q(`up`,`keydown`);return}e.key===`ArrowDown`&&(e.preventDefault?.(),Q(`down`,`keydown`))}},onPressEnter:j,onFocus:e=>{Y(),X(!1),ie?.(e)},onCompositionStart:e=>{V.value=!0,Se(e.target?.value??z.value),F?.(e)},onCompositionEnd:e=>{V.value=!1,Ce(e.target?.value??z.value),he?.(e)},onBlur:e=>{let t=e.target,n=le(t?.value??z.value,_,h);V.value=!1,B.value=!1,z.value=n.display,we(n,f),Y(),X(!0),P?.(e)},onWheel:e=>{ae?.(e),!(e.defaultPrevented||!d||y||v||document.activeElement!==L.current)&&e.deltaY!==0&&(e.preventDefault?.(),Q(e.deltaY<0?`up`:`down`,`wheel`))}})},he=n=>m(r=>{let a=u(`div`,r);e(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=u(`table`,a);t(a,c),e(c,`table table-zebra`);let f=u(`thead`,c);t(c,f);let p=u(`tr`,f);t(f,p);let g=u(`th`,p);t(p,g),t(g,o(`属性`));let _=u(`th`,p);t(p,_),t(_,o(`说明`));let y=u(`th`,p);t(p,y),t(y,o(`类型`));let x=u(`th`,p);t(p,x),t(x,o(`默认值`));let S=u(`tbody`,c);t(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return i(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,a,o)=>{h(m(()=>{let n=l(),r=u(`tr`,n);t(n,r),i(()=>{d(r,`key`,String(e.prop))});let a=u(`td`,r);t(r,a);let o=u(`code`,a);t(a,o);let c=s(`rue:slot:anchor`);t(o,c),i(()=>{let t=e.prop;v(()=>h(t,o,c))});let f=u(`td`,r);t(r,f);let p=s(`rue:slot:anchor`);t(f,p),i(()=>{let t=e.description;v(()=>h(t,f,p))});let m=u(`td`,r);t(r,m);let g=u(`code`,m);t(m,g);let _=s(`rue:slot:anchor`);t(g,_),i(()=>{let t=e.type;v(()=>h(t,g,_))});let y=u(`td`,r);t(r,y);let b=u(`code`,y);t(y,b);let x=s(`rue:slot:anchor`);return t(b,x),i(()=>{let t=e.defaultValue;v(()=>h(t,b,x))}),n}),n,r)}})}),a}),I=(e,t=0)=>{let n=Number(e);return Number.isFinite(n)?n:t},L=(e,t)=>{if(t.userTyping)return t.input;if(e==null||e===``)return``;let[n,r]=String(e).split(`.`),i=n.replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return r?`\xa5 ${i}.${r}`:`\xa5 ${i}`},R=e=>e.replace(/¥\s?|,/g,``),z=(e,t)=>t.userTyping?t.input:e==null||e===``?``:`${e}%`,B=e=>e.replace(/%/g,``),V=()=>m(n=>{let r=u(`svg`,n);d(r,`xmlns`,`http://www.w3.org/2000/svg`),d(r,`viewBox`,`0 0 24 24`),d(r,`fill`,`none`),d(r,`stroke`,`currentColor`),d(r,`strokeWidth`,`1.8`),e(r,`size-3`),d(r,`aria-hidden`,`true`);let i=u(`path`,r);return t(r,i),d(i,`strokeLinecap`,`round`),d(i,`strokeLinejoin`,`round`),d(i,`d`,`M12 5v14M5 12h14`),r}),H=()=>m(n=>{let r=u(`svg`,n);d(r,`xmlns`,`http://www.w3.org/2000/svg`),d(r,`viewBox`,`0 0 24 24`),d(r,`fill`,`none`),d(r,`stroke`,`currentColor`),d(r,`strokeWidth`,`1.8`),e(r,`size-3`),d(r,`aria-hidden`,`true`);let i=u(`path`,r);return t(r,i),d(i,`strokeLinecap`,`round`),d(i,`strokeLinejoin`,`round`),d(i,`d`,`M5 12h14`),r}),U=()=>{let{seats:n,stepLog:r}=y(`useSetup:0:0`,()=>_(()=>({seats:y(`ref:1:0`,()=>p(3)),stepLog:y(`ref:1:1`,()=>p(`最近一次步进：等待操作`))})));return m(a=>{let d=u(`div`,a);e(d,`grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]`);let p=u(`div`,d);t(d,p),e(p,`grid gap-4 xl:grid-cols-2`);let _=s(`rue:component:anchor`);t(p,_),h(g(T,{children:m(()=>{let e=l(),a=s(`rue:component:anchor`);t(e,a),h(g(T.Legend,{children:`订阅席位`}),e,a);let o=s(`rue:component:anchor`);t(e,o),i(()=>{let t=g(F,{className:`w-full`,value:n.value,min:1,max:12,onChange:e=>{n.value=I(e,1)},onStep:(e,t)=>{r.value=t.emitter+` / `+t.type+` -> `+String(e)}});v(()=>h(t,e,o))});let c=s(`rue:component:anchor`);return t(e,c),h(g(T.Label,{as:`p`,children:`默认启用控制按钮、方向键和范围约束。`}),e,c),e})}),p,_);let y=s(`rue:component:anchor`);t(p,y),h(g(T,{children:m(()=>{let e=l(),n=s(`rue:component:anchor`);t(e,n),h(g(T.Legend,{children:`积分偏移`}),e,n);let r=s(`rue:component:anchor`);t(e,r),h(g(F,{className:`w-full`,defaultValue:40,min:0,max:100,controls:!1,suffix:`pts`}),e,r);let i=s(`rue:component:anchor`);return t(e,i),h(g(T.Label,{as:`p`,children:`只保留纯输入体验，适合和自定义操作条组合。`}),e,i),e})}),p,y);let b=s(`rue:component:anchor`);t(p,b),h(g(T,{children:m(()=>{let e=l(),n=s(`rue:component:anchor`);t(e,n),h(g(T.Legend,{children:`延迟回写`}),e,n);let r=s(`rue:component:anchor`);t(e,r),h(g(F,{className:`w-full`,defaultValue:250,step:25,changeOnBlur:!1,suffix:`ms`}),e,r);let i=s(`rue:component:anchor`);return t(e,i),h(g(T.Label,{as:`p`,children:`关闭 blur 归一化时，区间外值会继续保留到业务层处理。`}),e,i),e})}),p,b);let x=s(`rue:component:anchor`);t(p,x),h(g(T,{children:m(()=>{let e=l(),n=s(`rue:component:anchor`);t(e,n),h(g(T.Legend,{children:`不可用态`}),e,n);let r=s(`rue:component:anchor`);t(e,r),i(()=>{let t=g(F,{className:`w-full`,defaultValue:24,disabled:!0,prefix:`QTY`});v(()=>h(t,e,r))});let a=s(`rue:component:anchor`);return t(e,a),h(g(T.Label,{as:`p`,children:`禁用时自动收起加减控件，保留 Rue Input 的静态视觉。`}),e,a),e})}),p,x);let S=u(`div`,d);t(d,S),e(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=u(`div`,S);t(S,C),e(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),t(C,o(`Live summary`));let w=u(`div`,S);t(S,w),e(w,`mt-3 text-4xl font-semibold text-base-content`);let E=c(w);t(w,E),i(()=>{f(E,n.value)});let D=u(`p`,S);t(S,D),e(D,`mt-2 mb-0 text-sm text-base-content/65`),t(D,o(`当前席位。步进时会同步输出交互来源，方便联动库存、价格或配额面板。`));let O=u(`div`,S);t(S,O),e(O,`mt-4 rounded-box bg-base-200/70 p-4 text-sm text-base-content/70`);let k=c(O);return t(O,k),i(()=>{f(k,r.value)}),d})},W=()=>m(n=>{let r=u(`div`,n);e(r,`grid gap-4 md:grid-cols-2`);let a=s(`rue:component:anchor`);t(r,a),h(g(F,{defaultValue:12800,step:100,precision:0,prefix:`￥`,suffix:`CNY`,allowClear:!0}),r,a);let o=s(`rue:component:anchor`);t(r,o),i(()=>{let e=g(F,{defaultValue:18,addonBefore:`APR`,addonAfter:`%`,formatter:z,parser:B});v(()=>h(e,r,o))});let c=s(`rue:component:anchor`);t(r,c),h(g(F,{defaultValue:4.2,precision:1,status:`warning`,variant:`filled`,prefix:`延迟`,suffix:`s`}),r,c);let l=s(`rue:component:anchor`);return t(r,l),h(g(F,{defaultValue:68,status:`error`,variant:`borderless`,addonBefore:`CPU`,addonAfter:`%`}),r,l),r}),ge=()=>{let{budget:n,discount:r}=y(`useSetup:0:0:dup1`,()=>_(()=>({budget:y(`ref:1:2`,()=>p(12800)),discount:y(`ref:1:3`,()=>p(12.5))})));return m(a=>{let l=u(`div`,a);e(l,`grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`);let d=u(`div`,l);t(l,d),e(d,`grid gap-4 md:grid-cols-2`);let p=s(`rue:component:anchor`);t(d,p),i(()=>{let e=g(F,{value:n.value,step:500,precision:0,formatter:L,parser:R,onChange:e=>{n.value=I(e,0)}});v(()=>h(e,d,p))});let m=s(`rue:component:anchor`);t(d,m),i(()=>{let e=g(F,{value:r.value,min:0,max:35,step:.5,precision:1,formatter:z,parser:B,onChange:e=>{r.value=I(e,0)}});v(()=>h(e,d,m))});let _=u(`div`,l);t(l,_),e(_,`rounded-box border border-base-300 bg-base-100 p-5 text-sm`);let y=u(`div`,_);t(_,y),e(y,`flex items-center justify-between gap-3`);let b=u(`div`,y);t(y,b);let x=u(`div`,b);t(b,x),e(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),t(x,o(`Raw value`));let S=u(`div`,b);t(b,S),e(S,`mt-2 text-lg font-semibold text-base-content`),t(S,o(`¥ `));let C=c(S);t(S,C),i(()=>{f(C,n.value)});let T=s(`rue:component:anchor`);t(y,T),h(g(w,{variant:`neutral`,size:`sm`,children:`parser + formatter`}),y,T);let E=u(`p`,_);t(_,E),e(E,`mt-4 mb-0 text-base-content/65`),t(E,o(`formatter 负责展示层，parser 负责回到数值层。这样可以在不使用原生 number input 的前提下，保留货币、百分比和本地化格式。`));let D=u(`div`,_);t(_,D),e(D,`mt-4 rounded-box bg-base-200/70 p-4`),t(D,o(`折扣后预算：`));let O=u(`strong`,D);t(D,O),t(O,o(`¥ `));let k=c(O);return t(O,k),i(()=>{f(k,(n.value*(100-r.value)/100).toFixed(0))}),l})},_e=()=>{let{amount:n,fee:r,spot:a}=y(`useSetup:0:0:dup2`,()=>_(()=>({amount:y(`ref:1:4`,()=>p(`0.1250`)),fee:y(`ref:1:5`,()=>p(`0.0008`)),spot:y(`ref:1:6`,()=>p(64235.75))})));return m(l=>{let d=u(`div`,l);e(d,`grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`);let p=u(`div`,d);t(d,p),e(p,`grid gap-4 md:grid-cols-2`);let m=s(`rue:component:anchor`);t(p,m),i(()=>{let e=g(F,{value:n.value,stringMode:!0,precision:4,step:`0.0001`,prefix:`BTC`,onChange:e=>{n.value=e==null?`0.0000`:String(e)}});v(()=>h(e,p,m))});let _=s(`rue:component:anchor`);t(p,_),i(()=>{let e=g(F,{value:r.value,stringMode:!0,precision:4,step:`0.0001`,variant:`filled`,prefix:`Fee`,onChange:e=>{r.value=e==null?`0.0000`:String(e)}});v(()=>h(e,p,_))});let y=s(`rue:component:anchor`);t(p,y),i(()=>{let e=g(F,{value:a.value,precision:2,step:25,prefix:`$`,onChange:e=>{a.value=I(e,0)}});v(()=>h(e,p,y))});let b=u(`div`,p);t(p,b),e(b,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let x=u(`div`,b);t(b,x),e(x,`flex items-center justify-between gap-3`);let S=u(`span`,x);t(x,S),t(S,o(`String mode`));let C=s(`rue:component:anchor`);t(x,C),h(g(w,{outline:!0,size:`sm`,children:`保留 4 位小数`}),x,C);let T=u(`div`,b);t(b,T),e(T,`mt-4 text-2xl font-semibold text-base-content`),t(T,o(`$`));let E=c(T);t(T,E),i(()=>{f(E,((I(n.value,0)+I(r.value,0))*a.value).toFixed(2))});let D=u(`p`,b);return t(b,D),e(D,`mt-2 mb-0`),t(D,o(`适合高精度金额、链上数量、保证金比例等需要字符串回传的场景。`)),d})},G=()=>{let{throughput:n,lastStep:r}=y(`useSetup:0:0:dup3`,()=>_(()=>({throughput:y(`ref:1:7`,()=>p(120)),lastStep:y(`ref:1:8`,()=>p(`等待操作`))})));return m(a=>{let l=u(`div`,a);e(l,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`);let d=s(`rue:component:anchor`);t(l,d),i(()=>{let e=g(F,{value:n.value,min:0,max:500,step:25,changeOnWheel:!0,prefix:`QPS`,controls:{upIcon:S(V,{}),downIcon:S(H,{})},onChange:e=>{n.value=I(e,0)},onStep:(e,t)=>{r.value=t.emitter+` / `+t.type+` -> `+String(e)}});v(()=>h(e,l,d))});let p=u(`div`,l);t(l,p),e(p,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let m=u(`div`,p);t(p,m),e(m,`flex flex-wrap gap-2`);let _=s(`rue:component:anchor`);t(m,_),h(g(w,{variant:`neutral`,size:`sm`,children:`ArrowUp / ArrowDown`}),m,_);let y=s(`rue:component:anchor`);t(m,y),h(g(w,{variant:`neutral`,size:`sm`,children:`Mouse Wheel`}),m,y);let b=s(`rue:component:anchor`);t(m,b),h(g(w,{variant:`neutral`,size:`sm`,children:`Custom Icons`}),m,b);let x=u(`div`,p);t(p,x),e(x,`mt-4 text-2xl font-semibold text-base-content`);let C=c(x);t(x,C),i(()=>{f(C,n.value)}),t(x,o(` QPS`));let T=u(`p`,p);t(p,T),e(T,`mt-2 mb-0`),t(T,o(`聚焦输入框后可以直接滚轮增减，也可以复用业务自己的加减图标。`));let E=u(`div`,p);t(p,E),e(E,`mt-4 rounded-box bg-base-200/70 p-4`);let D=c(E);return t(E,D),i(()=>{f(D,r.value)}),l})},K=()=>m(n=>{let r=u(`div`,n);e(r,`grid gap-4 md:grid-cols-2 xl:grid-cols-3`);let i=s(`rue:component:anchor`);t(r,i),h(g(F,{size:`xs`,defaultValue:8,suffix:`xs`}),r,i);let a=s(`rue:component:anchor`);t(r,a),h(g(F,{size:`sm`,defaultValue:16,suffix:`sm`}),r,a);let o=s(`rue:component:anchor`);t(r,o),h(g(F,{size:`md`,defaultValue:24,suffix:`md`}),r,o);let c=s(`rue:component:anchor`);t(r,c),h(g(F,{size:`lg`,defaultValue:32,suffix:`lg`}),r,c);let l=s(`rue:component:anchor`);t(r,l),h(g(F,{size:`xl`,defaultValue:48,suffix:`xl`}),r,l);let d=s(`rue:component:anchor`);return t(r,d),h(g(F,{size:`large`,defaultValue:64,suffix:`large alias`}),r,d),r}),q=[{prop:`value / defaultValue`,description:`受控与非受控值，支持 number，也支持 stringMode 下的字符串值。`,type:`number | string | null`,defaultValue:`-`},{prop:`min / max`,description:`数值上下界；配合 changeOnBlur 时会在失焦后自动归一化。`,type:`number | string`,defaultValue:`MIN_SAFE_INTEGER / MAX_SAFE_INTEGER`},{prop:`step`,description:`每次加减的步长，支持整数与小数。`,type:`number | string`,defaultValue:`1`},{prop:`precision`,description:`控制最终值的小数位数；步进和 blur 归一化都会遵守该精度。`,type:`number`,defaultValue:`-`},{prop:`stringMode`,description:`改为字符串回传，适合高精度金额或链上数量。`,type:`boolean`,defaultValue:`false`},{prop:`formatter`,description:`自定义展示格式，参数里会带上 userTyping 和当前 input 文本。`,type:`(value, info) => string`,defaultValue:`-`},{prop:`parser`,description:`把 formatter 后的文本重新提取为数值，常用于货币、百分比和带单位输入。`,type:`(input: string) => number | string | null | undefined`,defaultValue:`-`},{prop:`controls`,description:`是否展示上下步进按钮，也支持自定义 upIcon / downIcon。`,type:`boolean | { upIcon?: any; downIcon?: any }`,defaultValue:`true`},{prop:`keyboard`,description:`是否启用 ArrowUp / ArrowDown 键盘步进。`,type:`boolean`,defaultValue:`true`},{prop:`changeOnWheel`,description:`聚焦输入框后是否允许用鼠标滚轮调节数值。`,type:`boolean`,defaultValue:`false`},{prop:`changeOnBlur`,description:`失焦后是否按 min / max 和 precision 做归一化。`,type:`boolean`,defaultValue:`true`},{prop:`prefix / suffix`,description:`输入区内部前后缀，可与控件按钮共存。`,type:`any`,defaultValue:`-`},{prop:`addonBefore / addonAfter`,description:`输入框两侧附加区，适合协议、单位、业务标签块。`,type:`any`,defaultValue:`-`},{prop:`variant / status / size / color`,description:`直接复用 Rue Input 的视觉层能力。`,type:`与 Input 一致`,defaultValue:`-`},{prop:`allowClear`,description:`沿用 Rue Input 的清空按钮能力，清空后会回传 null。`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`onChange`,description:`数值变化时触发；stringMode 下返回字符串，否则返回 number；清空返回 null。`,type:`(value: number | string | null) => void`,defaultValue:`-`},{prop:`onStep`,description:`点击控件、键盘或滚轮步进后触发，附带步进来源和偏移量。`,type:`(value, info) => void`,defaultValue:`-`}],ve=()=>{let{tabBasic:n,tabAffix:r,tabFormatter:a,tabPrecision:c,tabControls:f,tabSizes:b}=y(`useSetup:0:0:dup4`,()=>_(()=>({tabBasic:y(`ref:1:9`,()=>p(`preview`)),tabAffix:y(`ref:1:10`,()=>p(`preview`)),tabFormatter:y(`ref:1:11`,()=>p(`preview`)),tabPrecision:y(`ref:1:12`,()=>p(`preview`)),tabControls:y(`ref:1:13`,()=>p(`preview`)),tabSizes:y(`ref:1:14`,()=>p(`preview`))})));return m(p=>{let _=l(),y=s(`rue:component:anchor`);return t(_,y),h(g(C,{children:m(()=>{let p=l(),m=u(`div`,p);t(p,m),e(m,`max-w-none prose prose-sm md:prose-base`);let _=u(`h1`,m);t(m,_),t(_,o(`InputNumber 数字输入`));let y=u(`p`,m);t(m,y),e(y,`text-sm mt-3 mb-3`),t(y,o(`InputNumber 建在 Rue 现有的 Input 视觉壳层之上：保持 prefix、suffix、addon、状态和变体都还是同一套审美，但把数值输入真正需要的 formatter、parser、precision、步进按钮、键盘和滚轮能力一次补齐。`));let x=u(`h2`,m);t(m,x),t(x,o(`何时使用`));let C=u(`ul`,m);t(m,C);let w=u(`li`,C);t(C,w),t(w,o(`需要输入数量、金额、比例、库存、席位等明确数值，而不是自由文本。`));let T=u(`li`,C);t(C,T),t(T,o(`希望同时支持键盘、按钮、滚轮和格式化展示，但不想退回浏览器原生 number input 的不可控体验。`));let E=u(`li`,C);t(C,E),t(E,o(`希望在 Rue Input 的统一视觉下，把数字输入和 prefix、单位、告警状态、add-on 组合起来。`));let O=s(`rue:component:anchor`);t(m,O),i(()=>{let e=g(D,{title:`Basic and bounds`,summary:`基础数值输入、范围约束、无控件模式和禁用态。`,tab:n,preview:()=>S(U,{}),code:`const seats = ref(3)
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
<InputNumber className="w-full" defaultValue={24} disabled prefix="QTY" />`});v(()=>h(e,m,O))});let k=s(`rue:component:anchor`);t(m,k),i(()=>{let e=g(D,{title:`Affixes and variants`,summary:`复用 Rue Input 的前后缀、附加区、状态与变体。`,tab:r,preview:()=>S(W,{}),code:`<InputNumber
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
/>`});v(()=>h(e,m,k))});let ee=s(`rue:component:anchor`);t(m,ee),i(()=>{let e=g(D,{title:`Formatter and parser`,summary:`把展示层和数值层拆开，适合货币和百分比。`,tab:a,preview:()=>S(ge,{}),code:`const budget = ref(12800)
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
/>`});v(()=>h(e,m,ee))});let A=s(`rue:component:anchor`);t(m,A),i(()=>{let e=g(D,{title:`Precision and stringMode`,summary:`适合链上数量、高精度金额、手续费等需要字符串回传的场景。`,tab:c,preview:()=>S(_e,{}),code:`const amount = ref('0.1250')
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
/>`});v(()=>h(e,m,A))});let j=s(`rue:component:anchor`);t(m,j),i(()=>{let e=g(D,{title:`Custom controls and wheel`,summary:`支持替换控件图标，并区分来自按钮、键盘还是滚轮的步进来源。`,tab:f,preview:()=>S(G,{}),code:`const throughput = ref(120)
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
/>`});v(()=>h(e,m,j))});let M=s(`rue:component:anchor`);t(m,M),i(()=>{let e=g(D,{title:`Sizes`,summary:`沿用 Rue Input 的尺寸体系，包括 large 别名。`,tab:b,preview:()=>S(K,{}),code:`<InputNumber size="xs" defaultValue={8} suffix="xs" />
<InputNumber size="sm" defaultValue={16} suffix="sm" />
<InputNumber size="md" defaultValue={24} suffix="md" />
<InputNumber size="lg" defaultValue={32} suffix="lg" />
<InputNumber size="xl" defaultValue={48} suffix="xl" />
<InputNumber size="large" defaultValue={64} suffix="large alias" />`});v(()=>h(e,m,M))});let N=u(`h2`,m);t(m,N),d(N,`id`,`input-number-api`),t(N,o(`API`));let te=u(`p`,m);t(m,te),t(te,o(`InputNumber 直接复用了 Rue Input 的视觉 props，同时把数值行为语义补到了同一层。`));let ne=s(`rue:component:anchor`);return t(m,ne),i(()=>{let e=g(he,{rows:q});v(()=>h(e,m,ne))}),p})}),_,y),_})};export{ve as default};
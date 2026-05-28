import{$ as e,Gt as t,Jt as n,Kt as r,Lt as i,N as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,d as f,et as p,l as m,mt as h,ot as g,t as _,tt as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as b}from"./vapor-helpers-vapor-DkadWylb.js";import{i as x,r as S}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as C}from"./badge-2OxLkSBG.js";import{t as w}from"./fieldset-CENUOPFq.js";import{t as T}from"./input-BfzrfJFV.js";import{n as E}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as D}from"./PreviewBlock-DNT1sEzZ.js";var O=(...e)=>e.filter(Boolean).join(` `),k=e=>{switch(e){case`small`:return`sm`;case`middle`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(k(e)){case`xs`:return{buttonClassName:`btn-xs w-3.5 rounded-[4px] px-0 text-[10px]`,iconClassName:`size-2`,groupClassName:`gap-0`,suffixClassName:`gap-1`};case`sm`:return{buttonClassName:`btn-xs w-4.5 rounded`,iconClassName:`size-2.5`,groupClassName:`gap-px`,suffixClassName:`gap-1.5`};case`lg`:return{buttonClassName:`btn-sm w-7 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};case`xl`:return{buttonClassName:`btn-sm w-8 rounded-lg`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`};default:return{buttonClassName:`btn-xs w-6 rounded-md`,iconClassName:`size-3`,groupClassName:`gap-px`,suffixClassName:`gap-2`}}},A=e=>{let t=Number(e);return Number.isFinite(t)?t:void 0},j=e=>Object.is(e,-0)?0:e,M=(e,t)=>{if(typeof t!=`number`||t<0)return j(e);let n=10**t;return j(Math.round(e*n)/n)},N=e=>{if(e==null)return 0;let t=String(e).toLowerCase();if(t.includes(`e-`)){let[e,n]=t.split(`e-`),r=Number(n);return(e.includes(`.`)?e.length-e.indexOf(`.`)-1:0)+r}return t.includes(`.`)?t.length-t.indexOf(`.`)-1:0},te=(e,t)=>{let n=A(e)??-(2**53-1),r=A(t)??2**53-1;return r<n?{min:r,max:n}:{min:n,max:r}},ne=e=>{let t=A(e)??1;return t>0?t:1},re=(e,t,n)=>e<t?t:e>n?n:e,P=(e,t)=>t&&t!==`.`?e.replace(`.`,t):e,ie=(e,t)=>{let n=t===`,`?`,`:`.`,r=(typeof e.normalize==`function`?e.normalize(`NFKC`):e).trim();if(!r)return``;let i=``,a=r;a.startsWith(`-`)&&(i=`-`,a=a.slice(1)),a=a.replace(/-/g,``),a=n===`,`?a.replace(/\./g,``):a.replace(/,/g,``),a=a.replace(n===`,`?/[^0-9,]/g:/[^0-9.]/g,``);let o=a.split(n),s=o.shift()??``,c=o.join(``),l=a.includes(n);return`${i}${s}${l?`.${c}`:``}`},ae=e=>e===`-`||e===`.`||e===`-.`,oe=(e,t,n)=>{if(e==null||e===``)return null;if(typeof e==`number`)return Number.isFinite(e)?t?String(j(e)):j(e):null;let r=ie(String(e),n);if(!r||ae(r))return null;let i=A(r);return i===void 0?null:t?r:j(i)},se=(e,t,n,r)=>{let i=M(e,n);return t?typeof n==`number`&&n>=0?i.toFixed(n):r&&!ae(r)&&A(r)!==void 0?r:String(i):i},ce=(e,t,n)=>{if(e==null)return``;let r;if(typeof e==`string`)if(typeof t==`number`&&t>=0){let n=A(e);r=n===void 0?e:M(n,t).toFixed(t)}else r=e;else{let n=M(e,t);r=typeof t==`number`&&t>=0?n.toFixed(t):String(n)}return P(r,n)},le=(e,t,n)=>{let r=t?t(e):e;if(r==null||r===``)return{display:``,normalized:``,empty:!0,transient:!1};if(typeof r==`number`){if(!Number.isFinite(r))return{display:``,normalized:``,empty:!0,transient:!1};let e=String(j(r));return{display:P(e,n),normalized:e,numeric:j(r),empty:!1,transient:!1}}let i=ie(String(r),n);if(!i)return{display:``,normalized:``,empty:!0,transient:!1};if(ae(i))return{display:P(i,n),normalized:i,empty:!1,transient:!0};let a=A(i);return{display:P(i,n),normalized:i,numeric:a===void 0?void 0:j(a),empty:!1,transient:!1}},ue=(e,t,n,r)=>{if(typeof e!=`function`)return n;let i=e(t,{userTyping:r,input:n});return i==null?n:String(i)},de=(e,t,n,r)=>{let i=10**Math.max(N(e),N(n),r??0);return M((Math.round(e*i)+Math.round(n*i)*t)/i,r)},fe=(e,t,n)=>{let r=e==null?void 0:A(e);return r===void 0?t>0?t:n<0?n:0:r},pe=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 14 5-5 5 5`})}),me=({className:e})=>S(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:e??`size-3`,"aria-hidden":`true`,children:S(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 10 5 5 5-5`})}),F=({value:e,defaultValue:r,min:o,max:s,step:c=1,precision:l,stringMode:u=!1,keyboard:d=!0,changeOnWheel:f,changeOnBlur:p=!0,controls:m=!0,decimalSeparator:h,formatter:g,parser:_,readOnly:v,disabled:y,size:b,suffix:C,onChange:w,onStep:E,onInput:D,onKeyDown:k,onPressEnter:j,onBlur:P,onFocus:ie,onWheel:ae,onCompositionStart:F,onCompositionEnd:he,...I})=>{let L=t(),R=I.ref,z=i(``),B=i(!1),V=i(!1),H=e!==void 0,U=te(o,s),W=ne(c),ge=i(oe(e,u,h)),_e=i(oe(H?e:r,u,h)),G=i(``),K=i(void 0),q=i(void 0),ve=i(!1);`ref`in I&&delete I.ref;let ye=e=>{if(L.current=e??void 0,typeof R==`function`){R(e);return}R&&typeof R==`object`&&(R.current=e??void 0)},J=()=>H?ge.value:_e.value,be=()=>{let e=J();if(B.value){let t=le(z.value,_,h);return ue(g,t.numeric===void 0?e:se(t.numeric,u,void 0,t.normalized),z.value,!0)}return ue(g,e,ce(e,l,h),!1)},Y=()=>{let e=J(),t=e==null?void 0:A(e),n=be();G.value=n,K.value=t==null?void 0:String(t),q.value=n||void 0},X=(e=!1)=>{let t=L.current;if(!t)return;let n=t.value!==G.value;n&&(t.value=G.value),K.value===void 0?t.removeAttribute(`aria-valuenow`):t.setAttribute(`aria-valuenow`,K.value),q.value===void 0?t.removeAttribute(`aria-valuetext`):t.setAttribute(`aria-valuetext`,q.value),e&&n&&(ve.value=!0,t.dispatchEvent(new Event(`input`,{bubbles:!0})))},Z=e=>{H||(_e.value=e)},xe=e=>{w&&w(e)},Se=e=>{B.value=!0,z.value=e,G.value=e,K.value=void 0,q.value=e||void 0},Ce=e=>{let t=le(e,_,h);if(B.value=!0,z.value=t.display,t.empty)Z(null),xe(null);else if(t.numeric!==void 0){let e=se(t.numeric,u,void 0,t.normalized);Z(e),xe(e)}Y(),X(!1)},we=(e,t)=>{if(e.empty)return Z(null),xe(null),Y(),X(!0),null;if(e.numeric===void 0)return Y(),X(!0),J();let n=e.numeric;n=M(n,l),t&&(n=re(n,U.min,U.max),n=M(n,l));let r=se(n,u,l,e.normalized),i=J();return Z(r),r!==i&&xe(r),Y(),X(!0),r},Q=(e,t)=>{if(y||v)return;let n=le(L.current?.value??z.value,_,h),r=J(),i=se(re(de(n.numeric??fe(r,U.min,U.max),e===`up`?1:-1,W,l),U.min,U.max),u,l);B.value=!1,z.value=ce(i,l,h),Z(i),i!==r&&xe(i),Y(),X(!0),E?.(i,{offset:e===`up`?W:-W,type:e,emitter:t}),L.current?.focus()};n(()=>e,e=>{H&&(ge.value=oe(e,u,h),B.value=!1,Y(),X(!0))},{immediate:!0}),Y(),a(()=>{X(!1)});let Te=m&&typeof m==`object`?m:void 0,Ee=m!==!1&&!y&&!v,$=ee(b),De=Ee?x(`span`,{className:O(`inline-flex shrink-0 self-stretch flex-col`,$.groupClassName),"data-rue-input-number-controls":`true`,children:[S(`button`,{type:`button`,"aria-label":`Increase value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`up`,`handler`),children:Te?.upIcon??S(pe,{className:$.iconClassName})}),S(`button`,{type:`button`,"aria-label":`Decrease value`,className:O(`btn btn-ghost flex-1 min-h-0 border border-base-300/65 bg-base-100/75 p-0 text-base-content/70 hover:border-base-300 hover:bg-base-100 hover:text-base-content`,$.buttonClassName),onMouseDown:e=>{typeof e.preventDefault==`function`&&e.preventDefault()},onClick:()=>Q(`down`,`handler`),children:Te?.downIcon??S(me,{className:$.iconClassName})})]}):null,Oe=C!==void 0||De?x(`span`,{className:O(`inline-flex items-center`,$.suffixClassName),children:[C,De]}):void 0;return S(T,{...I,ref:ye,type:`text`,inputMode:I.inputMode??(N(W)>0||l!==void 0?`decimal`:`numeric`),disabled:y,readOnly:v,size:b,suffix:Oe,role:`spinbutton`,"aria-valuemin":String(U.min),"aria-valuemax":String(U.max),value:G.value,"aria-valuenow":K.value,"aria-valuetext":q.value,onInput:e=>{if(ve.value){ve.value=!1;return}let t=e.target?.value??``;if(V.value||e.isComposing){Se(t),D?.(e);return}Ce(t),D?.(e)},onKeyDown:e=>{if(k?.(e),!(e.defaultPrevented||!d)){if(e.key===`ArrowUp`){e.preventDefault?.(),Q(`up`,`keydown`);return}e.key===`ArrowDown`&&(e.preventDefault?.(),Q(`down`,`keydown`))}},onPressEnter:j,onFocus:e=>{Y(),X(!1),ie?.(e)},onCompositionStart:e=>{V.value=!0,Se(e.target?.value??z.value),F?.(e)},onCompositionEnd:e=>{V.value=!1,Ce(e.target?.value??z.value),he?.(e)},onBlur:e=>{let t=e.target,n=le(t?.value??z.value,_,h);V.value=!1,B.value=!1,z.value=n.display,we(n,p),Y(),X(!0),P?.(e)},onWheel:e=>{ae?.(e),!(e.defaultPrevented||!f||y||v||document.activeElement!==L.current)&&e.deltaY!==0&&(e.preventDefault?.(),Q(e.deltaY<0?`up`:`down`,`wheel`))}})},he=t=>f(n=>{let r=e(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),d(i,`table table-zebra`);let a=e(`thead`,i);c(i,a);let h=e(`tr`,a);c(a,h);let _=e(`th`,h);c(h,_),c(_,p(`属性`));let v=e(`th`,h);c(h,v),c(v,p(`说明`));let y=e(`th`,h);c(h,y),c(y,p(`类型`));let x=e(`th`,h);c(h,x),c(x,p(`默认值`));let S=e(`tbody`,i);c(i,S);let C=u(`rue:list:start`),w=u(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,a)=>{m(f(()=>{let n=o(),r=e(`tr`,n);c(n,r),l(()=>{g(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let a=e(`code`,i);c(i,a);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.prop;s(()=>m(e,a,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>m(e,f,p))});let h=e(`td`,r);c(r,h);let _=e(`code`,h);c(h,_);let v=u(`rue:slot:anchor`);c(_,v),l(()=>{let e=t.type;s(()=>m(e,_,v))});let y=e(`td`,r);c(r,y);let b=e(`code`,y);c(y,b);let x=u(`rue:slot:anchor`);return c(b,x),l(()=>{let e=t.defaultValue;s(()=>m(e,b,x))}),n}),n,r)}})}),r}),I=(e,t=0)=>{let n=Number(e);return Number.isFinite(n)?n:t},L=(e,t)=>{if(t.userTyping)return t.input;if(e==null||e===``)return``;let[n,r]=String(e).split(`.`),i=n.replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return r?`\xa5 ${i}.${r}`:`\xa5 ${i}`},R=e=>e.replace(/¥\s?|,/g,``),z=(e,t)=>t.userTyping?t.input:e==null||e===``?``:`${e}%`,B=e=>e.replace(/%/g,``),V=()=>f(t=>{let n=e(`svg`,t);g(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`viewBox`,`0 0 24 24`),g(n,`fill`,`none`),g(n,`stroke`,`currentColor`),g(n,`strokeWidth`,`1.8`),d(n,`size-3`),g(n,`aria-hidden`,`true`);let r=e(`path`,n);return c(n,r),g(r,`strokeLinecap`,`round`),g(r,`strokeLinejoin`,`round`),g(r,`d`,`M12 5v14M5 12h14`),n}),H=()=>f(t=>{let n=e(`svg`,t);g(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`viewBox`,`0 0 24 24`),g(n,`fill`,`none`),g(n,`stroke`,`currentColor`),g(n,`strokeWidth`,`1.8`),d(n,`size-3`),g(n,`aria-hidden`,`true`);let r=e(`path`,n);return c(n,r),g(r,`strokeLinecap`,`round`),g(r,`strokeLinejoin`,`round`),g(r,`d`,`M5 12h14`),n}),U=()=>{let{seats:t,stepLog:n}=y(`useSetup:0:0`,()=>r(()=>({seats:y(`ref:1:0`,()=>i(3)),stepLog:y(`ref:1:1`,()=>i(`最近一次步进：等待操作`))})));return f(r=>{let i=e(`div`,r);d(i,`grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]`);let a=e(`div`,i);c(i,a),d(a,`grid gap-4 xl:grid-cols-2`);let g=u(`rue:component:anchor`);c(a,g),m(_(w,{children:f(()=>{let e=o(),r=u(`rue:component:anchor`);c(e,r),m(_(w.Legend,{children:`订阅席位`}),e,r);let i=u(`rue:component:anchor`);c(e,i),l(()=>{let r=_(F,{className:`w-full`,value:t.value,min:1,max:12,onChange:e=>{t.value=I(e,1)},onStep:(e,t)=>{n.value=t.emitter+` / `+t.type+` -> `+String(e)}});s(()=>m(r,e,i))});let a=u(`rue:component:anchor`);return c(e,a),m(_(w.Label,{as:`p`,children:`默认启用控制按钮、方向键和范围约束。`}),e,a),e})}),a,g);let y=u(`rue:component:anchor`);c(a,y),m(_(w,{children:f(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),m(_(w.Legend,{children:`积分偏移`}),e,t);let n=u(`rue:component:anchor`);c(e,n),m(_(F,{className:`w-full`,defaultValue:40,min:0,max:100,controls:!1,suffix:`pts`}),e,n);let r=u(`rue:component:anchor`);return c(e,r),m(_(w.Label,{as:`p`,children:`只保留纯输入体验，适合和自定义操作条组合。`}),e,r),e})}),a,y);let b=u(`rue:component:anchor`);c(a,b),m(_(w,{children:f(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),m(_(w.Legend,{children:`延迟回写`}),e,t);let n=u(`rue:component:anchor`);c(e,n),m(_(F,{className:`w-full`,defaultValue:250,step:25,changeOnBlur:!1,suffix:`ms`}),e,n);let r=u(`rue:component:anchor`);return c(e,r),m(_(w.Label,{as:`p`,children:`关闭 blur 归一化时，区间外值会继续保留到业务层处理。`}),e,r),e})}),a,b);let x=u(`rue:component:anchor`);c(a,x),m(_(w,{children:f(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),m(_(w.Legend,{children:`不可用态`}),e,t);let n=u(`rue:component:anchor`);c(e,n),l(()=>{let t=_(F,{className:`w-full`,defaultValue:24,disabled:!0,prefix:`QTY`});s(()=>m(t,e,n))});let r=u(`rue:component:anchor`);return c(e,r),m(_(w.Label,{as:`p`,children:`禁用时自动收起加减控件，保留 Rue Input 的静态视觉。`}),e,r),e})}),a,x);let S=e(`div`,i);c(i,S),d(S,`rounded-box border border-base-300 bg-base-100 p-5`);let C=e(`div`,S);c(S,C),d(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(C,p(`Live summary`));let T=e(`div`,S);c(S,T),d(T,`mt-3 text-4xl font-semibold text-base-content`);let E=v(T);c(T,E),l(()=>{h(E,t.value)});let D=e(`p`,S);c(S,D),d(D,`mt-2 mb-0 text-sm text-base-content/65`),c(D,p(`当前席位。步进时会同步输出交互来源，方便联动库存、价格或配额面板。`));let O=e(`div`,S);c(S,O),d(O,`mt-4 rounded-box bg-base-200/70 p-4 text-sm text-base-content/70`);let k=v(O);return c(O,k),l(()=>{h(k,n.value)}),i})},W=()=>f(t=>{let n=e(`div`,t);d(n,`grid gap-4 md:grid-cols-2`);let r=u(`rue:component:anchor`);c(n,r),m(_(F,{defaultValue:12800,step:100,precision:0,prefix:`￥`,suffix:`CNY`,allowClear:!0}),n,r);let i=u(`rue:component:anchor`);c(n,i),l(()=>{let e=_(F,{defaultValue:18,addonBefore:`APR`,addonAfter:`%`,formatter:z,parser:B});s(()=>m(e,n,i))});let a=u(`rue:component:anchor`);c(n,a),m(_(F,{defaultValue:4.2,precision:1,status:`warning`,variant:`filled`,prefix:`延迟`,suffix:`s`}),n,a);let o=u(`rue:component:anchor`);return c(n,o),m(_(F,{defaultValue:68,status:`error`,variant:`borderless`,addonBefore:`CPU`,addonAfter:`%`}),n,o),n}),ge=()=>{let{budget:t,discount:n}=y(`useSetup:0:0:dup1`,()=>r(()=>({budget:y(`ref:1:2`,()=>i(12800)),discount:y(`ref:1:3`,()=>i(12.5))})));return f(r=>{let i=e(`div`,r);d(i,`grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]`);let a=e(`div`,i);c(i,a),d(a,`grid gap-4 md:grid-cols-2`);let o=u(`rue:component:anchor`);c(a,o),l(()=>{let e=_(F,{value:t.value,step:500,precision:0,formatter:L,parser:R,onChange:e=>{t.value=I(e,0)}});s(()=>m(e,a,o))});let f=u(`rue:component:anchor`);c(a,f),l(()=>{let e=_(F,{value:n.value,min:0,max:35,step:.5,precision:1,formatter:z,parser:B,onChange:e=>{n.value=I(e,0)}});s(()=>m(e,a,f))});let g=e(`div`,i);c(i,g),d(g,`rounded-box border border-base-300 bg-base-100 p-5 text-sm`);let y=e(`div`,g);c(g,y),d(y,`flex items-center justify-between gap-3`);let b=e(`div`,y);c(y,b);let x=e(`div`,b);c(b,x),d(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(x,p(`Raw value`));let S=e(`div`,b);c(b,S),d(S,`mt-2 text-lg font-semibold text-base-content`),c(S,p(`¥ `));let w=v(S);c(S,w),l(()=>{h(w,t.value)});let T=u(`rue:component:anchor`);c(y,T),m(_(C,{variant:`neutral`,size:`sm`,children:`parser + formatter`}),y,T);let E=e(`p`,g);c(g,E),d(E,`mt-4 mb-0 text-base-content/65`),c(E,p(`formatter 负责展示层，parser 负责回到数值层。这样可以在不使用原生 number input 的前提下，保留货币、百分比和本地化格式。`));let D=e(`div`,g);c(g,D),d(D,`mt-4 rounded-box bg-base-200/70 p-4`),c(D,p(`折扣后预算：`));let O=e(`strong`,D);c(D,O),c(O,p(`¥ `));let k=v(O);return c(O,k),l(()=>{h(k,(t.value*(100-n.value)/100).toFixed(0))}),i})},_e=()=>{let{amount:t,fee:n,spot:a}=y(`useSetup:0:0:dup2`,()=>r(()=>({amount:y(`ref:1:4`,()=>i(`0.1250`)),fee:y(`ref:1:5`,()=>i(`0.0008`)),spot:y(`ref:1:6`,()=>i(64235.75))})));return f(r=>{let i=e(`div`,r);d(i,`grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`);let o=e(`div`,i);c(i,o),d(o,`grid gap-4 md:grid-cols-2`);let f=u(`rue:component:anchor`);c(o,f),l(()=>{let e=_(F,{value:t.value,stringMode:!0,precision:4,step:`0.0001`,prefix:`BTC`,onChange:e=>{t.value=e==null?`0.0000`:String(e)}});s(()=>m(e,o,f))});let g=u(`rue:component:anchor`);c(o,g),l(()=>{let e=_(F,{value:n.value,stringMode:!0,precision:4,step:`0.0001`,variant:`filled`,prefix:`Fee`,onChange:e=>{n.value=e==null?`0.0000`:String(e)}});s(()=>m(e,o,g))});let y=u(`rue:component:anchor`);c(o,y),l(()=>{let e=_(F,{value:a.value,precision:2,step:25,prefix:`$`,onChange:e=>{a.value=I(e,0)}});s(()=>m(e,o,y))});let b=e(`div`,o);c(o,b),d(b,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let x=e(`div`,b);c(b,x),d(x,`flex items-center justify-between gap-3`);let S=e(`span`,x);c(x,S),c(S,p(`String mode`));let w=u(`rue:component:anchor`);c(x,w),m(_(C,{outline:!0,size:`sm`,children:`保留 4 位小数`}),x,w);let T=e(`div`,b);c(b,T),d(T,`mt-4 text-2xl font-semibold text-base-content`),c(T,p(`$`));let E=v(T);c(T,E),l(()=>{h(E,((I(t.value,0)+I(n.value,0))*a.value).toFixed(2))});let D=e(`p`,b);return c(b,D),d(D,`mt-2 mb-0`),c(D,p(`适合高精度金额、链上数量、保证金比例等需要字符串回传的场景。`)),i})},G=()=>{let{throughput:t,lastStep:n}=y(`useSetup:0:0:dup3`,()=>r(()=>({throughput:y(`ref:1:7`,()=>i(120)),lastStep:y(`ref:1:8`,()=>i(`等待操作`))})));return f(r=>{let i=e(`div`,r);d(i,`grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`);let a=u(`rue:component:anchor`);c(i,a),l(()=>{let e=_(F,{value:t.value,min:0,max:500,step:25,changeOnWheel:!0,prefix:`QPS`,controls:{upIcon:S(V,{}),downIcon:S(H,{})},onChange:e=>{t.value=I(e,0)},onStep:(e,t)=>{n.value=t.emitter+` / `+t.type+` -> `+String(e)}});s(()=>m(e,i,a))});let o=e(`div`,i);c(i,o),d(o,`rounded-box border border-base-300 bg-base-100 p-5 text-sm text-base-content/70`);let f=e(`div`,o);c(o,f),d(f,`flex flex-wrap gap-2`);let g=u(`rue:component:anchor`);c(f,g),m(_(C,{variant:`neutral`,size:`sm`,children:`ArrowUp / ArrowDown`}),f,g);let y=u(`rue:component:anchor`);c(f,y),m(_(C,{variant:`neutral`,size:`sm`,children:`Mouse Wheel`}),f,y);let b=u(`rue:component:anchor`);c(f,b),m(_(C,{variant:`neutral`,size:`sm`,children:`Custom Icons`}),f,b);let x=e(`div`,o);c(o,x),d(x,`mt-4 text-2xl font-semibold text-base-content`);let w=v(x);c(x,w),l(()=>{h(w,t.value)}),c(x,p(` QPS`));let T=e(`p`,o);c(o,T),d(T,`mt-2 mb-0`),c(T,p(`聚焦输入框后可以直接滚轮增减，也可以复用业务自己的加减图标。`));let E=e(`div`,o);c(o,E),d(E,`mt-4 rounded-box bg-base-200/70 p-4`);let D=v(E);return c(E,D),l(()=>{h(D,n.value)}),i})},K=()=>f(t=>{let n=e(`div`,t);d(n,`grid gap-4 md:grid-cols-2 xl:grid-cols-3`);let r=u(`rue:component:anchor`);c(n,r),m(_(F,{size:`xs`,defaultValue:8,suffix:`xs`}),n,r);let i=u(`rue:component:anchor`);c(n,i),m(_(F,{size:`sm`,defaultValue:16,suffix:`sm`}),n,i);let a=u(`rue:component:anchor`);c(n,a),m(_(F,{size:`md`,defaultValue:24,suffix:`md`}),n,a);let o=u(`rue:component:anchor`);c(n,o),m(_(F,{size:`lg`,defaultValue:32,suffix:`lg`}),n,o);let s=u(`rue:component:anchor`);c(n,s),m(_(F,{size:`xl`,defaultValue:48,suffix:`xl`}),n,s);let l=u(`rue:component:anchor`);return c(n,l),m(_(F,{size:`large`,defaultValue:64,suffix:`large alias`}),n,l),n}),q=[{prop:`value / defaultValue`,description:`受控与非受控值，支持 number，也支持 stringMode 下的字符串值。`,type:`number | string | null`,defaultValue:`-`},{prop:`min / max`,description:`数值上下界；配合 changeOnBlur 时会在失焦后自动归一化。`,type:`number | string`,defaultValue:`MIN_SAFE_INTEGER / MAX_SAFE_INTEGER`},{prop:`step`,description:`每次加减的步长，支持整数与小数。`,type:`number | string`,defaultValue:`1`},{prop:`precision`,description:`控制最终值的小数位数；步进和 blur 归一化都会遵守该精度。`,type:`number`,defaultValue:`-`},{prop:`stringMode`,description:`改为字符串回传，适合高精度金额或链上数量。`,type:`boolean`,defaultValue:`false`},{prop:`formatter`,description:`自定义展示格式，参数里会带上 userTyping 和当前 input 文本。`,type:`(value, info) => string`,defaultValue:`-`},{prop:`parser`,description:`把 formatter 后的文本重新提取为数值，常用于货币、百分比和带单位输入。`,type:`(input: string) => number | string | null | undefined`,defaultValue:`-`},{prop:`controls`,description:`是否展示上下步进按钮，也支持自定义 upIcon / downIcon。`,type:`boolean | { upIcon?: any; downIcon?: any }`,defaultValue:`true`},{prop:`keyboard`,description:`是否启用 ArrowUp / ArrowDown 键盘步进。`,type:`boolean`,defaultValue:`true`},{prop:`changeOnWheel`,description:`聚焦输入框后是否允许用鼠标滚轮调节数值。`,type:`boolean`,defaultValue:`false`},{prop:`changeOnBlur`,description:`失焦后是否按 min / max 和 precision 做归一化。`,type:`boolean`,defaultValue:`true`},{prop:`prefix / suffix`,description:`输入区内部前后缀，可与控件按钮共存。`,type:`any`,defaultValue:`-`},{prop:`addonBefore / addonAfter`,description:`输入框两侧附加区，适合协议、单位、业务标签块。`,type:`any`,defaultValue:`-`},{prop:`variant / status / size / color`,description:`直接复用 Rue Input 的视觉层能力。`,type:`与 Input 一致`,defaultValue:`-`},{prop:`allowClear`,description:`沿用 Rue Input 的清空按钮能力，清空后会回传 null。`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`onChange`,description:`数值变化时触发；stringMode 下返回字符串，否则返回 number；清空返回 null。`,type:`(value: number | string | null) => void`,defaultValue:`-`},{prop:`onStep`,description:`点击控件、键盘或滚轮步进后触发，附带步进来源和偏移量。`,type:`(value, info) => void`,defaultValue:`-`}],ve=()=>{let{tabBasic:t,tabAffix:n,tabFormatter:a,tabPrecision:h,tabControls:v,tabSizes:b}=y(`useSetup:0:0:dup4`,()=>r(()=>({tabBasic:y(`ref:1:9`,()=>i(`preview`)),tabAffix:y(`ref:1:10`,()=>i(`preview`)),tabFormatter:y(`ref:1:11`,()=>i(`preview`)),tabPrecision:y(`ref:1:12`,()=>i(`preview`)),tabControls:y(`ref:1:13`,()=>i(`preview`)),tabSizes:y(`ref:1:14`,()=>i(`preview`))})));return f(r=>{let i=o(),y=u(`rue:component:anchor`);return c(i,y),m(_(E,{children:f(()=>{let r=o(),i=e(`div`,r);c(r,i),d(i,`max-w-none prose prose-sm md:prose-base`);let f=e(`h1`,i);c(i,f),c(f,p(`InputNumber 数字输入`));let y=e(`p`,i);c(i,y),d(y,`text-sm mt-3 mb-3`),c(y,p(`InputNumber 建在 Rue 现有的 Input 视觉壳层之上：保持 prefix、suffix、addon、状态和变体都还是同一套审美，但把数值输入真正需要的 formatter、parser、precision、步进按钮、键盘和滚轮能力一次补齐。`));let x=e(`h2`,i);c(i,x),c(x,p(`何时使用`));let C=e(`ul`,i);c(i,C);let w=e(`li`,C);c(C,w),c(w,p(`需要输入数量、金额、比例、库存、席位等明确数值，而不是自由文本。`));let T=e(`li`,C);c(C,T),c(T,p(`希望同时支持键盘、按钮、滚轮和格式化展示，但不想退回浏览器原生 number input 的不可控体验。`));let E=e(`li`,C);c(C,E),c(E,p(`希望在 Rue Input 的统一视觉下，把数字输入和 prefix、单位、告警状态、add-on 组合起来。`));let O=u(`rue:component:anchor`);c(i,O),l(()=>{let e=_(D,{title:`Basic and bounds`,summary:`基础数值输入、范围约束、无控件模式和禁用态。`,tab:t,preview:()=>S(U,{}),code:`const seats = ref(3)
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
<InputNumber className="w-full" defaultValue={24} disabled prefix="QTY" />`});s(()=>m(e,i,O))});let k=u(`rue:component:anchor`);c(i,k),l(()=>{let e=_(D,{title:`Affixes and variants`,summary:`复用 Rue Input 的前后缀、附加区、状态与变体。`,tab:n,preview:()=>S(W,{}),code:`<InputNumber
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
/>`});s(()=>m(e,i,k))});let ee=u(`rue:component:anchor`);c(i,ee),l(()=>{let e=_(D,{title:`Formatter and parser`,summary:`把展示层和数值层拆开，适合货币和百分比。`,tab:a,preview:()=>S(ge,{}),code:`const budget = ref(12800)
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
/>`});s(()=>m(e,i,ee))});let A=u(`rue:component:anchor`);c(i,A),l(()=>{let e=_(D,{title:`Precision and stringMode`,summary:`适合链上数量、高精度金额、手续费等需要字符串回传的场景。`,tab:h,preview:()=>S(_e,{}),code:`const amount = ref('0.1250')
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
/>`});s(()=>m(e,i,A))});let j=u(`rue:component:anchor`);c(i,j),l(()=>{let e=_(D,{title:`Custom controls and wheel`,summary:`支持替换控件图标，并区分来自按钮、键盘还是滚轮的步进来源。`,tab:v,preview:()=>S(G,{}),code:`const throughput = ref(120)
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
/>`});s(()=>m(e,i,j))});let M=u(`rue:component:anchor`);c(i,M),l(()=>{let e=_(D,{title:`Sizes`,summary:`沿用 Rue Input 的尺寸体系，包括 large 别名。`,tab:b,preview:()=>S(K,{}),code:`<InputNumber size="xs" defaultValue={8} suffix="xs" />
<InputNumber size="sm" defaultValue={16} suffix="sm" />
<InputNumber size="md" defaultValue={24} suffix="md" />
<InputNumber size="lg" defaultValue={32} suffix="lg" />
<InputNumber size="xl" defaultValue={48} suffix="xl" />
<InputNumber size="large" defaultValue={64} suffix="large alias" />`});s(()=>m(e,i,M))});let N=e(`h2`,i);c(i,N),g(N,`id`,`input-number-api`),c(N,p(`API`));let te=e(`p`,i);c(i,te),c(te,p(`InputNumber 直接复用了 Rue Input 的视觉 props，同时把数值行为语义补到了同一层。`));let ne=u(`rue:component:anchor`);return c(i,ne),l(()=>{let e=_(he,{rows:q});s(()=>m(e,i,ne))}),r})}),i,y),i})};export{ve as default};
import{At as e,C as t,Dn as n,E as r,Mt as i,P as a,Q as o,T as s,Vt as c,_n as l,_t as u,at as d,b as f,bn as p,ct as m,dt as h,et as g,gn as _,gt as v,hn as y,jt as b,kn as x,kt as S,mn as ee,nt as C,on as w,ot as T,pn as E,qt as D,rt as O,st as k,tn as A,tt as te,ut as j,vn as M,vt as N,w as P,wn as F,x as ne,xt as I,yn as L,yt as R}from"./rue-runtime-HIMg8Lz8.js";import{t as re}from"./Code-DpH7u0gk.js";import{t as z}from"./tabs-C020zIXs.js";import{r as ie}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var ae=M(`<a><!--rue:text-hole:0--></a>`),oe=M(`<button><!--rue:text-hole:0--></button>`),B=M(`<div><!--rue:text-hole:0--></div>`),V=(...e)=>e.filter(Boolean).join(` `),H=e=>e==null?!1:!Array.isArray(e)||e.some(e=>H(e)),se=e=>{let t=d(e.as),n=d(e.children),r=d(e.className),a=d(e.content),o=d(L(e,[`as`,`children`,`className`,`content`])),s=t.get()===void 0?`h6`:t.get();return m(i(s,()=>({...o.get(),className:V(`footer-title`,r.get()),children:a.get()??n.get()})),e=>g(()=>{t.set(e.as),n.set(e.children),r.set(e.className),a.set(e.content),o.set(L(e,[`as`,`children`,`className`,`content`]))}),()=>e)},U=t=>{let n=d(t.as),r=d(t.children),a=d(t.className),s=d(t.content),u=d(t.hover),f=d(t.href),p=d(t.rel),h=d(t.target),_=d(L(t,[`as`,`children`,`className`,`content`,`hover`,`href`,`rel`,`target`]));return m(te(()=>{let t=n.get()??(f.get()?`a`:`button`),d=h.get()===`_blank`&&!p.get()?`noreferrer`:p.get();return t===`a`?{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=ae().content.cloneNode(!0).firstChild,n=t,i=t.childNodes[0],p=i.parentNode;return F(()=>{S(n,_.get(),[`href`,`target`,`rel`,`className`])}),F(()=>{I(n,`href`,String(f.get()))}),F(()=>{I(n,`target`,String(h.get()))}),F(()=>{I(n,`rel`,String(d))}),F(()=>{o(n,V(`link`,(u.get()===void 0||u.get())&&`link-hover`,a.get()))}),C(p,i,()=>{let e=s.get();return e==null?{__rue_compiled_branch_key:null,create:()=>T(()=>r.get())}:{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),t})}:t===`button`?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t,i=t.childNodes[0],d=i.parentNode;return F(()=>{S(n,_.get(),[`type`,`className`])}),F(()=>{I(n,`type`,String(_.get().type??`button`))}),F(()=>{o(n,V(`link`,(u.get()===void 0||u.get())&&`link-hover`,a.get()))}),C(d,i,()=>{let e=s.get();return e==null?{__rue_compiled_branch_key:null,create:()=>T(()=>r.get())}:{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),t})}:{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>i(t,()=>({..._.get(),className:V(`link`,(u.get()===void 0||u.get())&&`link-hover`,a.get()),children:s.get()??r.get()}))}}),e=>g(()=>{n.set(e.as),r.set(e.children),a.set(e.className),s.set(e.content),u.set(e.hover),f.set(e.href),p.set(e.rel),h.set(e.target),_.set(L(e,[`as`,`children`,`className`,`content`,`hover`,`href`,`rel`,`target`]))}),()=>t)},ce=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,W=(e,t)=>{if(!H(e))return null;if(ce(e)){let{key:n,label:r,content:a,children:o,...s}=e;return i(U,()=>({key:n??`item-${t}`,...s,children:a??o??r}))}return i(U,()=>({key:`item-${t}`,children:e}))},G=e=>{let t=d(e.as),n=d(e.children),r=d(e.className),a=d(e.content),o=d(L(e,[`as`,`children`,`className`,`content`])),s=t.get()===void 0?`aside`:t.get();return m(i(s,()=>({...o.get(),className:r.get(),children:a.get()??n.get()})),e=>g(()=>{t.set(e.as),n.set(e.children),r.set(e.className),a.set(e.content),o.set(L(e,[`as`,`children`,`className`,`content`]))}),()=>e)},K=w(t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:l,__rue_rest_omit_5:d,__rue_rest_omit_6:f,__rue_rest_omit_7:m,__rue_rest_omit_8:g,rest:_,Component:y,hasCustomContent:b,__rue_phase2_hasCustomContent:S}=p(`useSetup:0:0`,()=>{let{as:e,className:n,children:r,title:i,titleClassName:o,content:s,items:c,inline:l,contentClassName:u,...d}=t,f=t.as===void 0?`nav`:t.as,p=a(()=>H(t.content)||H(t.children));return p.get(),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:f,hasCustomContent:p,__rue_phase2_hasCustomContent:p}});return(()=>{let n=i(se,()=>({className:t.titleClassName,children:t.title})),r=e(()=>{let n=u(),r=v(`rue:slot:anchor`);return h(n,r),F(()=>{let i=b.get()?t.content??t.children:t.inline?e(()=>{let e=u(),n=B().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[0],s=a.parentNode;return e.appendChild(n),F(()=>{o(i,V(`grid grid-flow-col auto-cols-max gap-4`,t.contentClassName))}),F(()=>{let e=(t.items??[]).map((e,t)=>W(e,t));x(()=>j(e,s,a))}),e},!0):(t.items??[]).map((e,t)=>W(e,t));x(()=>j(i,n,r))}),n});return i(y,()=>({..._,className:t.className,children:[H(t.title)?n:void 0,r]}))})()}),le=w(t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:o,__rue_rest_omit_2:l,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:m,__rue_rest_omit_6:g,__rue_rest_omit_7:_,__rue_rest_omit_8:y,rest:b,Component:S,hasChildren:C,__rue_phase2_hasChildren:w,hasStructuredContent:T,__rue_phase2_hasStructuredContent:D}=p(`useSetup:0:0`,()=>{let{as:e,direction:n,center:r,className:i,children:o,brand:s,sections:c,wrap:l,bordered:u,...d}=t,f=t.as===void 0?`footer`:t.as,p=a(()=>H(t.children));p.get();let m=p,h=a(()=>H(t.brand)||(t.sections?.length??0)>0);return h.get(),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:f,hasChildren:p,__rue_phase2_hasChildren:m,hasStructuredContent:h,__rue_phase2_hasStructuredContent:h}});return(()=>{let n=e(()=>{let n=u(),a=v(`rue:slot:anchor`);return h(n,a),F(()=>{let o=C.get()||!T.get()?t.children:e(()=>{let e=u();h(e,R(` `));let n=v(`rue:slot:anchor`);h(e,n),F(()=>{let i=H(t.brand)?O(G,()=>({children:(e,n,i)=>r(e,i,()=>c(Object.assign(e=>{let n=u(),r=ee(`rue:compiled-slot`);return E(n,r),s({parent:n,before:r},()=>t.brand,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})):``;x(()=>j(i,e,n))}),h(e,R(` `));let a=v(`rue:slot:anchor`);return h(e,a),F(()=>{let n=(t.sections??[]).map((e,t)=>{let{key:n,...r}=e;return i(K,()=>({key:n??`section-${t}`,...r}))});x(()=>j(n,e,a))}),h(e,R(` `)),e},!0);x(()=>j(o,n,a))}),n});return i(S,()=>({...b,className:V(`footer`,t.direction&&`footer-${t.direction}`,t.center&&`footer-center`,t.wrap&&`gap-y-6`,t.bordered&&`border-t border-base-300`,t.className),children:n}))})()}),q=Object.assign(le,{Brand:G,Section:K,Title:se,Link:U}),ue=M(`<div class="grid grid-flow-col gap-4"><!--rue:text-hole:0--></div>`),de=M(`<div><!--rue:opaque-hole:0--><p class="text-sm mt-3 mb-3">ACME Industries Ltd. <br> Providing reliable tech since 1992</p></div>`),fe=M(`<p class="text-sm mt-3 mb-3">Rue Design System <br> Ship consistent experiences.</p>`),pe=M(`<nav><h6 class="footer-title">Services</h6><button class="link link-hover">Branding</button><button class="link link-hover">Design</button><button class="link link-hover">Marketing</button><button class="link link-hover">Advertisement</button></nav>`),me=M(`<nav><h6 class="footer-title">Company</h6><button class="link link-hover">About us</button><button class="link link-hover">Contact</button><button class="link link-hover">Jobs</button><button class="link link-hover">Press kit</button></nav>`),he=M(`<nav><h6 class="footer-title">Social</h6><div class="grid grid-flow-col gap-4"><!--rue:text-hole:0--></div></nav>`),ge=M(`<aside><!--rue:opaque-hole:0--><p class="font-bold">ACME Industries Ltd. <br> Providing reliable tech since 1992</p><p class="text-sm mt-3 mb-3">Copyright © <!--rue:text-hole:1--> - All right reserved</p></aside>`),_e=M(`<nav><div class="grid grid-flow-col gap-4"><!--rue:text-hole:0--></div></nav>`),ve=M(`<nav class="grid grid-flow-col gap-4"><button class="link link-hover">About us</button><button class="link link-hover">Contact</button><button class="link link-hover">Jobs</button><button class="link link-hover">Press kit</button></nav>`),ye=M(`<aside><p class="text-sm mt-3 mb-3">Copyright © <!--rue:text-hole:0--> - All right reserved by ACME Industries Ltd</p></aside>`),be=M(`<div class="w-full"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),J=M(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),xe=M(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Se=M(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Footer 页脚</h1><p class="text-sm mt-3 mb-3">Footer 现在同时支持两种组织方式：可以继续像直接写 <code>nav</code>、<code>aside</code> 和 自定义 class，也可以改用 <code>brand</code>、<code>sections</code> 与 <code>Footer.Section</code> 这组结构化 API，把品牌区、链接列和表单区拆开表达。</p><h2>何时使用</h2><ul><li>需要组织品牌信息、导航链接、社交入口或版权声明。</li><li>希望使用 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2 id="footer-api">API</h2><p>当前页展示的是语义化的 Footer API，基础的 children 写法仍然可用。</p><h3>Footer</h3><!--rue:opaque-hole:11--><h3 class="mt-8">Footer.Section</h3><!--rue:opaque-hole:12--><div class="not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4"><h3 class="mt-0 mb-3 text-base font-semibold">复合子组件</h3><div class="grid gap-2 text-sm md:grid-cols-2"><div><code>Footer.Brand</code>：品牌或版权信息容器，默认渲染 <code>aside</code></div><div><code>Footer.Title</code>：带 <code>footer-title</code> 类名的标题节点</div><div><code>Footer.Link</code>：默认输出带 <code>link link-hover</code> 的文本链接</div><div><code>Footer.Section</code>：单列容器，支持 <code>title</code>、<code>items</code>、 <code>content</code></div></div></div><h2>FAQ</h2><h3>什么时候用 sections，什么时候可以写 children？</h3><p>列结构比较规则时，优先用 <code>sections</code> ，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的 <code>nav</code>/<code>aside</code> 模板，也可以继续直接写 <code>children</code>。</p><h3>社交图标和订阅表单怎么放进去？</h3><p>这类内容更适合放到 <code>Footer.Section</code> 的 <code>content</code> 里；如果只是普通文本链接，再用 <code>items</code> 会更省代码。</p><h3>direction 和 center 还需要保持吗？</h3><p>需要。它们仍然是最轻量的布局开关，适合和当前的 <code>sm:footer-horizontal</code>、 <code>footer-center</code> 类名习惯一起工作，不会破坏项目页面的视觉结果。</p></div>`),Y=t=>e(e=>{let n=J().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,l=n.childNodes[1],d=l.parentNode,f=n.childNodes[2],p=f.parentNode;s({parent:i,before:r},()=>t.title,()=>({})),C(o,a,()=>t.summary?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let n=_(`p`,e);n.className=`m-0 text-sm opacity-70`;let r=ee(`rue:compiled-slot`);return E(n,r),s({parent:n,before:r},()=>t.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let m=y(d);return k(m,z,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`})),d.insertBefore(m,l),F(()=>{let e=t.tab.value===`preview`?t.preview():O(re,()=>({className:`mt-2`,lang:`tsx`,code:t.code}));x(()=>j(e,p,f))}),n}),Ce=e=>{let t=d(e.rows);return m(c(Object.assign(e=>{let r=xe().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=M(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return F(()=>{let e=t.get()||[];s=P(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return ne(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],u=c.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=l(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=l(``);u.insertBefore(g,c),u.removeChild(c);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=l(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>f(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>g(()=>{t.set(e.rows)}),()=>e)},X=t=>{let n=d(t.className),r=d(t.size);return m(e(()=>{let e=u(),t=N(`svg`,e);h(e,t),F(()=>{I(t,`width`,String(r.get()===void 0?40:r.get()))}),F(()=>{I(t,`height`,String(r.get()===void 0?40:r.get()))}),I(t,`viewBox`,`0 0 24 24`),F(()=>{o(t,n.get()??`fill-current`)});let i=N(`path`,t);return h(t,i),I(i,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),e},!0),e=>g(()=>{n.set(e.className),r.set(e.size)}),()=>t)},Z=[{key:`x`,Icon:()=>m(e(()=>{let e=u(),t=N(`svg`,e);h(e,t),I(t,`xmlns`,`http://www.w3.org/2000/svg`),I(t,`width`,`24`),I(t,`height`,`24`),I(t,`viewBox`,`0 0 24 24`),o(t,`fill-current`);let n=N(`path`,t);return h(t,n),I(n,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),e},!0),e=>g(()=>{}))},{key:`video`,Icon:()=>m(e(()=>{let e=u(),t=N(`svg`,e);h(e,t),I(t,`xmlns`,`http://www.w3.org/2000/svg`),I(t,`width`,`24`),I(t,`height`,`24`),I(t,`viewBox`,`0 0 24 24`),o(t,`fill-current`);let n=N(`path`,t);return h(t,n),I(n,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),e},!0),e=>g(()=>{}))},{key:`community`,Icon:()=>m(e(()=>{let e=u(),t=N(`svg`,e);h(e,t),I(t,`xmlns`,`http://www.w3.org/2000/svg`),I(t,`width`,`24`),I(t,`height`,`24`),I(t,`viewBox`,`0 0 24 24`),o(t,`fill-current`);let n=N(`path`,t);return h(t,n),I(n,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),e},!0),e=>g(()=>{}))}],we=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],Te=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],Ee=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],De=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],Oe=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],ke=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],Q=[{key:`services`,title:`Services`,items:we},{key:`company`,title:`Company`,items:Te},{key:`legal`,title:`Legal`,items:Ee}],Ae=[...Q,{key:`social`,title:`Social`,items:De},{key:`explore`,title:`Explore`,items:Oe},{key:`apps`,title:`Apps`,items:ke}],je=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后使用基础自定义结构，保持对基础写法的支持`,type:`any`,defaultValue:`-`}],Me=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],$=()=>{let a=A(`preview`),s=A(`preview`),p=A(`preview`),v=A(`preview`),S=A(`preview`),C=A(`preview`),T=A(`preview`),te=A(`preview`),M=A(`preview`),ne=A(`preview`),I=A(`preview`);return D(()=>m((()=>{let m=e(()=>{let m=u(),g=Se().content.cloneNode(!0),D=g.firstChild,A=D.childNodes[4],L=A.parentNode,R=D.childNodes[5],re=R.parentNode,z=D.childNodes[6],ie=z.parentNode,ae=D.childNodes[7],oe=ae.parentNode,B=D.childNodes[8],V=B.parentNode,H=D.childNodes[9],se=H.parentNode,U=D.childNodes[10],ce=U.parentNode,W=D.childNodes[11],G=W.parentNode,K=D.childNodes[12],le=K.parentNode,J=D.childNodes[13],xe=J.parentNode,we=D.childNodes[14],Te=we.parentNode,Ee=D.childNodes[18],De=Ee.parentNode,Oe=D.childNodes[20],ke=Oe.parentNode;m.appendChild(g),F(()=>{let e=i(Y,()=>({title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然提供当前视觉类名和响应式方向。`,tab:a,preview:w(()=>O(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:Q}))),code:`const sections = [
  {
    key: 'services',
    title: 'Services',
    items: [
      { label: 'Branding' },
      { label: 'Design' },
      { label: 'Marketing' },
      { label: 'Advertisement' },
    ],
  },
  {
    key: 'company',
    title: 'Company',
    items: [
      { label: 'About us' },
      { label: 'Contact' },
      { label: 'Jobs' },
      { label: 'Press kit' },
    ],
  },
  {
    key: 'legal',
    title: 'Legal',
    items: [{ label: 'Terms of use' }, { label: 'Privacy policy' }, { label: 'Cookie policy' }],
  },
]

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`}));x(()=>j(e,L,A))}),F(()=>{let a=i(Y,()=>({title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:s,preview:w(()=>(()=>{let a=i(X,()=>({})),o=i(q.Brand,()=>({children:[a,c(e=>fe().content.cloneNode(!0).firstChild)]})),s=i(q.Link,()=>({children:`Overview`})),l=i(q.Link,()=>({children:`Pricing`})),p=i(q.Link,()=>({children:`Changelog`})),m=i(q.Section,()=>({title:`Product`,children:[s,l,p]})),h=i(q.Section,()=>({title:`Community`,content:e(()=>{let e=u(),a=ue().content.cloneNode(!0),o=a.firstChild.childNodes[0],s=o.parentNode;e.appendChild(a);let l=[];return F(()=>{l=P(s,o,l,Z||[],(e,t)=>e.key,(e,n)=>{let a=d(e);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`button`,e);t.setAttribute(`type`,`button`);let n;return F(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),b(()=>i(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>f(l)),e},!0)}));return i(q,()=>({className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[o,m,h]}))})()),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
  <Footer.Brand>
    <BrandGlyph />
    <p className="text-sm mt-3 mb-3">
      Rue Design System
      <br />
      Ship consistent experiences.
    </p>
  </Footer.Brand>

  <Footer.Section title="Product">
    <Footer.Link>Overview</Footer.Link>
    <Footer.Link>Pricing</Footer.Link>
    <Footer.Link>Changelog</Footer.Link>
  </Footer.Section>

  <Footer.Section
    title="Community"
    content={
      <div className="grid grid-flow-col gap-4">
        <button type="button"><XIcon /></button>
        <button type="button"><VideoIcon /></button>
        <button type="button"><CommunityIcon /></button>
      </div>
    }
  />
</Footer>`}));x(()=>j(a,re,R))}),F(()=>{let e=i(Y,()=>({title:`Footer（默认纵向，sm 起横向）`,summary:`基础示例 展示，这里改用 sections 表达同一个场景。`,tab:p,preview:w(()=>O(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:Q}))),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`}));x(()=>j(e,ie,z))}),F(()=>{let e=i(Y,()=>({title:`Footer with a logo section`,summary:`展示品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:v,preview:w(()=>O(q,()=>({className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:c(Object.assign(e=>{let t=de().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=y(r);return k(i,X,()=>({})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),sections:Q}))),code:`<Footer
  className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal"
  brand={
    <div>
      <BrandGlyph />
      <p className="text-sm mt-3 mb-3">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </div>
  }
  sections={sections}
/>`}));x(()=>j(e,oe,ae))}),F(()=>{let e=i(Y,()=>({title:`Footer with a form`,summary:`展示订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:S,preview:w(()=>O(q,()=>({className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...Q,{key:`newsletter`,title:`Newsletter`,as:`form`,content:c(Object.assign(e=>{let t=_(`fieldset`,e);t.className=`w-80`;let n=_(`label`,t);E(t,n),E(n,l(`Enter your email address`));let r=_(`div`,t);E(t,r),r.className=`join`;let i=_(`input`,r);E(r,i),i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`username@site.com`),i.className=`input input-bordered join-item`;let a=_(`button`,r);return E(r,a),a.setAttribute(`type`,`button`),a.className=`join-item btn btn-primary`,E(a,l(`Subscribe`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}]}))),code:`<Footer
  className="p-10 bg-base-200 text-base-content rounded sm:footer-horizontal"
  sections={[
    ...sections,
    {
      key: 'newsletter',
      title: 'Newsletter',
      as: 'form',
      content: (
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
            <button type="button" className="join-item btn btn-primary">Subscribe</button>
          </div>
        </fieldset>
      ),
    },
  ]}
/>`}));x(()=>j(e,V,B))}),F(()=>{let a=i(Y,()=>({title:`Footer with logo and social icons`,summary:`展示品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:C,preview:w(()=>O(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:c(Object.assign(e=>{let t=de().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=y(r);return k(i,X,()=>({})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),sections:[{key:`social`,title:`Social`,content:e(()=>{let e=u(),a=ue().content.cloneNode(!0),o=a.firstChild.childNodes[0],s=o.parentNode;e.appendChild(a);let l=[];return F(()=>{l=P(s,o,l,Z||[],(e,t)=>e.key,(e,n)=>{let a=d(e);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`button`,e);t.setAttribute(`type`,`button`);let n;return F(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),b(()=>i(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>f(l)),e},!0)}]}))),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal"
  brand={
    <div>
      <BrandGlyph />
      <p className="text-sm mt-3 mb-3">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
    </div>
  }
  sections={[
    {
      key: 'social',
      title: 'Social',
      content: (
        <div className="grid grid-flow-col gap-4">
          <button type="button"><XIcon /></button>
          <button type="button"><VideoIcon /></button>
          <button type="button"><CommunityIcon /></button>
        </div>
      ),
    },
  ]}
/>`}));x(()=>j(a,se,H))}),F(()=>{let a=i(Y,()=>({title:`Footer with links and social icons`,summary:`展示混合场景；这里可以用 children 自由拼装，展示组合分支。`,tab:T,preview:w(()=>(()=>{let a=e(()=>{let e=u(),a=he().content.cloneNode(!0),o=a.firstChild.childNodes[1].childNodes[0],s=o.parentNode;e.appendChild(a);let l=[];return F(()=>{l=P(s,o,l,Z||[],(e,t)=>e.key,(e,n)=>{let a=d(e);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`button`,e);t.setAttribute(`type`,`button`);let n;return F(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),b(()=>i(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>f(l)),e});return i(q,()=>({className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[c(e=>pe().content.cloneNode(!0).firstChild),c(e=>me().content.cloneNode(!0).firstChild),a]}))})()),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
  <nav>
    <h6 className="footer-title">Services</h6>
    <button className="link link-hover">Branding</button>
    <button className="link link-hover">Design</button>
    <button className="link link-hover">Marketing</button>
    <button className="link link-hover">Advertisement</button>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <button type="button"><XIcon /></button>
      <button type="button"><VideoIcon /></button>
      <button type="button"><CommunityIcon /></button>
    </div>
  </nav>
</Footer>`}));x(()=>j(a,ce,U))}),F(()=>{let e=i(Y,()=>({title:`Links and social icons (two rows)`,summary:`展示两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:te,preview:w(()=>O(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:Ae}))),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`}));x(()=>j(e,G,W))}),F(()=>{let a=i(Y,()=>({title:`Centered footer with logo and social icons`,summary:`展示居中品牌场景；这里演示 center + 复合内容的组合。`,tab:M,preview:w(()=>(()=>{let a=e(()=>{let e=u(),t=ge().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[2].childNodes[1],o=a.parentNode;e.appendChild(t);let s=y(i);return k(s,X,()=>({size:50,className:`inline-block fill-current`})),i.insertBefore(s,r),F(()=>{let e=new Date().getFullYear();x(()=>j(e,o,a))}),e}),o=e(()=>{let e=u(),a=_e().content.cloneNode(!0),o=a.firstChild.childNodes[0].childNodes[0],s=o.parentNode;e.appendChild(a);let l=[];return F(()=>{l=P(s,o,l,Z||[],(e,t)=>e.key,(e,n)=>{let a=d(e);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`a`,e),n;return F(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),b(()=>i(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>f(l)),e});return i(q,()=>({className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[a,o]}))})()),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
  <aside>
    <BrandGlyph size={50} className="inline-block fill-current" />
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p className="text-sm mt-3 mb-3">Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><XIcon /></a>
      <a><VideoIcon /></a>
      <a><CommunityIcon /></a>
    </div>
  </nav>
</Footer>`}));x(()=>j(a,le,K))}),F(()=>{let a=i(Y,()=>({title:`Centered footer with social icons`,summary:`展示居中导航与版权场景；展示基础的 children 写法。`,tab:ne,preview:w(()=>(()=>{let a=e(()=>{let e=u(),a=_e().content.cloneNode(!0),o=a.firstChild.childNodes[0].childNodes[0],s=o.parentNode;e.appendChild(a);let l=[];return F(()=>{l=P(s,o,l,Z||[],(e,t)=>e.key,(e,n)=>{let a=d(e);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`button`,e);t.setAttribute(`type`,`button`);let n;return F(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),b(()=>i(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>f(l)),e}),o=e(()=>{let e=u(),t=ye().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[1],r=n.parentNode;return e.appendChild(t),F(()=>{let e=new Date().getFullYear();x(()=>j(e,r,n))}),e});return i(q,()=>({className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[c(e=>ve().content.cloneNode(!0).firstChild),a,o]}))})()),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
  <nav className="grid grid-flow-col gap-4">
    <button className="link link-hover">About us</button>
    <button className="link link-hover">Contact</button>
    <button className="link link-hover">Jobs</button>
    <button className="link link-hover">Press kit</button>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <button type="button"><XIcon /></button>
      <button type="button"><VideoIcon /></button>
      <button type="button"><CommunityIcon /></button>
    </div>
  </nav>
  <aside>
    <p className="text-sm mt-3 mb-3">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</Footer>`}));x(()=>j(a,xe,J))}),F(()=>{let a=i(Y,()=>({title:`Two footer`,summary:`双层 footer 场景展示；下半部分可配合 bordered 或直接使用原类名。`,tab:I,preview:w(()=>e(a=>{let s=be().content.cloneNode(!0).firstChild,p=s.childNodes[0],m=p.parentNode,g=s.childNodes[1],v=g.parentNode,S=y(m);return k(S,q,()=>({className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:Q})),m.insertBefore(S,p),F(()=>{let a=e(()=>{let e=u(),a=N(`nav`,e);h(e,a),o(a,`md:place-self-center md:justify-self-end`);let s=N(`div`,a);h(a,s),o(s,`grid grid-flow-col gap-4`);let l=ee(`rue:list:end`);E(s,l);let p=[];return F(()=>{p=P(s,l,p,Z||[],(e,t)=>e.key,(e,n)=>{let a=d(e);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=_(`a`,e),n;return F(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),b(()=>i(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),n(()=>f(p)),e}),s=i(q,()=>({className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[c(Object.assign(e=>{let t=_(`aside`,e);t.className=`grid-flow-col items-center`,k(t,X,()=>({size:24}));let n=_(`p`,t);E(t,n),n.className=`text-sm mt-3 mb-3`,E(n,l(`ACME Industries Ltd. `));let r=_(`br`,n);return E(n,r),E(n,l(` Providing reliable tech since 1992`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),a]}));x(()=>j(s,v,g))}),s})),code:`<div className="w-full">
  <Footer className="bg-base-200 text-base-content p-10 sm:footer-horizontal" sections={sections} />

  <Footer className="bg-base-200 text-base-content px-10 py-4 border-t border-base-300">
    <aside className="grid-flow-col items-center">
      <BrandGlyph size={24} />
      <p className="text-sm mt-3 mb-3">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>
    </aside>
    <nav className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
        <a><XIcon /></a>
        <a><VideoIcon /></a>
        <a><CommunityIcon /></a>
      </div>
    </nav>
  </Footer>
</div>`}));x(()=>j(a,Te,we))});let $=y(De);k($,Ce,()=>({rows:je})),De.insertBefore($,Ee);let Ne=y(ke);return k(Ne,Ce,()=>({rows:Me})),ke.insertBefore(Ne,Oe),m});return i(ie,()=>({children:m}))})(),e=>g(()=>{})))};export{$ as default};
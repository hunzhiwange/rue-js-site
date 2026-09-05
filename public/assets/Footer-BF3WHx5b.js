import{B as e,Bt as t,C as n,Et as r,G as i,H as a,K as o,Kt as s,L as c,Mt as l,S as u,Sn as d,V as f,W as p,X as m,Y as h,_n as g,_t as _,b as v,bn as y,fn as b,gn as x,gt as S,hn as C,ht as w,it as T,kn as E,mn as D,mt as O,nt as k,ot as A,pn as ee,q as j,rt as M,tt as N,vn as P,wn as F,x as I,yn as te,z as L}from"./rue-runtime-CwEGJ854.js";import{t as ne}from"./Code-DUvGro8N.js";import{t as R}from"./tabs-DUviBzjL.js";import{r as re}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var z=g(`<a><!--rue:text-hole:0--></a>`),ie=g(`<button><!--rue:text-hole:0--></button>`),B=g(`<div><!--rue:text-hole:0--></div>`),V=(...e)=>e.filter(Boolean).join(` `),H=e=>e==null?!1:!Array.isArray(e)||e.some(e=>H(e)),ae=e=>{let t=p(e.as),n=p(e.children),r=p(e.className),i=p(e.content),a=p(P(e,[`as`,`children`,`className`,`content`])),o=t.get()===void 0?`h6`:t.get();return j(_(o,()=>({...a.get(),className:V(`footer-title`,r.get()),children:i.get()??n.get()})),e=>L(()=>{t.set(e.as),n.set(e.children),r.set(e.className),i.set(e.content),a.set(P(e,[`as`,`children`,`className`,`content`]))}),()=>e)},U=t=>{let n=p(t.as),a=p(t.children),o=p(t.className),s=p(t.content),l=p(t.hover),u=p(t.href),d=p(t.rel),m=p(t.target),h=p(P(t,[`as`,`children`,`className`,`content`,`hover`,`href`,`rel`,`target`]));return j(e(()=>{let e=n.get()??(u.get()?`a`:`button`),t=m.get()===`_blank`&&!d.get()?`noreferrer`:d.get();return e===`a`?{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>w(e=>{let n=z().content.cloneNode(!0).firstChild,d=n,p=n.childNodes[0],g=p.parentNode;return F(()=>{O(d,h.get(),[`href`,`target`,`rel`,`className`])}),F(()=>{A(d,`href`,String(u.get()))}),F(()=>{A(d,`target`,String(m.get()))}),F(()=>{A(d,`rel`,String(t))}),F(()=>{c(d,V(`link`,(l.get()===void 0||l.get())&&`link-hover`,o.get()))}),f(g,p,()=>{let e=s.get();return e==null?{__rue_compiled_branch_key:null,create:()=>i(()=>a.get())}:{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),n})}:e===`button`?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>w(e=>{let t=ie().content.cloneNode(!0).firstChild,n=t,u=t.childNodes[0],d=u.parentNode;return F(()=>{O(n,h.get(),[`type`,`className`])}),F(()=>{A(n,`type`,String(h.get().type??`button`))}),F(()=>{c(n,V(`link`,(l.get()===void 0||l.get())&&`link-hover`,o.get()))}),f(d,u,()=>{let e=s.get();return e==null?{__rue_compiled_branch_key:null,create:()=>i(()=>a.get())}:{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),t})}:{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>_(e,()=>({...h.get(),className:V(`link`,(l.get()===void 0||l.get())&&`link-hover`,o.get()),children:s.get()??a.get()}))}}),e=>L(()=>{n.set(e.as),a.set(e.children),o.set(e.className),s.set(e.content),l.set(e.hover),u.set(e.href),d.set(e.rel),m.set(e.target),h.set(P(e,[`as`,`children`,`className`,`content`,`hover`,`href`,`rel`,`target`]))}),()=>t)},oe=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,W=(e,t)=>{if(!H(e))return null;if(oe(e)){let{key:n,label:r,content:i,children:a,...o}=e;return _(U,()=>({key:n??`item-${t}`,...o,children:i??a??r}))}return _(U,()=>({key:`item-${t}`,children:e}))},G=e=>{let t=p(e.as),n=p(e.children),r=p(e.className),i=p(e.content),a=p(P(e,[`as`,`children`,`className`,`content`])),o=t.get()===void 0?`aside`:t.get();return j(_(o,()=>({...a.get(),className:r.get(),children:i.get()??n.get()})),e=>L(()=>{t.set(e.as),n.set(e.children),r.set(e.className),i.set(e.content),a.set(P(e,[`as`,`children`,`className`,`content`]))}),()=>e)},K=s(e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:f,Component:p,hasCustomContent:g,__rue_phase2_hasCustomContent:v}=te(`useSetup:0:0`,()=>{let{as:t,className:n,children:r,title:i,titleClassName:a,content:o,items:s,inline:c,contentClassName:l,...u}=e,f=e.as===void 0?`nav`:e.as,p=d(()=>H(e.content)||H(e.children));return p.get(),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:f,hasCustomContent:p,__rue_phase2_hasCustomContent:p}});return(()=>{let t=_(ae,()=>({className:e.titleClassName,children:e.title})),n=w(()=>{let t=k(),n=N(`rue:slot:anchor`);return m(t,n),F(()=>{let r=g.get()?e.content??e.children:e.inline?w(()=>{let t=k(),n=B().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[0],o=a.parentNode;return t.appendChild(n),F(()=>{c(i,V(`grid grid-flow-col auto-cols-max gap-4`,e.contentClassName))}),F(()=>{let t=(e.items??[]).map((e,t)=>W(e,t));E(()=>h(t,o,a))}),t},!0):(e.items??[]).map((e,t)=>W(e,t));E(()=>h(r,t,n))}),t});return _(p,()=>({...f,className:e.className,children:[H(e.title)?t:void 0,n]}))})()}),se=s(e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:o,__rue_rest_omit_4:s,__rue_rest_omit_5:c,__rue_rest_omit_6:l,__rue_rest_omit_7:u,__rue_rest_omit_8:f,rest:p,Component:g,hasChildren:y,__rue_phase2_hasChildren:x,hasStructuredContent:S,__rue_phase2_hasStructuredContent:C}=te(`useSetup:0:0`,()=>{let{as:t,direction:n,center:r,className:i,children:a,brand:o,sections:s,wrap:c,bordered:l,...u}=e,f=e.as===void 0?`footer`:e.as,p=d(()=>H(e.children));p.get();let m=p,h=d(()=>H(e.brand)||(e.sections?.length??0)>0);return h.get(),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:f,hasChildren:p,__rue_phase2_hasChildren:m,hasStructuredContent:h,__rue_phase2_hasStructuredContent:h}});return(()=>{let t=w(()=>{let t=k(),n=N(`rue:slot:anchor`);return m(t,n),F(()=>{let i=y.get()||!S.get()?e.children:w(()=>{let t=k();m(t,T(` `));let n=N(`rue:slot:anchor`);m(t,n),F(()=>{let i=H(e.brand)?a(G,()=>({children:(t,n,i)=>I(t,i,()=>r(Object.assign(t=>{let n=k(),r=ee(`rue:compiled-slot`);return b(n,r),v({parent:n,before:r},()=>e.brand,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})):``;E(()=>h(i,t,n))}),m(t,T(` `));let i=N(`rue:slot:anchor`);return m(t,i),F(()=>{let n=(e.sections??[]).map((e,t)=>{let{key:n,...r}=e;return _(K,()=>({key:n??`section-${t}`,...r}))});E(()=>h(n,t,i))}),m(t,T(` `)),t},!0);E(()=>h(i,t,n))}),t});return _(g,()=>({...p,className:V(`footer`,e.direction&&`footer-${e.direction}`,e.center&&`footer-center`,e.wrap&&`gap-y-6`,e.bordered&&`border-t border-base-300`,e.className),children:t}))})()}),q=Object.assign(se,{Brand:G,Section:K,Title:ae,Link:U}),ce=g(`<div class="grid grid-flow-col gap-4"><!--rue:text-hole:0--></div>`),le=g(`<div><!--rue:opaque-hole:0--><p class="text-sm mt-3 mb-3">ACME Industries Ltd. <br> Providing reliable tech since 1992</p></div>`),ue=g(`<p class="text-sm mt-3 mb-3">Rue Design System <br> Ship consistent experiences.</p>`),de=g(`<nav><h6 class="footer-title">Services</h6><button class="link link-hover">Branding</button><button class="link link-hover">Design</button><button class="link link-hover">Marketing</button><button class="link link-hover">Advertisement</button></nav>`),fe=g(`<nav><h6 class="footer-title">Company</h6><button class="link link-hover">About us</button><button class="link link-hover">Contact</button><button class="link link-hover">Jobs</button><button class="link link-hover">Press kit</button></nav>`),pe=g(`<nav><h6 class="footer-title">Social</h6><div class="grid grid-flow-col gap-4"><!--rue:text-hole:0--></div></nav>`),me=g(`<aside><!--rue:opaque-hole:0--><p class="font-bold">ACME Industries Ltd. <br> Providing reliable tech since 1992</p><p class="text-sm mt-3 mb-3">Copyright © <!--rue:text-hole:1--> - All right reserved</p></aside>`),he=g(`<nav><div class="grid grid-flow-col gap-4"><!--rue:text-hole:0--></div></nav>`),ge=g(`<nav class="grid grid-flow-col gap-4"><button class="link link-hover">About us</button><button class="link link-hover">Contact</button><button class="link link-hover">Jobs</button><button class="link link-hover">Press kit</button></nav>`),_e=g(`<aside><p class="text-sm mt-3 mb-3">Copyright © <!--rue:text-hole:0--> - All right reserved by ACME Industries Ltd</p></aside>`),ve=g(`<div class="w-full"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),J=g(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),ye=g(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),be=g(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Footer 页脚</h1><p class="text-sm mt-3 mb-3">Footer 现在同时支持两种组织方式：可以继续像直接写 <code>nav</code>、<code>aside</code> 和 自定义 class，也可以改用 <code>brand</code>、<code>sections</code> 与 <code>Footer.Section</code> 这组结构化 API，把品牌区、链接列和表单区拆开表达。</p><h2>何时使用</h2><ul><li>需要组织品牌信息、导航链接、社交入口或版权声明。</li><li>希望使用 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2 id="footer-api">API</h2><p>当前页展示的是语义化的 Footer API，基础的 children 写法仍然可用。</p><h3>Footer</h3><!--rue:opaque-hole:11--><h3 class="mt-8">Footer.Section</h3><!--rue:opaque-hole:12--><div class="not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4"><h3 class="mt-0 mb-3 text-base font-semibold">复合子组件</h3><div class="grid gap-2 text-sm md:grid-cols-2"><div><code>Footer.Brand</code>：品牌或版权信息容器，默认渲染 <code>aside</code></div><div><code>Footer.Title</code>：带 <code>footer-title</code> 类名的标题节点</div><div><code>Footer.Link</code>：默认输出带 <code>link link-hover</code> 的文本链接</div><div><code>Footer.Section</code>：单列容器，支持 <code>title</code>、<code>items</code>、 <code>content</code></div></div></div><h2>FAQ</h2><h3>什么时候用 sections，什么时候可以写 children？</h3><p>列结构比较规则时，优先用 <code>sections</code> ，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的 <code>nav</code>/<code>aside</code> 模板，也可以继续直接写 <code>children</code>。</p><h3>社交图标和订阅表单怎么放进去？</h3><p>这类内容更适合放到 <code>Footer.Section</code> 的 <code>content</code> 里；如果只是普通文本链接，再用 <code>items</code> 会更省代码。</p><h3>direction 和 center 还需要保持吗？</h3><p>需要。它们仍然是最轻量的布局开关，适合和当前的 <code>sm:footer-horizontal</code>、 <code>footer-center</code> 类名习惯一起工作，不会破坏项目页面的视觉结果。</p></div>`),Y=e=>w(t=>{let n=J().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=i.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=n.childNodes[1],d=u.parentNode,p=n.childNodes[2],m=p.parentNode;v({parent:s,before:i},()=>e.title,()=>({})),f(l,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let n=C(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=ee(`rue:compiled-slot`);return b(n,r),v({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=k();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let g=D(d);return o(g,R,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),d.insertBefore(g,u),F(()=>{let t=e.tab.value===`preview`?e.preview():a(ne,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));E(()=>h(t,m,p))}),n}),xe=e=>{let t=p(e.rows);return j(r(Object.assign(e=>{let i=ye().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return F(()=>{let e=t.get()||[];s=n(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`tr`,e),r=C(`td`,t);b(t,r);let i=C(`code`,r);b(r,i);let a=x(``);b(i,a),y(a,()=>n.get().prop);let o=C(`td`,t);b(t,o);let s=x(``);b(o,s),y(s,()=>n.get().description);let c=C(`td`,t);b(t,c);let l=C(`code`,c);b(c,l);let u=x(``);b(l,u),y(u,()=>n.get().type);let d=C(`td`,t);b(t,d);let f=C(`code`,d);b(d,f);let p=x(``);return b(f,p),y(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>L(()=>{t.set(e.rows)}),()=>e)},X=e=>{let t=p(e.className),n=p(e.size);return j(w(()=>{let e=k(),r=M(`svg`,e);m(e,r),F(()=>{A(r,`width`,String(n.get()===void 0?40:n.get()))}),F(()=>{A(r,`height`,String(n.get()===void 0?40:n.get()))}),A(r,`viewBox`,`0 0 24 24`),F(()=>{c(r,t.get()??`fill-current`)});let i=M(`path`,r);return m(r,i),A(i,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),e},!0),e=>L(()=>{t.set(e.className),n.set(e.size)}),()=>e)},Z=[{key:`x`,Icon:()=>j(w(()=>{let e=k(),t=M(`svg`,e);m(e,t),A(t,`xmlns`,`http://www.w3.org/2000/svg`),A(t,`width`,`24`),A(t,`height`,`24`),A(t,`viewBox`,`0 0 24 24`),c(t,`fill-current`);let n=M(`path`,t);return m(t,n),A(n,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),e},!0),e=>L(()=>{}))},{key:`video`,Icon:()=>j(w(()=>{let e=k(),t=M(`svg`,e);m(e,t),A(t,`xmlns`,`http://www.w3.org/2000/svg`),A(t,`width`,`24`),A(t,`height`,`24`),A(t,`viewBox`,`0 0 24 24`),c(t,`fill-current`);let n=M(`path`,t);return m(t,n),A(n,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),e},!0),e=>L(()=>{}))},{key:`community`,Icon:()=>j(w(()=>{let e=k(),t=M(`svg`,e);m(e,t),A(t,`xmlns`,`http://www.w3.org/2000/svg`),A(t,`width`,`24`),A(t,`height`,`24`),A(t,`viewBox`,`0 0 24 24`),c(t,`fill-current`);let n=M(`path`,t);return m(t,n),A(n,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),e},!0),e=>L(()=>{}))}],Se=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],Ce=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],we=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],Q=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],Te=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],Ee=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],$=[{key:`services`,title:`Services`,items:Se},{key:`company`,title:`Company`,items:Ce},{key:`legal`,title:`Legal`,items:we}],De=[...$,{key:`social`,title:`Social`,items:Q},{key:`explore`,title:`Explore`,items:Te},{key:`apps`,title:`Apps`,items:Ee}],Oe=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后使用基础自定义结构，保持对基础写法的支持`,type:`any`,defaultValue:`-`}],ke=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],Ae=()=>{let e=t(`preview`),i=t(`preview`),d=t(`preview`),f=t(`preview`),g=t(`preview`),v=t(`preview`),y=t(`preview`),T=t(`preview`),O=t(`preview`),A=t(`preview`),N=t(`preview`);return l(()=>j((()=>{let t=w(()=>{let t=k(),l=be().content.cloneNode(!0),j=l.firstChild,P=j.childNodes[4],te=P.parentNode,L=j.childNodes[5],ne=L.parentNode,R=j.childNodes[6],re=R.parentNode,z=j.childNodes[7],ie=z.parentNode,B=j.childNodes[8],V=B.parentNode,H=j.childNodes[9],ae=H.parentNode,U=j.childNodes[10],oe=U.parentNode,W=j.childNodes[11],G=W.parentNode,K=j.childNodes[12],se=K.parentNode,J=j.childNodes[13],ye=J.parentNode,Se=j.childNodes[14],Ce=Se.parentNode,we=j.childNodes[18],Q=we.parentNode,Te=j.childNodes[20],Ee=Te.parentNode;t.appendChild(l),F(()=>{let t=_(Y,()=>({title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然提供当前视觉类名和响应式方向。`,tab:e,preview:s(()=>a(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:$}))),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`}));E(()=>h(t,te,P))}),F(()=>{let e=_(Y,()=>({title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:i,preview:s(()=>(()=>{let e=_(X,()=>({})),t=_(q.Brand,()=>({children:[e,r(e=>ue().content.cloneNode(!0).firstChild)]})),i=_(q.Link,()=>({children:`Overview`})),a=_(q.Link,()=>({children:`Pricing`})),o=_(q.Link,()=>({children:`Changelog`})),s=_(q.Section,()=>({title:`Product`,children:[i,a,o]})),c=_(q.Section,()=>({title:`Community`,content:w(()=>{let e=k(),t=ce().content.cloneNode(!0),i=t.firstChild.childNodes[0],a=i.parentNode;e.appendChild(t);let o=[];return F(()=>{o=n(a,i,o,Z||[],(e,t)=>e.key,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`button`,e);t.setAttribute(`type`,`button`);let r;return F(()=>{let e=n.get().key;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),S(()=>_(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e},!0)}));return _(q,()=>({className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[t,s,c]}))})()),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`}));E(()=>h(e,ne,L))}),F(()=>{let e=_(Y,()=>({title:`Footer（默认纵向，sm 起横向）`,summary:`基础示例 展示，这里改用 sections 表达同一个场景。`,tab:d,preview:s(()=>a(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:$}))),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`}));E(()=>h(e,re,R))}),F(()=>{let e=_(Y,()=>({title:`Footer with a logo section`,summary:`展示品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:f,preview:s(()=>a(q,()=>({className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:r(Object.assign(e=>{let t=le().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=D(r);return o(i,X,()=>({})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),sections:$}))),code:`<Footer
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
/>`}));E(()=>h(e,ie,z))}),F(()=>{let e=_(Y,()=>({title:`Footer with a form`,summary:`展示订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:g,preview:s(()=>a(q,()=>({className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...$,{key:`newsletter`,title:`Newsletter`,as:`form`,content:r(Object.assign(e=>{let t=C(`fieldset`,e);t.className=`w-80`;let n=C(`label`,t);b(t,n),b(n,x(`Enter your email address`));let r=C(`div`,t);b(t,r),r.className=`join`;let i=C(`input`,r);b(r,i),i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`username@site.com`),i.className=`input input-bordered join-item`;let a=C(`button`,r);return b(r,a),a.setAttribute(`type`,`button`),a.className=`join-item btn btn-primary`,b(a,x(`Subscribe`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}]}))),code:`<Footer
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
/>`}));E(()=>h(e,V,B))}),F(()=>{let e=_(Y,()=>({title:`Footer with logo and social icons`,summary:`展示品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:v,preview:s(()=>a(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:r(Object.assign(e=>{let t=le().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=D(r);return o(i,X,()=>({})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),sections:[{key:`social`,title:`Social`,content:w(()=>{let e=k(),t=ce().content.cloneNode(!0),i=t.firstChild.childNodes[0],a=i.parentNode;e.appendChild(t);let o=[];return F(()=>{o=n(a,i,o,Z||[],(e,t)=>e.key,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`button`,e);t.setAttribute(`type`,`button`);let r;return F(()=>{let e=n.get().key;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),S(()=>_(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e},!0)}]}))),code:`<Footer
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
/>`}));E(()=>h(e,ae,H))}),F(()=>{let e=_(Y,()=>({title:`Footer with links and social icons`,summary:`展示混合场景；这里可以用 children 自由拼装，展示组合分支。`,tab:y,preview:s(()=>(()=>{let e=w(()=>{let e=k(),t=pe().content.cloneNode(!0),i=t.firstChild.childNodes[1].childNodes[0],a=i.parentNode;e.appendChild(t);let o=[];return F(()=>{o=n(a,i,o,Z||[],(e,t)=>e.key,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`button`,e);t.setAttribute(`type`,`button`);let r;return F(()=>{let e=n.get().key;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),S(()=>_(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e});return _(q,()=>({className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[r(e=>de().content.cloneNode(!0).firstChild),r(e=>fe().content.cloneNode(!0).firstChild),e]}))})()),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`}));E(()=>h(e,oe,U))}),F(()=>{let e=_(Y,()=>({title:`Links and social icons (two rows)`,summary:`展示两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:T,preview:s(()=>a(q,()=>({className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:De}))),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`}));E(()=>h(e,G,W))}),F(()=>{let e=_(Y,()=>({title:`Centered footer with logo and social icons`,summary:`展示居中品牌场景；这里演示 center + 复合内容的组合。`,tab:O,preview:s(()=>(()=>{let e=w(()=>{let e=k(),t=me().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[2].childNodes[1],s=a.parentNode;e.appendChild(t);let c=D(i);return o(c,X,()=>({size:50,className:`inline-block fill-current`})),i.insertBefore(c,r),F(()=>{let e=new Date().getFullYear();E(()=>h(e,s,a))}),e}),t=w(()=>{let e=k(),t=he().content.cloneNode(!0),i=t.firstChild.childNodes[0].childNodes[0],a=i.parentNode;e.appendChild(t);let o=[];return F(()=>{o=n(a,i,o,Z||[],(e,t)=>e.key,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`a`,e),r;return F(()=>{let e=n.get().key;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),S(()=>_(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e});return _(q,()=>({className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[e,t]}))})()),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`}));E(()=>h(e,se,K))}),F(()=>{let e=_(Y,()=>({title:`Centered footer with social icons`,summary:`展示居中导航与版权场景；展示基础的 children 写法。`,tab:A,preview:s(()=>(()=>{let e=w(()=>{let e=k(),t=he().content.cloneNode(!0),i=t.firstChild.childNodes[0].childNodes[0],a=i.parentNode;e.appendChild(t);let o=[];return F(()=>{o=n(a,i,o,Z||[],(e,t)=>e.key,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`button`,e);t.setAttribute(`type`,`button`);let r;return F(()=>{let e=n.get().key;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),S(()=>_(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e}),t=w(()=>{let e=k(),t=_e().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[1],r=n.parentNode;return e.appendChild(t),F(()=>{let e=new Date().getFullYear();E(()=>h(e,r,n))}),e});return _(q,()=>({className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[r(e=>ge().content.cloneNode(!0).firstChild),e,t]}))})()),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`}));E(()=>h(e,ye,J))}),F(()=>{let e=_(Y,()=>({title:`Two footer`,summary:`双层 footer 场景展示；下半部分可配合 bordered 或直接使用原类名。`,tab:N,preview:s(()=>w(e=>{let t=ve().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,s=t.childNodes[1],l=s.parentNode,d=D(a);return o(d,q,()=>({className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:$})),a.insertBefore(d,i),F(()=>{let e=w(()=>{let e=k(),t=M(`nav`,e);m(e,t),c(t,`md:place-self-center md:justify-self-end`);let i=M(`div`,t);m(t,i),c(i,`grid grid-flow-col gap-4`);let a=ee(`rue:list:end`);b(i,a);let o=[];return F(()=>{o=n(i,a,o,Z||[],(e,t)=>e.key,(e,t)=>{let n=p(e),i=p(t);return u((e,t,i)=>I(e,i,()=>r(Object.assign(e=>{let t=C(`a`,e),r;return F(()=>{let e=n.get().key;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))}),S(()=>_(Icon,()=>({}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),e}),t=_(q,()=>({className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[r(Object.assign(e=>{let t=C(`aside`,e);t.className=`grid-flow-col items-center`,o(t,X,()=>({size:24}));let n=C(`p`,t);b(t,n),n.className=`text-sm mt-3 mb-3`,b(n,x(`ACME Industries Ltd. `));let r=C(`br`,n);return b(n,r),b(n,x(` Providing reliable tech since 1992`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e]}));E(()=>h(t,l,s))}),t})),code:`<div className="w-full">
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
</div>`}));E(()=>h(e,Ce,Se))});let Ae=D(Q);o(Ae,xe,()=>({rows:Oe})),Q.insertBefore(Ae,we);let je=D(Ee);return o(je,xe,()=>({rows:ke})),Ee.insertBefore(je,Te),t});return _(re,()=>({children:t}))})(),e=>L(()=>{})))};export{Ae as default};
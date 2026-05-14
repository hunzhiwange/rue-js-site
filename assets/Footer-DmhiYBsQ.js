import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,f as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as y,t as b}from"./src-BaNG2YQR.js";import{n as x}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as S}from"./Code-CLTo4rRM.js";import{t as C}from"./tabs-CxVJfyAw.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=({as:e=`h6`,className:t,children:n,content:r,...i})=>b(e,{...i,className:w(`footer-title`,t),children:r??n}),D=({as:e,className:t,children:n,content:r,href:i,target:a,rel:o,hover:s=!0,...c})=>{let l=e??(i?`a`:`button`),u=a===`_blank`&&!o?`noreferrer`:o;return l===`a`?b(`a`,{...c,href:i,target:a,rel:u,className:w(`link`,s&&`link-hover`,t),children:r??n}):l===`button`?b(`button`,{...c,type:c.type??`button`,className:w(`link`,s&&`link-hover`,t),children:r??n}):b(l,{...c,className:w(`link`,s&&`link-hover`,t),children:r??n})},ee=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,te=(e,t)=>{if(!T(e))return null;if(ee(e)){let{key:n,label:r,content:i,children:a,...o}=e;return b(D,{...o,children:i??a??r},n??`item-${t}`)}return b(D,{children:e},`item-${t}`)},O=({as:e=`aside`,className:t,children:n,content:r,...i})=>b(e,{...i,className:t,children:r??n}),k=({as:e=`nav`,className:t,children:n,title:r,titleClassName:i,content:a,items:o,inline:s,contentClassName:c,...l})=>{let u=e,d=(o??[]).map((e,t)=>te(e,t)).filter(Boolean),f=T(a)||T(n)?a??n:s?b(`div`,{className:w(`grid grid-flow-col auto-cols-max gap-4`,c),children:d}):d;return y(u,{...l,className:t,children:[T(r)?b(E,{className:i,children:r}):null,f]})},A=Object.assign(({as:e=`footer`,direction:t,center:n,className:r,children:i,brand:a,sections:o,wrap:s,bordered:c,...l})=>{let d=e,f=T(i),p=T(a)||(o?.length??0)>0;return b(d,{...l,className:w(`footer`,t&&`footer-${t}`,n&&`footer-center`,s&&`gap-y-6`,c&&`border-t border-base-300`,r),children:f||!p?i:y(u,{children:[T(a)?b(O,{children:a}):null,(o??[]).map((e,t)=>{let{key:n,...r}=e;return b(k,{...r},n??`section-${t}`)})]})})},{Brand:O,Section:k,Title:E,Link:D}),j=a=>l(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,f);i(f,p);let g=r(`h2`,p);i(p,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),c(()=>{let e=a.title;h(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(p,v),c(()=>{let o=a.summary?l(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=a.summary;h(()=>d(e,s,l))}),o}):``;h(()=>d(o,p,v))});let y=e(`rue:component:anchor`);i(u,y),c(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),c(()=>{let n=a.tab.value===`preview`?a.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=m(S,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>d(e,n,r))}),n});h(()=>d(n,u,b))}),u}),ne=a=>l(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),c(()=>{let e=n.prop;h(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;h(()=>d(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;h(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;h(()=>d(e,b,x))}),a}),a,o)}})}),f}),M=e=>l(t=>{let a=r(`svg`,t);c(()=>{s(a,`width`,String(e.size===void 0?40:e.size))}),c(()=>{s(a,`height`,String(e.size===void 0?40:e.size))}),s(a,`viewBox`,`0 0 24 24`),c(()=>{n(a,String(e.className??`fill-current`))});let o=r(`path`,a);return i(a,o),s(o,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),a}),N=[{key:`x`,Icon:()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`width`,`24`),s(t,`height`,`24`),s(t,`viewBox`,`0 0 24 24`),n(t,`fill-current`);let a=r(`path`,t);return i(t,a),s(a,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),t})},{key:`video`,Icon:()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`width`,`24`),s(t,`height`,`24`),s(t,`viewBox`,`0 0 24 24`),n(t,`fill-current`);let a=r(`path`,t);return i(t,a),s(a,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),t})},{key:`community`,Icon:()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`width`,`24`),s(t,`height`,`24`),s(t,`viewBox`,`0 0 24 24`),n(t,`fill-current`);let a=r(`path`,t);return i(t,a),s(a,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),t})}],P=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],F=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],I=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],L=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],R=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],z=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],B=[{key:`services`,title:`Services`,items:P},{key:`company`,title:`Company`,items:F},{key:`legal`,title:`Legal`,items:I}],re=[...B,{key:`social`,title:`Social`,items:L},{key:`explore`,title:`Explore`,items:R},{key:`apps`,title:`Apps`,items:z}],ie=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],V=()=>{let{tabRecommended:u,tabCompound:v,tabBasic:S,tabLogo:C,tabForm:w,tabSocial:T,tabLinks:E,tabLinks2:D,tabCenteredBrand:ee,tabCentered:te,tabTwo:O}=_(`useSetup:0:0`,()=>f(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabCompound:_(`ref:1:1`,()=>p(`preview`)),tabBasic:_(`ref:1:2`,()=>p(`preview`)),tabLogo:_(`ref:1:3`,()=>p(`preview`)),tabForm:_(`ref:1:4`,()=>p(`preview`)),tabSocial:_(`ref:1:5`,()=>p(`preview`)),tabLinks:_(`ref:1:6`,()=>p(`preview`)),tabLinks2:_(`ref:1:7`,()=>p(`preview`)),tabCenteredBrand:_(`ref:1:8`,()=>p(`preview`)),tabCentered:_(`ref:1:9`,()=>p(`preview`)),tabTwo:_(`ref:1:10`,()=>p(`preview`))})));return l(f=>{let p=t(),_=e(`rue:component:anchor`);return i(p,_),d(m(x,{children:l(()=>{let l=t(),f=r(`div`,l);i(l,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,o(`Footer 页脚`));let _=r(`p`,f);i(f,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let x=r(`code`,_);i(_,x),i(x,o(`nav`)),i(_,o(`、`));let k=r(`code`,_);i(_,k),i(k,o(`aside`)),i(_,o(`和 自定义 class，也可以改用`));let P=r(`code`,_);i(_,P),i(P,o(`brand`)),i(_,o(`、`));let F=r(`code`,_);i(_,F),i(F,o(`sections`));let I=g(_);i(_,I),a(I,` `),i(_,o(`与`));let L=r(`code`,_);i(_,L),i(L,o(`Footer.Section`)),i(_,o(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let R=r(`div`,f);i(f,R),n(R,`text-sm flex flex-wrap gap-4`);let z=r(`a`,R);i(R,z),s(z,`href`,`https://daisyui.com/components/footer/`),s(z,`target`,`_blank`),i(z,o(`查看 Footer 静态样式`));let V=r(`h2`,f);i(f,V),i(V,o(`何时使用`));let H=r(`ul`,f);i(f,H);let oe=r(`li`,H);i(H,oe),i(oe,o(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let se=r(`li`,H);i(H,se),i(se,o(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ce=e(`rue:component:anchor`);i(f,ce),c(()=>{let e=m(j,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:u,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});h(()=>d(e,f,ce))});let le=e(`rue:component:anchor`);i(f,le),c(()=>{let e=m(j,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:v,preview:()=>y(A,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[y(A.Brand,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,b(`br`,{}),`Ship consistent experiences.`]})]}),y(A.Section,{title:`Product`,children:[b(A.Link,{children:`Overview`}),b(A.Link,{children:`Pricing`}),b(A.Link,{children:`Changelog`})]}),b(A.Section,{title:`Community`,content:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});h(()=>d(e,f,le))});let ue=e(`rue:component:anchor`);i(f,ue),c(()=>{let e=m(j,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:S,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});h(()=>d(e,f,ue))});let de=e(`rue:component:anchor`);i(f,de),c(()=>{let e=m(j,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:C,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:y(`div`,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:B}),code:`<Footer
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
/>`});h(()=>d(e,f,de))});let fe=e(`rue:component:anchor`);i(f,fe),c(()=>{let e=m(j,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:w,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...B,{key:`newsletter`,title:`Newsletter`,as:`form`,content:y(`fieldset`,{className:`w-80`,children:[b(`label`,{children:`Enter your email address`}),y(`div`,{className:`join`,children:[b(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),b(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});h(()=>d(e,f,fe))});let pe=e(`rue:component:anchor`);i(f,pe),c(()=>{let e=m(j,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:T,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:y(`div`,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})}]}),code:`<Footer
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
/>`});h(()=>d(e,f,pe))});let me=e(`rue:component:anchor`);i(f,me),c(()=>{let e=m(j,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>y(A,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Services`}),b(`button`,{className:`link link-hover`,children:`Branding`}),b(`button`,{className:`link link-hover`,children:`Design`}),b(`button`,{className:`link link-hover`,children:`Marketing`}),b(`button`,{className:`link link-hover`,children:`Advertisement`})]}),y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Company`}),b(`button`,{className:`link link-hover`,children:`About us`}),b(`button`,{className:`link link-hover`,children:`Contact`}),b(`button`,{className:`link link-hover`,children:`Jobs`}),b(`button`,{className:`link link-hover`,children:`Press kit`})]}),y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Social`}),b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});h(()=>d(e,f,me))});let he=e(`rue:component:anchor`);i(f,he),c(()=>{let e=m(j,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:re}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});h(()=>d(e,f,he))});let ge=e(`rue:component:anchor`);i(f,ge),c(()=>{let e=m(j,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:ee,preview:()=>y(A,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[y(`aside`,{children:[b(M,{size:50,className:`inline-block fill-current`}),y(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),b(`nav`,{children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`a`,{"aria-label":e,children:b(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});h(()=>d(e,f,ge))});let _e=e(`rue:component:anchor`);i(f,_e),c(()=>{let e=m(j,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:te,preview:()=>y(A,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[y(`nav`,{className:`grid grid-flow-col gap-4`,children:[b(`button`,{className:`link link-hover`,children:`About us`}),b(`button`,{className:`link link-hover`,children:`Contact`}),b(`button`,{className:`link link-hover`,children:`Jobs`}),b(`button`,{className:`link link-hover`,children:`Press kit`})]}),b(`nav`,{children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})}),b(`aside`,{children:y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});h(()=>d(e,f,_e))});let ve=e(`rue:component:anchor`);i(f,ve),c(()=>{let e=m(j,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:O,preview:()=>y(`div`,{className:`w-full`,children:[b(A,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:B}),y(A,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[y(`aside`,{className:`grid-flow-col items-center`,children:[b(M,{size:24}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),b(`nav`,{className:`md:place-self-center md:justify-self-end`,children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`a`,{"aria-label":e,children:b(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});h(()=>d(e,f,ve))});let U=r(`h2`,f);i(f,U),s(U,`id`,`footer-api`),i(U,o(`API`));let ye=r(`p`,f);i(f,ye),i(ye,o(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let be=r(`h3`,f);i(f,be),i(be,o(`Footer`));let xe=e(`rue:component:anchor`);i(f,xe),c(()=>{let e=m(ne,{rows:ie});h(()=>d(e,f,xe))});let W=r(`h3`,f);i(f,W),n(W,`mt-8`),i(W,o(`Footer.Section`));let Se=e(`rue:component:anchor`);i(f,Se),c(()=>{let e=m(ne,{rows:ae});h(()=>d(e,f,Se))});let G=r(`div`,f);i(f,G),n(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let Ce=r(`h3`,G);i(G,Ce),n(Ce,`mt-0 mb-3 text-base font-semibold`),i(Ce,o(`复合子组件`));let K=r(`div`,G);i(G,K),n(K,`grid gap-2 text-sm md:grid-cols-2`);let q=r(`div`,K);i(K,q);let we=r(`code`,q);i(q,we),i(we,o(`Footer.Brand`)),i(q,o(`：品牌或版权信息容器，默认渲染`));let Te=r(`code`,q);i(q,Te),i(Te,o(`aside`));let J=r(`div`,K);i(K,J);let Ee=r(`code`,J);i(J,Ee),i(Ee,o(`Footer.Title`)),i(J,o(`：带`));let De=r(`code`,J);i(J,De),i(De,o(`footer-title`)),i(J,o(`类名的标题节点`));let Y=r(`div`,K);i(K,Y);let Oe=r(`code`,Y);i(Y,Oe),i(Oe,o(`Footer.Link`)),i(Y,o(`：默认输出带`));let ke=r(`code`,Y);i(Y,ke),i(ke,o(`link link-hover`)),i(Y,o(`的文本链接`));let X=r(`div`,K);i(K,X);let Ae=r(`code`,X);i(X,Ae),i(Ae,o(`Footer.Section`)),i(X,o(`：单列容器，支持`));let je=r(`code`,X);i(X,je),i(je,o(`title`)),i(X,o(`、`));let Me=r(`code`,X);i(X,Me),i(Me,o(`items`)),i(X,o(`、`));let Ne=r(`code`,X);i(X,Ne),i(Ne,o(`content`));let Pe=r(`h2`,f);i(f,Pe),i(Pe,o(`FAQ`));let Fe=r(`h3`,f);i(f,Fe),i(Fe,o(`什么时候用 sections，什么时候继续写 children？`));let Z=r(`p`,f);i(f,Z),i(Z,o(`列结构比较规则时，优先用`));let Ie=r(`code`,Z);i(Z,Ie),i(Ie,o(`sections`)),i(Z,o(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Le=r(`code`,Z);i(Z,Le),i(Le,o(`nav`)),i(Z,o(`/`));let Re=r(`code`,Z);i(Z,Re),i(Re,o(`aside`)),i(Z,o(`模板，也可以继续直接写`));let ze=r(`code`,Z);i(Z,ze),i(ze,o(`children`)),i(Z,o(`。`));let Be=r(`h3`,f);i(f,Be),i(Be,o(`社交图标和订阅表单怎么放进去？`));let Q=r(`p`,f);i(f,Q),i(Q,o(`这类内容更适合放到`));let Ve=r(`code`,Q);i(Q,Ve),i(Ve,o(`Footer.Section`)),i(Q,o(`的`));let He=r(`code`,Q);i(Q,He),i(He,o(`content`));let Ue=g(Q);i(Q,Ue),a(Ue,` `),i(Q,o(`里；如果只是普通文本链接，再用`));let We=r(`code`,Q);i(Q,We),i(We,o(`items`)),i(Q,o(`会更省代码。`));let Ge=r(`h3`,f);i(f,Ge),i(Ge,o(`direction 和 center 还需要保留吗？`));let $=r(`p`,f);i(f,$),i($,o(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let Ke=r(`code`,$);i($,Ke),i(Ke,o(`sm:footer-horizontal`)),i($,o(`、`));let qe=r(`code`,$);return i($,qe),i(qe,o(`footer-center`)),i($,o(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),l})}),p,_),p})};export{V as default};
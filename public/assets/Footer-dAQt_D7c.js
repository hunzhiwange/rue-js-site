import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,m as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./tabs-CWmjyn0I.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=({as:e=`h6`,className:t,children:n,content:r,...i})=>b(e,{...i,className:w(`footer-title`,t),children:r??n}),D=({as:e,className:t,children:n,content:r,href:i,target:a,rel:o,hover:s=!0,...c})=>{let l=e??(i?`a`:`button`),u=a===`_blank`&&!o?`noreferrer`:o;return l===`a`?b(`a`,{...c,href:i,target:a,rel:u,className:w(`link`,s&&`link-hover`,t),children:r??n}):l===`button`?b(`button`,{...c,type:c.type??`button`,className:w(`link`,s&&`link-hover`,t),children:r??n}):b(l,{...c,className:w(`link`,s&&`link-hover`,t),children:r??n})},ee=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,te=(e,t)=>{if(!T(e))return null;if(ee(e)){let{key:n,label:r,content:i,children:a,...o}=e;return b(D,{...o,children:i??a??r},n??`item-${t}`)}return b(D,{children:e},`item-${t}`)},O=({as:e=`aside`,className:t,children:n,content:r,...i})=>b(e,{...i,className:t,children:r??n}),k=({as:e=`nav`,className:t,children:n,title:r,titleClassName:i,content:a,items:o,inline:s,contentClassName:c,...l})=>{let u=e,d=(o??[]).map((e,t)=>te(e,t)).filter(Boolean),f=T(a)||T(n)?a??n:s?b(`div`,{className:w(`grid grid-flow-col auto-cols-max gap-4`,c),children:d}):d;return y(u,{...l,className:t,children:[T(r)?b(E,{className:i,children:r}):null,f]})},A=Object.assign(({as:e=`footer`,direction:t,center:n,className:r,children:i,brand:a,sections:o,wrap:s,bordered:c,...l})=>{let d=e,f=T(i),p=T(a)||(o?.length??0)>0;return b(d,{...l,className:w(`footer`,t&&`footer-${t}`,n&&`footer-center`,s&&`gap-y-6`,c&&`border-t border-base-300`,r),children:f||!p?i:y(u,{children:[T(a)?b(O,{children:a}):null,(o??[]).map((e,t)=>{let{key:n,...r}=e;return b(k,{...r},n??`section-${t}`)})]})})},{Brand:O,Section:k,Title:E,Link:D}),j=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>m(e,g,_))});let v=o(`rue:slot:anchor`);a(p,v),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>m(e,l,u))}),c}):``;t(()=>m(c,p,v))});let y=o(`rue:component:anchor`);a(d,y),i(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,d,y))});let b=o(`rue:slot:anchor`);return a(d,b),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,s))}),e});t(()=>m(e,d,b))}),d}),ne=r=>l(u=>{let d=e(`div`,u);s(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);a(d,p),s(p,`table table-zebra`);let h=e(`thead`,p);a(p,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,c(`属性`));let y=e(`th`,g);a(g,y),a(y,c(`说明`));let b=e(`th`,g);a(g,b),a(b,c(`类型`));let x=e(`th`,g);a(g,x),a(x,c(`默认值`));let S=e(`tbody`,p);a(p,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,u,d)=>{m(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=o(`rue:slot:anchor`);a(u,d),i(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);a(c,p);let h=o(`rue:slot:anchor`);a(p,h),i(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),s}),s,c)}})}),d}),M=t=>l(n=>{let r=e(`svg`,n);i(()=>{f(r,`width`,String(t.size===void 0?40:t.size))}),i(()=>{f(r,`height`,String(t.size===void 0?40:t.size))}),f(r,`viewBox`,`0 0 24 24`),i(()=>{s(r,String(t.className??`fill-current`))});let o=e(`path`,r);return a(r,o),f(o,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),r}),N=[{key:`x`,Icon:()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`width`,`24`),f(n,`height`,`24`),f(n,`viewBox`,`0 0 24 24`),s(n,`fill-current`);let r=e(`path`,n);return a(n,r),f(r,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),n})},{key:`video`,Icon:()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`width`,`24`),f(n,`height`,`24`),f(n,`viewBox`,`0 0 24 24`),s(n,`fill-current`);let r=e(`path`,n);return a(n,r),f(r,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),n})},{key:`community`,Icon:()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`width`,`24`),f(n,`height`,`24`),f(n,`viewBox`,`0 0 24 24`),s(n,`fill-current`);let r=e(`path`,n);return a(n,r),f(r,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),n})}],P=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],F=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],I=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],L=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],R=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],z=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],B=[{key:`services`,title:`Services`,items:P},{key:`company`,title:`Company`,items:F},{key:`legal`,title:`Legal`,items:I}],re=[...B,{key:`social`,title:`Social`,items:L},{key:`explore`,title:`Explore`,items:R},{key:`apps`,title:`Apps`,items:z}],ie=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],V=()=>{let{tabRecommended:u,tabCompound:v,tabBasic:x,tabLogo:S,tabForm:w,tabSocial:T,tabLinks:E,tabLinks2:D,tabCenteredBrand:ee,tabCentered:te,tabTwo:O}=_(`useSetup:0:0`,()=>p(()=>({tabRecommended:_(`ref:1:0`,()=>r(`preview`)),tabCompound:_(`ref:1:1`,()=>r(`preview`)),tabBasic:_(`ref:1:2`,()=>r(`preview`)),tabLogo:_(`ref:1:3`,()=>r(`preview`)),tabForm:_(`ref:1:4`,()=>r(`preview`)),tabSocial:_(`ref:1:5`,()=>r(`preview`)),tabLinks:_(`ref:1:6`,()=>r(`preview`)),tabLinks2:_(`ref:1:7`,()=>r(`preview`)),tabCenteredBrand:_(`ref:1:8`,()=>r(`preview`)),tabCentered:_(`ref:1:9`,()=>r(`preview`)),tabTwo:_(`ref:1:10`,()=>r(`preview`))})));return l(r=>{let p=n(),_=o(`rue:component:anchor`);return a(p,_),m(h(C,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,l);a(l,p),a(p,c(`Footer 页脚`));let _=e(`p`,l);a(l,_),s(_,`text-sm mt-3 mb-3`),a(_,c(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let C=e(`code`,_);a(_,C),a(C,c(`nav`)),a(_,c(`、`));let k=e(`code`,_);a(_,k),a(k,c(`aside`)),a(_,c(`和 自定义 class，也可以改用`));let P=e(`code`,_);a(_,P),a(P,c(`brand`)),a(_,c(`、`));let F=e(`code`,_);a(_,F),a(F,c(`sections`));let I=g(_);a(_,I),d(I,` `),a(_,c(`与`));let L=e(`code`,_);a(_,L),a(L,c(`Footer.Section`)),a(_,c(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let R=e(`h2`,l);a(l,R),a(R,c(`何时使用`));let z=e(`ul`,l);a(l,z);let V=e(`li`,z);a(z,V),a(V,c(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let oe=e(`li`,z);a(z,oe),a(oe,c(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let se=o(`rue:component:anchor`);a(l,se),i(()=>{let e=h(j,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:u,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});t(()=>m(e,l,se))});let ce=o(`rue:component:anchor`);a(l,ce),i(()=>{let e=h(j,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:v,preview:()=>y(A,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[y(A.Brand,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,b(`br`,{}),`Ship consistent experiences.`]})]}),y(A.Section,{title:`Product`,children:[b(A.Link,{children:`Overview`}),b(A.Link,{children:`Pricing`}),b(A.Link,{children:`Changelog`})]}),b(A.Section,{title:`Community`,content:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`});t(()=>m(e,l,ce))});let le=o(`rue:component:anchor`);a(l,le),i(()=>{let e=h(j,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:x,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:B}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`});t(()=>m(e,l,le))});let ue=o(`rue:component:anchor`);a(l,ue),i(()=>{let e=h(j,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:S,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:y(`div`,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:B}),code:`<Footer
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
/>`});t(()=>m(e,l,ue))});let de=o(`rue:component:anchor`);a(l,de),i(()=>{let e=h(j,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:w,preview:()=>b(A,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...B,{key:`newsletter`,title:`Newsletter`,as:`form`,content:y(`fieldset`,{className:`w-80`,children:[b(`label`,{children:`Enter your email address`}),y(`div`,{className:`join`,children:[b(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),b(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`});t(()=>m(e,l,de))});let fe=o(`rue:component:anchor`);a(l,fe),i(()=>{let e=h(j,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:T,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:y(`div`,{children:[b(M,{}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})}]}),code:`<Footer
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
/>`});t(()=>m(e,l,fe))});let pe=o(`rue:component:anchor`);a(l,pe),i(()=>{let e=h(j,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:E,preview:()=>y(A,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Services`}),b(`button`,{className:`link link-hover`,children:`Branding`}),b(`button`,{className:`link link-hover`,children:`Design`}),b(`button`,{className:`link link-hover`,children:`Marketing`}),b(`button`,{className:`link link-hover`,children:`Advertisement`})]}),y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Company`}),b(`button`,{className:`link link-hover`,children:`About us`}),b(`button`,{className:`link link-hover`,children:`Contact`}),b(`button`,{className:`link link-hover`,children:`Jobs`}),b(`button`,{className:`link link-hover`,children:`Press kit`})]}),y(`nav`,{children:[b(`h6`,{className:`footer-title`,children:`Social`}),b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`});t(()=>m(e,l,pe))});let me=o(`rue:component:anchor`);a(l,me),i(()=>{let e=h(j,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:D,preview:()=>b(A,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:re}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`});t(()=>m(e,l,me))});let he=o(`rue:component:anchor`);a(l,he),i(()=>{let e=h(j,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:ee,preview:()=>y(A,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[y(`aside`,{children:[b(M,{size:50,className:`inline-block fill-current`}),y(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),b(`nav`,{children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`a`,{"aria-label":e,children:b(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`});t(()=>m(e,l,he))});let ge=o(`rue:component:anchor`);a(l,ge),i(()=>{let e=h(j,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:te,preview:()=>y(A,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[y(`nav`,{className:`grid grid-flow-col gap-4`,children:[b(`button`,{className:`link link-hover`,children:`About us`}),b(`button`,{className:`link link-hover`,children:`Contact`}),b(`button`,{className:`link link-hover`,children:`Jobs`}),b(`button`,{className:`link link-hover`,children:`Press kit`})]}),b(`nav`,{children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`button`,{type:`button`,"aria-label":e,children:b(t,{})},e))})}),b(`aside`,{children:y(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`});t(()=>m(e,l,ge))});let _e=o(`rue:component:anchor`);a(l,_e),i(()=>{let e=h(j,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:O,preview:()=>y(`div`,{className:`w-full`,children:[b(A,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:B}),y(A,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[y(`aside`,{className:`grid-flow-col items-center`,children:[b(M,{size:24}),y(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,b(`br`,{}),`Providing reliable tech since 1992`]})]}),b(`nav`,{className:`md:place-self-center md:justify-self-end`,children:b(`div`,{className:`grid grid-flow-col gap-4`,children:N.map(({key:e,Icon:t})=>b(`a`,{"aria-label":e,children:b(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`});t(()=>m(e,l,_e))});let H=e(`h2`,l);a(l,H),f(H,`id`,`footer-api`),a(H,c(`API`));let ve=e(`p`,l);a(l,ve),a(ve,c(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let ye=e(`h3`,l);a(l,ye),a(ye,c(`Footer`));let be=o(`rue:component:anchor`);a(l,be),i(()=>{let e=h(ne,{rows:ie});t(()=>m(e,l,be))});let U=e(`h3`,l);a(l,U),s(U,`mt-8`),a(U,c(`Footer.Section`));let xe=o(`rue:component:anchor`);a(l,xe),i(()=>{let e=h(ne,{rows:ae});t(()=>m(e,l,xe))});let W=e(`div`,l);a(l,W),s(W,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let G=e(`h3`,W);a(W,G),s(G,`mt-0 mb-3 text-base font-semibold`),a(G,c(`复合子组件`));let K=e(`div`,W);a(W,K),s(K,`grid gap-2 text-sm md:grid-cols-2`);let q=e(`div`,K);a(K,q);let Se=e(`code`,q);a(q,Se),a(Se,c(`Footer.Brand`)),a(q,c(`：品牌或版权信息容器，默认渲染`));let Ce=e(`code`,q);a(q,Ce),a(Ce,c(`aside`));let J=e(`div`,K);a(K,J);let we=e(`code`,J);a(J,we),a(we,c(`Footer.Title`)),a(J,c(`：带`));let Te=e(`code`,J);a(J,Te),a(Te,c(`footer-title`)),a(J,c(`类名的标题节点`));let Y=e(`div`,K);a(K,Y);let Ee=e(`code`,Y);a(Y,Ee),a(Ee,c(`Footer.Link`)),a(Y,c(`：默认输出带`));let De=e(`code`,Y);a(Y,De),a(De,c(`link link-hover`)),a(Y,c(`的文本链接`));let X=e(`div`,K);a(K,X);let Oe=e(`code`,X);a(X,Oe),a(Oe,c(`Footer.Section`)),a(X,c(`：单列容器，支持`));let ke=e(`code`,X);a(X,ke),a(ke,c(`title`)),a(X,c(`、`));let Ae=e(`code`,X);a(X,Ae),a(Ae,c(`items`)),a(X,c(`、`));let je=e(`code`,X);a(X,je),a(je,c(`content`));let Me=e(`h2`,l);a(l,Me),a(Me,c(`FAQ`));let Ne=e(`h3`,l);a(l,Ne),a(Ne,c(`什么时候用 sections，什么时候继续写 children？`));let Z=e(`p`,l);a(l,Z),a(Z,c(`列结构比较规则时，优先用`));let Pe=e(`code`,Z);a(Z,Pe),a(Pe,c(`sections`)),a(Z,c(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Fe=e(`code`,Z);a(Z,Fe),a(Fe,c(`nav`)),a(Z,c(`/`));let Ie=e(`code`,Z);a(Z,Ie),a(Ie,c(`aside`)),a(Z,c(`模板，也可以继续直接写`));let Le=e(`code`,Z);a(Z,Le),a(Le,c(`children`)),a(Z,c(`。`));let Re=e(`h3`,l);a(l,Re),a(Re,c(`社交图标和订阅表单怎么放进去？`));let Q=e(`p`,l);a(l,Q),a(Q,c(`这类内容更适合放到`));let ze=e(`code`,Q);a(Q,ze),a(ze,c(`Footer.Section`)),a(Q,c(`的`));let Be=e(`code`,Q);a(Q,Be),a(Be,c(`content`));let Ve=g(Q);a(Q,Ve),d(Ve,` `),a(Q,c(`里；如果只是普通文本链接，再用`));let He=e(`code`,Q);a(Q,He),a(He,c(`items`)),a(Q,c(`会更省代码。`));let Ue=e(`h3`,l);a(l,Ue),a(Ue,c(`direction 和 center 还需要保留吗？`));let $=e(`p`,l);a(l,$),a($,c(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let We=e(`code`,$);a($,We),a(We,c(`sm:footer-horizontal`)),a($,c(`、`));let Ge=e(`code`,$);return a($,Ge),a(Ge,c(`footer-center`)),a($,c(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),r})}),p,_),p})};export{V as default};
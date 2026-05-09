import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as v,t as y}from"./src-CqIWk1va.js";import{n as b}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as x}from"./Code-B1JFTu6m.js";import{t as S}from"./tabs-BbiCzXqJ.js";var C=(...e)=>e.filter(Boolean).join(` `),w=e=>e==null?!1:Array.isArray(e)?e.some(e=>w(e)):!0,T=({as:e=`h6`,className:t,children:n,content:r,...i})=>y(e,{...i,className:C(`footer-title`,t),children:r??n}),E=({as:e,className:t,children:n,content:r,href:i,target:a,rel:o,hover:s=!0,...c})=>{let l=e??(i?`a`:`button`),u=a===`_blank`&&!o?`noreferrer`:o;return l===`a`?y(`a`,{...c,href:i,target:a,rel:u,className:C(`link`,s&&`link-hover`,t),children:r??n}):l===`button`?y(`button`,{...c,type:c.type??`button`,className:C(`link`,s&&`link-hover`,t),children:r??n}):y(l,{...c,className:C(`link`,s&&`link-hover`,t),children:r??n})},ee=e=>!e||typeof e!=`object`||Array.isArray(e)?!1:`label`in e||`content`in e||`children`in e||`href`in e||`target`in e||`rel`in e||`as`in e||`className`in e||`hover`in e,te=(e,t)=>{if(!w(e))return null;if(ee(e)){let{key:n,label:r,content:i,children:a,...o}=e;return y(E,{...o,children:i??a??r},n??`item-${t}`)}return y(E,{children:e},`item-${t}`)},D=({as:e=`aside`,className:t,children:n,content:r,...i})=>y(e,{...i,className:t,children:r??n}),O=({as:e=`nav`,className:t,children:n,title:r,titleClassName:i,content:a,items:o,inline:s,contentClassName:c,...l})=>{let u=e,d=(o??[]).map((e,t)=>te(e,t)).filter(Boolean),f=w(a)||w(n)?a??n:s?y(`div`,{className:C(`grid grid-flow-col auto-cols-max gap-4`,c),children:d}):d;return v(u,{...l,className:t,children:[w(r)?y(T,{className:i,children:r}):null,f]})},k=Object.assign(({as:e=`footer`,direction:t,center:n,className:r,children:i,brand:a,sections:o,wrap:s,bordered:c,...u})=>{let d=e,f=w(i),p=w(a)||(o?.length??0)>0;return y(d,{...u,className:C(`footer`,t&&`footer-${t}`,n&&`footer-center`,s&&`gap-y-6`,c&&`border-t border-base-300`,r),children:f||!p?i:v(l,{children:[w(a)?y(D,{children:a}):null,(o??[]).map((e,t)=>{let{key:n,...r}=e;return y(O,{...r},n??`section-${t}`)})]})})},{Brand:D,Section:O,Title:T,Link:E}),A=({title:t,summary:l,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{c(l?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{c(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{c(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),ne=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),j=({size:n=40,className:r})=>m(()=>{let i=e(`svg`);d(()=>{t(i,`width`,String(n))}),d(()=>{t(i,`height`,String(n))}),t(i,`viewBox`,`0 0 24 24`),d(()=>{o(i,String(r??`fill-current`))});let a=e(`path`);return u(i,a),t(a,`d`,`M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z`),i}),M=[{key:`x`,Icon:()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`width`,`24`),t(n,`height`,`24`),t(n,`viewBox`,`0 0 24 24`),o(n,`fill-current`);let r=e(`path`);return u(n,r),t(r,`d`,`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`),n})},{key:`video`,Icon:()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`width`,`24`),t(n,`height`,`24`),t(n,`viewBox`,`0 0 24 24`),o(n,`fill-current`);let r=e(`path`);return u(n,r),t(r,`d`,`M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z`),n})},{key:`community`,Icon:()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`width`,`24`),t(n,`height`,`24`),t(n,`viewBox`,`0 0 24 24`),o(n,`fill-current`);let r=e(`path`);return u(n,r),t(r,`d`,`M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z`),n})}],N=[{label:`Branding`},{label:`Design`},{label:`Marketing`},{label:`Advertisement`}],P=[{label:`About us`},{label:`Contact`},{label:`Jobs`},{label:`Press kit`}],F=[{label:`Terms of use`},{label:`Privacy policy`},{label:`Cookie policy`}],I=[{label:`Twitter`},{label:`Instagram`},{label:`Facebook`},{label:`GitHub`}],L=[{label:`Features`},{label:`Enterprise`},{label:`Security`},{label:`Pricing`}],R=[{label:`Mac`},{label:`Windows`},{label:`Linux`},{label:`Android`}],z=[{key:`services`,title:`Services`,items:N},{key:`company`,title:`Company`,items:P},{key:`legal`,title:`Legal`,items:F}],re=[...z,{key:`social`,title:`Social`,items:I},{key:`explore`,title:`Explore`,items:L},{key:`apps`,title:`Apps`,items:R}],ie=[{prop:`as`,description:`指定根节点标签，默认输出 footer`,type:`any`,defaultValue:`'footer'`},{prop:`brand`,description:`结构化品牌区内容，不传 children 时会渲染为 Footer.Brand`,type:`any`,defaultValue:`-`},{prop:`bordered`,description:`追加顶部边线，适合双层页脚的下半部分`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`追加 footer-center 居中类`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`控制 footer-horizontal / footer-vertical`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`sections`,description:`结构化列数据，可混合文本链接、自定义内容和表单区`,type:`FooterSection[]`,defaultValue:`[]`},{prop:`wrap`,description:`为多行布局补充垂直间距`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入后沿用原始自定义结构，保持对旧写法的兼容`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`列容器标签，默认 nav，也可改成 form / div / aside`,type:`any`,defaultValue:`'nav'`},{prop:`title`,description:`列标题，内部复用 Footer.Title 的 footer-title 样式`,type:`any`,defaultValue:`-`},{prop:`items`,description:`快速渲染一组 Footer.Link 文本链接`,type:`Array<FooterItem>`,defaultValue:`[]`},{prop:`content`,description:`自定义列内容，适合表单、图标区等复杂结构`,type:`any`,defaultValue:`-`},{prop:`inline`,description:`把 items 包装成横向图标或标签流`,type:`boolean`,defaultValue:`false`},{prop:`titleClassName`,description:`自定义标题类名`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`inline 模式下自定义内容容器类名`,type:`string`,defaultValue:`-`}],B=()=>{let{tabRecommended:l,tabCompound:_,tabBasic:x,tabLogo:S,tabForm:C,tabSocial:w,tabLinks:T,tabLinks2:E,tabCenteredBrand:ee,tabCentered:te,tabTwo:D}=g(`useSetup:0:0`,()=>h(()=>({tabRecommended:g(`ref:1:0`,()=>f(`preview`)),tabCompound:g(`ref:1:1`,()=>f(`preview`)),tabBasic:g(`ref:1:2`,()=>f(`preview`)),tabLogo:g(`ref:1:3`,()=>f(`preview`)),tabForm:g(`ref:1:4`,()=>f(`preview`)),tabSocial:g(`ref:1:5`,()=>f(`preview`)),tabLinks:g(`ref:1:6`,()=>f(`preview`)),tabLinks2:g(`ref:1:7`,()=>f(`preview`)),tabCenteredBrand:g(`ref:1:8`,()=>f(`preview`)),tabCentered:g(`ref:1:9`,()=>f(`preview`)),tabTwo:g(`ref:1:10`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Footer 页脚`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Footer 现在同时支持两种组织方式：可以继续像以前一样直接写`));let b=e(`code`);u(g,b),u(b,n(`nav`)),u(g,n(`、`));let O=e(`code`);u(g,O),u(O,n(`aside`)),u(g,n(`和 自定义 class，也可以改用`));let N=e(`code`);u(g,N),u(N,n(`brand`)),u(g,n(`、`));let P=e(`code`);u(g,P),u(P,n(`sections`));let F=r(g);u(g,F),s(F,` `),u(g,n(`与`));let I=e(`code`);u(g,I),u(I,n(`Footer.Section`)),u(g,n(`这组结构化 API，把品牌区、链接列和表单区拆开表达。`));let L=e(`div`);u(m,L),o(L,`text-sm flex flex-wrap gap-4`);let R=e(`a`);u(L,R),t(R,`href`,`https://daisyui.com/components/footer/`),t(R,`target`,`_blank`),u(R,n(`查看 Footer 静态样式`));let B=e(`h2`);u(m,B),u(B,n(`何时使用`));let V=e(`ul`);u(m,V);let oe=e(`li`);u(V,oe),u(oe,n(`需要组织品牌信息、导航链接、社交入口或版权声明。`));let se=e(`li`);u(V,se),u(se,n(`希望保留 Rue 当前的 footer 视觉风格，同时减少重复的页脚模板代码。`));let ce=i(`rue:component:anchor`);u(m,ce),d(()=>{c(p(A,{title:`推荐：结构化列布局`,summary:`把最常见的三列 footer 改成 sections 数据驱动，仍然保留原来的视觉类名和响应式方向。`,tab:l,preview:()=>y(k,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:z}),code:`const sections = [
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

<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`}),m,ce)});let le=i(`rue:component:anchor`);u(m,le),d(()=>{c(p(A,{title:`推荐：复合子组件写法`,summary:`当某一列需要自己控制内容结构时，可以直接组合 Footer.Brand、Footer.Section、Footer.Link。`,tab:_,preview:()=>v(k,{className:`p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal`,children:[v(k.Brand,{children:[y(j,{}),v(`p`,{className:`text-sm mt-3 mb-3`,children:[`Rue Design System`,y(`br`,{}),`Ship consistent experiences.`]})]}),v(k.Section,{title:`Product`,children:[y(k.Link,{children:`Overview`}),y(k.Link,{children:`Pricing`}),y(k.Link,{children:`Changelog`})]}),y(k.Section,{title:`Community`,content:y(`div`,{className:`grid grid-flow-col gap-4`,children:M.map(({key:e,Icon:t})=>y(`button`,{type:`button`,"aria-label":e,children:y(t,{})},e))})})]}),code:`<Footer className="p-10 bg-base-100 border border-base-300 rounded sm:footer-horizontal">
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
</Footer>`}),m,le)});let ue=i(`rue:component:anchor`);u(m,ue),d(()=>{c(p(A,{title:`Footer（默认纵向，sm 起横向）`,summary:`原始基础 demo 继续保留，这里改用 sections 表达同一个场景。`,tab:x,preview:()=>y(k,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,sections:z}),code:`<Footer className="p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal" sections={sections} />`}),m,ue)});let de=i(`rue:component:anchor`);u(m,de),d(()=>{c(p(A,{title:`Footer with a logo section`,summary:`保留品牌区场景；推荐用 brand + sections，把品牌说明和导航列拆开。`,tab:S,preview:()=>y(k,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,brand:v(`div`,{children:[y(j,{}),v(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,y(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:z}),code:`<Footer
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
/>`}),m,de)});let fe=i(`rue:component:anchor`);u(m,fe),d(()=>{c(p(A,{title:`Footer with a form`,summary:`保留订阅表单场景；自定义 section 可直接切换成 form 根节点。`,tab:C,preview:()=>y(k,{className:`p-10 bg-base-200 text-base-content rounded sm:footer-horizontal`,sections:[...z,{key:`newsletter`,title:`Newsletter`,as:`form`,content:v(`fieldset`,{className:`w-80`,children:[y(`label`,{children:`Enter your email address`}),v(`div`,{className:`join`,children:[y(`input`,{type:`text`,placeholder:`username@site.com`,className:`input input-bordered join-item`}),y(`button`,{type:`button`,className:`join-item btn btn-primary`,children:`Subscribe`})]})]})}]}),code:`<Footer
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
/>`}),m,fe)});let pe=i(`rue:component:anchor`);u(m,pe),d(()=>{c(p(A,{title:`Footer with logo and social icons`,summary:`保留品牌加社交图标场景；图标区适合通过 content 自定义。`,tab:w,preview:()=>y(k,{className:`p-10 bg-neutral text-neutral-content rounded sm:footer-horizontal`,brand:v(`div`,{children:[y(j,{}),v(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,y(`br`,{}),`Providing reliable tech since 1992`]})]}),sections:[{key:`social`,title:`Social`,content:y(`div`,{className:`grid grid-flow-col gap-4`,children:M.map(({key:e,Icon:t})=>y(`button`,{type:`button`,"aria-label":e,children:y(t,{})},e))})}]}),code:`<Footer
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
/>`}),m,pe)});let me=i(`rue:component:anchor`);u(m,me),d(()=>{c(p(A,{title:`Footer with links and social icons`,summary:`保留原来的混合场景；这里继续用 children 自由拼装，展示兼容分支。`,tab:T,preview:()=>v(k,{className:`p-10 bg-base-300 text-base-content rounded sm:footer-horizontal`,children:[v(`nav`,{children:[y(`h6`,{className:`footer-title`,children:`Services`}),y(`button`,{className:`link link-hover`,children:`Branding`}),y(`button`,{className:`link link-hover`,children:`Design`}),y(`button`,{className:`link link-hover`,children:`Marketing`}),y(`button`,{className:`link link-hover`,children:`Advertisement`})]}),v(`nav`,{children:[y(`h6`,{className:`footer-title`,children:`Company`}),y(`button`,{className:`link link-hover`,children:`About us`}),y(`button`,{className:`link link-hover`,children:`Contact`}),y(`button`,{className:`link link-hover`,children:`Jobs`}),y(`button`,{className:`link link-hover`,children:`Press kit`})]}),v(`nav`,{children:[y(`h6`,{className:`footer-title`,children:`Social`}),y(`div`,{className:`grid grid-flow-col gap-4`,children:M.map(({key:e,Icon:t})=>y(`button`,{type:`button`,"aria-label":e,children:y(t,{})},e))})]})]}),code:`<Footer className="p-10 bg-base-300 text-base-content rounded sm:footer-horizontal">
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
</Footer>`}),m,me)});let he=i(`rue:component:anchor`);u(m,he),d(()=>{c(p(A,{title:`Links and social icons (two rows)`,summary:`保留两行链接矩阵；用 sections 组合数据，继续交给 className 控制布局。`,tab:E,preview:()=>y(k,{className:`p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal`,sections:re}),code:`<Footer
  className="p-10 bg-neutral text-neutral-content rounded sm:grid-rows-2 sm:footer-horizontal"
  sections={[
    ...sections,
    { key: 'social', title: 'Social', items: [{ label: 'Twitter' }, { label: 'Instagram' }, { label: 'Facebook' }, { label: 'GitHub' }] },
    { key: 'explore', title: 'Explore', items: [{ label: 'Features' }, { label: 'Enterprise' }, { label: 'Security' }, { label: 'Pricing' }] },
    { key: 'apps', title: 'Apps', items: [{ label: 'Mac' }, { label: 'Windows' }, { label: 'Linux' }, { label: 'Android' }] },
  ]}
/>`}),m,he)});let ge=i(`rue:component:anchor`);u(m,ge),d(()=>{c(p(A,{title:`Centered footer with logo and social icons`,summary:`保留居中品牌场景；这里演示 center + 复合内容的组合。`,tab:ee,preview:()=>v(k,{className:`bg-primary text-primary-content p-10 rounded footer-horizontal`,center:!0,children:[v(`aside`,{children:[y(j,{size:50,className:`inline-block fill-current`}),v(`p`,{className:`font-bold`,children:[`ACME Industries Ltd.`,y(`br`,{}),`Providing reliable tech since 1992`]}),v(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved`]})]}),y(`nav`,{children:y(`div`,{className:`grid grid-flow-col gap-4`,children:M.map(({key:e,Icon:t})=>y(`a`,{"aria-label":e,children:y(t,{})},e))})})]}),code:`<Footer className="bg-primary text-primary-content p-10 rounded footer-horizontal" center>
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
</Footer>`}),m,ge)});let _e=i(`rue:component:anchor`);u(m,_e),d(()=>{c(p(A,{title:`Centered footer with social icons`,summary:`保留居中导航与版权场景；继续展示旧的 children 兼容写法。`,tab:te,preview:()=>v(k,{className:`p-10 bg-base-200 text-base-content rounded footer-horizontal`,center:!0,children:[v(`nav`,{className:`grid grid-flow-col gap-4`,children:[y(`button`,{className:`link link-hover`,children:`About us`}),y(`button`,{className:`link link-hover`,children:`Contact`}),y(`button`,{className:`link link-hover`,children:`Jobs`}),y(`button`,{className:`link link-hover`,children:`Press kit`})]}),y(`nav`,{children:y(`div`,{className:`grid grid-flow-col gap-4`,children:M.map(({key:e,Icon:t})=>y(`button`,{type:`button`,"aria-label":e,children:y(t,{})},e))})}),y(`aside`,{children:v(`p`,{className:`text-sm mt-3 mb-3`,children:[`Copyright © `,new Date().getFullYear(),` - All right reserved by ACME Industries Ltd`]})})]}),code:`<Footer className="p-10 bg-base-200 text-base-content rounded footer-horizontal" center>
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
</Footer>`}),m,_e)});let ve=i(`rue:component:anchor`);u(m,ve),d(()=>{c(p(A,{title:`Two footer`,summary:`双层 footer 场景继续保留；下半部分可配合 bordered 或直接沿用原类名。`,tab:D,preview:()=>v(`div`,{className:`w-full`,children:[y(k,{className:`bg-base-200 text-base-content p-10 sm:footer-horizontal`,sections:z}),v(k,{className:`bg-base-200 text-base-content px-10 py-4 border-t border-base-300`,children:[v(`aside`,{className:`grid-flow-col items-center`,children:[y(j,{size:24}),v(`p`,{className:`text-sm mt-3 mb-3`,children:[`ACME Industries Ltd.`,y(`br`,{}),`Providing reliable tech since 1992`]})]}),y(`nav`,{className:`md:place-self-center md:justify-self-end`,children:y(`div`,{className:`grid grid-flow-col gap-4`,children:M.map(({key:e,Icon:t})=>y(`a`,{"aria-label":e,children:y(t,{})},e))})})]})]}),code:`<div className="w-full">
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
</div>`}),m,ve)});let H=e(`h2`);u(m,H),t(H,`id`,`footer-api`),u(H,n(`API`));let ye=e(`p`);u(m,ye),u(ye,n(`当前页展示的是增强后的 Footer API，旧的 children 写法仍然可用。`));let be=e(`h3`);u(m,be),u(be,n(`Footer`));let xe=i(`rue:component:anchor`);u(m,xe),d(()=>{c(p(ne,{rows:ie}),m,xe)});let U=e(`h3`);u(m,U),o(U,`mt-8`),u(U,n(`Footer.Section`));let Se=i(`rue:component:anchor`);u(m,Se),d(()=>{c(p(ne,{rows:ae}),m,Se)});let W=e(`div`);u(m,W),o(W,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let G=e(`h3`);u(W,G),o(G,`mt-0 mb-3 text-base font-semibold`),u(G,n(`复合子组件`));let K=e(`div`);u(W,K),o(K,`grid gap-2 text-sm md:grid-cols-2`);let q=e(`div`);u(K,q);let Ce=e(`code`);u(q,Ce),u(Ce,n(`Footer.Brand`)),u(q,n(`：品牌或版权信息容器，默认渲染`));let we=e(`code`);u(q,we),u(we,n(`aside`));let J=e(`div`);u(K,J);let Te=e(`code`);u(J,Te),u(Te,n(`Footer.Title`)),u(J,n(`：带`));let Ee=e(`code`);u(J,Ee),u(Ee,n(`footer-title`)),u(J,n(`类名的标题节点`));let Y=e(`div`);u(K,Y);let De=e(`code`);u(Y,De),u(De,n(`Footer.Link`)),u(Y,n(`：默认输出带`));let Oe=e(`code`);u(Y,Oe),u(Oe,n(`link link-hover`)),u(Y,n(`的文本链接`));let X=e(`div`);u(K,X);let ke=e(`code`);u(X,ke),u(ke,n(`Footer.Section`)),u(X,n(`：单列容器，支持`));let Ae=e(`code`);u(X,Ae),u(Ae,n(`title`)),u(X,n(`、`));let je=e(`code`);u(X,je),u(je,n(`items`)),u(X,n(`、`));let Me=e(`code`);u(X,Me),u(Me,n(`content`));let Ne=e(`h2`);u(m,Ne),u(Ne,n(`FAQ`));let Pe=e(`h3`);u(m,Pe),u(Pe,n(`什么时候用 sections，什么时候继续写 children？`));let Z=e(`p`);u(m,Z),u(Z,n(`列结构比较规则时，优先用`));let Fe=e(`code`);u(Z,Fe),u(Fe,n(`sections`)),u(Z,n(`，维护成本更低；如果某一列需要完全自定义布局，或者你已经有现成的`));let Ie=e(`code`);u(Z,Ie),u(Ie,n(`nav`)),u(Z,n(`/`));let Le=e(`code`);u(Z,Le),u(Le,n(`aside`)),u(Z,n(`模板，也可以继续直接写`));let Re=e(`code`);u(Z,Re),u(Re,n(`children`)),u(Z,n(`。`));let ze=e(`h3`);u(m,ze),u(ze,n(`社交图标和订阅表单怎么放进去？`));let Q=e(`p`);u(m,Q),u(Q,n(`这类内容更适合放到`));let Be=e(`code`);u(Q,Be),u(Be,n(`Footer.Section`)),u(Q,n(`的`));let Ve=e(`code`);u(Q,Ve),u(Ve,n(`content`));let He=r(Q);u(Q,He),s(He,` `),u(Q,n(`里；如果只是普通文本链接，再用`));let Ue=e(`code`);u(Q,Ue),u(Ue,n(`items`)),u(Q,n(`会更省代码。`));let We=e(`h3`);u(m,We),u(We,n(`direction 和 center 还需要保留吗？`));let $=e(`p`);u(m,$),u($,n(`需要。它们仍然是最轻量的布局开关，适合和现有的`));let Ge=e(`code`);u($,Ge),u(Ge,n(`sm:footer-horizontal`)),u($,n(`、`));let Ke=e(`code`);return u($,Ke),u(Ke,n(`footer-center`)),u($,n(`类名习惯一起工作，不会破坏旧页面的视觉结果。`)),f})}),f,h),f})};export{B as default};
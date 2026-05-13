import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Y as c,Z as l,bt as u,c as d,pt as f,u as p}from"./vapor-runtime-D3a-68js.js";import{n as m}from"./vapor-helpers-vapor-DGjYaAZX.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,C=h.reduce((e,t)=>e+t.adminOrderTotal,0),w=h.reduce((e,t)=>e+t.selfOrderTotal,0),ee=h.reduce((e,t)=>e+t.ordersClients,0),T=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),E=y>0?T.allAmount/y:0,D=y>0?C/y:0,te=y>0?w/y:0,ne=x>0?y/x:0,O=v>0?y/v:0,re=760,k=300,A={top:24,right:18,bottom:42,left:18},j=re-A.left-A.right,M=k-A.top-A.bottom,ie=Math.max(...h.map(e=>e.allAmount),1),ae=Math.max(...h.map(e=>e.ordersCount),1),N=h.map((e,t)=>({row:e,x:A.left+j/Math.max(h.length-1,1)*t,y:A.top+M-e.allAmount/ie*M})),oe=N.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),se=`${oe} L ${N[N.length-1]?.x??0} ${k-A.bottom} L ${N[0]?.x??0} ${k-A.bottom} Z`,ce=[0,.25,.5,.75,1].map(e=>({step:e,y:A.top+M-e*M})),le=52,ue=2*Math.PI*le,de=ue*(1-D),P=e=>g.format(e),F=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:P(e),I=e=>`${(e*100).toFixed(1)}%`,fe=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},L=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},pe=`${L(h[0]?.sumDate??``)} - ${L(h[h.length-1]?.sumDate??``)}`,me=[{label:`窗口成交额`,value:F(y),detail:`总金额 ${P(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:I(D),detail:`后台代客下单占比`},{label:`笔均成交`,value:F(O),detail:`活跃日均 ${F(ne)}`}],he=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${L(T.sumDate)} 贡献 ${I(E)} 的窗口成交额，金额达到 ${P(T.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],ge=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===T.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:fe(e.sumDate),amountRatio:ie>0?e.allAmount/ie:0,notes:t.join(` / `)||`无波动`}}),_e=`
.report-data1-scope.report-page {
  --rp: var(--color-primary);
  --rp-c: var(--color-primary-content);
  --rs: var(--color-secondary);
  --rs-c: var(--color-secondary-content);
  --ra: var(--color-accent);
  --ra-c: var(--color-accent-content);
  --r-base: var(--color-base-100);
  --r-base2: var(--color-base-200);
  --r-base3: var(--color-base-300);
  --r-content: var(--color-base-content);
  --r-neutral: var(--color-neutral);
  --r-neutral-c: var(--color-neutral-content);

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .report-data1-scope.report-page {
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .report-data1-scope.report-page {
    padding: 0 48px;
  }
}

.report-data1-scope .report-card {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  background:
    radial-gradient(ellipse 60% 50% at 95% -10%, color-mix(in oklch, var(--rp) 14%, transparent), transparent),
    radial-gradient(ellipse 40% 60% at 5% 110%, color-mix(in oklch, var(--rs) 10%, transparent), transparent),
    color-mix(in oklch, var(--r-base2) 55%, var(--r-base));
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--r-base3) 30%, transparent),
    0 20px 60px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  backdrop-filter: blur(2px);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.report-data1-scope .report-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--rp) 30%, transparent) 0%,
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--ra) 20%, transparent) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.6;
  transition: opacity 0.4s ease;
}

.report-data1-scope .report-card:hover::before {
  opacity: 1;
}

.report-data1-scope .report-card:hover {
  box-shadow:
    0 4px 32px color-mix(in oklch, var(--rp) 12%, transparent),
    0 24px 80px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  transform: translateY(-2px);
}

.report-data1-scope .report-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 24px;
  padding: 36px;
}

.report-data1-scope .report-kicker,
.report-data1-scope .report-panel-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-hero-copy h1,
.report-data1-scope .report-panel-header h2,
.report-data1-scope .report-kpi-card h2,
.report-data1-scope .report-insight-item h3 {
  margin: 0;
}

.report-data1-scope .report-hero-copy h1 {
  max-width: 18ch;
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.05;
  color: var(--r-content);
  letter-spacing: -0.02em;
}

.report-data1-scope .report-hero-text,
.report-data1-scope .report-board-copy,
.report-data1-scope .report-panel-summary,
.report-data1-scope .report-channel-item p,
.report-data1-scope .report-insight-item p,
.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span,
.report-data1-scope .report-kpi-card span {
  color: color-mix(in oklch, var(--r-content) 68%, transparent);
  line-height: 1.75;
}

.report-data1-scope .report-hero-text {
  max-width: 68ch;
  margin: 18px 0 0;
}

.report-data1-scope .report-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.report-data1-scope .report-tag {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid color-mix(in oklch, var(--rp) 28%, transparent);
  background: color-mix(in oklch, var(--rp) 12%, transparent);
  color: var(--rp);
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.report-data1-scope .report-tag:hover {
  background: color-mix(in oklch, var(--rp) 22%, transparent);
  border-color: color-mix(in oklch, var(--rp) 45%, transparent);
  transform: translateY(-1px);
}

.report-data1-scope .report-hero-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border-radius: 24px;
  background:
    radial-gradient(ellipse 80% 50% at 20% 5%, color-mix(in oklch, var(--rp) 18%, transparent), transparent),
    color-mix(in oklch, var(--r-base3) 60%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  box-shadow: 0 8px 32px color-mix(in oklch, var(--r-base3) 40%, transparent);
}

.report-data1-scope .report-board-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.report-data1-scope .report-board-label,
.report-data1-scope .report-board-date {
  font-size: 13px;
  font-weight: 700;
}

.report-data1-scope .report-board-label {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
}

.report-data1-scope .report-board-date {
  color: var(--rp);
}

.report-data1-scope .report-board-value {
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 800;
  line-height: 1;
  color: var(--r-content);
  background: linear-gradient(135deg, var(--r-content) 30%, var(--rp));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.report-data1-scope .report-board-copy {
  margin: 0;
}

.report-data1-scope .report-sparkline {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-bar {
  width: 100%;
  min-height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 85%, var(--ra)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 25px color-mix(in oklch, var(--rp) 22%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-spark-bar:hover {
  box-shadow: 0 10px 32px color-mix(in oklch, var(--rp) 38%, transparent);
  transform: scaleX(1.1);
}

.report-data1-scope .report-spark-bar.is-peak {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rs) 90%, var(--rp)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 28px color-mix(in oklch, var(--rs) 32%, transparent);
}

.report-data1-scope .report-spark-label,
.report-data1-scope .report-axis-label,
.report-data1-scope .report-grid-label {
  font-size: 11px;
  fill: color-mix(in oklch, var(--r-content) 50%, transparent);
  color: color-mix(in oklch, var(--r-content) 50%, transparent);
}

.report-data1-scope .report-kpi-grid,
.report-data1-scope .report-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.report-data1-scope .report-panel-grid-primary {
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);
}

.report-data1-scope .report-kpi-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.report-data1-scope .report-kpi-card {
  padding: 22px 22px 20px;
}

.report-data1-scope .report-kpi-card p {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-kpi-card h2 {
  margin-top: 16px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  color: var(--r-content);
}

.report-data1-scope .report-kpi-card span {
  display: block;
  margin-top: 12px;
}

.report-data1-scope .report-chart-card,
.report-data1-scope .report-channel-card,
.report-data1-scope .report-insight-card,
.report-data1-scope .report-timeline-card {
  padding: 24px;
}

.report-data1-scope .report-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.report-data1-scope .report-panel-header h2 {
  font-size: 28px;
  color: var(--r-content);
}

.report-data1-scope .report-panel-summary {
  max-width: 28ch;
  font-size: 14px;
}

.report-data1-scope .report-chart-shell {
  overflow: hidden;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 50%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 50%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 30%, transparent);
}

.report-data1-scope .report-svg-chart {
  display: block;
  width: 100%;
  height: auto;
}

.report-data1-scope .report-grid-line {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.report-data1-scope .report-line-path {
  fill: none;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.report-data1-scope .report-point-outer {
  fill: var(--r-base2);
  stroke: color-mix(in oklch, var(--rp) 80%, var(--r-content));
  stroke-width: 2;
  transition: r 0.3s ease;
}

.report-data1-scope .report-point-inner {
  fill: var(--rp);
}

.report-data1-scope .report-channel-body {
  position: relative;
  display: grid;
  place-items: center;
  padding: 10px 0 20px;
}

.report-data1-scope .report-donut {
  width: min(100%, 220px);
  height: auto;
}

.report-data1-scope .report-donut-track,
.report-data1-scope .report-donut-admin,
.report-data1-scope .report-donut-self {
  fill: none;
  stroke-width: 16;
  transform: rotate(-90deg);
  transform-origin: 80px 80px;
  stroke-linecap: round;
}

.report-data1-scope .report-donut-track {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-donut-admin {
  stroke: var(--rp);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--rp) 40%, transparent));
}

.report-data1-scope .report-donut-self {
  stroke: var(--ra);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--ra) 40%, transparent));
}

.report-data1-scope .report-channel-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
}

.report-data1-scope .report-channel-center strong {
  font-size: 32px;
  color: var(--r-content);
}

.report-data1-scope .report-channel-center span {
  font-size: 13px;
  color: color-mix(in oklch, var(--r-content) 60%, transparent);
}

.report-data1-scope .report-channel-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-channel-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-channel-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-color: color-mix(in oklch, var(--r-base3) 50%, transparent);
  transform: translateX(4px);
}

.report-data1-scope .report-channel-item strong,
.report-data1-scope .report-timeline-main strong,
.report-data1-scope .report-timeline-metrics strong {
  display: block;
  color: var(--r-content);
}

.report-data1-scope .report-channel-item p {
  margin: 4px 0 0;
  font-size: 13px;
}

.report-data1-scope .report-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.report-data1-scope .report-dot-admin {
  background: var(--rp);
  box-shadow: 0 0 18px color-mix(in oklch, var(--rp) 42%, transparent);
}

.report-data1-scope .report-dot-self {
  background: var(--ra);
  box-shadow: 0 0 18px color-mix(in oklch, var(--ra) 42%, transparent);
}

.report-data1-scope .report-bars {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 14px;
  align-items: end;
  min-height: 280px;
  padding: 18px;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 40%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 45%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 25%, transparent);
}

.report-data1-scope .report-bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 244px;
}

.report-data1-scope .report-bar-shell {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding: 0 4px;
}

.report-data1-scope .report-bar-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 18px 18px 6px 6px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--ra) 80%, var(--rs)), color-mix(in oklch, var(--ra) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--ra) 18%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-bar-fill:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--ra) 30%, transparent);
  filter: brightness(1.1);
}

.report-data1-scope .report-bar-fill.is-accent {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 80%, var(--ra)), color-mix(in oklch, var(--rp) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--rp) 18%, transparent);
}

.report-data1-scope .report-bar-fill.is-accent:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--rp) 30%, transparent);
}

.report-data1-scope .report-bar-group strong {
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-bar-group span {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
  font-size: 12px;
}

.report-data1-scope .report-insight-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-insight-item {
  padding: 18px 18px 16px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  border-left: 3px solid color-mix(in oklch, var(--rp) 50%, var(--rs));
  transition: all 0.3s ease;
}

.report-data1-scope .report-insight-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-left-color: var(--rp);
  transform: translateX(4px);
}

.report-data1-scope .report-insight-item h3 {
  margin-bottom: 8px;
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-insight-item p {
  margin: 0;
}

.report-data1-scope .report-timeline-list {
  display: grid;
  gap: 12px;
}

.report-data1-scope .report-timeline-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.3fr) minmax(0, 1fr) minmax(220px, 0.55fr);
  gap: 18px;
  align-items: center;
  padding: 16px 18px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 25%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 25%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover {
  background: color-mix(in oklch, var(--r-base2) 45%, var(--r-base));
  transform: translateX(4px);
}

.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span {
  display: block;
  margin-top: 4px;
  font-size: 13px;
}

.report-data1-scope .report-timeline-track {
  position: relative;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-timeline-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--rs), var(--ra));
  box-shadow: 0 0 12px color-mix(in oklch, var(--rp) 20%, transparent);
  transition: filter 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover .report-timeline-fill {
  filter: brightness(1.15);
}

.report-data1-scope .report-stop-area-top {
  stop-color: var(--rp);
  stop-opacity: 0.45;
}

.report-data1-scope .report-stop-area-bottom {
  stop-color: var(--rp);
  stop-opacity: 0;
}

.report-data1-scope .report-stop-line-start {
  stop-color: var(--rs);
}

.report-data1-scope .report-stop-line-end {
  stop-color: var(--ra);
}

@keyframes reportData1FloatIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.report-data1-scope .report-card,
.report-data1-scope .report-kpi-card {
  animation: reportData1FloatIn 0.6s ease both;
}

.report-data1-scope .report-kpi-card:nth-child(1) { animation-delay: 0ms; }
.report-data1-scope .report-kpi-card:nth-child(2) { animation-delay: 80ms; }
.report-data1-scope .report-kpi-card:nth-child(3) { animation-delay: 160ms; }
.report-data1-scope .report-kpi-card:nth-child(4) { animation-delay: 240ms; }

.report-data1-scope .report-timeline-row:nth-child(odd) {
  border-left: 3px solid color-mix(in oklch, var(--rp) 30%, var(--rs));
}

.report-data1-scope .report-timeline-row:nth-child(even) {
  border-left: 3px solid color-mix(in oklch, var(--ra) 30%, var(--rp));
}

@media (max-width: 1100px) {
  .report-data1-scope .report-kpi-grid,
  .report-data1-scope .report-panel-grid,
  .report-data1-scope .report-panel-grid-primary,
  .report-data1-scope .report-hero {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-panel-header {
    flex-direction: column;
  }

  .report-data1-scope .report-panel-summary {
    max-width: none;
  }

  .report-data1-scope .report-timeline-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .report-data1-scope .report-kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    gap: 8px;
  }
}

@media (max-width: 640px) {
  .report-data1-scope.report-page {
    padding: 0 12px;
    gap: 16px;
  }

  .report-data1-scope .report-hero,
  .report-data1-scope .report-chart-card,
  .report-data1-scope .report-channel-card,
  .report-data1-scope .report-insight-card,
  .report-data1-scope .report-timeline-card {
    padding: 20px;
  }

  .report-data1-scope .report-kpi-grid {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .report-data1-scope .report-channel-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .report-data1-scope .report-channel-item > span:last-child {
    grid-column: 2;
  }
}
`,ve=()=>p(()=>{let g=e(),ne=n(`style`);i(g,ne),u(()=>{l(ne,_e)});let O=n(`div`);i(g,O),t(O,`report-data1-scope report-page`);let j=n(`section`);i(O,j),t(j,`report-hero report-card`);let M=n(`div`);i(j,M),t(M,`report-hero-copy`);let ve=n(`p`);i(M,ve),t(ve,`report-kicker`),i(ve,r(`Data Pulse / March 2026`));let ye=n(`h1`);i(M,ye),i(ye,r(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let R=n(`p`);i(M,R),t(R,`report-hero-text`),i(R,r(`统计区间为 `));let be=o(R);i(R,be),u(()=>{l(be,pe)}),i(R,r(`。窗口总成交额达到 `));let xe=a(`rue:slot:anchor`);i(R,xe),u(()=>{let e=P(y);f(()=>d(e,R,xe))}),i(R,r(`，共形成`));let Se=o(R);i(R,Se),l(Se,` `),i(R,r(` `));let Ce=o(R);i(R,Ce),u(()=>{l(Ce,_.format(v))}),i(R,r(` 笔订单， 其中`));let we=o(R);i(R,we),l(we,` `),i(R,r(` `));let Te=a(`rue:slot:anchor`);i(R,Te),u(()=>{let e=L(T.sumDate);f(()=>d(e,R,Te))}),i(R,r(` 单日贡献 `));let Ee=a(`rue:slot:anchor`);i(R,Ee),u(()=>{let e=I(E);f(()=>d(e,R,Ee))}),i(R,r(` ，而退货金额维持在 `));let De=a(`rue:slot:anchor`);i(R,De),u(()=>{let e=P(b);f(()=>d(e,R,De))}),i(R,r(`。`));let z=n(`div`);i(M,z),t(z,`report-hero-tags`);let Oe=n(`span`);i(z,Oe),t(Oe,`report-tag`);let ke=o(Oe);i(Oe,ke),u(()=>{l(ke,S)}),i(Oe,r(` 天静默期`));let Ae=n(`span`);i(z,Ae),t(Ae,`report-tag`);let je=o(Ae);i(Ae,je),u(()=>{l(je,x)}),i(Ae,r(` 天有效成交`));let B=n(`span`);i(z,B),t(B,`report-tag`),i(B,r(`客户记录 `));let Me=o(B);i(B,Me),u(()=>{l(Me,_.format(ee))});let V=n(`div`);i(j,V),t(V,`report-hero-board`);let Ne=n(`div`);i(V,Ne),t(Ne,`report-board-header`);let Pe=n(`span`);i(Ne,Pe),t(Pe,`report-board-label`),i(Pe,r(`峰值日`));let Fe=n(`span`);i(Ne,Fe),t(Fe,`report-board-date`);let Ie=a(`rue:slot:anchor`);i(Fe,Ie),u(()=>{let e=L(T.sumDate);f(()=>d(e,Fe,Ie))});let Le=n(`div`);i(V,Le),t(Le,`report-board-value`);let Re=a(`rue:slot:anchor`);i(Le,Re),u(()=>{let e=F(T.allAmount);f(()=>d(e,Le,Re))});let H=n(`p`);i(V,H),t(H,`report-board-copy`),i(H,r(`单日完成 `));let ze=o(H);i(H,ze),u(()=>{l(ze,_.format(T.ordersCount))}),i(H,r(` 笔订单，客户均额`));let Be=o(H);i(H,Be),l(Be,` `),i(H,r(` `));let Ve=a(`rue:slot:anchor`);i(H,Ve),u(()=>{let e=F(T.avgClientPrice);f(()=>d(e,H,Ve))}),i(H,r(`。`));let U=n(`div`);i(V,U),t(U,`report-sparkline`);let He=a(`rue:list:start`),Ue=a(`rue:list:end`);i(U,He),i(U,Ue);let We=new Map;u(()=>{We=m({items:ge||[],getKey:(e,t)=>e.sumDate,elements:We,parent:U,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(r,o,l,m,h)=>{d(p(()=>{let o=e(),l=n(`div`);i(o,l),u(()=>{s(l,`key`,String(r.sumDate))}),t(l,`report-spark-item`);let p=n(`span`);i(l,p),u(()=>{t(p,String(`report-spark-bar ${r.sumDate===T.sumDate?`is-peak`:``}`))}),u(()=>{c(p,{height:`${Math.max(10,r.amountRatio*100)}%`})});let m=n(`span`);i(l,m),t(m,`report-spark-label`);let h=a(`rue:slot:anchor`);return i(m,h),u(()=>{let e=r.label;f(()=>d(e,m,h))}),o}),o,l)}})});let W=n(`section`);i(O,W),t(W,`report-kpi-grid`);let Ge=a(`rue:list:start`),Ke=a(`rue:list:end`);i(W,Ge),i(W,Ke);let qe=new Map;u(()=>{qe=m({items:me||[],getKey:(e,t)=>e.label,elements:qe,parent:W,before:Ke,singleRoot:!0,trackIndex:!1,start:Ge,renderItem:(r,c,m,h,g)=>{d(p(()=>{let c=e(),p=n(`article`);i(c,p),u(()=>{s(p,`key`,String(r.label))}),t(p,`report-kpi-card report-card`);let m=n(`p`);i(p,m);let h=a(`rue:slot:anchor`);i(m,h),u(()=>{let e=r.label;f(()=>d(e,m,h))});let g=n(`h2`);i(p,g);let _=o(g);i(g,_),u(()=>{l(_,r.value)});let v=n(`span`);i(p,v);let y=a(`rue:slot:anchor`);return i(v,y),u(()=>{let e=r.detail;f(()=>d(e,v,y))}),c}),c,m)}})});let Je=n(`section`);i(O,Je),t(Je,`report-panel-grid report-panel-grid-primary`);let Ye=n(`article`);i(Je,Ye),t(Ye,`report-card report-chart-card report-chart-wide`);let Xe=n(`div`);i(Ye,Xe),t(Xe,`report-panel-header`);let Ze=n(`div`);i(Xe,Ze);let Qe=n(`p`);i(Ze,Qe),t(Qe,`report-panel-eyebrow`),i(Qe,r(`GMV Trend`));let $e=n(`h2`);i(Ze,$e),i($e,r(`成交金额波动`));let et=n(`div`);i(Xe,et),t(et,`report-panel-summary`),i(et,r(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let tt=n(`div`);i(Ye,tt),t(tt,`report-chart-shell`);let G=n(`svg`);i(tt,G),u(()=>{s(G,`viewBox`,String(`0 0 ${re} ${k}`))}),t(G,`report-svg-chart`),s(G,`role`,`img`),s(G,`aria-label`,`每日成交金额趋势图`);let nt=n(`defs`);i(G,nt);let K=n(`linearGradient`);i(nt,K),s(K,`id`,`reportAreaGradient`),s(K,`x1`,`0`),s(K,`x2`,`0`),s(K,`y1`,`0`),s(K,`y2`,`1`);let rt=n(`stop`);i(K,rt),s(rt,`offset`,`0%`),t(rt,`report-stop-area-top`);let it=n(`stop`);i(K,it),s(it,`offset`,`100%`),t(it,`report-stop-area-bottom`);let q=n(`linearGradient`);i(nt,q),s(q,`id`,`reportLineGradient`),s(q,`x1`,`0`),s(q,`x2`,`1`),s(q,`y1`,`0`),s(q,`y2`,`0`);let at=n(`stop`);i(q,at),s(at,`offset`,`0%`),t(at,`report-stop-line-start`);let ot=n(`stop`);i(q,ot),s(ot,`offset`,`100%`),t(ot,`report-stop-line-end`);let st=a(`rue:list:start`),ct=a(`rue:list:end`);i(G,st),i(G,ct);let lt=new Map;u(()=>{lt=m({items:ce||[],getKey:(e,t)=>e.step,elements:lt,parent:G,before:ct,singleRoot:!0,trackIndex:!1,start:st,renderItem:(r,a,c,f,m)=>{d(p(()=>{let a=e(),c=n(`g`);i(a,c),u(()=>{s(c,`key`,String(r.step))});let d=n(`line`);i(c,d),u(()=>{s(d,`x1`,String(A.left))}),u(()=>{s(d,`y1`,String(r.y))}),u(()=>{s(d,`x2`,String(re-A.right))}),u(()=>{s(d,`y2`,String(r.y))}),t(d,`report-grid-line`);let f=n(`text`);i(c,f),u(()=>{s(f,`x`,String(A.left+6))}),u(()=>{s(f,`y`,String(r.y-8))}),t(f,`report-grid-label`);let p=o(f);return i(f,p),u(()=>{l(p,F(ie*r.step))}),a}),a,c)}})});let ut=n(`path`);i(G,ut),u(()=>{s(ut,`d`,String(se))}),s(ut,`fill`,`url(#reportAreaGradient)`);let dt=n(`path`);i(G,dt),u(()=>{s(dt,`d`,String(oe))}),t(dt,`report-line-path`),s(dt,`stroke`,`url(#reportLineGradient)`);let ft=a(`rue:list:start`),pt=a(`rue:list:end`);i(G,ft),i(G,pt);let mt=new Map;u(()=>{mt=m({items:N||[],getKey:(e,t)=>e.row.sumDate,elements:mt,parent:G,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(r,a,c,f,m)=>{d(p(()=>{let a=e(),c=n(`g`);i(a,c),u(()=>{s(c,`key`,String(r.row.sumDate))});let d=n(`circle`);i(c,d),u(()=>{s(d,`cx`,String(r.x))}),u(()=>{s(d,`cy`,String(r.y))}),u(()=>{s(d,`r`,String(r.row.sumDate===T.sumDate?7:4.5))}),t(d,`report-point-outer`);let f=n(`circle`);i(c,f),u(()=>{s(f,`cx`,String(r.x))}),u(()=>{s(f,`cy`,String(r.y))}),s(f,`r`,`3.2`),t(f,`report-point-inner`);let p=n(`text`);i(c,p),u(()=>{s(p,`x`,String(r.x))}),u(()=>{s(p,`y`,String(k-12))}),s(p,`text-anchor`,`middle`),t(p,`report-axis-label`);let m=o(p);return i(p,m),u(()=>{l(m,fe(r.row.sumDate))}),a}),a,c)}})});let J=n(`article`);i(Je,J),t(J,`report-card report-channel-card`);let ht=n(`div`);i(J,ht),t(ht,`report-panel-header`);let gt=n(`div`);i(ht,gt);let _t=n(`p`);i(gt,_t),t(_t,`report-panel-eyebrow`),i(_t,r(`Channel Mix`));let vt=n(`h2`);i(gt,vt),i(vt,r(`下单渠道分布`));let yt=n(`div`);i(J,yt),t(yt,`report-channel-body`);let Y=n(`svg`);i(yt,Y),s(Y,`viewBox`,`0 0 160 160`),t(Y,`report-donut`),s(Y,`role`,`img`),s(Y,`aria-label`,`下单渠道占比图`);let X=n(`circle`);i(Y,X),s(X,`cx`,`80`),s(X,`cy`,`80`),u(()=>{s(X,`r`,String(le))}),t(X,`report-donut-track`);let Z=n(`circle`);i(Y,Z),s(Z,`cx`,`80`),s(Z,`cy`,`80`),u(()=>{s(Z,`r`,String(le))}),t(Z,`report-donut-admin`),u(()=>{s(Z,`stroke-dasharray`,String(`${ue}`))}),s(Z,`stroke-dashoffset`,`0`);let Q=n(`circle`);i(Y,Q),s(Q,`cx`,`80`),s(Q,`cy`,`80`),u(()=>{s(Q,`r`,String(le))}),t(Q,`report-donut-self`),u(()=>{s(Q,`stroke-dasharray`,String(`${ue*te} ${ue}`))}),u(()=>{s(Q,`stroke-dashoffset`,String(-de))});let bt=n(`div`);i(yt,bt),t(bt,`report-channel-center`);let xt=n(`strong`);i(bt,xt);let St=a(`rue:slot:anchor`);i(xt,St),u(()=>{let e=I(D);f(()=>d(e,xt,St))});let Ct=n(`span`);i(bt,Ct),i(Ct,r(`后台代客`));let wt=n(`div`);i(J,wt),t(wt,`report-channel-list`);let Tt=n(`div`);i(wt,Tt),t(Tt,`report-channel-item`);let Et=n(`span`);i(Tt,Et),t(Et,`report-dot report-dot-admin`);let Dt=n(`div`);i(Tt,Dt);let Ot=n(`strong`);i(Dt,Ot),i(Ot,r(`后台代客下单`));let kt=n(`p`);i(Dt,kt);let At=a(`rue:slot:anchor`);i(kt,At),u(()=>{let e=P(C);f(()=>d(e,kt,At))});let jt=n(`span`);i(Tt,jt);let Mt=a(`rue:slot:anchor`);i(jt,Mt),u(()=>{let e=I(D);f(()=>d(e,jt,Mt))});let $=n(`div`);i(wt,$),t($,`report-channel-item`);let Nt=n(`span`);i($,Nt),t(Nt,`report-dot report-dot-self`);let Pt=n(`div`);i($,Pt);let Ft=n(`strong`);i(Pt,Ft),i(Ft,r(`客户自主下单`));let It=n(`p`);i(Pt,It);let Lt=a(`rue:slot:anchor`);i(It,Lt),u(()=>{let e=P(w);f(()=>d(e,It,Lt))});let Rt=n(`span`);i($,Rt);let zt=a(`rue:slot:anchor`);i(Rt,zt),u(()=>{let e=I(te);f(()=>d(e,Rt,zt))});let Bt=n(`section`);i(O,Bt),t(Bt,`report-panel-grid`);let Vt=n(`article`);i(Bt,Vt),t(Vt,`report-card report-chart-card`);let Ht=n(`div`);i(Vt,Ht),t(Ht,`report-panel-header`);let Ut=n(`div`);i(Ht,Ut);let Wt=n(`p`);i(Ut,Wt),t(Wt,`report-panel-eyebrow`),i(Wt,r(`Order Volume`));let Gt=n(`h2`);i(Ut,Gt),i(Gt,r(`每日订单笔数`));let Kt=n(`div`);i(Ht,Kt),t(Kt,`report-panel-summary`),i(Kt,r(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let qt=n(`div`);i(Vt,qt),t(qt,`report-bars`);let Jt=a(`rue:list:start`),Yt=a(`rue:list:end`);i(qt,Jt),i(qt,Yt);let Xt=new Map;u(()=>{Xt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Xt,parent:qt,before:Yt,singleRoot:!0,trackIndex:!1,start:Jt,renderItem:(r,m,h,g,v)=>{d(p(()=>{let p=e(),m=n(`div`);i(p,m),u(()=>{s(m,`key`,String(r.sumDate))}),t(m,`report-bar-group`);let h=n(`div`);i(m,h),t(h,`report-bar-shell`);let g=n(`div`);i(h,g),u(()=>{t(g,String(`report-bar-fill ${r.sumDate===T.sumDate?`is-accent`:``}`))}),u(()=>{c(g,{height:`${Math.max(8,r.ordersCount/ae*100)}%`})});let v=n(`strong`);i(m,v);let y=o(v);i(v,y),u(()=>{l(y,_.format(r.ordersCount))});let b=n(`span`);i(m,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=fe(r.sumDate);f(()=>d(e,b,x))}),p}),m,h)}})});let Zt=n(`article`);i(Bt,Zt),t(Zt,`report-card report-insight-card`);let Qt=n(`div`);i(Zt,Qt),t(Qt,`report-panel-header`);let $t=n(`div`);i(Qt,$t);let en=n(`p`);i($t,en),t(en,`report-panel-eyebrow`),i(en,r(`Signals`));let tn=n(`h2`);i($t,tn),i(tn,r(`关键观察`));let nn=n(`div`);i(Zt,nn),t(nn,`report-insight-list`);let rn=a(`rue:list:start`),an=a(`rue:list:end`);i(nn,rn),i(nn,an);let on=new Map;u(()=>{on=m({items:he||[],getKey:(e,t)=>e.title,elements:on,parent:nn,before:an,singleRoot:!0,trackIndex:!1,start:rn,renderItem:(r,o,c,l,m)=>{d(p(()=>{let o=e(),c=n(`article`);i(o,c),u(()=>{s(c,`key`,String(r.title))}),t(c,`report-insight-item`);let l=n(`h3`);i(c,l);let p=a(`rue:slot:anchor`);i(l,p),u(()=>{let e=r.title;f(()=>d(e,l,p))});let m=n(`p`);i(c,m);let h=a(`rue:slot:anchor`);return i(m,h),u(()=>{let e=r.text;f(()=>d(e,m,h))}),o}),o,c)}})});let sn=n(`section`);i(O,sn),t(sn,`report-card report-timeline-card`);let cn=n(`div`);i(sn,cn),t(cn,`report-panel-header`);let ln=n(`div`);i(cn,ln);let un=n(`p`);i(ln,un),t(un,`report-panel-eyebrow`),i(un,r(`Daily Playback`));let dn=n(`h2`);i(ln,dn),i(dn,r(`逐日回放`));let fn=n(`div`);i(cn,fn),t(fn,`report-panel-summary`),i(fn,r(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let pn=n(`div`);i(sn,pn),t(pn,`report-timeline-list`);let mn=a(`rue:list:start`),hn=a(`rue:list:end`);i(pn,mn),i(pn,hn);let gn=new Map;return u(()=>{gn=m({items:ge||[],getKey:(e,t)=>e.sumDate,elements:gn,parent:pn,before:hn,singleRoot:!0,trackIndex:!1,start:mn,renderItem:(m,h,g,v,y)=>{d(p(()=>{let p=e(),h=n(`div`);i(p,h),u(()=>{s(h,`key`,String(m.sumDate))}),t(h,`report-timeline-row`);let g=n(`div`);i(h,g),t(g,`report-timeline-main`);let v=n(`strong`);i(g,v);let y=a(`rue:slot:anchor`);i(v,y),u(()=>{let e=m.label;f(()=>d(e,v,y))});let b=n(`span`);i(g,b);let x=a(`rue:slot:anchor`);i(b,x),u(()=>{let e=m.notes;f(()=>d(e,b,x))});let S=n(`div`);i(h,S),t(S,`report-timeline-track`);let C=n(`span`);i(S,C),t(C,`report-timeline-fill`),u(()=>{c(C,{width:`${Math.max(4,m.amountRatio*100)}%`})});let w=n(`div`);i(h,w),t(w,`report-timeline-metrics`);let ee=n(`strong`);i(w,ee);let T=a(`rue:slot:anchor`);i(ee,T),u(()=>{let e=F(m.allAmount);f(()=>d(e,ee,T))});let E=n(`span`);i(w,E);let D=o(E);i(E,D),u(()=>{l(D,_.format(m.ordersCount))}),i(E,r(` 笔 / 客户均额`));let te=o(E);i(E,te),l(te,` `),i(E,r(` `));let ne=a(`rue:slot:anchor`);return i(E,ne),u(()=>{let e=F(m.avgClientPrice);f(()=>d(e,E,ne))}),p}),h,g)}})}),g});export{ve as default};
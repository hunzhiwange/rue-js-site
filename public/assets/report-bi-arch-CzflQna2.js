import{Bt as e,Ht as t,St as n,V as r,Vt as i,W as a,Wt as o,X as s,Y as c,f as l,fn as u,gn as d,h as f,hn as p,in as m,mn as h,p as g,pn as _,qt as v,sn as y,vn as b,yn as x,zt as S}from"./rue-runtime-BWbIfNT8.js";var C=x(`<div class="bi-scope bi-page"><section class="bi-hero bi-card"><div><p class="bi-kicker">BI Platform Architecture / Realtime Monitor</p><h1>多源异构数据接入架构，实时驱动业务决策</h1><p class="bi-hero-desc">统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。</p><div class="bi-tags"><span class="bi-tag"><span class="dot"></span>6 数据源在线</span><span class="bi-tag">CDC 实时同步</span><span class="bi-tag">ETL 批处理</span><span class="bi-tag">四层仓储存档</span><span class="bi-tag">GraphQL + REST 双协议</span></div></div><div class="bi-metrics-grid"><!--rue:text-hole:0--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Sources</p><h2>数据源连接池</h2></div><p>实时监控六大异构数据源的连接状态、QPS、延迟与健康度。</p></div></div><div class="bi-sources-grid"><!--rue:text-hole:1--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Pipeline</p><h2>数据处理管线</h2></div><p>五阶段数据生命周期：从采集到可视化的全链路自动化。</p></div></div><div class="bi-pipeline"><!--rue:text-hole:2--></div></section><section class="bi-chart-section"><article class="bi-card bi-chart-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Latency Monitor</p><h2>24H 延迟趋势</h2></div></div><div class="bi-chart-shell"><svg class="bi-chart-svg" role="img" aria-label="24小时延迟趋势图"><defs><linearGradient id="biLatMysql" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--b-mysql)" stopOpacity="0.25"></stop><stop offset="100%" stopColor="var(--b-mysql)" stopOpacity="0"></stop></linearGradient><linearGradient id="biLatApi" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--b-api)" stopOpacity="0.2"></stop><stop offset="100%" stopColor="var(--b-api)" stopOpacity="0"></stop></linearGradient></defs><!--rue:text-hole:3--><path fill="url(#biLatMysql)"></path><path class="bi-line-path" stroke="var(--b-api)"></path><path class="bi-line-path" stroke="var(--b-mysql)"></path><path class="bi-line-path" stroke="var(--b-pg)"></path><path class="bi-line-path" stroke="var(--b-redis)"></path><!--rue:text-hole:4--><g><circle cx="0" cy="0" r="4" fill="var(--b-mysql)"></circle><text x="10" y="4" class="bi-axis-label">MySQL</text><circle cx="50" cy="0" r="4" fill="var(--b-pg)"></circle><text x="60" y="4" class="bi-axis-label">PG</text><circle cx="0" cy="16" r="4" fill="var(--b-redis)"></circle><text x="10" y="20" class="bi-axis-label">Redis</text><circle cx="50" cy="16" r="4" fill="var(--b-api)"></circle><text x="60" y="20" class="bi-axis-label">API</text></g></svg></div></article><article class="bi-card bi-tp-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Weekly Throughput</p><h2>周吞吐量</h2></div></div><div class="bi-tp-bars"><!--rue:text-hole:5--></div></article></section><section class="bi-bottom-grid"><article class="bi-card bi-queries-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Top Queries</p><h2>高频查询排行</h2></div></div><div><!--rue:text-hole:6--></div></article><article class="bi-card bi-alert-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Alert Center</p><h2>告警事件</h2></div></div><div><!--rue:text-hole:7--></div></article></section></div>`),w=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],T=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],E=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],D=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],O=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],k=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],A=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],j=700,M=220,N={t:20,r:16,b:36,l:16},P=j-N.l-N.r,F=M-N.t-N.b,I=80,L=D.map(e=>{let t=N.l+P/Math.max(D.length-1,1)*D.indexOf(e);return{...e,x:t,mysqlY:N.t+F-e.mysql/I*F,pgY:N.t+F-e.pg/I*F,redisY:N.t+F-e.redis/I*F,apiY:N.t+F-e.api/I*F}}),R=e=>L.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...O.map(e=>e.value)),z=`
.bi-scope.bi-page {
  --b-bg: var(--color-base-100);
  --b-bg2: var(--color-base-200);
  --b-bg3: var(--color-base-300);
  --b-c: var(--color-base-content);
  --b-p: var(--color-primary);
  --b-pc: var(--color-primary-content);
  --b-s: var(--color-secondary);
  --b-sc: var(--color-secondary-content);
  --b-a: var(--color-accent);
  --b-ac: var(--color-accent-content);
  --b-ok: oklch(0.72 0.19 155);
  --b-warn: oklch(0.75 0.18 75);
  --b-err: oklch(0.65 0.22 25);
  --b-mysql: oklch(0.65 0.2 250);
  --b-pg: oklch(0.6 0.18 165);
  --b-ch: oklch(0.72 0.2 300);
  --b-redis: oklch(0.65 0.24 15);
  --b-api: oklch(0.68 0.16 85);
  --b-gql: oklch(0.7 0.2 280);
  --b-glass: color-mix(in oklch, var(--b-bg2) 55%, transparent);
  --b-glass2: color-mix(in oklch, var(--b-bg3) 35%, transparent);

  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 24px;
  font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
}

@media (min-width: 768px) { .bi-scope.bi-page { padding: 0 36px; } }
@media (min-width: 1280px) { .bi-scope.bi-page { padding: 0 48px; } }

.bi-scope .bi-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--b-glass2);
  background:
    radial-gradient(ellipse 70% 50% at 100% -10%, color-mix(in oklch, var(--b-p) 12%, transparent), transparent),
    radial-gradient(ellipse 50% 60% at 0% 110%, color-mix(in oklch, var(--b-s) 8%, transparent), transparent),
    var(--b-glass);
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--b-bg3) 25%, transparent),
    0 16px 48px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent);
  backdrop-filter: blur(4px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.bi-scope .bi-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--b-p) 25%, transparent),
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--b-a) 18%, transparent)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

.bi-scope .bi-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px color-mix(in oklch, var(--b-p) 10%, transparent), 0 24px 64px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent); }
.bi-scope .bi-card:hover::before { opacity: 1; }

.bi-scope .bi-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(340px, 0.85fr);
  gap: 32px;
  padding: 40px;
}

.bi-scope .bi-kicker {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-hero h1 {
  margin: 0;
  font-size: clamp(30px, 4.5vw, 52px);
  line-height: 1.08;
  font-weight: 800;
  color: var(--b-c);
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, var(--b-c) 40%, var(--b-p));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bi-scope .bi-hero-desc {
  margin: 18px 0 0;
  max-width: 60ch;
  line-height: 1.8;
  color: color-mix(in oklch, var(--b-c) 65%, transparent);
}

.bi-scope .bi-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.bi-scope .bi-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 700;
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  background: color-mix(in oklch, var(--b-p) 10%, transparent);
  color: var(--b-p);
  transition: all 0.3s ease;
}

.bi-scope .bi-tag:hover {
  background: color-mix(in oklch, var(--b-p) 20%, transparent);
  transform: translateY(-1px);
}

.bi-scope .bi-tag .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--b-ok);
  box-shadow: 0 0 8px color-mix(in oklch, var(--b-ok) 50%, transparent);
  animation: biPulse 2s ease-in-out infinite;
}

.bi-scope .bi-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.bi-scope .bi-metric-card {
  padding: 20px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-metric-card:hover {
  background: color-mix(in oklch, var(--b-bg3) 55%, var(--b-bg2));
  transform: translateY(-2px);
}

.bi-scope .bi-metric-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-metric-value {
  margin-top: 8px;
  font-size: clamp(24px, 2.5vw, 34px);
  font-weight: 800;
  color: var(--b-c);
  line-height: 1;
}

.bi-scope .bi-metric-delta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
}

.bi-scope .bi-metric-delta.up {
  color: var(--b-ok);
  background: color-mix(in oklch, var(--b-ok) 12%, transparent);
}

.bi-scope .bi-metric-delta.down {
  color: var(--b-err);
  background: color-mix(in oklch, var(--b-err) 12%, transparent);
}

.bi-scope .bi-section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.bi-scope .bi-section-title h2 {
  margin: 0;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-section-title p {
  margin: 0;
  font-size: 14px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  max-width: 36ch;
}

.bi-scope .bi-eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-sources-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 28px;
}

.bi-scope .bi-src {
  padding: 22px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg2) 35%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 30%, transparent);
  transition: all 0.35s ease;
  cursor: default;
}

.bi-scope .bi-src:hover {
  background: color-mix(in oklch, var(--b-bg2) 55%, var(--b-bg));
  border-color: color-mix(in oklch, var(--b-bg3) 55%, transparent);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px color-mix(in oklch, var(--b-bg3) 25%, transparent);
}

.bi-scope .bi-src-head {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bi-scope .bi-src-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
}

.bi-scope .bi-src-icon.mysql { background: linear-gradient(135deg, var(--b-mysql), oklch(0.5 0.15 250)); }
.bi-scope .bi-src-icon.pg { background: linear-gradient(135deg, var(--b-pg), oklch(0.45 0.12 165)); }
.bi-scope .bi-src-icon.ch { background: linear-gradient(135deg, var(--b-ch), oklch(0.55 0.15 300)); }
.bi-scope .bi-src-icon.redis { background: linear-gradient(135deg, var(--b-redis), oklch(0.5 0.18 15)); }
.bi-scope .bi-src-icon.api { background: linear-gradient(135deg, var(--b-api), oklch(0.5 0.12 85)); }
.bi-scope .bi-src-icon.gql { background: linear-gradient(135deg, var(--b-gql), oklch(0.55 0.15 280)); }

.bi-scope .bi-src-name {
  font-size: 17px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-type {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 999px;
  text-transform: uppercase;
}

.bi-scope .bi-src-type.sql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 12%, transparent); }
.bi-scope .bi-src-type.olap { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 12%, transparent); }
.bi-scope .bi-src-type.cache { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 12%, transparent); }
.bi-scope .bi-src-type.http { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 12%, transparent); }

.bi-scope .bi-src-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-src-stat-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-src-stat-value {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-stat-unit {
  font-size: 11px;
  font-weight: 600;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-src-conn-bar {
  width: 100%;
  height: 4px;
  border-radius: 999px;
  margin-top: 6px;
  background: color-mix(in oklch, var(--b-c) 8%, transparent);
  overflow: hidden;
}

.bi-scope .bi-src-conn-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s ease;
}

.bi-scope .bi-src-conn-fill.mysql { background: var(--b-mysql); }
.bi-scope .bi-src-conn-fill.pg { background: var(--b-pg); }
.bi-scope .bi-src-conn-fill.ch { background: var(--b-ch); }
.bi-scope .bi-src-conn-fill.redis { background: var(--b-redis); }
.bi-scope .bi-src-conn-fill.api { background: var(--b-api); }
.bi-scope .bi-src-conn-fill.gql { background: var(--b-gql); }

.bi-scope .bi-src-dbs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.bi-scope .bi-src-db {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 50%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.bi-scope .bi-status-dot.active { background: var(--b-ok); box-shadow: 0 0 10px color-mix(in oklch, var(--b-ok) 50%, transparent); }
.bi-scope .bi-status-dot.warning { background: var(--b-warn); box-shadow: 0 0 10px color-mix(in oklch, var(--b-warn) 50%, transparent); animation: biPulse 1.5s ease-in-out infinite; }

.bi-scope .bi-pipeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  padding: 28px;
  position: relative;
}

.bi-scope .bi-pipe-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 20px 12px;
  position: relative;
  z-index: 1;
}

.bi-scope .bi-pipe-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: linear-gradient(135deg, color-mix(in oklch, var(--b-p) 20%, var(--b-bg2)), color-mix(in oklch, var(--b-a) 15%, var(--b-bg3)));
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  box-shadow: 0 4px 16px color-mix(in oklch, var(--b-p) 12%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-pipe-stage:hover .bi-pipe-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 24px color-mix(in oklch, var(--b-p) 20%, transparent);
}

.bi-scope .bi-pipe-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-pipe-desc {
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  line-height: 1.6;
}

.bi-scope .bi-pipe-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.bi-scope .bi-pipe-item {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-pipe-arrow {
  position: absolute;
  top: 48px;
  right: -14px;
  width: 28px;
  height: 2px;
  z-index: 0;
}

.bi-scope .bi-pipe-arrow::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--b-p), var(--b-a));
  opacity: 0.4;
}

.bi-scope .bi-pipe-arrow::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  border: 5px solid transparent;
  border-left: 7px solid var(--b-a);
  opacity: 0.4;
}

.bi-scope .bi-chart-section {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.85fr);
  gap: 20px;
}

.bi-scope .bi-chart-card {
  padding: 28px;
}

.bi-scope .bi-chart-shell {
  overflow: hidden;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  box-shadow: inset 0 2px 10px color-mix(in oklch, var(--b-bg3) 20%, transparent);
}

.bi-scope .bi-chart-svg {
  display: block;
  width: 100%;
  height: auto;
}

.bi-scope .bi-grid-line {
  stroke: color-mix(in oklch, var(--b-c) 8%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.bi-scope .bi-grid-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 40%, transparent);
}

.bi-scope .bi-axis-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-line-path {
  fill: none;
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.bi-scope .bi-tp-card { padding: 28px; }

.bi-scope .bi-tp-bars {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  min-height: 180px;
  padding: 16px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 35%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
}

.bi-scope .bi-tp-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.bi-scope .bi-tp-bar-shell {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: flex-end;
}

.bi-scope .bi-tp-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 14px 14px 4px 4px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--b-p) 80%, var(--b-a)), color-mix(in oklch, var(--b-p) 20%, transparent));
  box-shadow: 0 6px 20px color-mix(in oklch, var(--b-p) 18%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-tp-fill:hover {
  filter: brightness(1.15);
  box-shadow: 0 8px 28px color-mix(in oklch, var(--b-p) 28%, transparent);
}

.bi-scope .bi-tp-val {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-tp-label {
  font-size: 11px;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-queries-card { padding: 28px; }

.bi-scope .bi-query-row {
  display: grid;
  grid-template-columns: 36px minmax(0, 1.2fr) auto auto auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-query-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-query-row + .bi-query-row {
  margin-top: 10px;
}

.bi-scope .bi-query-rank {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 800;
  color: var(--b-c);
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
}

.bi-scope .bi-query-rank.top3 {
  background: linear-gradient(135deg, var(--b-p), var(--b-a));
  color: white;
}

.bi-scope .bi-query-sql {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-query-src {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-query-src.mysql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 10%, transparent); }
.bi-scope .bi-query-src.pg { color: var(--b-pg); background: color-mix(in oklch, var(--b-pg) 10%, transparent); }
.bi-scope .bi-query-src.ch { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 10%, transparent); }
.bi-scope .bi-query-src.redis { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 10%, transparent); }
.bi-scope .bi-query-src.api { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 10%, transparent); }
.bi-scope .bi-query-src.gql { color: var(--b-gql); background: color-mix(in oklch, var(--b-gql) 10%, transparent); }

.bi-scope .bi-query-freq {
  font-size: 12px;
  font-weight: 700;
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-query-ms {
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.bi-scope .bi-query-ms.fast { color: var(--b-ok); }
.bi-scope .bi-query-ms.med { color: var(--b-warn); }
.bi-scope .bi-query-ms.slow { color: var(--b-err); }

.bi-scope .bi-alert-card { padding: 28px; }

.bi-scope .bi-alert-row {
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-alert-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-alert-row + .bi-alert-row {
  margin-top: 10px;
}

.bi-scope .bi-alert-time {
  font-size: 12px;
  font-weight: 600;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-alert-level {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-level.error { color: var(--b-err); background: color-mix(in oklch, var(--b-err) 12%, transparent); }
.bi-scope .bi-alert-level.warn { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 12%, transparent); }
.bi-scope .bi-alert-level.info { color: var(--b-p); background: color-mix(in oklch, var(--b-p) 12%, transparent); }

.bi-scope .bi-alert-msg {
  font-size: 13px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-alert-resolved {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-resolved.yes { color: var(--b-ok); background: color-mix(in oklch, var(--b-ok) 10%, transparent); }
.bi-scope .bi-alert-resolved.no { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 10%, transparent); }

.bi-scope .bi-bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
}

@keyframes biPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes biFloatIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.bi-scope .bi-card {
  animation: biFloatIn 0.6s ease both;
}

.bi-scope .bi-metric-card:nth-child(1) { animation: biFloatIn 0.5s ease both; animation-delay: 0ms; }
.bi-scope .bi-metric-card:nth-child(2) { animation: biFloatIn 0.5s ease both; animation-delay: 60ms; }
.bi-scope .bi-metric-card:nth-child(3) { animation: biFloatIn 0.5s ease both; animation-delay: 120ms; }
.bi-scope .bi-metric-card:nth-child(4) { animation: biFloatIn 0.5s ease both; animation-delay: 180ms; }
.bi-scope .bi-metric-card:nth-child(5) { animation: biFloatIn 0.5s ease both; animation-delay: 240ms; }
.bi-scope .bi-metric-card:nth-child(6) { animation: biFloatIn 0.5s ease both; animation-delay: 300ms; }

@media (max-width: 1100px) {
  .bi-scope .bi-hero { grid-template-columns: 1fr; }
  .bi-scope .bi-sources-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .bi-scope .bi-chart-section,
  .bi-scope .bi-bottom-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-metrics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .bi-scope.bi-page { padding: 0 12px; gap: 16px; }
  .bi-scope .bi-sources-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-metrics-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-hero { padding: 24px; }
  .bi-scope .bi-query-row { grid-template-columns: 28px minmax(0, 1fr) auto; }
  .bi-scope .bi-query-src, .bi-scope .bi-query-freq, .bi-scope .bi-query-ms { display: none; }
  .bi-scope .bi-alert-row { grid-template-columns: auto minmax(0, 1fr) auto; }
  .bi-scope .bi-alert-time { display: none; }
}
`,te=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),ne=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,B={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},re={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},ie=e=>e<5?`fast`:e<30?`med`:`slow`,V=(x,D,P)=>o(x=>{let D=h(),P=p(`style`,D);u(D,P),m(()=>{b(P,z)});let V=C().content.cloneNode(!0),H=V.firstChild,U=H.childNodes[1].childNodes[0],ae=H.childNodes[2].childNodes[0],W=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0],G=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[2],K=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[3],q=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[4],J=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[5],Y=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[6],X=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[8],Z=H.childNodes[0].childNodes[1].childNodes[0],Q=Z.parentNode,$=H.childNodes[1].childNodes[1].childNodes[0],oe=$.parentNode,se=H.childNodes[2].childNodes[1].childNodes[0],ce=se.parentNode,le=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[1],ue=le.parentNode,de=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[7],fe=de.parentNode,pe=H.childNodes[3].childNodes[1].childNodes[1].childNodes[0],me=pe.parentNode,he=H.childNodes[4].childNodes[0].childNodes[1].childNodes[0],ge=he.parentNode,_e=H.childNodes[4].childNodes[1].childNodes[1].childNodes[0],ve=_e.parentNode;D.appendChild(V),Object.assign(U.style,{padding:`28px 28px 0`}),Object.assign(ae.style,{padding:`28px 28px 0`});let ye;m(()=>{let e=`0 0 ${j} ${M}`;Object.is(ye,e)||(ye=e,e==null||e===!1?W.removeAttribute(`viewBox`):W.setAttribute(`viewBox`,String(e)))}),W.setAttribute(`class`,`bi-chart-svg`),W.setAttribute(`role`,`img`),W.setAttribute(`aria-label`,`24小时延迟趋势图`);let be;m(()=>{let e=`${R(`mysqlY`)} L ${L[L.length-1].x} ${N.t+F} L ${L[0].x} ${N.t+F} Z`;Object.is(be,e)||(be=e,e==null||e===!1?G.removeAttribute(`d`):G.setAttribute(`d`,String(e)))}),G.setAttribute(`fill`,`url(#biLatMysql)`);let xe;m(()=>{let e=R(`apiY`);Object.is(xe,e)||(xe=e,e==null||e===!1?K.removeAttribute(`d`):K.setAttribute(`d`,String(e)))}),K.setAttribute(`class`,`bi-line-path`),K.setAttribute(`stroke`,`var(--b-api)`);let Se;m(()=>{let e=R(`mysqlY`);Object.is(Se,e)||(Se=e,e==null||e===!1?q.removeAttribute(`d`):q.setAttribute(`d`,String(e)))}),q.setAttribute(`class`,`bi-line-path`),q.setAttribute(`stroke`,`var(--b-mysql)`);let Ce;m(()=>{let e=R(`pgY`);Object.is(Ce,e)||(Ce=e,e==null||e===!1?J.removeAttribute(`d`):J.setAttribute(`d`,String(e)))}),J.setAttribute(`class`,`bi-line-path`),J.setAttribute(`stroke`,`var(--b-pg)`);let we;m(()=>{let e=R(`redisY`);Object.is(we,e)||(we=e,e==null||e===!1?Y.removeAttribute(`d`):Y.setAttribute(`d`,String(e)))}),Y.setAttribute(`class`,`bi-line-path`),Y.setAttribute(`stroke`,`var(--b-redis)`);let Te;m(()=>{let e=`translate(${j-N.r-100}, ${N.t+4})`;Object.is(Te,e)||(Te=e,e==null||e===!1?X.removeAttribute(`transform`):X.setAttribute(`transform`,String(e)))});let Ee=[];v(()=>{Ee=f(Q,Z,Ee,E||[],(e,t)=>e.label,(t,n)=>{let r=a(t);return g((t,n,a)=>{let s=()=>o(t=>{let n=p(`div`,t);n.setAttribute(`class`,`bi-metric-card`);let i=p(`div`,n);u(n,i),i.setAttribute(`class`,`bi-metric-label`);let a=_(`rue:compiled-slot`);u(i,a),e({parent:i,before:a},()=>S(r.get().label),()=>({}));let o=p(`div`,n);u(n,o),o.setAttribute(`class`,`bi-metric-value`);let s=_(`rue:compiled-slot`);u(o,s),e({parent:o,before:s},()=>S(r.get().value),()=>({}));let c=p(`span`,n);u(n,c);let l;m(()=>{let e=`bi-metric-delta ${r.get().delta.startsWith(`+`)&&r.get().label===`异常告警`?`down`:`up`}`,t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,c.setAttribute(`class`,t))});let d=_(`rue:compiled-slot`);return u(c,d),e({parent:c,before:d},()=>S(r.get().delta),()=>({})),[n,n]});return t==null?s():i(t,a,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),y(()=>l(Ee));let De=[];v(()=>{De=f(oe,$,De,w||[],(e,t)=>e.id,(t,r)=>{let h=a(t);return g((t,r,b)=>{let x=()=>o(t=>{let r=p(`div`,t);r.setAttribute(`class`,`bi-src`);let o=p(`div`,r);u(r,o),o.setAttribute(`class`,`bi-src-head`);let b=p(`div`,o);u(o,b);let x;m(()=>{let e=`bi-src-icon ${B[h.get().id]}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,b.setAttribute(`class`,t))});let C=_(`rue:compiled-slot`);u(b,C),e({parent:b,before:C},()=>S(h.get().icon),()=>({}));let w=p(`div`,o);u(o,w),Object.assign(w.style,{flex:1});let T=p(`div`,w);u(w,T),Object.assign(T.style,{display:`flex`,alignItems:`center`,gap:8});let E=p(`span`,T);u(T,E),E.setAttribute(`class`,`bi-src-name`);let D=_(`rue:compiled-slot`);u(E,D),e({parent:E,before:D},()=>S(h.get().name),()=>({}));let O=p(`span`,T);u(T,O);let k;m(()=>{let e=`bi-status-dot ${h.get().status}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,O.setAttribute(`class`,t))});let A=p(`span`,w);u(w,A);let j;m(()=>{let e=`bi-src-type ${re[h.get().id]}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,A.setAttribute(`class`,t))});let M=_(`rue:compiled-slot`);u(A,M),e({parent:A,before:M},()=>S(h.get().type),()=>({}));let N=p(`div`,r);u(r,N),N.setAttribute(`class`,`bi-src-stats`);let P=p(`div`,N);u(N,P);let F=p(`div`,P);u(P,F),F.setAttribute(`class`,`bi-src-stat-label`),u(F,d(`QPS`));let I=p(`div`,P);u(P,I),I.setAttribute(`class`,`bi-src-stat-value`);let L=_(`rue:compiled-slot`);u(I,L),e({parent:I,before:L},()=>(e=>(t,n,r)=>S(te(e))(t,n,r))(h.get().qps),()=>({}));let R=p(`div`,N);u(N,R);let ee=p(`div`,R);u(R,ee),ee.setAttribute(`class`,`bi-src-stat-label`),u(ee,d(`延迟`));let z=p(`div`,R);u(R,z),z.setAttribute(`class`,`bi-src-stat-value`);let ie=_(`rue:compiled-slot`);u(z,ie),e({parent:z,before:ie},()=>(e=>(t,n,r)=>S(ne(e))(t,n,r))(h.get().latency),()=>({}));let V=p(`div`,N);u(N,V);let H=p(`div`,V);u(V,H),H.setAttribute(`class`,`bi-src-stat-label`),u(H,d(`可用率`));let U=p(`div`,V);u(V,U),U.setAttribute(`class`,`bi-src-stat-value`);let ae=_(`rue:compiled-slot`);u(U,ae),e({parent:U,before:ae},()=>S(h.get().uptime),()=>({}));let W=p(`div`,r);u(r,W),W.setAttribute(`class`,`bi-src-conn-bar`);let G=p(`div`,W);u(W,G);let K;m(()=>{let e=`bi-src-conn-fill ${B[h.get().id]}`,t=e===!1||e==null?``:String(e);Object.is(K,t)||(K=t,G.setAttribute(`class`,t))});let q;m(()=>{let e={width:`${h.get().connections/h.get().maxConn*100}%`},t=n(e);Object.is(q,t)||(q=t,G.style.cssText=t)});let J=p(`div`,r);u(r,J),Object.assign(J.style,{marginTop:6,display:`flex`,justifyContent:`space-between`});let Y=p(`span`,J);u(J,Y),Y.setAttribute(`class`,`bi-src-stat-unit`);let X=_(`rue:compiled-slot`);u(Y,X),e({parent:Y,before:X},()=>S(h.get().connections),()=>({})),u(Y,d(` / `));let Z=_(`rue:compiled-slot`);u(Y,Z),e({parent:Y,before:Z},()=>S(h.get().maxConn),()=>({})),u(Y,d(` 连接`));let Q=p(`div`,r);u(r,Q),Q.setAttribute(`class`,`bi-src-dbs`);let $=_(`rue:list:end`);u(Q,$);let oe=[];return v(()=>{let e=h.get().databases||[];oe=f(Q,$,oe,e,(e,t)=>e,(e,t)=>{let n=a(e);return g((e,t,r)=>{let a=()=>c(e=>{let t=p(`span`,e);t.setAttribute(`class`,`bi-src-db`);let r=d(``);return u(t,r),s(r,()=>n.get()),[t,t]});return e==null?a():i(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),y(()=>l(oe)),[r,r]});return t==null?x():i(t,b,x)},(e,n)=>{t=e,r=n,h.set(e)},void 0)},!1,!1)}),y(()=>l(De));let Oe=[];v(()=>{Oe=f(ce,se,Oe,T||[],(e,t)=>e.id,(n,m)=>{let b=a(n),x=a(m);return g((n,m,C)=>{let w=()=>o(n=>{let o=p(`div`,n);o.setAttribute(`class`,`bi-pipe-stage`);let m=p(`div`,o);u(o,m),m.setAttribute(`class`,`bi-pipe-icon`);let C=_(`rue:compiled-slot`);u(m,C),e({parent:m,before:C},()=>S(b.get().icon),()=>({}));let w=p(`div`,o);u(o,w),w.setAttribute(`class`,`bi-pipe-name`);let E=_(`rue:compiled-slot`);u(w,E),e({parent:w,before:E},()=>S(b.get().name),()=>({}));let D=p(`div`,o);u(o,D),D.setAttribute(`class`,`bi-pipe-desc`);let O=_(`rue:compiled-slot`);u(D,O),e({parent:D,before:O},()=>S(b.get().desc),()=>({}));let k=p(`div`,o);u(o,k),k.setAttribute(`class`,`bi-pipe-items`);let A=_(`rue:list:end`);u(k,A);let j=[];return v(()=>{let e=b.get().items||[];j=f(k,A,j,e,(e,t)=>e,(e,t)=>{let n=a(e);return g((e,t,r)=>{let a=()=>c(e=>{let t=p(`span`,e);t.setAttribute(`class`,`bi-pipe-item`);let r=d(``);return u(t,r),s(r,()=>n.get()),[t,t]});return e==null?a():i(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),y(()=>l(j)),t(()=>{let e=x.get()<T.length-1;return e?{__rue_compiled_branch_key:!0,create:()=>r(e=>{let t=p(`div`,e);return t.setAttribute(`class`,`bi-pipe-arrow`),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>r(e=>{let t=h();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(o),[o,o]});return n==null?w():i(n,C,w)},(e,t)=>{n=e,m=t,b.set(e),x.set(t)},void 0)},!0,!1)}),y(()=>l(Oe));let ke=[];v(()=>{ke=f(ue,le,ke,[0,.25,.5,.75,1],(e,t)=>e,(t,n)=>{let r=N.t+F-t*F,s=a(t);return g((t,n,a)=>{let c=()=>o(t=>{let n=p(`g`,t),i=p(`line`,n);u(n,i);let a;m(()=>{let e=N.l;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`x1`):i.setAttribute(`x1`,String(e)))});let o;m(()=>{let e=r;Object.is(o,e)||(o=e,e==null||e===!1?i.removeAttribute(`y1`):i.setAttribute(`y1`,String(e)))});let c;m(()=>{let e=j-N.r;Object.is(c,e)||(c=e,e==null||e===!1?i.removeAttribute(`x2`):i.setAttribute(`x2`,String(e)))});let l;m(()=>{let e=r;Object.is(l,e)||(l=e,e==null||e===!1?i.removeAttribute(`y2`):i.setAttribute(`y2`,String(e)))}),i.setAttribute(`class`,`bi-grid-line`);let f=p(`text`,n);u(n,f);let h;m(()=>{let e=N.l+4;Object.is(h,e)||(h=e,e==null||e===!1?f.removeAttribute(`x`):f.setAttribute(`x`,String(e)))});let g;m(()=>{let e=r-6;Object.is(g,e)||(g=e,e==null||e===!1?f.removeAttribute(`y`):f.setAttribute(`y`,String(e)))}),f.setAttribute(`class`,`bi-grid-label`);let v=_(`rue:compiled-slot`);return u(f,v),e({parent:f,before:v},()=>S((I*s.get()).toFixed(0)),()=>({})),u(f,d(`ms`)),[n,n]});return t==null?c():i(t,a,c)},(e,r)=>{t=e,n=r,s.set(e)},void 0)},!1,!1)}),y(()=>l(ke));let Ae=[];v(()=>{Ae=f(fe,de,Ae,L||[],(e,t)=>e.label,(t,n)=>{let r=a(t);return g((t,n,a)=>{let s=()=>o(t=>{let n=p(`g`,t),i=p(`text`,n);u(n,i);let a;m(()=>{let e=r.get().x;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`x`):i.setAttribute(`x`,String(e)))});let o;m(()=>{Object.is(o,212)||(o=212,i.setAttribute(`y`,`212`))}),i.setAttribute(`textAnchor`,`middle`),i.setAttribute(`class`,`bi-axis-label`);let s=_(`rue:compiled-slot`);u(i,s),e({parent:i,before:s},()=>S(r.get().label),()=>({}));let c=p(`circle`,n);u(n,c);let l;m(()=>{let e=r.get().x;Object.is(l,e)||(l=e,e==null||e===!1?c.removeAttribute(`cx`):c.setAttribute(`cx`,String(e)))});let d;m(()=>{let e=r.get().mysqlY;Object.is(d,e)||(d=e,e==null||e===!1?c.removeAttribute(`cy`):c.setAttribute(`cy`,String(e)))}),c.setAttribute(`r`,`3.5`),c.setAttribute(`fill`,`var(--b-mysql)`),c.setAttribute(`opacity`,`0.85`);let f=p(`circle`,n);u(n,f);let h;m(()=>{let e=r.get().x;Object.is(h,e)||(h=e,e==null||e===!1?f.removeAttribute(`cx`):f.setAttribute(`cx`,String(e)))});let g;m(()=>{let e=r.get().pgY;Object.is(g,e)||(g=e,e==null||e===!1?f.removeAttribute(`cy`):f.setAttribute(`cy`,String(e)))}),f.setAttribute(`r`,`3.5`),f.setAttribute(`fill`,`var(--b-pg)`),f.setAttribute(`opacity`,`0.85`);let v=p(`circle`,n);u(n,v);let y;m(()=>{let e=r.get().x;Object.is(y,e)||(y=e,e==null||e===!1?v.removeAttribute(`cx`):v.setAttribute(`cx`,String(e)))});let b;m(()=>{let e=r.get().redisY;Object.is(b,e)||(b=e,e==null||e===!1?v.removeAttribute(`cy`):v.setAttribute(`cy`,String(e)))}),v.setAttribute(`r`,`3.5`),v.setAttribute(`fill`,`var(--b-redis)`),v.setAttribute(`opacity`,`0.85`);let x=p(`circle`,n);u(n,x);let C;m(()=>{let e=r.get().x;Object.is(C,e)||(C=e,e==null||e===!1?x.removeAttribute(`cx`):x.setAttribute(`cx`,String(e)))});let w;return m(()=>{let e=r.get().apiY;Object.is(w,e)||(w=e,e==null||e===!1?x.removeAttribute(`cy`):x.setAttribute(`cy`,String(e)))}),x.setAttribute(`r`,`3.5`),x.setAttribute(`fill`,`var(--b-api)`),x.setAttribute(`opacity`,`0.85`),[n,n]});return t==null?s():i(t,a,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),y(()=>l(Ae));let je=[];v(()=>{je=f(me,pe,je,O||[],(e,t)=>e.time,(t,r)=>{let s=a(t);return g((t,r,a)=>{let c=()=>o(t=>{let r=p(`div`,t);r.setAttribute(`class`,`bi-tp-group`);let i=p(`div`,r);u(r,i),i.setAttribute(`class`,`bi-tp-val`);let a=_(`rue:compiled-slot`);u(i,a),e({parent:i,before:a},()=>S(s.get().value.toFixed(1)),()=>({})),u(i,d(`T`));let o=p(`div`,r);u(r,o),o.setAttribute(`class`,`bi-tp-bar-shell`);let c=p(`div`,o);u(o,c),c.setAttribute(`class`,`bi-tp-fill`);let l;m(()=>{let e={height:`${Math.max(8,s.get().value/ee*100)}%`},t=n(e);Object.is(l,t)||(l=t,c.style.cssText=t)});let f=p(`div`,r);u(r,f),f.setAttribute(`class`,`bi-tp-label`);let h=_(`rue:compiled-slot`);return u(f,h),e({parent:f,before:h},()=>S(s.get().time),()=>({})),[r,r]});return t==null?c():i(t,a,c)},(e,n)=>{t=e,r=n,s.set(e)},void 0)},!1,!1)}),y(()=>l(je));let Me=[];v(()=>{Me=f(ge,he,Me,k||[],(e,t)=>e.rank,(t,n)=>{let r=a(t);return g((t,n,a)=>{let s=()=>o(t=>{let n=p(`div`,t);n.setAttribute(`class`,`bi-query-row`);let i=p(`span`,n);u(n,i);let a;m(()=>{let e=`bi-query-rank ${r.get().rank<=3?`top3`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,i.setAttribute(`class`,t))});let o=_(`rue:compiled-slot`);u(i,o),e({parent:i,before:o},()=>S(r.get().rank),()=>({}));let s=p(`span`,n);u(n,s),s.setAttribute(`class`,`bi-query-sql`);let c=_(`rue:compiled-slot`);u(s,c),e({parent:s,before:c},()=>S(r.get().sql),()=>({}));let l=p(`span`,n);u(n,l);let f;m(()=>{let e=`bi-query-src ${B[r.get().source.toLowerCase().replace(` `,`-`)]||B[r.get().source===`ClickHouse`?`ch`:r.get().source===`Redis`?`redis`:r.get().source===`MySQL`?`mysql`:r.get().source===`PostgreSQL`?`pg`:r.get().source===`GraphQL`?`gql`:`api`]}`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,l.setAttribute(`class`,t))});let h=_(`rue:compiled-slot`);u(l,h),e({parent:l,before:h},()=>S(r.get().source),()=>({}));let g=p(`span`,n);u(n,g),g.setAttribute(`class`,`bi-query-freq`);let v=_(`rue:compiled-slot`);u(g,v),e({parent:g,before:v},()=>S(r.get().freq),()=>({}));let y=p(`span`,n);u(n,y);let b;m(()=>{let e=`bi-query-ms ${ie(r.get().avgMs)}`,t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,y.setAttribute(`class`,t))});let x=_(`rue:compiled-slot`);return u(y,x),e({parent:y,before:x},()=>S(r.get().avgMs),()=>({})),u(y,d(`ms`)),[n,n]});return t==null?s():i(t,a,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),y(()=>l(Me));let Ne=[];v(()=>{Ne=f(ve,_e,Ne,A||[],(e,t)=>t,(n,s)=>{let c=a(n);return g((n,a,s)=>{let l=()=>o(n=>{let i=p(`div`,n);i.setAttribute(`class`,`bi-alert-row`);let a=p(`span`,i);u(i,a),a.setAttribute(`class`,`bi-alert-time`);let o=_(`rue:compiled-slot`);u(a,o),e({parent:a,before:o},()=>S(c.get().time),()=>({}));let s=p(`span`,i);u(i,s);let l;m(()=>{let e=`bi-alert-level ${c.get().level}`,t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,s.setAttribute(`class`,t))});let f=_(`rue:compiled-slot`);u(s,f),e({parent:s,before:f},()=>S(c.get().level),()=>({}));let h=p(`span`,i);u(i,h),h.setAttribute(`class`,`bi-alert-msg`);let g=_(`rue:compiled-slot`);u(h,g),e({parent:h,before:g},()=>S(c.get().message),()=>({}));let v=p(`span`,i);u(i,v);let y;return m(()=>{let e=`bi-alert-resolved ${c.get().resolved?`yes`:`no`}`,t=e===!1||e==null?``:String(e);Object.is(y,t)||(y=t,v.setAttribute(`class`,t))}),t(()=>c.get().resolved?{__rue_compiled_branch_key:!0,create:()=>r(e=>{let t=d(`已恢复`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>r(e=>{let t=d(`处理中`);return[t,t]})}).__rue_compiled_mount(v),[i,i]});return n==null?l():i(n,s,l)},(e,t)=>{n=e,s=t,c.set(e)},void 0)},!1,!1)}),y(()=>l(Ne));let Pe=d(``),Fe=d(``);return D.insertBefore(Pe,D.firstChild),D.appendChild(Fe),[D.firstChild,D.lastChild]});export{V as default};
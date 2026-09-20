import{Bt as e,F as t,Ht as n,I as r,St as i,Vt as a,Wt as o,f as s,fn as c,gn as l,h as u,hn as d,in as f,mn as p,p as m,pn as h,qt as g,sn as _,vn as v,vt as y,yn as b,yt as x,zt as S}from"./rue-runtime-Cv6BZekS.js";var C=b(`<div class="bi-scope bi-page"><section class="bi-hero bi-card"><div><p class="bi-kicker">BI Platform Architecture / Realtime Monitor</p><h1>多源异构数据接入架构，实时驱动业务决策</h1><p class="bi-hero-desc">统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。</p><div class="bi-tags"><span class="bi-tag"><span class="dot"></span>6 数据源在线</span><span class="bi-tag">CDC 实时同步</span><span class="bi-tag">ETL 批处理</span><span class="bi-tag">四层仓储存档</span><span class="bi-tag">GraphQL + REST 双协议</span></div></div><div class="bi-metrics-grid"><!--rue:text-hole:0--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Sources</p><h2>数据源连接池</h2></div><p>实时监控六大异构数据源的连接状态、QPS、延迟与健康度。</p></div></div><div class="bi-sources-grid"><!--rue:text-hole:1--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Pipeline</p><h2>数据处理管线</h2></div><p>五阶段数据生命周期：从采集到可视化的全链路自动化。</p></div></div><div class="bi-pipeline"><!--rue:text-hole:2--></div></section><section class="bi-chart-section"><article class="bi-card bi-chart-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Latency Monitor</p><h2>24H 延迟趋势</h2></div></div><div class="bi-chart-shell"><svg class="bi-chart-svg" role="img" aria-label="24小时延迟趋势图"><defs><linearGradient id="biLatMysql" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--b-mysql)" stopOpacity="0.25"></stop><stop offset="100%" stopColor="var(--b-mysql)" stopOpacity="0"></stop></linearGradient><linearGradient id="biLatApi" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--b-api)" stopOpacity="0.2"></stop><stop offset="100%" stopColor="var(--b-api)" stopOpacity="0"></stop></linearGradient></defs><!--rue:text-hole:3--><path fill="url(#biLatMysql)"></path><path class="bi-line-path" stroke="var(--b-api)"></path><path class="bi-line-path" stroke="var(--b-mysql)"></path><path class="bi-line-path" stroke="var(--b-pg)"></path><path class="bi-line-path" stroke="var(--b-redis)"></path><!--rue:text-hole:4--><g><circle cx="0" cy="0" r="4" fill="var(--b-mysql)"></circle><text x="10" y="4" class="bi-axis-label">MySQL</text><circle cx="50" cy="0" r="4" fill="var(--b-pg)"></circle><text x="60" y="4" class="bi-axis-label">PG</text><circle cx="0" cy="16" r="4" fill="var(--b-redis)"></circle><text x="10" y="20" class="bi-axis-label">Redis</text><circle cx="50" cy="16" r="4" fill="var(--b-api)"></circle><text x="60" y="20" class="bi-axis-label">API</text></g></svg></div></article><article class="bi-card bi-tp-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Weekly Throughput</p><h2>周吞吐量</h2></div></div><div class="bi-tp-bars"><!--rue:text-hole:5--></div></article></section><section class="bi-bottom-grid"><article class="bi-card bi-queries-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Top Queries</p><h2>高频查询排行</h2></div></div><div><!--rue:text-hole:6--></div></article><article class="bi-card bi-alert-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Alert Center</p><h2>告警事件</h2></div></div><div><!--rue:text-hole:7--></div></article></section></div>`),w=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],T=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],E=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],D=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],O=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],k=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],A=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],j=700,M=220,N={t:20,r:16,b:36,l:16},P=j-N.l-N.r,F=M-N.t-N.b,I=80,L=D.map(e=>{let t=N.l+P/Math.max(D.length-1,1)*D.indexOf(e);return{...e,x:t,mysqlY:N.t+F-e.mysql/I*F,pgY:N.t+F-e.pg/I*F,redisY:N.t+F-e.redis/I*F,apiY:N.t+F-e.api/I*F}}),R=e=>L.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...O.map(e=>e.value)),z=`
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
`,te=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),ne=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,B={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},re={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},ie=e=>e<5?`fast`:e<30?`med`:`slow`,V=(b,D,P)=>o(b=>{let D=p(),P=d(`style`,D);c(D,P),f(()=>{v(P,z)});let V=C().content.cloneNode(!0),H=V.firstChild,U=H.childNodes[1].childNodes[0],ae=H.childNodes[2].childNodes[0],W=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0],G=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[2],K=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[3],q=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[4],J=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[5],Y=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[6],X=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[8],Z=H.childNodes[0].childNodes[1].childNodes[0],Q=Z.parentNode,$=H.childNodes[1].childNodes[1].childNodes[0],oe=$.parentNode,se=H.childNodes[2].childNodes[1].childNodes[0],ce=se.parentNode,le=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[1],ue=le.parentNode,de=H.childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[7],fe=de.parentNode,pe=H.childNodes[3].childNodes[1].childNodes[1].childNodes[0],me=pe.parentNode,he=H.childNodes[4].childNodes[0].childNodes[1].childNodes[0],ge=he.parentNode,_e=H.childNodes[4].childNodes[1].childNodes[1].childNodes[0],ve=_e.parentNode;D.appendChild(V),Object.assign(U.style,{padding:`28px 28px 0`}),Object.assign(ae.style,{padding:`28px 28px 0`});let ye;f(()=>{let e=`0 0 ${j} ${M}`;Object.is(ye,e)||(ye=e,e==null||e===!1?W.removeAttribute(`viewBox`):W.setAttribute(`viewBox`,String(e)))}),W.setAttribute(`class`,`bi-chart-svg`),W.setAttribute(`role`,`img`),W.setAttribute(`aria-label`,`24小时延迟趋势图`);let be;f(()=>{let e=`${R(`mysqlY`)} L ${L[L.length-1].x} ${N.t+F} L ${L[0].x} ${N.t+F} Z`;Object.is(be,e)||(be=e,e==null||e===!1?G.removeAttribute(`d`):G.setAttribute(`d`,String(e)))}),G.setAttribute(`fill`,`url(#biLatMysql)`);let xe;f(()=>{let e=R(`apiY`);Object.is(xe,e)||(xe=e,e==null||e===!1?K.removeAttribute(`d`):K.setAttribute(`d`,String(e)))}),K.setAttribute(`class`,`bi-line-path`),K.setAttribute(`stroke`,`var(--b-api)`);let Se;f(()=>{let e=R(`mysqlY`);Object.is(Se,e)||(Se=e,e==null||e===!1?q.removeAttribute(`d`):q.setAttribute(`d`,String(e)))}),q.setAttribute(`class`,`bi-line-path`),q.setAttribute(`stroke`,`var(--b-mysql)`);let Ce;f(()=>{let e=R(`pgY`);Object.is(Ce,e)||(Ce=e,e==null||e===!1?J.removeAttribute(`d`):J.setAttribute(`d`,String(e)))}),J.setAttribute(`class`,`bi-line-path`),J.setAttribute(`stroke`,`var(--b-pg)`);let we;f(()=>{let e=R(`redisY`);Object.is(we,e)||(we=e,e==null||e===!1?Y.removeAttribute(`d`):Y.setAttribute(`d`,String(e)))}),Y.setAttribute(`class`,`bi-line-path`),Y.setAttribute(`stroke`,`var(--b-redis)`);let Te;f(()=>{let e=`translate(${j-N.r-100}, ${N.t+4})`;Object.is(Te,e)||(Te=e,e==null||e===!1?X.removeAttribute(`transform`):X.setAttribute(`transform`,String(e)))});let Ee=[];g(()=>{Ee=u(Q,Z,Ee,E||[],(e,t)=>e.label,(t,n)=>{let r=y(t);return m((t,n,i)=>{let s=()=>o(t=>{let n=d(`div`,t);n.setAttribute(`class`,`bi-metric-card`);let i=d(`div`,n);c(n,i),i.setAttribute(`class`,`bi-metric-label`);let a=h(`rue:compiled-slot`);c(i,a),e({parent:i,before:a},()=>S(r.get().label),()=>({}));let o=d(`div`,n);c(n,o),o.setAttribute(`class`,`bi-metric-value`);let s=h(`rue:compiled-slot`);c(o,s),e({parent:o,before:s},()=>S(r.get().value),()=>({}));let l=d(`span`,n);c(n,l);let u;f(()=>{let e=`bi-metric-delta ${r.get().delta.startsWith(`+`)&&r.get().label===`异常告警`?`down`:`up`}`,t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,l.setAttribute(`class`,t))});let p=h(`rue:compiled-slot`);return c(l,p),e({parent:l,before:p},()=>S(r.get().delta),()=>({})),[n,n]});return t==null?s():a(t,i,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(Ee));let De=[];g(()=>{De=u(oe,$,De,w||[],(e,t)=>e.id,(n,p)=>{let v=y(n);return m((n,p,b)=>{let x=()=>o(n=>{let o=d(`div`,n);o.setAttribute(`class`,`bi-src`);let p=d(`div`,o);c(o,p),p.setAttribute(`class`,`bi-src-head`);let b=d(`div`,p);c(p,b);let x;f(()=>{let e=`bi-src-icon ${B[v.get().id]}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,b.setAttribute(`class`,t))});let C=h(`rue:compiled-slot`);c(b,C),e({parent:b,before:C},()=>S(v.get().icon),()=>({}));let w=d(`div`,p);c(p,w),Object.assign(w.style,{flex:1});let T=d(`div`,w);c(w,T),Object.assign(T.style,{display:`flex`,alignItems:`center`,gap:8});let E=d(`span`,T);c(T,E),E.setAttribute(`class`,`bi-src-name`);let D=h(`rue:compiled-slot`);c(E,D),e({parent:E,before:D},()=>S(v.get().name),()=>({}));let O=d(`span`,T);c(T,O);let k;f(()=>{let e=`bi-status-dot ${v.get().status}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,O.setAttribute(`class`,t))});let A=d(`span`,w);c(w,A);let j;f(()=>{let e=`bi-src-type ${re[v.get().id]}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,A.setAttribute(`class`,t))});let M=h(`rue:compiled-slot`);c(A,M),e({parent:A,before:M},()=>S(v.get().type),()=>({}));let N=d(`div`,o);c(o,N),N.setAttribute(`class`,`bi-src-stats`);let P=d(`div`,N);c(N,P);let F=d(`div`,P);c(P,F),F.setAttribute(`class`,`bi-src-stat-label`),c(F,l(`QPS`));let I=d(`div`,P);c(P,I),I.setAttribute(`class`,`bi-src-stat-value`);let L=h(`rue:compiled-slot`);c(I,L),e({parent:I,before:L},()=>(e=>(t,n,r)=>S(te(e))(t,n,r))(v.get().qps),()=>({}));let R=d(`div`,N);c(N,R);let ee=d(`div`,R);c(R,ee),ee.setAttribute(`class`,`bi-src-stat-label`),c(ee,l(`延迟`));let z=d(`div`,R);c(R,z),z.setAttribute(`class`,`bi-src-stat-value`);let ie=h(`rue:compiled-slot`);c(z,ie),e({parent:z,before:ie},()=>(e=>(t,n,r)=>S(ne(e))(t,n,r))(v.get().latency),()=>({}));let V=d(`div`,N);c(N,V);let H=d(`div`,V);c(V,H),H.setAttribute(`class`,`bi-src-stat-label`),c(H,l(`可用率`));let U=d(`div`,V);c(V,U),U.setAttribute(`class`,`bi-src-stat-value`);let ae=h(`rue:compiled-slot`);c(U,ae),e({parent:U,before:ae},()=>S(v.get().uptime),()=>({}));let W=d(`div`,o);c(o,W),W.setAttribute(`class`,`bi-src-conn-bar`);let G=d(`div`,W);c(W,G);let K;f(()=>{let e=`bi-src-conn-fill ${B[v.get().id]}`,t=e===!1||e==null?``:String(e);Object.is(K,t)||(K=t,G.setAttribute(`class`,t))});let q;f(()=>{let e={width:`${v.get().connections/v.get().maxConn*100}%`},t=i(e);Object.is(q,t)||(q=t,G.style.cssText=t)});let J=d(`div`,o);c(o,J),Object.assign(J.style,{marginTop:6,display:`flex`,justifyContent:`space-between`});let Y=d(`span`,J);c(J,Y),Y.setAttribute(`class`,`bi-src-stat-unit`);let X=h(`rue:compiled-slot`);c(Y,X),e({parent:Y,before:X},()=>S(v.get().connections),()=>({})),c(Y,l(` / `));let Z=h(`rue:compiled-slot`);c(Y,Z),e({parent:Y,before:Z},()=>S(v.get().maxConn),()=>({})),c(Y,l(` 连接`));let Q=d(`div`,o);c(o,Q),Q.setAttribute(`class`,`bi-src-dbs`);let $=h(`rue:list:end`);c(Q,$);let oe=[];return g(()=>{let e=v.get().databases||[];oe=u(Q,$,oe,e,(e,t)=>e,(e,n)=>{let i=y(e);return m((e,n,o)=>{let s=()=>t(e=>{let t=d(`span`,e);t.setAttribute(`class`,`bi-src-db`);let n=l(``);return c(t,n),r(n,()=>i.get()),[t,t]});return e==null?s():a(e,o,s)},(t,r)=>{e=t,n=r,i.set(t)},void 0)},!1,!1)}),_(()=>s(oe)),[o,o]});return n==null?x():a(n,b,x)},(e,t)=>{n=e,p=t,v.set(e)},void 0)},!1,!1)}),_(()=>s(De));let Oe=[];g(()=>{Oe=u(ce,se,Oe,T||[],(e,t)=>e.id,(i,f)=>{let v=y(i),b=y(f);return m((i,f,C)=>{let w=()=>o(i=>{let o=d(`div`,i);o.setAttribute(`class`,`bi-pipe-stage`);let f=d(`div`,o);c(o,f),f.setAttribute(`class`,`bi-pipe-icon`);let C=h(`rue:compiled-slot`);c(f,C),e({parent:f,before:C},()=>S(v.get().icon),()=>({}));let w=d(`div`,o);c(o,w),w.setAttribute(`class`,`bi-pipe-name`);let E=h(`rue:compiled-slot`);c(w,E),e({parent:w,before:E},()=>S(v.get().name),()=>({}));let D=d(`div`,o);c(o,D),D.setAttribute(`class`,`bi-pipe-desc`);let O=h(`rue:compiled-slot`);c(D,O),e({parent:D,before:O},()=>S(v.get().desc),()=>({}));let k=d(`div`,o);c(o,k),k.setAttribute(`class`,`bi-pipe-items`);let A=h(`rue:list:end`);c(k,A);let j=[];return g(()=>{let e=v.get().items||[];j=u(k,A,j,e,(e,t)=>e,(e,n)=>{let i=y(e);return m((e,n,o)=>{let s=()=>t(e=>{let t=d(`span`,e);t.setAttribute(`class`,`bi-pipe-item`);let n=l(``);return c(t,n),r(n,()=>i.get()),[t,t]});return e==null?s():a(e,o,s)},(t,r)=>{e=t,n=r,i.set(t)},void 0)},!1,!1)}),_(()=>s(j)),n(()=>{let e=b.get()<T.length-1;return e?{__rue_compiled_branch_key:!0,create:()=>x(e=>{let t=d(`div`,e);return t.setAttribute(`class`,`bi-pipe-arrow`),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>x(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>x(e=>{let t=p();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(o),[o,o]});return i==null?w():a(i,C,w)},(e,t)=>{i=e,f=t,v.set(e),b.set(t)},void 0)},!0,!1)}),_(()=>s(Oe));let ke=[];g(()=>{ke=u(ue,le,ke,[0,.25,.5,.75,1],(e,t)=>e,(t,n)=>{let r=N.t+F-t*F,i=y(t);return m((t,n,s)=>{let u=()=>o(t=>{let n=d(`g`,t),a=d(`line`,n);c(n,a);let o;f(()=>{let e=N.l;Object.is(o,e)||(o=e,e==null||e===!1?a.removeAttribute(`x1`):a.setAttribute(`x1`,String(e)))});let s;f(()=>{let e=r;Object.is(s,e)||(s=e,e==null||e===!1?a.removeAttribute(`y1`):a.setAttribute(`y1`,String(e)))});let u;f(()=>{let e=j-N.r;Object.is(u,e)||(u=e,e==null||e===!1?a.removeAttribute(`x2`):a.setAttribute(`x2`,String(e)))});let p;f(()=>{let e=r;Object.is(p,e)||(p=e,e==null||e===!1?a.removeAttribute(`y2`):a.setAttribute(`y2`,String(e)))}),a.setAttribute(`class`,`bi-grid-line`);let m=d(`text`,n);c(n,m);let g;f(()=>{let e=N.l+4;Object.is(g,e)||(g=e,e==null||e===!1?m.removeAttribute(`x`):m.setAttribute(`x`,String(e)))});let _;f(()=>{let e=r-6;Object.is(_,e)||(_=e,e==null||e===!1?m.removeAttribute(`y`):m.setAttribute(`y`,String(e)))}),m.setAttribute(`class`,`bi-grid-label`);let v=h(`rue:compiled-slot`);return c(m,v),e({parent:m,before:v},()=>S((I*i.get()).toFixed(0)),()=>({})),c(m,l(`ms`)),[n,n]});return t==null?u():a(t,s,u)},(e,r)=>{t=e,n=r,i.set(e)},void 0)},!1,!1)}),_(()=>s(ke));let Ae=[];g(()=>{Ae=u(fe,de,Ae,L||[],(e,t)=>e.label,(t,n)=>{let r=y(t);return m((t,n,i)=>{let s=()=>o(t=>{let n=d(`g`,t),i=d(`text`,n);c(n,i);let a;f(()=>{let e=r.get().x;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`x`):i.setAttribute(`x`,String(e)))});let o;f(()=>{Object.is(o,212)||(o=212,i.setAttribute(`y`,`212`))}),i.setAttribute(`textAnchor`,`middle`),i.setAttribute(`class`,`bi-axis-label`);let s=h(`rue:compiled-slot`);c(i,s),e({parent:i,before:s},()=>S(r.get().label),()=>({}));let l=d(`circle`,n);c(n,l);let u;f(()=>{let e=r.get().x;Object.is(u,e)||(u=e,e==null||e===!1?l.removeAttribute(`cx`):l.setAttribute(`cx`,String(e)))});let p;f(()=>{let e=r.get().mysqlY;Object.is(p,e)||(p=e,e==null||e===!1?l.removeAttribute(`cy`):l.setAttribute(`cy`,String(e)))}),l.setAttribute(`r`,`3.5`),l.setAttribute(`fill`,`var(--b-mysql)`),l.setAttribute(`opacity`,`0.85`);let m=d(`circle`,n);c(n,m);let g;f(()=>{let e=r.get().x;Object.is(g,e)||(g=e,e==null||e===!1?m.removeAttribute(`cx`):m.setAttribute(`cx`,String(e)))});let _;f(()=>{let e=r.get().pgY;Object.is(_,e)||(_=e,e==null||e===!1?m.removeAttribute(`cy`):m.setAttribute(`cy`,String(e)))}),m.setAttribute(`r`,`3.5`),m.setAttribute(`fill`,`var(--b-pg)`),m.setAttribute(`opacity`,`0.85`);let v=d(`circle`,n);c(n,v);let y;f(()=>{let e=r.get().x;Object.is(y,e)||(y=e,e==null||e===!1?v.removeAttribute(`cx`):v.setAttribute(`cx`,String(e)))});let b;f(()=>{let e=r.get().redisY;Object.is(b,e)||(b=e,e==null||e===!1?v.removeAttribute(`cy`):v.setAttribute(`cy`,String(e)))}),v.setAttribute(`r`,`3.5`),v.setAttribute(`fill`,`var(--b-redis)`),v.setAttribute(`opacity`,`0.85`);let x=d(`circle`,n);c(n,x);let C;f(()=>{let e=r.get().x;Object.is(C,e)||(C=e,e==null||e===!1?x.removeAttribute(`cx`):x.setAttribute(`cx`,String(e)))});let w;return f(()=>{let e=r.get().apiY;Object.is(w,e)||(w=e,e==null||e===!1?x.removeAttribute(`cy`):x.setAttribute(`cy`,String(e)))}),x.setAttribute(`r`,`3.5`),x.setAttribute(`fill`,`var(--b-api)`),x.setAttribute(`opacity`,`0.85`),[n,n]});return t==null?s():a(t,i,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(Ae));let je=[];g(()=>{je=u(me,pe,je,O||[],(e,t)=>e.time,(t,n)=>{let r=y(t);return m((t,n,s)=>{let u=()=>o(t=>{let n=d(`div`,t);n.setAttribute(`class`,`bi-tp-group`);let a=d(`div`,n);c(n,a),a.setAttribute(`class`,`bi-tp-val`);let o=h(`rue:compiled-slot`);c(a,o),e({parent:a,before:o},()=>S(r.get().value.toFixed(1)),()=>({})),c(a,l(`T`));let s=d(`div`,n);c(n,s),s.setAttribute(`class`,`bi-tp-bar-shell`);let u=d(`div`,s);c(s,u),u.setAttribute(`class`,`bi-tp-fill`);let p;f(()=>{let e={height:`${Math.max(8,r.get().value/ee*100)}%`},t=i(e);Object.is(p,t)||(p=t,u.style.cssText=t)});let m=d(`div`,n);c(n,m),m.setAttribute(`class`,`bi-tp-label`);let g=h(`rue:compiled-slot`);return c(m,g),e({parent:m,before:g},()=>S(r.get().time),()=>({})),[n,n]});return t==null?u():a(t,s,u)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(je));let Me=[];g(()=>{Me=u(ge,he,Me,k||[],(e,t)=>e.rank,(t,n)=>{let r=y(t);return m((t,n,i)=>{let s=()=>o(t=>{let n=d(`div`,t);n.setAttribute(`class`,`bi-query-row`);let i=d(`span`,n);c(n,i);let a;f(()=>{let e=`bi-query-rank ${r.get().rank<=3?`top3`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,i.setAttribute(`class`,t))});let o=h(`rue:compiled-slot`);c(i,o),e({parent:i,before:o},()=>S(r.get().rank),()=>({}));let s=d(`span`,n);c(n,s),s.setAttribute(`class`,`bi-query-sql`);let u=h(`rue:compiled-slot`);c(s,u),e({parent:s,before:u},()=>S(r.get().sql),()=>({}));let p=d(`span`,n);c(n,p);let m;f(()=>{let e=`bi-query-src ${B[r.get().source.toLowerCase().replace(` `,`-`)]||B[r.get().source===`ClickHouse`?`ch`:r.get().source===`Redis`?`redis`:r.get().source===`MySQL`?`mysql`:r.get().source===`PostgreSQL`?`pg`:r.get().source===`GraphQL`?`gql`:`api`]}`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,p.setAttribute(`class`,t))});let g=h(`rue:compiled-slot`);c(p,g),e({parent:p,before:g},()=>S(r.get().source),()=>({}));let _=d(`span`,n);c(n,_),_.setAttribute(`class`,`bi-query-freq`);let v=h(`rue:compiled-slot`);c(_,v),e({parent:_,before:v},()=>S(r.get().freq),()=>({}));let y=d(`span`,n);c(n,y);let b;f(()=>{let e=`bi-query-ms ${ie(r.get().avgMs)}`,t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,y.setAttribute(`class`,t))});let x=h(`rue:compiled-slot`);return c(y,x),e({parent:y,before:x},()=>S(r.get().avgMs),()=>({})),c(y,l(`ms`)),[n,n]});return t==null?s():a(t,i,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(Me));let Ne=[];g(()=>{Ne=u(ve,_e,Ne,A||[],(e,t)=>t,(t,r)=>{let i=y(t);return m((t,r,s)=>{let u=()=>o(t=>{let r=d(`div`,t);r.setAttribute(`class`,`bi-alert-row`);let a=d(`span`,r);c(r,a),a.setAttribute(`class`,`bi-alert-time`);let o=h(`rue:compiled-slot`);c(a,o),e({parent:a,before:o},()=>S(i.get().time),()=>({}));let s=d(`span`,r);c(r,s);let u;f(()=>{let e=`bi-alert-level ${i.get().level}`,t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,s.setAttribute(`class`,t))});let p=h(`rue:compiled-slot`);c(s,p),e({parent:s,before:p},()=>S(i.get().level),()=>({}));let m=d(`span`,r);c(r,m),m.setAttribute(`class`,`bi-alert-msg`);let g=h(`rue:compiled-slot`);c(m,g),e({parent:m,before:g},()=>S(i.get().message),()=>({}));let _=d(`span`,r);c(r,_);let v;return f(()=>{let e=`bi-alert-resolved ${i.get().resolved?`yes`:`no`}`,t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,_.setAttribute(`class`,t))}),n(()=>i.get().resolved?{__rue_compiled_branch_key:!0,create:()=>x(e=>{let t=l(`已恢复`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>x(e=>{let t=l(`处理中`);return[t,t]})}).__rue_compiled_mount(_),[r,r]});return t==null?u():a(t,s,u)},(e,n)=>{t=e,r=n,i.set(e)},void 0)},!1,!1)}),_(()=>s(Ne));let Pe=l(``),Fe=l(``);return D.insertBefore(Pe,D.firstChild),D.appendChild(Fe),[D.firstChild,D.lastChild]});export{V as default};
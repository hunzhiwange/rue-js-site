import{$ as e,Q as t,Qt as n,Wt as r,X as i,et as a,ht as o,l as s,lt as c,nt as l,o as u,pt as d,st as f,tt as p}from"./vapor-runtime-CXIalONM.js";import{n as m}from"./vapor-helpers-vapor-CoXKrGmY.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>s(v=>{let T=e(),A=a(`style`,T);i(T,A),n(()=>{o(A,te)});let j=a(`div`,T);i(T,j),c(j,`bi-scope bi-page`);let M=a(`section`,j);i(j,M),c(M,`bi-hero bi-card`);let N=a(`div`,M);i(M,N);let P=a(`p`,N);i(N,P),c(P,`bi-kicker`),i(P,p(`BI Platform Architecture / Realtime Monitor`));let se=a(`h1`,N);i(N,se),i(se,p(`多源异构数据接入架构，实时驱动业务决策`));let F=a(`p`,N);i(N,F),c(F,`bi-hero-desc`),i(F,p(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=a(`div`,N);i(N,I),c(I,`bi-tags`);let L=a(`span`,I);i(I,L),c(L,`bi-tag`);let ce=a(`span`,L);i(L,ce),c(ce,`dot`),i(L,p(`6 数据源在线`));let R=a(`span`,I);i(I,R),c(R,`bi-tag`),i(R,p(`CDC 实时同步`));let z=a(`span`,I);i(I,z),c(z,`bi-tag`),i(z,p(`ETL 批处理`));let le=a(`span`,I);i(I,le),c(le,`bi-tag`),i(le,p(`四层仓储存档`));let ue=a(`span`,I);i(I,ue),c(ue,`bi-tag`),i(ue,p(`GraphQL + REST 双协议`));let B=a(`div`,M);i(M,B),c(B,`bi-metrics-grid`);let de=t(`rue:list:start`),fe=t(`rue:list:end`);i(B,de),i(B,fe);let pe=new Map;n(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(d,p,m,h,g)=>{u(s(()=>{let s=e(),p=a(`div`,s);i(s,p),n(()=>{f(p,`key`,String(d.label))}),c(p,`bi-metric-card`);let m=a(`div`,p);i(p,m),c(m,`bi-metric-label`);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=d.label;r(()=>u(e,m,h))});let g=a(`div`,p);i(p,g),c(g,`bi-metric-value`);let _=l(g);i(g,_),n(()=>{o(_,d.value)});let v=a(`span`,p);i(p,v),n(()=>{c(v,`bi-metric-delta ${d.delta.startsWith(`+`)&&d.label===`异常告警`?`down`:`up`}`)});let y=t(`rue:slot:anchor`);return i(v,y),n(()=>{let e=d.delta;r(()=>u(e,v,y))}),s}),p,m)}})});let V=a(`section`,j);i(j,V),c(V,`bi-card`);let me=a(`div`,V);i(V,me),d(me,{padding:`28px 28px 0`});let H=a(`div`,me);i(me,H),c(H,`bi-section-title`);let he=a(`div`,H);i(H,he);let ge=a(`p`,he);i(he,ge),c(ge,`bi-eyebrow`),i(ge,p(`Data Sources`));let _e=a(`h2`,he);i(he,_e),i(_e,p(`数据源连接池`));let ve=a(`p`,H);i(H,ve),i(ve,p(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=a(`div`,V);i(V,ye),c(ye,`bi-sources-grid`);let be=t(`rue:list:start`),xe=t(`rue:list:end`);i(ye,be),i(ye,xe);let Se=new Map;n(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{u(s(()=>{let g=e(),_=a(`div`,g);i(g,_),n(()=>{f(_,`key`,String(h.id))}),c(_,`bi-src`);let v=a(`div`,_);i(_,v),c(v,`bi-src-head`);let y=a(`div`,v);i(v,y),n(()=>{c(y,`bi-src-icon ${ie[h.id]}`)});let b=t(`rue:slot:anchor`);i(y,b),n(()=>{let e=h.icon;r(()=>u(e,y,b))});let x=a(`div`,v);i(v,x),d(x,{flex:1});let S=a(`div`,x);i(x,S),d(S,{display:`flex`,alignItems:`center`,gap:8});let C=a(`span`,S);i(S,C),c(C,`bi-src-name`);let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let e=h.name;r(()=>u(e,C,w))});let T=a(`span`,S);i(S,T),n(()=>{c(T,`bi-status-dot ${h.status}`)});let E=a(`span`,x);i(x,E),n(()=>{c(E,`bi-src-type ${ae[h.id]}`)});let D=t(`rue:slot:anchor`);i(E,D),n(()=>{let e=h.type;r(()=>u(e,E,D))});let O=a(`div`,_);i(_,O),c(O,`bi-src-stats`);let k=a(`div`,O);i(O,k);let ee=a(`div`,k);i(k,ee),c(ee,`bi-src-stat-label`),i(ee,p(`QPS`));let te=a(`div`,k);i(k,te),c(te,`bi-src-stat-value`);let oe=t(`rue:slot:anchor`);i(te,oe),n(()=>{let e=ne(h.qps);r(()=>u(e,te,oe))});let A=a(`div`,O);i(O,A);let j=a(`div`,A);i(A,j),c(j,`bi-src-stat-label`),i(j,p(`延迟`));let M=a(`div`,A);i(A,M),c(M,`bi-src-stat-value`);let N=t(`rue:slot:anchor`);i(M,N),n(()=>{let e=re(h.latency);r(()=>u(e,M,N))});let P=a(`div`,O);i(O,P);let se=a(`div`,P);i(P,se),c(se,`bi-src-stat-label`),i(se,p(`可用率`));let F=a(`div`,P);i(P,F),c(F,`bi-src-stat-value`);let I=t(`rue:slot:anchor`);i(F,I),n(()=>{let e=h.uptime;r(()=>u(e,F,I))});let L=a(`div`,_);i(_,L),c(L,`bi-src-conn-bar`);let ce=a(`div`,L);i(L,ce),n(()=>{c(ce,`bi-src-conn-fill ${ie[h.id]}`)}),n(()=>{d(ce,{width:`${h.connections/h.maxConn*100}%`})});let R=a(`div`,_);i(_,R),d(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=a(`span`,R);i(R,z),c(z,`bi-src-stat-unit`);let le=t(`rue:slot:anchor`);i(z,le),n(()=>{let e=h.connections;r(()=>u(e,z,le))}),i(z,p(` / `));let ue=t(`rue:slot:anchor`);i(z,ue),n(()=>{let e=h.maxConn;r(()=>u(e,z,ue))}),i(z,p(` 连接`));let B=a(`div`,_);i(_,B),c(B,`bi-src-dbs`);let de=t(`rue:list:start`),fe=t(`rue:list:end`);i(B,de),i(B,fe);let pe=new Map;return n(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(t,r,d,p,m)=>{u(s(()=>{let r=e(),s=a(`span`,r);i(r,s),n(()=>{f(s,`key`,String(t))}),c(s,`bi-src-db`);let u=l(s);return i(s,u),n(()=>{o(u,t)}),r}),r,d)}})}),g}),g,_)}})});let U=a(`section`,j);i(j,U),c(U,`bi-card`);let Ce=a(`div`,U);i(U,Ce),d(Ce,{padding:`28px 28px 0`});let W=a(`div`,Ce);i(Ce,W),c(W,`bi-section-title`);let we=a(`div`,W);i(W,we);let Te=a(`p`,we);i(we,Te),c(Te,`bi-eyebrow`),i(Te,p(`Data Pipeline`));let Ee=a(`h2`,we);i(we,Ee),i(Ee,p(`数据处理管线`));let De=a(`p`,W);i(W,De),i(De,p(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=a(`div`,U);i(U,Oe),c(Oe,`bi-pipeline`);let ke=t(`rue:list:start`),Ae=t(`rue:list:end`);i(Oe,ke),i(Oe,Ae);let je=new Map;n(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(d,p,h,_,v)=>{u(s(()=>{let p=e(),h=a(`div`,p);i(p,h),n(()=>{f(h,`key`,String(d.id))}),c(h,`bi-pipe-stage`);let _=a(`div`,h);i(h,_),c(_,`bi-pipe-icon`);let y=t(`rue:slot:anchor`);i(_,y),n(()=>{let e=d.icon;r(()=>u(e,_,y))});let b=a(`div`,h);i(h,b),c(b,`bi-pipe-name`);let x=t(`rue:slot:anchor`);i(b,x),n(()=>{let e=d.name;r(()=>u(e,b,x))});let S=a(`div`,h);i(h,S),c(S,`bi-pipe-desc`);let C=t(`rue:slot:anchor`);i(S,C),n(()=>{let e=d.desc;r(()=>u(e,S,C))});let w=a(`div`,h);i(h,w),c(w,`bi-pipe-items`);let T=t(`rue:list:start`),E=t(`rue:list:end`);i(w,T),i(w,E);let D=new Map;n(()=>{D=m({items:d.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,r,d,p,m)=>{u(s(()=>{let r=e(),s=a(`span`,r);i(r,s),n(()=>{f(s,`key`,String(t))}),c(s,`bi-pipe-item`);let u=l(s);return i(s,u),n(()=>{o(u,t)}),r}),r,d)}})});let O=t(`rue:slot:anchor`);return i(h,O),n(()=>{let t=v<g.length-1?s(()=>{let t=e(),n=a(`div`,t);return i(t,n),c(n,`bi-pipe-arrow`),t}):``;r(()=>u(t,h,O))}),p}),p,h)}})});let G=a(`section`,j);i(j,G),c(G,`bi-chart-section`);let K=a(`article`,G);i(G,K),c(K,`bi-card bi-chart-card`);let Me=a(`div`,K);i(K,Me),c(Me,`bi-section-title`);let Ne=a(`div`,Me);i(Me,Ne);let Pe=a(`p`,Ne);i(Ne,Pe),c(Pe,`bi-eyebrow`),i(Pe,p(`Latency Monitor`));let Fe=a(`h2`,Ne);i(Ne,Fe),i(Fe,p(`24H 延迟趋势`));let Ie=a(`div`,K);i(K,Ie),c(Ie,`bi-chart-shell`);let q=a(`svg`,Ie);i(Ie,q),n(()=>{f(q,`viewBox`,String(`0 0 ${S} ${C}`))}),c(q,`bi-chart-svg`),f(q,`role`,`img`),f(q,`aria-label`,`24小时延迟趋势图`);let Le=a(`defs`,q);i(q,Le);let J=a(`linearGradient`,Le);i(Le,J),f(J,`id`,`biLatMysql`),f(J,`x1`,`0`),f(J,`x2`,`0`),f(J,`y1`,`0`),f(J,`y2`,`1`);let Re=a(`stop`,J);i(J,Re),f(Re,`offset`,`0%`),f(Re,`stopColor`,`var(--b-mysql)`),f(Re,`stopOpacity`,`0.25`);let ze=a(`stop`,J);i(J,ze),f(ze,`offset`,`100%`),f(ze,`stopColor`,`var(--b-mysql)`),f(ze,`stopOpacity`,`0`);let Y=a(`linearGradient`,Le);i(Le,Y),f(Y,`id`,`biLatApi`),f(Y,`x1`,`0`),f(Y,`x2`,`0`),f(Y,`y1`,`0`),f(Y,`y2`,`1`);let Be=a(`stop`,Y);i(Y,Be),f(Be,`offset`,`0%`),f(Be,`stopColor`,`var(--b-api)`),f(Be,`stopOpacity`,`0.2`);let Ve=a(`stop`,Y);i(Y,Ve),f(Ve,`offset`,`100%`),f(Ve,`stopColor`,`var(--b-api)`),f(Ve,`stopOpacity`,`0`);let He=t(`rue:list:start`),Ue=t(`rue:list:end`);i(q,He),i(q,Ue);let We=new Map;n(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(t,r,d,m,h)=>{u(s(()=>{let r=e(),s=w.t+E-t*E,u=a(`g`,r);i(r,u),n(()=>{f(u,`key`,String(t))});let d=a(`line`,u);i(u,d),n(()=>{f(d,`x1`,String(w.l))}),n(()=>{f(d,`y1`,String(s))}),n(()=>{f(d,`x2`,String(S-w.r))}),n(()=>{f(d,`y2`,String(s))}),c(d,`bi-grid-line`);let m=a(`text`,u);i(u,m),n(()=>{f(m,`x`,String(w.l+4))}),n(()=>{f(m,`y`,String(s-6))}),c(m,`bi-grid-label`);let h=l(m);return i(m,h),n(()=>{o(h,(D*t).toFixed(0))}),i(m,p(`ms`)),r}),r,d)}})});let Ge=a(`path`,q);i(q,Ge),n(()=>{f(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),f(Ge,`fill`,`url(#biLatMysql)`);let Ke=a(`path`,q);i(q,Ke),n(()=>{f(Ke,`d`,String(k(`apiY`)))}),c(Ke,`bi-line-path`),f(Ke,`stroke`,`var(--b-api)`);let qe=a(`path`,q);i(q,qe),n(()=>{f(qe,`d`,String(k(`mysqlY`)))}),c(qe,`bi-line-path`),f(qe,`stroke`,`var(--b-mysql)`);let Je=a(`path`,q);i(q,Je),n(()=>{f(Je,`d`,String(k(`pgY`)))}),c(Je,`bi-line-path`),f(Je,`stroke`,`var(--b-pg)`);let Ye=a(`path`,q);i(q,Ye),n(()=>{f(Ye,`d`,String(k(`redisY`)))}),c(Ye,`bi-line-path`),f(Ye,`stroke`,`var(--b-redis)`);let Xe=t(`rue:list:start`),Ze=t(`rue:list:end`);i(q,Xe),i(q,Ze);let Qe=new Map;n(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(t,r,d,p,m)=>{u(s(()=>{let r=e(),s=a(`g`,r);i(r,s),n(()=>{f(s,`key`,String(t.label))});let u=a(`text`,s);i(s,u),n(()=>{f(u,`x`,String(t.x))}),n(()=>{f(u,`y`,String(C-8))}),f(u,`textAnchor`,`middle`),c(u,`bi-axis-label`);let d=l(u);i(u,d),n(()=>{o(d,t.label)});let p=a(`circle`,s);i(s,p),n(()=>{f(p,`cx`,String(t.x))}),n(()=>{f(p,`cy`,String(t.mysqlY))}),f(p,`r`,`3.5`),f(p,`fill`,`var(--b-mysql)`),f(p,`opacity`,`0.85`);let m=a(`circle`,s);i(s,m),n(()=>{f(m,`cx`,String(t.x))}),n(()=>{f(m,`cy`,String(t.pgY))}),f(m,`r`,`3.5`),f(m,`fill`,`var(--b-pg)`),f(m,`opacity`,`0.85`);let h=a(`circle`,s);i(s,h),n(()=>{f(h,`cx`,String(t.x))}),n(()=>{f(h,`cy`,String(t.redisY))}),f(h,`r`,`3.5`),f(h,`fill`,`var(--b-redis)`),f(h,`opacity`,`0.85`);let g=a(`circle`,s);return i(s,g),n(()=>{f(g,`cx`,String(t.x))}),n(()=>{f(g,`cy`,String(t.apiY))}),f(g,`r`,`3.5`),f(g,`fill`,`var(--b-api)`),f(g,`opacity`,`0.85`),r}),r,d)}})});let X=a(`g`,q);i(q,X),n(()=>{f(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=a(`circle`,X);i(X,$e),f($e,`cx`,`0`),f($e,`cy`,`0`),f($e,`r`,`4`),f($e,`fill`,`var(--b-mysql)`);let et=a(`text`,X);i(X,et),f(et,`x`,`10`),f(et,`y`,`4`),c(et,`bi-axis-label`),i(et,p(`MySQL`));let tt=a(`circle`,X);i(X,tt),f(tt,`cx`,`50`),f(tt,`cy`,`0`),f(tt,`r`,`4`),f(tt,`fill`,`var(--b-pg)`);let nt=a(`text`,X);i(X,nt),f(nt,`x`,`60`),f(nt,`y`,`4`),c(nt,`bi-axis-label`),i(nt,p(`PG`));let rt=a(`circle`,X);i(X,rt),f(rt,`cx`,`0`),f(rt,`cy`,`16`),f(rt,`r`,`4`),f(rt,`fill`,`var(--b-redis)`);let it=a(`text`,X);i(X,it),f(it,`x`,`10`),f(it,`y`,`20`),c(it,`bi-axis-label`),i(it,p(`Redis`));let at=a(`circle`,X);i(X,at),f(at,`cx`,`50`),f(at,`cy`,`16`),f(at,`r`,`4`),f(at,`fill`,`var(--b-api)`);let ot=a(`text`,X);i(X,ot),f(ot,`x`,`60`),f(ot,`y`,`20`),c(ot,`bi-axis-label`),i(ot,p(`API`));let Z=a(`article`,G);i(G,Z),c(Z,`bi-card bi-tp-card`);let st=a(`div`,Z);i(Z,st),c(st,`bi-section-title`);let ct=a(`div`,st);i(st,ct);let lt=a(`p`,ct);i(ct,lt),c(lt,`bi-eyebrow`),i(lt,p(`Weekly Throughput`));let ut=a(`h2`,ct);i(ct,ut),i(ut,p(`周吞吐量`));let dt=a(`div`,Z);i(Z,dt),c(dt,`bi-tp-bars`);let ft=t(`rue:list:start`),pt=t(`rue:list:end`);i(dt,ft),i(dt,pt);let mt=new Map;n(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{u(s(()=>{let s=e(),h=a(`div`,s);i(s,h),n(()=>{f(h,`key`,String(m.time))}),c(h,`bi-tp-group`);let g=a(`div`,h);i(h,g),c(g,`bi-tp-val`);let _=l(g);i(g,_),n(()=>{o(_,m.value.toFixed(1))}),i(g,p(`T`));let v=a(`div`,h);i(h,v),c(v,`bi-tp-bar-shell`);let y=a(`div`,v);i(v,y),c(y,`bi-tp-fill`),n(()=>{d(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=a(`div`,h);i(h,b),c(b,`bi-tp-label`);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=m.time;r(()=>u(e,b,x))}),s}),h,g)}})});let Q=a(`section`,j);i(j,Q),c(Q,`bi-bottom-grid`);let $=a(`article`,Q);i(Q,$),c($,`bi-card bi-queries-card`);let ht=a(`div`,$);i($,ht),c(ht,`bi-section-title`);let gt=a(`div`,ht);i(ht,gt);let _t=a(`p`,gt);i(gt,_t),c(_t,`bi-eyebrow`),i(_t,p(`Top Queries`));let vt=a(`h2`,gt);i(gt,vt),i(vt,p(`高频查询排行`));let yt=a(`div`,$);i($,yt);let bt=t(`rue:list:start`),xt=t(`rue:list:end`);i(yt,bt),i(yt,xt);let St=new Map;n(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(o,l,d,m,h)=>{u(s(()=>{let s=e(),l=a(`div`,s);i(s,l),n(()=>{f(l,`key`,String(o.rank))}),c(l,`bi-query-row`);let d=a(`span`,l);i(l,d),n(()=>{c(d,`bi-query-rank ${o.rank<=3?`top3`:``}`)});let m=t(`rue:slot:anchor`);i(d,m),n(()=>{let e=o.rank;r(()=>u(e,d,m))});let h=a(`span`,l);i(l,h),c(h,`bi-query-sql`);let g=t(`rue:slot:anchor`);i(h,g),n(()=>{let e=o.sql;r(()=>u(e,h,g))});let _=a(`span`,l);i(l,_),n(()=>{c(_,`bi-query-src ${ie[o.source.toLowerCase().replace(` `,`-`)]||ie[o.source===`ClickHouse`?`ch`:o.source===`Redis`?`redis`:o.source===`MySQL`?`mysql`:o.source===`PostgreSQL`?`pg`:o.source===`GraphQL`?`gql`:`api`]}`)});let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=o.source;r(()=>u(e,_,v))});let y=a(`span`,l);i(l,y),c(y,`bi-query-freq`);let b=t(`rue:slot:anchor`);i(y,b),n(()=>{let e=o.freq;r(()=>u(e,y,b))});let x=a(`span`,l);i(l,x),n(()=>{c(x,`bi-query-ms ${oe(o.avgMs)}`)});let S=t(`rue:slot:anchor`);return i(x,S),n(()=>{let e=o.avgMs;r(()=>u(e,x,S))}),i(x,p(`ms`)),s}),l,d)}})});let Ct=a(`article`,Q);i(Q,Ct),c(Ct,`bi-card bi-alert-card`);let wt=a(`div`,Ct);i(Ct,wt),c(wt,`bi-section-title`);let Tt=a(`div`,wt);i(wt,Tt);let Et=a(`p`,Tt);i(Tt,Et),c(Et,`bi-eyebrow`),i(Et,p(`Alert Center`));let Dt=a(`h2`,Tt);i(Tt,Dt),i(Dt,p(`告警事件`));let Ot=a(`div`,Ct);i(Ct,Ot);let kt=t(`rue:list:start`),At=t(`rue:list:end`);i(Ot,kt),i(Ot,At);let jt=new Map;return n(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(d,p,m,h,g)=>{u(s(()=>{let s=e(),p=a(`div`,s);i(s,p),n(()=>{f(p,`key`,String(g))}),c(p,`bi-alert-row`);let m=a(`span`,p);i(p,m),c(m,`bi-alert-time`);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=d.time;r(()=>u(e,m,h))});let _=a(`span`,p);i(p,_),n(()=>{c(_,`bi-alert-level ${d.level}`)});let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=d.level;r(()=>u(e,_,v))});let y=a(`span`,p);i(p,y),c(y,`bi-alert-msg`);let b=t(`rue:slot:anchor`);i(y,b),n(()=>{let e=d.message;r(()=>u(e,y,b))});let x=a(`span`,p);i(p,x),n(()=>{c(x,`bi-alert-resolved ${d.resolved?`yes`:`no`}`)});let S=l(x);return i(x,S),n(()=>{o(S,d.resolved?`已恢复`:`处理中`)}),s}),p,m)}})}),T});export{A as default};
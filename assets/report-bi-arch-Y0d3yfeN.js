import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,q as d,u as f}from"./vapor-runtime-BZZbPG7x.js";import{n as p}from"./vapor-helpers-vapor-DuGQh50d.js";var m=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],h=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],g=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],_=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],v=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],y=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],b=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],x=700,S=220,C={t:20,r:16,b:36,l:16},w=x-C.l-C.r,T=S-C.t-C.b,E=80,D=_.map(e=>{let t=C.l+w/Math.max(_.length-1,1)*_.indexOf(e);return{...e,x:t,mysqlY:C.t+T-e.mysql/E*T,pgY:C.t+T-e.pg/E*T,redisY:C.t+T-e.redis/E*T,apiY:C.t+T-e.api/E*T}}),O=e=>D.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...v.map(e=>e.value)),k=`
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
`,te=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),ne=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,re={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ie={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},ae=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>f(()=>{let _=a(),w=e(`style`);l(_,w),u(()=>{s(w,k)});let A=e(`div`);l(_,A),o(A,`bi-scope bi-page`);let j=e(`section`);l(A,j),o(j,`bi-hero bi-card`);let M=e(`div`);l(j,M);let N=e(`p`);l(M,N),o(N,`bi-kicker`),l(N,n(`BI Platform Architecture / Realtime Monitor`));let P=e(`h1`);l(M,P),l(P,n(`多源异构数据接入架构，实时驱动业务决策`));let F=e(`p`);l(M,F),o(F,`bi-hero-desc`),l(F,n(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=e(`div`);l(M,I),o(I,`bi-tags`);let L=e(`span`);l(I,L),o(L,`bi-tag`);let R=e(`span`);l(L,R),o(R,`dot`),l(L,n(`6 数据源在线`));let z=e(`span`);l(I,z),o(z,`bi-tag`),l(z,n(`CDC 实时同步`));let B=e(`span`);l(I,B),o(B,`bi-tag`),l(B,n(`ETL 批处理`));let V=e(`span`);l(I,V),o(V,`bi-tag`),l(V,n(`四层仓储存档`));let H=e(`span`);l(I,H),o(H,`bi-tag`),l(H,n(`GraphQL + REST 双协议`));let U=e(`div`);l(j,U),o(U,`bi-metrics-grid`);let W=i(`rue:list:start`),oe=i(`rue:list:end`);l(U,W),l(U,oe);let se=new Map;u(()=>{se=p({items:g||[],getKey:(e,t)=>e.label,elements:se,parent:U,before:oe,singleRoot:!0,start:W,renderItem:(n,d,p,m,h)=>{c(f(()=>{let d=a(),f=e(`div`);l(d,f),u(()=>{t(f,`key`,String(n.label))}),o(f,`bi-metric-card`);let p=e(`div`);l(f,p),o(p,`bi-metric-label`);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.label;c(e,p,m)});let h=e(`div`);l(f,h),o(h,`bi-metric-value`);let g=r(h);l(h,g),u(()=>{s(g,n.value)});let _=e(`span`);l(f,_),u(()=>{o(_,String(`bi-metric-delta ${n.delta.startsWith(`+`)&&n.label===`异常告警`?`down`:`up`}`))});let v=i(`rue:slot:anchor`);return l(_,v),u(()=>{let e=n.delta;c(e,_,v)}),d}),d,p)}})});let G=e(`section`);l(A,G),o(G,`bi-card`);let ce=e(`div`);l(G,ce),d(ce,{padding:`28px 28px 0`});let le=e(`div`);l(ce,le),o(le,`bi-section-title`);let ue=e(`div`);l(le,ue);let de=e(`p`);l(ue,de),o(de,`bi-eyebrow`),l(de,n(`Data Sources`));let fe=e(`h2`);l(ue,fe),l(fe,n(`数据源连接池`));let pe=e(`p`);l(le,pe),l(pe,n(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let K=e(`div`);l(G,K),o(K,`bi-sources-grid`);let me=i(`rue:list:start`),he=i(`rue:list:end`);l(K,me),l(K,he);let ge=new Map;u(()=>{ge=p({items:m||[],getKey:(e,t)=>e.id,elements:ge,parent:K,before:he,singleRoot:!0,start:me,renderItem:(m,h,g,_,v)=>{c(f(()=>{let h=a(),g=e(`div`);l(h,g),u(()=>{t(g,`key`,String(m.id))}),o(g,`bi-src`);let _=e(`div`);l(g,_),o(_,`bi-src-head`);let v=e(`div`);l(_,v),u(()=>{o(v,String(`bi-src-icon ${re[m.id]}`))});let y=i(`rue:slot:anchor`);l(v,y),u(()=>{let e=m.icon;c(e,v,y)});let b=e(`div`);l(_,b),d(b,{flex:1});let x=e(`div`);l(b,x),d(x,{display:`flex`,alignItems:`center`,gap:8});let S=e(`span`);l(x,S),o(S,`bi-src-name`);let C=i(`rue:slot:anchor`);l(S,C),u(()=>{let e=m.name;c(e,S,C)});let w=e(`span`);l(x,w),u(()=>{o(w,String(`bi-status-dot ${m.status}`))});let T=e(`span`);l(b,T),u(()=>{o(T,String(`bi-src-type ${ie[m.id]}`))});let E=i(`rue:slot:anchor`);l(T,E),u(()=>{let e=m.type;c(e,T,E)});let D=e(`div`);l(g,D),o(D,`bi-src-stats`);let O=e(`div`);l(D,O);let ee=e(`div`);l(O,ee),o(ee,`bi-src-stat-label`),l(ee,n(`QPS`));let k=e(`div`);l(O,k),o(k,`bi-src-stat-value`);let ae=r(k);l(k,ae),u(()=>{s(ae,te(m.qps))});let A=e(`div`);l(D,A);let j=e(`div`);l(A,j),o(j,`bi-src-stat-label`),l(j,n(`延迟`));let M=e(`div`);l(A,M),o(M,`bi-src-stat-value`);let N=r(M);l(M,N),u(()=>{s(N,ne(m.latency))});let P=e(`div`);l(D,P);let F=e(`div`);l(P,F),o(F,`bi-src-stat-label`),l(F,n(`可用率`));let I=e(`div`);l(P,I),o(I,`bi-src-stat-value`);let L=i(`rue:slot:anchor`);l(I,L),u(()=>{let e=m.uptime;c(e,I,L)});let R=e(`div`);l(g,R),o(R,`bi-src-conn-bar`);let z=e(`div`);l(R,z),u(()=>{o(z,String(`bi-src-conn-fill ${re[m.id]}`))}),u(()=>{d(z,{width:`${m.connections/m.maxConn*100}%`})});let B=e(`div`);l(g,B),d(B,{marginTop:6,display:`flex`,justifyContent:`space-between`});let V=e(`span`);l(B,V),o(V,`bi-src-stat-unit`);let H=i(`rue:slot:anchor`);l(V,H),u(()=>{let e=m.connections;c(e,V,H)}),l(V,n(` / `));let U=i(`rue:slot:anchor`);l(V,U),u(()=>{let e=m.maxConn;c(e,V,U)}),l(V,n(` 连接`));let W=e(`div`);l(g,W),o(W,`bi-src-dbs`);let oe=i(`rue:list:start`),se=i(`rue:list:end`);l(W,oe),l(W,se);let G=new Map;return u(()=>{G=p({items:m.databases||[],getKey:(e,t)=>e,elements:G,parent:W,before:se,singleRoot:!0,start:oe,renderItem:(n,i,d,p,m)=>{c(f(()=>{let i=a(),c=e(`span`);l(i,c),u(()=>{t(c,`key`,String(n))}),o(c,`bi-src-db`);let d=r(c);return l(c,d),u(()=>{s(d,n)}),i}),i,d)}})}),h}),h,g)}})});let _e=e(`section`);l(A,_e),o(_e,`bi-card`);let ve=e(`div`);l(_e,ve),d(ve,{padding:`28px 28px 0`});let ye=e(`div`);l(ve,ye),o(ye,`bi-section-title`);let be=e(`div`);l(ye,be);let xe=e(`p`);l(be,xe),o(xe,`bi-eyebrow`),l(xe,n(`Data Pipeline`));let Se=e(`h2`);l(be,Se),l(Se,n(`数据处理管线`));let Ce=e(`p`);l(ye,Ce),l(Ce,n(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let q=e(`div`);l(_e,q),o(q,`bi-pipeline`);let we=i(`rue:list:start`),Te=i(`rue:list:end`);l(q,we),l(q,Te);let Ee=new Map;u(()=>{Ee=p({items:h||[],getKey:(e,t)=>e.id,elements:Ee,parent:q,before:Te,singleRoot:!0,start:we,renderItem:(n,d,m,g,_)=>{c(f(()=>{let d=a(),m=e(`div`);l(d,m),u(()=>{t(m,`key`,String(n.id))}),o(m,`bi-pipe-stage`);let g=e(`div`);l(m,g),o(g,`bi-pipe-icon`);let v=i(`rue:slot:anchor`);l(g,v),u(()=>{let e=n.icon;c(e,g,v)});let y=e(`div`);l(m,y),o(y,`bi-pipe-name`);let b=i(`rue:slot:anchor`);l(y,b),u(()=>{let e=n.name;c(e,y,b)});let x=e(`div`);l(m,x),o(x,`bi-pipe-desc`);let S=i(`rue:slot:anchor`);l(x,S),u(()=>{let e=n.desc;c(e,x,S)});let C=e(`div`);l(m,C),o(C,`bi-pipe-items`);let w=i(`rue:list:start`),T=i(`rue:list:end`);l(C,w),l(C,T);let E=new Map;u(()=>{E=p({items:n.items||[],getKey:(e,t)=>e,elements:E,parent:C,before:T,singleRoot:!0,start:w,renderItem:(n,i,d,p,m)=>{c(f(()=>{let i=a(),c=e(`span`);l(i,c),u(()=>{t(c,`key`,String(n))}),o(c,`bi-pipe-item`);let d=r(c);return l(c,d),u(()=>{s(d,n)}),i}),i,d)}})});let D=i(`rue:slot:anchor`);return l(m,D),u(()=>{c(_<h.length-1?f(()=>{let t=a(),n=e(`div`);return l(t,n),o(n,`bi-pipe-arrow`),t}):``,m,D)}),d}),d,m)}})});let De=e(`section`);l(A,De),o(De,`bi-chart-section`);let Oe=e(`article`);l(De,Oe),o(Oe,`bi-card bi-chart-card`);let ke=e(`div`);l(Oe,ke),o(ke,`bi-section-title`);let Ae=e(`div`);l(ke,Ae);let je=e(`p`);l(Ae,je),o(je,`bi-eyebrow`),l(je,n(`Latency Monitor`));let Me=e(`h2`);l(Ae,Me),l(Me,n(`24H 延迟趋势`));let Ne=e(`div`);l(Oe,Ne),o(Ne,`bi-chart-shell`);let J=e(`svg`);l(Ne,J),u(()=>{t(J,`viewBox`,String(`0 0 ${x} ${S}`))}),o(J,`bi-chart-svg`),t(J,`role`,`img`),t(J,`aria-label`,`24小时延迟趋势图`);let Pe=e(`defs`);l(J,Pe);let Y=e(`linearGradient`);l(Pe,Y),t(Y,`id`,`biLatMysql`),t(Y,`x1`,`0`),t(Y,`x2`,`0`),t(Y,`y1`,`0`),t(Y,`y2`,`1`);let Fe=e(`stop`);l(Y,Fe),t(Fe,`offset`,`0%`),t(Fe,`stopColor`,`var(--b-mysql)`),t(Fe,`stopOpacity`,`0.25`);let Ie=e(`stop`);l(Y,Ie),t(Ie,`offset`,`100%`),t(Ie,`stopColor`,`var(--b-mysql)`),t(Ie,`stopOpacity`,`0`);let X=e(`linearGradient`);l(Pe,X),t(X,`id`,`biLatApi`),t(X,`x1`,`0`),t(X,`x2`,`0`),t(X,`y1`,`0`),t(X,`y2`,`1`);let Le=e(`stop`);l(X,Le),t(Le,`offset`,`0%`),t(Le,`stopColor`,`var(--b-api)`),t(Le,`stopOpacity`,`0.2`);let Re=e(`stop`);l(X,Re),t(Re,`offset`,`100%`),t(Re,`stopColor`,`var(--b-api)`),t(Re,`stopOpacity`,`0`);let ze=i(`rue:list:start`),Be=i(`rue:list:end`);l(J,ze),l(J,Be);let Ve=new Map;u(()=>{Ve=p({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:Ve,parent:J,before:Be,singleRoot:!0,start:ze,renderItem:(i,d,p,m,h)=>{c(f(()=>{let c=a(),d=C.t+T-i*T,f=e(`g`);l(c,f),u(()=>{t(f,`key`,String(i))});let p=e(`line`);l(f,p),u(()=>{t(p,`x1`,String(C.l))}),u(()=>{t(p,`y1`,String(d))}),u(()=>{t(p,`x2`,String(x-C.r))}),u(()=>{t(p,`y2`,String(d))}),o(p,`bi-grid-line`);let m=e(`text`);l(f,m),u(()=>{t(m,`x`,String(C.l+4))}),u(()=>{t(m,`y`,String(d-6))}),o(m,`bi-grid-label`);let h=r(m);return l(m,h),u(()=>{s(h,(E*i).toFixed(0))}),l(m,n(`ms`)),c}),d,p)}})});let He=e(`path`);l(J,He),u(()=>{t(He,`d`,String(`${O(`mysqlY`)} L ${D[D.length-1].x} ${C.t+T} L ${D[0].x} ${C.t+T} Z`))}),t(He,`fill`,`url(#biLatMysql)`);let Ue=e(`path`);l(J,Ue),u(()=>{t(Ue,`d`,String(O(`apiY`)))}),o(Ue,`bi-line-path`),t(Ue,`stroke`,`var(--b-api)`);let We=e(`path`);l(J,We),u(()=>{t(We,`d`,String(O(`mysqlY`)))}),o(We,`bi-line-path`),t(We,`stroke`,`var(--b-mysql)`);let Ge=e(`path`);l(J,Ge),u(()=>{t(Ge,`d`,String(O(`pgY`)))}),o(Ge,`bi-line-path`),t(Ge,`stroke`,`var(--b-pg)`);let Ke=e(`path`);l(J,Ke),u(()=>{t(Ke,`d`,String(O(`redisY`)))}),o(Ke,`bi-line-path`),t(Ke,`stroke`,`var(--b-redis)`);let qe=i(`rue:list:start`),Je=i(`rue:list:end`);l(J,qe),l(J,Je);let Ye=new Map;u(()=>{Ye=p({items:D||[],getKey:(e,t)=>e.label,elements:Ye,parent:J,before:Je,singleRoot:!0,start:qe,renderItem:(n,i,d,p,m)=>{c(f(()=>{let i=a(),c=e(`g`);l(i,c),u(()=>{t(c,`key`,String(n.label))});let d=e(`text`);l(c,d),u(()=>{t(d,`x`,String(n.x))}),u(()=>{t(d,`y`,String(S-8))}),t(d,`textAnchor`,`middle`),o(d,`bi-axis-label`);let f=r(d);l(d,f),u(()=>{s(f,n.label)});let p=e(`circle`);l(c,p),u(()=>{t(p,`cx`,String(n.x))}),u(()=>{t(p,`cy`,String(n.mysqlY))}),t(p,`r`,`3.5`),t(p,`fill`,`var(--b-mysql)`),t(p,`opacity`,`0.85`);let m=e(`circle`);l(c,m),u(()=>{t(m,`cx`,String(n.x))}),u(()=>{t(m,`cy`,String(n.pgY))}),t(m,`r`,`3.5`),t(m,`fill`,`var(--b-pg)`),t(m,`opacity`,`0.85`);let h=e(`circle`);l(c,h),u(()=>{t(h,`cx`,String(n.x))}),u(()=>{t(h,`cy`,String(n.redisY))}),t(h,`r`,`3.5`),t(h,`fill`,`var(--b-redis)`),t(h,`opacity`,`0.85`);let g=e(`circle`);return l(c,g),u(()=>{t(g,`cx`,String(n.x))}),u(()=>{t(g,`cy`,String(n.apiY))}),t(g,`r`,`3.5`),t(g,`fill`,`var(--b-api)`),t(g,`opacity`,`0.85`),i}),i,d)}})});let Z=e(`g`);l(J,Z),u(()=>{t(Z,`transform`,String(`translate(${x-C.r-100}, ${C.t+4})`))});let Q=e(`circle`);l(Z,Q),t(Q,`cx`,`0`),t(Q,`cy`,`0`),t(Q,`r`,`4`),t(Q,`fill`,`var(--b-mysql)`);let $=e(`text`);l(Z,$),t($,`x`,`10`),t($,`y`,`4`),o($,`bi-axis-label`),l($,n(`MySQL`));let Xe=e(`circle`);l(Z,Xe),t(Xe,`cx`,`50`),t(Xe,`cy`,`0`),t(Xe,`r`,`4`),t(Xe,`fill`,`var(--b-pg)`);let Ze=e(`text`);l(Z,Ze),t(Ze,`x`,`60`),t(Ze,`y`,`4`),o(Ze,`bi-axis-label`),l(Ze,n(`PG`));let Qe=e(`circle`);l(Z,Qe),t(Qe,`cx`,`0`),t(Qe,`cy`,`16`),t(Qe,`r`,`4`),t(Qe,`fill`,`var(--b-redis)`);let $e=e(`text`);l(Z,$e),t($e,`x`,`10`),t($e,`y`,`20`),o($e,`bi-axis-label`),l($e,n(`Redis`));let et=e(`circle`);l(Z,et),t(et,`cx`,`50`),t(et,`cy`,`16`),t(et,`r`,`4`),t(et,`fill`,`var(--b-api)`);let tt=e(`text`);l(Z,tt),t(tt,`x`,`60`),t(tt,`y`,`20`),o(tt,`bi-axis-label`),l(tt,n(`API`));let nt=e(`article`);l(De,nt),o(nt,`bi-card bi-tp-card`);let rt=e(`div`);l(nt,rt),o(rt,`bi-section-title`);let it=e(`div`);l(rt,it);let at=e(`p`);l(it,at),o(at,`bi-eyebrow`),l(at,n(`Weekly Throughput`));let ot=e(`h2`);l(it,ot),l(ot,n(`周吞吐量`));let st=e(`div`);l(nt,st),o(st,`bi-tp-bars`);let ct=i(`rue:list:start`),lt=i(`rue:list:end`);l(st,ct),l(st,lt);let ut=new Map;u(()=>{ut=p({items:v||[],getKey:(e,t)=>e.time,elements:ut,parent:st,before:lt,singleRoot:!0,start:ct,renderItem:(p,m,h,g,_)=>{c(f(()=>{let f=a(),m=e(`div`);l(f,m),u(()=>{t(m,`key`,String(p.time))}),o(m,`bi-tp-group`);let h=e(`div`);l(m,h),o(h,`bi-tp-val`);let g=r(h);l(h,g),u(()=>{s(g,p.value.toFixed(1))}),l(h,n(`T`));let _=e(`div`);l(m,_),o(_,`bi-tp-bar-shell`);let v=e(`div`);l(_,v),o(v,`bi-tp-fill`),u(()=>{d(v,{height:`${Math.max(8,p.value/ee*100)}%`})});let y=e(`div`);l(m,y),o(y,`bi-tp-label`);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=p.time;c(e,y,b)}),f}),m,h)}})});let dt=e(`section`);l(A,dt),o(dt,`bi-bottom-grid`);let ft=e(`article`);l(dt,ft),o(ft,`bi-card bi-queries-card`);let pt=e(`div`);l(ft,pt),o(pt,`bi-section-title`);let mt=e(`div`);l(pt,mt);let ht=e(`p`);l(mt,ht),o(ht,`bi-eyebrow`),l(ht,n(`Top Queries`));let gt=e(`h2`);l(mt,gt),l(gt,n(`高频查询排行`));let _t=e(`div`);l(ft,_t);let vt=i(`rue:list:start`),yt=i(`rue:list:end`);l(_t,vt),l(_t,yt);let bt=new Map;u(()=>{bt=p({items:y||[],getKey:(e,t)=>e.rank,elements:bt,parent:_t,before:yt,singleRoot:!0,start:vt,renderItem:(r,s,d,p,m)=>{c(f(()=>{let s=a(),d=e(`div`);l(s,d),u(()=>{t(d,`key`,String(r.rank))}),o(d,`bi-query-row`);let f=e(`span`);l(d,f),u(()=>{o(f,String(`bi-query-rank ${r.rank<=3?`top3`:``}`))});let p=i(`rue:slot:anchor`);l(f,p),u(()=>{let e=r.rank;c(e,f,p)});let m=e(`span`);l(d,m),o(m,`bi-query-sql`);let h=i(`rue:slot:anchor`);l(m,h),u(()=>{let e=r.sql;c(e,m,h)});let g=e(`span`);l(d,g),u(()=>{o(g,String(`bi-query-src ${re[r.source.toLowerCase().replace(` `,`-`)]||re[r.source===`ClickHouse`?`ch`:r.source===`Redis`?`redis`:r.source===`MySQL`?`mysql`:r.source===`PostgreSQL`?`pg`:r.source===`GraphQL`?`gql`:`api`]}`))});let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=r.source;c(e,g,_)});let v=e(`span`);l(d,v),o(v,`bi-query-freq`);let y=i(`rue:slot:anchor`);l(v,y),u(()=>{let e=r.freq;c(e,v,y)});let b=e(`span`);l(d,b),u(()=>{o(b,String(`bi-query-ms ${ae(r.avgMs)}`))});let x=i(`rue:slot:anchor`);return l(b,x),u(()=>{let e=r.avgMs;c(e,b,x)}),l(b,n(`ms`)),s}),s,d)}})});let xt=e(`article`);l(dt,xt),o(xt,`bi-card bi-alert-card`);let St=e(`div`);l(xt,St),o(St,`bi-section-title`);let Ct=e(`div`);l(St,Ct);let wt=e(`p`);l(Ct,wt),o(wt,`bi-eyebrow`),l(wt,n(`Alert Center`));let Tt=e(`h2`);l(Ct,Tt),l(Tt,n(`告警事件`));let Et=e(`div`);l(xt,Et);let Dt=i(`rue:list:start`),Ot=i(`rue:list:end`);l(Et,Dt),l(Et,Ot);let kt=new Map;return u(()=>{kt=p({items:b||[],getKey:(e,t)=>t,elements:kt,parent:Et,before:Ot,singleRoot:!0,start:Dt,renderItem:(n,d,p,m,h)=>{c(f(()=>{let d=a(),f=e(`div`);l(d,f),u(()=>{t(f,`key`,String(h))}),o(f,`bi-alert-row`);let p=e(`span`);l(f,p),o(p,`bi-alert-time`);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.time;c(e,p,m)});let g=e(`span`);l(f,g),u(()=>{o(g,String(`bi-alert-level ${n.level}`))});let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.level;c(e,g,_)});let v=e(`span`);l(f,v),o(v,`bi-alert-msg`);let y=i(`rue:slot:anchor`);l(v,y),u(()=>{let e=n.message;c(e,v,y)});let b=e(`span`);l(f,b),u(()=>{o(b,String(`bi-alert-resolved ${n.resolved?`yes`:`no`}`))});let x=r(b);return l(b,x),u(()=>{s(x,n.resolved?`已恢复`:`处理中`)}),d}),d,p)}})}),_});export{A as default};
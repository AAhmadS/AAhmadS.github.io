# Kolbeh Ecosystem — Completion Review (READ-ONLY, no code changed)

Produced 2026-10-14 by read-only survey of `C:\Users\USER\.vscode`. No code in any Kolbeh project was modified. Source of truth files are cited inline.

## 1. Per-project inventory

### KolbehBackend — `C:\Users\USER\.vscode\KolbehBackend`
- **Stack:** C# ASP.NET Core 8, EF Core + Npgsql (Postgres), Redis cache, SignalR, Serilog, MediatR/CQRS, Swagger + Basic-auth middleware.
- **Entry:** `KolbehBackend\Kolbeh.sln` → `KolbehBackend\MyApi\Program.cs` (Kestrel 40MB limit, `/hub/notifications`, `/health`, redirect `/`→`/swagger`). `Dockerfile` (`mcr.microsoft.com/dotnet/aspnet:8.0`, port 5000). `liara.json` app `kolbeh`, location `germany`, disks `logs→/app/wwwroot/logs`, `photo→/app/wwwroot/UploadImages`.
- **Works:** 18 controllers in `MyApi\Controllers\v1\` — Users (OTP+JWT+refresh), SmartRealEstatePricing (+V2 bg job), EstateDelegation, BuildParticipation, RealEstateInfoFile, Advertisements, Wishlist, Uploaders (WebP), Location, HistoricalPrice, BlogPost/Category/Tag, Landing/SendFormToTelegram, TestOtp, LogsJson. Documented in `API_LIST.md` (17 sections) + `DATABASE_TABLES_AND_FILE_UPLOAD.md`. 17 EF migrations in `Data\Migrations\` (InitialCreate → AddHeightZoningJanitorToAds).
- **Stub/risk:** `CommentsController.cs` exists on disk but absent from `API_LIST.md` (doc drift). `AIResult/PostResultV` + `TestOtp/*` + `LogsJson` are `Anonymous` — intentional for pricer but must be firewall/HMAC-gated. SignalR path is `/hub/notifications` in code vs `/notificationHub` in `API_LIST.md`.

### Kolbeh-Backend (wrapper) — `C:\Users\USER\.vscode\Kolbeh-Backend\KolbehBackend`
- Only contains a nested `KolbehBackend\` checkout (same `Kolbeh.sln/Dockerfile/liara.json`, but **without** `API_LIST.md`). No own code. **Pure duplicate — archive or replace with submodule pointer.**

### KolbehClient (new) — `C:\Users\USER\.vscode\KolbehClient`
- **Stack:** Next.js `16.0.10`, React 19, Tailwind 4, react-query 5, Orval 7 + openapi-typescript.
- **Entry:** `src\app\page.tsx` + `src\app\Client.tsx` — currently a **design-system playground** (PropCard/PropTag/Input/OtpInput demo), not real routes. Only route folder is `src\app\(blog)\`.
- **Works:** Orval pipeline works: `scripts\download-swagger.mjs` (curl `https://kolbeh.liara.run/swagger/v1/swagger.json` with Basic auth) → `swagger.json` (273KB checked in) → `orval.config.ts` (excludes BlogTag/BlogCategory/LogsJson/TestOtp/AIResult, baseUrl `https://kolbeh.liara.run`) → `src\api\generated\endpoints.ts` (249KB, react-query). `liara.json` app `mykolbehmain`, iran, port 3000.
- **Stub:** `src\api\custom-client.ts` has auth **commented out** (`// const token = getAuthToken()`). `.env` only has `NEXT_PUBLIC_TEST_ENV` + `SWAGGER_USER/PASS`. `README.md` is 1 line. No auth provider, no property flows — all backend wiring is outside code (env + regen).

### KolbehClientLegacy (Nuxt) — `C:\Users\USER\.vscode\KolbehClientLegacy`
- **Stack:** Nuxt 4.0.3, Vue 3, `@sidebase/nuxt-auth` (local), vee-validate/yup, OpenLayers + Neshan/MapBox/ParsiMap keys, swiper.
- **Entry:** `app\app.vue`, `app\pages\` (auth/blog/dashboard/landing/real-estate/index + test/* demos). `nuxt.config.ts` auth wired to `/Users/LoginWithOtp`, `/Users/RegisterUserWithOtp`, `/Users/GetUserByToken`, token pointer `/data/accessToken/access_token`. `Dockerfile` node:22 → `.output`, port 80.
- **Works:** Per `COMPLETION_SUMMARY.md`: DesktopMenu/MobileMenu/PropertyCard/BlogSection/AboutSection/GetAHome — build passes, strict TS. Services in `app\services\` (User, SmartRealEstatePricing, EstateDelegation, NeshanService).
- **Stub:** Map integration deferred (`OpenLayersMap.vue`, `LocationSelection.vue` placeholder). `.env` points at `http://localhost:3001/api` with `your_key` map keys (stale vs `.env.example`). No `liara.json` — deployment target undefined.

### landing (mykolbeh-landing) — `C:\Users\USER\.vscode\landing`
- **Stack:** Nuxt 3.11, nitro node-server, axios, sharp, Clarity, Playwright.
- **Entry:** `app.vue`, `pages\index.vue|request.vue|success.vue`, `pages\district-3|district-4|properties|property|real-estate|jobs`. `server\api\proxy\` (send-otp/validate-otp/send-to-telegram.post.ts) + `server\api\search\`.
- **Works:** SEO prerender + caching (`nuxt.config.ts` routeRules), phone normalization (+98→0), Telegram proxy with explicit Origin/Referer spoof. `liara.json` is different schema (`platform:node, node v20, nginx brotli`) vs other projects' `{app,port}` schema.
- **Stub/risk:** Proxy defaults to **test** routes: `NUXT_PUBLIC_API_ROUTE_SEND_OTP=/TestOtp/SendOtp` (`landing\.env.example`, `nuxt.config.ts:72-74`). Production OTP should be `/Users/SendOtp` + HMAC (`LandingAuth` in backend). Telegram proxy hardcodes `Origin: https://mykolbeh.com` + desktop User-Agent — fragile, verify via config not code.

### Kolbeh-Coming-Soon — `C:\Users\USER\.vscode\Kolbeh-Coming-Soon`
- Static Next.js 15.5.3 scaffold in `nextjs-scaffold\src\app` + `design-assets/`, `fonts/`, `images/`, `svg/`, brand PDFs (`Kolbeh Brand Book.pdf`). No root `liara.json`, no backend link. **Duplicate of `landing` — keep one public entry (landing/mykolbeh.com), archive the other after DNS cutover.**

### Intelligent-Pricer — `C:\Users\USER\.vscode\Intelligent-Pricer`
- **Stack:** FastAPI (`intelligent_pricer\api\main.py`), CatBoost/XGBoost/LightGBM via `models\model_factory.py`, MSSQL helpers (`utils\db.py`), thread queues.
- **Entry:** `uvicorn intelligent_pricer.api.main:app` — `GET /health`, `POST /price|/process|/batch|/predict|/retrain`, `POST /crawl_data?source=`. `Dockerfile` CMD uvicorn port **8000**; `liara.json` app `kolbehAi`, port **5000** — **mismatch to resolve in deploy config, not code.**
- **Works:** Queue→`process_property_by_guid`→`batch_notify_backend` to `BACKEND_NOTIFY_URL=https://kolbeh.liara.run/api/v1/AIResult/PostResultV` (per `README.md`, `.env.template`). 3 validated models (MAPE 0.15–0.16 per `INTEGRATION_SUMMARY.md`).
- **Stub:** `/crawl_data` only `kashano` implemented; `divaar/sheypoor/eskaan` return `not implemented yet` (`main.py:133-135`). `predict` falls back to `zirbana*1e6` heuristic on exception. `database_schema.sql` is **Postgres** `properties` table while services use **MSSQL** `dbo.SmartRealEstatePricings` — confirm authoritative DB per env. `README` Production Checklist all unchecked; `docs\run_graph.md` + `routing-api-spec.md` are the runbook sources.

### Kolbeh-Accountant — `C:\Users\USER\.vscode\Kolbeh-Accountant`
- **Stack:** FastAPI (`api\main.py`, `api\routers\transactions`) + React (`frontend\web\`), Postgres 15, Alembic, `docker-compose.yml` (api:8000, db:5432, frontend:3000).
- **Entry:** `/health`, `/api/*` transactions. Separate domain (HesabRavan accounting), **no Kolbeh auth/pricing link**. Decision needed: keep as standalone internal tool, do not merge into Kolbeh deploy.

### Kolbeh-User-Tasks-Panel — `C:\Users\USER\.vscode\Kolbeh-User-Tasks-Panel\employee-management.html`
- Single static HTML (Tailwind CDN, inline JS tabs). Hardcoded demo staff (Sarah/Michael/Emily, Jan 2024), no fetch/backend/persistence. **Ops mockup only — link or archive, no deploy.**

### kolbeh-notebooks + Kolbeh (ops dump)
- `kolbeh-notebooks\moshaveran.ipynb`, `list1.csv`, `moshaveran_total.csv`, `part1/2.xlsx`. `Kolbeh\` has ~20 `989*.xlsx` + `date_2025-09-06.xlsx`, `merged_call_logs.json`, `videoTranscription.ipynb`, `bulk_update_ads.ps1`. **Data-migration sources** for Locations/Advertisements/HistoricalPrices — not apps.

### KolbehAIBackend (stub) — `C:\Users\USER\.vscode\KolbehAIBackend\langserve-server\langserve-server`
- Generic LangServe template (`app/`, `client/`, `pyproject.toml`, `.env.sample`, `docker-compose.*`), no Kolbeh code. **Duplicate role with Intelligent-Pricer — archive, standardize on Pricer.**

## 2. Propositions — completion checklist (no code changes: integration/deploy/docs/QA/data/env/smoke/sequence only)

**P0 — Secrets & env hygiene (do first, before any deploy)**
1. Rotate + vault everything committed in plaintext: `KolbehBackend\MyApi\appsettings.json` + `appsettings.Development.json` (Postgres `logan.liara.cloud:32717`, Redis `:31596`, JWT SecretKey/RefreshTokenPepper, Telegram BotToken/ChatId, SMS ApiKey + template IDs, Swagger `Kolbeh/SuperStrongPass456@`, LandingAuth SharedSecret); `KolbehClient\.env` (same swagger creds); `landing\.env` (Clarity, GA/GAds IDs); `Intelligent-Pricer\.env` + `.env.template` (MSSQL `sa/...@logan.liara.cloud:31548`). Move to Liara env vars / secret store; keep only `.env.example` in repo.
2. Publish per-service `.env.example` matrix (no values): backend (DB/Redis/JWT/SMS/Telegram/LandingAuth/SwaggerAuth), `KolbehClient` (`NEXT_PUBLIC_API_*`, swagger fetch creds), legacy (`NUXT_PUBLIC_API_ADDRESS/PREFIX`, 4 map keys), landing (address/prefix/site-url/3 route overrides/Clarity), pricer (`MSSQL_*`, `BACKEND_NOTIFY_URL`, ports).

**P0 — Liara deploy config normalization + sequencing**
3. Normalize one `liara.json` contract per app and record in runbook: backend `kolbeh/germany:5000` + disks; client `mykolbehmain/iran:3000`; pricer `kolbehAi` — resolve **5000 vs Dockerfile 8000** (`Intelligent-Pricer\Dockerfile:31-34` vs `liara.json:2`); landing uses `platform/node20` schema — confirm Liara accepts mixed schemas or convert. Legacy has no `liara.json` — assign or retire.
4. Sequence: (1) Postgres + Redis up, (2) apply EF migrations, (3) deploy backend, smoke `/health` + `/swagger` (Basic), (4) deploy pricer, smoke `/health`, (5) deploy landing, smoke proxies, (6) deploy one client (legacy *or* new — decide, don't run both in prod), (7) Coming-Soon only as DNS fallback.

**P0 — Database & storage**
5. Apply EF migrations in order on staging clone first (`Data\Migrations\20250827…InitialCreate` → `…AddHeightZoningJanitorToAds`, snapshot `ApplicationDbContextModelSnapshot.cs`); verify Postgres vs pricer MSSQL split (pricer `utils\db.py` + `SmartRealEstatePricings` vs backend Postgres per `DATABASE_TABLES_AND_FILE_UPLOAD.md`); back up before `AdvertsPhase1`/later alters.
6. Verify Liara disk mounts hold uploads across redeploys: `photo→/app/wwwroot/UploadImages` vs code path `wwwroot/estate/` (`DATABASE_TABLES…md:206-208`) and `logs→/app/wwwroot/logs` (`LogSettings: wwwroot/logs`). Reconcile via config/mount docs, smoke `POST /api/v1/Uploaders/Upload` (40MB limit per `Program.cs:49-57`) → `GET /Get/{guid}`.

**P1 — Swagger/Orval drift**
7. Regen contract: `KolbehClient\scripts\download-swagger.mjs` → diff `swagger.json` (273KB) vs live; add missing `CommentsController` + confirm `AIResult/TestOtp/LogsJson` exclusion intent in `orval.config.ts:9`; note hardcoded `baseUrl: https://kolbeh.liara.run` + commented auth in `custom-client.ts:37-41` — wire token via env-provisioned fetcher config (ops step). Publish versioned `swagger.json` artifact per release.

**P1 — Auth OTP E2E (missing link)**
8. Map + smoke the three OTP paths without editing: backend `Users/SendOtp→LoginWithOtp` (rate-limited) vs `TestOtp/SendOtp|ValidateOtp|ResetOtpLimits` (test-only); landing proxy `server\api\proxy\send-otp|validate-otp.post.ts` (currently test routes — flip via `NUXT_PUBLIC_API_ROUTE_*` env); legacy `nuxt-auth` local (`nuxt.config.ts:191-228`); new client (no auth yet — gate its launch on fetcher auth config). Include `RefreshToken/Logout/GetUserByToken` + `LandingHmacMiddleware` (`Program.cs:79,142`) check with `LandingAuth` clock-skew 300s.

**P1 — Pricing pipeline (crawler→model→API→frontend→SignalR)**
9. End-to-end dry run: trigger pricer `/process` for one GUID from `SmartRealEstatePricings` → confirm callback to `AIResult/PostResultV` → `PricingRequestV2` status → SignalR `/hub/notifications` (code, `Program.cs:148`) vs `/notificationHub` (doc — correct the doc). Record which crawler is authoritative (only `crawlers\kashano.py` live; `eskan.py/neshan/osm/planet/street_view` unmapped; divaar/sheypoor/eskaan stub per `main.py:133-135`); locate persisted model artifacts (`ModelFactory` load path) + `retrain` owner/schedule; document `predict` heuristic fallback as known-degraded mode.

**P1 — Duplicate decisions (record ADRs, archive, no code)**
10. `Kolbeh-Backend` wrapper → archive (source of truth `KolbehBackend`). Client vs Legacy → ship one (legacy has auth+pages+services; new has design system + Orval but demo-only `page.tsx`/`Client.tsx`) — other becomes `archive/`. Coming-Soon `nextjs-scaffold` vs `landing` → one public origin (`mykolbeh.com`). `KolbehAIBackend\langserve-server` → archive (pricer is AI backend). `Kolbeh-Accountant` + `User-Tasks-Panel` → explicitly out-of-scope internal/ops, separate deploy or archive.

**P2 — Feature-link verification (blog/location/wishlist)**
11. Smoke matrix from `API_LIST.md` against both frontends: BlogPost/slug + Category/Tag (excluded from new-client Orval — confirm legacy/landing covers blog: legacy `app\pages\blog`, `BlogSection.vue`); `Location` CRUD + toggle-is-show vs map keys; `Wishlist/Add|Remove|GetMy` (auth) vs legacy `PropertyCard` favorite emit (local-only — confirm API binding via QA, not code). Log gaps as integration tickets.

**P2 — QA/smoke & docs**
12. Smoke suite (staging, post-deploy): `/health`, swagger Basic, CORS preflight from `AllowedDomains` (`appsettings.json:48-63` incl. `mykolbeh.com`, `mykolbehmain.liara.run`, dynv6, localhost), OTP send/validate, `Landing/SendFormToTelegram` via landing proxy, upload→get, ad create→search, pricing V2 roundtrip, wishlist auth matrix. Capture with Playwright (landing `playwright.config.ts`, Coming-Soon `playwright.config.ts`, legacy `test-*.cjs` scripts) — new run configs only.
13. Docs: update `API_LIST.md` (add Comments, fix hub path, mark TestOtp/AIResult/LogsJson internal), add deployment runbook (ports, env matrix, migration order, Orval `api:sync` cadence, pricer `docs\run_graph.md` link), per-service smoke checklist.

**P2 — Data migration**
14. Stage `kolbeh-notebooks\moshaveran_total.csv/list1.csv` + `Kolbeh\989*.xlsx/date_2025-09-06.xlsx` → map to Locations/Advertisements/HistoricalPrices via import scripts run as jobs (not app edits); transcribe `Kolbeh\call_logs/callLogs.mp4` via `videoTranscription.ipynb` → `merged_call_logs.json` review; use `bulk_update_ads.ps1`/`fix_encoding.ps1` as runbook steps with dry-run + backup.

## 3. Standing risks
Committed secrets (P0), `liara.json` schema/port/location drift, EF↔MSSQL dual-DB confusion, Orval checked-in `swagger.json` + `Comments` drift, test-OTP routes in landing prod config, anonymous `AIResult/PostResultV`, upload path vs disk mount mismatch, two clients + two landings + two backends competing for prod traffic.

*Note (2026-10-14): Kolbeh shut down January 2026. This review is preserved as the post-mortem integration record — useful if the platform is ever revived or mined for parts (pricer, OTP/auth patterns, Orval pipeline).*

# BWDK TypeScript (axios) SDK — Integration Guide for Agents

You are integrating **BWDK (Buy With DigiKala)** into a Node.js / TypeScript project via this SDK. Read this file **first**, then consult the companion references below.

## BWDK constants

- **Host:** `https://bwdk-backend.digify.shop`
- **Auth scheme:** `MerchantAPIKeyAuth` — header `Authorization: <api_key>`.
- **Main API class:** `DefaultApi` (exported from `./api`).
- **Config class:** `Configuration` (exported from `./configuration`).
- **Transport:** `axios` — the SDK depends on it; add it to the host project's `dependencies`.
- **Module format:** TypeScript sources (`*.ts`) at repo root; consumers compile them with their project's `tsc` or bundler.

> Note: openapi-generator's `typescript-axios` template does **not** emit a `README.md`. This file and `FLOWCHART.md` are the primary references; for per-endpoint detail use `docs/`.

## Companion references

| File             | When to read                                                    |
|------------------|-----------------------------------------------------------------|
| `FLOWCHART.md`   | Canonical order state machine. All callback/webhook branching MUST match these state names. |
| `docs/DefaultApi.md` | Exact method names and signatures per endpoint.             |
| `docs/*.md`      | Per-model reference (e.g. `docs/OrderCreate.md`).               |
| `api.ts`         | Source of truth for model interfaces and `DefaultApi` methods.  |
| `configuration.ts` | All runtime options (host, apiKey, accessToken, baseOptions). |

## Install

```bash
# in the host project
npm install axios
npm install git+https://github.com/rznas/bwdk-sdk-typescript-axios.git#latest
# or pin: ...#v1.2.3
```

Then import:

```ts
import { DefaultApi, Configuration } from 'bwdk_sdk';
```

If the SDK is vendored (copied under `src/bwdk_sdk/`), import via its relative path and make sure `axios` is already a project dependency.

## Minimal wrapper pattern

```ts
import { DefaultApi, Configuration } from 'bwdk_sdk';

const bwdk = new DefaultApi(
  new Configuration({
    basePath: 'https://bwdk-backend.digify.shop',
    apiKey: process.env.BWDK_API_KEY!, // sent as the Authorization header
  })
);

const { data } = await bwdk.orderApiV1CreateOrderCreate(payload);
```

Method names are camelCase and OpenAPI-generated (e.g. `orderApiV1CreateOrderCreate`, `orderApiV1ManagerVerifyCreate`). Look them up in `docs/DefaultApi.md`; do **not** guess.

## Integration invariants

1. **SDK only.** Never call BWDK with raw `fetch`, `axios` (standalone), `node-fetch`, `got`, `undici`, or `superagent`.
2. **Callback flow.** After payment, BWDK redirects the customer to your `callback_url`. Load the order (`orderApiV1ManagerRetrieve`), branch on `data.status` per `FLOWCHART.md`, then call `orderApiV1ManagerVerifyCreate` — `verify` is mandatory before `SHIPPED`.
3. **Errors.** Catch `AxiosError`; use `err.response?.status` and `err.response?.data`. Retry only on network-level errors (`ECONNRESET`, `ETIMEDOUT`), never on 4xx.
4. **Types.** All request/response shapes are exported from `api.ts` as TypeScript `interface`s — prefer those over `any`.
5. **Pinning.** Pin to a concrete tag in `package.json` (`#v1.2.3`), not `#latest`, for production.

## Project conventions

- One `DefaultApi` instance per process is enough — it's stateless; reuse it.
- Wrap the SDK in a small service module (`src/lib/bwdk.ts`) so framework code (Express / NestJS / Next.js routes) never imports `DefaultApi` directly.
- When using Next.js: keep the SDK on the **server** only. Never ship the API key to the browser.

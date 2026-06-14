import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  // #region debug-point A:ssr-json-500
  (() => { import("node:fs").then((fs) => { let u = "http://127.0.0.1:7777/event"; let s = "vercel-runtime-error"; try { const e = fs.readFileSync(".dbg/vercel-runtime-error.env", "utf8"); u = e.match(/DEBUG_SERVER_URL=(.+)/)?.[1] || u; s = e.match(/DEBUG_SESSION_ID=(.+)/)?.[1] || s; } catch {} fetch(u, { method: "POST", body: JSON.stringify({ sessionId: s, runId: "pre-fix", hypothesisId: "A", location: "src/server.ts:65", msg: "[DEBUG] catastrophic SSR response normalized", data: { status: response.status, contentType, body }, ts: Date.now() }) }).catch(() => {}); }).catch(() => {}); })();
  // #endregion
  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      // #region debug-point B:ssr-request-start
      (() => { import("node:fs").then((fs) => { let u = "http://127.0.0.1:7777/event"; let s = "vercel-runtime-error"; try { const e = fs.readFileSync(".dbg/vercel-runtime-error.env", "utf8"); u = e.match(/DEBUG_SERVER_URL=(.+)/)?.[1] || u; s = e.match(/DEBUG_SESSION_ID=(.+)/)?.[1] || s; } catch {} fetch(u, { method: "POST", body: JSON.stringify({ sessionId: s, runId: "pre-fix", hypothesisId: "B", location: "src/server.ts:74", msg: "[DEBUG] SSR request start", data: { url: request.url, method: request.method }, ts: Date.now() }) }).catch(() => {}); }).catch(() => {}); })();
      // #endregion
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      // #region debug-point C:ssr-catch
      (() => { import("node:fs").then((fs) => { let u = "http://127.0.0.1:7777/event"; let s = "vercel-runtime-error"; try { const e = fs.readFileSync(".dbg/vercel-runtime-error.env", "utf8"); u = e.match(/DEBUG_SERVER_URL=(.+)/)?.[1] || u; s = e.match(/DEBUG_SESSION_ID=(.+)/)?.[1] || s; } catch {} fetch(u, { method: "POST", body: JSON.stringify({ sessionId: s, runId: "pre-fix", hypothesisId: "C", location: "src/server.ts:80", msg: "[DEBUG] SSR fetch threw", data: { url: request.url, method: request.method, error: error instanceof Error ? { name: error.name, message: error.message, stack: error.stack } : String(error) }, ts: Date.now() }) }).catch(() => {}); }).catch(() => {}); })();
      // #endregion
      console.error(error);
      return brandedErrorResponse();
    }
  },
};

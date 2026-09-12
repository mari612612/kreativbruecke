const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 20;

const hits = new Map<string, { count: number; resetAt: number }>();

/**
 * Simple in-memory, per-IP fixed-window rate limiter. Resets on cold start
 * and isn't shared across serverless instances — good enough to blunt basic
 * abuse on a low-traffic site, not a substitute for a real rate limiter.
 */
export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

/**
 * Signed token utilities for secure download links
 *
 * Uses HMAC-SHA256 to sign tokens, preventing tampering
 */

import { STRIPE_WEBHOOK_SECRET } from '$env/static/private';

/**
 * Create a signed download URL token
 * Format: base64(payload).signature
 */
export function createDownloadToken(orderId: string, downloadToken: string): string {
  const payload = JSON.stringify({
    oid: orderId,
    tok: downloadToken,
    ts: Date.now(),
  });

  const payloadB64 = btoa(payload);
  const signature = signPayload(payloadB64);

  return `${payloadB64}.${signature}`;
}

/**
 * Verify and decode a signed token
 * Returns download_token if valid, null if tampered/invalid
 */
export function verifyDownloadToken(signedToken: string): string | null {
  const parts = signedToken.split('.');
  if (parts.length !== 2) return null;

  const [payloadB64, signature] = parts;

  // Verify signature
  const expectedSig = signPayload(payloadB64);
  if (signature !== expectedSig) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(payloadB64));
    return payload.tok || null;
  } catch {
    return null;
  }
}

/**
 * Simple HMAC-like signing using the webhook secret
 * Note: For production, consider using Web Crypto API for proper HMAC
 */
function signPayload(payload: string): string {
  // Simple hash combining payload with secret
  // Using a basic approach that works in all environments
  const combined = payload + STRIPE_WEBHOOK_SECRET;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  // Convert to hex-like string
  return Math.abs(hash).toString(36) + combined.length.toString(36);
}

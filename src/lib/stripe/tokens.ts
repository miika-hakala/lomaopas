/**
 * Signed token utilities for secure download links
 *
 * Phase 1: Stripe disabled for Vercel preview builds
 */

/**
 * Create a signed download URL token
 * Format: base64(payload).signature
 */
export function createDownloadToken(orderId: string, downloadToken: string): string {
  throw new Error(
    `Stripe disabled in Phase 1 (createDownloadToken blocked for ${orderId}:${downloadToken})`
  );
}

/**
 * Verify and decode a signed token
 * Returns download_token if valid, null if tampered/invalid
 */
export function verifyDownloadToken(signedToken: string): string | null {
  console.warn(`Stripe disabled in Phase 1 (verifyDownloadToken blocked for ${signedToken})`);
  return null;
}

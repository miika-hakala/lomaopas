/**
 * Product definitions
 *
 * Phase 3.5: Single product (Fuengirola PDF)
 * Separated from config.ts to allow browser import
 */

export const PRODUCTS = {
  fuengirola_pdf: {
    name: 'Fuengirola – Täydellinen lomaopas',
    description: 'PDF-opas suomalaisille turisteille (offline, tulostettava)',
    price: 990, // cents (9.90 EUR)
    currency: 'eur',
  },
} as const;

export type ProductId = keyof typeof PRODUCTS;

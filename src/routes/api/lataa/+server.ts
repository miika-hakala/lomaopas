/**
 * GET /api/lataa?token=xxx
 *
 * Token-protected PDF download endpoint
 * Enforces: 7 days expiry, 5 downloads max
 */

import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { verifyDownloadToken } from '$lib/stripe/tokens';
import { validateAndIncrementDownload } from '$lib/db/orders';

// Placeholder PDF content (replace with actual PDF in production)
const PLACEHOLDER_PDF = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
   /Contents 4 0 R /Resources << >> >>
endobj
4 0 obj
<< /Length 44 >>
stream
BT /F1 24 Tf 100 700 Td (Fuengirola Lomaopas - Placeholder) Tj ET
endstream
endobj
xref
0 5
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000214 00000 n
trailer
<< /Size 5 /Root 1 0 R >>
startxref
306
%%EOF`;

export const GET: RequestHandler = async ({ url }) => {
  const signedToken = url.searchParams.get('token');

  if (!signedToken) {
    throw error(400, 'Latauslinkki puuttuu.');
  }

  // Verify signature and extract download token
  const downloadToken = verifyDownloadToken(signedToken);

  if (!downloadToken) {
    throw error(403, 'Virheellinen tai väärennetty latauslinkki.');
  }

  // Validate order and atomically increment download count
  const { order, error: downloadError } = await validateAndIncrementDownload(downloadToken);

  if (downloadError || !order) {
    throw error(403, downloadError || 'Lataus ei ole sallittu.');
  }

  // Log successful download
  console.log(
    `Download #${order.download_count}/${order.max_downloads} for order ${order.id}`
  );

  // Return PDF
  // TODO: Replace with actual PDF file from storage
  return new Response(PLACEHOLDER_PDF, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Fuengirola-Lomaopas.pdf"',
      'Cache-Control': 'no-store',
    },
  });
};

import { NextRequest, NextResponse } from 'next/server';

/**
 * OAuth initiation — redirects the browser to GitHub's OAuth authorization page.
 * Decap CMS calls GET /api/oauth to start the flow.
 *
 * Required env vars:
 *   GITHUB_CLIENT_ID     — from your GitHub OAuth App
 *   OAUTH_REDIRECT_URI   — e.g. https://e7pourlesnoobs.vercel.app/api/oauth/callback
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = process.env.OAUTH_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return new NextResponse('OAuth non configuré : GITHUB_CLIENT_ID et OAUTH_REDIRECT_URI manquants.', {
      status: 500,
    });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    response_type: 'code',
  });

  return NextResponse.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`
  );
}

import { NextRequest, NextResponse } from 'next/server';

/**
 * OAuth callback — exchanges the GitHub code for an access token and posts it
 * back to the Decap CMS window that opened this popup.
 *
 * Required env vars:
 *   GITHUB_CLIENT_ID     — from your GitHub OAuth App
 *   GITHUB_CLIENT_SECRET — from your GitHub OAuth App
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const errorParam = searchParams.get('error');

  if (errorParam) {
    return renderMessage('error', errorParam);
  }

  if (!code) {
    return renderMessage('error', 'Code OAuth manquant.');
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return renderMessage('error', 'OAuth non configuré côté serveur.');
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      return renderMessage('error', tokenData.error_description ?? tokenData.error);
    }

    const token = tokenData.access_token;
    return renderMessage('success', JSON.stringify({ token, provider: 'github' }));
  } catch (err) {
    return renderMessage('error', "Erreur lors de l'échange du token.");
  }
}

/**
 * Renders a minimal HTML page that posts a message to the opener window.
 * Decap CMS listens for this postMessage to complete the auth flow.
 */
function renderMessage(status: 'success' | 'error', content: string) {
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><title>Authentification</title></head>
<body>
<script>
(function() {
  function receiveMessage(e) {
    console.log("receiveMessage %o", e);
    window.opener.postMessage(
      "authorization:github:${status}:${escapeJs(content)}",
      e.origin
    );
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>Authentification en cours…</p>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

function escapeJs(str: string) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

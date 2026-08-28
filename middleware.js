export const config = {
  matcher: '/sitemap.xml',
};

export default async function middleware(request) {
  const host = (request.headers.get('host') || '').toLowerCase();
  const url = new URL(request.url);

  let target = null;

  if (host.includes('reddyannasite.live')) {
    target = '/sitemap-reddyannasite.xml';
  }

  if (target) {
    const targetUrl = new URL(target, request.url);
    const response = await fetch(targetUrl);
    return new Response(response.body, {
      status: response.status,
      headers: {
        'content-type': 'application/xml',
        'cache-control': 'public, max-age=3600',
      },
    });
  }

  // Fall through to the default /sitemap.xml for all other domains
}

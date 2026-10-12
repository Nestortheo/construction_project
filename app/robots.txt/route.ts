
export async function GET() {
  const robots = `User-Agent: *
    Allow: /

    Sitemap: https://www.amkosbau.gr/sitemap.xml`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

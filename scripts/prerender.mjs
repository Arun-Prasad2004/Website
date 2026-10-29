// Turns the built app into static HTML for every route, plus sitemap.xml and 404.html.
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const serverDir = resolve('dist-server')
const entry = (await readdir(serverDir)).find((f) => f.startsWith('entry-server') && f.endsWith('.js'))
const { render, routes, business } = await import(pathToFileURL(join(serverDir, entry)).href)

const template = await readFile(join(dist, 'index.html'), 'utf8')
const fill = (html, head) => template.replace('<!--app-html-->', html).replace('<!--head-->', head)

for (const route of routes) {
  const { html, head } = render(route)
  const dir = route === '/' ? dist : join(dist, route)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), fill(html, head))
  console.log('prerendered', route)
}

// 404 page (noindex)
const nf = render('/this-page-does-not-exist')
await writeFile(
  join(dist, '404.html'),
  fill(nf.html, '<title>Page not found | Aruna Electricals</title>\n    <meta name="robots" content="noindex" />'),
)

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((r) => `  <url><loc>${business.siteUrl}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
await writeFile(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${business.siteUrl}/sitemap.xml\n`,
)
await rm(serverDir, { recursive: true, force: true })
console.log('sitemap.xml, robots.txt, 404.html written')

import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { headFor, pages } from './config/seo'

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  return { html, head: headFor(url) }
}

export const routes = pages.map((p) => p.path)
export { business } from './config/business'

// https://github.com/evanw/esbuild/pull/2816
import http from 'node:http'

import esbuild from 'esbuild'

import sharedConfig from './shared.mjs'

esbuild
  .context({
    banner: {
      js: 'new EventSource("/esbuild").addEventListener("change", () => location.reload())',
    },
    define: {
      __DEV__: 'true',
      global: 'window',
    },
    minify: false,
    sourcemap: true,
    ...sharedConfig,
  })
  .then(ctx => {
    // https://esbuild.github.io/api/#serve
    // https://esbuild.github.io/api/#serve-proxy
    // https://gist.github.com/martinrue/2896becdb8a5ed81761e11ff2ea5898e
    const port = +process.env.PORT || 3000
    ctx.watch()
    ctx.serve({ port, servedir: '.' }).then(({ host }) => {
      // Create a second (proxy) server that will forward requests to esbuild.
      const proxy = http.createServer((req, res) => {
        // forwardRequest forwards an http request through to esbuid.
        const forwardRequest = path => {
          const options = {
            headers: req.headers,
            hostname: host,
            method: req.method,
            path,
            port,
          }

          const proxyReq = http.request(options, proxyRes => {
            if (proxyRes.statusCode === 404) {
              // If esbuild 404s the request, assume it's a route needing to
              // be handled by the JS bundle, so forward a second attempt to `/`.
              return forwardRequest('/')
            }

            // Otherwise esbuild handled it like a champ, so proxy the response back.
            res.writeHead(proxyRes.statusCode, proxyRes.headers)
            proxyRes.pipe(res, { end: true })
          })

          req.pipe(proxyReq, { end: true })
        }

        // When we're called pass the request right through to esbuild.
        forwardRequest(req.url)
      })
      // Start our proxy server at the specified `listen` port.
      proxy.listen(port)
    })

    console.log(`🚀 running on http://localhost:${port}, watching changes...`)
  })
  .catch(err => {
    console.log('❌ Build error: ', err)
    process.exit(1)
  })

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use("/api",
        createProxyMiddleware({ target: 'http://47.96.0.211:9000', changeOrigin: true , pathRewrite:{ "^/api":"" } })
    )
}
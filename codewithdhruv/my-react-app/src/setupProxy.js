const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/submit',
    createProxyMiddleware({
      target: 'http://localhost:5000', // Change this to match your backend URL
      changeOrigin: true,
    })
  );
};

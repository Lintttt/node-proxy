const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
let app = express();
const port = process.env.PORT || 88;

if (global.PROXY && global.PROXY.length) {
  for (const item of global.PROXY) {
    app.use(
      item.proxy,
      createProxyMiddleware({
        // 转发
        target: item.target,
        // 转发时重写路径
        pathRewrite: item.pathRewrite,
        changeOrigin: item.changeOrigin || true,
      })
    );
  }
}

// 将前端项目所在文件夹设置为静态资源
app.use(
  "/",
  express.static(process.env.staticPath || "./dist", {
    cacheControl: false,
    etag: false,
    lastModified: false,
  })
);

app.listen(port);
require("child_process").exec(`start http://localhost:${port}`);

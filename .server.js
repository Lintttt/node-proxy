// 唯一端口号
process.env.PORT = 18001;
// 前端代码路径
process.env.staticPath = "E:/UE项目资料/华东交大/0530版本/dist";

//启用代理--代理配置
global.PROXY = [
  {
    proxy: "/hcapi",
    target: "http://demo.gzhaochuan.com:18902",
    // pathRewrite: null,
    // changeOrigin: true,
  },
  {
    proxy: "/api",
    target: "http://demo.gzhaochuan.com:18982",
    // pathRewrite: { "^/api": "" },
    // changeOrigin: true,
  },
];

require("./server.js");

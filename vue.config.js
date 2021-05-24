module.exports = {
    // 配置本地调试 vue 的跨域问题，部署到生产环境上时要去掉
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {  //配置跨域
            "/api": {
                target: "http://localhost:8000/",
                ws: true,
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    "^/api": "",
                },
            },
        }
    },
}
module.exports = {
  lintOnSave: false,
  // 配置打包路径
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qqlove-tools/'
    : '/'
}

//vant 按需引入的插件  unplugin-vue-components 插件，它可以自动按需引入组件。
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
    lintOnSave: false ,//关闭语法检查
    configureWebpack: {
        plugins: [
          ComponentsPlugin({
            resolvers: [VantResolver()],
          }),
        ],
    },
};

# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 加入全局js
# 自动判断开发环境，当是开发状态时，加载vconsole，不是开发环境时不加载，
# 链接后面拼接参数?search=search打开搜索状态栏
# 当输入config:logger:true的时候进入调试配置页面，点击打开debug，易芳边产品上线之后的调试，这里的命令之所以设置的复杂，是防止客户误点

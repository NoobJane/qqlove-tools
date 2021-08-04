# QQ Love (光与夜之恋) 工具箱
光与夜之恋工具箱主要使用的框架 Vue3, 组件 Element-Plus进行开发的。

## 后续开发
优先级由高到低。

### 卡牌数据

由于每张卡牌的成长基础数值不一致，因此后续需要搭建一个后台，通过玩家提交的数据，搜集相应的卡牌数值。

目前暂定的卡牌结构：
1. 关联人物
2. 主要属性
3. 初始数值
4. 技能(技能初始值和最大值)
5. 卡牌初始成长数值(每一级对应的四个属性值大小)
6. 获取卡牌的途径(这个需要优化，可以通过信使带回，可以通过抽卡获得，限定池的获取，或者都可以获取，氪金获取)
7. 星级
8. 突破材料(20级，40级，60级需要的瓶子，确定后需更新灵犀升级部分的升级材料计算)
9. 二段光影

### 优化工具箱
1. 优化前端打包。按需导入Element-Plus的模块，查看相关文档的“按需引入”的章节：[Element-Plus 快速上手](https://element-plus.gitee.io/#/zh-CN/component/quickstart)。


## 程序说明
拉取代码后，请先配置好相应的node环境，推荐node 10.0+的版本。本程序的框架用的是 Vue3，使用Vue-cli4.0+进行的脚手架搭建。关于Vue3的特性以及Vue4.0+脚手架的使用，请查看官方文档：[Vue.js Version 3.0+](https://v3.cn.vuejs.org/guide/installation.html)。

开发时请从master分支上拉取一个新的分支进行开发，可以在社区提出issue，并以issue号作为分支名，在该分支上进行开发。请勿直接在master上进行代码的修改。

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 发布

### 构建
```
npm run build
```

### cd 到构建输出的目录下 
```
cd dist

git init
git add -A
git commit -m 'deploy'
```

### 部署到 https://<USERNAME>.github.io/<REPO>
```
git push -f git@gitee.com:frederickz/qqlove-tools.git master:gh-pages
```

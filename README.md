# qiankun-project
基于(qiankun)[https://github.com/umijs/qiankun]做的微前端项目


## 介绍
主应用目录为`masterx`，微应用目录为`micro-vue`，都为vue项目，微应用可以有多个，后面会增加react微应用进来。


## 启动

本地调试需要分别在应用目录下通过命令行启动主应用和微应用

## 如何发布

主应用和微应用需要单独发布，在主应用中通过环境变量文件`.env.[mode]`指定开发环境和生产环境下的配置，
比如通过设置`VUE_APP_MICRO_VUE`，指定微应用在不同环境的入口地址。


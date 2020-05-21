#!/bin/bash
cd masterx/
echo '打包主应用'
npm install
npm run build

cd ../micro-vue/
echo '打包微应用'
npm install
npm run build
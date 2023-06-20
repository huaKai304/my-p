(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{406:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("h2",{attrs:{id:"全局引入element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局引入element"}},[t._v("#")]),t._v(" 全局引入element")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import Element from 'element-ui';\nimport 'element-ui/lib/theme-chalk/index.css';\nVue.use(Element)\n")])])]),e("h2",{attrs:{id:"为什么全局引入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么全局引入"}},[t._v("#")]),t._v(" 为什么全局引入")]),t._v(" "),e("ol",[e("li",[t._v("许多通用组件未通过按需导入使用")]),t._v(" "),e("li",[t._v("减少单个组件打包体积")])]),t._v(" "),e("h2",{attrs:{id:"切换私有源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换私有源"}},[t._v("#")]),t._v(" 切换私有源")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- 添加私有源组 --\x3e\nnrm add npm-public http://10.255.33.99:8081/repository/npm-public/\n\n\x3c!-- 切换到组 --\x3e\nnrm use npm-public\n\n\x3c!-- 查看当前源 --\x3e\nnrm current\nor\nnpm get registry\n")])])]),e("h2",{attrs:{id:"安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install szzt-ui\nnpm install -D babel-plugin-import\n")])])]),e("h2",{attrs:{id:"babel-config-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-config-js"}},[t._v("#")]),t._v(" babel.config.js")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const fs = require('fs')\nconst path = require('path')\nconst url = (name) => path.resolve(__dirname, `node_modules/${name}/index.css`)\nmodule.exports = {\n  presets: [\n    '@vue/cli-plugin-babel/preset'\n  ],\n  plugins: [\n    [\n      'import',\n      {\n        libraryName: 'szzt-ui', // 依赖名\n        style: (name) => {\n          // 判断文件是否存在\n          try {\n            fs.accessSync(url(name), fs.constants.F_OK)\n            return `${name}/index.css`;\n          } catch (error) {\n            return false\n          }\n        },\n        camel2DashComponentName: false, // 是否需要驼峰转短线\n        camel2UnderlineComponentName: false // 是否需要驼峰转下划线\n      }\n    ]\n  ]\n}\n")])])]),e("h2",{attrs:{id:"组件使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件使用"}},[t._v("#")]),t._v(" 组件使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import { TestButton } from 'szzt-ui'\nVue.use(TestButton)\n")])])]),e("h2",{attrs:{id:"工具函数使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具函数使用"}},[t._v("#")]),t._v(" 工具函数使用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import tools from 'szzt-ui/lib/tools'\ntools.test()\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
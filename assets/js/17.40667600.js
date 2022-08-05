(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{289:function(s,e,r){"use strict";r.r(e);var a=r(13),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis命令"}},[s._v("#")]),s._v(" Redis命令")]),s._v(" "),e("p",[s._v("redis的启动方式\n1.直接启动\n进入redis根目录，执行命令:\n#加上‘&’号使redis以后台程序方式运行")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(".`"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/redis-server"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" `"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),e("p",[s._v("2.通过指定配置文件启动\n可以为redis服务启动指定配置文件，例如配置为/etc/redis/6379.conf\n进入redis根目录，输入命令：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v(".`"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/redis-server"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/etc/redis/6379"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("`.conf\n")])])]),e("p",[s._v("#如果更改了端口，使用"),e("code",[s._v("redis-cli")]),s._v("客户端连接时，也需要指定端口，例如：")]),s._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("redis-"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cli")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p 6380\n")])])]),e("p",[e("strong",[s._v("#检查后台进程是否正在运行")])]),s._v(" "),e("p",[s._v("ps -ef |grep redis")]),s._v(" "),e("p",[s._v("ps aux | grep redis")]),s._v(" "),e("p",[e("strong",[s._v("#检测6379端口是否在监听")])]),s._v(" "),e("p",[s._v("netstat -lntp | grep 6379")]),s._v(" "),e("p",[e("strong",[s._v("#使用配置文件启动redis服务")])]),s._v(" "),e("p",[s._v("./redis-server /etc/redis/redis.conf")]),s._v(" "),e("p",[e("strong",[s._v("#使用"),e("code",[s._v("redis-cli")]),s._v("客户端检测连接是否正常")])]),s._v(" "),e("p",[s._v("./redis-cli -h 127.0.0.1 -p 6379  （登陆客户端）")]),s._v(" "),e("p",[s._v("auth (password) （密码验证）\ncluster info （集群状态）")]),s._v(" "),e("p",[e("strong",[s._v("#查看redis密码")])]),s._v(" "),e("p",[s._v("可查看 redis 安装根目录下的配置文件：redis-conf 中 requirepass 后面的内容。")]),s._v(" "),e("p",[s._v("启动redis：  /etc/init.d/redis start")]),s._v(" "),e("p",[s._v("关闭redis：  redis-cli shutdown")])])}),[],!1,null,null,null);e.default=t.exports}}]);
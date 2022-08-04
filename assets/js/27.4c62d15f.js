(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{298:function(a,t,_){"use strict";_.r(t);var v=_(13),r=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux下运行springboot项目jar包-并且输出日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux下运行springboot项目jar包-并且输出日志"}},[a._v("#")]),a._v(" Linux下运行SpringBoot项目jar包，并且输出日志")]),a._v(" "),t("p",[a._v("在jar包所在目录下，正常启动一个名为***.jar包标准命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[root@localhost data]# nohup java -jar ***.jar >nohup.log 2>&1 &\n")])])]),t("p",[a._v("启动之后，会在jar所在目录生成一个nuhup.log日志文件，记录控制台的日志输出。")]),a._v(" "),t("p",[a._v("其实就是两个要点：输出什么 和 输出到哪 。\n他们以符号“>”进行划分，符号左边是输出什么，符号右边是输出到哪。")]),a._v(" "),t("h3",{attrs:{id:"_1-输出什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-输出什么"}},[a._v("#")]),a._v(" 1.输出什么")]),a._v(" "),t("p",[a._v("输出分为标准输出和错误输出，标准输出就是全输出，输出控制台信息；错误输出只是输出错误日志信息。")]),a._v(" "),t("blockquote",[t("p",[a._v(">   符号左边没有1和2，啥数字也不写只有一个右箭头，默认标准输出。")]),a._v(" "),t("p",[a._v("1>  符号左边是1，标准输出。")]),a._v(" "),t("p",[a._v("2>  符号左边是2，错误输出。")])]),a._v(" "),t("p",[a._v("因此上面我们执行的 ***.jar >nohup.log 2>&1命令，可以拆解成 > nohup.log 和 2> &1两个输出，只看符号“>”左边输出部分，分别代表默认标准输出到一个地方，然后错误日志输出到另一个地方，咱们后面再讲输出到什么地方。")]),a._v(" "),t("h3",{attrs:{id:"_2-输出到哪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-输出到哪"}},[a._v("#")]),a._v(" 2.输出到哪")]),a._v(" "),t("p",[a._v("输出到哪，分为输出到指定路径日志文件和重定向位置。")]),a._v(" "),t("p",[a._v("指定路径文件好理解，就是指定一个地址而已，如下：")]),a._v(" "),t("p",[a._v("> /data/work/log.log")]),a._v(" "),t("p",[a._v("这样便是指定输出到路径/data/work/log.log文件。")]),a._v(" "),t("p",[a._v("Linux上有一个特例路径/dev/null ，这路径就好像永久删除的回收站，当我们不需要输出任何信息时，就可以将输出指向/dev/null，那就不会有任何输出文件。")]),a._v(" "),t("p",[a._v("至于重定向，就是将文件重定向到一个地址，如下：")]),a._v(" "),t("p",[a._v("> &1  重定向到标准输出的地址，啥意思，就是输出到已指定的标准输出的地址。")]),a._v(" "),t("p",[a._v("> &2  重定向到错误输出的地址，就是输出到已指定的错误输出的地址。")]),a._v(" "),t("p",[a._v("比如>nohup.log 2>&1 ，意思是前面默认标准输出到了nohup.log日志下，后面错误输出也指向标准输出的地址，也即nohup.log日志下。")]),a._v(" "),t("h3",{attrs:{id:"_3-执行输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行输出"}},[a._v("#")]),a._v(" 3.执行输出 &")]),a._v(" "),t("p",[a._v("最后加一个&符号收尾。")]),a._v(" "),t("p",[a._v("举例再解释：")]),a._v(" "),t("blockquote",[t("p",[a._v("（1）nohup java -jar ***.jar >/data/log.log 2>/data/err.log &")]),a._v(" "),t("p",[a._v("解释：标准日志输出到/data/log.log文件，错误日志输出到/data/err.log文件。")]),a._v(" "),t("p",[a._v("（2）nohup java -jar ***.jar >/data/log.log 2>&1 &")]),a._v(" "),t("p",[a._v("解释：标准日志输出到/data/log.log文件，错误日志重定向也输出到/data/log.log文件。")]),a._v(" "),t("p",[a._v("（3）nohup java -jar ***.jar >/dev/null 2>/data/err.log &")]),a._v(" "),t("p",[a._v("解释：标准日志输出到/dev/null，也就是不输出标准日志，错误日志输出到/data/err.log文件。")]),a._v(" "),t("p",[a._v("一般采用上面（3）只输出错误日志就可以了，有需要的按照（1）进行输出。")])]),a._v(" "),t("h3",{attrs:{id:"_4-进程管理基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-进程管理基础命令"}},[a._v("#")]),a._v(" 4.进程管理基础命令")]),a._v(" "),t("blockquote",[t("p",[a._v("ps -l  列出与本次登录有关的进程信息；\nps -aux  查询内存中进程信息；\nps -aux | grep ***  查询***进程的详细信息；\ntop  查看内存中进程的动态信息；\nkill -9 pid  杀死进程。")])]),a._v(" "),t("h3",{attrs:{id:"_5-实时查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-实时查看日志"}},[a._v("#")]),a._v(" 5.实时查看日志")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tail -f catalina.out\n这样运行时就可以实时查看运行日志了\nCtrl+c 是退出tail命令。\n")])])]),t("p",[a._v("参考文章：https://blog.csdn.net/qq_33656559/article/details/106549481")])])}),[],!1,null,null,null);t.default=r.exports}}]);
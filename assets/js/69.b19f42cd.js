(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{340:function(e,t,s){"use strict";s.r(t);var a=s(13),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"window-安装-rocketmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-安装-rocketmq"}},[e._v("#")]),e._v(" window 安装 rocketmq")]),e._v(" "),t("p",[e._v("订阅专栏")]),e._v(" "),t("p",[e._v("转载：https://www.cnblogs.com/fanshuyao/p/14760546.html")]),e._v(" "),t("p",[t("strong",[e._v("一，下载")])]),e._v(" "),t("p",[e._v("地址：http://rocketmq.apache.org/release_notes/release-notes-4.3.0/")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210820165655445.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hhbmp1bjA2MTI=,size_16,color_FFFFFF,t_70",alt:"img"}})]),e._v(" "),t("p",[t("strong",[e._v("二，系统变量")])]),e._v(" "),t("p",[t("strong",[e._v("系统变量")])]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("ROCKETMQ_HOME\n\n\n\nC:\\rocketmq-all-4.3.0-bin-release\n\n\n\n \n\n\n\nNAMESRV_ADDR\n\n\n\nlocalhost:9876\n")])])]),t("p",[e._v("PATH属性增加：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("%ROCKETMQ_HOME%\\\\bin\n")])])]),t("p",[e._v("（C:[rocketmq](https://so.csdn.net/so/search?q=rocketmq&spm=1001.2101.3001.7020)-all-4.3.0-bin-release）"),t("strong",[e._v("路径千万不能有空格！")])]),e._v(" "),t("p",[t("strong",[e._v("三，启动")])]),e._v(" "),t("p",[t("strong",[e._v("3、RocketMQ修改日志文件目录")]),e._v("\n（这步可以省略，默认是在用户的目录是，但为了方便，修改日志存放目录）：\n进入目录：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("D:\\\\0soft\\\\rocketmq-all-4.8.0\\\\conf\n")])])]),t("p",[e._v("修改3个xml文件（请先备份）：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("logback_namesrv.xml\n\n\n\nlogback_broker.xml\n\n\n\nlogback_tools.xml\n")])])]),t("p",[e._v("将所有${user.home}/logs，替换成：D:/0soft/rocketmq-all-4.8.0/logs，具体目录自己定义。")]),e._v(" "),t("p",[e._v("最后生成的日志文件在下面的目录：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("D:\\\\0soft\\\\rocketmq-all-4.8.0\\\\logs\\\\rocketmqlogs\n")])])]),t("p",[t("strong",[e._v("4、RocketMQ修改内存参数，默认的内存太大（记得先备份相应的文件）")]),e._v("\n进入目录：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("D:\\\\0soft\\\\rocketmq-all-4.8.0\\\\bin\n")])])]),t("p",[t("strong",[e._v("修改：runserver.cmd（记得先备份文件）：")]),e._v("\n将：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v('set "JAVA_OPT=%JAVA_OPT% -server -Xms2g -Xmx2g -Xmn1g -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"\n')])])]),t("p",[e._v("修改成：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v('set "JAVA_OPT=%JAVA_OPT% -server -Xms128m -Xmx256m -Xmn64m -XX:MetaspaceSize=32m -XX:MaxMetaspaceSize=64m"\n')])])]),t("p",[t("strong",[e._v("修改：runbroker.cmd（记得先备份文件）：")]),e._v("\n将：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v('set "JAVA_OPT=%JAVA_OPT% -server -Xms2g -Xmx2g -Xmn1g"\n\n\n\nset "JAVA_OPT=%JAVA_OPT% -XX:MaxDirectMemorySize=15g"\n')])])]),t("p",[e._v("修改成：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v('set "JAVA_OPT=%JAVA_OPT% -server -Xms128m -Xmx128m -Xmn64m"\n\n\n\nset "JAVA_OPT=%JAVA_OPT% -XX:MaxDirectMemorySize=1g"\n')])])]),t("p",[t("strong",[e._v("5、RocketMQ启动Name Server：")]),e._v("\n打开一个新的cmd命令窗口，并进入到bin目录：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("D:\\\\0soft\\\\rocketmq-all-4.8.0\\\\bin>mqnamesrv\n")])])]),t("p",[e._v("或者（前提是配置Path路径）：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("mqnamesrv\n")])])]),t("p",[e._v("启动结果：")]),e._v(" "),t("p",[e._v("D:\\0soft\\rocketmq-all-4.8.0\\bin>mqnamesrv\nJava HotSpot(TM) 64-Bit Server VM warning: Using the DefNew young collector with the CMS collector is deprecated and will likely be removed in a future release\nJava HotSpot(TM) 64-Bit Server VM warning: UseCMSCompactAtFullCollection is deprecated and will likely be removed in a future release.\nThe Name Server boot success. serializeType=JSON")]),e._v(" "),t("p",[t("strong",[e._v("6、RocketMQ启动：Broker")]),e._v("\n打开一个新的cmd命令窗口，并进入到bin目录：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("D:\\\\0soft\\\\rocketmq-all-4.8.0\\\\bin>mqbroker.cmd -n localhost:9876 autoCreateTopicEnable=true\n")])])]),t("p",[e._v("或者（前提是配置Path路径）：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("mqbroker.cmd -n localhost:9876 autoCreateTopicEnable=true\n")])])]),t("p",[e._v("启动结果：")]),e._v(" "),t("p",[e._v("D:\\0soft\\rocketmq-all-4.8.0\\bin>mqbroker.cmd -n localhost:9876 autoCreateTopicEnable=true\nThe broker[XXZX-liqiongy-10, 168.168.2.120:10911] boot success. serializeType=JSON and name server is localhost:9876")]),e._v(" "),t("p",[t("strong",[e._v("7、RocketMQ测试发送消息：")])]),e._v(" "),t("p",[e._v("打开一个新的命令窗口，输入下面的命令：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("tools.cmd org.apache.rocketmq.example.quickstart.Producer\n")])])]),t("p",[e._v("运行结果：\nC:\\Users\\liqiongy>tools.cmd org."),t("a",{attrs:{href:"https://so.csdn.net/so/search?q=apache&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[e._v("apache"),t("OutboundLink")],1),e._v(".rocketmq.example.quickstart.Producer\n14:52:04.556 [main] DEBUG i.n.u.i.l.InternalLoggerFactory - Using SLF4J as the default logging framework\nRocketMQLog:WARN No appenders could be found for logger (io.netty.util.internal.PlatformDependent0).\nRocketMQLog:WARN Please initialize the logger system properly.")]),e._v(" "),t("p",[e._v("SendResult [sendStatus=SEND_OK, msgId=7F00000126B80D71636136B05B2003E6, offsetMsgId=A8A8027800002A9F00000000000316F4, messageQueue=MessageQueue [topic=TopicTest, brokerName=XXZX-liqiongy-10, queueId=3], queueOffset=249]\nSendResult [sendStatus=SEND_OK, msgId=7F00000126B80D71636136B05B2103E7, offsetMsgId=A8A8027800002A9F00000000000317BF, messageQueue=MessageQueue [topic=TopicTest, brokerName=XXZX-liqiongy-10, queueId=0], queueOffset=249]")]),e._v(" "),t("p",[e._v("14:52:07.337 [NettyClientSelector_1] INFO RocketmqRemoting - closeChannel: close the connection to remote address[168.168.2.120:10911] result: true\n14:52:07.338 [NettyClientSelector_1] INFO RocketmqRemoting - closeChannel: close the connection to remote address[127.0.0.1:9876] result: true")]),e._v(" "),t("p",[t("strong",[e._v("8、RocketMQ测试接收消息：")])]),e._v(" "),t("p",[e._v("打开一个新的命令窗口，输入下面的命令：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("tools.cmd org.apache.rocketmq.example.quickstart.Consumer\n")])])]),t("p",[e._v("运行结果：\nC:\\Users\\liqiongy>tools.cmd org.apache.rocketmq.example.quickstart.Consumer\n14:54:08.623 [main] DEBUG i.n.u.i.l.InternalLoggerFactory - Using SLF4J as the default logging framework\nConsumer Started.")]),e._v(" "),t("p",[e._v("ConsumeMessageThread_3 Receive New Messages: [MessageExt [brokerName=XXZX-liqiongy-10, queueId=3, storeSize=201, queueOffset=1, sysFlag=0, bornTimestamp=1620715925363, bornHost=/168.168.2.120:60949, storeTimestamp=1620715925364, storeHost=/168.168.2.120:10911, msgId=A8A8027800002A9F00000000000004B6, commitLogOffset=1206, bodyCRC=1307562618, reconsumeTimes=0, preparedTransactionOffset=0, toString()=Message{topic='TopicTest', flag=0, properties={MIN_OFFSET=0, MAX_OFFSET=250, CONSUME_START_TIME=1620716049251, UNIQ_KEY=7F00000126B80D71636136B053730006, CLUSTER=DefaultCluster, WAIT=true, TAGS=TagA}, body=[72, 101, 108, 108, 111, 32, 82, 111, 99, 107, 101, 116, 77, 81, 32, 54], transactionId='null'}]]\nConsumeMessageThread_20 Receive New Messages: [MessageExt [brokerName=XXZX-liqiongy-10, queueId=1, storeSize=201, queueOffset=2, sysFlag=0, bornTimestamp=1620715925368, bornHost=/168.168.2.120:60949, storeTimestamp=1620715925369, storeHost=/168.168.2.120:10911, msgId=A8A8027800002A9F0000000000000648, commitLogOffset=1608, bodyCRC=710410109, reconsumeTimes=0, preparedTransactionOffset=0, toString()=Message{topic='TopicTest', flag=0, properties={MIN_OFFSET=0, MAX_OFFSET=250, CONSUME_START_TIME=1620716049253, UNIQ_KEY=7F00000126B80D71636136B053780008, CLUSTER=DefaultCluster, WAIT=true, TAGS=TagA}, body=[72, 101, 108, 108, 111, 32, 82, 111, 99, 107, 101, 116, 77, 81, 32, 56], transactionId='null'}]]")]),e._v(" "),t("p",[t("strong",[e._v("9、RocketMQ关闭Servers：")])]),e._v(" "),t("p",[e._v("开发环境，可以直接关闭cmd命令窗口\n但生产环境不要这样做，而是要打开一个新的命令窗口，分别执行下面的命令：\n先关闭broker，再关闭name server")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("mqshutdown.cmd broker\n\n\n\nmqshutdown.cmd namesrv\n")])])]),t("p",[e._v("官方文档见：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("https://rocketmq.apache.org/docs/quick-start/\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
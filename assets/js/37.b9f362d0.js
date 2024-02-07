(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{308:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sql调优工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql调优工具"}},[t._v("#")]),t._v(" SQL调优工具")]),t._v(" "),s("h6",{attrs:{id:"查看估计的执行计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看估计的执行计划"}},[t._v("#")]),t._v(" 查看估计的执行计划：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PLAN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbms_xplan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'advanced PROJECTION allstats last'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h6",{attrs:{id:"查看实际执行计划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看实际执行计划"}},[t._v("#")]),t._v(" 查看实际执行计划：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" statistics_level"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("执行"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("（在"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sql")]),t._v("上加hint注释："),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* hello laonan*/")]),t._v("）\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("再获取sql_id跟child_number\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" sql_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" child_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sql_text "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" v$"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sql")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" sql_text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%hello laonan%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("在查\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbms_xplan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display_cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gnjxzzg6n8nfg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'advanced PROJECTION allstats last'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h6",{attrs:{id:"执行计划查看-autotrace工具的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行计划查看-autotrace工具的使用"}},[t._v("#")]),t._v(" 执行计划查看，autotrace工具的使用")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("啥是autotrace，翻译自动跟踪，跟踪什么额？ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v("的执行过程\n  我们老是讲ORACLE体系结构里面，共享池有个组件库高速缓存，存放"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v("语句执行计划\n  什么硬解析，再一次就成软解析，什么物理读，逻辑读，谁知道呢！\n  此次通过autotarce可以直观查看：\n命令：\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Show")]),t._v(" autotrace  查看参数状态\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" autotrace "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v("  打开\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" autotrace traceonly 查看自动追踪显示过程"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("结果\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" autotrace traceonly "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explain")]),t._v("  显示过程 \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" autotrace traceonly "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("statistics")]),t._v(" 显示结果\n实验前准备：为了保证测试环境：清空缓冲区以及缓存区（Buffer cache 和 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" pool 是sga中最重要最复杂的部分。）\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Alter")]),t._v("  system flush shared_pool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--将使library cache 和 data dictionary cache 以前保存的 sql 执行计划全部清空，但不会清空共享sql区或者共享pl/sql区里面缓存的最近被执行的条目.如果Shared Pool很大，并且系统非常繁忙，刷新Shared Pool可能会导致系统挂起，对于类似系统尽量在系统空闲时进行")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Alter")]),t._v("  system flush buffer_cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Flush BUFFER_CACHE子句允许您清除系统全局区域(SGA)中缓冲区缓存中的所有数据，包括保留、回收和默认缓冲池。")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" SYSTEM FLUSH "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GLOBAL")]),t._v(" CONTEXT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 通过连接池进行通信，对于连接池的这些信息被保留在SGA中，这条语句便是把这些连接信息清空。")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("序号")]),t._v(" "),s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("SET AUTOTRACE OFF")]),t._v(" "),s("td",[t._v("此为默认值，即关闭Autotrace")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("SET AUTOTRACE ON EXPLAIN")]),t._v(" "),s("td",[t._v("只显示执行计划")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("SET AUTOTRACE ON STATISTICS")]),t._v(" "),s("td",[t._v("只显示执行的统计信息")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("SET AUTOTRACE ON")]),t._v(" "),s("td",[t._v("包含2,3两项内容")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("SET AUTOTRACE TRACEONLY")]),t._v(" "),s("td",[t._v("与ON相似，但不显示语句的执行结果")])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_34259232/article/details/93460861",target:"_blank",rel:"noopener noreferrer"}},[t._v("执行计划查看，autotrace工具的使用"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/shaochenshuo/article/details/48679843",target:"_blank",rel:"noopener noreferrer"}},[t._v("set autotrace报错Check PLUSTRACE role is enabled"),s("OutboundLink")],1)]),t._v(" "),s("h6",{attrs:{id:"oracle执行计划中各字段的描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oracle执行计划中各字段的描述"}},[t._v("#")]),t._v(" Oracle执行计划中各字段的描述")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1、基本字段(总是可用的)\nId 执行计划中每一个操作(行)的标识符。如果数字前面带有星号，意味着将在随后提供这行包含的谓词信息\nOperation 对应执行的操作。也叫行源操作\nName 操作的对象\n\n2、查询优化器评估信息\nRows(E-Rows) 预估操作返回的记录条数\nBytes(E-Bytes) 预估操作返回的记录字节数\nTempSpc 预估操作使用临时表空间的大小\nCost(%CPU) 预估操作所需的开销。在括号中列出了CPU开销的百分比。注意这些值是通过执行计划计算出来的。换句话说，父操作的开销包含子操作的开销\nTime 预估执行操作所需要的时间(HH:MM:SS)\n\n3、分区\nPstart 访问的第一个分区。如果解析时不知道是哪个分区就设为KEY,KEY(I),KEY(MC),KEY(OR),KEY(SQ)\nPstop 访问的最后一个分区。如果解析时不知道是哪个分区就设为KEY,KEY(I),KEY(MC),KEY(OR),KEY(SQ)\n\n4、并行和分布式处理\nInst 在分布式操作中，指操作使用的数据库链的名字\nTQ 在并行操作中，用于从属线程间通信的表队列\nIN-OUT 并行或分布式操作间的关系\nPQ Distrib 在并行操作中，生产者为发送数据给消费者进行的分配\n\n5、运行时统计*\nStarts 指定操作执行的次数\nA-Rows 操作返回的真实记录数\nA-Time 操作执行的真实时间(HH:MM:SS.FF)\n\n6、I/O 统计*\nBuffers 执行期间进行的逻辑读操作数量\nReads 执行期间进行的物理读操作数量\nWrites 执行期间进行的物理写操作数量\n\n7、内存使用统计\nOMem 最优执行所需内存的预估值\n1Mem 一次通过(one-pass)执行所需内存的预估值\n0/1/M 最优/一次通过/多次通过(multipass)模式操作执行的次数\nUsed-Mem 最后一次执行时操作使用的内存量\nUsed-Tmp 最后一次执行时操作使用的临时空间大小。这个字段必须扩大1024倍才能和其他衡量内存的字段一致(比如，32k意味着32MB)\nMax-Tmp 操作使用的最大临时空间大小。这个字段必须扩大1024倍才能和其他衡量内存的字段一致(比如，32k意味着32MB)\n")])])]),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/JiekeXu/article/details/125942428",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle 执行计划查看方法汇总及优劣比较"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_42156231/article/details/124920365",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何查看执行计划"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blogs.oracle.com/database4cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("oracle技术支持"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/xiaobinhxb/article/details/126317295",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle表连接优化思路"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.51cto.com/u_14286115/5194276",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于CBO的SQL优化和Oracle实例优化"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);
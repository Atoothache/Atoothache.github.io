(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{335:function(e,a,t){"use strict";t.r(a);var s=t(13),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("flyway 配置文件：")])]),e._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flyway.url=jdbc:oracle:thin:@192.168.133.13:1521:orcl\n\nflyway.driver=oracle.jdbc.driver.OracleDriver\n\nflyway.user=WK_NAN\n\nflyway.password=dragon123\n\nflyway.baselineOnMigrate: true\nflyway.placeholderReplacement: false\n")])])]),a("p",[a("strong",[e._v("flyway最基本的几个命令。")])]),e._v(" "),a("p",[e._v("Migrate：应用所有的迁移到最新版本，它会在你的DB中新建个表schema_version来存放每次升级的版本信息。")]),e._v(" "),a("p",[e._v("Clean：clean all objects")]),e._v(" "),a("p",[e._v("Info：打印所有的迁移的信息以及状态。")]),e._v(" "),a("p",[e._v("Validate：迁移之前进行验证。")]),e._v(" "),a("p",[e._v("Baseline：初始化schema_version表，并插入一条原始verion=1。")]),e._v(" "),a("p",[e._v("Repair：它主要做了两件事，移除所有失败的迁移（升级），重置校验和。")]),e._v(" "),a("p",[a("strong",[e._v("【用 exp 数 据 导 出】：")])]),e._v(" "),a("p",[e._v("**\n1 将"),a("a",{attrs:{href:"http://lib.csdn.net/base/mysql",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据库"),a("OutboundLink")],1),e._v("TEST完全导出,用户名system 密码manager 导出到D:\\daochu.dmp中\nexp** "),a("a",{attrs:{href:"mailto:system/manager@TEST"}},[a("strong",[e._v("system/manager@TEST")])]),e._v(" "),a("strong",[e._v("file=d:\\daochu.dmp full=y")])]),e._v(" "),a("p",[e._v("2 将数据库中system用户与sys用户的表导出\nexp "),a("a",{attrs:{href:"mailto:system/manager@TEST"}},[e._v("system/manager@TEST")]),e._v(" file=d:\\daochu.dmp owner=(system,sys)\n3 将数据库中的表table1 、table2导出\nexp "),a("a",{attrs:{href:"mailto:system/manager@TEST"}},[e._v("system/manager@TEST")]),e._v(" file=d:\\daochu.dmp tables=(table1,table2)")]),e._v(" "),a("p",[a("strong",[e._v("【用 imp 数 据 导 入】：")]),e._v("\n1 将D:\\daochu.dmp 中的数据导入 TEST数据库中。\nimp "),a("a",{attrs:{href:"mailto:system/manager@TEST"}},[e._v("system/manager@TEST")]),e._v("  file=d:\\daochu.dmp\n上面可能有点问题，因为有的表已经存在，然后它就报错，对该表就不进行导入。\n在后面加上 ignore=y 就可以了。\n2 将d:\\daochu.dmp中的表table1 导入\nimp "),a("a",{attrs:{href:"mailto:system/manager@TEST"}},[e._v("system/manager@TEST")]),e._v("  file=d:\\daochu.dmp  tables=(table1)")])])}),[],!1,null,null,null);a.default=n.exports}}]);
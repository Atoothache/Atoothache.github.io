(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{293:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tomcat是一个servlet容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat是一个servlet容器"}},[t._v("#")]),t._v(" Tomcat是一个Servlet容器？")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/nicerblog/p/11856435.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Tomcat是一个Servlet容器”，这句话对于2019年的程序员应该是耳熟能详的。")]),t._v(" "),e("p",[t._v("单纯的思考一下这句话，我们可以抽象出来这么一段代码：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tomcat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Servlet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("如果Tomcat就长这样，那么它肯定是不能工作的，所以，Tomcat其实是这样：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tomcat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connector")]),t._v(" connector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接处理器")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Servlet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("我们这里先不考虑Connector的底层实现，我们只需知道Connector是负责处理请求的。")]),t._v(" "),e("p",[t._v("我们还是来想想"),e("strong",[t._v("容器")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),e("p",[t._v("顾名思义，Servlet容器就是用来装载存储Servlet的。")]),t._v(" "),e("p",[t._v("一个Servlet表示一个运行在服务端的程序（servlet = server + applet）。用户想要使用这种程序，需要向该程序发送请求以及获取该程序的响应，也就是Servlet规范中的ServletRequest、ServletResponse。")]),t._v(" "),e("p",[t._v("所以Servlet其实就是Java中用来处理请求的一种规范，所以我们的项目中通常都会有一个或多个Servlet，由它来负责接收请求，或者将请求转交给其他业务逻辑。")]),t._v(" "),e("p",[t._v("所以我们的Spring MVC、Spring Boot都存在一个DispatcherServlet（类似功能的一个Servlet，负责接收请求）。")]),t._v(" "),e("p",[t._v("所以，通常Servlet是属于一个应用程序（项目）的，换句话说，我们的一个应用包含多个Servlet，所以这是"),e("strong",[t._v("第二层Servlet容器--应用，也就是Tomcat中的Context（应用上下文）")]),t._v("。那么第一层Servlet容器呢？")]),t._v(" "),e("h2",{attrs:{id:"wrapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrapper"}},[t._v("#")]),t._v(" Wrapper")]),t._v(" "),e("p",[t._v("Wrapper就是第一层Servlet容器，Wrapper表示Servlet的包装者，所以它是最接近Servlet的，那么为什么需要Wrapper呢？")]),t._v(" "),e("p",[t._v("我们通常认为Wrapper是这样的：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wrapper")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Servlet")]),t._v(" servlet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("一个Wrapper对应一个Servlet，这么来想的话，确实不需要Wrapper，但是我们还要考虑一些其他的情况：")]),t._v(" "),e("ul",[e("li",[t._v("比如Filter，一个Filter是可以对应一个Servlet的。")]),t._v(" "),e("li",[t._v("比如ServletPool，通常的Servlet是所有请求线程公用的，但是在Servlet中支持每一个请求线程单独使用独立的Servlet实例。")])]),t._v(" "),e("p",[t._v("所以在Wrapper中，不仅仅只包括一个Servlet，还包括过滤器和Servlet池，所以"),e("strong",[t._v("Wrapper是第一层Servlet容器")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),e("p",[t._v("在我们现实生活中，一个应用都是部署在一个主机上的，所以，一个主机可以包含多个应用，一个应用包含多个Servlet，所以，"),e("strong",[t._v("Host是第三层容器。在Tomcat中，Host表示虚拟主机，Tomcat在处理请求时，可以根据请求的域名进入到相应的Host中进行处理。")])]),t._v(" "),e("h2",{attrs:{id:"engine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[t._v("#")]),t._v(" Engine")]),t._v(" "),e("p",[t._v("Host管理Context，Context管理Wrapper，Wrapper管理Servlet，而Engine就是用来管理Host的。"),e("strong",[t._v("所以Engine是第四层容器。")])]),t._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),e("p",[t._v("肯定有人有疑问，那么Engine之上不需要容器了吗？不需要了？举个例子：")]),t._v(" "),e("p",[t._v("我们的钱（Servlet）要放在钱包(Wrapper)里，钱包要放在书包(Context)里，书包要放在行李箱(Host)里，行李箱要放在飞机(Engine)上。")]),t._v(" "),e("p",[t._v("所以，如果你问我“Engine放哪？”就相当于问我“飞机放哪？”")]),t._v(" "),e("p",[t._v("答案是"),e("strong",[t._v("不再需要更高层次的容器了，因为没有必要了")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("在Tomcat中，容器分为：")]),t._v(" "),e("ol",[e("li",[t._v("Wrapper")]),t._v(" "),e("li",[t._v("Context")]),t._v(" "),e("li",[t._v("Host")]),t._v(" "),e("li",[t._v("Engine")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
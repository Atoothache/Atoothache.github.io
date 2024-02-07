(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{363:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloud"}},[t._v("#")]),t._v(" Cloud")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/forezp/article/details/70148833",target:"_blank",rel:"noopener noreferrer"}},[t._v("史上最简单的 SpringCloud 教程 | 终章"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1.当使用ribbon、Feign发送请求，或者是gateway做路由映射都可以使用直接的url，但是一般是使用服务名，为什么？原因：一是服务名可以做负载均衡，二是使用url如果服务换了就要改代码或者改配置文件")]),t._v(" "),a("p",[t._v("六、网关的跨域问题\n6.1 跨域的概念和原理\n跨域：请求位置和被请求位置不同源就会发生跨域。")]),t._v(" "),a("p",[t._v("这里的不同源包括两个点：")]),t._v(" "),a("p",[t._v("域名不同：www.baidu.com 和 www.taobao.com。（IP不同也是相同道理）\n端口不同：127.0.0.1:8080和127.0.0.1:8081。\n而浏览器又会禁止请求的发起者与服务端发生跨域AJAX请求。")]),t._v(" "),a("p",[t._v("如果发生了跨域请求，服务器端是能够正常响应的，但是响应的结果会被浏览器拦截。")]),t._v(" "),a("p",[t._v("6.2 跨域常见解决方案\n使用CORS方式。")]),t._v(" "),a("p",[t._v('CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。')]),t._v(" "),a("p",[t._v("它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。")]),t._v(" "),a("p",[t._v("6.3 gateway中如何解决跨域问题\n方式一：配置application.yml文件：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("globalcors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局的跨域配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("add-to-simple-url-handler-mapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决options请求被拦截问题")]),t._v("\n        \t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# options请求 就是一种询问服务器是否浏览器可以跨域的请求")]),t._v("\n        \t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果每次跨域都有询问服务器是否浏览器可以跨域对性能也是损耗")]),t._v("\n        \t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以配置本次跨域检测的有效期maxAge")]),t._v("\n        \t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在maxAge设置的时间范围内，不去询问，统统允许跨域")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("corsConfigurations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'[/**]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowedOrigins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许哪些网站的跨域请求 ")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8090"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowedMethods")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许的跨域ajax的请求方式")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DELETE"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPTIONS"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowedHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许在请求中携带的头信息")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许在请求中携带cookie")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360000")]),t._v(" \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本次跨域检测的有效期(单位毫秒)")]),t._v("\n            \t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有效期内，跨域请求不会一直发option请求去增大服务器压力")]),t._v("\n")])])]),a("p",[t._v("一：")]),t._v(" "),a("p",[t._v("@EnableEurekaServer：表明自己是服务注册中心")]),t._v(" "),a("p",[t._v("@EnableEurekaClient：表明自己是服务注册方（eureka）")]),t._v(" "),a("p",[t._v("@EnableDiscoveryClient：表明自己是服务注册方（ribbon）")]),t._v(" "),a("p",[t._v("@LoadBalanced：表明这个restRemplate开启负载均衡的功能")]),t._v(" "),a("p",[t._v("@EnableFeignClients：开启Feign的功能")]),t._v(" "),a("p",[t._v('@FeignClient(value = "service-hi")：加接口上，来指定调用哪个服务')]),t._v(" "),a("p",[t._v("@EnableHystrix：开启Hystrix断路器")]),t._v(" "),a("p",[t._v('@HystrixCommand(fallbackMethod = "hiError") ： 加在方法上加上，fallbackMethod 表明服务熔断降级的处理方式:')]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HystrixCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fallbackMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hiError"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hiService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" restTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getForObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://SERVICE-HI/hi?name="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当 service-hi 工程不可用的时候，service-ribbon调用 service-hi的API接口时，会执行快速失败，直接返回一组字符串，而不是等待响应超时，这很好的控制了容器的线程阻塞。")]),t._v("\n")])])]),a("p",[t._v('@FeignClient(value = "service-hi",fallback = SchedualServiceHiHystric.class)')]),t._v(" "),a("p",[t._v("Feign是自带断路器的，在D版本的Spring Cloud之后，它没有默认打开。需要在配置文件中配置打开它，在配置文件加以下代码：")]),t._v(" "),a("blockquote",[a("p",[t._v("feign.hystrix.enabled=true")])]),t._v(" "),a("p",[t._v("@EnableZuulProxy：开启zuul的功能")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zuul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api-a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("a/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ribbon\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api-b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("b/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("feign\n")])])]),a("p",[t._v("二：")]),t._v(" "),a("p",[t._v("@EnableDiscoveryClient（nacos）")]),t._v(" "),a("p",[t._v("安装nacos")]),t._v(" "),a("p",[t._v("进入到Nacos文件夹，进行编译")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mvn -Prelease-nacos "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-Dmaven.test.skip=true'")]),t._v(" clean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U  \n")])])]),a("h4",{attrs:{id:"编译完成在-distribution-target-目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译完成在-distribution-target-目录下"}},[t._v("#")]),t._v(" 编译完成在 distribution -> target 目录下")]),t._v(" "),a("h5",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[t._v("#")]),t._v(" 解压")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Linux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mac")]),t._v("启动方式：\n启动命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("standalone代表着单机模式运行，非集群模式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\nsh startup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m standalone\n\n如果您使用的是ubuntu系统，或者运行脚本报错提示"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("符号找不到，可尝试如下运行：\nbash startup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m standalone\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Windows")]),t._v("启动命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("standalone代表着单机模式运行，非集群模式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\nstartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m standalone\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
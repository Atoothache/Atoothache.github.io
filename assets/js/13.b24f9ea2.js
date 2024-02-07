(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{284:function(s,a,t){"use strict";t.r(a);var v=t(13),n=Object(v.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"反射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[s._v("#")]),s._v(" 反射")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("RTTI，编译器在编译时打开和检查.class文件")])]),s._v(" "),a("li",[a("p",[s._v("反射，运行时打开和检查.class文件")]),s._v(" "),a("h4",{attrs:{id:"对以上的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对以上的理解"}},[s._v("#")]),s._v(" "),a("strong",[s._v("对以上的理解：")])]),s._v(" "),a("p",[s._v("我们先明白几个概念：")]),s._v(" "),a("p",[a("strong",[s._v("动态加载")])]),s._v(" "),a("p",[s._v("所有的类都是在对其第一次使用时，动态加载到 JVM，因此Java 程序在他开始运行之前并非被完全加载，其各个部分是在需要时才加载的。")]),s._v(" "),a("p",[a("strong",[s._v("Class 类概念")])]),s._v(" "),a("p",[s._v("Class 也是一个 Java 类，保存的是与之对应 Java 类的 meta信息（元信息），用来描述这个类的结构，比如描述一个类有哪些成员，有哪些方法等，一般在反射中使用。")]),s._v(" "),a("p",[s._v("**详细解释：**Java 源程序（.java 文件）在经过 Java 编译器编译之后就被转换成 Java 字节代码（.class 文件）。类加载器负责读取 Java 字节代码，并转换成 java.lang.Class类的一个实例（Class 对象）。也就是说，在 Java 中，每个 java 类都有一个相应的 Class 对象，用于表示这个 java 类的类型信息。")]),s._v(" "),a("p",[a("strong",[s._v("类加载概念")])]),s._v(" "),a("p",[s._v("当使用一个类的时候（比如 new 一个类的实例），会检查此类是否被加载到内存，如果没有，则会执行加载操作。")]),s._v(" "),a("p",[s._v("读取类对应的 class 文件数据，解析此数据，构造一个此类对应的 Class 类的实例。此时JVM就可以使用该类了，比如实例化此类，或者调用此类的静态方法。")]),s._v(" "),a("p",[s._v("Java 也提供了手动加载类的接口，class.forName()方法就是其中之一。（说来说去，其实就是生成这个类的 Class）")]),s._v(" "),a("p",[a("strong",[s._v("类加载器的概念")])]),s._v(" "),a("p",[s._v("顾名思义，类加载器（class loader）用来加载 Java 类到 Java 虚拟机中。一般来说，Java 虚拟机使用 Java 类的方式如下：Java 源程序（.java 文件）在经过 Java 编译器编译之后就被转换成 Java 字节代码（.class 文件）。类加载器负责读取 Java 字节代码，并转换成 java.lang.Class 类的一个实例。每个这样的实例用来表示一个 Java 类。通过此实例的 newInstance() 方法就可以创建出该类的一个对象。 基本上所有的类加载器都是 java.lang.ClassLoader 类的一个实例。")]),s._v(" "),a("p",[a("strong",[s._v("类初始化概念")])]),s._v(" "),a("p",[s._v("类被加载之后，jvm 已经获得了一个描述类结构的 Class 实例。但是还需要进行类初始化操作之后才能正常使用此类，类初始化操作就是执行一遍类的静态语句，包括静态变量的声明还有静态代码块。")]),s._v(" "),a("p",[a("strong",[s._v("Class.forName() 方法")])]),s._v(" "),a("p",[s._v("此方法含义是：加载参数指定的类，并且初始化它。")]),s._v(" "),a("p",[s._v("刚才提到，"),a("strong",[s._v('Class.forName("");')]),s._v(" 的作用是要求 JVM 查找并加载指定的类，如果在类中有静态初始化器的话，JVM 必然会执行该类的静态代码 段。")]),s._v(" "),a("h4",{attrs:{id:"现在我们可以对反射进行理解了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在我们可以对反射进行理解了"}},[s._v("#")]),s._v(" 现在我们可以对反射进行理解了")]),s._v(" "),a("p",[s._v("**例子：**在A类里面需要调用B类方法。")]),s._v(" "),a("p",[a("strong",[s._v("RTTI（也就是平时的New新建B类）：")])]),s._v(" "),a("p",[a("em",[s._v("编译期：")]),s._v("   在编译A类时会去检查是否有B类的.class文件存在，煤油的话就先编译B类生成.class文件，如果找不到B类或编译过程出错导致无法编译生成class文件那么A类就编译不通过。编译结束后A跟B已经绑定。")]),s._v(" "),a("p",[a("em",[s._v("运行期：")]),s._v("  在A运行到需要B时，jvm会自动先去检查B是否已被加载，如果B已经被加载生成Class对象，这直接调用Class对象生成B实例。如果B还没被加载，就会去加载B的.class文件生成Class对象。关键在于只能加载B的，Class对象都是固定是B的。也就是首次加载结束之后我们就无从去改变已经跟A绑定的Class对象。")]),s._v(" "),a("p",[a("em",[s._v("坏处：")]),s._v("  在编译完成后，也就是运行时B类的class文件是固定不可变的。这就是为什么说RTTI 是编译器在编译时打开和检查.class文件。")]),s._v(" "),a("p",[a("strong",[s._v("反射（利用反射调用B类）：")])]),s._v(" "),a("p",[s._v("*编译期：*在编译A类时，不会检查是否有B的.class文件存在。无论B类的.class是否存在,A都只是查看一下他自己需要的B的class文件名称而已，都能编译通过。编译结束后A跟B未绑定。")]),s._v(" "),a("p",[s._v("*运行期：*在A运行到需要B时，我们使用反射是利用class.forName（）手动控制jvm去动态加载。不一样的是反射通过class.forName（“B”）动态加载。引号内的的B只是一个字符串，所以我们上面说的编译期A就只是跟检查普通字符串一样检查B而已，A与B并无绑定。这时候如果引号内是一个变量，我们就可以动态改变A调用谁，而不仅仅是B，还可以是C，D。。。")]),s._v(" "),a("p",[a("em",[s._v("好处")]),s._v("：无论B的.class文件是否存在，只要A没有运行到需要B的地方，都可以正常运行，在运行到需要B之前，动态的加入B的class文件即可，也就是在运行过程中我们可以动态的改变B的.class文件。")]),s._v(" "),a("p",[s._v("顺便补充：类加载后获得的Class对象就是用来生成该类的实例的。只是生成的这个过程RTTI是JVM自动做的，而反射是我们操控Class.newInstance去生成而已。")])])]),s._v(" "),a("p",[s._v("问题：反射时class.forName()只是获取.class文件的Class对象，那么这个class对象究竟在什么时候被创建？")]),s._v(" "),a("p",[s._v("答：class.forName()的含义是加载参数指定的类，并且初始化它。既然是加载那么就会创建Class对象。")]),s._v(" "),a("p",[s._v("参考菜鸟教程：https://www.runoob.com/w3cnote/java-class-forname.html")]),s._v(" "),a("h3",{attrs:{id:"class对象简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class对象简介"}},[s._v("#")]),s._v(" Class对象简介")]),s._v(" "),a("p",[s._v("java 在运行时表示类型信息是通过class这个特殊对象来完成的，\nclass对象属于Class类，Class类用来表示一般类的信息，所以class对象包含了与类相关的信息，它主要有以下几个特点：")]),s._v(" "),a("ol",[a("li",[s._v("每个类都有一个与其相关的Class对象。")]),s._v(" "),a("li",[s._v("Class对象含有与其相关类的类信息。")]),s._v(" "),a("li",[s._v("Class对象用来创建与其相关类的“常规对象“")]),s._v(" "),a("li",[s._v("Class对象保存在与其同名的.class文件中。")])]),s._v(" "),a("p",[s._v("那么Class对象是如何产生的喃？")]),s._v(" "),a("p",[s._v("Class对象是通过类加载器加载的，并且只有在第一次使用类时才会被加载。")]),s._v(" "),a("p",[s._v("当使用一个类时，JVM的类加载器会先检查这个类的class对象是否已经被加载，如果没有被加载，则查找同名的.class文件。如果一旦发现类的class对象已经被加载到内存了，则使用这个class对象来创建这个类的所有对象。")]),s._v(" "),a("p",[s._v("那么如何获取Class对象？")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("动态代理本质")]),s._v(" "),a("p",[s._v("静态代理：比如用A需要创建一个C去代理B，那么我们这么做：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),s._v("（b）\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("也就说A只能创建B的代理类，如果我们想让A还能创建E，F，G...等的代理类咋办。")]),s._v(" "),a("p",[s._v("动态代理：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 反射（className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//反射获取被代理类")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("通过类名反射出被代理类，再根据被代理类生成代理类。这时候你想代理什么类，只要把类名传进去生成的C就是你想要的代理类。（以上的new只是表示，通过被代理类生成代理类，并非实际代码的new）")])])]),s._v(" "),a("p",[s._v("参考：www.jianshu.comp607ff4e79a13")]),s._v(" "),a("p",[s._v("​\t\t\thttps://www.cnblogs.com/afei1013/p/12495847.html")])])}),[],!1,null,null,null);a.default=n.exports}}]);
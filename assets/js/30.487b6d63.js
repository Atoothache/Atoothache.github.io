(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{301:function(t,l,a){"use strict";a.r(l);var _=a(13),r=Object(_.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"oracle字符串为或者null的比较"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#oracle字符串为或者null的比较"}},[t._v("#")]),t._v(" ORACLE字符串为或者NULL的比较")]),t._v(" "),l("h4",{attrs:{id:"只需要记住一句话"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#只需要记住一句话"}},[t._v("#")]),t._v(" 只需要记住一句话：")]),t._v(" "),l("p",[l("strong",[t._v("null与任何值得比较都为null，即为false")])]),t._v(" "),l("p",[t._v("A=B;A<>B; A>B;A<B等")]),t._v(" "),l("p",[t._v("以上任何情况只要A或者B有一个为null那么结果都为null，null即为false。")]),t._v(" "),l("h4",{attrs:{id:"遇到的情况"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#遇到的情况"}},[t._v("#")]),t._v(" 遇到的情况：")]),t._v(" "),l("h5",{attrs:{id:"_1-判断a-b时-我们需要返回a等于b的记录"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断a-b时-我们需要返回a等于b的记录"}},[t._v("#")]),t._v(" 1.判断A=B时，我们需要返回A等于B的记录")]),t._v(" "),l("p",[t._v("​\t第一种：如果A或者B只有一个为null ，那么判断结果为null，不予返回。这种情况是判定正确的；")]),t._v(" "),l("p",[t._v("​\t第二种：但是当AB都为null时判定结果为null，即AB还是不相等，不予返回。两个都为null时判定不相等，这么判定就是有问题的。")]),t._v(" "),l("p",[t._v("​\t怎么办呢？")]),t._v(" "),l("p",[t._v("​\t这么办！     (A IS NULL  AND B IS  NULL) or  A = B")]),t._v(" "),l("h5",{attrs:{id:"_2-判断a-b时-为不等于-我们需要返回a不等于b的记录"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-判断a-b时-为不等于-我们需要返回a不等于b的记录"}},[t._v("#")]),t._v(" 2.判断A<>B时（“<>”为不等于），我们需要返回A不等于B的记录")]),t._v(" "),l("p",[t._v("​\t第一种：如果A或者B只有一个为null ，判断结果为null，不予返回。实际上 “如果A或者B只有一个为null  ”那么A肯定不等于B应该返回，即判定错误。")]),t._v(" "),l("p",[t._v("​\t第二种：当AB都为null时，判定结果为null，不予返回。“当AB都为null时”A肯定等于B不应该返回，即判定正确。")]),t._v(" "),l("p",[t._v("​\t怎么办呢？")]),t._v(" "),l("p",[t._v("​\t这么办！    将以上表达式取反：not （ (A IS NULL  AND B IS  NULL) or  A = B）")]),t._v(" "),l("h5",{attrs:{id:"_3-判断a-300时"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-判断a-300时"}},[t._v("#")]),t._v(" 3.判断A<>300时")]),t._v(" "),l("p",[t._v("​\t预想会返回包含Null的不等于300的记录（意识里认为Null也是“不等于30”的其中一种情况）。而实际上，它只返回不为Null且不等于\t300的记录。")]),t._v(" "),l("p",[t._v("​\t怎么办呢？")]),t._v(" "),l("p",[t._v("​\t这么办！    A<>300  or A is null")])])}),[],!1,null,null,null);l.default=r.exports}}]);
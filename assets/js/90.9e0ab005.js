(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{361:function(t,n,s){"use strict";s.r(n);var a=s(13),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"cap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cap"}},[t._v("#")]),t._v(" CAP")]),t._v(" "),n("p",[t._v("一个分布式系统里面，节点组成的网络本来应该是连通的。然而可能因为一些故障，使得有些节点之间不连通了，整个网络就分成了几块区域。数据就散布在了这些不连通的区域中。这就叫分区。")]),t._v(" "),n("p",[t._v("当你一个数据项只在一个节点中保存，那么分区出现后，和这个节点不连通的部分就访问不到这个数据了。这时分区就是无法容忍的。")]),t._v(" "),n("p",[t._v("提高分区容忍性的办法就是一个数据项复制到多个节点上，那么出现分区之后，这一数据项就可能分布到各个区里。容忍性就提高了。")]),t._v(" "),n("p",[t._v("然而，要把数据复制到多个节点，就会带来一致性的问题，就是多个节点上面的数据可能是不一致的。要保证一致，每次写操作就都要等待全部节点写成功，而这等待又会带来可用性的问题。")]),t._v(" "),n("p",[t._v("总的来说就是，数据存在的节点越多，分区容忍性越高，但要复制更新的数据就越多，一致性就越难保证。为了保证一致性，更新所有节点数据所需要的时间就越长，可用性就会降低。")]),t._v(" "),n("p",[t._v("作者：知乎用户\n链接：https://www.zhihu.com/question/54105974/answer/139037688\n来源：知乎\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);n.default=e.exports}}]);
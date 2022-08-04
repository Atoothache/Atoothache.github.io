(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{316:function(_,v,e){"use strict";e.r(v);var l=e(13),t=Object(l.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"lucene-的存储结构概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lucene-的存储结构概述"}},[_._v("#")]),_._v(" Lucene 的存储结构概述")]),_._v(" "),v("p",[_._v("lucene的检索算法属于索引检索，即用空间来换取时间，对需要检索的文件、字符流进行全文索引，在检索的时候对索引进行快速的检索，得到检索位置，这个位置记录检索词出现的文件路径或者某个关键词。")]),_._v(" "),v("p",[_._v("lucene 在存储它的全文索引结构时，是有层次结构的，这涉及到5个层次：索引(Index)；段(Segment)；文档(Document)；域(Field)；词(Term)，他们的关系如下图所示：（lucene 索引存储结构概念图）")]),_._v(" "),v("p",[v("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CDesktop%5Cimage_8.png",alt:""}})]),_._v(" "),v("p",[_._v("下图是Lucene生成的索引的一个实例，右边是对这5个层次的描述：")]),_._v(" "),v("p",[v("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CDesktop%5Cimage_2.png",alt:""}})]),_._v(" "),v("p",[_._v("Lucene的索引结构是有层次结构的，主要分以下几个层次：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("索引(Index)：")])]),_._v(" "),v("li",[v("ul",[v("li",[_._v("一个目录一个索引，在Lucene中一个索引是放在一个文件夹中的。")]),_._v(" "),v("li",[_._v("如左图，同一文件夹中的所有的文件构成一个Lucene索引。")])])]),_._v(" "),v("li",[v("p",[_._v("段(Segment)：")])]),_._v(" "),v("li",[v("ul",[v("li",[_._v("一个索引可以包含多个段，段与段之间是独立的，添加新文档可以生成新的段，不同的段可以合并。\n在建立索引的时候对性能影响最大的地方就是在将索引写入文件的时候, 所以在具体应用的时候就需要对此加以控制，段(Segment) 就是实现这种控制的。稍后详细描述段(Segment) 的控制策略。")]),_._v(" "),v("li",[_._v('如上图，具有相同前缀文件的属同一个段，图中共两个段 "_0" 和 "_1"。')]),_._v(" "),v("li",[_._v("segments.gen和segments_5是段的元数据文件，也即它们保存了段的属性信息。")])])]),_._v(" "),v("li",[v("p",[_._v("文档(Document)：")]),_._v(" "),v("ul",[v("li",[_._v("文档是我们建索引的基本单位，不同的文档是保存在不同的段中的，一个段可以包含多篇文档。")]),_._v(" "),v("li",[_._v("新添加的文档是单独保存在一个新生成的段中，随着段的合并，不同的文档合并到同一个段中。")])])]),_._v(" "),v("li",[v("p",[_._v("域(Field)：")]),_._v(" "),v("ul",[v("li",[_._v("一篇文档包含不同类型的信息，可以分开索引，比如标题，时间，正文，作者等，都可以保存在不同的域里。")]),_._v(" "),v("li",[_._v("不同域的索引方式可以不同。")])])]),_._v(" "),v("li",[v("p",[_._v("词(Term)：")]),_._v(" "),v("ul",[v("li",[_._v("词是索引的最小单位，是经过词法分析和语言处理后的字符串。")])])])]),_._v(" "),v("p",[_._v("Lucene的索引结构中，即保存了正向信息，也保存了反向信息。")]),_._v(" "),v("p",[_._v("所谓正向信息：")]),_._v(" "),v("ul",[v("li",[_._v("按层次保存了从索引，一直到词的包含关系：索引(Index) –> 段(segment) –> 文档(Document) –> 域(Field) –> 词(Term)")]),_._v(" "),v("li",[_._v("也即此索引包含了那些段，每个段包含了那些文档，每个文档包含了那些域，每个域包含了那些词。")]),_._v(" "),v("li",[_._v("既然是层次结构，则每个层次都保存了本层次的信息以及下一层次的元信息，也即属性信息，比如一本介绍中国地理的书，应该首先介绍中国地理的概况，以及中国包含多少个省，每个省介绍本省的基本概况及包含多少个市，每个市介绍本市的基本概况及包含多少个县，每个县具体介绍每个县的具体情况。")]),_._v(" "),v("li",[_._v("如上图，包含正向信息的文件有：\n"),v("ul",[v("li",[_._v("segments_N保存了此索引包含多少个段，每个段包含多少篇文档。")]),_._v(" "),v("li",[_._v("XXX.fnm保存了此段包含了多少个域，每个域的名称及索引方式。")]),_._v(" "),v("li",[_._v("XXX.fdx，XXX.fdt保存了此段包含的所有文档，每篇文档包含了多少域，每个域保存了那些信息。")]),_._v(" "),v("li",[_._v("XXX.tvx，XXX.tvd，XXX.tvf保存了此段包含多少文档，每篇文档包含了多少域，每个域包含了多少词，每个词的字符串，位置等信息。")])])])]),_._v(" "),v("p",[_._v("所谓反向信息：")]),_._v(" "),v("ul",[v("li",[_._v("保存了词典到倒排表的映射：词(Term) –> 文档(Document)")]),_._v(" "),v("li",[_._v("如上图，包含反向信息的文件有：\n"),v("ul",[v("li",[_._v("XXX.tis，XXX.tii保存了词典(Term Dictionary)，也即此段包含的所有的词按字典顺序的排序。")]),_._v(" "),v("li",[_._v("XXX.frq保存了倒排表，也即包含每个词的文档ID列表。")]),_._v(" "),v("li",[_._v("XXX.prx保存了倒排表中每个词在包含此词的文档中的位置。")])])])]),_._v(" "),v("p",[_._v("参考文章https://blog.csdn.net/ghj1976/article/details/5586329")])])}),[],!1,null,null,null);v.default=t.exports}}]);
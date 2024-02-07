(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{304:function(e,n,a){"use strict";a.r(n);var i=a(13),t=Object(i.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"全表扫描、通过rowid访问表、索引扫描对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全表扫描、通过rowid访问表、索引扫描对比"}},[e._v("#")]),e._v(" 全表扫描、通过ROWID访问表、索引扫描对比")]),e._v(" "),n("p",[e._v("ORACLE 采用三种访问表中记录的方式:全表扫描、通过ROWID访问表、索引扫描")]),e._v(" "),n("p",[e._v("2.全表扫描(Full Table Scans, FTS)")]),e._v(" "),n("p",[e._v("为实现全表扫描，Oracle顺序地访问表中每条记录，并检查每一条记录是否满足WHERE语句的限制条件。ORACLE采用一次读入多个数据块(database block)的方式优化全表扫描，而不是只读取一个数据块，这极大的减少了I/O总次数，提高了系统的吞吐量，所以利用多块读的方法可以十分高效地实现全表扫描。需要注意的是只有在全表扫描的情况下才能使用多块读操作。在这种访问模式下，每个数据块只被读一次。")]),e._v(" "),n("p",[e._v("使用FTS的前提条件：在较大的表上不建议使用全表扫描，除非取出数据的比较多，超过总量的5% -- 10%，或你想使用并行查询功能时。")]),e._v(" "),n("p",[e._v("3.通过ROWID访问表(table access by ROWID)")]),e._v(" "),n("p",[e._v("ROWID指出了该行所在的数据文件、数据块以及行在该块中的位置，所以通过ROWID来存取数据可以快速定位到目标数据上，是Oracle存取单行数据的最快方法。为了通过ROWID存取表，Oracle首先要获取被选择行的ROWID，或者从语句的WHERE子句中得到，或者通过表的一个或多个索引的索引扫描得到。Oracle然后以得到的ROWID为依据定位每个被选择的行。下面给出使用rowid访问表的实例。")]),e._v(" "),n("p",[e._v("4.索引扫描(Index scan)")]),e._v(" "),n("p",[e._v("我们先通过index查找到数据对应的rowid值(对于非唯一索引可能返回多个rowid值)，然后根据rowid直接从表中得到具体的数据，这种查找方式称为索引扫描或索引查找(index lookup)。一个rowid唯一的表示一行数据，该行对应的数据块是通过一次i/o得到的，在此情况下该次i/o只会读取一个数据库块。")]),e._v(" "),n("p",[e._v("在索引中，除了存储每个索引的值外，索引还存储具有此值的行对应的ROWID值。索引扫描可以由2步组成：(1)扫描索引得到对应的rowid值。(2)通过找到的rowid从表中读出具体的数据。")]),e._v(" "),n("p",[e._v("根据索引的类型与where限制条件的不同，有4种类型的索引扫描。")]),e._v(" "),n("p",[e._v("4.1.索引范围扫描(INDEX RANGE SCAN)")]),e._v(" "),n("p",[e._v('使用一个索引存取多行数据，在唯一索引上使用索引范围扫描的典型情况下是在谓词(where限制条件)中使用了范围操作符(如>、、>=、<=、between)。在非唯一索引上，谓词"="也可能返回多行数据，所以在非唯一索引上都使用索引范围扫描。')]),e._v(" "),n("p",[e._v("使用index rang scan的3种情况：")]),e._v(" "),n("p",[e._v("5 在唯一索引列上使用了range操作符(> >= <= between)")]),e._v(" "),n("p",[e._v("6 在组合索引上，只使用部分列进行查询，导致查询出多行")]),e._v(" "),n("p",[e._v("7 对非唯一索引列上进行的任何查询。")]),e._v(" "),n("p",[e._v("4.2.索引唯一扫描(INDEX UNIQUE SCAN)")]),e._v(" "),n("p",[e._v("通过唯一索引查找一个数值经常返回单个ROWID。如果存在UNIQUE或PRIMARY KEY约束(它保证了语句只存取单行)的话，Oracle经常实现唯一性扫描。")]),e._v(" "),n("p",[e._v("4.3.索引全扫描(index full scan)")]),e._v(" "),n("p",[e._v("有顺序的输出，不能并行访问索引。")]),e._v(" "),n("p",[e._v("4.4.索引快速扫描(index fast full scan)")]),e._v(" "),n("p",[e._v("Fast Full Index Scans(来自官方文档)")]),e._v(" "),n("p",[e._v("Fast full index scans are an alternative to a full table scan when theindex contains all the columns that are needed for the query(组合索引中的列包含了需要查询的所有列), and at least one column in the index key has the NOT NULL constraint(至少有一个有非空约束). A fast full scan accesses the data in the index itself, without accessing the table. It cannot be used to eliminate a sort operation, because the data is not ordered by the index key. It reads the entire index using multiblock reads, unlike a full index scan, and can be parallelized.")]),e._v(" "),n("p",[e._v("You can specify fast full index scans with the initialization parameter OPTIMIZER_FEATURES_ENABLE or the INDEX_FFS hint. Fast full index scans cannot be performed against bitmap indexes.")]),e._v(" "),n("p",[e._v("A fast full scan is faster than a normal full index scan in that it canuse multiblock I/O(一次可以读多个块，跟全表扫描一样) and can be parallelized just like a table scan.")]),e._v(" "),n("p",[e._v("4.5.index skip scan(索引跳跃式扫描)")]),e._v(" "),n("p",[e._v("Index Skip Scans")]),e._v(" "),n("p",[e._v("Index skip scans improve index scans by no nprefix columns. Often, scanning index blocks is faster than sc anning table data blocks.")]),e._v(" "),n("p",[e._v("Skip scanning lets a composite index be split logically into smaller subindexes. In skip scanning, the initial column of the composite index is not specified in the query. In other words, it is skipped.")]),e._v(" "),n("p",[e._v("The number of logical subindexes is determined by the number of distinct values in the initial column. Skip scanning is advantageo us if there are few distinct values in the leading column of the composite index and many distinct values in the nonleading key of the index.")]),e._v(" "),n("p",[e._v("当查询可以通过组合索引得到结果，而且返回结果很少，并且where条件中没有包含索引引导列的时候，可能执行index skip scan。")]),e._v(" "),n("p",[e._v("索引跳跃式扫描发生的条件:")]),e._v(" "),n("p",[e._v("8 必须是组合索引。")]),e._v(" "),n("p",[e._v("9 引导列没有出现在where条件中。")])])}),[],!1,null,null,null);n.default=t.exports}}]);
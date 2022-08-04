(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{301:function(t,a,e){"use strict";e.r(a);var r=e(13),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[t._v("#")]),t._v(" Linux常用命令")]),t._v(" "),a("h2",{attrs:{id:"系统服务管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统服务管理"}},[t._v("#")]),t._v(" 系统服务管理")]),t._v(" "),a("h3",{attrs:{id:"systemctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl"}},[t._v("#")]),t._v(" systemctl")]),t._v(" "),a("ul",[a("li",[t._v("启动服务：systemctl start httpd.service")]),t._v(" "),a("li",[t._v("关闭服务：systemctl stop httpd.service")]),t._v(" "),a("li",[t._v("重启服务（不管是否在运行）：systemctl restart httpd.service")]),t._v(" "),a("li",[t._v("重新载入配置（不中断服务）：systemctl reload httpd.service")]),t._v(" "),a("li",[t._v("查看运行状态：systemctl status httpd.service")]),t._v(" "),a("li",[t._v("设置开机启动：systemctl enable httpd.service")]),t._v(" "),a("li",[t._v("禁止开机启动：systemctl disable httpd.service")]),t._v(" "),a("li",[t._v("查看系统安装的服务：systemctl list-units --type=service")])]),t._v(" "),a("h2",{attrs:{id:"文件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件管理"}},[t._v("#")]),t._v(" 文件管理")]),t._v(" "),a("h3",{attrs:{id:"ls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[t._v("#")]),t._v(" ls")]),t._v(" "),a("p",[t._v("列出/home目录下的子目录：ls -l /home\n列出当前文件夹下所有文件夹及文件大小：ls -lht")]),t._v(" "),a("h3",{attrs:{id:"pwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[t._v("#")]),t._v(" pwd")]),t._v(" "),a("p",[t._v("显示当前工作目录")]),t._v(" "),a("h3",{attrs:{id:"cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cd"}},[t._v("#")]),t._v(" cd")]),t._v(" "),a("p",[t._v("切换目录： cd /usr/local")]),t._v(" "),a("h3",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" date")]),t._v(" "),a("p",[t._v("以指定格式显示日期；date '+date:%x time:%X'")]),t._v(" "),a("h3",{attrs:{id:"passwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passwd"}},[t._v("#")]),t._v(" passwd")]),t._v(" "),a("p",[t._v("修改root密码：passwd root")]),t._v(" "),a("h3",{attrs:{id:"su"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#su"}},[t._v("#")]),t._v(" su")]),t._v(" "),a("p",[t._v("普通用户切换到超级用户：su -")]),t._v(" "),a("h3",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" clear")]),t._v(" "),a("p",[t._v("清除屏幕信息")]),t._v(" "),a("h3",{attrs:{id:"man"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#man"}},[t._v("#")]),t._v(" man")]),t._v(" "),a("p",[t._v("查看ls命令的帮助信息：man ls")]),t._v(" "),a("h3",{attrs:{id:"who"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who"}},[t._v("#")]),t._v(" who")]),t._v(" "),a("ul",[a("li",[t._v("查看当前运行级别：who -r")]),t._v(" "),a("li",[t._v("显示用的登录详情：who -buT")])]),t._v(" "),a("h3",{attrs:{id:"free"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free"}},[t._v("#")]),t._v(" free")]),t._v(" "),a("p",[t._v("以MB显示内存使用状态：free -m")]),t._v(" "),a("h3",{attrs:{id:"ps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[t._v("#")]),t._v(" ps")]),t._v(" "),a("p",[t._v("查看系统所有进程：ps -ef\n查看运行的java进程： ps -ef | grep java")]),t._v(" "),a("h3",{attrs:{id:"top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[t._v("#")]),t._v(" top")]),t._v(" "),a("p",[t._v("查看系统当前活跃进程信息")]),t._v(" "),a("h3",{attrs:{id:"mkdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[t._v("#")]),t._v(" mkdir")]),t._v(" "),a("p",[t._v("创建目录")]),t._v(" "),a("h3",{attrs:{id:"more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[t._v("#")]),t._v(" more")]),t._v(" "),a("p",[t._v("分页查看"),a("br"),t._v("\n每10行显示一屏查看：more -c -10")]),t._v(" "),a("h3",{attrs:{id:"cat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[t._v("#")]),t._v(" cat")]),t._v(" "),a("p",[t._v("查看config文件：cat -Ab config")]),t._v(" "),a("p",[t._v("1、查看日志 "),a("strong",[t._v("前 n行")]),t._v("：")]),t._v(" "),a("p",[a("strong",[t._v("cat 文件名 | head -n 数量")])]),t._v(" "),a("p",[t._v("demo：")]),t._v(" "),a("p",[t._v("cat test.log | head -n 200　　# 查看test.log前200行")]),t._v(" "),a("p",[t._v("2、查看日志 "),a("strong",[t._v("尾 n行")]),t._v("：")]),t._v(" "),a("p",[a("strong",[t._v("cat 文件名 | tail -n 数量")])]),t._v(" "),a("p",[t._v("demo：")]),t._v(" "),a("p",[t._v("cat test.log | tail -n 200　　# 查看test.log倒数200行")]),t._v(" "),a("p",[t._v("3、根据 "),a("strong",[t._v("关键词")]),t._v(" 查看日志 并"),a("strong",[t._v("返回关键词所在行")]),t._v("：")]),t._v(" "),a("p",[t._v("*方法一：*"),a("strong",[t._v("cat 路径/文件名 | grep 关键词")])]),t._v(" "),a("p",[t._v("demo：")]),t._v(" "),a("p",[t._v('cat test.log | grep "http"　　# 返回test.log中包含http的所有行')]),t._v(" "),a("p",[t._v("*方法二：*"),a("strong",[t._v("grep -i 关键词 路径/文件名")]),t._v(" （与方法一效果相同，不同写法而已）")]),t._v(" "),a("p",[t._v("demo：")]),t._v(" "),a("p",[t._v('grep -i "http" ./test.log　　# 返回test.log中包含http的所有行(-i忽略大小写）')]),t._v(" "),a("h3",{attrs:{id:"rm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[t._v("#")]),t._v(" rm")]),t._v(" "),a("ul",[a("li",[t._v("删除文件：rm a.txt")]),t._v(" "),a("li",[t._v("删除文件夹： rm -rf a/")])]),t._v(" "),a("h3",{attrs:{id:"touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#touch"}},[t._v("#")]),t._v(" touch")]),t._v(" "),a("p",[t._v("创建一个文件：touch a.txt")]),t._v(" "),a("h3",{attrs:{id:"cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[t._v("#")]),t._v(" cp")]),t._v(" "),a("p",[t._v("将目录a的文件拷贝到目录b: cp -r /home/a /home/b")]),t._v(" "),a("h3",{attrs:{id:"mv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mv"}},[t._v("#")]),t._v(" mv")]),t._v(" "),a("p",[t._v("移动或覆盖文件：mv a.txt b.txt")]),t._v(" "),a("h2",{attrs:{id:"压缩与解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩与解压"}},[t._v("#")]),t._v(" 压缩与解压")]),t._v(" "),a("h3",{attrs:{id:"tar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),a("ul",[a("li",[t._v("打包文件夹到单独的文件：tar -cvf /opt/etc.tar /etc")]),t._v(" "),a("li",[t._v("压缩文件夹到压缩文件（gzip）：tar -zcvf /opt/etc.tar.gz /etc")]),t._v(" "),a("li",[t._v("压缩文件夹到压缩文件（bzip2）：tar -jcvf /opt/etc.tar.bz2 /etc")]),t._v(" "),a("li",[t._v("查阅压缩包中内容（gzip）：tar -ztvf /opt/etc.tar.gz /etc")]),t._v(" "),a("li",[t._v("解压文件到当前目录（gzip）：tar -zxvf /opt/etc.tar.gz")])]),t._v(" "),a("h2",{attrs:{id:"磁盘和网络管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘和网络管理"}},[t._v("#")]),t._v(" 磁盘和网络管理")]),t._v(" "),a("h3",{attrs:{id:"df"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#df"}},[t._v("#")]),t._v(" df")]),t._v(" "),a("p",[t._v("查看磁盘占用情况：df -hT")]),t._v(" "),a("h3",{attrs:{id:"ifconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifconfig"}},[t._v("#")]),t._v(" ifconfig")]),t._v(" "),a("p",[t._v("查看当前网络接口状态")]),t._v(" "),a("h3",{attrs:{id:"netstat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[t._v("#")]),t._v(" netstat")]),t._v(" "),a("ul",[a("li",[t._v("查看路由信息：netstat -rn")]),t._v(" "),a("li",[t._v("查看所有有效TCP连接：netstat -an")]),t._v(" "),a("li",[t._v("查看系统中启动的监听服务：netstat -tulnp")]),t._v(" "),a("li",[t._v("查看处于连接状态的系统资源信息：netstat -atunp")])]),t._v(" "),a("h3",{attrs:{id:"wget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wget"}},[t._v("#")]),t._v(" wget")]),t._v(" "),a("p",[t._v("从网络上下载软件")]),t._v(" "),a("h2",{attrs:{id:"软件的安装与管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件的安装与管理"}},[t._v("#")]),t._v(" 软件的安装与管理")]),t._v(" "),a("h3",{attrs:{id:"rpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[t._v("#")]),t._v(" rpm")]),t._v(" "),a("ul",[a("li",[t._v("安装软件包：rpm -ivh nginx-1.12.2-2.el7.x86_64.rpm")]),t._v(" "),a("li",[t._v("模糊搜索软件包：rpm -qa | grep nginx")]),t._v(" "),a("li",[t._v("精确查找软件包：rpm -qa nginx")]),t._v(" "),a("li",[t._v("查询软件包的安装路径：rpm -ql nginx-1.12.2-2.el7.x86_64")]),t._v(" "),a("li",[t._v("查看软件包的概要信息：rpm -qi nginx-1.12.2-2.el7.x86_64")]),t._v(" "),a("li",[t._v("验证软件包内容和安装文件是否一致：rpm -V nginx-1.12.2-2.el7.x86_64")]),t._v(" "),a("li",[t._v("更新软件包：rpm -Uvh nginx-1.12.2-2.el7.x86_64")]),t._v(" "),a("li",[t._v("删除软件包：rpm -e nginx-1.12.2-2.el7.x86_64")])]),t._v(" "),a("h3",{attrs:{id:"yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[t._v("#")]),t._v(" yum")]),t._v(" "),a("ul",[a("li",[t._v("安装软件包： yum install nginx")]),t._v(" "),a("li",[t._v("检查可以更新的软件包：yum check-update")]),t._v(" "),a("li",[t._v("更新指定的软件包：yum update nginx")]),t._v(" "),a("li",[t._v("在资源库中查找软件包信息：yum info nginx*")]),t._v(" "),a("li",[t._v("列出已经安装的所有软件包：yum info installed")]),t._v(" "),a("li",[t._v("列出软件包名称：yum list redis*")]),t._v(" "),a("li",[t._v("模糊搜索软件包：yum search redis")])]),t._v(" "),a("h2",{attrs:{id:"网络安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络安全"}},[t._v("#")]),t._v(" 网络安全")]),t._v(" "),a("h3",{attrs:{id:"iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[t._v("#")]),t._v(" iptables")]),t._v(" "),a("ul",[a("li",[t._v("开启防火墙：systemctl start iptables.service")]),t._v(" "),a("li",[t._v("关闭防火墙：systemctl stop iptables.service")]),t._v(" "),a("li",[t._v("查看防火墙状态：systemctl status iptables.service")]),t._v(" "),a("li",[t._v("设置开机启动：systemctl enable iptables.service")]),t._v(" "),a("li",[t._v("禁用开机启动：systemctl disable iptables.service")]),t._v(" "),a("li",[t._v("查看filter表的链信息：iptables -L -n")]),t._v(" "),a("li",[t._v("查看NAT表的链信息：iptables -t nat -L -n")]),t._v(" "),a("li",[t._v("清除防火墙所有规则：iptables -F;iptables -X;iptables -Z;")]),t._v(" "),a("li",[t._v("添加过滤规则（开发80端口）：iptables -I INPUT -p tcp --dport 80 -j ACCEPT")]),t._v(" "),a("li",[t._v("查找规则所做行号：iptables -L INPUT --line-numbers -n")]),t._v(" "),a("li",[t._v("根据行号删除过滤规则：iptables -D INPUT 1")])]),t._v(" "),a("h3",{attrs:{id:"firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall"}},[t._v("#")]),t._v(" firewall")]),t._v(" "),a("p",[t._v("systemctl start firewalld # 启动,\nsystemctl enable firewalld # 开机启动\nsystemctl stop firewalld # 关闭\nsystemctl disable firewalld # 取消开机启动")]),t._v(" "),a("p",[t._v("firewall-cmd --help # 查看帮助\nfirewall-cmd --state # 查看运行状态\nfirewall-cmd --get-zone-of-interface=eth0 # 查看指定接口的 Zone 信息\nfirewall-cmd --zone=public --list-interfaces # 查看指定级别的接口\nfirewall-cmd --get-service # 查看所有级别被允许的信息\nfirewall-cmd --get-service --permanent # 查看重启后所有 Zones 级别中被允许的服务，即永久放行的服务\nfirewall-cmd --reload # 更新规则，不重启服务\nfirewall-cmd --complete-reload # 更新规则，重启服务\nfirewall-cmd --zone=external --add-masquerade # 打开端口转发\nfirewall-cmd --zone=external --add-forward-port=port=22:proto=tcp:toport=3753 #  转发 tcp 22 端口至 3753\nfirewall-cmd --zone=external --add-forward-port=port=22:proto=tcp:toaddr=192.168.1.100  # 转发 22 端口数据至另一个 ip 的相同端口上\nfirewall-cmd --zone=external --add-forward-port=port=22:proto=tcp:toport=2055:toaddr=192.168.1.100 # 转发 22 端口数据至另一 ip 的 2055 端口上\nfirewall-cmd --add-port=443/tcp #  打开443/TCP端口\nfirewall-cmd --permanent --add-port=3690/tcp # 永久打开3690/TCP端口")]),t._v(" "),a("p",[t._v("永久打开需要reload : firewall-cmd --reload\nfirewall-cmd --permanent --remove-port=8080/tcp # 永久删除8080端口，禁止外网访问\nfirewall-cmd --permanent --query-port=8080/tcp # 查询端口是否开启")]),t._v(" "),a("p",[t._v("查看防火墙开放端口列表 firewall-cmd --zone=public --list-ports")])])}),[],!1,null,null,null);a.default=s.exports}}]);
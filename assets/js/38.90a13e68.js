(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{311:function(v,_,p){"use strict";p.r(_);var s=p(13),t=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"数字证书原理-公钥私钥加密原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字证书原理-公钥私钥加密原理"}},[v._v("#")]),v._v(" 数字证书原理,公钥私钥加密原理")]),v._v(" "),_("p",[v._v("参考文章：https://blog.csdn.net/junehappylove/article/details/52288796  公钥与私钥原理")]),v._v(" "),_("p",[v._v("文中首先解释了加密解密的一些基础知识和概念，然后通过一个加密通信过程的例子说明了加密"),_("a",{attrs:{href:"http://lib.csdn.net/base/31",target:"_blank",rel:"noopener noreferrer"}},[v._v("算法"),_("OutboundLink")],1),v._v("的作用，以及数字证书的出现所起的作用。接着对数字证书做一个详细的解释，并讨论一下windows中数字证书的管理，最后演示使用makecert生成数字证书。如果发现文中有错误的地方，或者有什么地方说得不够清楚，欢迎指出！")]),v._v(" "),_("p",[v._v("1、基础知识")]),v._v(" "),_("p",[v._v("这部分内容主要解释一些概念和术语，最好是先理解这部分内容。")]),v._v(" "),_("p",[v._v("1.1、公钥密码体制(public-key cryptography)")]),v._v(" "),_("p",[v._v("公钥密码体制分为三个部分，公钥、私钥、加密解密算法，它的加密解密过程如下：")]),v._v(" "),_("ul",[_("li",[v._v("加密：通过加密算法和公钥对内容(或者说明文)进行加密，得到密文。加密过程需要用到公钥。")]),v._v(" "),_("li",[v._v("解密：通过解密算法和私钥对密文进行解密，得到明文。解密过程需要用到解密算法和私钥。注意，由公钥加密的内容，只能由私钥进行解密，也就是说，由公钥加密的内容，如果不知道私钥，是无法解密的。")])]),v._v(" "),_("p",[v._v("公钥密码体制的公钥和算法都是公开的(这是为什么叫公钥密码体制的原因)，私钥是保密的。大家都以使用公钥进行加密，但是只有私钥的持有者才能解密。在实际的使用中，有需要的人会生成一对公钥和私钥，把公钥发布出去给别人使用，自己保留私钥。")]),v._v(" "),_("p",[v._v("1.2、对称加密算法(symmetric key algorithms)")]),v._v(" "),_("p",[v._v("在对称加密算法中，加密使用的密钥和解密使用的密钥是相同的。也就是说，加密和解密都是使用的同一个密钥。因此对称加密算法要保证安全性的话，密钥要做好保密，只能让使用的人知道，不能对外公开。这个和上面的公钥密码体制有所不同，公钥密码体制中加密是用公钥，解密使用私钥，而对称加密算法中，加密和解密都是使用同一个密钥，不区分公钥和私钥。")]),v._v(" "),_("p",[v._v("​    // 密钥，一般就是一个字符串或数字，在加密或者解密时传递给加密/解密算法。前面在公钥密码体制中说到的公钥、私钥就是密钥，公钥是加密使用的密钥，私钥是解密使用的密钥。")]),v._v(" "),_("p",[v._v("1.3、非对称加密算法(asymmetric key algorithms)")]),v._v(" "),_("p",[v._v("在非对称加密算法中，加密使用的密钥和解密使用的密钥是不相同的。前面所说的公钥密码体制就是一种非对称加密算法，他的公钥和是私钥是不能相同的，也就是说加密使用的密钥和解密使用的密钥不同，因此它是一个非对称加密算法。")]),v._v(" "),_("p",[v._v("1.4、RSA简介")]),v._v(" "),_("p",[v._v("RSA是一种公钥密码体制，现在使用得很广泛。如果对RSA本身有兴趣的，后面看我有没有时间写个RSA的具体介绍。")]),v._v(" "),_("p",[v._v("RSA密码体制是一种公钥密码体制，公钥公开，私钥保密，它的加密解密算法是公开的。 由公钥加密的内容可以并且只能由私钥进行解密，并且由私钥加密的内容可以并且只能由公钥进行解密。也就是说，"),_("strong",[v._v("RSA的这一对公钥、私钥都可以用来加密和解密，并且一方加密的内容可以由并且只能由对方进行解密")]),v._v("。")]),v._v(" "),_("p",[v._v("1.5、签名和加密")]),v._v(" "),_("p",[v._v("我们说加密，是指对某个内容加密，加密后的内容还可以通过解密进行还原。 比如我们把一封邮件进行加密，加密后的内容在网络上进行传输，接收者在收到后，通过解密可以还原邮件的真实内容。")]),v._v(" "),_("p",[v._v("这里主要解释一下签名，签名就是在"),_("strong",[v._v("信息")]),v._v("的后面再加上一段内容，可以证明"),_("strong",[v._v("信息")]),v._v("没有被修改过，怎么样可以达到这个效果呢？一般是对"),_("strong",[v._v("信息")]),v._v("做一个hash计算得到一个hash值，注意，这个过程是不可逆的，也就是说无法通过hash值得出原来的"),_("strong",[v._v("信息")]),v._v("内容。在把"),_("strong",[v._v("信息")]),v._v("发送出去时，把这个hash值加密后做为一个签名和"),_("strong",[v._v("信息")]),v._v("一起发出去。 接收方在收到"),_("strong",[v._v("信息")]),v._v("后，会重新计算"),_("strong",[v._v("信息")]),v._v("的hash值，并和"),_("strong",[v._v("信息")]),v._v("所附带的hash值(解密后)进行对比，如果一致，就说明信息的内容没有被修改过，因为这里hash计算可以保证不同的内容一定会得到不同的hash值，所以只要内容一被修改，根据"),_("strong",[v._v("信息")]),v._v("内容计算的hash值就会变化。当然，不怀好意的人也可以修改"),_("strong",[v._v("信息")]),v._v("内容的同时也修改hash值，从而让它们可以相匹配，为了防止这种情况，hash值一般都会加密后(也就是签名)再和"),_("strong",[v._v("信息")]),v._v("一起发送，以保证这个hash值不被修改。至于如何让别人可以解密这个签名，这个过程涉及到数字证书等概念，我们后面在说到数字证书时再详细说明，这里您先只需先理解签名的这个概念。")]),v._v(" "),_("p",[v._v("2、一个加密通信过程的演化")]),v._v(" "),_("p",[v._v("我们来看一个例子，现在假设“服务器”和“客户”要在网络上通信，并且他们打算使用RSA(参看前面的RSA简介)来对通信进行加密以保证谈话内容的安全。由于是使用RSA这种公钥密码体制，“服务器”需要对外发布公钥(算法不需要公布，RSA的算法大家都知道)，自己留着私钥。“客户”通过某些途径拿到了“服务器”发布的公钥，客户并不知道私钥。“客户”具体是通过什么途径获取公钥的，我们后面再来说明，下面看一下双方如何进行保密的通信：")]),v._v(" "),_("p",[v._v("2.1 第一回合：")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：？？？？")]),v._v(" "),_("p",[v._v("因为消息是在网络上传输的，有人可以冒充自己是“服务器”来向客户发送信息。例如上面的消息可以被黑客截获如下：")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器")]),v._v(" "),_("p",[_("strong",[v._v("“客户”->“黑客”：你好")]),v._v("    // 黑客在“客户”和“服务器”之间的某个路由器上截获“客户”发给服务器的信息，然后自己冒充“服务器”")]),v._v(" "),_("p",[_("strong",[v._v("“黑客”->“客户”：你好，我是服务器")])]),v._v(" "),_("p",[v._v("因此“客户”在接到消息后，并不能肯定这个消息就是由“服务器”发出的，某些“黑客”也可以冒充“服务器”发出这个消息。如何确定信息是由“服务器”发过来的呢？有一个解决方法，因为只有服务器有私钥，所以如果只要能够确认对方有私钥，那么对方就是“服务器”。因此通信过程可以改进为如下：")]),v._v(" "),_("p",[v._v("2.2 第二回合：")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：向我证明你就是服务器")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器 {你好，我是服务器}[私钥|RSA]")]),v._v(" "),_("p",[v._v("**// *"),_("em",[v._v("注*"),_("em",[v._v("意这里约定一下，{} 表示RSA加密后的内容，[ | ]表示用什么密钥和算法进行加密，后面的示例中都用这种表示方式，例如上面的")])]),v._v(" {你好，我是服务器}[私钥|RSA] "),_("strong",[v._v("就表示用私钥对")]),v._v("“你好，我是服务器”"),_("strong",[v._v("进行加密后的结果。")])]),v._v(" "),_("p",[v._v("为了向“客户”证明自己是“服务器”， “服务器”把一个字符串用自己的私钥加密，把明文和加密后的密文一起发给“客户”。对于这里的例子来说，就是把字符串 “你好，我是服务器”和这个字符串用私钥加密后的内容 {你好，我是服务器}[私钥|RSA] 发给客户。")]),v._v(" "),_("p",[v._v("“客户”收到信息后，她用自己持有的公钥解密密文，和明文进行对比，如果一致，说明信息的确是由服务器发过来的。也就是说“客户”把 {你好，我是服务器}[私钥|RSA] 这个内容用公钥进行解密，然后和“你好，我是服务器”对比。因为由“服务器”用私钥加密后的内容，****由并且只能由****公钥进行解密，私钥只有“服务器”持有，所以如果解密出来的内容是能够对得上的，那说明信息一定是从“服务器”发过来的。")]),v._v(" "),_("p",[v._v("假设“黑客”想冒充“服务器”：")]),v._v(" "),_("p",[_("strong",[v._v("“黑客”->“客户”：你好，我是服务器")])]),v._v(" "),_("p",[_("strong",[v._v("“客户”->“黑客”：向我证明你就是服务器")])]),v._v(" "),_("p",[_("strong",[v._v("“黑客”->“客户”：你好，我是服务器 {你好，我是服务器}[？？？|RSA]")]),v._v("  //这里黑客无法冒充，因为他不知道"),_("strong",[v._v("私钥")]),v._v("，无法用"),_("strong",[v._v("私钥")]),v._v("加密某个字符串后发送给客户去验证。")]),v._v(" "),_("p",[_("em",[_("em",[_("em",[v._v("*“客户”->“黑客**”：**")]),v._v("*")]),v._v("*？？？？*")]),v._v("**")]),v._v(" "),_("p",[v._v("由于“黑客”没有“服务器”的私钥，因此它发送过去的内容，“客户”是无法通过服务器的公钥解密的，因此可以认定对方是个冒牌货！")]),v._v(" "),_("p",[v._v("到这里为止，“客户”就可以确认“服务器”的身份了，可以放心和“服务器”进行通信，但是这里有一个问题，通信的内容在网络上还是无法保密。为什么无法保密呢？通信过程不是可以用公钥、私钥加密吗？其实用RSA的私钥和公钥是不行的，我们来具体分析下过程，看下面的演示：")]),v._v(" "),_("p",[v._v("2.3 第三回合：")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：向我证明你就是服务器")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器 {你好，我是服务器}[私钥|RSA]")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：{我的帐号是aaa，密码是123，把我的余额的信息发给我看看}[公钥|RSA]")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：{你的余额是100元}[私钥|RSA]")]),v._v(" "),_("p",[v._v("注意上面的的信息 {你的余额是100元}[私钥]，这个是“服务器”用私钥加密后的内容，但是我们之前说了，公钥是发布出去的，因此所有的人都知道公钥，所以除了“客户”，其它的人也可以用公钥对{你的余额是100元}[私钥]进行解密。所以如果“服务器”用私钥加密发给“客户”，这个信息是无法保密的，因为只要有公钥就可以解密这内容。然而“服务器”也不能用公钥对发送的内容进行加密，因为“客户”没有私钥，发送个“客户”也解密不了。")]),v._v(" "),_("p",[v._v("这样问题就又来了，那又如何解决呢？在实际的应用过程，一般是通过引入对称加密来解决这个问题，看下面的演示：")]),v._v(" "),_("p",[v._v("2.4 第四回合：")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：向我证明你就是服务器")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器 {你好，我是服务器}[私钥|RSA]")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：{我们后面的通信过程，用对称加密来进行，这里是对称加密算法和密钥}[公钥|RSA]  //蓝色字体的部分是对称加密的算法和密钥的具体内容，客户把它们发送给服务器。")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：{OK，收到！}[密钥|对称加密算法]")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：{我的帐号是aaa，密码是123，把我的余额的信息发给我看看}[密钥|对称加密算法]")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：{你的余额是100元}[密钥|对称加密算法]")]),v._v(" "),_("p",[v._v("在上面的通信过程中，“客户”在确认了“服务器”的身份后，“客户”自己选择一个对称加密算法和一个密钥，把这个对称加密算法和密钥一起用公钥加密后发送给“服务器”。注意，由于对称加密算法和密钥是用公钥加密的，就算这个加密后的内容被“黑客”截获了，由于没有私钥，“黑客”也无从知道对称加密算法和密钥的内容。")]),v._v(" "),_("p",[v._v("由于是用公钥加密的，只有私钥能够解密，这样就可以保证只有服务器可以知道对称加密算法和密钥，而其它人不可能知道(这个对称加密算法和密钥是“客户”自己选择的，所以“客户”自己当然知道如何解密加密)。这样“服务器”和“客户”就可以用对称加密算法和密钥来加密通信的内容了。")]),v._v(" "),_("p",[v._v("总结一下，RSA加密算法在这个通信过程中所起到的作用主要有两个：")]),v._v(" "),_("ul",[_("li",[_("em",[_("strong",[v._v("*因为私钥只有“服务器”拥有，因此“客户”可以通过判断对方是否有私钥来判断对方是否是“服务器”。*")])])]),v._v(" "),_("li",[_("em",[_("strong",[v._v("*客户端通过RSA的掩护，安全的和服务器商量好一个对称加密算法和密钥来保证后面通信过程内容的安全。*")])])])]),v._v(" "),_("p",[v._v("如果这里您理解了为什么不用RSA去加密通信过程，而是要再确定一个对称加密算法来保证通信过程的安全，那么就说明前面的内容您已经理解了。(如果不清楚，再看下2.3和2.4，如果还是不清楚，那应该是我们说清楚，您可以留言提问。)")]),v._v(" "),_("p",[v._v("到这里，“客户”就可以确认“服务器”的身份，并且双方的通信内容可以进行加密，其他人就算截获了通信内容，也无法解密。的确，好像通信的过程是比较安全了。")]),v._v(" "),_("p",[v._v("但是这里还留有一个问题，在最开始我们就说过，“服务器”要对外发布公钥，那“服务器”如何把公钥发送给“客户”呢？我们第一反应可能会想到以下的两个方法：")]),v._v(" "),_("p",[v._v("a)把公钥放到互联网的某个地方的一个下载地址，事先给“客户”去下载。")]),v._v(" "),_("p",[v._v("b)每次和“客户”开始通信时，“服务器”把公钥发给“客户”。")]),v._v(" "),_("p",[v._v("但是这个两个方法都有一定的问题，")]),v._v(" "),_("p",[v._v("对于a)方法，“客户”无法确定这个下载地址是不是“服务器”发布的，你凭什么就相信这个地址下载的东西就是“服务器”发布的而不是别人伪造的呢，万一下载到一个假的怎么办？另外要所有的“客户”都在通信前事先去下载公钥也很不现实。")]),v._v(" "),_("p",[v._v("对于b)方法，也有问题，因为任何人都可以自己生成一对公钥和私钥，他只要向“客户”发送他自己的私钥就可以冒充“服务器”了。示意如下：")]),v._v(" "),_("p",[v._v("“客户”->“黑客”：你好      //黑客截获“客户”发给“服务器”的消息")]),v._v(" "),_("p",[v._v("“黑客”->“客户”：你好，我是服务器，这个是我的公钥  //黑客自己生成一对公钥和私钥，把公钥发给“客户”，自己保留私钥")]),v._v(" "),_("p",[v._v("“客户”->“黑客”：向我证明你就是服务器")]),v._v(" "),_("p",[v._v("“黑客”->“客户”：你好，我是服务器 {你好，我是服务器}[黑客自己的私钥|RSA]   //客户收到“黑客”用私钥加密的信息后，是可以用“黑客”发给自己的公钥解密的，从而会误认为“黑客”是“服务器”")]),v._v(" "),_("p",[v._v("因此“黑客”只需要自己生成一对公钥和私钥，然后把公钥发送给“客户”，自己保留私钥，这样由于“客户”可以用黑客的公钥解密黑客的私钥加密的内容，“客户”就会相信“黑客”是“服务器”，从而导致了安全问题。"),_("strong",[_("em",[v._v("*这里问题的根源就在于，大家都可以生成公钥、私钥对，无法确认公钥对到底是谁的*")]),v._v("。")]),v._v(" 如果能够确定公钥到底是谁的，就不会有这个问题了。例如，如果收到“黑客”冒充“服务器”发过来的公钥，经过某种检查，如果能够发现这个公钥不是“服务器”的就好了。")]),v._v(" "),_("p",[v._v("为了解决这个问题，数字证书出现了，它可以解决我们上面的问题。先大概看下什么是数字证书，一个证书包含下面的具体内容：")]),v._v(" "),_("ul",[_("li",[v._v("证书的发布机构")]),v._v(" "),_("li",[v._v("证书的有效期")]),v._v(" "),_("li",[v._v("公钥")]),v._v(" "),_("li",[v._v("证书所有者（Subject）")]),v._v(" "),_("li",[v._v("签名所使用的算法")]),v._v(" "),_("li",[v._v("指纹以及指纹算法")])]),v._v(" "),_("p",[v._v("证书的内容的详细解释会在后面详细解释，这里先只需要搞清楚一点，****数字证书可以保证**数字**证书里的公钥确实是这个证书的所有者(Subject)的，或者证书可以用来确认对方的身份****。也就是说，我们拿到一个数字证书，我们可以判断出这个数字证书到底是谁的。至于是如何判断的，后面会在详细讨论数字证书时详细解释。现在把前面的通信过程使用数字证书修改为如下：")]),v._v(" "),_("p",[v._v("2.5 第五回合：")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器，这里是我的数字证书    //这里用证书代替了公钥")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：向我证明你就是服务器")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器 {你好，我是服务器}[私钥|RSA]")]),v._v(" "),_("p",[v._v("注意，上面第二次通信，“服务器”把自己的证书发给了“客户”，而不是发送公钥。“客户”可以根据证书校验这个证书到底是不是“服务器”的，也就是能校验这个证书的所有者是不是“服务器”，从而确认这个证书中的公钥的确是“服务器”的。后面的过程和以前是一样，“客户”让“服务器”证明自己的身份，“服务器”用私钥加密一段内容连同明文一起发给“客户”，“客户”把加密内容用数字证书中的公钥解密后和明文对比，如果一致，那么对方就确实是“服务器”，然后双方协商一个对称加密来保证通信过程的安全。到这里，整个过程就完整了，我们回顾一下：")]),v._v(" "),_("p",[v._v("2.6 完整过程：")]),v._v(" "),_("p",[_("strong",[v._v("step1")]),v._v("： “客户”向服务端发送一个通信请求")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：你好")]),v._v(" "),_("p",[_("strong",[v._v("step2")]),v._v("： “服务器”向客户发送自己的数字证书。证书中有一个公钥用来加密信息，私钥由“服务器”持有")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：你好，我是服务器，这里是我的数字证书")]),v._v(" "),_("p",[_("strong",[v._v("step3")]),v._v("： “客户”收到“服务器”的证书后，它会去验证这个数字证书到底是不是“服务器”的，数字证书有没有什么问题，数字证书如果检查没有问题，就说明数字证书中的公钥确实是“服务器”的。检查数字证书后，“客户”会发送一个随机的字符串给“服务器”用私钥去加密，服务器把加密的结果返回给“客户”，“客户”用公钥解密这个返回结果，如果解密结果与之前生成的随机字符串一致，那说明对方确实是私钥的持有者，或者说对方确实是“服务器”。")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：向我证明你就是服务器，这是一个随机字符串   //前面的例子中为了方便解释，用的是“你好”等内容，实际情况下一般是随机生成的一个字符串。")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：{一个随机字符串}[私钥|RSA]")]),v._v(" "),_("p",[_("strong",[v._v("step4")]),v._v("： 验证“服务器”的身份后，“客户”生成一个对称加密算法和密钥，用于后面的通信的加密和解密。这个对称加密算法和密钥，“客户”会用公钥加密后发送给“服务器”，别人截获了也没用，因为只有“服务器”手中有可以解密的私钥。这样，后面“服务器”和“客户”就都可以用对称加密算法来加密和解密通信内容了。")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：{OK，已经收到你发来的对称加密算法和密钥！有什么可以帮到你的？}[密钥|对称加密算法]")]),v._v(" "),_("p",[v._v("“客户”->“服务器”：{我的帐号是aaa，密码是123，把我的余额的信息发给我看看}[密钥|对称加密算法]")]),v._v(" "),_("p",[v._v("“服务器”->“客户”：{你好，你的余额是100元}[密钥|对称加密算法]")]),v._v(" "),_("p",[v._v("…… //继续其它的通信")]),v._v(" "),_("p",[v._v("2.7 其它问题：")]),v._v(" "),_("p",[v._v("上面的过程已经十分接近HTTPS的真实通信过程了，完全可以按照这个过程去理解HTTPS的工作原理。但是我为了方便解释，上面有些细节没有说到，有兴趣的人可以看下这部分的内容。可以跳过不看，无关紧要。")]),v._v(" "),_("p",[v._v("【问题1】")]),v._v(" "),_("p",[v._v("上面的通信过程中说到，在检查完证书后，“客户”发送一个随机的字符串给“服务器”去用私钥加密，以便判断对方是否真的持有私钥。但是有一个问题，“黑客”也可以发送一个字符串给“服务器”去加密并且得到加密后的内容，这样对于“服务器”来说是不安全的，因为黑客可以发送一些简单的有规律的字符串给“服务器”加密，从而寻找加密的规律，有可能威胁到私钥的安全。所以说，“服务器”随随便便用私钥去加密一个来路不明的字符串并把结果发送给对方是不安全的。")]),v._v(" "),_("p",[v._v("〖解决方法〗")]),v._v(" "),_("p",[v._v("每次收到“客户”发来的要加密的的字符串时，“服务器”并不是真正的加密这个字符串本身，而是把这个字符串进行一个hash计算，加密这个字符串的hash值(不加密原来的字符串)后发送给“客户”，“客户”收到后解密这个hash值并自己计算字符串的hash值然后进行对比是否一致。也就是说，“服务器”不直接加密收到的字符串，而是加密这个字符串的一个hash值，这样就避免了加密那些有规律的字符串，从而降低被破解的机率。“客户”自己发送的字符串，因此它自己可以计算字符串的hash值，然后再把“服务器”发送过来的加密的hash值和自己计算的进行对比，同样也能确定对方是否是“服务器”。")]),v._v(" "),_("p",[v._v("【问题2】")]),v._v(" "),_("p",[v._v("在双方的通信过程中，“黑客”可以截获发送的加密了的内容，虽然他无法解密这个内容，但是他可以捣乱，例如把信息原封不动的发送多次，扰乱通信过程。")]),v._v(" "),_("p",[v._v("〖解决方法〗")]),v._v(" "),_("p",[v._v("可以给通信的内容加上一个序号或者一个随机的值，如果“客户”或者“服务器”接收到的信息中有之前出现过的序号或者随机值，那么说明有人在通信过程中重发信息内容进行捣乱，双方会立刻停止通信。有人可能会问，如果有人一直这么捣乱怎么办？那不是无法通信了？ 答案是的确是这样的，例如有人控制了你连接互联网的路由器，他的确可以针对你。但是一些重要的应用，例如军队或者政府的内部网络，它们都不使用我们平时使用的公网，因此一般人不会破坏到他们的通信。")]),v._v(" "),_("p",[v._v("【问题3】")]),v._v(" "),_("p",[v._v("在双方的通信过程中，“黑客”除了简单的重复发送截获的消息之外，还可以修改截获后的密文修改后再发送，因为修改的是密文，虽然不能完全控制消息解密后的内容，但是仍然会破坏解密后的密文。因此发送过程如果黑客对密文进行了修改，“客户”和“服务器”是无法判断密文是否被修改的。虽然不一定能达到目的，但是“黑客”可以一直这样碰碰运气。")]),v._v(" "),_("p",[v._v("〖解决方法〗")]),v._v(" "),_("p",[v._v("在每次发送信息时，先对信息的内容进行一个hash计算得出一个hash值，将信息的内容和这个hash值一起加密后发送。接收方在收到后进行解密得到明文的内容和hash值，然后接收方再自己对收到信息内容做一次hash计算，与收到的hash值进行对比看是否匹配，如果匹配就说明信息在传输过程中没有被修改过。如果不匹配说明中途有人故意对加密数据进行了修改，立刻中断通话过程后做其它处理。")])])}),[],!1,null,null,null);_.default=t.exports}}]);
### 文档
```
https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/
```
# 第一小节 微信小程序入门

### 一、小程序和普通网页开发的区别

```
1、运行环境不同

2、API不同

	（1）小程序无法调用DOM和BOM的API

	（2）可以调用微信环境提供的各种API

		地理定位 、扫码、支付

3、开发模式不同

	（1）网页开发模式：浏览器 + 代码编辑器

  	（2）小程序有自己的一套标准开发模式：

		申请小程序开发账号

		安装小程序开发者工具

		创建和配置小程序项目

```

### 二、体验微信小程序

```markdown
微信搜索  小程序交互动画展示
```

### 三、注册小程序开发账号

```
1、点击注册按钮
	浏览器打开https://mp.weixin.qq.com 网页，点击注册，即可进入小程序开发账号的注册流程
```


### 四、获取小程序的APPID
```
微信小程序应用后台 =》开发 =》开发管理 =》开发设置 =》开发者ID

```

### 五、开发者工具
```
    1、功能
        （1）快速创建小程序项目
        （2）代码的查看和编辑
        （3）对小程序功能进行调试
        （4）小程序的预览和发布

    2、下载
        🔗 https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html

    3、安装步骤
        （1）windows系统： 安装路径最好选择默认安装路径 （无特殊选择，都是直接下一步，知道完成）
        （2）扫码登录

    4、设置小程序的外观和代理
        外观：设置 =》外观 =》浅色 =》字号：18 =》行距：12
        代理：不使用任何代理，勾选后直连网络

```

### 六、创建小程序项目
```
1、创建
    步骤一：点击 '+' 按钮
    步骤二：填写项目信息
        新建项目 =》目录 =》APPID =》语言服务：不使用云服务 + javascript =》确定

2、查看项目效果
    方法一：点击编译
    方式二：在真机上预览 =》预览按钮 =》扫描码

3、主界面的一些设置
    手机型号选择 iphone6/7/8 =》比例：85%
```

### 七、小程序代码的构成
```
    1、项目的基本组成结构
        pages：存放所有小程序的页面 ✅
            index：每个页面以单独的文件夹存在
                四个基本文件组成：
                    .js文件：页面的脚本文件，存放页面的数据，事件处理函数等
                    .json文件：当前页面的配置文件，配置窗口的外观、表现等
                    .wxml文件：页面的模版结构文件 - 标签
                    .wxss文件：当前页面的样式表文件
            logs 日志
        utils：存放工具性质的模块
        app.js 小程序项目的入口文件 ✅
        app.json：小程序项目的全局配置文件 ✅
        app.wxss：小程序项目的全局样式文件
        project.config.json：项目的配置文件
        sitemap.json：用来配置小程序及其页面是否允许被微信索引

    2、json配置文件的作用
        小程序当中有4种json配置文件，分别是：
        （1）项目根目录中的app.json配置文件
        （2）项目根目录中的project.config.json配置文件
        （3）项目根目录中的sitemap.json配置文件
        （4）每个页面文件夹中的.json配置文件

        2.1 app.json配置文件
            组成：所有页面路径 + 窗口外观 + 界面表现 + 底部tab 等
            pages：用来记录当前小程序所有页面的路径
            window：全局定义小程序所有页面的背景色、文字颜色等
            style：全局定义小程序组件所使用的样式版本
            sitemapLocation：用来知名sitemap.json的位置
        
        2.2 project.config.json配置文件
            用来记录对小程序开发工具所做的个性化配置
            setting：保存了编译相关的配置 （详情 =》本地设置里的设置）
            projectname： 项目名称
            appid： 小程序的账号ID

        2.3 sitemap.json
            用来配置小程序页面是否允许微信索引

            ⚠️：sitemap的所有提示是默认开启的，如需要关闭sitemap的索引提示（action: disallow），可在小程序项目配置文件project.config.json的setting中配置字段 checkSiteMap 为false

        2.4 页面的.json文件

            对本页面的窗口外观进行配置，页面中的配置项会覆盖app.json 的 window相同的配置项

```

### 八、新建小程序页面
```
	app.json -> pages中新增页面的存放路径，小程序开发者工具即可帮助我们自动创建对应的页面文件
```

### 九、修改项目首页
```
	只需要调整 app.json ->pages数组中页面路径的前后顺序，即可修改项目的首页。
	小程序会把排在第一位的页面，当做项目首页进行渲染
```

### 十、WXHL
```
	WXML：WeiXin Markup Language 是小程序框架设计的一套 标签语言 ，用来构建小程序页面的结构
	区别：
		（1）标签名称不同
			HTML：div span img a
			WXML：view：布局 text：文本 image navigation：导航跳转
		（2）属性节点不同
			<a href="#">超链接</a>
			<navigation url="/pages/home/home"></navigation>
		（3）提供了类似于Vue中的模板语法
			数据绑定
			列表渲染
			条件渲染

```

### 十一、WXSS样式
```
	WXSS: WeiXin Style Sheets 样式语言
	区别
		新增了rpx尺寸单位
			CSS中需要手动进行像素单位换算，例如rem
			WXSS在底层支持新的尺寸单位rpx，在不同大小的屏幕上小程序会自动进行换算
		提供了全局样式和局部样式
			项目根目录里的app.wxss会作用于所有小程序页面
			局部页面的.wxss样式进队当前页面生效
		WXSS仅支持部门CSS选择器
			.class和#id
			element
			并集选择器、后代选择器
			::after和::before等伪类选择器

```

### 十二、js文件
```
	app.js
		整个小程序项目的入口文件，调用APP()函数启动

	页面的.js文件
		页面的入口文件，调用Page()函数来创建并运行页面

	普通的.js文件
		普通的功能模块文件，用来封装公共的函数或属性供页面使用
```

# 第二节 小程序的宿主环境

### 一、什么是宿主环境
```
    1、宿主环境：host environment 程序运行所必须的依赖环境

    2、小程序的宿主环境 -- 手机微信
        包含内容
            通信模型
            运行机制
            组件
            API
    3、通信模型
        3.1 通信主体
            渲染层 和 逻辑层
            （1）WXML 和 WXSS样式工作在渲染层
            （2）js脚本工作在逻辑层
        3.2 通信模型
            （1）渲染层和逻辑层之间的通信 -》由微信客户端进行转发
            （2）逻辑层和第三方服务器之间的通信 -》由微信客户端进行转发

    4、运行机制
        4.1 启动过程
            把小程序的代码包下载到本地
            解析app.json全局配置文件
            执行app.js小程序入口文件，调用App()创建小程序实例
            渲染小程序首页
            小程序启动完成
        4.2 页面渲染过程
            加载并解析页面的.json配置文件
            加载页面的.wxml模板和.wxss样式
            执行页面的.js文件，调用Page()创建页面实例
            页面渲染完成

    5、组件
        小程序的组件也是由宿主环境提供的
        5.1 分类 前四个比较常用
          视图容器 
            view：普通试图区域（类似于div，块级元素） 用来实现页面的布局效果
            scroll-view 可滚动的师徒区域，实现滚动的列表效果
            swiper和swiper-item 轮播图的容器组件和轮播图的item组件
          基础内容
            text: 文本组件，类似于span标签，行内元素
            rich-text：富文本组件，支持把HTML字符串渲染为WXML结构
          表单组件
          导航组件
          媒体组件
          map地图组件
          canvas画布组件
          开放能力
          无障碍访问  

```

### 二、视图容器组件
```
    1、view组件的基本使用
        <view class="container1">
            <view>A</view>
            <view>B</view>
            <view>C</view>
        </view>

    2、croll-view的基本使用
        纵向滚动 scroll-y（必须有一个固定高度） 横向滚动 scroll-x
        <scroll-view class="container1 container2" scroll-y>
            <view>A</view>
            <view>B</view>
            <view>C</view>
        </scroll-view>

    3、swiper和swiper-item
        <swiper class="swiper-container">
            <swiper-item>
                <view class="item">A</view>
            </swiper-item>
            <swiper-item>
                <view class="item">B</view>
            </swiper-item>
            <swiper-item>
                <view class="item">C</view>
            </swiper-item>
        </swiper>
        常用属性
            indicator-dots  boolean，   显示面板指示点
            indicator-color             指示点颜色
            indicator-active-color      当前选中的指示点颜色
            autoplay        boolean     是否自动切换
            interval        number      自动切换时间
            circular        boolean     是否采用衔接滑动

```

### 三、基础内容组件
```
    1、text
        selectable：可以实现长按选中文本内容的效果
            <view>
                手机号支持长按选中效果
                <text selectable>13232323232</text>
            </view>

    2、rich-text
        nodes：可以把HTML字符串渲染为对应的UI结构
            <rich-text nodes="<h1 style='color: red;'>这是标题</h1>"/>

```

### 四、其他常用组件
```
    1、button
        open-type：可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）

    2、image
        默认宽高，宽约 300px 高约 240px
        mode：用来指定图片的裁剪和缩放模式
            scaleToFill：默认值，不包吃纵横比缩放图片，使图片的宽高完全拉伸至填满image元素
            aspectFit：缩放模式，保持纵横比缩放图片，使图片的场边能完全显示出来，也就是说，可以完整的将图片显示出来
            aspectFill：缩放模式，保持纵横比缩放图片，只保持图片的短边能完全显示出来，也就是说，图片只在水平或者垂直方向是完整的，另一个方向会发生截取
            widthFiX：缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
            heightFix：缩放模式，高度不变，宽度自动变化，保持原图宽高比不变

    3、navigator（后续专讲）
```

### 5、小程序中的API
```
    1、分类
        事件监听API
            （1）on开头，用来监听某些事件的触发
            （2）举例：wx.onWindowResize(function, callback)监听窗口尺寸的变化

        同步API
           以 Sync结尾的API都是同步API
           同步API的执行结果，可以通过函数返回值直接获取，如果执行出错会抛出异常
           举例：wx.setStorageSync('key', 'value')向本地存储中写入内容 

        异步API
            类似于jQuery中的 $.ajax(options)函数，需要通过success，fall，complete接受调用的结果
            举例：wx.request()发起网络数据请求，通过success回调函数接收数据
```

# 第三节、微信小程序的协同工作和发布

### 一、权限管理，组织架构，开发流程

### 二、小程序成员管理

### 三、小程序发布上线
```
    1、上传代码
        点击开发者工具顶部工具栏中的 上传 按钮
        填写版本号以及项目备注
    2、后台查看上传之后的版本
        登录小程序管理后台 -》管理 -》版本管理 -》开发版本
    3、发布
```

### 四、小程序码的获取
```
    小程序管理后台 -》设置 -》基本设置 -》基本信息 -》小程序码及线下物料下载
```

# 第四节 微信小程序基础

### 一、了解数据绑定的原则
```
    1、在data中定义数据 
        页面对应的.js文件，把数据定义到data对象中即可
            data: {
                info: 'hello world',
                imgSrc: 'https://www.itheima.com/images/logo.png',
                randomNum1: Math.random() * 10, // 生成10以内的数字
                randomNum: Math.random().toFixed(2)
            },
        
    2、在WXML中使用数据
        Mustache语法格式（双大括号）
            应用场景
                绑定内容 <view>{{ info }}</view>
                绑定属性 <image src="{{ imgSrc }}" mode="widthFix"/>
                运算（三元运算、算数运算等）
                 三元运算：<view>{{ randomNum1 >= 5 ? '数字大于或等于5' : '数字小于5'}}</view>
                 算数运算：<view>{{ randomNum * 100 }}</view>

```

### 二、事件绑定
```
    1、事件的定义
        渲染层到逻辑层的通讯方式
    2、常用的事件
        类型                        绑定方式                            事件描述
        tap                         bindtap 或 bind:tap                 手指触摸后马上离开，类似于HTML中的click事件
        input                       bindinput或bind:input               文件框的输入事件
        change                      bindchange或bind:change             状态改变时触发
    
    3、事件对象的属性列表
        当事件回调触发的时候，会收到一个事件对象event，详细属性如下：
        属性                        类型                                说明
        type                        String                              事件类型
        timeStamp                   Integer                             页面打开到触发事件所经过的毫秒数
        target                      Object                              触发事件的组件的一些属性集合  ✅
        currentTarget               Object                              当前组件的一些属性值集合
        detail                      Object                              额外的信息 ✅
        touches                     Array                               触摸事件，当前停留在屏幕中的触摸点信息的数组
        changedTouches              Array                               触摸事件，当前变化的触摸点信息数组

    4、target和currentTarget的区别
        target  
            触发该事件的源头组件
        currentTarget
            当前事件所绑定的组件
        举例：
            <view class="outer-view" bindtap="outerHandler">
                <button type="primary">按钮</button>
            </view>
            点击按钮，点击事件以 冒泡 的方式向外扩散，也会触发外层 view 的tap事件处理函数。
            此时，对于外层的view来说：
                e.target：指向的是触发事件的源头组件，因此，e.target是内部的按钮组件
                e.currentTarget：指向的是当前正在触发事件的那个组件，因此，e.currentTarget是当前的view组件
    
    5、bindtap 的语法格式
        wxml：
            <button type="primary" bindtap="btnTapHandler">按钮</button>
        js：
             // 定义按钮的事件处理函数
            btnTapHandler(e) {
                console.log(e);
            },
    6、在事件处理函数中为data中的数据赋值
        通过调用this.setData(dataObject)方法，可以给页面data中的数据重新赋值
        js:
            Page({
                data: {
                    count: 0
                },
                changeCount() {
                    this.setData({
                        count: this.data.count + 1
                    })
                }
            })
        
    7、事件传参
        不能在绑定事件的同时为事件处理函数传递参数
            这种不能正常工作： => 会把bindtap的属性值，统一当做事件名称来处理，相当于要调用一个名称为btnTapHandler(123)的事件处理函数
                <button type="primary" bindtap="btnTapHandler(123)">按钮</button>

            解决方式：
                为组件提供data-* 自定义属性传参，其中 * 代表的是参数的名字  不加 {{}}的话为字符串
                    <button type="primary" bindtap="btnHandler" data-info="{{2}}">按钮</button>
                    最终：
                        info：被解析为参数的名字
                        2：被解析为参数的值
                在事件处理函数中，通过event.target.dataset.参数名 =》 可以获取到具体参数值
                    btnHandler(event) {
                        // dataset 是一个对象，包含了所有通过 data-* 传递过来的参数项
                        console.log(event.target.dataset)
                        console.log(event.target.dataset.info)
                    }

    8、bindinput
        （1）语法形式
            wxml:
                <input bindinput="inputHandler"></input>
            js:
                inputHandler(e) {
                    console.log(e.detail.value) // e.detail.value是变化后的值，文本框最新的值
                }
        （2）文本框和data之间的数据同步
            步骤一：data里定义数据
                data: {
                    msg: '您好'
                }
            步骤二：渲染结构
                <input value="{{msg}}" bindinput="iptHandler"></input>
            步骤三：美化样式
            步骤四：绑定input事件处理函数
                iptHandler(e) {
                    this.setData({
                        msg: e.detail.value
                    })
                }


```

### 五、条件渲染
```
    1、wx:if
        使用 wx:if="{{confition}}" 来判断是否需要渲染该代码块，也可以用 wx:elif 和 wx:else 来添加else判断

        举例：
            <view wx:if="{{type === 1}}">男</view>
            <view wx:elif="{{type===2}}">女</view>
            <view wx:else>保密</view>
    
    2、结合<block>使用 wx:if
        如果要 一次性控制多个组件的展示与隐藏， 可以使用一个 <block></block>标签将多个组件包装起来，并在<block>标签上使用 wx:if 控制属性

        <block wx:if="{{true}}">
        <view>view1</view>
        <view>view2</view>
        </block>

        注意：block并不是组件，他只是一个包裹性质的容器，不会在页面中做任何渲染

    3、hidden
        hidden="{{condition}}" 也能控制元素的显示与隐藏  true =》隐藏 false =》显示

    4、wx:if和hidden的区别
        wx:if：动态创建和衣橱元素的方式，控制元素的展示和隐藏
        hidden：切换元素的样式（display:none/block）控制元素的显示和隐藏

        使用建议：
            频繁切换时，建议使用 hidden
            控制条件复杂时，建议使用wx:if

```

### 六、列表渲染
```
    1、wx:for
        <view wx:for="{{array}}">
            索引是：{{index}} 当前项是:{{item}}
        </view>

    2、手动指定索引和当前项的变量名
        wx:for-index 可以指定当前循环项的索引的变量名
        wx:for-item 可以指定当前项的变量名
        <view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
            索引是：{{idx}} 当前项是:{{itemName}}
        </view>

    3、wx:key的使用
        直接填充key值即可，不用打括号添加
```

# 第五节 微信小程序进阶

### 一、wxss 样式语言 - 扩展特性
```
    1、rpx尺寸单位
    2、@import样式导入
```

### 二、rpx尺寸单位
```
    1、rpx: responsive pixel    是微信小程序独有的，用来解决屏适配的尺寸单位

    2、实现原理
        宽度等分 750 份（即当前屏幕的总宽度为750rpx
        在较小的屏幕上，1rpx 代表的宽度 较小
        在较大的屏幕上，1rpx 代表的宽度较大
    
    3、rpx与px之间的单位换算
```

### 三、@import样式导入
```
    1、@import语法
        @import 样式表的相对路径;
```

### 四、全局样式和局部样式
```
    1、全局样式
        app.wxss
    2、局部样式
        页面的.wxss

        注意点：当全局样式和局部样式发生冲突时，就近原则，局部样式会覆盖全局样式
               当局部样式的权重大于或等于全局样式的权重时，才能覆盖全局的样式
```

### 五、全局配置
```
    根目录下的app.json文件是小程序的全局配置文件
    窗口的组成部分：上 -》下
        navigationBar 导航栏区域
        background 背景区域 默认不可见，下拉才显示
        页面的主体区域 用来显示wxml 中的布局

    1、常用的全局配置项
        （1）window
                属性名                          类型                    默认值                  说明
            导航栏：
            navigationBarTitleText            String                 字符串                导航栏标题文字内容
            navigationBarBackgroundColor      HexColor	             #000000              导航栏背景颜色，如 #000000
            navigationBarTextStyle            String                 white                导航栏标题、状态栏颜色，仅支持 black / white
            页面：
            backgroundColor                   HexColor               #ffffff              窗口的背景色 => 设置下拉刷新时窗口背景色	
            backgroundTextStyle               String                 dark                 下拉 loading 的样式，仅支持 dark / light
            其他：
            enablePullDownRefresh             Boolean                false                是否开启全局的下拉刷新 => 下拉刷新：手指在屏幕上的下拉滑动操作，从而呢重新加载页面数据的行为
            onReachBottomDistance             number                  50                  页面上拉触底事件触发时距页面底部距离，单位为 px =》 上拉触底：手指在屏幕上的上拉滑动，从而加载更多数据的行为 (不建议修改) 

        （2）tabBar

            是移动端应用常见的页面效果，用于实现多页面的快速切换
                position
                    底部tabBar
                    顶部tabBar

            注意点：
                配置最少2个，最多5个tab页签 --- list
                当渲染顶部tabBar时，不显示icon，只显示文本
            
            组成部分
                backgroundColor：tabBar 的背景色
                selectediconPath：选中时的图片路径
                borderStyle：tabBar上边框的颜色
                iconPath：未选中时图片的路径
                selectedColor：tab上的文字选中时的颜色
                color：tab上文爱默认（未选中）颜色

            节点配置项
                属性                            类型                            必选                默认值              描述
             position                         String                           否                 bottom            tabBar位置，仅支持bottom/top
             borderStyle                      String                           否                 black             tabBar上边框的默认颜色，仅支持 black/white 
             color                           HexColor                          否                                   tabBar上文字的默认（未选中）颜色
            selectedColor                    HexColor                          否                                   tabBar上文字选中时的颜色
            backgroundColor                  HexColor                          否                                   tabBar的背景色
                list                         Array                             是                                   tab页签的列表，最少2ge最多5个    

            每个tab项的配置选项（list）
                属性                            类型                            必选               描述                   
              pagePath                        String                           是                页面路径，页面必须在pages中预先定义
               text                           String                           是                tab上显示的文字
              iconPath                        String                           否                未选中时的图标路径
          selectedIconPath                    String                           否                选中时的图标路径

          例子：
            "tabBar": {
                "list": [{
                    "pagePath": "pages/home/home",
                    "text": "首页",
                    "iconPath": "/images/tabs/home.png",
                    "selectedIconPath": "/images/tabs/home-active.png"
                    },{
                    "pagePath": "pages/message/message",
                    "text": "消息",
                    "iconPath": "/images/tabs/message.png",
                    "selectedIconPath": "/images/tabs/message-active.png"
                    },{
                    "pagePath": "pages/contact/contact",
                    "text": "联系我们",
                    "iconPath": "/images/tabs/contact.png",
                    "selectedIconPath": "/images/tabs/contact-active.png"
                }]
            },
        注意：topBar的pages必须放在前面

```

### 六、页面配置
```
    1、常用的配置项
        见全局配置中的window，但是是针对页面设置的
```


# 第六节 数据请求

### 一、小程序中网络数据请求的限制
```
    1、处于安全性方面的考虑，小程序官方对数据接口的请求作出了如下：
        （1）只能请求HTTPS类型的接口
        （2）必须将接口的域名添加到信任列表
```

### 二、配置request合法接口
```
    1、步骤：
        （1）登录微信小程序管理后台
        （2）开发
        （3）开发设置
        （4）服务器域名
        （5）修改request合法域名
    2、注意事项⚠️
        （1）域名只支持https协议
        （2）域名不能使用IP地址或localhost
        （3）域名必须经过ICP备案
        （4）一个月内最多可修改5次
```

### 三、发起请求
```
    1、GET请求
        wx.request({
            url: 'https://api.jisuapi.com/flower/query',
            method: 'GET',
            data: {
                name: '牡丹',
                code: 34
            },
            success: (res) => {
                console.log('res', res);
            }
        })

    2、POST请求
        wx.request({
            url: 'https://heimahr.itheima.net/api/sys/login',
            method: 'POST',
            data: {
                isAgree: true,
                mobile: '13800000002',
                password: "hm#qd@23!"
            },
            success: (res) => {
                console.log('res', res);
            }
        })
    
    3、在页面刚加载的时候请求数据
        onLoad事件中调用获取数据的函数 --- 生命周期函数--监听页面加载

    4、跳过request合法域名校验
        仅限开发调试阶段使用 =》微信开发者工具 =》详情 =》本地设置 =》临时开启 【开发环境不校验请求域名、TLS版本一级HTTPS整数】选项

    5、网络数据请求
        跨域 只存在 基于浏览器的web开发中 =》小程序不存在跨域问题
        Ajax 依赖于 浏览器中的 XMLHttpRequest 对象 =》小程序不能叫做 “发起Ajax请求” 而是叫做 “发起网络数据请求”
```


# 第七节 微信小程序页面导航

### 一、页面导航
```
    页面之间的相互跳转
    1、小程序中实现页面导航的两种方式
        （1）声明式导航
            ▪️ 在页面上声明一个 <navigator> 导航组件
            ▪️ 通过点击 <navigator> 组件实现页面跳转
        （2）编程式导航
            ▪️ 调用小程序的导航API，实现页面的跳转

    2、声明式导航
        （1）导航到tabBar页面 =》指的是被配置为tabBar的页面
            实现方式：
                <navigator> =》确定 url + open-type 属性
                    url：要跳转到的页面地址，必须 /开头
                    open-type：跳转的方式，必须为switchTab
            页面结构 wxml：
                <navigator url="/pages/message/message" open-type="switchTab">导航到消息页面</navigator>

         (2) 导航到非tabBar页面
                <navigator> =》确定 url + open-type 属性
                    url：要跳转到的页面地址，必须 /开头
                    open-type：跳转的方式，必须为navigate ==》导航到非tabBar页面时，可以省略

            页面结构 wxml
                <navigator url="/pages/info/info" open-type="navigate">导航到info页面</navigator>

        （3）后退导航
            后退到上一页/多级页面，需要指定 open-type 属性 和 delta 属性
                open-type：必须等于 navigateBack 表示要进行后退导航
                delta：值必须数字，表示后退的层级 ==》  如果是后退到上一页面，可以省略delta，因为默认值就是 1

            页面结构 wxml
                <navigator open-type="navigateBack">后退</navigator>
                 <navigator open-type="navigateBack" delta="1">后退</navigator>
        
        (4) 导航传参 =》路径的后面还可以携带参数
            ✅ 参数与路径之间使用 ? 分隔
            ✅ 参数键与参数值用 = 相连
            ✅ 不同参数用 & 分隔

            <navigator url="/pages/info/info?name=zs&age=20">跳转到info页面</navigator>

    3、编程式导航
        （1）导航到tabBar页面
            调用 wx.switchTab(Object object)方法，可以跳转到tabBar页面，其中 Object 参数对象的属性列表如下
               url：           string        必选      需要跳转的tabBar页面的路径，路径后不能带参数
               success：       function      不必选    窗口调用成功的回调函数
               fail            function      不必选    窗口调用失败的回调函数
               complete        function      不必选    接口调用结束的回调函数（调用成功，失败都会执行）

            页面结构 wxml
                <button bindtap="goToMessage">跳转到message页面</button>
            js文件
                goToMessage() {
                    wx.switchTab({
                        url: '/pages/message/message',
                    })
                },
        
        （2）跳转到非tabBar页面
            调用 wx.navigateTo(Object object)方法，调转到非tabBar页面，Object参数对象
               url：           string        必选     需要跳转到非tabBar页面的路径
               success：       function      不必选    窗口调用成功的回调函数
               fail            function      不必选    窗口调用失败的回调函数
               complete        function      不必选    接口调用结束的回调函数（调用成功，失败都会执行）

         (3) 后退
            调用 wx.navigateBack(Object object)方法，后退到上一页/多级页面，Object参数对象          
               delta：         number     默认值：1   必选项    返回的页面数，如果delta大于现有页面数，也返回首页
               success：       function              不必选    窗口调用成功的回调函数
               fail            function              不必选    窗口调用失败的回调函数
               complete        function              不必选    接口调用结束的回调函数（调用成功，失败都会执行）
               
               页面结构 wxml
                    <button bindtap="goBack">返回</button>
               js文件
                    goBack() {
                        wx.navigateBack()
                    },

        (4) 导航传参
            调用 wx.navigateTo(Object object)方法，跳转页面时，也可以携带参数
            wx.navigateTo({
                url: '/pages/info/info?name=ls&gender=男'
            })

    4、在 onLoad 中接收导航参数
        通过声明式导航传参和编程式导航传参所携带的参数，可以在onLoad事件中直接获取
            onLoad(options) {
                // options 就是导航传递过来的参数对象
            },
 
```

### 二、页面事件
```
    1、下拉刷新 =》重新加载页面数据
        方式一：全局开启下拉刷新
            app.json =》window节点中 =》enablePullDownRefresh: true

        方式二：局部开启下拉刷新 （推荐）
            页面.json =》enablePullDownRefresh: true
    
        （1）、配置下拉刷新窗口的样式
            backgroundColor：下拉刷新窗口的背景颜色
            backgroundTextStyle：下拉刷新loading样式 dark和light两种
    
        （2）、监听页面的下拉刷新事件
            页面的 .js 文件中，通过onPullDownRefresh() 函数 即可监听当前页面的下拉刷新事件

        （3）、停止下拉刷新的效果
            处理完 下拉刷新页面，下拉刷新的loading 效果会一直显示，不会主动消失，所以需要手动隐藏loading效果
            =》调用 wx.stopPullDownRefresh() 停止
    
    2、上拉触底事件 =》加载更多数据 =》分页效果
        (1) 监听上拉触底事件
            页面的 .js 文件 =》onReachBottom()函数
        
        (2) 配置上拉触底的距离
            onReachBottomDistance 默认值 50

        (3) 添加loading
            wx.showLoading(Object object) 显示 loading 提示框 =》 需主动调用 wx.hideLoading 才能关闭提示框
            ![Alt text](image-1.png)

        (4) 对上拉触底进行节流处理
            步骤一：在data中定义 isLoading 节流阀
                false：表示当前没有进行任何数据请求
                true：表示当前在进行数据请求

            步骤二：在下拉触底调用的函数中，修改isLoading节流阀的值
                刚调用函数时，将节流阀重置为 true
                在网络请求的complete回调函数中，将节流阀重置为 false

            步骤三：在 onReachBottom()中判断节流阀的值，从而对数据请求进行节流控制
                如果节流阀为true，则阻止当前请求
                如果节流阀的值为false，则发起数据请求

    3、扩展 - 自定义编译模式
        重新编译后，还处在修改页面
            普通编译下拉菜单 =》添加编译模式 =》定制启动页面 和 启动参数

```

### 三、生命周期
```
    1、生命周期的分类

        应用生命周期
            特指小程序 从 启动-》运行-》销毁的过程

        页面生命周期
            特指小程序中，每个页面的加载 =》渲染 =》销毁的过程

    2、生命周期函数 =》 自动按次序执行

        (1) 作用：允许程序员 在特定的时间点，执行某些特定的操作
    
        (2) 分类
            应用生命周期函数
                需要在 app.js 中进行声明，示例代码如下
                    App({
                        // 小程序初始化完成时，执行此函数，全局只触发一次，可以做一些 初始化工作
                        onLaunch() {},          ☑️
                        // 小程序启动，或从后台进入前台显示时触发
                        onShow() {},
                        // 小程序从前台进入后台时触发
                        onHide() {}
                    })
            页面生命周期函数
                页面.js 文件
                    Page({
                        onLoad(options) {}, //监听页面加载 一个页面只调用一次 - 获取页面初始数据               ☑️
                        onShow() {}, // 监听页面显示
                        onReady() {},  // 监听页面初次渲染完成 一个页面只调用一次   设置页面内容：设置导航条文本 ☑️
                        onHide() {},   // 监听页面隐藏
                        onUnload() {}  // 监听页面卸载 一个页面只调用一次
                    })


```

### 四、wxs
```
    1、什么是wxs（WeiXin Script）是小程序独有的一套脚本，结合 WXML ，可以构建出页面的结构
        WXML 中 无法调用在 页面.js 中定义的函数，但是wxml 可以调用wxs中定义的函数， =》wxs典型的应用场景：“过滤器”

    2、wxs
        （1）有自己的数据类型
            number string boolean object function array date regexp

        （2）不支持类似于ES6及以上的语法形式
            不支持 let const 解析赋值 展开运算符 箭头函数 对象属性简写
            支持 var定义变量 普通function 函数类似于ES5的语法

        （3）遵循CommonJS规范
            module 对象
            require() 函数
            module.exports 对象
    
    3、内嵌的 wxs 脚本
        wxs 代码 可以编写在wxml 的 <wxs> 标签内 =》必须提供module 属性，指定当前wxs 的模块名称

        wxml:

            <view>{{m1.toUpper(username)}}</view>

            <wxs module="m1">
                module.exports.toUpper = function(str) {
                    return str.toUpperCase()
                }
            </wxs>
        
    4、定义外联的wxs脚本
        （1）定义在 以 .wxs 为后缀名的文件内
            function toLower(str) {
                return str.toLowerCase()
            }

            module.exports = {
                toLower: toLower() // 不能简写
            }
        （2）使用
            wxml中使用 外联的wxs 脚本时，必须 <wxs> 标签添加 module 和 src 属性
                module 指定模块的名称
                src 指定要引入的脚本的路径 且必须 是相对路径
                    <view>{{m2.toLower(country)}}</view>
                    <wxs src="../../utils/tools.wxs" module="m2"/>

    5、wxs的特点
        （1）不能作为组件的事件回调
            这种用法错误：
                <button bindtap="m2.toLower"></button>
         (2) 隔离性
            wxs的运行环境和其他javascript代码是隔离的
                wxs 不能调用js中定义的函数
                wxs 不能调用小程序提供的API
        （3）性能好
            IOS          wxs 》javascript 2～20倍
            andriod      wxs 和 js 运行效率五差异

```

# 第八节、微信小程序组件和样式

## 第一小节 自定义组件

### 一、自定义组件
```
    1、创建组件
        步骤一：在项目根目录中，鼠标右键，创建 components =》test 文件夹
        步骤二：在新建的components =》test 文件夹中，鼠标右键，点击 新建Component
        步骤三：键入组件的名称之后回撤，会自动生成组件对应的4个文件，后缀名分别为 .js .json .wxml .wxss

    2、引用组件：局部引用 和 全局引用
        局部引用：组件只能在当前被引用的页面内使用
            在 页面的.json 配置文件中引用组件的方式
            例子：如home.json
                {
                    "usingComponents": {
                        "my-test1": "/components/test/test"
                    }
                }
                home.wxml
                    <my-test1></my-test1>

        全局引用：组件可以在每个小程序页面中使用
            在 app.json 全局配置文件中引用组件
                方式同上
    
    3、全局引用和局部引用场景 根据引用频率和范围决定

    4、组件和页面的区别
        （1）组件的.json文件中需要声明 component: true属性
        （2）组件的.js文件中调用的是Component() 函数
            (3) 组件的事件处理函数需要定义到 methods节点
```

### 二、自定义组件的样式
```
    1、特点：组件样式隔离
        注意点
            app.wxss 中的全局样式对组件无效
            只有 class 选择器会有样式隔离效果，id选择器、属性选择器、标签选择器不受样式隔离的影响
        
        建议：在组件和引用组件的页面中 建议使用 class选择器，不要使用 id、属性、标签选择器

    2、修改组件的样式隔离选项
        使用 styleIsolation  修改组件的样式隔离选项
            isolated：启用样式隔离      自定义组件内外，使用class指定的样式将不会相互影响
            apply-shared：页面wxss样式将影响到自定义组件，但自定义组件wxss中指定的样式不会影响页面
            shared 页面wxss 和 自定义组件wxss 相互影响

        方式一：在组件.js 文件中
            Component({
                options: {
                    styleIsolation: 'isolated' 
                }
            })
        方式二：在组件.json文件中
            {
                styleIsolation: 'isolated' 
            }
```

### 三、自定义组件 - 数据、方法和属性
```
    1、data数据

    2、methods方法
        在小程序组件中，事件处理函数 和 自定义方法(建议以 _ 开头) 需要定义到 methods节点 中
    
    3、properties属性
        （1）组件的对外属性，用来接收外界传递到组件中的数据， 类似于vue的props

        （2）使用 setData 修改 properties属性

    4、data和properties的区别
        在小程序的组件中，用法相同，他们都是可读可写的
```

### 四、自定义组件 - 数据监听器
```
    1、什么是数据监听器
        监听和响应任何属性和数据字段的变化，从而执行特定的操作，类似于vue中的 watch
            Component({
                observers: {
                    '字段A, 字段B': function(字段A的新值, 字段B的新值) {
                        // do something
                    }
                }
            })
    
    2、监听对象属性的变化
        Component({
            observers: {
                '对象.字段A, 对象.字段B': function(属性A的新值, 属性B的新值) {
                    // 触发此监听器的3个情况
                    // 为属性A赋值
                    // 为属性B赋值
                    // 直接为对象赋值
                }
            }
        })

        🌰：
        "rgb.r, rgb.g, rgb.b": function(r, g, b) {
            this.setData({
                fullColor: `${r}, ${g}, ${b}`
            })
        },

        (1) 监听对象中所有属性的变化
            通配符： **

        🌰：
            "rgb.**": function(obj) {
                this.setData({
                    fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
                })
            },
```

### 五、自定义组件 - 纯数据字段
```
    1、定义：
        不用于界面渲染的data字段，也不会传递给其他组件
    
    2、好处：纯数据字段 有助于提升页面更新的性能

    3、使用规则
        在Component构造器的 options 节点中，指定 pureDataPattern 为一个正则表达式，字段名符合这个正则表达式的字段将成为纯数据字段
        Component({
            options: {
                pureDataPattern: /^_/  // 表示以 _开头的都是纯数据字段
            },
            data: {
                _rgb: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                fullColor: '0, 0, 0'
            },
        })
```

### 六、自定义组件 - 组件的生命周期
```
    1、 生命周期函数
        created         无参数          在组件实例刚刚被创建时执行               ☑️
        attached        无参数          在组件实例进入页面节点树时执行           ☑️
        ready           无参数          在组件在试图层布局完成后执行
        moved           无参数          在组件实例被移动到节点树另一个位置时执行
        detached        无参数          在组件实例被从页面节点树移出时执行        ☑️
        error           Object Error   每当组件方法抛出错误时执行

        (1)、主要的生命周期函数
            （1）created
                此时不能调用 setData
                通常在这个生命周期函数中，只应该用于给组件的this添加一些自定义的属性字段
            （2）attached =》这个比较常用
                完全初始化完毕，进入页面节点树后
            （3）detached
                离开页面节点树
                退出页面时
                适合做一些清理性质的工作

        (2)、定义组件的生命周期函数
            lifetimes 节点 =》推荐用法
                Component({
                    lifetimes: {
                        created() {
                            console.log('created');
                        },
                        attached() {
                            console.log('attached');
                        },
                    },
                })

    2、组件所在页面的生命周期
        （1）定义
            自定义组件的行为依赖于 页面状态的变化 此时就需要用到 组件所在页面的生命周期
        
        (2) 举例
            每当触发页面的 show 生命周期函数的时候，希望能够重新生成一个随机的RGB颜色值

        (3) 组件所在页面的生命周期函数有如下3个
            show        无参数          组件所在页面被展示时执行
            hide        无参数          组件所在页面被隐藏时执行
            resize      Object size    组件所在页面尺寸发生变化时执行
        
        (4) 组件所在页面的生命周期
            pageLifetimes节点
                Component({
                    pageLifetimes: {
                        show() {
                            console.log('show');
                        },
                        hide() {
                            console.log('hide');
                        },
                        resize() {
                            console.log('resize');
                        }
                    },
                })


```

### 七、自定义组件 - 插槽
```
    wxml中， <slot>节点，用于承载组件使用者提供的wxml结构

        1、单个插槽 （默认）
            🌰
            组件
                <view>
                    <view>
                        这里是组件的内部结构
                        <slot></slot>
                    </view>
                </view>

            使用组件：
                <my-test4>
                    <view>
                        这是通过插槽填充的内容
                    </view>
                </my-test4>                

        2、启用多个插槽
            (1) 在组件的.js文件中，配置
                Component({
                    options: {
                        multipleSlots: true, // 启用多个插槽
                    }
                })    

            (2) 定义多个插槽
                组件
                    <view>
                        <slot name="before"></slot>
                        <view>这里是组件的内部结构</view>
                        <slot name="after"></slot>
                    </view>
                
                使用组件：
                    <my-test4>
                        <view slot="before">11111111</view>
                        <view slot="after">22222222</view>
                    </my-test4>

```

### 八、自定义组件 - 父子组件之间的通信
```
    一、通信方式
        1、属性绑定
            用于父组件向子组件的 指定属性 设置数据， 仅能设置 JSON 兼容的数据 （普通类型的数据）

        2、事件绑定
            子组件向父组件传递数据，可以传递任意数据

        3、获取组件实例
            父组件 还可以通过 this.selectComponent() 获取子组件实例对象
            这样就可以直接 访问 子组件的任意数据和方法
    
    二、属性绑定
        父组件：
            wxml
                <my-test5 count="{{count}}"></my-test5>
        子组件：
           js:
                Component({
                        /**
                        * 组件的属性列表
                        */
                        properties: {
                            count: Number
                        }
                }) 
            其他使用方式相同

    三、事件绑定
        （1）步骤：
            ① 在父组件.js 中， 定义一个函数， 这个函数 即将 通过自定义事件的形式，传递给子组件
                syncCount() {
                    console.log('syncCount', this.data.count);
                },

            ② 在父组件.wxml 中，通过自定义事件的形式， 将 步骤1 中定义的函数引用， 传递给子组件
                <my-test5 count="{{count}}" bind:sync="syncCount"></my-test5>

            ③ 在子组件.js 中， 通过调用 this.triggerEvent(‘自定义事件名称, {参数对象})，将数据发送到父组件
                addCount() {
                    this.setData({
                        count: this.properties.count + 1
                    })
                    // 触发自定义事件，将数值同步给父组件
                    this.triggerEvent('sync', {value: this.properties.count})
                },

            ④ 在 父组件.js 中， 通过 e.detail 获取子组件传递的数据
                syncCount() {
                    console.log('syncCount', this.data.count);
                    this.setData({
                        count: e.detail.value
                    })
                },

    四、获取组件实例
        父组件 this.selectComponent(id或class选择器)
            wxml:
                <button bindtap="getChild">获取子组件的实例</button>
                <my-test5 count="{{count}}" bind:sync="syncCount" class="customA" id="cA"></my-test5>
            
            js:
                  getChild() {
                        const child = this.selectComponent('.customA')
                        // 修改子组件的值
                        // child.setData({
                        //   count: child.properties.count + 1
                        // })
                        // 调用子组件的方法
                        child.addCount()
                    },

```

### 九、自定义组件 - behaviors
```
    一、什么是 behaviors
        小程序中， 用来实现组件间代码共享 的特性， 类似于 vue 的 "mixins"

    二、behaviors 的工作方式
        每个 behavior 可以包含一组 属性、 数据、 生命周期函数和方法。 组件引用它时， 它的属性、数据和 方法 会被合并的 组件中
        ⚠️ 每个组件可以引用多个 behavior， behavior也可以引用 其他behavior

    三、创建 behavior
        调用Behavior(Object object) 方法即可创建一个共享的behavior实例对象，供所有的组件使用
        根目录下：Behavior->behavior.js:
            module.exports = Behavior({
                data: {
                    username: 'zs',
                },
                properties: {},
                methods: {}
            })
    
    三、导入并使用behavior
        组件中，使用require() 导入需要的behavior，  挂载后即可访问behavior 中的数据和方法
        （1）导入
            const myBehavior = require('../../behavior/my-behavior')
        （2）挂载
            Component({
                behaviors: [myBehavior],
            })
    四、behavior可用的节点
        properties  Object Map          是否必填：否        同组件的属性            ☑️          
        data        Object              否                  同组件的数据           ☑️
        methods     Object              否                 同自定义组件的方法       ☑️
        behaviors   String Array        否                 引入其他的behavior      ☑️
        created     Function            否                  生命周期函数
        attached    Function
        ready       Function
        moved
        detached    Function            否                  生命周期函数

    五、同名字段的覆盖 和 组合规则
        1、同名的数据字段(data)
        2、同名的属性(properties)或方法(methods)
        3、同名的生命周期函数

        https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html

        
```


## 第二小节 使用npm包

### 一、小程序对 npm 的支持和限制
```
    1、限制
        不支持依赖于node.js内置库的包
        不支持依赖于浏览器内置对象的包
        不支持依赖于C++ 插件的包
```

### 二、Vant Weapp
```
    1、含义
        小程序UI组件库，类似于 vue 的element
        https://youzan.github.io/vant-weapp/#/home

    2、安装步骤
        （1）通过npm安装 1.3.3
            npm i @vant/weapp@1.3.3 -S --production
        （2）构建npm包
            打开微信开发者工具，点击 工具 -> 构建 npm，并勾选 详情 -》本地设置 -》 使用 npm 模块 选项，构建完成后，即可引入组件。
        （3）修改app.json
            将 app.json 中的 "style": "v2" 去除，小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。
    
    3、使用vant组件
        app.json -》usingComponents 节点中添加需要的组件
            "usingComponents": {
                "van-button": "@vant/weapp/button/index"
            }
            <van-button type="default">按钮</van-button>

    4、定制全局主题样式
        使用CSS变量 实现
        https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties
        https://youzan.github.io/vant-weapp/#/theme
        （1）定义
            以 -- 开始
        （2）引用
            局部变量时用 var() 函数包裹
```

## 三、微信小程序全局数据共享
```
    一、全局数据共享 - 状态管理
    
    二、小程序中的全局数据共享方案
        使用 mobx-miniprogram 配合 mobx-miniprogram-bindings 实现全局数据共享
        1、mobx-miniprogram 创建Store 实例对象
        2、mobx-miniprogram-bindings 把 Store中的共享数据或方法， 绑定到组件或页面中使用

    三、安装MobX相关包
        npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1
    
    四、使用MobX
        步骤一：创建MboX 的 Store 实例
            根目录下 -》store文件夹 =》store.js，如下所示
                import { observable, action } from 'mobx-miniprogram'
                export const store = observable({
                    // 数字字段
                    numA: 1,
                    numB: 2,

                    // 计算属性
                    get sum() {
                        return this.numA + this.numB
                    },
                    // actions函数，用来修改store中的数据
                    updateNum1: action(function(step) {
                        this.numA += step
                    }),
                    updateNum2: action(function(step) {
                        this.numB += step
                    })
                });
        方式一：页面
            步骤二：将Store中的成员 <font color=red>绑定到页面</font> 中  （页面.js）
                （1）导入需要的成员
                    import { createStoreBindings } from 'mobx-miniprogram-bindings'
                    import { store } from '../../store/store'
                （2）页面 onLoad中进行绑定
                    onLoad: function (options) {
                        // this store映射
                        this.storeBindings = createStoreBindings(this, {
                            store, // 数据源
                            fields: ['numA', 'numB', 'sum'], // 需要绑定的数据字段或计算属性
                            actions: ['updateNum1'],  // 需要的方法
                        })
                    },
                （3）页面 onUnload中 清理
                    onUnload: function () {
                        this.storeBindings.destroyStoreBindings()
                    },
            步骤三：在页面中使用 Store
                wxml:
                    <view>{{numA}} + {{numB}} = {{sum}}</view>
                    <van-button type="primary" bindtap="btnHandler1" data-step="{{1}}">numA + 1</van-button>
                    <van-button type="danger" bindtap="btnHandler1" data-step="{{-1}}">numA - 1</van-button>

                js:
                    btnHandler1(e) {
                        // console.log('ok', e);
                        this.updateNum1(e.target.dataset.step);
                    },

        方式二：组件
            步骤二：将Store 中的成员 <font color=red>绑定到组件</font> 中
               （1）导入需要的成员
                    import { storeBindingsBehavior } from "mobx-miniprogram-bindings"
                    import { store } from "../../store/store"
                (2) 提供behaviors 数据
                    Component({
                        behaviors: [storeBindingsBehavior],
                    })
                (3) 绑定
                    Component({
                        storeBindings: {
                            // 数据源
                            store,
                            // 绑定数据字段和计算属性
                            fields: {
                                numA: 'numA',
                                numB: 'numB',
                                sum: 'sum'
                            },
                            // 方法
                            actions: {
                                updateNum2: 'updateNum2',
                            },
                        },
                    })
            步骤三：在组件中使用Store成员
                组件.wxml
                    <van-button type="primary" bindtap="btnHandler1" data-step="{{1}}">numA + 1</van-button>
                    <van-button type="danger" bindtap="btnHandler1" data-step="{{-1}}">numA - 1</van-button>     
                组件.js
                     Component({
                        methods: {
                            btnHandler2(e) {
                                this.updateNum2(e.target.dataset.step)
                            }
                        }
                     })      

```

### 四、定制全局主题样式
```
    方法：在app.wxss中 =》写css变量
        page {
            --button-danger-background-color: #C00000;
            --button-danger-border-color: #D60000;
        }
    参考变量
        https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less


```

### 五、API Promise化
```
    1、基于回调函数的异步API的缺点
        wx.request()
        容易造成 回调地狱 的问题， 代码的可读性、维护性差

    2、API Promise化
        （1）含义
            是指通过额外的配置，将官方提供的、基于回调函数的异步API， 升级改造为 基于 Promise的异步API
        （2）实现
            依赖于  miniprogram-api-promise 第三方包
        （3）安装
            npm install --save miniprogram-api-promise@1.0.4
         (4) 使用
            在小程序入口文件 app.js 只需要调用一次promisifyAll()方法
            =>即可实现异步API 的Promise 化
                import {promisifyAll} from "miniprogram-api-promise"
                const wxp = wx.p = {}
                promisifyAll(wx, wxp)
        （5）调用Promise化后的异步API
            home.wxml 
                <van-button type="primary" bindtap="getInfo">主要按钮</van-button>
            home.js
                async getInfo() {
                    const { data: res } = await wx.p.request({
                        method: 'GET',
                        url: 'https://applet-base-api-t.itheima.net/api/get',
                        data: {
                            name: 'zs',
                            age: 20
                        }
                    })
                },
```

## 第三讲 分包

###  一、基础概念
```
    1、概念
        把一个完整的小程序 =》按需求 =》划分成不同的子包 =》构建时，打包成不同的分包 =》用户在使用时 按需进行加载

    2、好处
        （1）优化小程序首次启动的下载时间
        （2）多团队共同开发时，可以更好的解耦协作

    3、分包前后项目构成
        （1）分包前
            所有页面 和 资源 都被打包一起 =》 项目体积大 =》影响小程序首次启动的下载时间
        （2）分包后
            1 个主包  + 多个分包
                主包：一般只包含项目启动页面 或 tabBar页面 以及 所有分包都需要用到的一些公共资源
                分包：只包含和当前分包有关系的页面和私有资源
    
    4、分包的加载规则
        （1）在小程序启动时，默认会 下载主包并启动主包内页面
            tabBar页面需要放到主包中
        （2）当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示
            非tabBar页面可以按照功能的不同，划分为不同的分包之后，进行按需下载

    5、分包的体积限制
        （1）整个小程序所有分包大小不超过16M（主包 + 所有分包）
        （2）单个分包/主包大小不能超过2M

    6、分包 配置方法
        ![Image text](https://img2022.cnblogs.com/blog/2744118/202203/2744118-20220329222809829-798254303.png)
        
        在 app.json 的 subpackages 节点中声明分包的结构
        ![Image text](https://img2022.cnblogs.com/blog/2744118/202203/2744118-20220329222809855-1300366905.png)

        "subPackages": [
            {
                "root": "pkgA",
                "pages": [
                    "pages/cat/cat",
                    "pages/dog/dog"
                ]
            },
            {
                "root": "pkgB", // 分包的根路径
                "name": "p2", // 分包的别名

                "pages": [
                    "pages/apple/apple"
                ],
                "independent": true // 独立分包
            }
        ],
    
        分包体积 =》 详情 =》基本信息 =》本地代码

    7、分包的打包原则
        （1）小程序 会按照 subpackages 的配置进行分包， subpackages 之外的目录将被打包到主包中
        （2）主包也可以有自己的 pages（即最外层的pages字段）
        （3）tabBar 页面 必须在主包内
        （4）分包之间不能互相嵌套

    8、分包的 引用原则
        （1）主包 无法引用分包内的 私有资源
        （2）分包之间 不能相互引用 私有资源
        （3）分包 可以引用主包内的 公共资源

```
    
### 二、独立分包
```
    1、含义
        本质上也是分包， 比较特殊， 可以独立于主包和其他分包而单独运行

    2、独立分包 和 普通分包 的区别
        最主要的区别：是否一览于主包才能运行
        （1）普通分包：必须依赖于主包才能运行
        （2）独立分包：可以不在下载主包的情况下，独立运行

    3、独立分包的应用场景
        开发者可以按需，将某些具有一定功能独立性的页面配置到独立分包中
            （1）当小程序从普通的分包页面启动时，需要首先下载主包
            （2）独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度

        注意: 一个小程序中可以有多个独立分包。
    
    4、独立分包的配置方法
        ![Image text](https://img2022.cnblogs.com/blog/2744118/202203/2744118-20220329222809898-308629074.png)
        通过 independent声明 独立分包 见 基础概念 6小节

    5、引用原则
        独立分包 和 普通分包 以及 主包， 是 相互隔绝的， 不能互相引用彼此的资源
            （1）主包 无法引用 独立分包内的私有资源
            （2）独立分包之间 不能相互 引用私有资源
            （3）独立分包 和 普通分包之间 不能相互引用 私有资源

        特别注意:  独立分包中不能引用主包内的公共资源

```

### 三、分包预下载
```
    1、含义
        进入小程序某个页面时， 由框架自动预下载 可能需要的分包 从而提升进入后续分包页面时的启动速度

    2、配置分包预下载
        app.json=》preloadRule 

          "preloadRule": {
                "pages/contact/contact": { // 触发分包预下载的页面路径
                    // network 表示在指定的网络模式下进行预下载
                    // 可选值： all（所有网络） 和 wifi（仅wifi模式下进行预下载 - 默认值）
                    "network": "all", 
                    // packages 表示进入页面后，预下载哪些分包
                    // 可以通过root 或 name 指定 预下载哪些分包
                    "packages": ["pkgA"]
                }
            },

    3、分包预下载的限制
        （1）同一个分包中的页面 享有 共同的预下载大小限制 2M
           ![Image text](https://img2022.cnblogs.com/blog/2744118/202203/2744118-20220329222809866-2125409044.png)
```

## 第四讲 自定义tabBar

```
    一、实现步骤
        1、配置信息
        2、添加tabBar 代码文件
        3、编写tabBar代码

        https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html

```

### 一、配置信息
```
    ▪️ 在 app.json 中的 tabBar 项指定 custom 字段， 同时其余 tabBar 相关配置也补充完整
```

### 二、添加添加tabBar 代码文件
```
    在代码根目录下 创建 custom-tab-bar文件夹（不能改名字）=》新建组件 index（名称也不能改）
```

### 三、编写tabBar代码
```
    custom-tab-bar/index.wxml:
        使用Vant https://youzan.github.io/vant-weapp/#/tabbar

    解决图标样式问题：徽标超出范围
        https://youzan.github.io/vant-weapp/#/custom-style
```






# sitemap相关
```
    注：sitemap 的索引提示是默认开启的，如需要关闭 sitemap 的索引提示，可在小程序项目配置文件 project.config.json 的 setting 中配置字段 checkSiteMap 为 false
    注: sitemap 文件内容最大为 5120 个 UTF8 字符
```

# 补充知识
```
一、场景值：wx.getLaunchOptionsSync()
```






# uniapp

## 第一节 uni-app和项目搭建

### 一、安装scss/sass编译
```
    https://ext.dcloud.net.cn/plugin?name=compile-node-sass

```

### 二、个性化定制
```
    1、快捷键方案切换
        工具 -》预设快捷键方案切换-》VS code

    2、修改编辑器的基本设置
        工具 -》设置 -》打开setting.json 按需进行配置

        源码视图下 可用的参数配置
            {
                "editor.colorScheme": "Default",
                "editor.fontSize": 12,
                "editor.fontFamily": "Consolas",
                "editor.fontFmyCHS": "微软雅黑 Light",
                "editor.insertSpaces": true,
                "editor.lineHeight": "1.5",
                "editor.minimap.enabled": false,
                "editor.mouseWheelZoom": true,
                "editor.onlyHighlightWord": false,
                "editor.tabSize": 2,
                "editor.wordWrap": true,
                "explorer.iconTheme": "vs-seti",
                "editor.codeassist.px2rem.enabel": false,
                "editor.codeassist.px2upx.enabel": false
            }
```

### 三、了解uni-app项目的目录结构
```
    page.json   配置页面路径、页面窗口样式、tabBar、navigationBar 等页面类信息
    manifest.json   配置应用名称、appid、logo、版本等打包信息
    App.vue     应用配置、用来配置小程序的全局样式、生命周期函数等
    main.js     vue初始化入口文件
    static      静态资源的牡蛎，静态资源只能存放在此
    pages
        index
            index.vue   页面
    components  组件目录
```

### 四、把项目运行带微信开发者工具
```
    步骤一：填写自己的微信小程序的AppID
        manifest.json -》微信小程序配置  

    步骤二：HBuilderX中，配置 微信开发者工具 的安装路径
        工具 -》设置 -》运行配置
    
    步骤三：微信开发者工具中，通过  设置-》安全设置面板，开启 微信开发者工具 的 服务端口

    步骤四：HBuilderX 点击 菜单栏中的 运行-》运行到小程序模拟器 -》微信开发者工具， 将当前 uni-qpp
    项目 编译之后，自行运行到 微信开发者 工具 中，从而 方便查看项目效果 和 调试
```

### 五、配置checkSiteMap 选项
```
    manifest.json => 源码视图 => "mp-weixin" =>setting => "checkSiteMap": false
```

### 六、使用git管理项目
```
    步骤一：本地管理
        项目根目录 =》新建 .gitignore忽略文件，并配置
            /node_modules
            /unpackage/dist
        注意：忽略了unpackage目录中仅有的dist目录，因此默认情况下，unpackage目录不会被git
        =》让git能够正常追踪unpackage，按照惯例，新建文件 unpackage/.gitkeep 的文件进行占位
    
    步骤二：
        git init
        git add .
        git commit -m 'init'
```

### 七、实现tabBar效果
```
    步骤一：创建tabBar对应组件
        1、pages目录上，鼠标右键，选择 新建页面
        2、弹出窗，填写 页面的名称、勾选scss模板，点击创建
    步骤二：配置tabBar效果
        1、根目录中的 pages.json，新增 tabBar 配置节点
```

### 八、修改导航条的样式
```
    步骤一：pages.json 配置文件
    步骤二：globalStyle 节点
        "globalStyle": {
            "navigationBarTextStyle": "white",
            "navigationBarTitleText": "黑马优购",
            "navigationBarBackgroundColor": "#C00000",
            "backgroundColor": "#F8F8F8",
            "app-plus": {
                "background": "#efeff4"
            }
        },
```

# 第二节、首页功能实现

## 一、配置网络请求
```
    原因：平台限制，小程序项目不支持 axios， 而且原生的 wx.request() API功能较为简单
        不支持拦截器等全局定制的功能 =》 使用 @escook/request-miniprogram 封装网络请求

    官网地址：https://www.npmjs.com/package/@escook/request-miniprogram

    步骤一：初始化npm 
        npm init -y

    步骤二：安装
        npm i @escook/request-miniprogram

    步骤三：导入
        import { $http } from '@escook/request-miniprogram'
        uni.$http = $http
        // 请求拦截器
        $http.beforeRequest = function(options) {
            uni.showLoading({
                title: '数据加载中...'
            })
        }
        // 响应拦截器
        $http.afterRequest = function() {
            uni.hideLoading()
        }
```

## 二、首页 --- 轮播图
```
    一、轮播图
        见 home页面

    二、配置小程序分包
        目的：分包可以减少 小程序首次 启动时的加载事件

        tabBar四个页面放在主包， 其他页面（商品详情页、商品列表页等）分包

        uniapp分包步骤如下：
            步骤一：项目根目录下，创建分包的根目录， 命名为 subpkg

            步骤二：在page.json 中， 和 pages 节点平级 的位置声明 subPackages节点，
                用来定义分包相关结构
                    "subPackages": [
                        {
                            "root": "subpkg",
                            "pages": [
                                {
                                    "path" : "goods_detail/goods_detail",
                                    "style" : {}
                                }
                            ]
                        }
                    ],
            
            步骤三：在subpkg 目录上 鼠标右键， 点击 新建页面 选项， 并填写页面的相关信息
    
    三、点击轮播图跳转到商品详情页面

    四、封装uni.$showMsg()方法
        目的：简化uni.showToast()
        实现：
            步骤一：main.js，为uni对象挂载自定义的 $showMsg()方法
                uni.$showMsg = function(title = '数据请求失败', duration = 1500) {
                    uni.showToast({
                        title,
                        duration,
                        icon: 'none'
                    })
                }
            步骤二：后续直接调用uni.$showMsg([可选参数])方法

```

## 三、首页 - 分类导航区
```

```

## 四、首页 - 楼层区域
```

```

# 第三节 分类页面
```
    一、动态设置scroll-view组件的高度
        使用 uni.getSystemInfoSync()

    二、一次选中多个相同东西 进行编辑： ctrl + D 不松开

    三、切换分类时，重置滚动条位置
        scroll-view 组件绑定scroll-top属性

    四、点击三级分类，跳转到商品列表页面

```

# 第四节 自定义搜索
```
   一、实现搜索自动获取焦点
    修改uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue 或者 components->uni-search-bar->uni-search-bar.vue(老版本) 
        把data数据中 的 show和 showSync 的值 从默认的false改为true

    二、实现搜索框的防抖

    三、数据持久化
        步骤一：调用uni.setStorageSync('kw', 存储的值)，数据存储到本地
        步骤二：onLoad生命周期函数中，加载本地存储的数据
            JSON.parse(uni.getStorageSync('kw') || '[]')
```

# 项目中遇到的知识点
```
 1、富文本
    rich-text组件 属性 nodes 渲染html标签

 2、商品导航区域效果
    GoodsNav 组件
    https://uniapp.dcloud.net.cn/component/uniui/uni-goods-nav.html

 3、配置vuex
    创建store文件夹 =》store.js

4、为batBar设置数字徽标
    步骤一：需要设置tabBar徽标页面，在刚显示出来的时候，在onShow()中调用方法
    步骤二：通过uni.setTabBarBadge({
        index: 2, // 索引
        text: '' // 设置的值，是字符串类型
    })
5、NumberBox
    <uni-number-box></uni-number-box>

6、滑动删除的UI效果
    uni-swipe-action 和 uni-swipe-action-item 需要同时使用

7、选择收货地址
    chooseAddress() API 实现选择收货地址功能

8、微信用户登录API
    微信登录换取token


9、小程序的发布
    （1）发行 -> 小程序-微信(仅适用于uni-app)
    （2）弹出窗中填写要发布的小程序名称 和 Appid -》 点击发行按钮
    （3）HBuilder控制台 中 查看小程序发布编译的进度
    （4）发布编译之后，会自动打开一个新的微信开发者工具界面 -》点击工具栏上 的 上传按钮
    （5）填写版本号 和 项目备注， 点击 上传 按钮
    （6）上传完成之后， 出现如下信息， 直接点击确定按钮即可
            包含上传成功信息
    （7）微信开发者工具 -》版本管理的开发版本列表中
    （8）将 开发版本 提交审核 -》再将 审核通过的版本发布上线 
```








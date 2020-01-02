/* 
    1-IE和标准下有哪些兼容性的写法
        var ev = ev || window.event
        document.documentElement.clientWidth || document.body.clientWidth
        Var target = ev.srcElement||ev.target
    2-如何阻止事件冒泡和默认事件
        在vue中使用stop和prevent阻止，再react或原生的js中通过ev.cancelBbuble和ev.stopPropagation阻止冒泡使用ev.preventDefault或者return false阻止默认事件
    3-dom操作
        创建：createElement|createTextNode|createDocumentFrament
        增加：appendChild|insertBefore
        删除：removeChild
        改：replaceChild
        查：querySelector|getElementById|getElementsByClassName|getElementsByTagName
    4-js延迟加载的方式
        动态创建dom|async和defer|按需载入
    5-flash和ajax的异同点
        flash主要用于多媒体和质量图形、机器访问，对css和文本的处理能力不足，且对seo不友好
        ajax主要用于css和文本处理，支持搜索
        在无刷新下与服务器进行通讯
    6-使用this的典型场景
        call和apply|new|事件绑定
    7-判断类型
        typeof|constructor
    8-标准模式和怪异模式的区别
        盒模型：标准模式下的和模型的height指的是content，怪异模式下则包含了border和内边距
        overflow：标准情况下溢出但不撑开，怪异下撑开父盒子
    9-cache的作用
        减少延迟，让你的网站更快，提高用户体验。
        避免网络拥塞，减少请求量，减少输出带宽。
    10-选择器的权重
        !important--style--id--class|伪类|属性-标签|伪元素--通配符|后代
*/
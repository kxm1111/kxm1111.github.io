// 自执行
(function () {
    // alert('自执行函数');
    const user = {};
    // 窗口
    const w = {};
    // 获取窗口的高度与宽度
    w.innerWidth = ['窗口的文档显示区的宽度', window.innerWidth];
    w.innerHeight = ['窗口的文档显示区的高度', window.innerHeight];
    w.outerWidth = ['窗口的外部宽度，包含工具条与滚动条', window.outerWidth];
    w.outerHeight = ['窗口的外部高度，包含工具条与滚动条', window.outerHeight];
    w.name = ['存放窗口的名称', window.name];
    console.log('window（窗口）：', w);
    user.window = ['窗口', w];
    // 文档
    const d = {};
    d.documentElement = {};
    d.body = {};
    d.documentElement.clientWidth = ['客户端宽度', document.documentElement.clientWidth];
    d.documentElement.clientHeight = ['客户端高度', document.documentElement.clientHeight];
    d.body.clientWidth = ['客户端宽度', document.body.clientWidth];
    d.body.clientHeight = ['客户端高度', document.body.clientHeight];
    d.domain = ['当前文档的服务器域', document.domain];
    d.URL = ['当前文档的 URL', document.URL];
    d.title = ['当前文档的标题', document.title];
    console.log('document（文档）：', d);
    user.document = ['文档', d];
    // 客户端显示屏幕的信息
    const s = {};
    s.availHeight = ['屏幕的高度（不包括Windows任务栏）', screen.availHeight];
    s.availWidth = ['屏幕的宽度（不包括Windows任务栏）', screen.availWidth];
    s.colorDepth = ['目标设备或缓冲器上的调色板的比特深度', screen.colorDepth];
    s.height = ['屏幕的总高度', screen.height];
    s.pixelDepth = ['屏幕的颜色分辨率（每象素的位数）', screen.pixelDepth];
    s.width = ['屏幕的总宽度', screen.width];
    console.log('客户端显示屏幕的信息', s);
    user.s = ['客户端显示屏幕的信息', s];
    // 浏览器的信息
    const n = {};
    // "浏览器代号: " + navigator.appCodeName
    n.appCodeName = ['浏览器代号', navigator.appCodeName];
    // ("浏览器名称: " + navigator.appName);
    n.appName = ['浏览器名称', navigator.appName];
    // ("版本信息: " + navigator.appVersion);
    n.appVersion = ['版本信息', navigator.appVersion];
    // ("是否启用 Cookie: " + navigator.cookieEnabled);
    n.cookieEnabled = ["是否启用 Cookie", navigator.cookieEnabled];
    // ("硬件平台: " + navigator.platform);
    n.platform = ['硬件平台', navigator.platform];
    // ("用户代理: " + navigator.userAgent);
    n.userAgent = ['用户代理', navigator.userAgent];
    // 位置
    n.geolocation = {};
    n.geolocation.position = {};
    n.geolocation.position.coords = {};
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
        // "纬度: " + position.coords.latitude +
        //  "经度: " + position.coords.longitude;
        n.geolocation.position.coords.latitude = position.coords.latitude;
        console.log("纬度: " + position.coords.latitude);
        n.geolocation.position.coords.longitude = position.coords.longitude;
        console.log("经度: " + position.coords.longitude);
    }
    // 浏览器使用的语言
    n.language = ['浏览器使用的语言', navigator.language];
    // 判断浏览器是否在线
    n.onLine = ['判断浏览器是否在线', navigator.onLine];
    // 浏览器引擎
    n.product = ['浏览器引擎', navigator.product];
    console.log('navigator（浏览器的信息）：', n);
    user.navigator = ['浏览器的信息', n];
    // 所有用户信息
    console.log('用户信息：', user);
    // 定时器
    setInterval(() => {
        // 
        const url = 'https://chat.baidu.com/aichat/longtask/list';
        fetch(url)
            // 解析 JSON 数据
            .then(response => console.log(response.json()))
            // 处理数据
            .then(data => console.log(data))
            // 错误处理
            .catch(error => console.error('Error:', error));
    }, 11);
})();
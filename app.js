//app.js
const yy = require('./utils/Promise.js');

//引入加密解密文件
// const CryptoJS = require('./utils/encrypt.js');


App({
    appData: {
        code: ''
    },
    Console(title,val){
        console.log(`%c ${title} `, "border:1px solid #e1e1e8; color:#07c160;font-weight: bolder;font-size:25px;", val);
    },
    onLaunch: function() {
        //登录
        yy.getSetting({ // getSetting用来检验小程序已经向用户请求过的权限
                withSubscriptions: true
            })
            .then(res => {
                this.Console('授权状态',res);
                if (res.authSetting['scope.userInfo']) { //如果请求过了 "userInfo"
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    return yy.login({});
                } else {
                    yy.reLaunch({
                        url: '/pages/getInfo/getInfo',
                    })
                    throw 'not login';
                }
            })

            .then(res => {
                //保存code
                this.appData.code = res.code;
                return yy.getUserInfo({})
            })

            .then(res => {
                this.Console('登录授权', res);
                this.globalData.userInfo = res.userInfo;

                // 可以将 encryptedData、iv、code 发送给后台解码出 unionId
                return yy.request({
                    url: `${this.globalData.ip.kjb}${this.globalData.requestName.login}`,
                    method: "POST",
                    data: {
                        code: this.appData.code,
                        iv: res.iv,
                        encryptedData: res.encryptedData
                    }
                })
            })
            .then(res => {  //得到登录请求响应
                this.Console('登录数据', res);
                if (res.data.code === 200) {    // code 200 ->登录成功
                    this.globalData.status.userData = true;
                    if (this.getInfoReadyCallback) {
                        this.getInfoReadyCallback(res.data.data);
                    }
                    this.globalData.userData = res.data.data;
                    // yy.showToast({
                    //     title: '登陆成功',
                    // })
                }else{
                    throw 'err'
                }
            })
            .catch(res=>{

            })

    },
    globalData: {
        userInfo: null,
        signUpInfo: null,
        userData: null,
        ip: {
            //康俊彬IP
            kjb: 'https://hzbzzz.top'
        },
        requestName: {

            signUp: '/user/signUp',
            getArticle: '/article/listArticle',
            specificArticle: '/article/getArticle',
            commentArticle: '/article/comment',
            agree: '/article/agree',
            login: '/user/login',
            progressRes:'/user/getInterviewSchedule'
        },
        errorMsg: {},
        status: {
            userData: false,
            progressChange:false
        }
    }
})

// wx.loadFontFace({
//     family: 'HYQiHei-55S',
//     source: 'url("https://github.com/YulRW/MyFont/blob/master/HYQiHei-55S.otf?raw=true")',
//     desc:{
//         style:"italic"
//     },
//     success: res => {
//         console.log('字体加载完成');
//         wx.showToast({
//             title: '字体加载完成',
//         })
//     },
//     fail:res=>{
//         console.log("字体加载失败");
//         wx.showToast({
//             title: '字体加载失败',
//         })
//     }

// })


// {
//     "pagePath": "pages/thread/thread",
//         "text": "文章",
//             "iconPath": "/assets/images/tabbar/messageBoard.png",
//                 "selectedIconPath": "/assets/images/tabbar/messageBoard_a.png"
// },
// pages/signUp/signUp.js
const app = getApp();
const g = app.globalData;
const yy = require('../../utils/Promise.js');


Page({

    /**
     * 页面的初始数据
     */
    data: {
        signUpInfo: {
            username: '',
            number: '',
            gender: '',
            phone: '',
            wechatNumber: '',
            college: '请选择',
            major: '请选择',
            direction: "1",
            gpa: '',
            introduce: "",

        },
        errorMessage: {
            username: '',
            number: '',
            phone: '',
            gpa: '',
            introduce: "",
        },
        //学院
        collegeData: ["计算机学院",
            "自动化学院",
            "信息工程学院",
            "机电工程学院",
            "轻工化工学院",
            "土木与交通工程学院",
            "材料与能源学院",
            "环境科学与工程学院",
            "外国语学院",
            "物理与光电工程学院",
            "生物医药学院"
        ],
        collegePopShow: false,
        collegeSelect: '',
        collegeSelectAfter: false,

        //专业
        majorData: [],
        majorAllData: [
            ['软件工程', '计算机科学与技术', '网络工程', '信息安全'],
            ["自动化", "数据科学与大数据技术", "电气工程及其自动化", "物联网工程"],
            ["信息工程", "通信工程", "电子信息工程", "	集成电路设计与集成系统"],
            ["机械电子工程", "测控技术与仪器", "工业工程", "包装工程", "数字媒体技术", "车辆工程", "机械设计制造及其自动化"],
            ["化学工程与工艺", "应用化学", "食品科学与工程"],
            ["土木工程", "道路桥梁与渡河工程", "城市地下空间工程", "给排水科学与工程", "建筑环境与能源应用工程", "工程管理", "测绘工程", "交通运输"],
            ["材料成型及控制工程卓越工程师班", "材料类创新班", "新能源材料与器件", "微电子科学与工程", "金属材料工程", "能源与动力工程", "高分子材料与工程", "材料成型及控制工程"],
            ["安全工程", "环境生态工程", "环境科学", "环境工程"],
            ["日语", "商务英语", "英语", "翻译"],
            ["电子科学与技术", "光电信息科学与工程"],
            ["生物工程", "制药工程"]
        ],
        majorPopShow: false,
        majorSelect: '',
        majorSelectAfter: false,


        //提示文字颜色
        placeholderColor: "",

        //textarea的提示信息
        textareaPH: "",

        //绩点
        gpa: undefined,

        disabled: false,



    },
    //姓名输入-验证
    handleUsername(e) {

        this.setData({
            'signUpInfo.username': e.detail
        })

        let re = /^[\u4e00-\u9fa5]{2,6}$/;

        if (!re.test(e.detail) && e.detail != '') {
            this.setData({
                'errorMessage.username': "请输入真实姓名"
            })
        } else {
            this.setData({
                'errorMessage.username': ""
            })
        }


    },
    //学号输入-验证
    handleNumber(e) {
        this.setData({
            'signUpInfo.number': e.detail
        })

        this.handleGender(e.detail);

        let re = /^3[12]1900\d{4}$/;

        if (!re.test(e.detail) && e.detail != '') {
            this.setData({
                'errorMessage.number': "请输入正确的学号"
            })
        } else {
            this.setData({
                'errorMessage.number': ""
            })
        }
    },
    //性别判断
    handleGender(val) {
        let re1 = /^311900\d{4}$/;
        let re2 = /^321900\d{4}$/;
        if (re1.test(val)) {
            this.setData({
                'signUpInfo.gender': '男'
            })
        } else if (re2.test(val)) {
            this.setData({
                'signUpInfo.gender': '女'
            })
        } else {
            this.setData({
                'signUpInfo.gender': 'error'
            })
        }
    },
    //手机号输入-验证
    handlePhone(e) {
        this.setData({
            'signUpInfo.phone': e.detail
        })
        let re = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

        if (!re.test(e.detail) && e.detail != '') {
            this.setData({
                'errorMessage.phone': "请输入正确的手机号"
            })
        } else {
            this.setData({
                'errorMessage.phone': ""
            })
        }
    },
    handlewechatNumber(e) {
        this.setData({
            'signUpInfo.wechatNumber': e.detail
        })
    },
    // -----学院-----
    //学院选择的弹出层弹出
    handleCollege() {
        this.setData({
            textareaPH: " ",
            collegePopShow: true
        })
    },
    // 学院选择的选择器
    handleCollegeSelect(event) {
        let {
            picker,
            value,
            index
        } = event.detail;
        let temp = this.data.majorAllData[index];
        this.setData({
            collegeSelectAfter: true,
            collegePopShow: false,
            'signUpInfo.college': value,

            //重新选择新专业
            'signUpInfo.major': "请选择",
            majorSelectAfter: false,
            //把所选的学院对应的专业写入对象中
            majorData: temp,
        })

    },
    collegePopClose() {
        this.setData({
            collegePopShow: false,
        })
    },
    collegePopleave() {
        this.setData({
            textareaPH: this.data.signUpInfo.introduce
        })
    },

    // -----专业-----
    //专业选择的弹出层弹出
    handleMajor() {
        if (this.data.collegeSelectAfter === false) {
            yy.showToast({
                title: "请先选择学院",
                icon: "none"
            })
            return;
        }
        this.setData({
            textareaPH: " ",
            majorPopShow: true
        })
    },
    // 专业选择的选择器
    handleMajorSelect(event) {
        let {
            picker,
            value,
            index
        } = event.detail;
        this.setData({
            majorSelectAfter: true,
            majorPopShow: false,
            'signUpInfo.major': value,
        })

    },
    majorPopClose() {
        this.setData({
            majorPopShow: false,
        })
    },
    majorPopleave() {
        this.setData({
            textareaPH: this.data.signUpInfo.introduce
        })
    },

    //方向 函数
    handleDirection(e) {
        this.setData({
            'signUpInfo.direction': e.target.dataset.name
        })
    },
    onClickGPAIcon() {
        yy.showToast({
            title: "例: 3.5",
            icon: "none"
        })
    },
    //自我介绍输入/验证
    headleIntroduce(e) {
        this.setData({
            'signUpInfo.introduce': e.detail
        })
    },

    //绩点输入-验证
    handleGPA(e) {
        this.setData({
            'signUpInfo.gpa': e.detail
        })
        let re = /^\d+$|^\d*\.\d+$/g;

        if ((e.detail < 0) || (e.detail > 5) || !re.test(e.detail)) {
            this.setData({
                'errorMessage.gpa': "请输入正确的绩点"
            })
        } else {
            this.setData({
                'errorMessage.gpa': ""
            })
        }
    },

    //发起报名
    signUpBtn() {
        //遍历对象,检查是否有出错
        let obj = this.data.signUpInfo;
        let errorObj = this.data.errorMessage;
        console.log('你当前的用户id为:', g.userData.id)

        //判空和判错
        if (this.signUpIsNull(obj) === 'error') {
            yy.showToast({
                title: '请填写完整信息',
                icon: 'none'
            })
            return;
        }
        if (this.signUpIsError(errorObj) === 'error') {
            yy.showToast({
                title: '请填写正确信息',
                icon: 'none'
            })
            return;
        }

        let info = this.data.signUpInfo;

        let data = {
            weChatNumber: info.wechatNumber,
            schoolNumber: info.number,
            phone: info.phone,
            college: info.college,
            gender: info.gender,
            major: info.major,
            name: info.username,
            direction: Number(info.direction),
            selfIntroduction: info.introduce,
            gpa: Number(info.gpa), // 绩点选填
            openId: g.userData.openId,
            userId: g.userData.id
        }

        //获取发送IP地址
        let url = g.ip.kjb + g.requestName.signUp
        yy.request({
                url: url,
                method: 'POST',
                data: data
            })
            .then(res => {
                if (res.data.code !== 200) {
                    //出错
                    throw 'err'
                }

                return yy.showModal({
                    title: '报名成功',
                    content: '面试进度和后续通知可以在 “我的”--“面试进度” 里查看，请留意。建议点击“消息订阅”，有通知后会在微信里发出',
                    showCancel: false,
                    confirmText: "订阅消息",
                    confirmColor: "#0f4c81"
                });
            })

            .then(res => {
                //清空输入框
                this.clearInput();

                //禁止再次报名
                this.setData({
                    disabled: true
                })
                app.globalData.status.progressChange = true;

                if (res.confirm) {
                    return yy.requestSubscribeMessage({
                        tmplIds: ['MSZh8bVBbQbTNgr8sJGXh3WQiX57E7tvRBg_sATsJBY', 'gbSdXrEZ6f1QVcTAQIwBEhcOMr8EdvMKfAAZ8Xal4mY']
                    })
                } else {
                    throw 'err'
                }
            })
            .then(res => {
                if (res.errMsg == 'requestSubscribeMessage:ok') {
                    // return yy.showToast({
                    //     title: '消息订阅成功',
                    // })
                } else {
                    throw 'err'
                }
            })
            .catch(res => {
                g.errorMsg = res;
            })
    },
    //判空
    isnull(val) {
        let _val = val.toString();
        var str = _val.replace(/(^\s*)|(\s*$)/g, ''); //去除空格;

        if (str == '' || str == undefined || str == null) {
            return true;
        } else {
            return false;
        }
    },
    //判断报名信息是否为空
    signUpIsNull(obj) {

        let i;
        var isNull = false;

        for (i in obj) {
            console.log(i, ':', obj[i])
            if (this.isnull(obj[i]) || obj[i] === '请选择') {
                isNull = true;
            }
        }

        if (isNull === true) {
            return 'error';
        } else {
            return 'success'
        }

    },
    clearInput() {

        this.setData({
            'signUpInfo.username': '',
            'signUpInfo.phone': '',
            'signUpInfo.number': '',
            'signUpInfo.wechatNumber': '',
            'signUpInfo.college': '请选择',
            'signUpInfo.major': '请选择',
            'signUpInfo.direction': '',
            'signUpInfo.gpa': '',
            'textareaPH': '',
            collegeSelectAfter: false,
            majorSelectAfter: false,
        })

    },
    // 判断报名信息是否出错
    signUpIsError(errorObj) {
        let i;
        var error = false;
        for (i in errorObj) {
            if (!this.isnull(errorObj[i])) {
                error = true;
            }
        }

        if (error === true) {
            return 'error';
        } else {
            return 'success'
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {


        // wx.setNavigationBarColor({
        //     frontColor: '#ffffff',
        //     backgroundColor: '#ff0000',
        //     animation: {
        //         duration: 400,
        //         timingFunc: 'easeIn'
        //     }
        // })

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (!app.globalData.status.userData) {
            yy.showModal({
                    title: '温馨提示',
                    content: '抱歉，要使用报名功能请先进行登录授权，只需一步即可',
                    confirmText: "一键登录",
                    confirmColor: "#0f4c81"
                })
                .then(res => {
                    if (res.confirm) {
                        wx.navigateTo({
                            url: '/pages/getInfo/getInfo'
                        })
                        throw 'err';
                    } else if (res.cancel) {
                        wx.switchTab({
                            url: '/pages/user/user/user',
                        })
                        throw 'err';
                    }
                })
                .catch(res => {

                })


        } else {

            if (app.globalData.userData.status > 0) {
                this.setData({
                    disabled: true
                })
            }
        }

        // if (app.globalData.status.userData) {} else {
        //     app.loginCallback = data => {
        //         if (data.status > 0) {
        //             this.setData({
        //                 disabled: true
        //             })
        //         }
        //     }
        // }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
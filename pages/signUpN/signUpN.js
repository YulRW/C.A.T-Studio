//index.js

//获取应用实例
const app = getApp();
const g = app.globalData;

// 获取promise接口
// const yy = require('../../utils/Promise.js');


// 获取touch工具
const touch = require('../../utils/touch.js')

//学院和专业
const majorArray = {
    '计算机学院': ['软件工程', '计算机科学与技术', '网络工程', '信息安全'],
    '自动化学院': ["自动化", "数据科学与大数据技术", "电气工程及其自动化", "物联网工程"],
    '信息工程学院': ["信息工程", "通信工程", "电子信息工程", "	集成电路设计与集成系统"],
    "轻工化工学院": ["机械电子工程", "测控技术与仪器", "工业工程", "包装工程", "数字媒体技术", "车辆工程", "机械设计制造及其自动化"],
    "土木与交通工程学院": ["化学工程与工艺", "应用化学", "食品科学与工程"],
    "材料与能源学院": ["材料成型及控制工程卓越工程师班", "材料类创新班", "新能源材料与器件", "微电子科学与工程", "金属材料工程", "能源与动力工程", "高分子材料与工程", "材料成型及控制工程"],
    "环境科学与工程学院": ["安全工程", "环境生态工程", "环境科学", "环境工程"],
    "外国语学院": ["日语", "商务英语", "英语", "翻译"],
    "物理与光电工程学院": ["电子科学与技术", "光电信息科学与工程"],
    "生物医药学院": ["生物工程", "制药工程"]
}

Page({
    // 触摸开始
    touchStart(e) {
        this.setData({
            "touch.x": e.changedTouches[0].clientX,
            "touch.y": e.changedTouches[0].clientY
        });
    },

    // 触摸结束
    touchEnd(e) {
        let x = e.changedTouches[0].clientX;
        let y = e.changedTouches[0].clientY;
        let direction = touch.getTouchData(x, y, this.data.touch.x, this.data.touch.y);

        if (direction == '') {
            return;
        }
        let event = {
            currentTarget: {
                dataset: {
                    id: ''
                }
            }
        };
        event.currentTarget.dataset.id = this.data.curCard;
        if (direction === 'left') {
            this.next(event)
        } else {
            this.pre(event);
        }
    },

    // 处理姓名
    handleName(e) {
        this.setData({
            'signUpInfo.name': e.detail.value
        })

        let re = /^[\u4e00-\u9fa5]{2,10}$/;

        if (!re.test(e.detail.value) && e.detail.value != '') {
            this.setData({
                'errMsg.name': "请再检查输入的真名哦"
            })
        } else {
            this.setData({
                'errMsg.name': ""
            })
        }
    },

    //处理学号
    handleNumber(e) {
        this.setData({
            'signUpInfo.number': e.detail.value
        })

        this.handleGender(e.detail.value);

        let re = /^3[12]1900\d{4}$/;

        if (!re.test(e.detail.value) && e.detail.value != '') {
            this.setData({
                'errMsg.number': "朋友，你确定是19级的嘛？"
            })
        } else {
            this.setData({
                'errMsg.number': ""
            })
        }
    },

    //处理性别
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
                'signUpInfo.gender': ''
            })
        }
    },

    //处理手机号
    handlePhone(e) {
        this.setData({
            'signUpInfo.phone': e.detail.value
        })
        let re = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

        if (!re.test(e.detail.value) && e.detail.value != '') {
            this.setData({
                'errMsg.phone': "那个...手机号是中国的吗？"
            })
        } else {
            this.setData({
                'errMsg.phone': ""
            })
        }
    },

    //处理微信号
    handleWeChat(e) {
        this.setData({
            'signUpInfo.wechatNumber': e.detail.value
        })
    },

    //处理方向选择
    handleDirection(e) {
        this.setData({
            checkboxSelect: !this.data.checkboxSelect
        })
    },

    //处理学院专业
    handleMajor(e) {
        console.log(e)
        let value = e.detail.value
        this.setData({
            'signUpInfo.college': value[0],
            'signUpInfo.major': value[1],
            showMajorPop: false
        })
    },

    //处理技能介绍
    handleSkill(e) {
        if (this.isEmpty(e.detail.value)) {
            this.setData({
                'errMsg.skill': '只要你觉得自己会的都可以写上去呀'
            })
        } else {
            this.setData({
                'errMsg.skill': '',
                'signUpInfo.skill': e.detail.value
            })
        }

    },

    //处理自我介绍
    handleIntroduce(e) {
        if (this.isEmpty(e.detail.value)) {
            this.setData({
                'errMsg.introduce': '建议还是简单介绍下你自己啦~'
            })
        } else {
            this.setData({
                'errMsg.introduce': '',
                'signUpInfo.introduce': e.detail.value
            })
        }
    },

    //季节互动动画结束
    seasonAnimateEnd() {
        this.setData({
            seasonAnimate: ''
        })
    },

    // 点击季节互动事件
    clickSeason() {
        this.setData({
            seasonAnimate: 'rubberBand'
        })
    },

    // 改变季节
    changeSeason() {
        this.setData({
            c: this.data.curCard
        })
        this.updateSeasons();
    },

    // 下一个选项卡
    next(e) {
        // 获取id
        let id = Number(e.currentTarget.dataset.id);

        if (id == 3) {
            return
        }

        let animateCur = `animateType[${id}]`
        let animateNext = `animateType[${id + 1}]`

        let cardCur = `cardShow[${id}]`
        let cardNext = `cardShow[${id + 1}]`
        this.setData({
            curCard: id + 1
        })

        // 当前消失
        this.setData({
            [animateCur]: 'fadeOutUpBig',
            [animateNext]: 'bounceInRight'
        })

        // display设置
        this.setData({
            [cardNext]: 'block'
        })

        this.changeSeason();
    },

    // 上一个选项卡
    pre(e) {
        // 获取id
        let id = Number(e.currentTarget.dataset.id);

        if (id == 0) {
            return
        }

        let animateCur = `animateType[${id}]`
        let animatePre = `animateType[${id - 1}]`

        let cardCur = `cardShow[${id}]`
        let cardPre = `cardShow[${id - 1}]`

        this.setData({
            curCard: id - 1
        })

        // 当前消失出现
        this.setData({
            [animateCur]: 'fadeOutRightBig',
            [animatePre]: 'bounceInDown'
        })

        // display设置
        this.setData({
            [cardPre]: 'block'
        })

        this.changeSeason();
    },

    // 监听选项卡切换动画结束事件
    animatedEnd(e) {
        console.log('animated is end')
        console.log(this.data.curCard)
        let id = Number(e.currentTarget.dataset.id);
        if (id != this.data.curCard) {
            let index = `cardShow[${id}]`
            this.setData({
                [index]: 'none'
            })
        }
    },

    // 冒泡取消事件
    click() {
        this.setData({
            signUpCSS: this.data.btnCloseCSS
        })
    },

    // 动画按钮效果
    handleSignUp() {
        this.setData({
            signUpCSS: this.data.btnOpenCSS
        })
    },
    data: {

        // ----------------季节-------------------
        // 快捷颜色组
        color: {
            bgdcolor: '#cbe9f4',
            light: '#93d5eb',
            medium: '#66bbd8',
            dark: '#4da2bb',
            bush: '#fff',
            trunk: '#c2653c',
            trunk2: '#9d5d5d',
            cloud: '#fff',
            sun: 'transparent',
            rabbit: '#fff',
        },

        // 快捷颜色数组
        lightColours: ["#93d5eb", "#add63a", "#c5d63a", "#febe42"],
        mediumColours: ["#66bbd8", "#92c938", "#acc52b", "#ff9d25"],
        darkColours: ["#4da2bb", "#2a9d5c", "#89a503", "#ff6b2f"],
        backgroundColours: ["#cbe9f4", "#daf8ff", "#feec98", "#ffdc8a"],
        bushColours: ["#ffffff", "#3ebf6d", "#99b31a", "#fd6d2e"],
        cloudColours: ["#ffffff", "#ffffff", "#ffffff", "#eaf9fe"],
        seasons: ["Winter", "Spring", "Summer", "Autumn"],

        // 当前季节
        c: 0,
        season: '',

        // 季节组件出现与消失
        display: {
            snow: 'none',
            rain: 'none',
            rabbit: false,
            rainbow: false,
            flower: false

        },

        // 报名按钮初始
        signUpCSS: {
            backgroundColor: '#41aaf1',
            width: '100rpx',
            height: '100rpx',
            borderRadius: '100rpx',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.3)',
            transform: 'translateY(0rpx)',
        },

        //报名按钮关闭
        btnCloseCSS: {
            backgroundColor: '#41aaf1',
            width: '100rpx',
            height: '100rpx',
            borderRadius: '100rpx',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.3)',
            transform: 'translateY(0rpx)',
        },

        // 报名按钮开启
        btnOpenCSS: {
            backgroundColor: '#fff',
            width: '500rpx',
            height: '300rpx',
            borderRadius: '15px',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.3)',
            transform: 'translateY(-100rpx)',
        },

        // 选项卡展示状态
        cardShow: [
            'block', 'none', 'none', 'none'
        ],

        // 4个选项卡的动画类型
        animateType: ['', '', '', ''],

        //当前选项卡
        curCard: 0,

        // 季节动画
        seasonAnimate: '',

        // ---------------报名表单----------------

        // 报名信息
        signUpInfo: {
            name: '',
            number: '',
            gender: '',
            phone: '',
            wechatNumber: '',
            college: '请选择',
            major: '请选择',
            direction: "1",
            skill: '',
            introduce: "",

        },

        // 错误信息
        errMsg: {
            name: '',
            number: '',
            phone: '',
            skill: 'none',
            introduce: 'none'
        },

        // 方向选择状态
        checkboxSelect: false,

        //学院和专业
        columns: [{
                values: Object.keys(majorArray),
                className: 'column1'
            },
            {
                values: majorArray['计算机学院'],
                className: 'column2',
                defaultIndex: 0
            }
        ],

        //弹窗状态管理

        //学院与专业弹窗
        showMajorPop: false
    },


    // ------------------------------------方法--------------------------------------
    //判空
    isEmpty(value) {
        return /^\s*$/.test(value);
    },
    //显示学院Pop
    showMajorPop() {
        this.setData({
            showMajorPop: true
        })
    },
    // 选项卡改变时触发
    changeMajor(e) {
        const {
            picker,
            value,
            index
        } = e.detail;
        picker.setColumnValues(1, majorArray[value[0]]);
    },
    // 关闭弹出层时触发
    onCloseMajorPop() {
        this.setData({
            showMajorPop: false
        })
    },
    onLoad(e) {
        // 开启季节动画
        this.updateSeasons();
        console.log(Object.keys(majorArray))

    },

    // 季节动画
    updateSeasons() {
        let c = this.data.c;
        // 更改颜色
        this.setData({
            'color.bgdcolor': this.data.backgroundColours[c],
            'color.light': this.data.lightColours[c],
            'color.medium': this.data.mediumColours[c],
            'color.dark': this.data.darkColours[c],
            'color.bush': this.data.bushColours[c],
            'color.cloud': this.data.cloudColours[c],
        })
        // 快捷季节
        let season = this.data.seasons[c];
        let seasons = this.data.seasons;

        //控制落雪
        if (season === seasons[0]) {
            this.setData({
                'display.snow': 'block'
            })
        } else {
            this.setData({
                'display.snow': 'none'
            })
        }

        //控制兔子
        if (season === seasons[0] || season === seasons[2]) {
            this.setData({
                'display.rabbit': true
            })
        } else {
            this.setData({
                'display.rabbit': false
            })
        }


        //控制彩虹
        if (season === seasons[1]) {
            this.setData({
                'display.rainbow': true
            })
        } else {
            this.setData({
                'display.rainbow': false
            })
        }

        //控制兔子颜色
        if (season === seasons[1]) {
            this.setData({
                'color.rabbit': "#9E6255"
            })
        }

        //控制花
        if (season === seasons[1]) {
            this.setData({
                'display.flower': true
            })
        } else {
            this.setData({
                'display.flower': false
            })
        }

        //控制太阳和兔子
        if (season === seasons[2]) {
            this.setData({
                'color.sun': "#ffb53a",
                'color.rabbit': "#9E6255"
            })
        } else {
            this.setData({
                'color.sun': "transparent",
                'color.rabbit': "#ffffff"
            })
        }

        //控制雨
        if (season === seasons[3]) {
            this.setData({
                'display.rain': 'block'
            })
        } else {
            this.setData({
                'display.rain': 'none'
            })

        }

        this.setData({
            c: (c + 1) % seasons.length
        })
    },


})
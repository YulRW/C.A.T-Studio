// components/yy-input/yy-input.js
/**
 * 支持：
 * title
 * placeholder
 * err
 * suc
 * maxlength
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {

        // 输入的标题
        title: {
            type: String,

        },

        // input框输入提示
        placeholder: {
            type: String,
            value: ''
        },

        //错误时提示
        err: {
            type: String,
            value: '123'
        },

        //成功时提示
        suc: {
            type: String,
            value: ''
        },

        //最大长度
        maxlength: {
            type: Number,
            value: -1
        },

        //正则验证
        regular: {
            type: String,
            optionalTypes: [Array],
            value: '',
            observer: function(newVal, oldVal) {
                if (typeof newVal === 'string') {
                    this.setData({
                        _re: [newVal]
                    })
                } else {
                    this.setData({
                        _re: newVal
                    })

                }
            }
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 正则
        _re: '',

        // 表单状态: 1->正常（空） 2->错误 3->成功
        status: 1,

        focusCSS: false,

        // 提示条颜色
        msgColor: 'usuColor'
    },

    /**
     * 数据监听器
     */
    observers: {
        // 当数据状态改变时
        'status': function(status) {
            if (status === 1) {
                this.setData({
                    msgColor: 'usuColor'
                })
            } else if (status === 2) {
                this.setData({
                    msgColor: 'errColor'
                })
            } else {
                this.setData({
                    msgColor: 'sucColor'
                })
            }
        },

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleInput(e) {

            // 若为空
            if (e.detail.value === '') {
                this.setData({
                    status: 1
                })
            } else { //否则验证

                //验证数据
                if (this._match(e.detail.value)) {
                    this.setData({
                        status: 3
                    })
                } else {
                    this.setData({
                        status: 2
                    })
                }
            }

            //修改表单状态：正常、错误、成功
            let data = {
                value: e.detail.value,
                status: this.data.status
            }

            this.triggerEvent('input', data, {})
        },

        // 正则匹配
        _match(value) {
            let re = this.data._re;
            if (re) {
                return re.some((item, index) => new RegExp(item).test(value));
            } else {
                return true;
            }
        },

        // 判空
        isEmpty(value) {
            return /^\s*$/.test(value);
        },
        _handleFocus() {
            this.setData({
                focusCSS: true,
                placeholderMsg: this.properties.placeholder
            })
        },
        _handleBlur(e) {
            if (this.isEmpty(e.detail.value)) {
                this.setData({
                    focusCSS: false,
                    placeholderMsg: ''
                })
            }
        },
    }
})
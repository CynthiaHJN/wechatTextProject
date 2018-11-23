// components/goods-number-model/goods-number-model.js
Component({
  options: {
    mutipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    buyNumber: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  ready: function () {
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
      this.animation.bottom('-400rpx').step()
      this.setData({ animation: this.animation.export() })
    },
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
      this.animation.bottom(0).step()
      this.setData({ animation: this.animation.export() })
    },
    decrease() {
      this.setData({
        buyNumber: this.data.buyNumber - 1
      });
    },
    addtion() {
      this.setData({
        buyNumber: this.data.buyNumber + 1
      });
    },
    inputNumber(e) {
      let re = /^[0-9]+.?[0-9]*$/;
      let value = e.detail.value;
      let pos = e.detail.cursor;
      let lastChar = e.detail.value.slice(pos - 1, pos);
      if(!re.test(lastChar)) {
        console.log(lastChar);
        value = value.slice(0, pos-1);
      }
      this.setData({
        buyNumber: parseInt(value)
      });
    },
    gotoAddress() {
      wx.navigateTo({
        url: '/pages/address/address',
      })
    },
    confirm() {
      var myEventDetail = {
        buyNum: this.data.buyNumber
      }
      this.triggerEvent("confirmEvent", myEventDetail);
    }
  }
})

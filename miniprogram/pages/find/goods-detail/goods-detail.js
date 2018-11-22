const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    goodItem: {},
    isLove: false,
    loveSrc: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/love.png?sign=9fb615f623295539f3f15b62f7abe181&t=1542008608',
    buyNum: 1,
    msg: {
      title: '提醒',
      content: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.getGoodDetail(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.myGoodsNumber = this.selectComponent("#myGoodsNumber");
    this.dialog = this.selectComponent("#dialog");
  },

  showGoodsNumber: function () {
    this.myGoodsNumber.showDialog();
  },

  changeLove: function () {
    if (this.data.isLove) {
      this.setData({
        isLove: !this.data.isLove,
        loveSrc: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/love-full.png?sign=f999edc939b8179e947ad29ab816539a&t=1542008872'
      })
    } else {
      this.setData({
        isLove: !this.data.isLove,
        loveSrc: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/love.png?sign=9fb615f623295539f3f15b62f7abe181&t=1542008608'
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  getGoodDetail: function (id) {
    wx.cloud.callFunction({
      name: 'goodsList',
      data: {
        _id: parseInt(id)
      },
      success: res => {
        this.setData({
          goodItem: res.result.data[0],
          buyNum: 1
        });
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  buyGoods: function () {
    if (app.globalData.userInfo) {
      this.onGetOpenid();
    } else {
      this.setData({
        msg: {
          title: '',
          content: '您还未登录，请先登录'
        }
      });
      this.dialog.showDialog();
    }
  },

  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'addBuyList',
      data: {
        goodItem: this.data.goodItem,
        buyNum: this.data.buyNum
      },
      success: res => {
        this.setData({
          msg: {
            title: '',
            content: '成功加入购物车'
          }
        });
        this.dialog.showDialog();
      },
      fail: err => {
        this.setData({
          msg: {
            title: '',
            content: '加入购物车失败'
          }
        });
        this.dialog.showDialog();
      }
    })
  },

  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },

  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})
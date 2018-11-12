Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    goodItem: {
      picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
      title: '时令新鲜水果脐时令新鲜水果脐橙5斤 超甜',
      price: '45.00',
      commentNum: '100',
      goodPercent: '96',
      id: 1
    },
    isLove: false,
    loveSrc: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/love.png?sign=9fb615f623295539f3f15b62f7abe181&t=1542008608'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.myGoodsNumber = this.selectComponent("#myGoodsNumber");
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
    
  }
})
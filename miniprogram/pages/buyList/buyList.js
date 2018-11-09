Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList: [
      { id: 1, picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473', title: '时令新鲜水果脐橙5斤 超甜', price: '45.00', buyNum: 1, checked: false },
      { id: 2, picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473', title: '时令新鲜水果脐橙5斤 超甜', price: '45.00', buyNum: 2, checked: false },
      { id: 3, picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473', title: '时令新鲜水果脐橙5斤 超甜', price: '45.00', buyNum: 3, checked: false },
      { id: 4, picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473', title: '时令新鲜水果脐橙5斤 超甜', price: '45.00', buyNum: 5, checked: false },
      { id: 5, picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473', title: '时令新鲜水果脐橙5斤 超甜', price: '45.00', buyNum: 4, checked: false }
    ],
    totalAmount: 0,
    checkedAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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

  radioChange: function (e) {
    let totalAmount = 0;
    let checkedValue = e.detail.value;
    let checkedCount = checkedValue.length;
    let buyList = this.data.buyList;
    for (let key in buyList) {
      buyList[key].checked = false;
    }
    let checkedAll = checkedCount === buyList.length;
    for (let key in checkedValue) {
      let index = checkedValue[key];
      let price = buyList[index].price;
      let num = buyList[index].buyNum
      buyList[index].checked = true;
      totalAmount += price * num;
    }
    this.setData({
      checkedAll: checkedAll,
      totalAmount: totalAmount,
      buyList: buyList
    });
  },

  radioAll: function (e) {
    let val = e.detail.value[0];
    let totalAmount = 0;
    let buyList = this.data.buyList
    this.setData({
      totalAmount: totalAmount
    });
    if (val==1) {
      for(let key in buyList) {
        let price = buyList[key].price;
        let num = buyList[key].buyNum
        buyList[key].checked = true;
        totalAmount += price * num
      }
      this.setData({
        totalAmount: totalAmount,
        buyList: buyList
      });
    } else {
      for (let key in buyList) {
        buyList[key].checked = false;
      }
      this.setData({
        buyList: buyList
      });
    }
  },

  goToDetail: function (e) {
    wx.navigateTo({
      url: '../find/goods-detail/goods-detail?id=' + e.currentTarget.dataset.id,
    })
  }
})
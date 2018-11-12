Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/typeImage/type-image-1.png?sign=8d9880acb4e221bee4e731fcad31179d&t=1541498461',
    avatarUrl2: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/typeImage/type-image-2.jpg?sign=ec9e487cc191fdc679357e7b2f7ca7f8&t=1541557649',
    avatarUrl3: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/typeImage/type-image-3.jpg?sign=d936dccf38395248aa8e5c36aebb9e42&t=1541558066',
    avatarUrl4: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/typeImage/type-image-4.jpg?sign=7aacb6af6c7f4033e98443cd27acb8ed&t=1541558200'
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
    this.dialog = this.selectComponent("#dialog");
  },

  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
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
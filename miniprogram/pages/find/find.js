Page({

  /**
   * 页面的初始数据
   */
  data: {
    findList: [
      {
        picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
        title: '时令新鲜水果脐时令新鲜水果脐橙5斤 超甜',
        price: '45.00',
        commentNum: '100',
        goodPercent: '96'
      }, {
        picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
        title: '时令新鲜水果脐橙5斤 超甜',
        price: '45.00',
        commentNum: '100',
        goodPercent: '96'
      }, {
        picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
        title: '时令新鲜水果脐橙5斤 超甜',
        price: '45.00',
        commentNum: '100',
        goodPercent: '96'
      }, {
        picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
        title: '时令新鲜水果脐橙5斤 超甜',
        price: '45.00',
        commentNum: '100',
        goodPercent: '96'
      }, {
        picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
        title: '时令新鲜水果脐橙5斤 超甜',
        price: '45.00',
        commentNum: '100',
        goodPercent: '96'
      }, {
        picUrl: 'https://6e69-nini-store-a15a86-1257989489.tcb.qcloud.la/goods-image/goods-image-1.jpg?sign=e3f8790be8d9a8a557767bd1dec06a7c&t=1541578473',
        title: '时令新鲜水果脐橙5斤 超甜',
        price: '45.00',
        commentNum: '100',
        goodPercent: '96'
      },
    ],
    topBar: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  goToSearch: function () {
    console.log('....');
  },

  onPageScroll: function(e) {
    if(e.scrollTop>20) {
      this.setData({
        topBar: true
      });
    } else {
      this.setData({
        topBar: false
      });
    }
  }
})
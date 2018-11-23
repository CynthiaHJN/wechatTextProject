wx.cloud.init();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList: [],
    totalAmount: 0,
    checkedAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBuyList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  onShow: function () {
    this.getBuyList();
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
  },

  getBuyList: function () {
    let _this = this;
    db.collection('buyList').where({}).get({
      success: function(res) {
        for(let i=0; i<res.data.length; i++) {
          res.data[i].checked = false;
        }
        _this.setData({
          buyList: res.data
        })
      },
      fail: function(err) {
        console.log(err);
      }
    })
  },

  goToPay: function () {
    if (this.data.totalAmount>0) {
    }
  }
})
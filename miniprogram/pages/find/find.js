Page({

  /**
   * 页面的初始数据
   */
  data: {
    findList: [],
    topBar: false,
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodsList();
  },

  setInputValue: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  goToSearch: function (e) {
    console.log(this.data.inputValue);
    if(this.data.inputValue){
      wx.cloud.callFunction({
        name: 'goodsList',
        data: {
          name: this.data.inputValue
        },
        success: res => {                                                                                                                                                         
          this.setData({
            findList: res.result.data
          });
        },
        fail: err => {
          console.log(err);
        }
      })
    } else {
      this.getGoodsList();
    }
  },

  geToDetail: function(e) {
    wx.navigateTo({
      url: './goods-detail/goods-detail?id=' + e.currentTarget.dataset.id,
    })
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
  },

  getGoodsList: function () {
    wx.cloud.callFunction({
      name: 'goodsList',
      data: {},
      success: res => {
        this.setData({
          findList: res.result.data
        });
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})
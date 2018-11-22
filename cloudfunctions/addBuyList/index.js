// // 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  let { goodItem, buyNum } = event
  let param = {
    goodId: goodItem._id,
    name: goodItem.name,
    price: goodItem.price,
    picUrl: goodItem.picUrl,
    buyNum: buyNum,
    openId: event.userInfo.openId
  }
  let res = await db.collection('buyList').where({
    goodId: param.goodId,
    openId: param.openId
  }).get()
  if(res&&res.data.length>0) {
    let _id = res.data[0]._id
    let _buyNum = res.data[0].buyNum
    return await db.collection('buyList').doc(_id).update({
      data: {
        buyNum: buyNum + _buyNum
      }
    })
  } else {
    return await db.collection('buyList').add({
      data: param
    })
  }
}
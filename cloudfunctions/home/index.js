// // 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('typeMenus').get()
  // let { userInfo, a, b } = event
  // let { OPENID, APPID } = cloud.getWXContext()
  // let  sum = a + b

  // return {
    // OPENID,
    // APPID,
    // sum
  // }
}
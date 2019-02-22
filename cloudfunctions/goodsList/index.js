// // 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  let { _id, parentId, name } = event
    return await db.collection('goods').where({
      "_id": _id,
      "parentId": parentId,
      "name": name
    }).get()

}
import {request} from "./request";
export function getDetail(iid) {
  return request({
    url: 'detail',
    timeout: 500000000,
    params: {
      // iid: iid
      // 用ES6语法
      iid
    }
  })
}

export class DetailInfo {
  constructor(itemInfo,columns,servece) {
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldprice = itemInfo.oldprice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.servece = servece
  }
}

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
  constructor(itemInfo,columns,service) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldprice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.service = service
  }
}

// export class ShopInfo {
//   constructor(shopInfo) {
//     this.shopLogo = shopInfo.shopLogo
//     this.score = shopInfo.score
//   }
// }

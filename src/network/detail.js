import {request} from "./request";
export function getDetail(iid) {
  return request({
    url: 'detail',
    params: {
      // iid: iid
      // 用ES6语法
      iid
    }
  })
}

import $api from "../http";

import { ORDER_URL } from '../const/const'

export default class UserService {

    static async getUserOrder(userId) {
        return await $api.get(ORDER_URL + '/' + userId)
    }

    //orderList это массив объектов 
    static async putUserOrder(userId, orderList, userOrder) {
        return await $api.put(`${ORDER_URL}/${userId}`, orderList)
    }

}
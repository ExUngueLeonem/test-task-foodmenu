import { makeAutoObservable } from "mobx"
import UserService from "../services/UserService";

class UserStore {

    userOrder = {
        id: 0,
        userName: "Пертурабо",
        userOrder: [
            {
                "id": 321,
                "food": "Великий суп",
                "count": 1
            }
        ]
    };


    constructor() {
        makeAutoObservable(this);
    }

    setUserOrder(userOrder) { this.userOrder = userOrder }

    getUserOrder = async (userId) => {
        try {
            const response = await UserService.getUserOrder(userId)
            this.setUserOrder(response.data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    putUserOrder = async (userId, userOrder) => {
        try {
            const response = await UserService.putUserOrder(userId, userOrder)
            this.setUserOrder(response.data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    inviteOrderItem = (orderItem) => {
        console.log(this.userOrder.userOrder.concat(orderItem))
        this.setUserOrder(orderItem)
    }
    
}

export default new UserStore()
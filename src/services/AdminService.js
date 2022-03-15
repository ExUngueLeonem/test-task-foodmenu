import $api from "../http";

import {MENU_URL} from '../const/const'
export default class AdminService {

    static async getMenu() {
        return await $api.get(MENU_URL)
    }

    static async addFoodToMenu(foodInput) {
        const id = `f${(+new Date).toString(16)}`;
        return await $api.post(MENU_URL, {
            id: id,
            food: foodInput
        })
    }

    static async changeFood(itemId, foodInput) {
        return await $api.put(MENU_URL + '/' + itemId, {
            id: itemId,
            food: foodInput
        })
    }

    static async deleteFood(itemId) {
        return await $api.delete(MENU_URL + '/' + itemId)
    }

}
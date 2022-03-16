import $api from "../http";
import GotService from "./GotService";

import {MENU_URL,
        ORDER_URL,
        USERS_URL
        } from '../const/const'


const gotService = new GotService();
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

    static async getOrder() {
        return await $api.get(ORDER_URL)
    }

    static async getUsers() {
        return $api.get(USERS_URL)
    }

    

}
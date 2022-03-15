import {
    makeAutoObservable
} from "mobx"
import GotService from '../services/GotService';
import $api from "../http";
import AdminService from "../services/AdminService";

const gotService = new GotService();

const MENU_URL = '/menu'

class AdminStore {

    menu = [{
        "id": 0,
        "food": "Обосраный матрац"
    }];

    constructor() {
        makeAutoObservable(this);
    }

    setMenu(menu) {
        this.menu = menu;
    }

    getMenu = async () => {
        try {
            const response = await AdminService.getMenu();
            this.setMenu(response.data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    addFoodToMenu = async (foodInput) => {
        try {
            const response = await AdminService.addFoodToMenu(foodInput);
            this.setMenu([...this.menu, response.data])
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    };

    changeFood = async (itemId, foodInput) => {
        console.log('changeFood')
        try {
            const response = await AdminService.changeFood(itemId, foodInput)
            console.log('changeFood', response.data)
            let result = this.menu.map( elem => {
                if (elem.id === itemId) {
                    return response.data
                } else return elem
            })
            this.setMenu(result)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    deleteFood = async (itemId) => {
        try {
            await AdminService.deleteFood(itemId)
            let result = this.menu.filter( elem => {
                if (elem.id === itemId) return false
                return true
            })
            this.setMenu(result)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    addUsers() {
        console.log('addUsers')

    };

    deleteUsers() {
        console.log('deleteUsers')
    };

    getUsers() {
        console.log('getUsers')
    };

}

export default new AdminStore()
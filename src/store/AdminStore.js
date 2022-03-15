import {
    makeAutoObservable
} from "mobx"
import GotService from '../services/GotService';
import $api from "../http";

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

    getMenu = async () => {
        return await $api.get(MENU_URL)
            .then(res => this.menu = res.data)
            .catch(error => {
                console.log(error)
            });
    }

    addFoodToMenu(foodInput) {
        const id = `f${(+new Date).toString(16)}`;
        return $api.post(MENU_URL, {
            id: id,
            food: foodInput
        }).catch(error => {
            console.log(error);
        })
    };

    changeFood(itemId, foodInput) {
        return $api.put(MENU_URL + '/' + itemId, {
                id: itemId,
                food: foodInput
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteFood(itemId) {
            return $api.delete(MENU_URL + '/' + itemId)
                .catch(error => {
                    console.log(error);
                })           
    }



    /*     //path = '/menu'
        fetchData = (path) => {
            return axios.get(SERVER_URL + path)
                .catch(error => {
                    console.log(error)
                });
        }
     */
    /*     
        const refreshList = () => {
            gotService.fetchData('/menu')
                .then((res) => { setMenu(res.data) })


        }
     */


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
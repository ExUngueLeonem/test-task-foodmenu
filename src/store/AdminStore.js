import { makeAutoObservable } from "mobx"
import AdminService from "../services/AdminService";

class AdminStore {

    menu = [{
        id: 0,
        food: "Обосраный матрац"
    }];

    order = [{
        id: 0,
        userName: "Пертурабо",
        userOrder: [{
            id: 0,
            food: "Великий суп",
            count: 1
        }]
    }];

    users = [{
        email: "sdf@mail.com",
        password: "4456",
        userName: "Гость",
        role: "guest",
        id: 1
    }]

    constructor() {
        makeAutoObservable(this);
    }

    setMenu(menu) { this.menu = menu }
    setOrder(order) { this.order = order }
    setUsers(users) { this.users = users }

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
            let result = this.menu.map(elem => {
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
            let result = this.menu.filter(elem => {
                if (elem.id === itemId) return false
                return true
            })
            this.setMenu(result)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    /*  это если у нас список работников отдельно   
        getStaff = async () => {
            try {
    
            } catch (e) {
                console.log(e.response?.data?.message)
            }
        }
     */

    getUsers = async () => {
        try {
            const response = await AdminService.getUsers();
            const result = response.data.filter(elem => {
                if (elem.role !== 'admin') return elem
            })
            this.setUsers(result)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    deleteUser = async (itemId) => {
        try {
            await AdminService.deleteUsers(itemId)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    getOrder = async () => {
        try {
            const response = await AdminService.getOrder()
            this.setOrder(response.data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

}

export default new AdminStore()
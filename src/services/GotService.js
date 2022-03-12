 import {
     axios
 } from "../html/axios";
 import {
     SERVER_URL
 } from "../html/const";
 export default class GotService {

     //path = '/menu'
     fetchData = (path) => {
         return axios.get(SERVER_URL + path)
             .catch(error => {
                 console.log(error)
             });
     }

     //path = '/menu', data = {id: new Date(), food: foodInput}}
     postData = (path, data) => {
         return axios.post(SERVER_URL + path, data).catch(error => {
             console.log(error);
         });
     }
     //path = '/menu', itemId = itemId
     deleteData = (path, itemId) => {
         return axios.delete(SERVER_URL + path + '/' + itemId)
             .catch(error => {
                 console.log(error);
             })
     }

     //path = '/menu', itemId = itemId, data = {id: new Date(), food: foodInput}}
     putData = (path, itemId, data) => {
         return axios.put(SERVER_URL + path + '/' + itemId, data)
             .catch(error => {
                 console.log(error);
             })
     }

 }
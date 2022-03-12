import React, { useEffect, useState } from 'react';
import styles from './AdminMenuPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';
import { SERVER_URL } from '../../html/const';
import { axios } from '../../html/axios';
import GotService from '../../services/GotService';


const AdminMenuPage = () => {
    const [menu, setMenu] = useState([])
    const [foodInput, setFoodInput] = useState('');
    const gotService = new GotService

    console.log(gotService)

    //params = '/menu'
/*     const fetchData = (path) => {
        return axios.get(SERVER_URL + path)
            .catch(error => { console.log(error) });
    }
 */
    const refreshList = () => {
        gotService.fetchData('/menu')
            .then((res) => { setMenu(res.data) })
    }

    //path = '/menu', data = {id: new Date(), food: foodInput}}
/*     const postData = (path, data) => {
        return axios.post(SERVER_URL + path, data
        ).catch(error => {
            console.log(error);
        });
    }
 */
/*     const deleteData = (path, itemId) => {
        return axios.delete(SERVER_URL + path + '/' + itemId)
            .catch(error => {
                console.log(error);
            })
    }
 */
/*     const putData = (path, itemId, data) => {
        return axios.put(SERVER_URL + path + '/' + itemId, data)
        .catch(error => {
            console.log(error);
        })
    }
 */
    useEffect(
        refreshList, []
    );

    const foodInputOnChangeHandler = (e) => {
        setFoodInput(e.target.value);
    };

    const onSubmitHandler = (e) => {
        const id = `f${(+new Date).toString(16)}`;
        e.preventDefault();

        gotService.postData('/menu', { id: id, food: foodInput })
            .then(() => { refreshList() })

        setFoodInput('');
    };

    const onPutHandler = (itemId) => {
        gotService.putData('/menu', itemId, { id: itemId, food: foodInput })
            .then(() => { refreshList() })
        setFoodInput('');
    }

    const onDeleteHandler = (itemId) => {
        gotService.deleteData('/menu', itemId)
            .then(() => { refreshList() })
    }

    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>
                <AdminHeader active={'menu'} />
                <form onSubmit={(e) => { onSubmitHandler(e) }}>

                    <input
                        className={[styles.menu_input].join(' ')}
                        type="text"
                        placeholder='добавление/изменение продукта'
                        value={foodInput}
                        onChange={(e) => { foodInputOnChangeHandler(e) }}
                    ></input>
                </form>

                <ItemList
                    item={menu}
                    onPutHandler={onPutHandler}
                    onDeleteHandler={onDeleteHandler}
                />

                <div className={styles.menu_btn_container}>
                    <button className={styles.menu_btn}>история</button>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;
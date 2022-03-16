import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import styles from './UserOrderPage.module.scss';

import ItemList from '../../components/ItemList';
import GotService from '../../services/GotService';

import AuthStore from '../../store/AuthStore';
import AdminStore from '../../store/AdminStore';
import UserStore from '../../store/UserStore';
const UserOrderPage = observer(() => {

    //const [orderListId, setOrderListId] = useState('');

    const [orderInput, setOrderInput] = useState('');

    const orderInputOnChangeHandler = (e) => {
        setOrderInput(e.target.value)
    };

    const gotService = new GotService;

    const refreshList = () => {
        AdminStore.getMenu();
        //.then((res) => { setMenu(res.data) })
    }

    console.log(UserStore.userOrder)

    //AuthStore.user

    /*     
        user = {
        email: "none",
        userName: "Загрузка...",
        role: "guest",
        id: 999
    }

    getUserOrder(userId)

    записать его в стор

    получить доступ из компонента
    передать в ItemList

    http://localhost:3000/order/ AuthStore.user.id


    {
    "id": 0,
    "userName": "Пертурабо",
    "userOrder": [
        {
            "id": 321,
            "food": "Великий суп",
            "count": 1
        },
        {
            "id": 987,
            "food": "Компот из жопы тиранида",
            "count": 2
        },
        {
            "id": 223,
            "food": "слезы грешника",
            "count": 4
        }
    ]
    }

    response.data.userOrder - это массив, который нужно размапить в список

    */

    useEffect(() => {
        AdminStore.getMenu();
        UserStore.getUserOrder(AuthStore.user.id);
    }, []);


    const onPutHandler = (itemId) => {
        gotService.putData('/order', itemId, { id: itemId, order: orderInput })
            .then(() => { refreshList() })
        setOrderInput('');
    }

    const onDeleteHandler = (itemId) => {
        gotService.deleteData('/order', itemId)
            .then(() => { refreshList() })
    }

    //мы должны получить id продукта
    const onPickHandler = (e) => {
        let id
        if (!e.target.id) {
            id = e.target.parentNode.getAttribute('id')
        } else {
            id = e.target.id;
        }
        let orderItem = AdminStore.menu.filter( (elem) => {
            if (elem.id == id) return true
        })

        console.log(orderItem)

/*         
        let res = JSON.parse(JSON.stringify(UserStore.userOrder))
        res.userOrder.concat(orderItem)
        console.log(res)
        UserStore.inviteOrderItem(res)
 */

    }

    
    const onPutOrder = () => {
        UserStore.putUserOrder(AuthStore.user.id, UserStore.userOrder)
    }

    let userName = AuthStore.user.userName;

    return (
        <div className={styles.container}>
            {AuthStore.user.role !== 'user' && (
                <Navigate to="/auth" replace={true} />
            )}
            <div className={styles.userName}>
                {userName ? userName : null}
            </div>
            <div className={styles.flex_container}>
                <div className={styles.flex_container__left}>
                    <ItemList
                        btn_post={false}
                        btn_delete={false}
                        btn_put={false}
                        item={AdminStore.menu}
                        onPickHandler={(e) => onPickHandler(e)}
                    />
                </div>

                <div
                    className={styles.flex_container__right}>
                    <div className={styles.menu_btn_container}>
                        <button 
                        onClick={() => onPutOrder()}
                        className={styles.menu_btn}>Заказать</button>
                    </div>

                    <ItemList
                        item={UserStore.userOrder.userOrder}
                        onPutHandler={onPutHandler}
                        onDeleteHandler={onDeleteHandler}
                    />

                </div>

            </div>
        </div>
    );
});
export default UserOrderPage;
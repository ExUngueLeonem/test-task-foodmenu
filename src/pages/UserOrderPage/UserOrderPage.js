import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Context } from '../../components/Context';
import ItemList from '../../components/ItemList';
import GotService from '../../services/GotService';
import styles from './UserOrderPage.module.scss';

const UserOrderPage = () => {
    const [context, setContext] = useContext(Context);

    const [order, setOrder] = useState([]);

    const [orderInput, setOrderInput] = useState('');
    const [orderListId, setOrderListId] = useState(0);
    const gotService = new GotService;

    const refreshList = () => {
        gotService.fetchData('/order')
            .then((res) => { setOrder(res.data) })
    }

    useEffect(
        refreshList, []
    );

    const orderInputOnChangeHandler = (e) => {
        setOrderInput(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const id = `f${(+new Date).toString(16)}`;

        gotService.postData('/order', { id: id, order: orderInput })
            .then(() => { refreshList() })

        setOrderInput('');
    };

    const onPutHandler = (itemId) => {
        gotService.putData('/order', itemId, { id: itemId, order: orderInput })
            .then(() => { refreshList() })
        setOrderInput('');
    }

    const onDeleteHandler = (itemId) => {
        gotService.deleteData('/order', itemId)
            .then(() => { refreshList() })
    }

    const onPickHandler = (e) => {
        if (!e.target.id) {
            e.target.parentNode.getAttribute('id')
            setOrderListId(e.target.parentNode.getAttribute('id'))
        } else {
            setOrderListId(e.target.id);
        }
    }

    let userName = context.user ? context.user.userName : null;
    let orderItem = order[orderListId] ? order[orderListId].userOrder : null;
    console.log(userName)


    return (
        <div className={styles.container}>
             {!userName && (
                <Navigate to="/auth" replace={true} /> 
            )}
            <div className={styles.userName}>
                 {userName ? userName : null}
            </div> 
            <div className={styles.flex_container}>
                <div className={styles.flex_container__left}>
                    <ItemList
                        changeble={true}
                        btn_delete={false}
                        btn_put={false}
                        item={order}
                        onPutHandler={onPutHandler}
                        onDeleteHandler={onDeleteHandler}
                        onPickHandler={onPickHandler}
                    />
                </div>
                {!!order[0] && <div className={styles.flex_container__right}>
                    <ItemList
                        item={orderItem ? orderItem : null}/* нужно сделать выбор, кого передавать */
                        onPutHandler={onPutHandler}
                        onDeleteHandler={onDeleteHandler}
                    />
                </div>}
            </div>

            <div className={styles.menu_btn_container}>
                <button className={styles.menu_btn}>история</button>
            </div>
        </div>
    );
};
export default UserOrderPage;
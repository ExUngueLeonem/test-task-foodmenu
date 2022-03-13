import React, { useContext, useEffect, useState } from 'react';
import styles from './AdminOrderPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import GotService from '../../services/GotService';
import ItemList from '../../components/ItemList';
import { Context } from '../../components/Context';

const AdminOrderPage = () => {
    const [order, setOrder] = useState([]);
    const [orderInput, setOrderInput] = useState('');
    const gotService = new GotService;

    const [context, setContext] = useContext(Context);

    const [userOrder, setUserOrder] = useState('');

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

    return (
        <div className={styles.container}>
            <AdminHeader active={'order'} />
            <form onSubmit={(e) => { onSubmitHandler(e) }}>
                <input
                    className={[styles.menu_input].join(' ')}
                    type="text"
                    placeholder='добавление/изменение продукта'
                    value={orderInput}
                    onChange={(e) => { orderInputOnChangeHandler(e) }}
                ></input>
            </form>

            <div className={styles.flex_container}>
                <div className={styles.flex_container__left}>
                    <ItemList
                        changeble={true}
                        btn_delete={false}
                        btn_put={false}
                        item={order}
                        onPutHandler={onPutHandler}
                        onDeleteHandler={onDeleteHandler}
                    />
                </div>
                {!!order[0] && <div className={styles.flex_container__right}>
                    <ItemList
                        item={order[0].userOrder}/* нужно сделать выбор, кого передавать */
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

export default AdminOrderPage;
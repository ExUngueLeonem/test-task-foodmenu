import React, { useContext, useEffect, useState } from 'react';
import styles from './AdminOrderPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import GotService from '../../services/GotService';
import ItemList from '../../components/ItemList';
import { Context } from '../../components/Context';
import AdminStore from '../../store/AdminStore';

const AdminOrderPage = () => {
    const [order, setOrder] = useState([]);
    const [orderInput, setOrderInput] = useState('');
    const [orderListId, setOrderListId] = useState(0);
    const gotService = new GotService;

    const orderInputOnChangeHandler = (e) => {
        setOrderInput(e.target.value);
    };

    const refreshList = () => {
        AdminStore.getOrder()
    }

    useEffect(
        AdminStore.getOrder, []
    );

   //удалить
    const onSubmitHandler = (e) => {
        e.preventDefault();

/*         
        const id = `f${(+new Date).toString(16)}`;
        gotService.postData('/order', { id: id, order: orderInput })
            .then(() => { refreshList() })

*/
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

    let userName = AdminStore.order[orderListId] ? AdminStore.order[orderListId].userName : null;
    let orderItem = AdminStore.order[orderListId] ? AdminStore.order[orderListId].userOrder : null;

    console.log('userName userOrder', userName, orderItem)

    return (
        <div className={styles.container}>
            <AdminHeader active={'order'} />
            <span>
                {userName ? userName : null}
            </span> 
{/*
             //переделать инпут, чтобы добавлял товары
 */}            
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
                        item={AdminStore.order}
                        onPutHandler={onPutHandler}
                        onDeleteHandler={onDeleteHandler}
                        onPickHandler={onPickHandler}
                    />
                </div>
                {!!AdminStore.order[0] && <div className={styles.flex_container__right}>
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

export default AdminOrderPage;
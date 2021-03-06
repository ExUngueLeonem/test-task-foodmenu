import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './AdminMenuPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';

import AdminStore from '../../store/AdminStore'

const AdminMenuPage = observer(() => {

    const [foodInput, setFoodInput] = useState('');

    const foodInputOnChangeHandler = (e) => {
        setFoodInput(e.target.value);
    };

    const refreshList = () => {
        console.log('get menu')
        AdminStore.getMenu()
    }

    useEffect(
        refreshList, []
    );

    const onSubmitHandler = (e) => {
        e.preventDefault();
        AdminStore.addFoodToMenu(foodInput)
        setFoodInput('');
    };

    const onPutHandler = (itemId) => {
        AdminStore.changeFood(itemId, foodInput)
        setFoodInput('');
    }

    const onDeleteHandler = (itemId) => {
        AdminStore.deleteFood(itemId)
    }

    return (
        <div className={styles.container}>
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
                item={AdminStore.menu}
                onPutHandler={onPutHandler}
                onDeleteHandler={onDeleteHandler}
            />

            <div className={styles.menu_btn_container}>
                <button className={styles.menu_btn}>история</button>
            </div>
        </div>
    );
});

export default AdminMenuPage;
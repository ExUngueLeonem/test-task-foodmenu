import React, { useEffect, useState } from 'react';
import styles from './AdminMenuPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import MenuList from '../../components/MenuList';
import { SERVER_URL } from '../../html/const';
import { axios } from '../../html/axios';


const AdminMenuPage = () => {
    const [menu, setMenu] = useState([])
    const [addFoodInput, setAddFoodInput] = useState('');

    const fetchMenu = () => {
        axios.get(SERVER_URL + '/menu')
            .then((res) => { setMenu(res.data) })
            .catch(error => { console.log(error) });
    }

    useEffect(
        fetchMenu, []
    );

    const addFoodInputOnChangeHandler = (e) => {
        setAddFoodInput(e.target.value);
        console.log(addFoodInput);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setMenu(menu.concat({
            id: new Date(),
            food: addFoodInput
        }))
        console.log(menu);
        axios.post('http://localhost:3000/menu', {
            id: new Date(),
            food: addFoodInput
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
        setAddFoodInput('');
    };

    const onPutHandler = (itemId) => {
        axios.put(SERVER_URL + '/menu/' + itemId, {
            id: itemId,
            food: "asdfasdf4654 Давленый ксенос"
        }).then(resp => {

            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const onDeleteHandler = (itemId) => {
        axios.delete(SERVER_URL + '/menu/' + itemId)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            });
        setMenu(menu.filter((item) => {
            if (item.id === itemId) return false
            console.log('itemId', item.id)
            return true
        }
        ))
    }

    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>
                <AdminHeader active={'menu'} />
                <form onSubmit={(e) => { onSubmitHandler(e) }}>

                    <input
                        className={[styles.menu_input].join(' ')}
                        type="text"
                        placeholder='добавление продукта'
                        value={addFoodInput}
                        onChange={(e) => { addFoodInputOnChangeHandler(e) }}
                    ></input>
                </form>

                <MenuList
                    menu={menu}
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
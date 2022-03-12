import React, { useEffect, useState } from 'react';
import styles from './AdminMenuPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import MenuList from '../../components/MenuList';
import { SERVER_URL } from '../../html/const';


const AdminMenuPage = () => {
    const [menu, setMenu] = useState([])
    const [addFoodInput, setAddFoodInput] = useState('');

    const fetchMenu = () => {
        fetch(SERVER_URL + '/menu')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMenu(data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(
        fetchMenu, []
    );

    const addFoodInputOnChangeHandler = (e) => {
        setAddFoodInput(e.target.value);
        console.log(addFoodInput);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setMenu(menu.concat(addFoodInput))
        console.log(menu);
        setAddFoodInput('');
    };

    const onPublishHandler = (data) => {
        console.log('publish', data)
        fetch(SERVER_URL + '/menu', {
            data
        })
        .then((response) => {
            return response.json();
        })
/*         .then((data) => {
            setMenu(data)
        })
 */        .catch(error => {
            console.log(error);
        });

    };

    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>
                <AdminHeader active={'menu'} />
                <form onSubmit={(e) => {onSubmitHandler(e)}}>

                    <input
                        className={[styles.menu_input].join(' ')}
                        type="text"
                        placeholder='добавление продукта'
                        value={addFoodInput}
                        onChange={(e) => { addFoodInputOnChangeHandler(e) }}
                    ></input>
                </form>

                <MenuList menu={menu} />

                <div className={styles.menu_btn_container}>
                    <button 
                    className={styles.menu_btn}
                    onClick={() => {onPublishHandler(menu)}}>оформить</button>
                    <button className={styles.menu_btn}>история</button>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;
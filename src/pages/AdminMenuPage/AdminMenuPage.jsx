import React, { useContext, useEffect, useState } from 'react';
import styles from './AdminMenuPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';
import GotService from '../../services/GotService';
import { Context } from '../../components/Context';
import { useNavigate } from 'react-router-dom';


const AdminMenuPage = () => {
    const gotService = new GotService;

    let navigate = useNavigate();


    const [menu, setMenu] = useState([]);
    const [foodInput, setFoodInput] = useState('');
    const [context, setContext] = useContext(Context);

    const redirect = () => {

        if (context.user && context.user.role !== 'admin') {
            navigate(`/`);
        }
    }
    redirect();

    const refreshList = () => {
        gotService.fetchData('/menu')
            .then((res) => { setMenu(res.data) })
    }

    useEffect(
        refreshList, []
    );

    const foodInputOnChangeHandler = (e) => {
        setFoodInput(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const id = `f${(+new Date).toString(16)}`;

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
    );
};

export default AdminMenuPage;
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './AdminStaffPage.module.scss';

import GotService from '../../services/GotService';
import AdminStore from '../../store/AdminStore';

import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';
import AuthService from '../../services/AuthService';
import AuthStore from '../../store/AuthStore';




const AdminStaffPage = observer(() => {

    const [staffInput, setStaffInput] = useState('');

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');




    const gotService = new GotService;

    const refreshList = () => {
        AdminStore.getUsers()
    }

    useEffect(
        refreshList, []
    );

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //добавление/изменение сотрудника здесь мы должны вводить данные сотрудника
        //потом регнуть его

        const id = `f${(+new Date).toString(16)}`;

        gotService.postData('/staff', { id: id, userName: staffInput })
            .then(() => { refreshList() })

        setStaffInput('');
    };

    const onRegistration = async (userEmail, userPass, userName) => {
        await AuthStore.addToStaffList(userEmail, userPass, userName)
        await AdminStore.getUsers()
        setUserName('')
        setUserEmail('')
        setUserPass('')
    }

    const onPutHandler = (itemId) => {
        gotService.putData('/staff', itemId, { id: itemId, userName: staffInput })
            .then(() => { refreshList() })
        setStaffInput('');
    }

    const onDeleteHandler = (itemId) => {
        gotService.deleteData('/staff', itemId)
            .then(() => { refreshList() })
    }

    return (
        <div className={styles.container}>
            <AdminHeader active={'staff'} />
            <div className={styles.flex_container}>
                <div className={styles.flex_container__left}>
                    <ItemList
                        btn_put={false}
                        item={AdminStore.users}
                        onPutHandler={onPutHandler}
                        onDeleteHandler={onDeleteHandler}
                    />


                </div>
                <div className={styles.flex_container__right}>
                    Форма добавления сотрудника
                    <div>
                        <input
                            className={[styles.menu_input].join(' ')}
                            type="text"
                            placeholder='введите имя сотрудника'
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
                        ></input>
                        <input
                            className={[styles.menu_input].join(' ')}
                            type="text"
                            placeholder='введите email сотрудника'
                            value={userEmail}
                            onChange={(e) => { setUserEmail(e.target.value) }}
                        ></input>
                        <input
                            className={[styles.menu_input].join(' ')}
                            type="text"
                            placeholder='введите пароль сотрудника'
                            value={userPass}
                            onChange={(e) => { setUserPass(e.target.value) }}
                        ></input>
                        <div className={styles.menu_btn_container}>
                            <button
                                className={styles.menu_btn}
                                onClick={() => { onRegistration(userEmail, userPass, userName) }}>
                                зарегистрировать
                            </button>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
});

export default AdminStaffPage;
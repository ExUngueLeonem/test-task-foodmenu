import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './AdminStaffPage.module.scss';

import AdminStore from '../../store/AdminStore';
import AuthStore from '../../store/AuthStore';

import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';

const AdminStaffPage = observer(() => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const refreshList = () => {
        AdminStore.getUsers()
    }

    useEffect(
        refreshList, []
    );

    const onRegistration = async (userEmail, userPass, userName) => {
        await AuthStore.addToStaffList(userEmail, userPass, userName)
        await AdminStore.getUsers();
        setUserName('');
        setUserEmail('');
        setUserPass('');
    }

    const onDeleteHandler = async (itemId) => {
        await AdminStore.deleteUser(itemId);
        await AdminStore.getUsers();
    }

    return (
        <div className={styles.container}>
            <AdminHeader active={'staff'} />
            <div className={styles.flex_container}>
                <div className={styles.flex_container__left}>
                    <ItemList
                        btn_put={false}
                        item={AdminStore.users}
                        onDeleteHandler={onDeleteHandler}
                    />
                </div>
                <div className={styles.flex_container__right}>
                    Форма регистрации сотрудника
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
                            type="password"
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
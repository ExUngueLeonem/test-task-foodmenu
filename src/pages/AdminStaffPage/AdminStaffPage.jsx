import React, { useEffect, useState } from 'react';
import styles from './AdminStaffPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';
import GotService from '../../services/GotService';


const AdminStaffPage = () => {
    const [staff, setStaff] = useState([]);

    const [staffInput, setStaffInput] = useState('');
    const gotService = new GotService;

    const refreshList = () => {
        gotService.fetchData('/staff')
            .then((res) => { setStaff(res.data) })
    }

    useEffect(
        refreshList, []
    );

    const staffInputOnChangeHandler = (e) => {
        setStaffInput(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const id = `f${(+new Date).toString(16)}`;

        gotService.postData('/staff', { id: id, userName: staffInput })
            .then(() => { refreshList() })

        setStaffInput('');
    };

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
            <form onSubmit={(e) => { onSubmitHandler(e) }}>

                <input
                    className={[styles.menu_input].join(' ')}
                    type="text"
                    placeholder='добавление/изменение сотрудника'
                    value={staffInput}
                    onChange={(e) => { staffInputOnChangeHandler(e) }}
                ></input>
            </form>

            <ItemList
                item={staff}
                onPutHandler={onPutHandler}
                onDeleteHandler={onDeleteHandler}
            />

            <div className={styles.menu_btn_container}>
                <button className={styles.menu_btn}>история</button>
            </div>
        </div>
    );
};

export default AdminStaffPage;
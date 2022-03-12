import React, { useEffect, useState } from 'react';
import styles from './AdminStaffPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';
import GotService from '../../services/GotService';


const AdminStaffPage = () => {
    const [staff, setStaff] = useState([]);
    
    const [foodInput, setFoodInput] = useState('');
    const gotService = new GotService;

    console.log(gotService)

    const refreshList = () => {
        gotService.fetchData('/staff')
            .then((res) => { setStaff(res.data) })
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

        gotService.postData('/staff', { id: id, food: foodInput })
            .then(() => { refreshList() })

        setFoodInput('');
    };

    const onPutHandler = (itemId) => {
        gotService.putData('/staff', itemId, { id: itemId, food: foodInput })
            .then(() => { refreshList() })
        setFoodInput('');
    }

    const onDeleteHandler = (itemId) => {
        gotService.deleteData('/staff', itemId)
            .then(() => { refreshList() })
    }

    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>
                <AdminHeader active={'staff'} />
                <form onSubmit={(e) => { onSubmitHandler(e) }}>

                    <input
                        className={[styles.menu_input].join(' ')}
                        type="text"
                        placeholder='добавление/изменение сотрудника'
                        value={foodInput}
                        onChange={(e) => { foodInputOnChangeHandler(e) }}
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
        </div>
    );
};

export default AdminStaffPage;
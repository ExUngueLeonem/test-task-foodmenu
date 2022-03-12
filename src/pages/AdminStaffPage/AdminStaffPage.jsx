import React from 'react';
import AdminHeader from '../../components/AdminHeader';
import styles from './AdminStaffPage.module.scss';

const AdminStaffPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>
            <AdminHeader active='staff'/>

                <input className={[styles.menu_input].join(' ')} type="text" placeholder='добавление сотрудника'></input>
                
                <div className={styles.menu_list}>

                    <div className={styles.menu_list__inner}>
                        <span>(список сотрудников)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("удалить элемент", e.target)}>изменить</div>
                    </div>
                    <div className={styles.menu_list__inner}>
                        <span>(список сотрудников)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("удалить элемент", e.target)}>изменить</div>
                    </div>
                    <div className={styles.menu_list__inner}>
                        <span>(список сотрудников)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("удалить элемент", e.target)}>изменить</div>
                    </div>
                    <div className={styles.menu_list__inner}>
                        <span>(список сотрудников)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("удалить элемент", e.target)}>изменить</div>
                    </div>
                    <div className={styles.menu_list__inner}>
                        <span>(список сотрудников)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("удалить элемент", e.target)}>изменить</div>
                    </div>
                    <div className={styles.menu_list__inner}>
                        <span>(список сотрудников)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("удалить элемент", e.target)}>изменить</div>
                    </div>

                </div>{/* /.item_list */}

                <div className={styles.menu_btn_container}>
                    <button className={styles.menu_btn}>оформить</button>
                    <button className={styles.menu_btn}>история</button>
                </div>
            </div>
        </div>
    );
};

export default AdminStaffPage;
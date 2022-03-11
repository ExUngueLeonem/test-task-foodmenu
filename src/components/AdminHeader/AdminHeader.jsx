import React from 'react';
import styles from './AdminHeader.module.scss';

const AdminHeader = () => {
    return (
        <div className={styles.header_menu}>
            <div className={styles.header_menu__inner}>Меню</div>
            <div className={styles.header_menu__inner}>Сотрудники</div>
            <div className={styles.header_menu__inner}>Заказы</div>
        </div>
    );
};

export default AdminHeader;
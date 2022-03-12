import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './AdminHeader.module.scss';

const AdminHeader = () => {
    const location = useLocation();
    console.log(location.pathname);

    if (location.pathname === '/admin/menu') {

    } else if (location.pathname === '/admin/staff') {

    } else {
        
    }

    return (
        <div className={styles.header_menu}>
            <Link to="../admin/menu" className={[styles.header_menu__inner, styles.active].join(' ')}>Меню</Link>
            <Link to="../admin/staff" className={[styles.header_menu__inner, styles.active].join(' ')}>Сотрудники</Link>
            <Link to="../admin/order" className={[styles.header_menu__inner, styles.active].join(' ')}>Заказы</Link>
        </div>
    );
};

export default AdminHeader;
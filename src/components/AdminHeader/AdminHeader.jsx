import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminHeader.module.scss';

const AdminHeader = ({ active }) => {

    const [state, setState] = useState([
        { id: 0, element: 'menu', content: 'Меню'},
        { id: 1, element: 'staff', content: 'Сотрудники'},
        { id: 2, element: 'order', content: 'Заказы'},
    ])

    return (
        <div className={styles.header_menu}>
            {state.map(item => {
                return (
                    <Link
                        to={`../admin/${item.element}`}
                        key={item.element}
                        className={[styles.header_menu__inner, item.element === active ? styles.active : null].join(' ')
                        }
                    >{item.content}
                    </Link>
                )
            })}
        </div>
    );
};

export default AdminHeader;
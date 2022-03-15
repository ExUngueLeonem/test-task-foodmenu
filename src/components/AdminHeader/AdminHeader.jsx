import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './AdminHeader.module.scss';
import { Context } from '../Context';

import AuthStore from '../../store/AuthStore';
import { observer } from 'mobx-react-lite';
 
const AdminHeader = observer(({ active }) => {

    const [context, setContext] = useContext(Context);

    const state = [
        { id: 0, element: 'menu', content: 'Меню' },
        { id: 1, element: 'staff', content: 'Сотрудники' },
        { id: 2, element: 'order', content: 'Заказы' },
    ]

    let userName = AuthStore.user.name;

    return (
        <>
            <div className={styles.header_menu}>

                {AuthStore.user.role !== 'admin' && (
                    <Navigate to="/auth" replace={true} />
                )}

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
            <div className={styles.userName}>
                {userName ? userName : null}
            </div>
        </>

    );
});

export default AdminHeader;
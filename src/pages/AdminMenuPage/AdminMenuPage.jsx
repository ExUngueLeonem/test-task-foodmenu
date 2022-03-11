import React from 'react';
import styles from './AdminMenuPage.module.scss';
/* styles. */

const AdminMenuPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>

                <div className={styles.header_menu}>
                    <div className={styles.header_menu__inner}>Меню</div>
                    <div className={styles.header_menu__inner}>Сотрудники</div>
                    <div className={styles.header_menu__inner}>Заказы</div>
                </div>

                <input className={[styles.menu_input].join(' ')} type="text" placeholder='добавление продукта'></input>
                
                <div className={styles.menu_list}>
                    <div className={styles.menu_list__inner}>
                        <span>(список продуктов в меню)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                    </div>

                    <div className={styles.menu_list__inner}>
                        <span>(список продуктов в меню)</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                    </div>

                    <div className={styles.menu_list__inner}>(список продуктов в меню)</div>
                    <div className={styles.menu_list__inner}>(список продуктов в меню)</div>
                    <div className={styles.menu_list__inner}>(список продуктов в меню)</div>
                    <div className={styles.menu_list__inner}>(список продуктов в меню)</div>
                </div>

                <div className={styles.menu_btn_container}>
                    <button className={styles.menu_btn}>оформить</button>
                    <button className={styles.menu_btn}>история</button>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;
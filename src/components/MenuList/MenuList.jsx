import React from 'react';
import styles from "./MenuList.module.scss";

const MenuList = ({ menu }) => {
    return (
        <div className={styles.menu_list}>
            {menu.map((menuItem) => {
                return (
                    <div key={menuItem} className={styles.menu_list__inner}>
                        <span>{menuItem}</span>
                        <div className={styles.btn_delete} onClick={(e) => console.log("удалить элемент", e.target)}></div>
                        <div className={styles.btn_put} onClick={(e) => console.log("изменить элемент", e.target)}>изменить</div>
                    </div>
                )
            })}
        </div>
    );
};

export default MenuList;
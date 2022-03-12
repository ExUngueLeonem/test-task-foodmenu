import React from 'react';
import styles from "./MenuList.module.scss";

const MenuList = ({
    menu,
    onDeleteHandler,
    onPutHandler
}) => {
    return (
        <div className={styles.menu_list}>
            {menu.map((menuItem) => {
                return (
                    <div key={menuItem.id} className={styles.menu_list__inner}>
                        <span>{menuItem.food}</span>
                        <div className={styles.btn_delete} onClick={(e) => onDeleteHandler(menuItem.id)}></div>
                        <div className={styles.btn_put} onClick={(e) => onPutHandler(menuItem.id)}>изменить</div>
                    </div>
                )
            })}
        </div>
    );
};

export default MenuList;
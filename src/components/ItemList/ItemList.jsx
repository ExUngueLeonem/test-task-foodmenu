import React from 'react';
import styles from "./ItemList.module.scss";

const itemList = ({
    item,
    onDeleteHandler,
    onPutHandler
}) => {
    return (
        <div className={styles.item_list}>
            {item.map((itemItem) => {
                return (
                    <div key={itemItem.id} className={styles.item_list__inner}>
                        <span>{itemItem.food || itemItem.userName}</span>
                        <div className={styles.btn_delete} onClick={(e) => onDeleteHandler(itemItem.id)}></div>
                        <div className={styles.btn_put} onClick={(e) => onPutHandler(itemItem.id)}>изменить</div>
                    </div>
                )
            })}
        </div>
    );
};

export default itemList;
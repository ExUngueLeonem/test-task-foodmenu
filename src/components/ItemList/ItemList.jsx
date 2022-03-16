import React from 'react';
import styles from "./ItemList.module.scss";

const ItemList = ({
    item,
    onDeleteHandler = () => { },
    onPutHandler = () => { },
    onPickHandler = () => { },
    btn_put = true,
    btn_delete = true
}) => {

    let listItemClassName = styles.item_list__inner;

    return (
        <div className={styles.item_list}>
            {item.map((itemItem) => {
                return (
                    <div
                        className={listItemClassName}
                        id={itemItem.id}
                        key={itemItem.id}
                        onClick={(e) => {onPickHandler(e) }}
                    >
                        <span>{itemItem.food || itemItem.userName}</span>
                        {btn_delete && <div className={styles.btn_delete} onClick={(e) => onDeleteHandler(itemItem.id)}></div>}
                        {btn_put && <div className={styles.btn_put} onClick={(e) => onPutHandler(itemItem.id)}>изменить</div>}
                    </div>
                )
            })}
        </div>
    );
};

export default ItemList;
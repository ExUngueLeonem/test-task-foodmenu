import React, { useState } from 'react';
import styles from "./ItemList.module.scss";

const ItemList = ({
    item,
    onDeleteHandler,
    onPutHandler, 
    changeble = false,
    btn_put = true,
    btn_delete = true
}) => {

        const onPickHandler = (e) => {
        if (!e.target.id) {
            e.target.parentNode.getAttribute('id')
            console.log(e.target.parentNode.getAttribute('id'));
        } else {
            console.log(e.target.id);
        }
    }

    //const activeItem

    


    const [activeId, setActiveId] = useState('');


    let listItemClassName = styles.item_list__inner;
    
    return (
        <div className={styles.item_list}>
            {item.map((itemItem) => {
                return (
                    <div 
                    className={listItemClassName}
                    id={itemItem.id}
                    key={itemItem.id} 
                    onClick={(e) => { changeble && (onPickHandler(e))}}
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
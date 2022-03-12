import React, { useEffect, useState } from 'react';
import styles from './AdminMenuPage.module.scss';
import AdminHeader from '../../components/AdminHeader';
import ItemList from '../../components/ItemList';
import { SERVER_URL } from '../../html/const';
import { axios } from '../../html/axios';


const AdminMenuPage = () => {
    const [menu, setMenu] = useState([])
    const [addFoodInput, setAddFoodInput] = useState('');

    //params = '/menu'
    const fetchData = (path) => {
       return axios.get(SERVER_URL + path)
            .then((res) => { setMenu(res.data) })
            .catch(error => { console.log(error) });
    }

    //console.log(fetchData('/menu'))


    //это заготовка под вынос
    //path = '/menu', data = {id: new Date(), food: addFoodInput}}
     const postData = (path, data) => {
        return axios.post(SERVER_URL + path, data
        ).then(
            fetchData('/menu')
        ).catch(error => {
            console.log(error);
        });
    }

    const deleteData = (path, itemId) => {
        return axios.delete(SERVER_URL + path +'/' + itemId)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(
        () => fetchData('/menu'), []
    );

    const addFoodInputOnChangeHandler = (e) => {
        setAddFoodInput(e.target.value);
        console.log(addFoodInput);
    };

    const onSubmitHandler = (e) => {
        const id = new Date();

        e.preventDefault();
        setMenu(menu.concat({
            id: id,
            food: addFoodInput
        }))
        
        //postData это надо рефакторить и выносить
        axios.post(SERVER_URL + '/menu', {
            id: id,
            food: addFoodInput
        }).then(resp => {
            console.log(resp);
            fetchData('/menu')
        }).catch(error => {
            console.log(error);
        });

        setAddFoodInput('');
    };

    const onPutHandler = (itemId) => {
        axios.put(SERVER_URL + '/menu' + '/' + itemId, {
            id: itemId,
            food: addFoodInput
        }).then(resp => {
            console.log(resp.data);
            fetchData('/menu')
        }).catch(error => {
            console.log(error);
        });
        setAddFoodInput('');
    }

    const onDeleteHandler = (itemId) => {
        axios.delete(SERVER_URL + '/menu' + '/' + itemId)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            });
        setMenu(menu.filter((item) => {
            if (item.id === itemId) return false
            console.log('itemId', item.id)
            return true
        }
        ))
    }

    return (
        <div className={styles.container}>
            <div className={styles.flex_container}>
                <AdminHeader active={'menu'} />
                <form onSubmit={(e) => { onSubmitHandler(e) }}>

                    <input
                        className={[styles.menu_input].join(' ')}
                        type="text"
                        placeholder='добавление/изменение продукта'
                        value={addFoodInput}
                        onChange={(e) => { addFoodInputOnChangeHandler(e) }}
                    ></input>
                </form>

                <ItemList
                    item={menu}
                    onPutHandler={onPutHandler}
                    onDeleteHandler={onDeleteHandler}
                />

                <div className={styles.menu_btn_container}>
                    <button className={styles.menu_btn}>история</button>
                </div>
            </div>
        </div>
    );
};

export default AdminMenuPage;
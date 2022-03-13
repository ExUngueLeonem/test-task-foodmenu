import React, { useContext, useState } from 'react';
import styles from './AuthForm.module.scss';
import GotService from '../../services/GotService';
import { useNavigate } from "react-router-dom";
import { Context } from '../Context';

/* styles. */
const AuthForm = () => {
    const gotService = new GotService();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [context, setContext] = useContext(Context);

    let navigate = useNavigate();

    //отлично, мы получаем объект юзера и токен доступа
    const loginHandler = (e) => {
        console.log("логинимся", email, password)
        gotService.postData('/login',
            {
                email,
                password
            }
        )
        .then(res => setContext(res.data))
        setEmail('');
        setPassword('');
        
        //нужно испавлять навигацию, по условию, если context.user.role === 'admin'
        navigate(`/admin/menu`);
    }

    const registrationHandler = (e) => {


        gotService.postData('/register',
            {
                "userName": "Шака шмака",
                "email": "asdfasd@mail.com",
                "password": "1234",
                "role": "user",
                "id": 123
            }
        )

        console.log("регистрируемся", email, password)

        setEmail('');
        setPassword('');

    }

    const inputLoginHandler = (e) => {
        setEmail(e.target.value)
        if (context.user){ console.log(context.user)}
    }

    const inputPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={styles.flex_container}>
            <div className={styles.form_container}>
                <div className={styles.header}>
                    <h2>Welcome Back</h2>
                    <h4>Сегодня ты сможешь поесть</h4>
                </div>
                <div className={styles.form}>
                    <input
                        className={styles.form_field}
                        type="email"
                        placeholder="Адрес почты"
                        value={email}
                        onChange={(e) => { inputLoginHandler(e) }} />

                    <input
                        type="password"
                        className={styles.form_field}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => { inputPasswordHandler(e) }} />
                    <p><a href="#">Забыли пароль?</a></p>
                    <button onClick={(e) => { loginHandler(e) }}>Вход</button>
                    <button onClick={(e) => { registrationHandler(e) }}>Регистрация</button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
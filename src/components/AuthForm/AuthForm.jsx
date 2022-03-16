import React, { useState } from 'react';
import styles from './AuthForm.module.scss';
import { Navigate } from "react-router-dom";

import AuthStore from '../../store/AuthStore';
import { observer } from 'mobx-react-lite';


const AuthForm = observer(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('')

    const inputLoginHandler = (e) => {
        setEmail(e.target.value)
    }

    const inputPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const inputUserNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const redirect = () => {
        switch (AuthStore.user.role) {
            case 'admin':
                return (<Navigate to="/admin/menu" replace={true} />)
            case 'user':
                return (<Navigate to="/user/order" replace={true} />)
            default:
                break;
        }
    }

    const loginHandler = () => {
        AuthStore.login(email, password)
    }

    const registrationHandler = (e) => {
        AuthStore.registration(email, password, userName)
        setEmail('')
        setPassword('')
    }

    return (
        <div className={styles.flex_container}>
            {redirect()}
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
                    <input
                        type="email"
                        className={styles.form_field}
                        placeholder="Имя пользователя"
                        value={userName}
                        onChange={(e) => { inputUserNameHandler(e) }} />

                    <p><a href="#">Забыли пароль?</a></p>
                    <button onClick={(e) => { loginHandler(e) }}>Вход</button>
                    <button onClick={(e) => { registrationHandler(e) }}>Регистрация</button>
                </div>
                <div>
                    <pre>
                        <br />
                        AdminLogin:    qwerty@qwerty.com
                        <br />
                        AdminPass:     1234
                        <br />
                        <br />
                        RabotygaLogin: perturabo@mail.com
                        <br />
                        RabotygaPass:  1234
                    </pre>
                </div>
            </div>
        </div>
    );
});

export default AuthForm;
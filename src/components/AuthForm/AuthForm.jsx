import React from 'react';
import styles from './AuthForm.module.scss';
/* styles. */
const AuthForm = () => {

    const submitHandler = (e) => {
        console.log('asdfasd')
    }

    return (
        <div className={styles.flex_container}>
            <div className={styles.form_container}>
                <div className={styles.header}>
                    <h2>Welcome Back</h2>
                    <h4>Сегодня ты можешь поесть</h4>
                </div>
                <div className={styles.form}>
                    <input type="email" className={styles.form_field} placeholder="Логин" />
                    <input type="password" className={styles.form_field} placeholder="Пароль" />
                    <p><a href="#">Забыли пароль?</a></p>
                    <button onClick={(e) => { submitHandler(e) }}>LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
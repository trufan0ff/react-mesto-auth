
import { Link } from "react-router-dom";
import {React, useEffect, useState } from "react";

function Register({ handleRegister, isDataSet }) {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = data;
        handleRegister(password, email);
    };

    useEffect(() => {
        if (isDataSet) {
            setData({ email: "", password: "" });
        }
    }, [isDataSet]);

    return (
        <section className="authorization">
            <h2 className="authorization__title">Регистрация</h2>

            <form onSubmit={handleSubmit} className="authorization__form">
                <input
                    className="authorization__input"
                    id="authorization-email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Введите email"
                />

                <input
                    className="authorization__input"
                    id="authorization-password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Введите пароль"
                />
                <button type="submit" className="authorization__button">Зарегистрироваться</button>
            </form>

            <p className="authorization__caption">
                Уже зарегистрированы?&nbsp;
                <Link to="signin" className="authorization__link">
                    Войти
                </Link>
            </p>
        </section>
    );
}

export default Register;
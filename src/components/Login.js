import { useState } from "react";


function Login({handleLogin}) {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = data;
        handleLogin(email, password);
    }

    return (
        <div className="authorization">
            <h2 className="authorization__title">Вход</h2>
            <form onSubmit={handleSubmit} className="authorization__form">
                <input className="authorization__input" onChange={handleChange} value={data.email} id="email-input" name="email" minLength="2" maxLength="40" required type="email" placeholder="Введите email" />
                <input className="authorization__input" name="password" type="password" value={data.password} onChange={handleChange} id="code-input" minLength="2" maxLength="200" required placeholder="Введите пароль" />
                <button className="authorization__button" type="submit">Войти</button>
            </form>
            <p className="authorization__caption"></p>
        </div>
    );
}

export default Login;
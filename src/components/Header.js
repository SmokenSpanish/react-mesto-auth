import React from 'react';
import logo from '../images/logo.svg';
import { Route, Link } from 'react-router-dom';

function Header(props) {
    return(
        <header className="header">
            <img src={logo} alt="Логотип проекта Mesto" className="header__logo"/>
            {
            props.loggedIn && (
                <Route exact path="/">
                    <div className="header__container">
                        <p className="header__email">{props.email}</p>
                        <Link
                            className="header__sign-out"
                            onClick={props.onLogout}
                            to="/sign-in">Выйти
                        </Link>
                    </div>
                </Route>
            )
        }
        <Route path="/sign-in">
            <Link
                className="header__link"
                to="/sign-up">Регистрация
            </Link>
        </Route>
        <Route path="/sign-up">
            <Link
                className="header__link"
                to="/sign-in">Войти
            </Link>
        </Route>
        </header>
    )
}

export default Header;
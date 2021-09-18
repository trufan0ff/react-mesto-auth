import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import { useEffect } from "react";
import api from "../utils/Api";
import React from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import Login from "./Login.js";
import Register from "./Register.js";
import * as auth from "../utils/auth";
import InfoToolTip from "./InfoTooltip";
import MenuMobile from "./MenuMobile";



function App() {
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        about: '',
        _id: ''
    })
    const [cards, setCards] = React.useState([]);
    const [userData, setUserData] = React.useState({
        email: ""
    })
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false)
    const [infoToolTipData, setInfoToolTipData] = React.useState({
        title: "",
        icon: ""
    })
    const [isDataSet, setIsDataSet] = React.useState(false)
    const history = useHistory()

    const handleLogin = (email, password) => {
        auth.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("token", res.token)
                    setUserData({ email: email })
                    setLoggedIn(true)
                    setIsMenuOpen(false)
                    history.push("/")
                }
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setCurrentUser(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [setCurrentUser])

    useEffect(() => {
        if (loggedIn) {
            history.push("/")
        }
    }, [history, loggedIn])

    function handleAddPlaceSubmit({ name, link }) {
        api.addCard(name, link)
            .then(newCard => {
                setCards([newCard, ...cards])
                closeAllPopups()
            })
    }

    function handleUpdateUser({ name, about }) {
        api.updateProfile(name, about)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleUpdateAvatar({ avatar }) {
        api.updateAvatar(avatar)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        (!isLiked ? api.setLikeForCard(card._id) : api.removeLikeFromCard(card._id))
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => c._id === card._id ? newCard : c)
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCardDelete(card) {
        const isOwn = card.owner._id === currentUser._id;
        api.deleteCard(card._id, isOwn)
            .then(res => {
                setCards(cards.filter(item => { return item._id !== card._id }))
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    const [isEditAvatarPopupOpen, setStateAvatar] = React.useState(false);
    function handleEditAvatarClick() {
        setStateAvatar(true)
    }
    const [isEditProfilePopupOpen, setStateProfile] = React.useState(false);
    function handleEditProfileClick() {
        setStateProfile(true)
    }
    const [isAddPlacePopupOpen, setStatePlace] = React.useState(false);
    function handleAddPlaceClick() {
        setStatePlace(true)
    }

    function closeAllPopups() {
        setStateProfile(false)
        setStatePlace(false)
        setStateAvatar(false)
        setSelectedCard(null)
        setIsInfoToolTipOpen(false)
    }

    const tokenCheck = () => {
        const token = localStorage.getItem("token")
        if (token) {
            auth.getToken(token)
                .then((res) => {
                    if (res) {
                        setUserData({ email: res.data.email })
                        setLoggedIn(true)
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        tokenCheck()
    }, [])



    const toggleMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
    }

    function handleInfoToolTip() {
        setIsInfoToolTipOpen(true)
    }



    const handleLogout = () => {
        localStorage.removeItem("token")
        setUserData({ email: "" })
        setLoggedIn(false)
    }

    const handleRegister = (password, email) => {
        auth.register(password, email)
            .then((res) => {
                setIsDataSet(true)
                history.push("/signin")
                setInfoToolTipData({
                    icon: true,
                    title: "Вы успешно зарегистрировались!",
                })
                handleInfoToolTip()
            })
            .catch(() => {
                setIsDataSet(false);
                setInfoToolTipData({
                    icon: false,
                    title: "Что-то пошло не так! Попробуйте ещё раз.",
                });
                handleInfoToolTip()
            })
            .finally(() => {
                setIsDataSet(false)
            })
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            {
                <div className="App" background="#000">
                    <div className="body">
                        <div className="page">
                            {loggedIn && (
                                <MenuMobile
                                    email={userData.email}
                                    handleLogout={handleLogout}
                                    isMenuOpen={isMenuOpen}
                                />
                            )}
                            <Header
                                handleLogout={handleLogout}
                                email={userData.email}
                                toggleMenu={toggleMenu}
                                isMenuOpen={isMenuOpen}
                            />
                            <Switch>
                                <Route path="/signin">
                                    <Login handleLogin={handleLogin} />
                                </Route>

                                <Route path="/signup">
                                    <Register handleRegister={handleRegister} isDataSet={isDataSet}  />
                                </Route>

                                <ProtectedRoute
                                    exect
                                    path="/"
                                    loggedIn={loggedIn}
                                    cards={cards}
                                    onCardLike={handleCardLike}
                                    onCardDelete={handleCardDelete}
                                    handleCardClick={handleCardClick}
                                    onEditProfile={handleEditProfileClick}
                                    onAddPlace={handleAddPlaceClick}
                                    onEditAvatar={handleEditAvatarClick}
                                    
                                    component={Main}
                                />

                                <Route path="/">
                                    {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
                                </Route>
                                <Footer />

                                <EditAvatarPopup
                                    name={"update-popup"}
                                    title={"Обновить аватар"}
                                    onClose={closeAllPopups}
                                    isOpen={isEditAvatarPopupOpen}
                                    onUpdateAvatar={handleUpdateAvatar}
                                />

                                <EditProfilePopup
                                    name={"edit-popup"}
                                    title={"Редактировать профиль"}
                                    onUpdateUser={handleUpdateUser}
                                    onClose={closeAllPopups}
                                    isOpen={isEditProfilePopupOpen}
                                />

                                <AddPlacePopup
                                    name={"add-popup"}
                                    title={"Новое место"}
                                    onClose={closeAllPopups}
                                    isOpen={isAddPlacePopupOpen}
                                    onAddPlace={handleAddPlaceSubmit}
                                />


                                <ImagePopup
                                    handleCardClick={handleCardClick}
                                    onClose={closeAllPopups}
                                    card={selectedCard}
                                />
                                <InfoToolTip
                                    isOpen={isInfoToolTipOpen}
                                    onClose={closeAllPopups}
                                    title={infoToolTipData.title}
                                    icon={infoToolTipData.icon}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            }
        </CurrentUserContext.Provider >
    );
}

export default App;

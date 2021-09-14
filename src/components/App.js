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


function App() {

    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        about: '',
        _id: '',
    });
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setCurrentUser(res)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setCurrentUser])

    function handleAddPlaceSubmit({ name, link }) {
        api.addCard(name, link)
            .then(newCard => {
                setCards([newCard, ...cards]);
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
                console.log(err);
            });
    }

    function handleUpdateAvatar({ avatar }) {
        api.updateAvatar(avatar)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err);
            });
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
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        const isOwn = card.owner._id === currentUser._id;
        api.deleteCard(card._id, isOwn)
            .then(res => {
                setCards(cards.filter(item => { return item._id !== card._id }))
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    const [isEditAvatarPopupOpen, setStateAvatar] = React.useState(false);
    function handleEditAvatarClick() {
        setStateAvatar(true);
    }
    const [isEditProfilePopupOpen, setStateProfile] = React.useState(false);
    function handleEditProfileClick() {
        setStateProfile(true);
    }
    const [isAddPlacePopupOpen, setStatePlace] = React.useState(false);
    function handleAddPlaceClick() {
        setStatePlace(true);
    }
    const [isAddConfirmPopupOpen, setStateConfirm] = React.useState(false);
    function handleConfirmPlaceClick() {
        setStateConfirm(true);
    }

    function closeAllPopups() {
        setClosePopups(true);
        setStateProfile(false);
        setStatePlace(false);
        setStateAvatar(false);
        setSelectedCard(null);
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
            {
                <div className="App" background="#000">
                    <div className="body">
                        <div className="page">
                            <Header />
                            <Main
                                cards={cards}
                                onCardLike={handleCardLike}
                                onCardDelete={handleCardDelete}
                                handleCardClick={handleCardClick}
                                onEditProfile={handleEditProfileClick}
                                onAddPlace={handleAddPlaceClick}
                                onEditAvatar={handleEditAvatarClick}
                            ></Main>
                            <Footer />

                            <EditAvatarPopup
                                name={"update-popup"}
                                title={"Обновить аватар"}
                                onClose={closeAllPopups}
                                isOpen={isEditAvatarPopupOpen}
                                onUpdateAvatar={handleUpdateAvatar} />

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
                                onAddPlace={handleAddPlaceSubmit} />


                            <ImagePopup
                                handleCardClick={handleCardClick}
                                onClose={closeAllPopups}
                                card={selectedCard}
                            />

                        </div>
                    </div>
                </div>
            }
        </CurrentUserContext.Provider>
    );
}

export default App;

import React from "react";
import avatar_edit from '../images/avatar_edit.svg'
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';



function Main({ cards, onCardLike, onCardDelete, onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-group">
                    <img src={currentUser.avatar} className="profile__avatar" alt="Аватар" onClick={onEditAvatar} />
                    <img src={avatar_edit} className="profile__avatar-edit" alt="Карандаш" />
                </div>
                <div className="profile__group">
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                    <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
                </div>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        onCardDelete={onCardDelete}
                        onCardClick={handleCardClick}
                        onCardLike={onCardLike}
                        card={card}
                    />
                )
                )}
            </section>
        </main>
    )
}
export default Main;
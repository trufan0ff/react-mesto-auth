import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `${isOwn ? 'element__delete' : 'element__delete_type_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `${!isLiked ? 'element__heart' : 'element__heart_type_active'}`
        );

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }
    return (
        <div className="element">
            <img src={card.link} style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick} className="element__image" alt={card.name} />
            <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick} />
            <div className="element__group">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__group_likes">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} />
                    <h2 className="element__count_heart">{card.likes.length}</h2>
                </div>
            </div>
        </div>
    )
}


export default Card;
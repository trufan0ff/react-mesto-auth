function ImagePopup({ card, onClose }) {
    return (
        <section className={`popup popup_type_image-popup ${(card !== null) && 'popup_active'}`} id="image-popup">
            <div className="popup__container-image">
                <div className="popup__container popup__container_type_image" >
                    <button className="popup__close" onClick={onClose} type="button"></button>
                    <img src={card !== null ? card.link : "#"} className="popup__image" alt="Изображение" />
                </div>
                <h2 className="popup__image-title">{card !== null ? card.name : "#"}</h2>
            </div>
        </section>
    )
}

export default ImagePopup;
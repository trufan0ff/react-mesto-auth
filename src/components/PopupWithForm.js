function PopupWithForm({children, name, title, isOpen, onClose, onSubmit}) {
    
return (
        <section className={`popup  ${isOpen && "popup_active"}   popup_type_${name}`}>
            <div className="popup__container"> 
                <button className="popup__close" type="button" onClick={onClose} />
                <h2 className="popup__title">{title}</h2> 
                <form className="popup__form" name={`${name}`} noValidate onSubmit={onSubmit} >
                    {children}
                    <button className="popup__submit"  type="submit">Сохранить</button> 
                </form> 
            </div> 
        </section> 
)
}

export default PopupWithForm;
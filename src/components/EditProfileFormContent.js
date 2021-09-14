function EditProfileFormContent() {
    return (
        <>
            <input className="popup__input popup__input_type_name" id="name-input" minLength="2" maxLength="40" required type="text" name="name" placeholder="Ваше имя" /> 
            <span className="name-input-error"></span> 
            <input className="popup__input popup__input_type_activity" id="about" minLength="2" maxLength="200" required type="text" name="activity" placeholder="О себе" /> 
            <span className="about-error"></span> 
        </>
        )
}

export default EditProfileFormContent;
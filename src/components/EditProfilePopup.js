import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup(props) {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext);
    
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [props.isOpen, currentUser]);
    
    function handleChangeName(e) {
        setName(e.target.value);
    }
    
    function handleChangeAbout(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} title={props.title}>
            <input className="popup__input popup__input_type_name" value={name} onChange={handleChangeName} id="name-input" minLength="2" maxLength="40" required type="text" name="name" placeholder="Ваше имя" />
            <span className="name-input-error"></span>
            <input className="popup__input popup__input_type_activity" value={description} onChange={handleChangeAbout} id="about" minLength="2" maxLength="200" required type="text" name="activity" placeholder="О себе" />
            <span className="about-error"></span>
        </PopupWithForm>
    )
}
export default EditProfilePopup;
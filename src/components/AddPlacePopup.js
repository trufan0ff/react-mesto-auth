import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('')
    const [link, setDescription] = React.useState('')

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: name,
            link: link
        });
    }

    return (
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} title={props.title}>
            <input onChange={handleChangeName} className="popup__input popup__input_type_mesto-name" id="name" type="text" minLength="2" maxLength="30" required name="name" placeholder="Название" />
            <span className="name-error"></span>
            <input onChange={handleChangeLink} className="popup__input popup__input_type_link" id="link" pattern="https://.*" type="url" name="link" required placeholder="Ссылка на картинку" />
            <span className="link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
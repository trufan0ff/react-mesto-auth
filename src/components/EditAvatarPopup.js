import PopupWithForm from "./PopupWithForm.js";
import React from "react";

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    
    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }
    return (
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} title={props.title} >
            <input ref={avatarRef} className="popup__input popup__input_type_link-avatar" id="link-avatar-input" pattern="https://.*" type="url" required placeholder="Ссылка на картинку" name="link-avatar-input" />
            <span className="link-avatar-input-error" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
import SucceedIcon from "../images/icon.svg";
import ErrorIcon from "../images/Union.svg";

function InfoTooltip({ title, isOpen, onClose, icon}) {
    
    return (
            <section className={`popup  ${isOpen && "popup_active"}`}>
                <div className="popup__container"> 
                    <button className="popup__close" type="button" onClick={onClose} />
                    <img src={icon ? SucceedIcon : ErrorIcon} className="popup__icon" alt="Иконка" />
                    <h2 className="popup__title">{title}</h2> 
                </div> 
            </section> 
    )
    }
    
    export default InfoTooltip;
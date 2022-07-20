import React from "react";
import "./stylesheets/Projects.css";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup" onClick={() => props.setTrigger(false)}>
            <button class="btn-close" id="close-btn" onClick={() => props.setTrigger(false)} />
            <div class="popup-inner">
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;
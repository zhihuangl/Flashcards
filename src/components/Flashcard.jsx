import React from "react";

const Flashcard = (props) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>{props.question}</h3>
                </div>
                <div class="flip-card-back">
                    <h3>{props.answer}</h3>
                </div>
            </div>
        </div>
    )
}
export default Flashcard;
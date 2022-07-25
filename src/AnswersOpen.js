import React from "react";

export default function AnswersOpen({ answers , number, clicked, setClicked}) {
    
    return (
        <>
            <div className={clicked ? "question-reveal" : "question-reveal none"} >
                <div>
                    <><p>{answers[number]}</p>
                        <div class="answer-options">
                            <p className="dont-remember">Não lembrei</p>
                            <p className="almost-remember">Quase não lembrei</p>
                            <p className="zap">Zap!</p>
                        </div>
                        <img src="./assets/img/setinha.png" alt="setinha" className="setinha" onClick={() => setClicked(!clicked)}/></>
                </div>
            </div>

        </>
    );
}
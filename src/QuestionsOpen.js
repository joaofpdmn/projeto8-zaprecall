import React from "react";


export default function QuestionsOpen({ questions, clicked , clicado, setClicked , number}) {
    return (
        <>
            <div className={clicado ? "question-reveal" : "question-reveal none"}>
                <div>
            <><><p>{questions[number]}</p>
            <img src="./assets/img/setinha.png" alt="setinha" class="setinha" onClick={() => setClicked(!clicked)}/></></>
                </div>
            </div>

        </>
    );
}
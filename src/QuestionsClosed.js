import React from 'react';
import AnswersOpen from './AnswersOpen';
import QuestionsOpen from './QuestionsOpen';



function QuestionsWorking({ questions , number}) {
    const [clicado, setClicado] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    

    return (
        <><div className="question-container">
                <><><div className="question">
                    <><p>Pergunta {number+1} </p>
                        <img src="./assets/img/Vector.png" alt="vector" class="vector" onClick={() => setClicado(!clicado)} /></>
                </div>
                </>
                </>
                <QuestionsOpen questions={questions} clicado={clicado}clicked={clicked} setClicked ={setClicked} number = {number}/>
        </div>
        </>
    );
}

function AnswersWorking({answers, number}){
    const [clicked, setClicked] = React.useState(true);
    return (
        <>
        <AnswersOpen answers={answers} number={number} clicked={clicked} setClicked={setClicked}/>
        </>
    );
}

export default function QuestionsClosed({questions, answers}){
    return (
        <><>
            {questions.map((value, index) => <><QuestionsWorking questions={questions} number={index} /><AnswersWorking answers={answers} number={index}/></>
            )}
        </></>
    )
}
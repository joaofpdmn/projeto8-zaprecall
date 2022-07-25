import React from "react";
import QuestionsClosed from "./QuestionsClosed";

export default function Questions() {
    const [questions, setQuestions] = React.useState([
        'O que é JSX?', 'O React é __', 'Componentes devem iniciar com __', 'Podemos colocar __ dentro do JSX', ' O ReactDOM nos ajuda __ ', 'Usamos o npm para __', 'Usamos props para __ ', 'Usamos estado (state) para __ '
    ]);
    const [answers, setAnswers] = React.useState([
        'Uma extensão de linguagem do JavaScript', 'uma biblioteca JavaScript para construção de interfaces', ' letra maiúscula', 'expressões', ' interagindo com a DOM para colocar componentes React na mesma', 'gerenciar os pacotes necessários e suas dependências', 'passar diferentes informações para componentes ', 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    ]);

    return (
        <>
        <QuestionsClosed questions={questions} answers={answers}/>   
        </>
    );
}
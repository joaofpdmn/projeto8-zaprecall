import { Link } from "react-router-dom";


export default function StartScreen() {
    return (
        <div class="start-screen">
            <img src="./assets/img/logo-big.png" alt="logo" class="logo-img" />
            <h1 class="start-title">ZapRecall</h1>
            <div class="start-button">
                <Link to="/Body">
                    <p>Iniciar Recall!</p>
                </Link>
            </div>
        </div>
    );
}
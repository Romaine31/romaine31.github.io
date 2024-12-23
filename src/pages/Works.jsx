import { Link } from "react-router-dom"

export default function Works(){

    return(
        <div className="MyWorks">
            <ul className="WorksList">
                <li>
                    <Link to="https://github.com/Romaine31/RosawellAcademy" target="_blank">Rosawell Academy</Link>
                    <p>My Thesis Project, A game made in unity (language: C#)</p>
                </li>
                <li>
                    <Link to="https://github.com/Romaine31/DFA-Simulator" target="_blank">DFA Simulator</Link>
                    <p>Deterministic Finite Automata Simulator Made in JAVA</p>
                </li>
                <li>
                    <Link to="https://github.com/Romaine31/SimpleSnake" target="_blank">Snake Game</Link>
                    <p>A simple snake game made with html and css</p>
                </li>
            </ul>
        </div>
    )

    
}
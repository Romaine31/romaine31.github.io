import { Link } from "react-router-dom"

export default function About(){
    return(
        <div className="myContact">
            <p>Email me at:<br/><u>romaine.cagubcub@gmail.com</u><br/>
            <Link to="https://github.com/Romaine31" target="_blank">
            <img src="/src/assets/github.png" style={{height: "30px", width: "30px"}}/>
            </Link>
            <Link to="https://linkedin.com/in/imromaine" target="_blank">
            <img src="/src/assets/linkedin.png" style={{height: "30px", width: "30px"}}/>
            </Link>
            </p>
        </div>
    )
}
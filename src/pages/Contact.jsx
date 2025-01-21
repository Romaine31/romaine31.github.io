import { Link } from "react-router-dom"
import gitImg from "/src/assets/github.png?url"
import linkedinImg from "/src/assets/linkedin.png?url"

export default function About(){
    return(
        <div className="myContact">
            <p>Email me at:<br/><u>romaine.cagubcub@gmail.com</u><br/>
            <Link to="https://github.com/Romaine31" target="_blank">
            <img src={gitImg} style={{height: "30px", width: "30px"}}/>
            </Link>
            <Link to="https://linkedin.com/in/imromaine" target="_blank">
            <img src={linkedinImg} style={{height: "30px", width: "30px"}}/>
            </Link>
            </p>
        </div>
    )
}
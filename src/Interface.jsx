import { Link } from "react-router-dom"

export function DevName(){


    return(
        <div className="myName">
        <h1>JOHN ROMAINE CAGUBCUB</h1>
        <p>Computer Science Graduate</p>
        </div>
    )
}

export function InfoDirectory(){

    return(
        <div className="infoDirectory">
        <nav>
            <ul style={{listStyleType:"none"}}>
                <li>
            <Link to="/">About me</Link>
                </li>
                <li>
            <Link to="/Experience">Experiences</Link>
                </li>
                <li>
            <Link to="/Works">Works</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}

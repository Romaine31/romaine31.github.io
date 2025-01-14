import { Link } from "react-router-dom"

export default function Experience(){
    return(
        <div className="rightPanel" style={{overflow:"hidden"}}>
            <div className="innerLeftPanel shortPanels">
            <h1>Languages</h1>
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Java</li>
                <li>Python</li>
                <li>C#</li>
            </ul>
            </div>
            <div className="innerRightPanel shortPanels">
            <h1>Software</h1>
            <ul>
                <li>Visual Studio Code</li>
                <li>Spyder</li>
                <li>Unity Engine</li>
                <li>Pycharm</li>
                <li>Apache Netbeans</li>
                <li>Github</li>
                <li>Office 365</li>
            </ul>
            </div>
            <div className="myHistory">
                <div className="expPanel">
                    <h1>THESIS PROJECT</h1>
                    <h2>Rosawell Academy (2D Game made in Unity)</h2>
                    <p>A 2-Dimensional Educational Video Game Developed in the Unity engine which utilizes C#</p>
                </div>
                <div className="expPanel">
                    <h1>Highly Succeed Internship</h1>
                    <h2>Mobile Development</h2>
                    <p>Worked as a mobile developer. (Kotlin, xml)</p>
                </div>
                <div className="expPanel">
                    <h1>College - BS Computer Science</h1>
                    <h2>2020 - 2024</h2>
                    <p>Studied and graduated in Bachelor of Computer Science in De La Salle University Dasmarinas</p>
                </div>
                <div className="expPanel">
                    <h1>Information and Communications Technology</h1>
                    <h2>Senior High School 2018 - 2020</h2>
                    <p>Studied Information and Commications Technology in De La Salle University Dasmarinas</p>
                </div>
            </div>
        </div>       
    )
}
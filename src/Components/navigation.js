import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
            <div className="navigationapp">
             <div className="Componenets">
                <Link to="/Page1"> Page1 </Link><br></br>
                <Link to="/Page2">Page2 </Link><br></br>
                <Link to="/Page3">Page3</Link><br></br>
                <Link to="/Page4">Page4 </Link> <br></br>
             </div>
             <div className="text">
                <h1> Welcome! </h1>
                <p> Have a Good Day</p>
             </div>
            </div>
       
    )

}
export default Navigation
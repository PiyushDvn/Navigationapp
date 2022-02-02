import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
                <div className="Componenets">
                <Link to="/Page1"> Page1 </Link><br></br>
                <Link to="/Page2">Page2 </Link><br></br>
                <Link to="/Page3">Page3</Link><br></br>
                <Link to="/Page4">Page4 </Link> <br></br>
             </div>
    );
}


export default Navbar;
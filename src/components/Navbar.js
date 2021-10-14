import { Link } from 'react-router-dom';
import iconEagle from '../img/iconEagle.png';

function Narbar(){
    
    return(
        <nav id="navbarMenu" className="navbar navbar-light bg-light px-3 mb-5 p-2">
            <Link className="navbar-brand" to="/">
                <img src={iconEagle} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                Eagle TwT
            </Link>
           
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link id="btnProfile" to="/profile" className="btn btn-white">
                        <i className="bi bi-person-circle" stylename="font-size: 8rem; color: cornflowerblue;"></i>
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Narbar;
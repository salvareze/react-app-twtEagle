import { Link } from 'react-router-dom';

function Profile({currentUser, onClickLogout}){

    return(
        <div className="row d-flex justify-content-center">
            <div className ="col col-sm-10 col-md-5 col-lg-4 m-2">
                <div className="card" stylename="width: 18rem;">
                    <img src={currentUser.avatar} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p id="idfechaCard" className="text-center fw-bold">@{currentUser.username}</p>
                        <p className="card-text">{currentUser.bio}</p>
                        <Link className="navbar-brand" to="/" onClick={() => onClickLogout(currentUser.username)}>
                            Salir
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
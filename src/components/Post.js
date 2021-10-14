import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getLike } from '../services/UsersServices';

function Post(props){
    const {replace}  = useHistory()
    const [likes, setLikes] = useState(props.likes)

    // useEffect({
        
    // },[likes])

    function onBtnLikes(id){
        getLike(id)
        .then((response) => {
            console.log('responseLike: '+ response);
            replace("/")
        })        
    }

    return(
        <div className="card">
            <img src={props.image} className="card-img-top" alt="imgenTwT"/>
            <div className="card-body">
                <div className="d-flex justify-content-between divlikes">
                    <p id="idfechaCard" className="text-start text-muted">{props.createdAt}</p>
                    <button id="btnLike" 
                        onClick={() => onBtnLikes(props.id)}
                        type="button" className="btn btn-sm btn btn-danger btnLikes text-white">
                        <i className="bi bi-heart-fill" stylename="font-size: 2rem; color: cornflowerblue;"> </i>
                        {likes}
                    </button> 
                </div>
                <p id="idfechaCard" className="text-start fw-bold">@{props.author}</p>
                <p id="idTextCard" className="text-start lh-base card-text">{props.text}</p>
                <p id="idTextCard" className="text-start text-muted">
                    <i className="bi bi-chat-right" stylename="font-size: 2rem; color: cornflowerblue;"></i>Comentarios({props.comments.length})
                </p>
            </div>
        </div>
    )    
}

export default Post;
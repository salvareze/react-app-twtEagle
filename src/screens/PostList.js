import { useEffect } from "react/cjs/react.development";
import Post from "../components/Post";

function PostList({posts, search}){

    return(
        <div className="PostList" id="idDivTwts">
            <div className="row">
                {posts.filter(post => (post.text.includes(search))).map((post) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <Post 
                            key={post.id} 
                            id={post.id} 
                            createdAt={post.createdAt}
                            author={post.author.username}
                            text={post.text}
                            comments={post.comments}
                            image={post.image}
                            likes={post.likes}
                            
                        />
                    </div>    
                ))}
            </div>
        </div>
    )
}

export default PostList;
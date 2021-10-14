import React, { useEffect, useState } from 'react';
import './App.css';
import Narbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PostList from './screens/PostList';
import Profile from './screens/Profile';
import Login from './screens/Login';
import { Route, Switch, useHistory } from 'react-router';
import { getUserId, getPosts, getLogout } from "./services/UsersServices";

function App() {
  const {replace}  = useHistory()
  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState({
    avatar : "",
    username : "",
    bio: "",
  })

  useEffect(() => { 
    getUserId(JSON.parse(localStorage.getItem('idUser')))
        .then((response) => {
            setCurrentUser({
              avatar : response.data.avatar,
              username : response.data.username,
              bio : response.data.bio
            })
            replace("/")
        }).catch(err => {
            replace("/login")
        })

    getPosts().then(posts => {
      setPosts(posts)
    })
  }, [])

  function searchText(search){
    setSearch(search); 
  }

  function logout(username){
    getLogout(username)
        .then(response => {  
        setCurrentUser({})
        localStorage.clear();
        replace("/login")
    })
  }

  return (
    <div className="App">
      <Narbar/>

      <main className="container">
        <Switch>
          <Route path="/" exact>
            <SearchBar search={search} onChange={(search) => searchText(search)}/>
            {posts.length ? <PostList posts={posts} search={search}/> : 'Loading...'}
          </Route>
          <Route path="/login" component={Login} exact/>
          <Route path="/profile" exact>
            <Profile currentUser={currentUser} onClickLogout={(username) => logout(username)}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

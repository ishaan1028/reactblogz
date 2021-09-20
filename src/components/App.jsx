import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
import Header from "./Header";
import NotFound from "./NotFound";
import Post from "./Post";
import CreatePost from "./CreatePost";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import StateContexts from "../contexts/StateContexts";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


function App() {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getPosts = async () => {

            try {
                const { data: postss } = await axios.get("https://jsonplaceholder.typicode.com/posts/");
                setPosts(postss);
            }
            catch (err) {
                console.error("Error getting posts", err);
            }
        };

        const getComments = async () => {

            try {
                const { data: commentss } = await axios.get("https://jsonplaceholder.typicode.com/comments");
                setComments(commentss);
            }
            catch (err) {
                console.error("Error getting comments", err);
            }
        };

        const getUsers = async () => {

            try {
                const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(users);
            }
            catch (err) {
                console.error("Error getting users", err);
            }
        };

        getPosts();
        getComments();
        getUsers();



    }, []);

    return <>
        <StateContexts.Provider value={{ posts, setPosts, comments, users }}>


            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/home" exact component={Home}><Redirect to="/"></Redirect></Route>
                    <Route path="/posts/createpost" exact component={CreatePost}></Route>
                    <Route path="/posts/updatepost/:id" component={CreatePost}></Route>

                    <Route path="/posts" exact component={Posts}></Route>
                    <Route path="/posts/:id" component={Post}></Route>


                    <Route path="/about" component={About}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>

            </BrowserRouter>
        </StateContexts.Provider>


    </>
}

export default App;
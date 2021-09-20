import axios from "axios";
import { useState, useContext, useEffect } from "react";
import StateContexts from "../contexts/StateContexts";
import { useParams, useHistory } from "react-router-dom"
import { Container, Row } from "react-bootstrap";


function CreatePost() {

    const history = useHistory();
    const { id } = useParams();
    const { posts, setPosts, users } = useContext(StateContexts);
    const [userId, setUserId] = useState(0);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [user, setUser] = useState("");


    const SelectForm = () => {
        if (id) {
            return <select name="user" defaultValue={userId} >

                <option key={-1} value={user.id} >{user.name}</option>


            </select>

        } else {
            console.log(userId);
            console.log(users);
            return <select name="user" value={userId} onChange={handleChange}>
                <option key={-1} value={0} disabled >Select</option>
                {users.map((user, i) => {
                    return <option key={i} value={user.id}>{user.name}</option>
                })
                }
            </select>
        }
    }

    useEffect(() => {



        const getPost = async () => {
            if (id) {
                const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);


                const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`); console.log(user)
                setUser(user);
                setUserId(post.userId);
                setTitle(post.title);
                setBody(post.body);

            }

        }
        getPost();

    }, [posts, id]);






    const handleChange = ({ target: { name, value } }) => {

        switch (name) {
            case "user": {
                setUser(value);
                setUserId(value);
                break;
            }
            case "title": {
                setTitle(value);
                break;

            }
            case "body": {
                setBody(value);
                break;

            }
            default: {
                setUser("");
                setTitle("");
                setBody("");

            }
        }



    }

    const updateOperation = async () => {
        const { data: newPost } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            userId,
            title,
            body
        });

        let postsTemp = [...posts];
        console.log(newPost)
        console.log(postsTemp)
        postsTemp[postsTemp.findIndex((i) => i.id === parseInt(id))] = newPost;

        setPosts(postsTemp);
    }

    const createOperation = async () => {
        const { data: newPost } = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            userId,
            title,
            body
        });

        let postsTemp = [...posts];
        postsTemp.push(newPost);
        setPosts(postsTemp);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateOperation();
            history.replace(`/posts/${id}`);
        } else {
            createOperation();
            history.replace(`/posts/`);

        }



    }
    return <section>
        <Container>
            <Row>
                <div className="titles">
                    <h1>Add/Update</h1>
                    <div className="undline" >

                    </div>
                </div>
            </Row>

            <Row>
                <form action="/" onSubmit={handleSubmit}>
                    {<SelectForm />}


                    <label htmlFor="">Title</label>
                    <input type="text" name="title" onChange={handleChange} value={title} placeholder="Enter Title" />
                    <label htmlFor="">Body</label>
                    <input type="text" name="body" onChange={handleChange} value={body} placeholder="Enter Body" />
                    <button type="submit">Submit</button>
                </form>

            </Row>
        </Container>
    </section>
}

export default CreatePost;
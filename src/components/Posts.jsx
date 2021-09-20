import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import StateContexts from "../contexts/StateContexts";
import { Modal, Container, Row, Button, Table } from "react-bootstrap";



function Posts() {

    const [show, setShow] = useState(false);
    const [pid, setPid] = useState();
    const { posts, setPosts, users } = useContext(StateContexts);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setPid(id);
    }
    console.log(posts);

    const GetName = (props) => {

        let user = users.filter(user => user.id === parseInt(props.uid));

        console.log(user);

        return user.map(user => user.name);

    }


    const deletePost = async (id) => {
        setShow(false);
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        let postsTemp = [...posts];
        postsTemp = postsTemp.filter(post => post.id !== id);

        setPosts(postsTemp);

    }





    return <section>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deleting post?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => deletePost(pid)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

        <Container>
            <Row>
                <div className="titles">
                    <h1>POSTS</h1>
                    <div className="undline" >

                    </div>
                </div>

                <div className="addpost">
                    <Link to={`/posts/createpost`}><Button variant="success" size="lg">Add Post</Button></Link>

                </div>
            </Row>

            <Row>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => {
                            return <tr key={index}>
                                <td>{post.id}</td>
                                <td><GetName uid={post.userId} /></td>
                                <td style={{ textTransform: "capitalize" }}>{post.title}</td>
                                <td className="tdflex">
                                    <Button variant="danger" onClick={() => handleShow(post.id)}>Delete</Button>
                                    <Link to={`/posts/${post.id}`}><Button>Read</Button></Link></td>

                            </tr>;
                        })}

                    </tbody>
                </Table>
            </Row>
        </Container>

    </section>
}

export default Posts;
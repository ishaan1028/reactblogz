import { useParams } from "react-router-dom";
import { useContext } from "react";
import StateContexts from "../contexts/StateContexts";
import { Link } from "react-router-dom";
import { Container, Row, Button, Card, Alert } from "react-bootstrap";


function Post() {
    window.scrollTo(0, 0);
    const { posts, comments, users } = useContext(StateContexts);

    const params = useParams();
    let post = posts.filter(post => post.id === +params.id);
    let user = users.filter(user => user.id === (parseInt((+params.id - 1) / 10)) + 1);
    console.log(user)
    let commentsId = comments.filter(comment => comment.postId === +params.id);
    return <section>

        <Container>

            <Row>
                <div className="titles">
                    <h1>Post {params.id}</h1>
                    <div className="undline" >

                    </div>
                </div>

                <div className="addpost">
                    <Link to={`/posts/updatepost/${params.id}`}><Button size="lg">Update Post</Button></Link>

                </div>
            </Row>
            <Row>
                <h3>Author: {user.map(user => user.name)}</h3>
                <h3>email: {user.map(user => user.email)}</h3>
                <h3>contact: {user.map(user => user.phone)}</h3>
                <h3>company: {user.map(user => user.company.name)}</h3>
            </Row>
            <h1>
                Title: {post.map(post => post.title)}
            </h1>
            <p>
                Body: {post.map(post => post.body)}
            </p>

            <Alert >
                <h1>Comments</h1>
            </Alert>


            {
                commentsId.map((comment, ind) => {
                    return <Card key={ind}>
                        <Card.Header as="h5" style={{ backgroundColor: "#cfe2ff" }}>Title: {comment.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>By: {comment.email}</Card.Text>
                            <Card.Text>
                                {comment.body}
                            </Card.Text>
                            <Button variant="primary">Edit comment</Button>
                        </Card.Body>
                    </Card>

                }
                )
            }
        </Container>
    </section>
}

export default Post;
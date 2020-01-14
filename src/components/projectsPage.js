import React, { Component } from 'react';
import Portfolio from './images/portfolio.png';
import Questioner from './images/questioner.png';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';


class Projects extends Component {

    render(){
        const backStyle = {
            backgroundColor: '#f2f2f2',
        }

        return (
            <div style={backStyle} id="projects">
                <Container>
                <u><h1 className="Project animated fadeInUpBig">Projects</h1></u>
                <Row>
                    <Col>
                        <Card style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={Portfolio} />
                            <Card.Body>
                                    <Card.Title className="Projo">Questioner</Card.Title>
                                    <hr/>
                                <Card.Text>
                                        Questioner web app build using <Badge variant="secondary">HTML, CSS and Javascript</Badge> The application backend is build using <Badge variant="secondary">Python/Flask and PostgreSQL</Badge>
                                </Card.Text>
                                    <Card.Link target="_blank" href="https://jonathanmusila.github.io/Questioner/UI/">View Project</Card.Link>
                                    <Card.Link target="_blank" href="https://github.com/jonathanmusila/Questioner/tree/gh-pages">View Code</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: 'auto' }}>
                            <Card.Img variant="top" src={Portfolio} />
                            <Card.Body>
                                <Card.Title className="Projo">Store Manager</Card.Title>
                                <hr/>
                                <Card.Text>
                                        Store Manager web app build using <Badge variant="secondary">HTML, CSS and Javascript</Badge> The application backend is build using <Badge variant="secondary">Python/Flask and PostgreSQL</Badge>
                            </Card.Text>
                                    <Card.Link target="_blank" href="https://jonathanmusila.github.io/Store-Manager/UI/">View Project</Card.Link>
                                    <Card.Link target="_blank" href="https://github.com/jonathanmusila/Store-Manager/tree/gh-pages/UI">View Code</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="Project"></div>
                </Container>
            </div>
        );
    }
}

export default Projects;
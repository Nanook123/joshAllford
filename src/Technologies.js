import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Technologies() {
    return (
        <div>
            <h1 className="pt-5">CURRENT TECH STACK</h1>
            <Container className="customContainer">
                <Row className="justify-content-center">
                    <Col md={3} sm={6} xs={12}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-html5-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>HTML5</h1>
                                   <Button variant="primary">Find out more</Button>
                               </div>
                           </div>
                           
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           
                            <div className="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="devicon-css3-plain"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h1>CSS3</h1>
                                    <Button variant="primary">Find out more</Button>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                       <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           
                            <div className="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="devicon-javascript-plain"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h1>JAVASCRIPT</h1>
                                    <Button variant="primary">Find out more</Button>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-react-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>REACT</h1>
                                   <Button variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} sm={6} xs={12}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-ruby-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>RUBY</h1>
                                   <Button variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-rails-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>RAILS</h1>
                                   <Button variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-php-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>PHP</h1>
                                   <Button variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card className="text-center justify-content-center mx-auto" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                            <i class="devicon-postgresql-plain"></i>
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} sm={6} xs={12}>
                        <Card className="text-center justify-content-center mx-auto" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                            <i class="devicon-git-plain"></i>
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card className="text-center justify-content-center mx-auto" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                            <i class="devicon-github-original"></i>
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card className="text-center justify-content-center mx-auto" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                            <i class="devicon-godot-plain"></i>
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={12}>
                        <Card className="text-center justify-content-center mx-auto" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                            <i class="devicon-bootstrap-plain"></i>
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Technologies;
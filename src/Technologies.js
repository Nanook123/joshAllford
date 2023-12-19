import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ElementWithVisibility from './ElementWithVisibility';

function Technologies() {
    return (
        <Container id="techStack" className="customContainer">
           <ElementWithVisibility className="techStack">
            <h1 className="pt-5">CURRENT TECH STACK</h1>
            <p className="pt-3">Hover on desktop or click on the icons to find out more Info</p>
            
                <Row className="justify-content-center">
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-html5-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>HTML5</h1>
                                   <Button href="https://developer.mozilla.org/en-US/docs/Web/HTML" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           
                            <div className="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="devicon-css3-plain"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h1>CSS3</h1>
                                    <Button href="https://developer.mozilla.org/en-US/docs/Web/CSS" variant="primary">Find out more</Button>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                       <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           
                            <div className="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="devicon-javascript-plain"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h1>JAVASCRIPT</h1>
                                    <Button href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" variant="primary">Find out more</Button>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-react-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>REACT</h1>
                                   <Button href="https://react.dev/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-ruby-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>RUBY</h1>
                                   <Button href="https://www.ruby-lang.org/en/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-rails-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>RAILS</h1>
                                   <Button href="https://rubyonrails.org/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-php-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>PHP</h1>
                                   <Button href="https://www.php.net/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                       <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-bootstrap-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>BOOTSTRAP</h1>
                                   <Button href="https://getbootstrap.com/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-git-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>GIT</h1>
                                   <Button href="https://git-scm.com/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-github-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>GITHUB</h1>
                                   <Button href="https://github.com/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-godot-plain"></i>
                               </div>
                               <div class="flip-card-back">
                                   <h1>GODOT</h1>
                                   <Button href="https://godotengine.org/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                    <Col md={3} sm={6} xs={6}>
                    <Card className="text-center justify-content-center mx-auto flip-card" style={{ width: '15em', backgroundColor: 'rgba(24, 0, 36, 0.041)' }}>
                           <div className="flip-card-inner">
                               <div class="flip-card-front">
                                   <i class="devicon-postgresql-plain"></i>
                               </div>
                               <div id="technicalProjects" class="flip-card-back">
                                   <h1>POSTGRESQL</h1>
                                   <Button href="https://www.postgresql.org/" variant="primary">Find out more</Button>
                               </div>
                           </div>
                       </Card>
                    </Col>
                </Row>
                </ElementWithVisibility>
            </Container>
            
        
    );
}

export default Technologies;
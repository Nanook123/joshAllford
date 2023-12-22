import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import insta from './insta.png'
import linkedin from './linkedin.png'

function Footer() {
    return (
        <div>
            <Container id="footer">
                <Row>
                    <a className="styledLink pt-5 pb-2" href="mailto:joshallfordnanook@gmail.com">Get in contact!</a>
                </Row>
                <Row class="d-flex justify-content-center pb-5">
                    <div class="text-center justify-content-center">
                    <a href="https://www.instagram.com/nanookotns/"><img src={insta}></img></a>
                    <a href="https://www.linkedin.com/in/josh-allford-84b148224/"><img src={linkedin}></img></a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
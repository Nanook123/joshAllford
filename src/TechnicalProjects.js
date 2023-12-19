import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ElementWithVisibility from './ElementWithVisibility';



function TechnicalProject() {
    return (
        <div>
            <Container className="text-white">
           <ElementWithVisibility className="technicalProjects">
                <Row>
                    <h1>PROJECTS</h1>
                    <p>All these Projects were before I had landed my first Job, but more personal projects are coming soon !</p>
                </Row>
                <Row>
                <Col md={6}>
                    <h2>Glamour-Gram</h2>
                    <a className="styledLink" href="https://github.com/ggaereminck/ff-glamour-app">Glamour-Gram Git</a>
                    <p>This was one of the last projects we developed at flatiron, in this project me and a couple of collegues created an instagram style app for the popular game Final Fantasy 14 where players could upload pictures of their favourite armour sets or outfits, it featured like and dislike buttons each with a counter, the ability to be able to leave reviews on specific posts and also the ability to pin your favourite outfits to the top of your own page for users to view.</p>
                </Col>
                <Col md={6}>
                <h2>Hostolo</h2>
                    <a className="styledLink" href="https://github.com/Nanook123/SoloHostelclient">Hostolo</a>
                    <p>This was the last project I did at flat iron and was a solo project, with this App you are able to connect with friends and see what hostels they had been to in their travels and how they rated them, this featured a relational data base utilizing ruby on rails for a fully functioning friends list and being able to have seperate pages with everyones reviews on hostels and a page dedicated to only your friends making it easy to get great reccomendations from people you may have met while travelling</p>
                    </Col>
                </Row>
                </ElementWithVisibility>
            </Container>
        </div>
    )
}

export default TechnicalProject
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import skyline from './tokyoSkyline.jpg'
import onsen from './Onsen.jpg'
import pagoda from './pagoda1.jpg'


function AboutMe() {
  return (
    <Container className="pb-5">
        <Row>
            <Col>
            <Carousel slide>
      <Carousel.Item>
        <img src={skyline} alt="tokyo" className="carouselImage" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={onsen} className="carouselImage" text="second slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={pagoda} className="carouselImage" text="third slide" />
     
      </Carousel.Item>
    </Carousel>
    </Col>
    <Col>
    <h1>ABOUT ME</h1>
    <p className="aboutMe">2 years ago I came back from travelling for 6 months and found myself wanting something more from my career,
    with my love of Technology and Learning it did not take me long to realise I wanted to get into Software Engineering, After working a few months in an IT analyst job I took the dive and joined <a href="https://flatironschool.com/"> Flatiron School.</a>
    this was an intense bootcamp lasting 4 months where I learnt an incredible amount doing a full stack developer course which involved technologies such as - HTML, CSS, Javascript, React, Ruby, Ruby on Rails and PosgresSQL </p>
    </Col>
    </Row>
    </Container>
  );
}

export default AboutMe;
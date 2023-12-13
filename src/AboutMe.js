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
            <Col md={6}>
            <Carousel slide>
      <Carousel.Item>
        <img src={skyline} alt="tokyo" className="carouselImage" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={onsen} alt="kusatsu" className="carouselImage" text="second slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={pagoda} alt="sensoji" className="carouselImage" text="third slide" />
      </Carousel.Item>
    </Carousel>
    </Col>
    <Col md={6}>
    <h1 className="mt-5">ABOUT ME</h1>
    <p className="aboutMe">2 years ago I came back from travelling for 6 months and found myself wanting something more from my career,
    with my love of Technology and Learning it did not take me long to realise I wanted to get into Software Engineering, After working a few months in an IT analyst job I took the dive and joined <a href="https://flatironschool.com/"> Flatiron School. </a>
    this was an intense bootcamp lasting 4 months where I learnt an incredible amount doing a full stack developer course which involved technologies such as - HTML, CSS, Javascript, React, Ruby, Ruby on Rails and PosgresSQL, I completed this challenge and sought out my next which would be working in this industry</p>
    </Col>
    </Row>
    <Row>
      <Col>
      <h1 className="pt-5">PROFESSIONAL EXPERIENCE</h1>
      <p className="aboutMe">FuseMetrix allowed me to really flex my HTML,CSS Javascript skills and continue learning in the process where I picked up Bootstrap for responsive designs and PHP for back end and API integration</p></Col>
    </Row>
    <Row>
      <h2 className="">
      COUPLE EXAMPLES OF MY WORK</h2>
      <Col md={6} className="WTT">
      <a href="https://tickets.wakethetiger.com/book" className="styledLink">Wake The Tiger</a>
      <p className="aboutMe text-center pt-2">I really enjoyed working on this design, I tried pushing my self as much as possible in terms of interactivity and responsiveness that a customer would receive. as you can see I took some inspiration from this design and included it here !</p>
      </Col>
      <Col md={6} className="peak">
      <a href="https://bookings.peakwildlifepark.co.uk/book" className="styledLink">Peak Wildlife Park</a>
      <p className="aboutMe text-center pt-2">With this website we had to really prove ourselves as we tried to enter a new sector with Zoo's, I believe we achieved that with a clean and responsive design making it easy to use for all kinds of customers</p>
      </Col>
    </Row>
    </Container>
  );
}

export default AboutMe;
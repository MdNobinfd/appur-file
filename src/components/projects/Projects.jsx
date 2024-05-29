import { FaLongArrowAltRight } from "react-icons/fa";
import card from '../../assets/Card.png';
import cardtop from '../../assets/cardtop.png'
import cardbtm from '../../assets/cardbtm.png'
import { Col, Container, Row } from "react-bootstrap";
import {ScrollingColorBackground} from "react-scrolling-color-background"
import "./Projects.css"
 function Projects() {
  <ScrollingColorBackground
  selector='.js-color-stop[data-background-color]'
  colorDataAttribute='data-background-color'
  initialRgb='#00d'
/>
  return (

    <section id="project">
  <Container>
    <Row>
        <Col lg={6} sm={12}>
            <h2 className="proone mb-5">View Our Projects</h2>
        </Col>
        <Col lg={{span:3, offset:3}}>
            <h4 className="protwo mb-5">View More <FaLongArrowAltRight /></h4>
        </Col>
        <div className="pro-body">
            <Row>
                <Col lg={7} sm={12}>
                  <div className="pro-main"  data-aos="fade-right">
                    <h3>Workhub office Webflow Webflow Design</h3>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                    <div className="bttn"><a href="#">View Project</a></div>
                  </div>
                </Col>
                <Col lg={5} sm={12}>
                   <div className="pro-side"  data-aos="zoom-in-up">
                    <h3>Unisaas Website Design</h3>
                    <div className="bttn-1"><a href="#">View Portfolio <FaLongArrowAltRight /></a></div>
                   </div>
                   <div className="pro-me"  data-aos="fade-right">
                   <h3>Unisaas Website Design</h3>
                    <div className="bttn-1"><a href="#">View Portfolio <FaLongArrowAltRight /></a></div>
                   </div>
                </Col>
            </Row>
        </div>
        
    </Row>
  </Container>
  </section>
  )
}
export default Projects;
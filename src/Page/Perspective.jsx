import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosCloudUpload } from "react-icons/io";
import { RiImageEditFill,RiShieldCheckFill } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";



const Perspective = () => {
  const features = [
    { icon: <IoIosCloudUpload />, title: "Upload" },
    { icon: <RiImageEditFill />, title: "Edit" },
    { icon: <RiShieldCheckFill />, title: "Quality" },
    { icon: <BsDownload />, title: "Download" },
  ];

  return (
    <section className="features-section text-center">
      <h2 className="main-about-title text-center pb-5 pt-5">A Perspective of Moments!</h2>
      <Container>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-4">
              <Card className="feature-card">
                <Card.Body>
                  <div className="icon">{feature.icon}</div>
                  <Card.Title className="mt-2">{feature.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Perspective;

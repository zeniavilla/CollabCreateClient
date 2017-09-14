import React from 'react';

import { Button, Col, Row } from 'react-bootstrap';

const UserPublicProfile = props => {
  const { id, name, email, bio, bio_img, phone_number, website, instagram, location, services } = props.user;
  
  const bioBackgroundImg = {
    backgroundImage: `url(${bio_img})`
  };

  const renderServices = (services) ? services.map(service => service.name).join(', ') : null

  return (
    <div>
      <Row className="profile-header">
        <Col sm={3}>
          <div className="profile-bio-img" style={bioBackgroundImg}>
            <Button href={`mailto:${email}`}><i className="fa fa-envelope-o"></i></Button>
          </div>
        </Col>
        <Col sm={9} className="center-vertically">
          <h1>Meet</h1>
          <h2>{name}</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={2} className="center">
          <i className="fa fa-briefcase profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            {renderServices}
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={2} className="center">
          <i className="fa fa-map-marker profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            {location}
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={2} className="center">
          <i className="fa fa-user profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            {bio}
          </div>
        </Col>
      </Row>

      <Row>
      <Col sm={2} className="center">
          <i className="fa fa-envelope profile-icon"></i>
        </Col>
        <Col sm={10}  className="border-col">
          <div className="profile-section">
            <div><a href={`mailto:${email}`}>{email}</a></div>
            <div><a href={`tel:${phone_number}`}>{phone_number}</a></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserPublicProfile;
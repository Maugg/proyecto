import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import NavMenu from './NavMenu';
import Profile from './Profile';

export default class Login extends React.Component{


  render(){

    return(
      <div>
        <NavMenu/>
        <Container>
          <Row>
            <Col sm={2}/>
            <Col>
              <Profile
                isLoggedIn={true}
                userName="Juanito"/>
            </Col>
            <Col sm={2}/>
          </Row>
        </Container>
      </div>
    );
  }


}

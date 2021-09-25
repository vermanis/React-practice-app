import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GroupMembers from './GroupMembers'
import SiteFooterLogo from './SiteFooterLogo';
import Technologies from './Technologies';

function MyFooter() {

    return (
        <>
        <Container fluid="true" className="mt-5">
          <Row className="p-4 bg-dark text-center text-light mx-0 pb-sm-0 mb-sm-0">
            <Col md={4}  className={['rounded','m-1','mb-sm-4']}>
                <GroupMembers/>
            </Col>
            <Col md={{order:'last'}}   className={['rounded','m-1','mb-sm-4']}>
                <Technologies />
            </Col>
            <Col md={4}  className={['rounded','m-1','mb-sm-0']}>
                <SiteFooterLogo />
            </Col>
          </Row>
          <div className="text-light text-center bg-dark pb-2 mb-0 text-small">
              <p> All rights reserved to SMVITA. &copy; 2021 <br /><small>Developed By Amol Bharsakle</small></p>
          </div>
        </Container> 
        </> 
    )
}

export default MyFooter

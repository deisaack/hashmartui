// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import PageHeader from '../shared/PageHeader';

// blocks
import BlockMap from '../blocks/BlockMap';

// data stubs
import theme from '../../data/theme';
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {Container, Col, Form, FormGroup, Label,  Button, } from 'reactstrap'




function SitePageContactUs() {
    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'Contact Us', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Contact Us — ${theme.name}`}</title>
            </Helmet>

            <BlockMap />

            <PageHeader header="Contact Us" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="card mb-0">
                        <div className="card-body contact-us">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <h4 className="contact-us__header card-title">Our Address</h4>

                                        <div className="contact-us__address">
                                            <p>
                                                Yala Towers, Biashara Street, Nairobi Kenya
                                                <br />
                                                Email: info@hashmart.co.ke
                                                <br />
                                                Phone Number: +254 716 110 444
                                            </p>

                                            <p>
                                                <strong>Opening Hours</strong>
                                                <br />
                                                Monday to Friday: 8am-8pm
                                                <br />
                                                Saturday: 8am-6pm
                                                <br />
                                                Sunday: 10am-4pm
                                            </p>

                                            {/*<p>*/}

                                            {/*    <strong>Comment</strong>*/}
                                            {/*    <br />*/}
                                            {/*    Lorem ipsum dolor sit amet, consectetur adipiscing*/}
                                            {/*    elit. Curabitur suscipit suscipit mi, non tempor*/}
                                            {/*    nulla finibus eget. Lorem ipsum dolor sit amet,*/}
                                            {/*    consectetur adipiscing elit.*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        {/* TODO: handle submission of Leave a Message*/}
                                        <h4 className="contact-us__header card-title">Leave us a Message</h4>



                                        <Container className="strap">
                                            <AvForm>
                                                <Col className="colu">
                                                    <FormGroup className="form-group">
                                                        <Label>Name</Label>
                                                        <AvField
                                                            type="text"
                                                            className="form-AvField"
                                                            id="name"
                                                            name="name"
                                                            validate={{
                                                                required : {value: true, errorMessage: "This is a required field."},
                                                            }}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col>
                                                    <FormGroup>
                                                        <Label>Email</Label>
                                                        <AvField
                                                            type="email"
                                                            className="form-AvField"
                                                            id="email"
                                                            name="email"
                                                            validate={{
                                                                required : {value: true, errorMessage: "This is a required field."},
                                                                email: {value: true, errorMessage: "invalid email address"}
                                                            }}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col>
                                                    <FormGroup>
                                                        <Label>Phone number</Label>
                                                        <AvField
                                                            type="number"
                                                            className="form-AvField"
                                                            id="phoneNumber"
                                                            name="phoneNumber"
                                                            validate={{
                                                                minLength: {value: 10}
                                                            }}
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Message</Label>
                                                        <AvField
                                                            type="textarea"
                                                            className="form-AvField"
                                                            id="message"
                                                            name="message"
                                                            validate={{
                                                                minLength: {value: 10},
                                                                required:{value:true, errorMessage:"This is a required field."}
                                                            }}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Button className="form-submit" color="primary">submit</Button>
                                            </AvForm>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageContactUs;

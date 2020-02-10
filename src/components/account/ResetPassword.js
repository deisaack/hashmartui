import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Col, Form, FormGroup, Label,  Button, } from 'reactstrap'
import {AvForm, AvField} from 'availity-reactstrap-validation'
import FilterCategComponent from "../filters/FilterCategComponent";
class ResetPassword extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className="strap">
                  <AvForm>
                      <Col className="colu">
                         <FormGroup>
                             <Label>Current Password</Label>
                             <AvField
                                 type="password"
                                 className="form-AvField"
                                 id="password-current"
                                 name="password-current"
                                 placeholder="Current Password"
                                 validate={{
                                     required : {value: true, errorMessage: "required field"},
                                     minLength: {value: 6, errorMessage:"should be at least 6 characters"}
                                 }}
                             />
                         </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup>
                              <Label>New Password</Label>
                               <AvField
                                  type="email"
                                  className="form-AvField"
                                  id="password-new"
                                  name="password-new"
                                  placeholder="New Password"
                                  validate={{
                                      required : {value: true, errorMessage: "this is required field"},
                                      minLength: {value: 6},
                                      email: {value: true, errorMessage: "invalid email"}
                                  }}
                                  />
                          </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup>
                              <Label>Confirm Password</Label>
                              <AvField
                                  type="password"
                                  className="form-AvField"
                                  id="password-confirm"
                                  name="password-confirm"
                                  placeholder="Re-enter New Password"
                                  validate={{
                                      required : {value: true, errorMessage: "this is required field"},
                                      minLength: {value: 6}
                                  }}
                              />
                          </FormGroup>

                      </Col>
                      <Button>Reset</Button>
                  </AvForm>
                <FilterCategComponent/>

            </Container>
        );
    }

}
export default ResetPassword;

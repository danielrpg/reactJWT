import React, { Component } from 'react';
import { Container, Card, CardTitle, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { LOGIN_PAGE } from '../../constants';
import './login.css';

class Login extends Component {
    render() {
        return(
            <div className="login-container">
                <Row>
                    <Col xs="3">

                    </Col>
                    <Col xs="6">
                        <Card body className="card-login">
                            <CardTitle>{ LOGIN_PAGE.LOGIN_TITLE }</CardTitle>
                            <hr />
                            <Form>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="login_email" className="mr-sm-2">{ LOGIN_PAGE.LOGIN_LBL_EMAIL }</Label>
                                    <Input type="email" name="email" id="login_email" placeholder={ LOGIN_PAGE.LOGIN_TXT_EMAIL_PH } />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="login_password" className="mr-sm-2">{ LOGIN_PAGE.LOGIN_LBL_PASSWORD }</Label>
                                    <Input type="password" name="password" id="login_password" placeholder={ LOGIN_PAGE.LOGIN_TXT_PASSWORD } />
                                </FormGroup>
                                <br />
                                <Row className="text-center">
                                    <Col xs="4">

                                    </Col>
                                    <Col xs="2">
                                        <Button className="btn-outline-primary">{ LOGIN_PAGE.LOGIN_BTN_TITLE }</Button>
                                    </Col>
                                    <Col xs="2">
                                        <a href="#">Register</a>
                                    </Col>
                                    <Col xs="4">

                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs="3">

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;
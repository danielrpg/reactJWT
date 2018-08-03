import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { loginConstants } from '../../constants';
import './login.css';
import { userAction } from '../../actions';

class Login extends Component {

    constructor(props) {
        super(props);

        this.props.dispatch(userAction.logout());
    }

    render() {
        return(
            <div className="login-container">
                <Row>
                    <Col xs="3">

                    </Col>
                    <Col xs="6">
                        <Card body className="card-login">
                            <CardTitle>{ loginConstants.LOGIN_TITLE }</CardTitle>
                            <hr />
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="login_email" className="mr-sm-2">{ loginConstants.LOGIN_LBL_EMAIL }</Label>
                                    <Input type="email" name="email" id="login_email" placeholder={ loginConstants.LOGIN_TXT_EMAIL_PH } />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="login_password" className="mr-sm-2">{ loginConstants.LOGIN_LBL_PASSWORD }</Label>
                                    <Input type="password" name="password" id="login_password" placeholder={ loginConstants.LOGIN_TXT_PASSWORD } />
                                </FormGroup>
                                <br />
                                <Row className="text-center">
                                    <Col xs="4">

                                    </Col>
                                    <Col xs="2">
                                        <Button className="btn-outline-primary">{ loginConstants.LOGIN_BTN_TITLE }</Button>
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

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);
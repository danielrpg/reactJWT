import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';
import UnauthorizedLayout from '../layouts/UnauthorizedLayout';
import { history } from '../helpers';
import  { alertActions } from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
        dispatch(alertActions.clear());
    });
  }

  render() {
    // const { alert } = this.props;
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3 text-center">Cars Shopping</h1>
                    {/*{ alert.message && <div className={`alert ${alert.type}`}> { alert.message } </div> }*/}
                    <BrowserRouter>
                        <Switch>
                            <Route path="/auth" component={UnauthorizedLayout} />
                            {/*<AuthorizedRoute path="/app" component={PrimaryLayout} />*/}
                            <Redirect to="/auth" />
                        </Switch>
                    </BrowserRouter>
                </Container>
            </Jumbotron>

        </div>
    );
  }
}


function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);

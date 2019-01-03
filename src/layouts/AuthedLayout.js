import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthedLayout extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to = '/login' />
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
};
  

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userReducer.isAuthenticated
  };
};

export default connect(mapStateToProps, null)(AuthedLayout);
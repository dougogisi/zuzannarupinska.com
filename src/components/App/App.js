import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const App = props => <h1>{props.name}</h1>;

App.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

export default connect(mapStateToProps)(App);

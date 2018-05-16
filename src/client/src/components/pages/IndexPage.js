import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    title: 'Hello, World!'
  };
};

const Title = connect(mapStateToProps)((props) => (
  <h1>{props.title}</h1>
));

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Title />
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

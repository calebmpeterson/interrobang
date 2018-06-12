import React from 'react';
import { connect } from 'react-redux';

import { createSearchURL } from '../../api/backendless';

import Layout from './Layout';
import Icon from '../controls/Icon';

import { SETUP_CHROME_URL, SETUP_SAFARI_URL, SETUP_EDGE_URL, SETUP_FIREFOX_URL } from '../../constants/Constants';

import { viewLogin, viewConfiguration, copySearchPatternURL } from '../../actions';

const mapStateToProps = (state) => {
  return {
    searchURL: createSearchURL(state.user),
    user: state.user
  };
};

class BrowserPage extends React.Component {
  constructor(props) {
    super(props);

    this.refSearchURL = React.createRef();
  }

  componentDidMount() {
    if (this.props.user.missing && !this.props.user.loading) {
      viewLogin();
    }
  }

  render() {
    const BrowserButton = (props) => (
      <div>
        <a href={props.href} target="_blank" className="d-inline-block" title={props.title}>
          <Icon className="browser-icon" icon={props.icon} />
        </a>
      </div>
    );

    const onCopySearchPatternURL = () => {
      this.refSearchURL.current.select();
      copySearchPatternURL();
    };

    return (
      <Layout title="Setup Your Browser">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <p className="lead">
                You need to tell your browser about your Interrobang by following the browser-specific instructions.
              </p>

              <div className="my-5">
                <p className="lead">
                  You'll need your Interrobang's search pattern:
                </p>

                <div className="input-group input-group-lg">
                  <input className="form-control border-primary" readOnly ref={this.refSearchURL} value={this.props.searchURL} />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary" title="Copy to clipboard" onClick={onCopySearchPatternURL}>
                      <Icon icon="clipboard-arrow-left" className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-5">
                <p className="lead">
                  And the instructions for your browser:
                </p>
              </div>

              <div className="row text-center my-5">
                <div className="col-3">
                  <BrowserButton icon="google-chrome" title="Google Chrome" href={SETUP_CHROME_URL} />
                </div>
                <div className="col-3">
                  <BrowserButton icon="edge" title="Microsoft Edge" href={SETUP_EDGE_URL} />
                </div>
                <div className="col-3">
                  <BrowserButton icon="apple-safari" title="Apple Safari" href={SETUP_SAFARI_URL} />
                </div>
                <div className="col-3">
                  <BrowserButton icon="firefox" title="Mozilla Firefox" href={SETUP_FIREFOX_URL} />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 mb-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="float-right text-right">
                <button type="button" className="btn btn-outline-primary" onClick={viewConfiguration}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(BrowserPage);

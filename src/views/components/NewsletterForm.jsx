const React = require('react');

const Icon = require('./Icon');

class NewsletterForm extends React.Component {
  render() {
    const FORM_URL = 'https://cubicle6.us12.list-manage.com/subscribe/post?u=db3c56f3d58860c250de92d92&amp;id=fad5559749';
    return (
      <form action={FORM_URL} method="post" name="mc-embedded-subscribe-form" className="form" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Icon icon="email-outline" />
              </span>
            </div>

            <input type="email" value="" name="EMAIL" className="form-control" placeholder="Your email address" />

            <div className="input-group-append">
              <input type="submit" value="Subscribe" name="subscribe" className="btn btn-secondary" />
            </div>
          </div>

          { /* Keep the bots away... */ }
          <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
            <input type="text" name="b_db3c56f3d58860c250de92d92_fad5559749" tabIndex="-1" value="" />
          </div>
        </div>
      </form>
    );
  }
}

module.exports = NewsletterForm;

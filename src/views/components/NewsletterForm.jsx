const React = require('react');

class NewsletterForm extends React.Component {
  render() {
    const FORM_URL = 'https://cubicle6.us12.list-manage.com/subscribe/post?u=db3c56f3d58860c250de92d92&amp;id=fad5559749';
    return (
      <form action={FORM_URL} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2>Get occassional updates on Interrobang</h2>
          
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
          </div>
          
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          
          { /* Keep the bots away... */ }
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_db3c56f3d58860c250de92d92_fad5559749" tabindex="-1" value="" />
          </div>
          
          <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
          </div>
        </div>
      </form>
    );
  }
}

module.exports = NewsletterForm;

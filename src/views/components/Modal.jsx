const React = require('react');
const { isEmpty } = require('lodash');

class Modal extends React.Component {
  render() {
    const { id, title, size, children, buttons } = this.props;

    const sizeClassName = !isEmpty(size) ? `modal-${size}` : '';

    return (
      <div className="modal fade shadow-16dp" id={id} tabIndex="-1" role="dialog">
        <div className={`modal-dialog modal-dialog-centered ${sizeClassName}`} role="document">
          <div className="modal-content align-self-stretch">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.Body = (props) => (
  <div className="modal-body">{props.children}</div>
);

Modal.Footer = (props) => (
  <div className="modal-footer">{props.children}</div>
);

module.exports = Modal;

const React = require('react');

class Modal extends React.Component {
  render() {
    const { id, title, children, buttons } = this.props;
    
    return (
      <div className="modal fade" id={id} tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Modal;

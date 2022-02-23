import React from "react";

//  reactstrap components
import { Navbar, Container } from "react-bootstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFfull: false
    };
  }

  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-minimize d-inline">
              <button className="btn-fullscreen" onClick={this.props.goFull}>
                {!this.props.isFull ? (
                  <i className="fa fa-expand-arrows-alt"></i>
                ) : (
                  <i className="fa compress-arrows-alt"></i>
                )}
              </button>
            </div>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default AdminNavbar;
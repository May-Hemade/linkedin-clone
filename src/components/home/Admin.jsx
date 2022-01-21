import React from "react";

import AdminNavbar from "./AdminNavbar";

import Fullscreen from "react-full-screen";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false
    };
  }

  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  };
  render() {
    return (
      <Fullscreen
        enabled={this.state.isFull}
        onChange={(isFull) => this.setState({ isFull })}
      >
        <div className="wrapper">
          <div className="main-panel">
            <AdminNavbar
              {...this.props}
              isFull={this.state.isFull}
              goFull={this.goFull}
            />
          </div>
        </div>
      </Fullscreen>
    );
  }
}

export default Admin;
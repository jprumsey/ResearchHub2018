import React from "react";

export default class PersonsDump extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    (async () => {
      const res = await fetch("http://localhost:5000/person");
      const data = await res.json();
      this.setState({ data });
    })();
  }

  _handleOnClick = () => {
    // stuff here
  };

  render() {
    const { data } = this.state;
    return null;
    //<div onClick={this._handleOnClick}>{JSON.stringify(data)}</div>;
  }
}

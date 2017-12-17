import React from 'react';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        Hi
      </div>
    );
  }
}

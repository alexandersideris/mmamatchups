import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {division: 'popular'};
  }

  render() {
    return(
      <div>
        NavigationBar
      </div>
    );
  }
}

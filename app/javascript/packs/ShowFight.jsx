import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

export default class ShowFight extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  vote(){
    console.log("Hello from vote.")
  }

  render() {
    var fighter_one = this.props.fighter_one
    var fighter_two = this.props.fighter_two
    var upvotes = this.props.upvotes
    return (
      <div>

        <div style={{display: 'flex', flexWrap: 'nowrap'}}>

          <div style={{textAlign: 'center', margin: '10px'}}>
            <img src={fighter_one.img_url} style={{backgroundColor: 'gray'}} />
            <p>{fighter_one.name}</p>
            <p>{fighter_one.rank}</p>
            <p>{fighter_one.fight_record}</p>
          </div>

          <div style={{textAlign: 'center', margin: '10px'}}>
            <img src={fighter_two.img_url} style={{backgroundColor: 'gray'}}/>
            <p>{fighter_two.name}</p>
            <p>{fighter_two.rank}</p>
            <p>{fighter_two.fight_record}</p>
          </div>
        </div>

        <div style={{display: 'flex', textAlign: 'center', }}>
          <p>Upvotes {upvotes}</p>
          <Button color="primary" onClick={this.vote}>
            I want to see this fight!
          </Button>
        </div>

      </div>
    );
  }
}

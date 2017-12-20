import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'

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
      <div style={{ border: 'black', backgroundColor: ''}}>

        <div style={{display: 'flex', flexWrap: 'nowrap', backgroundColor: ''}}>

          <div className="col-lg-6" style={{textAlign: 'center', margin: '10px'}}>
            <img responsive src={fighter_one.img_url} style={{backgroundColor: 'gray'}} />
            <p style={{fontSize: 20, margin: 10}}>{fighter_one.name}</p>
            <p style={{fontSize: 17, margin: 10}}>{fighter_one.rank}</p>
            <p style={{fontSize: 15, margin: 10}}>{fighter_one.fight_record}</p>
          </div>

          <div className="col-lg-6" style={{textAlign: 'center', margin: '10px'}}>
            <img responsive src={fighter_two.img_url} style={{backgroundColor: 'gray'}}/>
            <p style={{fontSize: 20, margin: 10}}>{fighter_two.name}</p>
            <p style={{fontSize: 17, margin: 10}}>{fighter_two.rank}</p>
            <p style={{fontSize: 15, margin: 10}}>{fighter_two.fight_record}</p>
          </div>
        </div>

        <div style={{textAlign: 'center', backgroundColor: '', marginBottom: '150px'}}>
          <p style={{fontSize: 20, marginBottom: 10}}>Upvotes: {upvotes}</p>
          <Button bsStyle="success">I want to see this fight!</Button>
        </div>

      </div>
    );
  }
}

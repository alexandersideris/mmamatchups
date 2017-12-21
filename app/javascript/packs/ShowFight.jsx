import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'

export default class ShowFight extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
  }

  like(){
    if(this.props.current_user == null){
      alert('You need to sign in to vote mate!    :)');
    }else{
      console.log(this.props.current_user.name+ " liked fight "+this.props.fight)
      var url = "http://www.mmamatchups.herokuapp.com/fights/vote?id="+this.props.fight+'&user_id='+this.props.current_user.id
      console.log(url)
      var fight = this.props.fight;
      var ctx = this.props.context
      fetch(url)
        .then((response) => {
          if(response.status==200){
            ctx.setState({
              has_voted: fight,
              has_unvoted: '',
            });
          }
        })
    }
  }

  unlike(){
    console.log(this.props.current_user.name+ " unliked fight "+this.props.fight)
    var url = "http://www.mmamatchups.herokuapp.com/fights/unvote?id="+this.props.fight+'&user_id='+this.props.current_user.id
    console.log(url)
    var fight = this.props.fight;
    var ctx = this.props.context
    fetch(url)
      .then((response) => {
        if(response.status==200){
          ctx.setState({
            has_unvoted: fight,
            has_voted: '',
          });
        }
        console.log(fight)
      })
  }

  render() {

    var upvotes = this.props.upvotes;
    var has_voted = this.props.has_voted;
    var fight = this.props.fight
    var fighter_one = this.props.fighter_one
    var fighter_two = this.props.fighter_two
    var upvotes = this.props.upvotes
    if(this.props.has_voted == 'true'){
      return (
        <div style={{ border: 'black', backgroundColor: ''}}>

          <div style={{display: 'flex', flexWrap: 'nowrap', backgroundColor: ''}}>

            <div className="col-lg-6" style={{textAlign: 'center', margin: '10px'}}>
              <img responsive='true' src={fighter_one.img_url} style={{backgroundColor: 'gray'}} />
              <p style={{fontSize: 20, margin: 10}}>{fighter_one.name}</p>
              <p style={{fontSize: 17, margin: 10}}>{fighter_one.rank}</p>
              <p style={{fontSize: 15, margin: 10}}>{fighter_one.fight_record}</p>
            </div>

            <div className="col-lg-6" style={{textAlign: 'center', margin: '10px'}}>
              <img responsive='true' src={fighter_two.img_url} style={{backgroundColor: 'gray'}}/>
              <p style={{fontSize: 20, margin: 10}}>{fighter_two.name}</p>
              <p style={{fontSize: 17, margin: 10}}>{fighter_two.rank}</p>
              <p style={{fontSize: 15, margin: 10}}>{fighter_two.fight_record}</p>
            </div>
          </div>

          <div style={{textAlign: 'center', backgroundColor: '', marginBottom: '150px'}}>
            <p style={{fontSize: 20, marginBottom: 10}}>Upvotes: {upvotes}</p>
            <Button onClick={()=>this.unlike()} bsStyle="primary">Unvote</Button>
          </div>

        </div>
      );

    }else{
      return (
        <div style={{ border: 'black', backgroundColor: ''}}>

          <div style={{display: 'flex', flexWrap: 'nowrap', backgroundColor: ''}}>

            <div className="col-lg-6" style={{textAlign: 'center', margin: '10px'}}>
              <img responsive='true' src={fighter_one.img_url} style={{backgroundColor: 'gray'}} />
              <p style={{fontSize: 20, margin: 10}}>{fighter_one.name}</p>
              <p style={{fontSize: 17, margin: 10}}>{fighter_one.rank}</p>
              <p style={{fontSize: 15, margin: 10}}>{fighter_one.fight_record}</p>
            </div>

            <div className="col-lg-6" style={{textAlign: 'center', margin: '10px'}}>
              <img responsive='true' src={fighter_two.img_url} style={{backgroundColor: 'gray'}}/>
              <p style={{fontSize: 20, margin: 10}}>{fighter_two.name}</p>
              <p style={{fontSize: 17, margin: 10}}>{fighter_two.rank}</p>
              <p style={{fontSize: 15, margin: 10}}>{fighter_two.fight_record}</p>
            </div>
          </div>

          <div style={{textAlign: 'center', backgroundColor: '', marginBottom: '150px'}}>
            <p style={{fontSize: 20, marginBottom: 10}}>Upvotes: {upvotes}</p>
            <Button ref="button" onClick={()=>this.like()} bsStyle="success">I want to see this fight!</Button>
          </div>

        </div>
      );
    }
  }
}

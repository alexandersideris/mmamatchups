import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ShowFight from './ShowFight';
import NavigationBar from './NavigationBar';
import {Button, Glyphicon} from 'react-bootstrap'


class Fights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {division: 'Popular', the_fighter: '', has_voted: '', has_unvoted: '', superfights: 'false'};
    this.render = this.render.bind(this);
    this.buyButtonPressed = this.buyButtonPressed.bind(this);
  }

  buyButtonPressed(){
    alert("Sorry this feature is not ready yet. It will be ready really soon!")
    console.log("lets go")
    if(this.props.current_user == null){
      //console.log(this.props.current_user.name+ " liked fight "+this.props.fight)
      var url = "/fights/subscribe?name="+'undefined'+'&user_id='+'undefined'
      //console.log(url)
      fetch(url)
        .then((response) => {
          if(response.status==200){
          }
        })

    }else{
      console.log(this.props.current_user)
      //console.log(this.props.current_user.name+ " liked fight "+this.props.fight)
      var url = "/fights/subscribe?name="+this.props.current_user.name+'&user_id='+this.props.current_user.id
      //console.log(url)

      fetch(url)
        .then((response) => {
          if(response.status==200){
          }
        })
    }
  }

  render() {
    var isMobile='false'
    if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)){
      isMobile = 'true'
    }
    var has_voted = this.state.has_voted
    var has_unvoted = this.state.has_unvoted
    var division = this.state.division
    var the_fighter = this.state.the_fighter
    var fights = this.props.fights
    var fighters = this.props.fighters
    var state = this.state
    var c_user = this.props.current_user
    var superfights = this.state.superfights

    var title = 'Popular matchups.'
    if (division == 'None' && superfights!='true'){
      title = 'Popular '+fighters.find(function(e){ return e.id == the_fighter }).name+' matchups.'
      fights = fights.filter(function(e){
        return e.fighter_one_id == the_fighter || e.fighter_two_id == the_fighter;
      })
    }else if (division != 'Popular' && superfights!='true'){
      title = 'Popular '+division+' matchups.'
      fights = fights.filter(function(e){
        return e.division == division;
      })
    }else if (superfights=='true'){
      title = 'Popular superfights.'
    }

    if(has_voted != ''){
      var f = fights.find(function(e){ return e.id == has_voted; })
      f.upvotes = f.upvotes + 1
      f.has_voted = 'true'
      f.save
      this.setState({has_voted: ''});
    }
    if(has_unvoted != ''){
      var f = fights.find(function(e){ return e.id == has_unvoted; })
      f.upvotes = f.upvotes - 1
      f.has_voted = 'false'
      f.save
      this.setState({has_unvoted: ''});
    }
    var context = this;

    //Normal mode
    if(this.state.superfights != 'true'){
      if(isMobile=='true'){

        //User is on mobile and not on Superfights page
        return(
          <div>
            <NavigationBar isMobile={isMobile} fighters = { fighters } context = { context } current_user = { c_user }/>
            <div style={{marginTop: '100px'}}>
              <div className="container">
                <div className="row">
                  <div>
                    <h1 style={{minWidth: '1140px', fontSize: 35, textAlign: 'center', paddingBottom: 50, paddingTop: 50 }}>{title}</h1>
                    <div>
                      {fights.map(function(fight){
                        return(
                          <ShowFight
                            isMobile={isMobile}
                            context = { context }
                            current_user = {c_user}
                            has_voted = { fight.has_voted }
                            fight = { fight.id }
                            fighter_one = { fighters.find(function(e){ return e.id == fight.fighter_one_id; })}
                            fighter_two = { fighters.find(function(e){ return e.id == fight.fighter_two_id; })}
                            upvotes = {fight.upvotes}>
                          </ShowFight>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        );
      }else{

        //User is not on mobile and not on Superfights page
        return(
          <div>
            <NavigationBar isMobile={isMobile} fighters = { fighters } context = { context } current_user = { c_user }/>
            <div style={{marginTop: '100px'}}>
              <div className="container">
                <div className="row">
                  <div>
                    <h1 style={{minWidth: '1140px', fontSize: 35, textAlign: 'center', paddingBottom: 50 }}>{title}</h1>
                    <div>
                      {fights.map(function(fight){
                        return(
                          <ShowFight
                            isMobile={isMobile}
                            context = { context }
                            current_user = {c_user}
                            has_voted = { fight.has_voted }
                            fight = { fight.id }
                            fighter_one = { fighters.find(function(e){ return e.id == fight.fighter_one_id; })}
                            fighter_two = { fighters.find(function(e){ return e.id == fight.fighter_two_id; })}
                            upvotes = {fight.upvotes}>
                          </ShowFight>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        );
      }
    }else{
      
      if(isMobile=='true'){

        // User is on mobile and on Superfights page
        return(
          <div>
            <NavigationBar isMobile={isMobile} fighters = { fighters } context = { context } current_user = { c_user }/>
            <div style={{marginTop: '100px'}}>
              <div className="container">
                <div className="row">
                  <div style={{minWidth: '1140px'}}>
                    <h1 style={{fontSize: 35, textAlign: 'center', paddingBottom: 50, paddingTop: 50 }}>{title}</h1>
                    <div style={{textAlign: 'center'}}>
                      <h2>No superfights have been created yet.</h2>
                      <p style={{fontSize: 25}}>Unlock Sean Shelby's shoes and create your own fantasy superfights and fight cards.</p>
                      <p style={{fontSize: 25}}>It costs $5/month, because I like money. Also I am broke.</p>
                      <p style={{fontSize: 25}}>As a wise man once said, "You do what you got to do, job is job."  - Wanderlei Silva</p>
                      <img responsive='true' src="http://www.timpriceblog.com/wp-content/uploads/2013/04/old-shoes1.png" />
                      <Button style={{ textAlign: 'center', fontSize: 30}} bsStyle="success" onClick={()=>this.buyButtonPressed()}><Glyphicon glyph='credit-card'/>     Buy now!</Button>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        );
      }else{

        // User is on Desktop and on Superfights page
        return(
          <div>
            <NavigationBar isMobile={isMobile} fighters = { fighters } context = { context } current_user = { c_user }/>
            <div style={{marginTop: '100px'}}>
              <div className="container">
                <div className="row">
                  <div>
                    <h1 style={{minWidth: '1140px', fontSize: 35, textAlign: 'center', paddingBottom: 50, paddingTop: 50 }}>{title}</h1>
                    <div style={{textAlign: 'center'}}>
                      <h3>No superfights has been created yet.</h3>
                      <p style={{fontSize: 16}}>Unlock Sean Shelby's shoes and create your own fantasy superfights and fight cards.</p>
                      <p style={{fontSize: 16}}>It costs $5/month, because I like money and because I am fucking broke atm.</p>
                      <img responsive='true' src="http://www.timpriceblog.com/wp-content/uploads/2013/04/old-shoes1.png" />
                      <Button style={{ textAlign: 'center', fontSize: 30}} bsStyle="success" onClick={()=>this.buyButtonPressed()}><Glyphicon glyph='credit-card'/>     Buy now!</Button>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        );

      }
      
      
    }
      
  }
}


// This is to the data passed from the index.html.erb file to React. The data passed is all the fights and all the fighters.
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('fights_data')
  const data = JSON.parse(node.getAttribute('data'))

  const node_two = document.getElementById('fighters_data')
  const data_two = JSON.parse(node_two.getAttribute('data'))

  const node_three = document.getElementById('current_user')
  const data_three = JSON.parse(node_three.getAttribute('data'))

  ReactDOM.render(
   <Fights fights={data} fighters={data_two} current_user={data_three}/>,
   document.body.appendChild(document.createElement('div')),
  )
})

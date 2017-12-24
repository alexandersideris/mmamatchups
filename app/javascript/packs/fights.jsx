import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ShowFight from './ShowFight';
import NavigationBar from './NavigationBar';

class Fights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {division: 'Popular', the_fighter: '', has_voted: '', has_unvoted: ''};
    this.render = this.render.bind(this);
  }



  render() {
    var isMobile='false'
    var paddingTop = 0
    if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)){
      isMobile = 'true'
      paddingTop = 50
    }
    console.log(paddingTop)
    var has_voted = this.state.has_voted
    var has_unvoted = this.state.has_unvoted
    var division = this.state.division
    var the_fighter = this.state.the_fighter
    var fights = this.props.fights
    var fighters = this.props.fighters
    var state = this.state
    var c_user = this.props.current_user
    var title = 'Popular matchups.'
    if (division == 'None'){
      title = 'Popular '+fighters.find(function(e){ return e.id == the_fighter }).name+' matchups.'
      fights = fights.filter(function(e){
        return e.fighter_one_id == the_fighter || e.fighter_two_id == the_fighter;
      })
    }else if (division != 'Popular'){
      title = 'Popular '+division+' matchups.'
      fights = fights.filter(function(e){
        return e.division == division;
      })
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
    if(isMobile=='true'){
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

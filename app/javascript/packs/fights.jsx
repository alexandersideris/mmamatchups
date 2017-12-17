// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ShowFight extends React.Component {
  constructor(props) {
    super(props);
    console.log('Hello from component...')
    console.log(props.fighter_one)
    console.log(props.fighter_two)
    this.render = this.render.bind(this);
  }

  render() {
    var fighter_one = this.props.fighter_one
    var fighter_two = this.props.fighter_two
    return (
      <div style={{display: 'flex', flexWrap: 'nowrap'}}>
        <div style={{textAlign: 'center', margin: '10px'}}>
          <img src={fighter_one.img_url} />
          <p>{fighter_one.name}</p>
        </div>
        <div style={{textAlign: 'center', margin: '10px'}}>
          <img src={fighter_two.img_url} />
          <p>{fighter_two.name}</p>
        </div>
      </div>
    );
  }
}

class Fights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {division: 'popular'};
    this.render = this.render.bind(this);
  }



  render() {
    console.log(this.props.fights)
    console.log(this.props.fighters)

    var fights = this.props.fights
    var fighters = this.props.fighters

    console.log(this.props.fights.length);
    return(
      <div>
        {fights.map(function(fight){
          return(
            <ShowFight
              style={{width: '100px'}}
              fighter_one = { fighters.find(function(e){ return e.id == fight.fighter_one_id; })}
              fighter_two = { fighters.find(function(e){ return e.id == fight.fighter_two_id; })}
              upvotes = {fight.upvotes}>
            </ShowFight>
          );
        })}
      </div>
    );

  }
}


// This is to the data passed from the index.html.erb file to React. The data passed is all the fights and all the fighters.
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('fights_data')
  const data = JSON.parse(node.getAttribute('data'))

  const node_two = document.getElementById('fighters_data')
  const data_two = JSON.parse(node_two.getAttribute('data'))

  ReactDOM.render(
   <Fights fights={data} fighters={data_two}/>,
   document.body.appendChild(document.createElement('div')),
  )
})

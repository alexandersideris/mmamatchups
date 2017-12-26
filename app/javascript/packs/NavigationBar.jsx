import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon, DropdownButton} from 'react-bootstrap'
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.changeDivision = this.changeDivision.bind(this);
    this.changeFighter = this.changeFighter.bind(this);
    this.superfight = this.superfight.bind(this);
    this.updateFights = this.updateFights.bind(this);
  }

  changeDivision(division){
    /*this.props.context.setState({
      division: division,
      the_fighter: '',
      superfights: 'false'
    });*/
    this.updateFights(division, '', 'false')
  }

  changeFighter(the_fighter){
    /*this.props.context.setState({
      division: "None",
      the_fighter: the_fighter,
      superfights: 'false'
    });*/
    this.updateFights("None", the_fighter, 'false')
  }

  superfight(){
    /*this.props.context.setState({
      division: "None",
      the_fighter: '',
      superfights: 'true'
    });*/
    this.updateFights("None", '', 'true')
  }

  updateFights(division, the_fighter, superfights){
    var context = this.props.context
    var url = '/fights/get_fights?division='+division+'&superfights='+superfights+'&the_fighter='+the_fighter

    fetch(url)
      .then((response) => {
        console.log(response)
        if(response.status==200){
          return(response.json())
        }
      })
      .then((res) => {
        //console.log(res)
        context.setState({
              fights: res,
              division: division,
              the_fighter: the_fighter,
              superfights: superfights,
            });
      })

  }

  render() {
    
    const fontsMobile = {
        fontSize: 40,
        paddingTop: 30,
        paddingBottom: 30,
    };

    var fighters = this.props.fighters;
    var self = this;
    if(this.props.isMobile=='true'){
      if(this.props.current_user == null){

        // User is using mobile and is not logged in
        return (
          <div>
            <Navbar inverse collapseOnSelect fixedTop className="bs-navbar-collapse">
              <Navbar.Header>
                <Navbar.Brand>
                  {/*<a href="#"><img src="https://i.imgur.com/Xs3GP6z.png" style={{width: '65px', marginBottom: '5px'}} /></a>*/}
                  <a style={{color: 'white', fontSize: 40, marginTop: 20}} href="#" onClick={()=>this.changeDivision('Popular')}><Glyphicon glyph="fire" /> MMAmatchups.net</a>
                </Navbar.Brand>
                <Navbar.Toggle style={{height: 100, paddingLeft:100, paddingRight:100, backgroundColor: '', borderStyle: 'solid', borderColor: 'white'}}/>
              </Navbar.Header>
              <Navbar.Collapse style={{maxHeight: '800px'}}>
                <Nav>
                  <NavDropdown eventKey={3} title="Divisions" id="basic-nav-dropdown" style={fontsMobile}>
                    <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>this.changeDivision('Flyweight')}>Flyweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.2} onSelect={()=>this.changeDivision('Bantamweight')}>Bantamweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.3} onSelect={()=>this.changeDivision('Featherweight')}>Featherweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.4} onSelect={()=>this.changeDivision('Lightweight')}>Lightweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.5} onSelect={()=>this.changeDivision('Welterweight')}>Welterweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.6} onSelect={()=>this.changeDivision('Middleweight')}>Middleweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.7} onSelect={()=>this.changeDivision('Light Heavyweight')}>Light Heavyweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.8} onSelect={()=>this.changeDivision('Heavyweight')}>Heavyweight</MenuItem>
                    <MenuItem divider />
                    <MenuItem style={fontsMobile} eventKey={3.9} onSelect={()=>this.changeDivision("Women\'s Strawweight")}>Women's Strawweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.10} onSelect={()=>this.changeDivision('Women\'s Flyweight')}>Women's Flyweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.11} onSelect={()=>this.changeDivision('Women\'s Bantamweight')}>Women's Bantamweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.12} onSelect={()=>this.changeDivision('Women\'s Featherweight')}>Women's Featherweight</MenuItem>
                  </NavDropdown>

                  <NavDropdown style={fontsMobile} eventKey={4} title="Fighters" id="basic-nav-dropdown">
                    <NavDropdown style={fontsMobile} eventKey={3} title="Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Flyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Bantamweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Featherweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Featherweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Lightweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Lightweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Welterweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Welterweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Middleweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Middleweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Light Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Light Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                    <MenuItem divider />

                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Strawweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Strawweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Flyweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Bantamweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Featherweight" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Featherweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                  </NavDropdown>
                </Nav>
                <Nav>
                  <MenuItem style={{fontSize: 40, paddingTop: 10, paddingBottom: 10}} eventKey={2} onSelect={()=> self.superfight()}>Superfights</MenuItem>
                </Nav>
                <Nav pullRight>
                  <MenuItem style={{fontSize: 30, paddingBottom: 10}} eventKey={1} href="/auth/google_oauth2">   <Glyphicon glyph="log-in" />   Sign In With Google</MenuItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
      }else{

        // User is using mobile and is logged in
        return (
          <div>
            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  {/*<a href="#"><img src="https://i.imgur.com/Xs3GP6z.png" style={{width: '65px', marginBottom: '5px'}} /></a>*/}
                  <a style={{color: 'white', fontSize: 40, marginTop: 20}} href="#" onClick={()=>this.changeDivision('Popular')}><Glyphicon glyph="fire" /> MMAmatchups.net</a>
                </Navbar.Brand>
                <Navbar.Toggle style={{height: 100, paddingLeft:100, paddingRight:100, backgroundColor: '', borderStyle: 'solid', borderColor: 'white'}}/>
              </Navbar.Header>
              <Navbar.Collapse style={{maxHeight: '800px'}}>
                <Nav>
                  <NavDropdown style={fontsMobile} eventKey={3} title="Divisions" id="basic-nav-dropdown">
                    <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>this.changeDivision('Flyweight')}>Flyweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.2} onSelect={()=>this.changeDivision('Bantamweight')}>Bantamweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.3} onSelect={()=>this.changeDivision('Featherweight')}>Featherweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.4} onSelect={()=>this.changeDivision('Lightweight')}>Lightweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.5} onSelect={()=>this.changeDivision('Welterweight')}>Welterweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.6} onSelect={()=>this.changeDivision('Middleweight')}>Middleweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.7} onSelect={()=>this.changeDivision('Light Heavyweight')}>Light Heavyweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.8} onSelect={()=>this.changeDivision('Heavyweight')}>Heavyweight</MenuItem>
                    <MenuItem style={fontsMobile} divider />
                    <MenuItem style={fontsMobile} eventKey={3.9} onSelect={()=>this.changeDivision("Women\'s Strawweight")}>Women's Strawweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.10} onSelect={()=>this.changeDivision('Women\'s Flyweight')}>Women's Flyweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.11} onSelect={()=>this.changeDivision('Women\'s Bantamweight')}>Women's Bantamweight</MenuItem>
                    <MenuItem style={fontsMobile} eventKey={3.12} onSelect={()=>this.changeDivision('Women\'s Featherweight')}>Women's Featherweight</MenuItem>
                  </NavDropdown>

                  <NavDropdown style={fontsMobile} eventKey={4} title="Fighters" id="basic-nav-dropdown">
                    <NavDropdown style={fontsMobile} eventKey={3} title="Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Flyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Bantamweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Featherweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Featherweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Lightweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Lightweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Welterweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Welterweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Middleweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Middleweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Light Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Light Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                    <MenuItem divider />

                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Strawweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Strawweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Flyweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Bantamweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown style={fontsMobile} eventKey={3} title="Women's Featherweight" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Featherweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem style={fontsMobile} eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                  </NavDropdown>
                </Nav>
                <Nav>
                  <MenuItem style={{fontSize: 40, paddingTop: 10, paddingBottom: 10}} eventKey={2} onSelect={()=> self.superfight()}>Superfights</MenuItem>
                </Nav>
                <Nav pullRight>
                  <MenuItem style={{fontSize: 30, paddingBottom: 10}} eventKey={2} href="signout"><Glyphicon glyph="log-out" />   Log Out</MenuItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
      }
    }else{
      if(this.props.current_user == null){

        // User is using Desktop and is not logged in
        return (
          <div>
            <Navbar inverse collapseOnSelect fixedTop className="bs-navbar-collapse">
              <Navbar.Header>
                <Navbar.Brand>
                  {/*<a href="#"><img src="https://i.imgur.com/Xs3GP6z.png" style={{width: '65px', marginBottom: '5px'}} /></a>*/}
                  <a style={{color: 'white'}} href="#" onClick={()=>this.changeDivision('Popular')}><Glyphicon glyph="fire" /> MMAmatchups.net</a>
                </Navbar.Brand>
                <Navbar.Toggle style={{margin: 20}}/>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown eventKey={3} title="Divisions" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} onSelect={()=>this.changeDivision('Flyweight')}>Flyweight</MenuItem>
                    <MenuItem eventKey={3.2} onSelect={()=>this.changeDivision('Bantamweight')}>Bantamweight</MenuItem>
                    <MenuItem eventKey={3.3} onSelect={()=>this.changeDivision('Featherweight')}>Featherweight</MenuItem>
                    <MenuItem eventKey={3.4} onSelect={()=>this.changeDivision('Lightweight')}>Lightweight</MenuItem>
                    <MenuItem eventKey={3.5} onSelect={()=>this.changeDivision('Welterweight')}>Welterweight</MenuItem>
                    <MenuItem eventKey={3.6} onSelect={()=>this.changeDivision('Middleweight')}>Middleweight</MenuItem>
                    <MenuItem eventKey={3.7} onSelect={()=>this.changeDivision('Light Heavyweight')}>Light Heavyweight</MenuItem>
                    <MenuItem eventKey={3.8} onSelect={()=>this.changeDivision('Heavyweight')}>Heavyweight</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.9} onSelect={()=>this.changeDivision("Women\'s Strawweight")}>Women's Strawweight</MenuItem>
                    <MenuItem eventKey={3.10} onSelect={()=>this.changeDivision('Women\'s Flyweight')}>Women's Flyweight</MenuItem>
                    <MenuItem eventKey={3.11} onSelect={()=>this.changeDivision('Women\'s Bantamweight')}>Women's Bantamweight</MenuItem>
                    <MenuItem eventKey={3.12} onSelect={()=>this.changeDivision('Women\'s Featherweight')}>Women's Featherweight</MenuItem>
                  </NavDropdown>

                  <NavDropdown eventKey={4} title="Fighters" id="basic-nav-dropdown">
                    <NavDropdown eventKey={3} title="Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Flyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Bantamweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Featherweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Featherweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Lightweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Lightweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Welterweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Welterweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Middleweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Middleweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Light Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Light Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                    <MenuItem divider />

                    <NavDropdown eventKey={3} title="Women's Strawweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Strawweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Women's Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Flyweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Women's Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Bantamweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Women's Featherweight" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Featherweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                  </NavDropdown>
                </Nav>
                <Nav>
                  <MenuItem eventKey={2} onSelect={()=> self.superfight()}><Glyphicon glyph="fire" />   Superfights</MenuItem>
                </Nav>
                <Nav pullRight>
                  <MenuItem eventKey={1} href="/auth/google_oauth2"><Glyphicon glyph="log-in" />   Sign In With Google</MenuItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
      }else{

        // User is using Desktop and is logged in
        return (
          <div>
            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  {/*<a href="#"><img src="https://i.imgur.com/Xs3GP6z.png" style={{width: '65px', marginBottom: '5px'}} /></a>*/}
                  <a style={{color: 'white'}} href="#" onClick={()=>this.changeDivision('Popular')}><Glyphicon glyph="fire" /> MMAmatchups.net</a>
                </Navbar.Brand>
                <Navbar.Toggle style={{margin: 20}}/>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown  eventKey={3} title="Divisions" id="basic-nav-dropdown">
                    <MenuItem  eventKey={3.1} onSelect={()=>this.changeDivision('Flyweight')}>Flyweight</MenuItem>
                    <MenuItem  eventKey={3.2} onSelect={()=>this.changeDivision('Bantamweight')}>Bantamweight</MenuItem>
                    <MenuItem  eventKey={3.3} onSelect={()=>this.changeDivision('Featherweight')}>Featherweight</MenuItem>
                    <MenuItem  eventKey={3.4} onSelect={()=>this.changeDivision('Lightweight')}>Lightweight</MenuItem>
                    <MenuItem  eventKey={3.5} onSelect={()=>this.changeDivision('Welterweight')}>Welterweight</MenuItem>
                    <MenuItem  eventKey={3.6} onSelect={()=>this.changeDivision('Middleweight')}>Middleweight</MenuItem>
                    <MenuItem  eventKey={3.7} onSelect={()=>this.changeDivision('Light Heavyweight')}>Light Heavyweight</MenuItem>
                    <MenuItem  eventKey={3.8} onSelect={()=>this.changeDivision('Heavyweight')}>Heavyweight</MenuItem>
                    <MenuItem  divider />
                    <MenuItem  eventKey={3.9} onSelect={()=>this.changeDivision("Women\'s Strawweight")}>Women's Strawweight</MenuItem>
                    <MenuItem  eventKey={3.10} onSelect={()=>this.changeDivision('Women\'s Flyweight')}>Women's Flyweight</MenuItem>
                    <MenuItem  eventKey={3.11} onSelect={()=>this.changeDivision('Women\'s Bantamweight')}>Women's Bantamweight</MenuItem>
                    <MenuItem  eventKey={3.12} onSelect={()=>this.changeDivision('Women\'s Featherweight')}>Women's Featherweight</MenuItem>
                  </NavDropdown>

                  <NavDropdown  eventKey={4} title="Fighters" id="basic-nav-dropdown">
                    <NavDropdown  eventKey={3} title="Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Flyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Bantamweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Featherweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Featherweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Lightweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Lightweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Welterweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Welterweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Middleweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Middleweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Light Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Light Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Heavyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == 'Heavyweight';
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                    <MenuItem divider />

                    <NavDropdown  eventKey={3} title="Women's Strawweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Strawweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Women's Flyweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Flyweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Women's Bantamweights" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Bantamweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>
                    <NavDropdown  eventKey={3} title="Women's Featherweight" id="basic-nav-dropdown">
                      {fighters.filter(function(e){
                        return e.division == "Women's Featherweight";
                      }).map(function(f){
                        if(f.rank_number == 0){
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>(C) - {f.name}</MenuItem>
                          );
                        }else{
                          return(
                            <MenuItem  eventKey={3.1} onSelect={()=>self.changeFighter(f.id)}>{f.rank_number} - {f.name}</MenuItem>
                          );
                        }

                      })}
                    </NavDropdown>

                  </NavDropdown>
                </Nav>
                <Nav>
                  <MenuItem eventKey={2} onSelect={()=> self.superfight()}><Glyphicon glyph="fire" />   Superfights</MenuItem>
                </Nav>
                <Nav pullRight>
                  <MenuItem eventKey={2} href="signout"><Glyphicon glyph="log-out" />   Log Out</MenuItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
      }
    }
    
  }
}

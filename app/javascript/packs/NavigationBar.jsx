import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon, DropdownButton} from 'react-bootstrap'
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.changeDivision = this.changeDivision.bind(this);
    //console.log("Brow the fighters...");
    //console.log(props.fighters);
    //console.log("bbbbboy")
    //console.log(props.current_user)
  }

  changeDivision(division){
    //console.log(division+" was called.");
    this.props.context.setState({
      division: division
    });
  }

  render() {
    if(this.props.current_user == null){
      return (
        <div>
          <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                {/*<a href="#"><img src="https://i.imgur.com/Xs3GP6z.png" style={{width: '65px', marginBottom: '5px'}} /></a>*/}
                <a href="#" onClick={()=>this.changeDivision('Popular')}><Glyphicon glyph="fire" /> Popular</a>
              </Navbar.Brand>
              <Navbar.Toggle />
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

                {/*<NavDropdown eventKey={4} title="Fighters" id="basic-nav-dropdown">
                  <NavDropdown eventKey={3} title="Flyweights" id="basic-nav-dropdown">
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
                </NavDropdown>*/}
              </Nav>
              <Nav pullRight>
                <MenuItem eventKey={1} href="/auth/google_oauth2"><Glyphicon glyph="log-in" />   Sign In With Google</MenuItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }else{
      return (
        <div>
          <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                {/*<a href="#"><img src="https://i.imgur.com/Xs3GP6z.png" style={{width: '65px', marginBottom: '5px'}} /></a>*/}
                <a href="#" onClick={()=>this.changeDivision('Popular')}><Glyphicon glyph="fire" /> Popular</a>
              </Navbar.Brand>
              <Navbar.Toggle />
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

                {/*<NavDropdown eventKey={4} title="Fighters" id="basic-nav-dropdown">
                  <NavDropdown eventKey={3} title="Flyweights" id="basic-nav-dropdown">
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
                </NavDropdown>*/}
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

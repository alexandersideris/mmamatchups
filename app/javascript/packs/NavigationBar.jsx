import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon, DropdownButton} from 'react-bootstrap'
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.changeDivision = this.changeDivision.bind(this);
    console.log("Brow the fighters...");
    console.log(props.fighters);
  }

  changeDivision(division){
    console.log(division+" was called.");
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Glyphicon glyph="fire" /> Home</a>
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

              <NavDropdown eventKey={3} title="Fighters" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Flyweight</MenuItem>
                <MenuItem eventKey={3.2}>Bantamweight</MenuItem>
                <MenuItem eventKey={3.3}>Featherweight</MenuItem>
                <MenuItem eventKey={3.4}>Flyweight</MenuItem>
                <MenuItem eventKey={3.5}>Welterweight</MenuItem>
                <MenuItem eventKey={3.6}>Middleweight</MenuItem>
                <MenuItem eventKey={3.7}>Light Heavyweight</MenuItem>
                <MenuItem eventKey={3.8}>Heavyweight</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.9}>Women's Strawweight</MenuItem>
                <MenuItem eventKey={3.10}>Women's Flyweight</MenuItem>
                <MenuItem eventKey={3.11}>Women's Bantamweight</MenuItem>
                <MenuItem eventKey={3.12}>Women's Featherweight</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#"><Glyphicon glyph="log-in" />   Sign In</NavItem>
              <NavItem eventKey={2} href="#"><Glyphicon glyph="book" />   Sign Up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

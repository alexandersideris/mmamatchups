// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

class FightsControl extends React.Component {
  constructor(props) {
    super(props);
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    //this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    //this.setState({isLoggedIn: false});
  }

  render() {
    //const isLoggedIn = this.state.isLoggedIn;

    //let button = null;
    //if (isLoggedIn) {
      //button = <LogoutButton onClick={this.handleLogoutClick} />;
    //} else {
      //button = <LoginButton onClick={this.handleLoginClick} />;
    //}

    return (
      <div>
        Hello
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

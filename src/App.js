import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.buttonDelete = this.buttonDelete.bind(this);
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  buttonDelete(){
    this.setState({
      banner: '',
    });
  }

  render() {
    let myVariable = <h2>Tuan Le</h2>;
    let myBanner;
    let doTestBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          
          {
            this.state.isOpen && 
            <Header doTestBanner={this.state.banner}/>

          }
          <br></br>
          {
            this.state.isOpen && this.state.banner

          }
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonHandler} >Click Me</button>
          
          <button onClick={this.buttonDelete}>Delete</button>



        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
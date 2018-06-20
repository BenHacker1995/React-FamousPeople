import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';

class App extends Component {
  constructor( props ) {
      super( props );

      this.state = { 
          star: { name: '', role: '' },
          starList: []
              }

  }

  handleChange = ( propertyName ) => ( event ) => {
      this.setState( { star: {
          ...this.state.star,
          [ propertyName ]: event.target.value
      }});
  }

  handleSubmit = ( event ) => {
      event.preventDefault();
      this.setState({ starList: [ ...this.state.starList, this.state.star ]});
      this.setState({ star: { name: '', role: '' }});
      console.log( 'A star was submitted: ', this.state.star );
    }

    render() {
      return (
        <div className="App">
          <Header />
          <NewStar newStar={ this.state.star } change={ this.handleChange } submit={ this.handleSubmit } />
          <StarList starList={ this.state.starList } />
        </div>
      )
    }
  }

export default App;

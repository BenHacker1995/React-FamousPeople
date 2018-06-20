import React, { Component } from 'react';

class Star extends Component {
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
            <form onSubmit={ this.handleSubmit }>
                <input onChange={ this.handleChange( 'name' )} value={ this.state.star.name } placeholder="Name" />
                <input onChange={ this.handleChange( 'role' )} value={ this.state.star.role } placeholder="Role" />
                <p>Name: { this.state.star.name }</p>
                <p>Role: { this.state.star.role }</p>
                <input type="submit" value="Submit" />
                <ul>
                    { this.state.starList.map( star =>
                    <li key={ star.name }>{ star.name } is famous for { star.role }</li>
                    )}
                </ul>
            </form>
        );
    }
}

export default Star;
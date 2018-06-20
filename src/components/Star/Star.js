import React, { Component } from 'react';

class Star extends Component {
    constructor( props ) {
        super( props );

        this.state = { star: { name: 'Jim Carrey', role: 'Ace Ventura: Pet Detective' }}

    }

    handleChange = ( propertyName ) => ( event ) => {
        this.setState( { star: {
            ...this.state.star,
            [ propertyName ]: event.target.value
        }});
    }

    handleSubmit = ( event ) => {
        console.log( 'A star was submitted: ' + this.state.star.name );
        event.preventDefault();
      }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <h2>Famous People</h2>
                <input onChange={ this.handleChange( 'name' )} placeholder="Star Name" />
                <input onChange={ this.handleChange( 'role' )} placeholder="Role" />
                <p>{ this.state.star.name } is famous for { this.state.star.role }</p>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Star;
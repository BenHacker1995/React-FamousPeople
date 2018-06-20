import React, { Component } from 'react';

class NewStar extends Component {
    render() {
        return (
            <form onSubmit={ this.props.submit }>
                <input onChange={ this.props.change( 'name' )} value={ this.props.newStar.name } placeholder="Name" />
                <input onChange={ this.props.change( 'role' )} value={ this.props.newStar.role } placeholder="Role" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NewStar;